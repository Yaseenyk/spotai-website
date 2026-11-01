import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Static site on GitHub Pages behind the custom domain in public/CNAME.
export default defineConfig({
  site: 'https://spotai.streamerosai.com',
  trailingSlash: 'always',
  integrations: [sitemap()],
  build: { inlineStylesheets: 'auto' },
  compressHTML: true,
});
