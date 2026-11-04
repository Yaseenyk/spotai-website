import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { INDEXED_LANGS } from './src/i18n/indexed.mjs';
import { readdirSync, readFileSync } from 'node:fs';

// Markdown guides carry their own `updated` date; the sitemap uses it as lastmod. Other pages have
// no lastmod, because the scheduled Monday/Thursday builds would otherwise mark every page as changed.
// English guides are src/content/guides/<slug>.md, translations src/content/guides/<code>/<slug>.md;
// the map is keyed by the URL prefix: '<slug>' or '<code>/<slug>'.
const guidesDir = new URL('./src/content/guides/', import.meta.url);
const updatedIn = (dir, prefix) =>
  readdirSync(dir)
    .filter((f) => f.endsWith('.md'))
    .map((f) => [`${prefix}${f.slice(0, -3)}`, readFileSync(new URL(f, dir), 'utf8').match(/^updated:\s*(\S+)/m)?.[1]]);
const guideUpdated = new Map([
  ...updatedIn(guidesDir, ''),
  ...readdirSync(guidesDir, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .flatMap((d) => updatedIn(new URL(`${d.name}/`, guidesDir), `${d.name}/`)),
]);

// Static site on GitHub Pages behind the custom domain in public/CNAME.
export default defineConfig({
  site: 'https://spotai.streamerosai.com',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      // Only indexed languages are listed (see src/i18n/indexed.mjs).
      filter(page) {
        const m = page.match(/^https?:\/\/[^/]+\/([a-z]{2})\//);
        return !m || INDEXED_LANGS.includes(m[1]);
      },
      serialize(item) {
        const m = item.url.match(/^https?:\/\/[^/]+\/(?:([a-z]{2})\/)?guides\/([^/]+)\/$/);
        const updated = m && guideUpdated.get(m[1] ? `${m[1]}/${m[2]}` : m[2]);
        return updated ? { ...item, lastmod: new Date(updated).toISOString() } : { ...item, lastmod: undefined };
      },
    }),
  ],
  build: { inlineStylesheets: 'auto' },
  compressHTML: true,
});
