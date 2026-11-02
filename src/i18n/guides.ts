import { getCollection, type CollectionEntry } from 'astro:content';
import { LANGS, type LangCode } from './config';

// Markdown guides per language. English lives at src/content/guides/<slug>.md; a translation at
// src/content/guides/<code>/<slug>.md, with the same slug and publish date. A guide is live in a language
// once that file's publish date has passed. GUIDES_NOW lets a build show the site as it will be on a
// later date (scripts/check-schedule.mjs).
export interface LiveGuide {
  code: LangCode;
  slug: string;
  entry: CollectionEntry<'guides'>;
}

const now = () => new Date(import.meta.env.GUIDES_NOW || Date.now());

function split(id: string): { code: LangCode; slug: string } | undefined {
  const parts = id.split('/');
  if (parts.length === 1) return { code: 'en', slug: parts[0]! };
  const code = LANGS.find((l) => l.code !== 'en' && l.code === parts[0])?.code;
  return parts.length === 2 && code ? { code, slug: parts[1]! } : undefined;
}

/** Every guide live today, in every language. */
export async function liveGuides(): Promise<LiveGuide[]> {
  const when = now();
  const entries = await getCollection('guides', (g) => g.data.publish <= when);
  return entries.flatMap((entry) => {
    const s = split(entry.id);
    return s ? [{ ...s, entry }] : [];
  });
}

/** The languages each live guide exists in, by slug, in LANGS order. */
export function langsBySlug(guides: LiveGuide[]): Map<string, LangCode[]> {
  const map = new Map<string, LangCode[]>();
  for (const l of LANGS) {
    for (const g of guides) if (g.code === l.code) map.set(g.slug, [...(map.get(g.slug) ?? []), l.code]);
  }
  return map;
}
