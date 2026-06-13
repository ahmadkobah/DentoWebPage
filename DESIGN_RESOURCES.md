# Dento — Modern Design Resources (2025–2026)

A curated, web-verified reference of the most modern design sources for **this exact stack**:
**Astro 6 + Tailwind CSS v4, English-first + Arabic (RTL), static-first / minimal JS, "clean clinical trust" aesthetic.**

Every "✅ Top pick" below is chosen specifically for *this* project (not just "most popular"):
HTML/CSS-first (no forced React island), Tailwind-v4-ready, OFL/MIT licensed, RTL-friendly, and Lighthouse-safe.

> ⚠️ **GDPR note (relevant — this is a German/EU project):** do **not** ship fonts from the live
> Google Fonts CDN (`fonts.googleapis.com`). EU/German courts have ruled it unlawfully transmits
> visitor IPs. **Self-host** fonts (Astro Fonts API or Fontsource) or use Bunny Fonts. Our Phase-1
> scaffold currently uses a Google CDN `<link>` — Phase 2 should migrate it (see Fonts section).

---

## 0. TL;DR — recommended stack for Dento

| Need | ✅ Pick | How it plugs in |
|---|---|---|
| **Icons** | **Lucide** via `astro-icon` | `<Icon name="lucide:calendar" />`, build-time inlined SVG |
| **Buttons / cards / page sections** | **HyperUI** (free, pure Tailwind v4) | Copy HTML into `.astro`, restyle with our tokens |
| **Astro-native owned components** | **Starwind UI** (free, shadcn-style for Astro) | `npx starwind@latest add button card` |
| **Fields / select / combobox** | **Tom Select** (vanilla) or native `<datalist>` | Inline `<script>`, progressively enhances a real `<select>` |
| **Fonts (EN + AR)** | **IBM Plex Sans + IBM Plex Sans Arabic** via **Astro Fonts API** | One harmonized superfamily, self-hosted |
| **Color tokens / theming** | **Tailwind v4 `@theme`** + **tweakcn** + **Leonardo** | Tune OKLCH scales to WCAG AA, paste into `global.css` |
| **Motion** | **Astro View Transitions** + **tw-animate-css** + IntersectionObserver | Zero/low JS, Lighthouse-safe |
| **Illustrations** | **unDraw** (MIT) / **Open Peeps** (CC0) | Inline SVG, recolor to brand teal |
| **Photos** | **Pexels** API at build time (`astro:assets`) | Optimize locally, don't hotlink |
| **Inspiration** | **SaaS Landing Page → Healthcare** + **Saaspo Healthcare** | Reference real medical-SaaS pages |

---

## 1. Icons

**✅ Top pick: [Lucide](https://lucide.dev)** — clean 24×24 / 2px-stroke outline set (~1,600 icons), ISC license, extremely active (huge adoption). Reads as calm and clinical — perfect for a trust-first SaaS. `currentColor`-based, so Tailwind `text-*` color + `size-*` classes just work.

**Delivery mechanism (use this for *any* set): [Iconify](https://iconify.design) + [`astro-icon`](https://github.com/natemoo-re/astro-icon)** — installs only the sets you need as `@iconify-json/*` packages and **inlines optimized SVGs at build time** (no runtime, no API call). There's also a CSS-only path via the `@iconify/tailwind4` plugin (`class="icon-[lucide--calendar]"`).

```bash
npm i -D astro-icon @iconify-json/lucide
```
```astro
---
import { Icon } from 'astro-icon/components';
---
<Icon name="lucide:calendar-check" class="size-6 text-brand-600" />
```

| Library | Count / styles | License | Notes for Dento |
|---|---|---|---|
| **Lucide** ✅ | ~1,600, single stroke | ISC | Best clinical-neutral default |
| [Phosphor](https://phosphoricons.com) | ~1,500 × 6 weights (incl. **duotone**) | MIT | Duotone adds warmth if hero feels sterile |
| [Solar](https://icon-sets.iconify.design/solar/) | ~7,400, 7 styles (Bold Duotone) | CC BY 4.0 | Premium feel, but **needs attribution** |
| [Tabler](https://tabler.io/icons) | 6,100+ outline/filled | MIT | Biggest free MIT stroke set |
| [Heroicons](https://heroicons.com) | ~316, 4 optical sizes | MIT | By Tailwind team; small but pristine |
| [Material Symbols](https://fonts.google.com/icons) | 2,500+, variable axes | Apache-2.0 | Most tweakable (FILL/wght/opsz) |
| [Remix](https://remixicon.com) | 3,000+ line/fill | ⚠️ new bespoke license (Jan 2026) | Verify commercial terms |
| [Hugeicons](https://hugeicons.com) | 5,100 free / 51k Pro | Freemium | Full styles behind Pro |
| [MynaUI](https://mynaui.com/icons) | ~1,200 | MIT | Young set, built for Tailwind/shadcn |

> Directional icons (arrows, chevrons) must be **mirrored in RTL** — `class="rtl:-scale-x-100"`.

---

## 2. Components — buttons, boxes/cards, full page sections

The fork in the road: **HTML/CSS-first libraries** (paste into `.astro`, zero runtime) vs **React-based** kits (shadcn/Tailark/Park UI) that force a React island. For a static marketing site, **prefer HTML-first**.

**✅ Top pick: [HyperUI](https://www.hyperui.dev/)** — free, MIT, explicitly rebranded "Free Tailwind **v4** components." Large library of copy-paste **marketing sections** (heroes, feature grids, pricing, CTAs, testimonials, footers) as pure HTML + Tailwind utilities — no package, no React. Ships **dark-mode and RTL variants**. Paste, then swap classes for our `brand-*`/`accent-*` tokens.

**✅ Runner-up for owned Astro components: [Starwind UI](https://starwind.dev/)** — shadcn-style but **built for Astro** (native `.astro` + vanilla JS, Tailwind v4, accessible). Installs source into your repo via CLI so you own/restyle it. Free; optional [Starwind Pro](https://pro.starwind.dev/) adds 220+ marketing blocks (~$149–199).

| Library | What | License | Stack fit |
|---|---|---|---|
| **HyperUI** ✅ | Copy-paste marketing sections | MIT | Pure HTML+Tailwind v4, RTL ✓ |
| **Starwind UI** ✅ | Astro-native shadcn-style components | MIT | Best Astro fit, own-the-code |
| [BlockUI](https://blockui.app/) | Astro-authored page blocks | MIT | Single-file `.astro` blocks |
| [AstroWind](https://github.com/arthelokyo/astrowind) | Full free Astro starter theme | MIT | Astro 6 + TW v4, lift sections out |
| [daisyUI](https://daisyui.com/) | Semantic component classes + theming | MIT | **v5** = TW v4 rewrite; great for buttons/cards |
| [Flowbite](https://flowbite.com/) | Components + 400+ blocks | Free core | HTML + small vanilla JS, RTL ✓ |
| [Preline](https://preline.co/) | 640+ components, official Astro guide | Free core | HTML + vanilla JS plugin |
| [Meraki UI](https://merakiui.com/) | 108 components, **excellent RTL** | MIT | Alpine.js; strong for Arabic |
| [Lexington Themes](https://lexingtonthemes.com/) | 89 pure-Astro themes | Free/paid | Astro 7 + TW v4 |
| [Tailwind Plus](https://tailwindcss.com/plus) | Official 500+ components/templates | 💲 Paid | Gold standard; static sections paste fine |
| [shadcn/ui](https://ui.shadcn.com/) | Radix-based recipes | MIT | ⚠️ **React** — adds island runtime |
| [Tailark](https://tailark.com/) | shadcn marketing blocks | Free/paid | ⚠️ React/Next — wrong runtime here |
| [Park UI](https://park-ui.com/) | Ark UI + Panda/Tailwind | Free core | ⚠️ Needs JS framework |

---

## 3. Form controls — fields, selects, **comboboxes**

The demo-request form is mostly **native inputs** (name, clinic, email, phone, message) — style those directly with Tailwind, no library. You only need a real library if you want a searchable **combobox** (e.g. "country" or "clinic type"). Avoid pulling in React just for one control.

**✅ Top pick: [Tom Select](https://tom-select.js.org/)** — framework-agnostic **vanilla JS** (~16kb), Apache-2.0, actively maintained. Progressively enhances a real `<select>` from a tiny inline `<script>`, so the form **still submits without an island** and stays accessible. Autocomplete, multi-select, tagging, remote loading, RTL via `dir`.

**Simplest option: native [`<datalist>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/datalist)** — zero JS, zero deps, future-proof. Caveats: prefix-only matching, unstyleable dropdown, inconsistent SR announcement. Great when the combobox is a *convenience over a free-text field*, not a strict closed list.

| Option | Type | License | When to use |
|---|---|---|---|
| **Tom Select** ✅ | Vanilla enhancer | Apache-2.0 | Searchable select/combobox, no framework |
| **Native `<datalist>`** | Web platform | free | Simple autocomplete, max performance |
| [Choices.js](https://github.com/Choices-js/Choices) | Vanilla enhancer | MIT | MIT alternative to Tom Select |
| [Zag.js](https://zagjs.com/) | Headless FSM (vanilla adapter) | MIT | Full ARIA + total Tailwind control, more wiring |
| [Ark UI](https://ark-ui.com/) | Headless (React/Vue/Solid/Svelte) | MIT | Best a11y coverage — but needs a framework island |
| [React Aria Components](https://react-spectrum.adobe.com/react-aria/) | Headless React | Apache-2.0 | Gold-standard a11y, React-only |
| [Base UI](https://base-ui.com/) | Headless React (v1.0, Dec 2025) | MIT | Modern Radix alternative, React-only |
| [Headless UI](https://headlessui.com/) | Headless React/Vue | MIT | Only if already using React/Vue islands |
| [Bits UI](https://bits-ui.com/) / Melt UI | Headless Svelte 5 | MIT | Lightest framework island (~5–10kb) |

> Rule of thumb: **native inputs + Tom Select** covers 100% of Dento's form needs with ~16kb of vanilla JS and no React.

---

## 4. Fonts (EN + Arabic / RTL)

**✅ Loading mechanism: the [Astro Fonts API](https://docs.astro.build/en/guides/fonts/)** — **stable in Astro 6** (we're on 6.4.6). Configure fonts in `astro.config`, render with `<Font />`; Astro **downloads, subsets, self-hosts, generates CLS-reducing fallbacks (capsize), and injects preloads** automatically. Providers: Google, Bunny, Fontshare, Fontsource, local. Each font exposes a `cssVariable` that drops straight into Tailwind v4 `@theme`. **This replaces our current Google CDN `<link>` and fixes the GDPR issue.**

**✅ Type pairing for "clean clinical trust": [IBM Plex Sans](https://www.ibm.com/plex/) (Latin) + [IBM Plex Sans Arabic](https://fonts.google.com/specimen/IBM+Plex+Sans+Arabic)** — one harmonized superfamily across EN+AR = the safest, most corporate-legible choice for a medical brand. Both OFL, both on Fontsource.
*Alternative:* **Inter** (or **Geist**) for Latin + **IBM Plex Sans Arabic** for AR — Inter is metrically close, so it pairs cleanly.

```bash
# self-host path
npm i @fontsource/ibm-plex-sans-arabic @fontsource-variable/inter
```

| Source | Role | License | Notes |
|---|---|---|---|
| **Astro Fonts API** ✅ | Loader (self-host + optimize) | MIT | Stable in Astro 6 — use this |
| [Fontsource](https://fontsource.org) | Self-host via npm | per-font (mostly OFL) | `@fontsource(-variable)/*` |
| [Bunny Fonts](https://fonts.bunny.net) | GDPR-safe Google mirror | free | Drop-in if you prefer a CDN |
| [Google Fonts](https://fonts.google.com) | **Source only**, not runtime | OFL | Pull via Astro/Fontsource, don't hotlink |
| [Fontshare](https://www.fontshare.com) | Latin foundry fonts (Satoshi) | ITF FFL (not OFL) | **Latin-only — no Arabic** |

**Arabic typefaces** (all OFL, self-hostable): **IBM Plex Sans Arabic** ✅ (clinical/neutral), [Cairo](https://fonts.google.com/specimen/Cairo) (friendly Kufi, variable — what we scaffolded with), [Noto Sans Arabic](https://fonts.google.com/noto/specimen/Noto+Sans+Arabic) (safest coverage/fallback), [Tajawal](https://fonts.google.com/specimen/Tajawal) (warm geometric), [Almarai](https://fonts.google.com/specimen/Almarai) (only 4 weights), [Rubik](https://fonts.google.com/specimen/Rubik) (rounded EN+AR), Baloo Bhaijaan 2 (display only).

**Latin partners** (all OFL variable): [Inter](https://rsms.me/inter/), [Geist](https://vercel.com/font), [Manrope](https://fonts.google.com/specimen/Manrope), [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans), [Figtree](https://fonts.google.com/specimen/Figtree).

---

## 5. Design system — color tokens, theming, contrast, inspiration

**✅ Token engine:** **[Tailwind v4 `@theme`](https://tailwindcss.com/docs/theme)** (what `global.css` already uses) — OKLCH-capable, exposes tokens as CSS vars automatically.
**✅ Visual editor:** **[tweakcn](https://tweakcn.com/)** — tune primary/accent/radius/shadows live (OKLCH), export ready-to-paste `@theme`/`:root` vars.
**✅ Accessible scales:** **[Leonardo](https://leonardocolor.io/)** (Adobe) — generate scales *by target contrast ratio* + colorblind-safety, ideal for a regulated medical UI.

| Tool | Use | License |
|---|---|---|
| **Tailwind v4 `@theme`** ✅ | The token system itself | MIT |
| **tweakcn** ✅ | Live theme editor → TW v4 export | MIT |
| **Leonardo** ✅ | Contrast-target scale generation | Apache-2.0 |
| [Radix Colors](https://www.radix-ui.com/colors) | 12-step accessible scales (light/dark) | MIT |
| [Open Props](https://open-props.style/) | 500+ CSS-var tokens (shadows/easings) | MIT |
| [shadcn colors](https://ui.shadcn.com/colors) | Canonical token-name convention | MIT |
| [Realtime Colors](https://www.realtimecolors.com/) | Preview palette on a mock site | free |
| [Coolors](https://coolors.co/) / [Huemint](https://huemint.com/) | Palette ideation | free(mium) |
| [WebAIM Contrast](https://webaim.org/resources/contrastchecker/) | WCAG 2 AA pass/fail (legal baseline) | free |
| [APCA Calculator](https://apcacontrast.com/) | Perceptual contrast (WCAG 3 preview) | free |
| [Material Design 3](https://m3.material.io/) | Tonal-palette token theory | free |

**Inspiration (medical/clinical SaaS):**
**✅ [SaaS Landing Page → Healthcare](https://saaslandingpage.com/tag/healthcare/)** and **[Saaspo Healthcare](https://saaspo.com/industry/healthcare-saas-websites-inspiration)** (free, 1,400+ pages) — real shipped clinical pages: trust signals, compliance framing, hero/feature/pricing patterns. Plus general galleries: [Land-book](https://land-book.com/), [Lapa Ninja](https://www.lapa.ninja/), [Mobbin](https://mobbin.com/), [Godly](https://godly.website/), [Refero](https://refero.design/).

---

## 6. Motion, illustrations, images & dev tooling

**✅ Motion (keep Lighthouse high):**
- **[Astro View Transitions](https://docs.astro.build/en/guides/view-transitions/)** — native `@view-transition` CSS adds **zero JS**; `<ClientRouter />` for SPA-like fallback.
- **[tw-animate-css](https://github.com/Wombosvideo/tw-animate-css)** — Tailwind **v4-native** animation utilities (`@import` it; shadcn's default; **replaces the deprecated `tailwindcss-animate`**). Trigger reveals with a ~15-line IntersectionObserver.
- Heavy options for **one** signature section only: **[GSAP](https://gsap.com/)** (now **100% free incl. all plugins** since 2025, framework-agnostic → fits an Astro `<script>`), [Motion](https://motion.dev/) (React-oriented), [Lenis](https://github.com/darkroom-engineering/lenis) smooth-scroll (optional polish). Always honor `prefers-reduced-motion`.

**✅ Illustrations:** **[unDraw](https://undraw.co/illustrations)** (MIT, recolor to brand teal, no attribution) and **[Open Peeps](https://www.openpeeps.com/)** (CC0). Also [Storyset](https://storyset.com/) (great medical scenes, ⚠️ attribution unless premium), [Humaaans](https://www.humaaans.com/), [DrawKit](https://www.drawkit.com/). Animated vectors: [Lottie/dotLottie](https://github.com/LottieFiles/dotlottie-web) via the `<dotlottie-wc>` web component (no React); 3D: [Spline](https://spline.design/) (heavy — lazy-load + image fallback).

**✅ Photos:** **[Pexels API](https://www.pexels.com/api/)** (CC0-style, photo+video) and [Unsplash API](https://unsplash.com/developers) — fetch at **build time** and optimize with `astro:assets`, don't hotlink. Placeholders during dev: **[placehold.co](https://placehold.co/)** (boxes), [Lorem Picsum](https://picsum.photos/) (photos). *Get model releases for recognizable patients.*

**✅ Dev tooling:** **[Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)** (full v4 support) + **[prettier-plugin-tailwindcss](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)** (auto-sorts classes; set `tailwindStylesheet: "./src/styles/global.css"` for v4) + `prettier-plugin-astro`.

---

## 7. What this changes for Dento (action items)

1. **Icons → add `astro-icon` + Lucide** (Phase 2/3) instead of hand-drawing SVGs.
2. **Fonts → migrate off the Google CDN `<link>`** to the **Astro Fonts API** (self-hosted) — fixes the **GDPR liability** and improves CWV. Reconsider **IBM Plex Sans + IBM Plex Sans Arabic** as the harmonized pairing.
3. **Sections → lean on HyperUI** (free, RTL, TW v4) for hero/features/pricing markup, restyled with our tokens; **Starwind UI** for owned Button/Card if we want CLI-managed Astro components.
4. **Form → native inputs + Tom Select** for any combobox; no React.
5. **Motion → Astro View Transitions + tw-animate-css + IntersectionObserver**; skip heavy JS.
6. **Tokens → validate every pair in WebAIM/Leonardo** for WCAG AA before locking the palette.

*All recommendations verified against 2025–2026 releases and checked for Astro 6 + Tailwind v4 + RTL fit.*
