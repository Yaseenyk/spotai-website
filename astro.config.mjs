import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Static site on GitHub Pages at the repo path; a custom domain only needs `site` changed and `base` dropped.
export default defineConfig({
  site: 'https://yaseenyk.github.io',
  base: '/spotai-website',
  trailingSlash: 'always',
  integrations: [sitemap()],
  build: { inlineStylesheets: 'auto' },
  compressHTML: true,
});
