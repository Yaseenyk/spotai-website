// Checks every Markdown guide before it is due, so a scheduled publish day can never fail:
//  1. each guide has a valid publish date, a cover image, and a slug that is not a hand-built page;
//  2. links to other guides only point at pages that will already be live on that guide's date;
//  3. one build "as of" the last publish date renders every guide, the guides index and the sitemap.
// Run with: npm run check:schedule (CI runs it on every push).
import { execSync } from 'node:child_process';
import { existsSync, readdirSync, readFileSync } from 'node:fs';

const dir = 'src/content/guides';
const staticGuides = readdirSync('src/pages/guides')
  .filter((f) => f.endsWith('.astro') && !f.startsWith('[') && f !== 'index.astro')
  .map((f) => f.slice(0, -6));
const problems = [];

const guides = readdirSync(dir)
  .filter((f) => f.endsWith('.md'))
  .map((f) => {
    const slug = f.slice(0, -3);
    const text = readFileSync(`${dir}/${f}`, 'utf8');
    const publish = text.match(/^publish:\s*(\d{4}-\d{2}-\d{2})\s*$/m)?.[1];
    const updated = text.match(/^updated:\s*(\d{4}-\d{2}-\d{2})\s*$/m)?.[1];
    const body = text.replace(/^---[\s\S]*?\n---/, '');
    return { slug, publish, updated, text, body };
  });

for (const g of guides) {
  if (!g.publish) problems.push(`${g.slug}: missing or malformed publish date (YYYY-MM-DD)`);
  if (!g.updated) problems.push(`${g.slug}: missing or malformed updated date (YYYY-MM-DD)`);
  if (g.publish && g.updated && g.updated < g.publish) problems.push(`${g.slug}: updated is before publish`);
  if (staticGuides.includes(g.slug)) problems.push(`${g.slug}: same slug as a hand-built page in src/pages/guides`);
  if (!existsSync(`public/og/guides/${g.slug}.png`)) problems.push(`${g.slug}: no cover at public/og/guides/${g.slug}.png (run python scripts/guide-covers.py)`);
}

const live = new Map(guides.map((g) => [g.slug, g.publish]));
for (const g of guides) {
  for (const [, target] of g.text.matchAll(/\/guides\/([a-z0-9-]+)\/?/g)) {
    if (target === g.slug || staticGuides.includes(target)) continue;
    const when = live.get(target);
    if (!when) problems.push(`${g.slug}: links to /guides/${target}/, which does not exist`);
    else if (g.publish && when > g.publish) problems.push(`${g.slug} (${g.publish}): links to /guides/${target}/, not live until ${when}`);
  }
}

if (problems.length) {
  console.error(`Schedule check failed:\n- ${problems.join('\n- ')}`);
  process.exit(1);
}

const last = guides.map((g) => g.publish).sort().at(-1);
console.log(`${guides.length} guides, last publish date ${last}. Building the site as of that day...`);
execSync('npx astro build', { stdio: 'inherit', env: { ...process.env, GUIDES_NOW: `${last}T00:17:00Z` } });

const index = readFileSync('dist/guides/index.html', 'utf8');
const sitemap = readFileSync('dist/sitemap-0.xml', 'utf8');
for (const g of guides) {
  if (!existsSync(`dist/guides/${g.slug}/index.html`)) problems.push(`${g.slug}: page was not built`);
  if (!index.includes(`/guides/${g.slug}/`)) problems.push(`${g.slug}: missing from the guides index`);
  if (!sitemap.includes(`/guides/${g.slug}/`)) problems.push(`${g.slug}: missing from the sitemap`);
}
if (problems.length) {
  console.error(`Schedule check failed:\n- ${problems.join('\n- ')}`);
  process.exit(1);
}
console.log(`OK: all ${guides.length} guides build, appear in the index and the sitemap, and link only to live pages.`);
