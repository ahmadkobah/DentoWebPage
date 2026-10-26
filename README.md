# Dento Website

Dento Website is the public marketing and landing site for **Dento**, a multi-tenant SaaS platform
for dental clinics. It explains the product, builds trust and turns clinic owners into demo
requests. The site is bilingual (English and Arabic with full right-to-left layout) and is built
as a static site with Astro and Tailwind CSS.

---

## Table of Contents

1. [Overview](#overview)
2. [Project Status](#project-status)
3. [How It Works](#how-it-works)
4. [Pages and Sections](#pages-and-sections)
5. [Technology Stack](#technology-stack)
6. [Project Structure](#project-structure)
7. [Getting Started](#getting-started)
8. [Configuration](#configuration)
9. [Routes](#routes)
10. [Internationalisation](#internationalisation)
11. [Deployment](#deployment)
12. [Privacy and Security](#privacy-and-security)
13. [Known Issues](#known-issues)
14. [License](#license)

---

## Overview

### Purpose

This repository contains the **marketing site only**. It is not the Dento product application:
there is no login, no dashboard and no authenticated area here. The site has one main job:
explain what Dento does and collect "Book a demo" requests.

Dento (the product, developed in separate repositories) aims to replace the many separate tools
a dental clinic uses - appointment book, patient files, imaging storage, billing, insurance,
inventory and staff schedules - with one integrated, subscription-based system.

### Intended audience

- **Dental clinic owners and practice managers**, mainly in the Middle East (Gulf and Egypt),
  who read English or Arabic.
- **The Dento team**, who use the site to collect leads through the demo-request form.

### Project documents in the repository

- `PROJECT_BRIEF.md` - the brief: goals, locked decisions, page structure and out-of-scope items.
- `DESIGN_RESOURCES.md` - a curated list of design resources (icons, fonts, components, motion)
  considered for this stack.

---

## Project Status

The site is a working first version (`0.1.0`). The structure, both languages and all pages are
built. Much of the content is still placeholder text that must be replaced before launch.

| Area | Status | Notes |
|------|--------|-------|
| Landing page (EN and AR) | Working | Hero, problem/solution, features, why Dento, security, pricing, social proof, demo form |
| About and Contact pages | Working | Contact details are placeholders |
| Language switching (EN / AR, RTL) | Working | Locale registry is data-driven |
| Light / dark theme | Working | Saved in `localStorage`, follows system setting by default |
| SEO (meta, Open Graph, hreflang, sitemap) | Working | Uses the placeholder domain `dento.example.com` |
| Demo-request form | Partial | Works only when `PUBLIC_FORM_ENDPOINT` is set; otherwise "demo mode" |
| Privacy, Terms, Impressum pages | Placeholder | Stub text with a "not legal advice" notice and TODOs |
| Testimonials and statistics | Placeholder | Marked in the copy as placeholders to replace before launch |
| Pricing | Placeholder | Example tiers; not confirmed prices |
| Product screenshots | Placeholder | The hero shows a CSS/SVG mock of the app, not real screenshots |
| Spam protection (captcha) | Planned | Friendly Captcha slot is commented out; a honeypot field is active |
| Analytics | Planned | Plausible snippet is commented out |
| Automated tests / CI | Not present | Only `astro check` (type checking) is available |

---

## How It Works

### Architecture

The site is fully static. Astro renders every page to HTML at build time. The only external
call at runtime is the optional form submission to a configurable endpoint.

```
  +-------------------------+        build time         +-------------------------+
  |  Source (this repo)     |  ---------------------->  |  dist/  (static HTML,   |
  |  Astro pages + layouts  |   astro build             |  CSS, JS, fonts,        |
  |  Tailwind CSS v4        |   - renders EN + AR       |  sitemap)               |
  |  i18n copy (en.ts,ar.ts)|   - downloads and         +-----------+-------------+
  +-------------------------+     self-hosts fonts                  |
                                  - inlines Lucide icons            | static hosting
                                                                    v
                                                        +-------------------------+
                                                        |  Visitor's browser      |
                                                        |  small vanilla JS:      |
                                                        |  menu, language picker, |
                                                        |  theme, scroll reveal,  |
                                                        |  demo form              |
                                                        +-----------+-------------+
                                                                    |
                                                                    | POST (FormData)
                                                                    v
                                                        +-------------------------+
                                                        |  PUBLIC_FORM_ENDPOINT   |
                                                        |  (e.g. Formspree or a   |
                                                        |  serverless function)   |
                                                        +-------------------------+
```

### Request flow

1. A visitor opens `/` (English) or `/ar/` (Arabic).
2. `BaseLayout` sets `<html lang dir>`, SEO tags, hreflang links and the self-hosted fonts.
   An inline script applies the saved or system theme before the page paints.
3. `SiteLayout` adds the skip link, header, footer and the page content.
4. Every section reads its text from the locale copy file (`src/i18n/locales/en.ts` or `ar.ts`).
5. Calls to action ("Book a demo", pricing buttons) link to the `#demo` section.
6. The visitor fills in the demo form. Vanilla JavaScript validates it and sends it with
   `fetch` to `PUBLIC_FORM_ENDPOINT`. Without JavaScript, the form posts natively.
7. On success the form is replaced by a thank-you panel. On failure an error message is shown.

---

## Pages and Sections

### Landing page sections (`src/components/sections/`)

| Section | File | What it shows |
|---------|------|---------------|
| Hero | `Hero.astro` | Value proposition, call to action and an auto-rotating product mock (`MockApp.astro`) |
| Problem / Solution | `ProblemSolution.astro` | Scattered clinic tools compared with one system |
| Features | `Features.astro` | Icon grid of product features |
| Why Dento | `WhyDento.astro` | The key differentiators |
| Security | `Security.astro` | Data-protection safeguards and trust badges |
| Pricing | `Pricing.astro` | Three tiers (Solo, Clinic, Group); each button leads to the demo form |
| Social proof | `SocialProof.astro` | Statistics and testimonials (placeholders) |
| Demo form | `DemoForm.astro` | The main conversion form |

### Product mock

`MockApp.astro` draws a fake app window with CSS and SVG and cross-fades through four screens
every 5 seconds: schedule, chair map, dental chart and imaging. It is decorative
(`aria-hidden`), does not rotate when the visitor prefers reduced motion, and pauses when it is
off screen or the tab is hidden.

### Demo-request form

`DemoForm.astro` collects:

| Field | Required |
|-------|----------|
| Full name (`name`) | Yes |
| Clinic name (`clinic`) | Yes |
| Email (`email`) | Yes |
| Phone (`phone`) | Yes |
| Message (`message`) | No |
| Consent checkbox (`consent`), linked to the privacy page | Yes |

Behaviour:

- A hidden honeypot field (`company_website`) catches simple bots. If it is filled, the form
  shows success but sends nothing.
- If `PUBLIC_FORM_ENDPOINT` is empty, the form runs in **demo mode**: it validates and shows an
  information message, but sends nothing.
- Validation styling uses `:user-invalid`, so errors appear only after the visitor has touched
  a field.

### Shared components

| Component | Purpose |
|-----------|---------|
| `Header.astro` | Sticky top bar: logo, section links, language picker, theme toggle, demo button, mobile menu |
| `Footer.astro` | Links to About, Contact, Privacy, Terms and Impressum |
| `LanguagePicker.astro` | Dropdown listing every registered locale; keeps the current route |
| `ThemeToggle.astro` | Switches light and dark mode and stores the choice |
| `LegalArticle.astro` | Shared renderer for the Privacy, Terms and Impressum pages |
| `AboutContent.astro` | Body of the About page, shared by both languages |
| `ui/` | Small building blocks: `Badge`, `Button`, `Card`, `Container`, `Logo`, `Section` |
| `decor/` | Decorative SVG/CSS elements (aurora, dot grid, tooth motifs, sparklines and more) |

---

## Technology Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Astro | 6.x | Static site generator, routing, i18n routing, Fonts API |
| Tailwind CSS | 4.x | Styling, wired in through `@tailwindcss/vite` (no separate config file) |
| astro-icon + `@iconify-json/lucide` | 1.x | Lucide icons inlined as SVG at build time |
| `@astrojs/sitemap` | 3.x | Generates the sitemap with EN/AR alternates |
| TypeScript | 6.x | Type checking (strict Astro config) |
| `@astrojs/check` | 0.9.x | `astro check` diagnostics |
| Fonts | - | Inter (English) and Tajawal (Arabic), self-hosted at build time |
| Vite | 7.x | Build tool; version pinned through `overrides` in `package.json` |

---

## Project Structure

```
DentoWebPage/
|-- astro.config.mjs          Site URL, i18n routing, fonts, integrations, Tailwind plugin
|-- package.json              Scripts and dependencies
|-- tsconfig.json             Strict TypeScript settings
|-- .env.example              Template for environment variables
|-- PROJECT_BRIEF.md          Project brief and locked decisions
|-- DESIGN_RESOURCES.md       Design resource notes
|-- public/
|   |-- favicon.svg
|   |-- og-image.svg          Default social share image
|   `-- robots.txt
`-- src/
    |-- components/
    |   |-- sections/         Landing page sections (Hero, Features, Pricing, DemoForm, ...)
    |   |-- ui/               Basic building blocks (Button, Badge, Section, ...)
    |   |-- decor/            Decorative SVG/CSS elements
    |   `-- *.astro           Header, Footer, LanguagePicker, ThemeToggle, MockApp, ...
    |-- i18n/
    |   |-- ui.ts             Locale registry (languages, default locale, RTL locales)
    |   |-- utils.ts          Helpers: getUi, localePath, localeUrl, dirFor, altLang
    |   `-- locales/
    |       |-- en.ts         English copy (source of truth for the Translation type)
    |       `-- ar.ts         Arabic copy
    |-- layouts/
    |   |-- BaseLayout.astro  HTML shell, SEO, hreflang, fonts, theme and reveal scripts
    |   `-- SiteLayout.astro  Skip link, header, main, footer
    |-- pages/                English pages at the root, Arabic pages under pages/ar/
    `-- styles/
        `-- global.css        Tailwind import, design tokens (@theme), dark mode, animations
```

---

## Getting Started

### Prerequisites

- **Node.js 22.12 or newer** (required by Astro 6)
- **npm** (the repository contains a `package-lock.json`)

### Install and run

```bash
git clone https://github.com/ahmadkobah/DentoWebPage.git
cd DentoWebPage
npm install
cp .env.example .env      # optional: set PUBLIC_FORM_ENDPOINT
npm run dev               # starts the dev server (default http://localhost:4321)
```

### Available scripts

| Command | What it does |
|---------|--------------|
| `npm run dev` / `npm start` | Start the Astro development server |
| `npm run build` | Build the static site into `dist/` |
| `npm run preview` | Serve the built site locally |
| `npm run check` | Run `astro check` (TypeScript and Astro diagnostics) |
| `npm run astro` | Run the Astro CLI directly |

Note: fonts are downloaded from Google at **build time** by the Astro Fonts API, so the first
build needs internet access.

---

## Configuration

### Environment variables

| Variable | Required | Default | Description |
|----------|----------|---------|-------------|
| `PUBLIC_FORM_ENDPOINT` | No | empty | URL that receives demo-form submissions (for example a Formspree form URL or your own serverless function). Empty means demo mode: nothing is sent. The `PUBLIC_` prefix makes it available to browser code, so it must not contain secrets. |

### Values to change before launch

| Where | What |
|-------|------|
| `astro.config.mjs` | `SITE` is `https://dento.example.com`; set the real domain (used for canonical, hreflang, sitemap and Open Graph URLs) |
| `public/robots.txt` | Sitemap URL uses the placeholder domain |
| `src/pages/contact.astro` and `src/pages/ar/contact.astro` | Placeholder email and phone number |
| `src/i18n/locales/*.ts` | Placeholder testimonials, statistics, prices, legal texts and the "last updated" date |
| `src/components/Footer.astro` | Copyright year is a static value (`2026`) |

---

## Routes

English is the default locale and has no prefix. Arabic lives under `/ar`.

| English | Arabic | Page |
|---------|--------|------|
| `/` | `/ar/` | Landing page |
| `/about` | `/ar/about` | About Dento |
| `/contact` | `/ar/contact` | Contact details and demo form |
| `/privacy` | `/ar/privacy` | Privacy policy (placeholder) |
| `/terms` | `/ar/terms` | Terms (placeholder) |
| `/impressum` | `/ar/impressum` | Impressum (placeholder) |

Section anchors on the landing page: `#features`, `#why`, `#security`, `#pricing`, `#proof`,
`#demo`.

---

## Internationalisation

- All visible text lives in `src/i18n/locales/en.ts` and `ar.ts`. `en.ts` defines the
  `Translation` type, so the Arabic file must contain every key.
- `dirFor(lang)` returns `rtl` for Arabic and `ltr` otherwise; the layout sets `dir` on `<html>`.
- Components use logical CSS properties (`start` / `end`) so the layout mirrors correctly in RTL.

### Adding a language

As documented in `src/i18n/ui.ts`:

1. Create `src/i18n/locales/<code>.ts` typed as `Translation`.
2. Register it in `ui` and `languages` in `src/i18n/ui.ts` (and `rtlLocales` if it is RTL).
3. Add the code to `i18n.locales` (and the sitemap and fonts settings if needed) in
   `astro.config.mjs`.
4. Create the pages under `src/pages/<code>/`, mirroring `src/pages/ar/`.

---

## Deployment

The build output in `dist/` is plain static files and can be served by any static host. The
project brief names Vercel or Netlify with automatic deploys as the target. No deployment
configuration, Dockerfile or CI pipeline is included in the repository yet.

---

## Privacy and Security

- **Self-hosted fonts.** Fonts are downloaded at build time and served from the site itself,
  so the visitor's browser does not contact the Google Fonts CDN.
- **No cookies or tracking.** No analytics script is active. The only browser storage is the
  theme choice in `localStorage`.
- **Consent.** The demo form requires a consent checkbox that links to the privacy page.
- **Spam.** A honeypot field is active; a captcha is planned but not added.
- **Secrets.** `.env` files are ignored by git; only `.env.example` is tracked.

The Security section on the landing page describes safeguards of the **Dento product**
(per-clinic data isolation, encryption, 2FA, audit logging, role-based access). These features
belong to the product application, not to this website.

---

## Known Issues

- The site domain, contact details, prices, testimonials, statistics and legal pages are
  placeholders and must be replaced before going live. The legal pages contain `TODO` text.
- The demo form does nothing useful until `PUBLIC_FORM_ENDPOINT` is configured, and there is
  no server-side validation or captcha in this repository.
- `MockDashboard.astro` and `decor/ScanCard.astro` are not imported by any page or component.
- The comment at the top of `BaseLayout.astro` mentions Cairo / IBM Plex Sans Arabic, but the
  configured Arabic font is Tajawal.
- There are no automated tests and no CI pipeline.

---

## License

Private. All rights reserved.

Author: Ahmad Kobah
