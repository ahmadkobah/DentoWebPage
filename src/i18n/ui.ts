/* ===========================================================================
   Dento — i18n registry
   ---------------------------------------------------------------------------
   This file assembles the per-language copy files into one `ui` object and
   declares locale metadata. Copy itself lives in ./locales/<code>.ts — one
   file per language (en.ts is the source of truth; every other file is typed
   against its `Translation` shape).

   ───────────────────────────────────────────────────────────────────────────
   HOW TO ADD A NEW LANGUAGE (e.g. French):
     1. Create  src/i18n/locales/fr.ts:
          import type { Translation } from './en';
          export const fr: Translation = { …translate every key… };
     2. In THIS file: import it, add `fr` to `ui` and a label to `languages`
        (add the code to `rtlLocales` too if it is right-to-left).
     3. In  astro.config.mjs: add 'fr' to i18n.locales AND to the Fonts config
        if it needs a different subset/typeface.
     4. Create the pages under  src/pages/fr/  (mirror the existing /ar pages).
   Helpers in ./utils.ts are data-driven, so they pick up the new locale
   automatically once steps 1–2 are done.
   =========================================================================== */
import { en } from './locales/en';
import { ar } from './locales/ar';

export type { Translation } from './locales/en';

/** The default locale — served at `/` with no path prefix. */
export const defaultLang = 'en' as const;

/** All locales' copy, keyed by language code. Add new languages here. */
export const ui = { en, ar } as const;

/** Native display names for the language switcher. */
export const languages = {
  en: 'English',
  ar: 'العربية',
} as const;

/** Locales that render right-to-left. */
export const rtlLocales: readonly string[] = ['ar'];
