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
export const INDEXED_LANGS = ['en'];
