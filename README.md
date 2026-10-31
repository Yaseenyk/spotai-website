# SpotAI website

Marketing site for SpotAI, an AI gym buddy for members and a management console for gym owners in India.

Astro + GSAP, static HTML. Every section is readable without JavaScript; the animation is on top.

```bash
npm install
npm run dev      # http://localhost:4321/spotai-website/
npm run build    # dist/
```

Deploys to GitHub Pages on every push to `main` (`.github/workflows/deploy.yml`).

- `src/site.ts`: every fact and FAQ answer on the site.
- `public/shots/`: real screenshots of the member app and owner dashboard.
- `public/llms.txt`: the summary for AI crawlers. `robots.txt` and the sitemap point to it.
