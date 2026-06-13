/* ===========================================================================
   Dento — i18n helpers
   Data-driven over the registry in ./ui.ts: add a locale there and these
   helpers (locales list, URL building, direction, toggle) pick it up with no
   further changes here.
   =========================================================================== */
import { ui, defaultLang, rtlLocales } from './ui';
import type { Translation } from './ui';

/** Every supported locale code, derived from the registry. */
export type Lang = keyof typeof ui;
export const locales = Object.keys(ui) as Lang[];

/** Type guard: is this string a supported locale? */
export function isLang(value: string): value is Lang {
  return Object.prototype.hasOwnProperty.call(ui, value);
}

/** Infer the active locale from a request URL (`/ar/...` => 'ar'). */
export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split('/');
  return isLang(first) ? first : defaultLang;
}

/** Return the full, type-safe copy object for a locale. */
export function getUi(lang: Lang): Translation {
  return ui[lang];
}

/** Text direction for a locale. */
export function dirFor(lang: Lang): 'rtl' | 'ltr' {
  return rtlLocales.includes(lang) ? 'rtl' : 'ltr';
}

/**
 * Build a locale-aware, root-relative path. The default locale has no prefix;
 * every other locale is prefixed with its own code.
 *   localePath('en', '/')        -> '/'
 *   localePath('ar', '/')        -> '/ar/'
 *   localePath('ar', '/privacy') -> '/ar/privacy'
 */
export function localePath(lang: Lang, path = '/'): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (lang === defaultLang) return clean;
  return clean === '/' ? `/${lang}/` : `/${lang}${clean}`;
}

/** Build a locale-aware absolute URL against the configured `site`. */
export function localeUrl(site: string | URL | undefined, lang: Lang, path = '/'): string {
  const base = (site ? site.toString() : '').replace(/\/$/, '');
  return `${base}${localePath(lang, path)}`;
}

/**
 * The "next" locale — drives the language toggle. With two locales it behaves
 * as a simple A⇄B switch; with more, it cycles to the next one. (For 3+ locales
 * consider swapping the toggle for a dropdown listing `locales`.)
 */
export function altLang(lang: Lang): Lang {
  const i = locales.indexOf(lang);
  return locales[(i + 1) % locales.length] ?? defaultLang;
}
