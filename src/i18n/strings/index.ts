import type { LangCode } from '../config';
import en from './en';

// Site copy per language. Every language file has the same shape as en.ts; anything missing falls back
// to English, so a half-translated page never shows a blank.
export type Strings = typeof en;
export type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends readonly unknown[] | ((...args: never[]) => unknown) ? T[K] : T[K] extends object ? DeepPartial<T[K]> : T[K];
};

const modules = import.meta.glob<{ default: DeepPartial<Strings> }>(['./*.ts', '!./index.ts', '!./en.ts'], { eager: true });

export function merge<T>(base: T, over: unknown): T {
  if (over === undefined || over === null) return base;
  if (Array.isArray(base) || typeof base !== 'object' || base === null) return over as T;
  const out: Record<string, unknown> = { ...(base as Record<string, unknown>) };
  for (const [k, v] of Object.entries(over as Record<string, unknown>)) {
    out[k] = merge((base as Record<string, unknown>)[k], v);
  }
  return out as T;
}

const cache = new Map<LangCode, Strings>();
export function strings(code: LangCode): Strings {
  if (code === 'en') return en;
  let s = cache.get(code);
  if (!s) {
    s = merge(en, modules[`./${code}.ts`]?.default);
    cache.set(code, s);
  }
  return s;
}
