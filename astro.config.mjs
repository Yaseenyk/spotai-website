import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { readdirSync, readFileSync } from 'node:fs';

// Markdown guides carry their own `updated` date; the sitemap uses it as lastmod. Other pages have
// no lastmod, because the scheduled Monday/Thursday builds would otherwise mark every page as changed.
const guidesDir = new URL('./src/content/guides/', import.meta.url);
const guideUpdated = new Map(
  readdirSync(guidesDir)
    .filter((f) => f.endsWith('.md'))
    .map((f) => [f.slice(0, -3), readFileSync(new URL(f, guidesDir), 'utf8').match(/^updated:\s*(\S+)/m)?.[1]]),
);

// Static site on GitHub Pages behind the custom domain in public/CNAME.
export default defineConfig({
  site: 'https://spotai.streamerosai.com',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      serialize(item) {
        const slug = item.url.match(/\/guides\/([^/]+)\/$/)?.[1];
        const updated = slug && guideUpdated.get(slug);
        return updated ? { ...item, lastmod: new Date(updated).toISOString() } : { ...item, lastmod: undefined };
      },
    }),
  ],
  build: { inlineStylesheets: 'auto' },
  compressHTML: true,
});
