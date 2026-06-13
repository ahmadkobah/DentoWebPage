# Dento — Marketing Website Brief

## What we're building
A marketing/landing website for **Dento**, a multi-tenant SaaS platform for
dental clinics. This repo is the **marketing site only** — NOT the product app.
Its single job: explain Dento, build trust, and convert clinic owners into
**demo requests**.

## Locked decisions (do not change without asking)
- **Framework:** Astro (latest) — static-first, SEO-optimized, near-zero JS.
- **Styling:** Tailwind CSS v4 (via `@tailwindcss/vite`).
- **Languages:** English-first (default `/`) + Arabic (`/ar`, full RTL).
  English is primary; Arabic is a first-class toggle, not an afterthought.
- **Primary goal:** "Book a demo" lead generation. Every section funnels to it.
- **Deploy target:** Vercel or Netlify (static output), auto-deploy from GitHub.

## About the product (context for accurate copy)
Dento replaces the disconnected tools a dental clinic juggles (appointment book,
patient files, imaging storage, billing, insurance, inventory, staff schedules)
with ONE integrated system. Sold as a subscription. Each clinic's data is
isolated in its own database for privacy/security.

### Target customer
Dental clinic owners and practice managers in the **Middle East** (Gulf + Egypt).
Arabic-speaking, value trust/security, deal with local insurance and payments.

### Core features (use for the Features section)
- Patient records & medical history
- Appointments, scheduling, online self-booking, walk-in queue, waitlist
- Dental charts (per-tooth), treatment plans, procedure notes, prescriptions
- Imaging: X-rays, CBCT scans, intra-oral scans
- Invoicing & payments (Paymob + Stripe), insurance claims, installment plans
- Inventory management across branches
- Lab orders, multi-branch, staff/doctor management
- WhatsApp booking bot + real-time notifications

### Key differentiators (use for the "Why Dento" section)
1. **Arabic-first & RTL** — built for the region, not translated as an afterthought.
2. **Local payments** — Paymob (Egypt) + Stripe, local insurance workflows.
3. **Bank-grade security for medical data** — per-clinic data isolation, encrypted
   fields, 2FA, full audit logging (HIPAA-style). Patient privacy by design.
4. **All-in-one** — one system from first appointment to final payment.

## Design system — "Clean Clinical Trust"
- **Palette:** white / soft-grey base; **medical teal** (or calm blue) primary;
  one warm accent reserved for CTAs only. Calm and trustworthy, never loud.
- **Type:** EN = Inter; AR = Cairo or IBM Plex Sans Arabic (both RTL-aware).
- **Feel:** generous whitespace, rounded corners, soft shadows, real product
  screenshots (use placeholders for now), human/clinic photography over cartoons.
- **Accessibility:** WCAG AA contrast, keyboard-navigable, semantic HTML,
  proper `lang`/`dir` attributes per locale.

## Page / section structure (single strong landing page)
1. Header — logo, nav, language toggle (EN/AR), "Book a demo" button
2. Hero — value prop headline, sub-line, primary CTA, product screenshot
3. Problem → Solution — tool chaos vs. one system
4. Features — icon grid of the core features above
5. Why Dento — the 4 differentiators
6. Pricing — simple tiers (or "Contact us"), each with a demo CTA
7. Social proof — testimonials/logos (placeholders for now)
8. Demo CTA section — the main conversion form (name, clinic, email, phone,
   message) → submit to Formspree or a serverless endpoint (use a TODO/env var
   for the endpoint for now)
9. Footer — links, contact, privacy/terms placeholders

Supporting pages: /privacy, /terms, /contact (can be stubs).
Mirror everything under /ar with RTL layout and Arabic copy.

## Technical requirements
- Astro i18n routing: `en` default (no prefix), `ar` prefixed (`/ar`).
- Shared components take a `lang` prop; copy lives in a single `src/i18n/ui.ts`.
- `<html lang dir>` set correctly per locale (ar => dir="rtl").
- SEO: per-page title/description, Open Graph + Twitter tags, `hreflang`
  alternates between en/ar, sitemap, robots.txt, favicon.
- Performance: target Lighthouse 95+; no unnecessary client JS (Astro islands
  only where interactivity is required, e.g. the language toggle / mobile menu).
- Clean, documented, component-based structure. Tailwind utility classes;
  extract repeated patterns into components.

## Out of scope (do NOT build)
- The actual product app, login, dashboards, or any authenticated area.
- A CMS or blog (unless asked later).
- Backend beyond a single form-submission endpoint/integration.
