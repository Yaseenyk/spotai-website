/**
 * Staged indexing of the translations.
 *
 * Only the languages listed here are offered to Google: they appear in the sitemap, in every hreflang
 * alternate list and carry `index, follow`. Every other language keeps its live pages (the language switcher
 * still reaches them) but is `noindex, follow` and left out of the sitemap and hreflang.
 *
 * To promote a language: have a native reader approve its pages, then add its code here (for example
 * ['en', 'hi']). Nothing else changes; rebuild and deploy. Canonicals stay self-referencing throughout.
 * Plain .mjs so astro.config.mjs can import it too.
 */
// te, ta, kn, mr and bn promoted 15 Nov 2026 after the owner confirmed the translations.
export const INDEXED_LANGS = ['en', 'hi', 'te', 'ta', 'kn', 'mr', 'bn'];

/**
 * Hub pages that are thin outside English (19 Nov 2026, AdSense readiness): the translated guides index,
 * features index and pricing page are mostly card labels, 177 to 264 words. In every language except English
 * they are `noindex, follow`, left out of the sitemap and out of every hreflang list (the English page then
 * lists only itself and x-default). They stay live and linked. Remove a path here once its translations carry
 * enough text of their own (written by a person, not machine-translated).
 */
export const THIN_HUBS = ['/guides/', '/features/', '/pricing/'];
/** True for a thin hub in a non-English language. `path` is the page path without its language prefix. */
export const isThinHub = (code, path) => code !== 'en' && THIN_HUBS.includes(path);
