import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Guides written as Markdown. Each one goes live on its `publish` date: the twice-weekly scheduled
// build (.github/workflows/deploy.yml) only renders guides whose date has passed.
const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    h1: z.string(),
    // Who the guide is for, shown on the guides index.
    audience: z.enum(['member', 'owner']),
    // One line for the guides index card.
    blurb: z.string(),
    answer: z.string(),
    publish: z.coerce.date(),
    updated: z.coerce.date(),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).min(1),
    cta: z.object({ label: z.string(), href: z.string(), text: z.string() }),
  }),
});

export const collections = { guides };
