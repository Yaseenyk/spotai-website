// Checks every Markdown guide before it is due, so a scheduled publish day can never fail:
//  1. each guide has a valid publish date, a cover image, and a slug that is not a hand-built page;
//     each translation (src/content/guides/<code>/<slug>.md) has an English original with the same publish date;
//  2. links to other guides only point at pages that will already be live on that guide's date;
//  3. one build "as of" the last publish date renders every guide, the guides index and the sitemap,
//     in every language it is written in.
// Run with: npm run check:schedule (CI runs it on every push).
import { execSync } from 'node:child_process';
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { INDEXED_LANGS } from '../src/i18n/indexed.mjs';

const dir = 'src/content/guides';
const LANGS = ['hi', 'te', 'ta', 'kn', 'mr', 'bn'];
const staticGuides = readdirSync('src/pages/guides')
  .filter((f) => f.endsWith('.astro') && !f.startsWith('[') && f !== 'index.astro')
  .map((f) => f.slice(0, -6));
const problems = [];

const read = (folder, code) =>
  readdirSync(folder)
    .filter((f) => f.endsWith('.md'))
    .map((f) => {
      const slug = f.slice(0, -3);
      const text = readFileSync(`${folder}/${f}`, 'utf8');
      const publish = text.match(/^publish:\s*(\d{4}-\d{2}-\d{2})\s*$/m)?.[1];
      const updated = text.match(/^updated:\s*(\d{4}-\d{2}-\d{2})\s*$/m)?.[1];
      const body = text.replace(/^---[\s\S]*?\n---/, '');
      const name = code === 'en' ? slug : `${code}/${slug}`;
      const path = code === 'en' ? `/guides/${slug}/` : `/${code}/guides/${slug}/`;
      return { code, slug, name, path, publish, updated, text, body };
    });

const guides = read(dir, 'en');
const folders = readdirSync(dir, { withFileTypes: true }).filter((d) => d.isDirectory());
for (const d of folders) if (!LANGS.includes(d.name)) problems.push(`${dir}/${d.name}: not a language code (${LANGS.join(', ')})`);
const translations = folders.filter((d) => LANGS.includes(d.name)).flatMap((d) => read(`${dir}/${d.name}`, d.name));
const all = [...guides, ...translations];

for (const g of all) {
  if (!g.publish) problems.push(`${g.name}: missing or malformed publish date (YYYY-MM-DD)`);
  if (!g.updated) problems.push(`${g.name}: missing or malformed updated date (YYYY-MM-DD)`);
  if (g.publish && g.updated && g.updated < g.publish) problems.push(`${g.name}: updated is before publish`);
  if (staticGuides.includes(g.slug)) problems.push(`${g.name}: same slug as a hand-built page in src/pages/guides`);
  if (!existsSync(`public/og/guides/${g.slug}.png`)) problems.push(`${g.name}: no cover at public/og/guides/${g.slug}.png (run python scripts/guide-covers.py)`);
}
const english = new Map(guides.map((g) => [g.slug, g]));
for (const g of translations) {
  const en = english.get(g.slug);
  if (!en) problems.push(`${g.name}: no English guide ${dir}/${g.slug}.md with the same slug`);
  else if (en.publish !== g.publish) problems.push(`${g.name}: publish ${g.publish} differs from the English guide (${en.publish})`);
}

// When each guide page goes live, by language: '<slug>' for English, '<code>/<slug>' for a translation.
const live = new Map(all.map((g) => [g.name, g.publish]));
const guideLink = new RegExp(`/(?:(${LANGS.join('|')})/)?guides/([a-z0-9-]+)/?`, 'g');
for (const g of all) {
  for (const [, code, target] of g.text.matchAll(guideLink)) {
    const linked = code ? `/${code}/guides/${target}/` : `/guides/${target}/`;
    if ((target === g.slug && (code ?? 'en') === g.code) || staticGuides.includes(target)) continue;
    const when = live.get(code ? `${code}/${target}` : target);
    if (!when) problems.push(`${g.name}: links to ${linked}, which does not exist`);
    else if (g.publish && when > g.publish) problems.push(`${g.name} (${g.publish}): links to ${linked}, not live until ${when}`);
  }
}

if (problems.length) {
  console.error(`Schedule check failed:\n- ${problems.join('\n- ')}`);
  process.exit(1);
}

const last = all.map((g) => g.publish).sort().at(-1);
console.log(`${guides.length} guides and ${translations.length} translations, last publish date ${last}. Building the site as of that day...`);
execSync('npx astro build', { stdio: 'inherit', env: { ...process.env, GUIDES_NOW: `${last}T00:17:00Z` } });

const sitemap = readFileSync('dist/sitemap-0.xml', 'utf8');
const indexes = new Map();
const index = (code) => {
  if (!indexes.has(code)) indexes.set(code, readFileSync(code === 'en' ? 'dist/guides/index.html' : `dist/${code}/guides/index.html`, 'utf8'));
  return indexes.get(code);
};
for (const g of all) {
  if (!existsSync(`dist${g.path}index.html`)) problems.push(`${g.name}: page was not built`);
  if (!index(g.code).includes(g.path)) problems.push(`${g.name}: missing from the ${g.code} guides index`);
  // Staged indexing: only INDEXED_LANGS belong in the sitemap; every other language must stay out of it and be noindex.
  if (INDEXED_LANGS.includes(g.code)) {
    if (!sitemap.includes(g.path)) problems.push(`${g.name}: missing from the sitemap`);
  } else {
    if (sitemap.includes(g.path)) problems.push(`${g.name}: ${g.code} is not indexed yet but is in the sitemap`);
    if (existsSync(`dist${g.path}index.html`) && !/noindex/.test(readFileSync(`dist${g.path}index.html`, 'utf8'))) problems.push(`${g.name}: ${g.code} page is missing noindex`);
  }
}
if (problems.length) {
  console.error(`Schedule check failed:\n- ${problems.join('\n- ')}`);
  process.exit(1);
}
console.log(`OK: all ${guides.length} guides and ${translations.length} translations build, appear in their index, and (for indexed languages) the sitemap, and link only to live pages.`);
