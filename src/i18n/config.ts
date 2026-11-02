// Languages the site is published in. English lives at the root; every other language under /<code>/.
export interface Lang {
  code: 'en' | 'hi' | 'te' | 'ta' | 'kn' | 'mr' | 'bn';
  /** BCP 47 tag for <html lang>, hreflang and JSON-LD inLanguage. */
  tag: string;
  /** Name in its own script, for the language switcher. */
  native: string;
  /** Google Fonts family for the script (Archivo covers Latin only). */
  font?: string;
  /** Open Graph locale. */
  og: string;
}

export const LANGS: Lang[] = [
  { code: 'en', tag: 'en-IN', native: 'English', og: 'en_IN' },
  { code: 'hi', tag: 'hi-IN', native: 'हिन्दी', font: 'Noto Sans Devanagari', og: 'hi_IN' },
  { code: 'te', tag: 'te-IN', native: 'తెలుగు', font: 'Noto Sans Telugu', og: 'te_IN' },
  { code: 'ta', tag: 'ta-IN', native: 'தமிழ்', font: 'Noto Sans Tamil', og: 'ta_IN' },
  { code: 'kn', tag: 'kn-IN', native: 'ಕನ್ನಡ', font: 'Noto Sans Kannada', og: 'kn_IN' },
  { code: 'mr', tag: 'mr-IN', native: 'मराठी', font: 'Noto Sans Devanagari', og: 'mr_IN' },
  { code: 'bn', tag: 'bn-IN', native: 'বাংলা', font: 'Noto Sans Bengali', og: 'bn_IN' },
];
export type LangCode = Lang['code'];
export const OTHER_LANGS = LANGS.filter((l) => l.code !== 'en');
export const lang = (code: string | undefined): Lang => LANGS.find((l) => l.code === code) ?? LANGS[0]!;

/** The language of a URL path such as /hi/pricing/ (English when there is no prefix). */
export function langOf(pathname: string): LangCode {
  const first = pathname.split('/').filter(Boolean)[0];
  return OTHER_LANGS.some((l) => l.code === first) ? (first as LangCode) : 'en';
}

/** The same page without its language prefix: /hi/pricing/ -> /pricing/. */
export function stripLang(pathname: string): string {
  const code = langOf(pathname);
  return code === 'en' ? pathname : pathname.replace(new RegExp(`^/${code}(?=/|$)`), '') || '/';
}

/** A site path in a language: ('/pricing/', 'hi') -> '/hi/pricing/'. Paths start and end with '/'. */
export function localize(path: string, code: LangCode): string {
  const clean = stripLang(path);
  return code === 'en' ? clean : `/${code}${clean}`;
}

/** getStaticPaths entries for every non-English language. */
export const langPaths = () => OTHER_LANGS.map((l) => ({ params: { lang: l.code } }));

/**
 * Where the language switcher points for `code`: this page in that language, or, when the page exists only
 * in some languages (`langs`, e.g. a guide not yet translated), `fallback` in that language.
 */
export function switchHref(pathname: string, code: LangCode, langs?: LangCode[], fallback = '/guides/'): string {
  return !langs || langs.includes(code) ? localize(pathname, code) : localize(fallback, code);
}
