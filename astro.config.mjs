// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite';

// TODO: Replace with the real production domain before deploying.
// Used for canonical URLs, hreflang alternates, sitemap and Open Graph URLs.
const SITE = 'https://dento.example.com';

// https://astro.build/config
export default defineConfig({
  site: SITE,

  // English-first i18n: `en` lives at `/` (no prefix), Arabic lives at `/ar`.
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ar'],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  // GDPR-safe fonts: Astro's Fonts API downloads, subsets and SELF-HOSTS these
  // at build time (the visitor's browser never contacts Google's CDN — no IP is
  // sent to a third party). Each `cssVariable` is consumed by global.css @theme.
  //   EN = Inter (brief-locked) · AR = Tajawal (RTL-aware, clean/modern)
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Inter',
      cssVariable: '--font-inter',
      weights: [400, 500, 600, 700, 800],
      subsets: ['latin'],
      styles: ['normal'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'Tajawal',
      cssVariable: '--font-tajawal',
      // Tajawal ships 200/300/400/500/700/800/900 — no 600.
      weights: [400, 500, 700, 800],
      subsets: ['arabic', 'latin'],
      styles: ['normal'],
      fallbacks: ['Segoe UI', 'Tahoma', 'sans-serif'],
    },
  ],

  integrations: [
    icon(),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          ar: 'ar',
        },
      },
    }),
  ],

  // Tailwind CSS v4 is wired in as a Vite plugin (no separate config file).
  vite: {
    plugins: [tailwindcss()],
  },
});
