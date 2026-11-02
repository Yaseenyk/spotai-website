import { FEATURES, type Feature } from '../../features';
import type { LangCode } from '../config';
import { merge, type DeepPartial } from '../strings';
import en from './en';

// The words of one feature page. Each language file maps every feature slug to one of these.
export interface FeatureCopy {
  nav: string;
  title: string;
  description: string;
  problem: string;
  fix: string;
  lead: string;
  heroAlt: string;
  facts: [string, string][];
  steps: { title: string; body: string; alt: string }[];
  details: { title: string; body: string }[];
  limits: string[];
  faq: { q: string; a: string }[];
}

const modules = import.meta.glob<{ default: DeepPartial<Record<string, FeatureCopy>> }>(['./*.ts', '!./index.ts', '!./en.ts'], { eager: true });

const cache = new Map<LangCode, Feature[]>();
/** Every feature page in a language: its copy merged over English, joined with the data in src/features.ts. */
export function featuresFor(code: LangCode): Feature[] {
  let list = cache.get(code);
  if (!list) {
    const copy = code === 'en' ? en : merge(en, modules[`./${code}.ts`]?.default);
    list = FEATURES.map((d) => {
      const c = copy[d.slug]!;
      return {
        slug: d.slug,
        audience: d.audience,
        related: d.related,
        nav: c.nav,
        title: c.title,
        description: c.description,
        problem: c.problem,
        fix: c.fix,
        lead: c.lead,
        hero: { ...d.hero, alt: c.heroAlt },
        facts: c.facts,
        steps: d.steps.map((shot, i) => ({ title: c.steps[i]!.title, body: c.steps[i]!.body, shot: { ...shot, alt: c.steps[i]!.alt } })),
        details: c.details,
        limits: c.limits,
        faq: c.faq,
      };
    });
    cache.set(code, list);
  }
  return list;
}

export const featureFor = (code: LangCode, slug: string) => featuresFor(code).find((f) => f.slug === slug)!;
