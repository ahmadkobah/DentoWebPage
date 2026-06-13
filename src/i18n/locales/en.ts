/* ===========================================================================
   English copy  (en)
   ---------------------------------------------------------------------------
   This is the SOURCE OF TRUTH for the whole copy deck's shape: the exported
   `Translation` type is inferred from this object, and every other locale file
   is typed against it — so a missing or renamed key in another language is a
   compile-time error, never a silent fallback.

   Keep ONLY translatable strings here. Non-translatable structure (icon names,
   hrefs, section ids) lives in the components. Array items (features, tiers,
   testimonials…) line up with their component config BY ORDER.
   =========================================================================== */

export const en = {
  meta: {
    brand: 'Dento',
    htmlLang: 'en',
    ogLocale: 'en_US',
    siteName: 'Dento',
    title: 'Dento — One system for the whole dental clinic',
    description:
      'Dento is the all-in-one platform for dental clinics: appointments, patient records, imaging, billing, insurance and inventory in one secure, Arabic-first system.',
  },

  a11y: {
    skipToContent: 'Skip to content',
  },

  nav: {
    features: 'Features',
    why: 'Why Dento',
    security: 'Security',
    pricing: 'Pricing',
    contact: 'Contact',
    bookDemo: 'Book a demo',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    switchLanguage: 'العربية',
    toggleTheme: 'Toggle dark mode',
    language: 'Language',
  },

  hero: {
    eyebrow: 'Built for modern dental clinics worldwide',
    title: 'Run your entire dental clinic from',
    titleHighlight: 'one calm dashboard.',
    subtitle:
      'Dento brings appointments, patient records, dental charts, imaging, billing and insurance into a single secure platform — Arabic-first, and ready for local payments.',
    primaryCta: 'Book a free demo',
    secondaryCta: 'Explore features',
    trust1: 'No credit card needed',
    trust2: 'Set up in days, not months',
    trust3: 'Encrypted & isolated per clinic',
    mockTitle: "Today's schedule",
    mockSubtitle: 'Dento dashboard preview',
    mock: {
      scheduleTitle: "Today's schedule",
      scheduleSub: 'Appointments',
      chairsTitle: 'Chair map',
      chairsSub: 'Operatory status',
      chartTitle: 'Dental chart',
      chartSub: 'Treatment plan',
      imagingTitle: 'Imaging',
      imagingSub: 'X-rays & scans',
      pillSchedule: 'Scheduling',
      pillChairs: 'Chair map',
      pillChart: 'Dental charts',
      pillImaging: 'Imaging',
    },
  },

  logos: {
    title: 'Trusted by modern dental practices across the region',
  },

  problem: {
    eyebrow: 'The problem',
    title: 'Your clinic runs on too many disconnected tools.',
    subtitle:
      'Paper files, a separate booking app, a chat full of X-rays, spreadsheets for billing — nothing talks to each other, and your patients feel it.',
    chaosTitle: 'Without Dento',
    pains: [
      'Double-booked chairs and no-shows from manual scheduling',
      'Patient history scattered across paper, WhatsApp and memory',
      'X-rays and scans lost in phone galleries and email',
      'Billing, insurance claims and installments tracked by hand',
      'No clear view of stock, branches or doctor performance',
    ],
    solutionTitle: 'With Dento',
    solutionLead: 'One connected system, from the first appointment to the final payment.',
    solutionPoints: [
      'Every appointment, record and invoice on one timeline',
      'Per-tooth charts, treatment plans and imaging on one screen',
      'Automated reminders that quietly cut no-shows',
      'Payments, insurance and inventory handled in-house',
    ],
  },

  features: {
    eyebrow: 'Features',
    title: 'Everything your clinic needs, in one place.',
    subtitle:
      'Replace the stack of half-connected apps with one system your whole team actually enjoys using.',
    items: [
      {
        title: 'Patient records & history',
        text: 'Complete medical history, allergies, documents and consent forms in one secure profile.',
      },
      {
        title: 'Appointments & online booking',
        text: 'Online self-booking, a walk-in queue, waitlists and reminders that keep every chair full.',
      },
      {
        title: 'Dental charts & treatment plans',
        text: 'Interactive per-tooth charting, treatment plans, procedure notes and prescriptions.',
      },
      {
        title: 'Imaging & scans',
        text: 'Store and view X-rays, CBCT and intra-oral scans right next to the patient record.',
      },
      {
        title: 'Billing, payments & installments',
        text: 'Invoice in seconds, take payments with Paymob & Stripe, and manage installment plans.',
      },
      {
        title: 'Insurance & claims',
        text: 'Built-in insurance workflows and claims that match how clinics in the region actually work.',
      },
      {
        title: 'Inventory & multi-branch',
        text: 'Track stock, lab orders, doctors and staff across every branch from one place.',
      },
      {
        title: 'WhatsApp bot & alerts',
        text: 'A WhatsApp booking bot and real-time notifications for patients and your front desk.',
      },
    ],
  },

  why: {
    eyebrow: 'Why Dento',
    title: 'Built for the way clinics in the region actually work.',
    subtitle:
      'Not a Western tool with Arabic bolted on — Dento is designed around your language, payments and privacy expectations.',
    items: [
      {
        title: 'Arabic-first & full RTL',
        text: 'A true right-to-left experience designed in Arabic from day one, not translated as an afterthought.',
      },
      {
        title: 'Local payments & insurance',
        text: 'Paymob for Egypt and Stripe built in, with insurance and installment workflows that match local reality.',
      },
      {
        title: 'Bank-grade data security',
        text: 'Per-clinic data isolation, encrypted fields, 2FA and full audit logging. Patient privacy by design.',
      },
      {
        title: 'Truly all-in-one',
        text: 'From the first appointment to the final payment, every step lives in one connected system.',
      },
    ],
  },

  security: {
    eyebrow: 'Security & privacy',
    title: "Patient data, protected like it's our own.",
    subtitle:
      'Healthcare data deserves more than a password. Dento is built security-first — every record stays private, encrypted, and yours.',
    items: [
      {
        title: 'Per-clinic data isolation',
        text: "Each clinic's data lives in its own isolated database — never mixed with anyone else's.",
      },
      {
        title: 'Encryption in transit & at rest',
        text: 'TLS everywhere and encrypted sensitive fields, so records stay unreadable if intercepted.',
      },
      {
        title: 'Two-factor authentication',
        text: 'Optional 2FA on every account adds a second lock to every login.',
      },
      {
        title: 'Full audit logging',
        text: 'Every view, edit and export is recorded — HIPAA-style accountability for who did what, when.',
      },
      {
        title: 'Role-based access control',
        text: 'Reception, doctors and admins each see only what their role needs.',
      },
      {
        title: 'GDPR-ready — you own your data',
        text: 'Privacy by design, with export and deletion on request. Your patients’ data is yours.',
      },
    ],
    badges: ['Encrypted', 'Isolated per clinic', '2FA', 'Audit-logged', 'GDPR-ready'],
  },

  pricing: {
    eyebrow: 'Pricing',
    title: 'Simple pricing that grows with your clinic.',
    subtitle:
      'Start with what you need today and scale to multiple branches when you are ready.',
    popular: 'Most popular',
    tiers: [
      {
        name: 'Solo',
        price: '$99',
        period: '/ clinic / month',
        description: 'For a single chair or a new practice finding its feet.',
        features: [
          'Up to 2 users',
          'Patient records & scheduling',
          'Dental charts & imaging',
          'Online booking page',
          'Email support',
        ],
        cta: 'Book a demo',
        highlighted: false,
      },
      {
        name: 'Clinic',
        price: '$249',
        period: '/ clinic / month',
        description: 'For busy single-location clinics that want everything connected.',
        features: [
          'Up to 15 users',
          'Everything in Solo',
          'Billing, payments & insurance',
          'WhatsApp booking bot',
          'Inventory management',
          'Priority support',
        ],
        cta: 'Book a demo',
        highlighted: true,
      },
      {
        name: 'Group',
        price: 'Custom',
        period: '',
        description: 'For multi-branch groups and DSOs with advanced needs.',
        features: [
          'Unlimited users & branches',
          'Everything in Clinic',
          'Cross-branch inventory & reporting',
          'Dedicated onboarding',
          'SLA & full audit logs',
          'Single sign-on (SSO)',
        ],
        cta: 'Talk to sales',
        highlighted: false,
      },
    ],
    note: 'All plans include encryption, per-clinic data isolation and free updates. Prices shown are placeholders — your final pricing is confirmed during the demo.',
  },

  proof: {
    eyebrow: 'Social proof',
    title: 'Clinics trust Dento with their busiest days.',
    subtitle: 'Placeholder metrics & testimonials — swap with real numbers and quotes before launch.',
    stats: [
      { value: '−30%', label: 'no-shows with automated reminders' },
      { value: '2×', label: 'faster patient check-in' },
      { value: '100%', label: 'of records in one secure place' },
      { value: '24/7', label: 'online self-booking' },
    ],
    testimonials: [
      {
        quote:
          'Dento replaced four different tools for us. The team picked it up in a day, and our front desk finally has one screen for everything.',
        name: 'Dr. Sara Hassan',
        role: 'Owner, Bright Smile Dental — Cairo',
      },
      {
        quote:
          'The Arabic interface and WhatsApp booking made the difference for our patients. No-shows are noticeably down.',
        name: 'Dr. Khalid Al-Otaibi',
        role: 'Clinical Director, Lumen Dental — Riyadh',
      },
      {
        quote:
          'Managing three branches used to mean three spreadsheets. Now inventory and reporting are in one place.',
        name: 'Mariam Fouad',
        role: 'Practice Manager, Nile Dental Group',
      },
    ],
  },

  demo: {
    eyebrow: 'Book a demo',
    title: 'See Dento in your clinic in 30 minutes.',
    subtitle:
      "Tell us a little about your practice and we'll set up a personalized walkthrough. No pressure, no credit card.",
    asideTitle: 'What you get',
    asidePoints: [
      'A live walkthrough tailored to your clinic',
      'Answers on migrating from your current tools',
      'A clear setup plan and timeline',
      'Pricing built around your chairs & branches',
    ],
    form: {
      name: 'Full name',
      namePlaceholder: 'Dr. Sara Hassan',
      clinic: 'Clinic name',
      clinicPlaceholder: 'Bright Smile Dental',
      email: 'Work email',
      emailPlaceholder: 'you@clinic.com',
      phone: 'Phone / WhatsApp',
      phonePlaceholder: '+20 1XX XXX XXXX',
      message: 'Anything we should know?',
      messagePlaceholder: 'Number of chairs, branches, current software…',
      optional: 'optional',
      consentBefore: 'I agree to be contacted about my demo and accept the',
      consentLink: 'privacy policy',
      consentAfter: '.',
      submit: 'Request my demo',
      sending: 'Sending…',
    },
    success: {
      title: 'Thanks — your request is in!',
      text: "We'll reach out within one business day to schedule your demo.",
    },
    error: {
      text: 'Something went wrong. Please try again, or email us directly at hello@dento.example.com.',
    },
    demoModeNote:
      'Demo mode: no form endpoint is configured yet (set PUBLIC_FORM_ENDPOINT). Submissions are not sent.',
  },

  footer: {
    tagline:
      'The all-in-one platform for modern dental clinics — Arabic-first and built for the region.',
    productTitle: 'Product',
    companyTitle: 'Company',
    legalTitle: 'Legal',
    contactTitle: 'Contact',
    about: 'About us',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    impressum: 'Impressum',
    address: 'TODO: Company street, City, Country',
    rights: 'All rights reserved.',
    madeNote: 'Built for modern dental clinics worldwide.',
  },

  legal: {
    updatedLabel: 'Last updated:',
    updatedDate: 'TODO — set date',
    placeholderNote:
      '⚠️ Placeholder content — not legal advice. Replace with text reviewed by a qualified lawyer before launch.',
    backToHome: 'Back to home',
    privacy: {
      title: 'Privacy Policy',
      lead: 'How Dento collects, uses and protects personal data submitted through this website.',
      sections: [
        { h: 'Who we are', body: 'TODO: Legal entity, address and contact of the data controller (see Impressum).' },
        { h: 'What we collect', body: 'Data you submit via the demo-request form: name, clinic name, work email, phone and any message. Plus standard server logs.' },
        { h: 'Why we use it', body: 'Solely to respond to your demo request and contact you about Dento. Legal basis: your consent / pre-contractual steps (GDPR Art. 6(1)(a)/(b)).' },
        { h: 'Who can see it', body: 'TODO: Name the form processor and hosting provider, and confirm EU data residency / Data Processing Agreements.' },
        { h: 'How long we keep it', body: 'TODO: State your retention period for demo-request leads.' },
        { h: 'Your rights', body: 'You may request access, correction or deletion of your data, and may withdraw consent at any time. TODO: contact email + supervisory-authority note.' },
        { h: 'Cookies & analytics', body: 'This site uses no tracking cookies. If privacy-friendly, cookieless analytics are enabled, they collect no personal data and set no cookies.' },
      ],
    },
    terms: {
      title: 'Terms of Service',
      lead: 'The terms governing your use of the Dento marketing website.',
      sections: [
        { h: 'Acceptance', body: 'TODO: By using this website you agree to these terms.' },
        { h: 'Use of the site', body: 'TODO: Permitted use, intellectual-property and acceptable-use language.' },
        { h: 'No warranty', body: 'TODO: The site is provided "as is" without warranties; standard limitation-of-liability clause.' },
        { h: 'The Dento service', body: 'TODO: These website terms are separate from the product subscription agreement.' },
        { h: 'Governing law', body: 'TODO: Specify governing law and jurisdiction.' },
        { h: 'Contact', body: 'TODO: How to reach you with questions about these terms.' },
      ],
    },
    impressum: {
      title: 'Impressum',
      lead: 'Legal disclosure as required by §5 DDG (Germany). Complete all fields before launch.',
      sections: [
        { h: 'Provider', body: 'TODO: Company legal name, legal form, and registered street address.' },
        { h: 'Represented by', body: 'TODO: Name(s) of managing director(s) / authorized representative(s).' },
        { h: 'Contact', body: 'TODO: Phone, email and (optionally) fax.' },
        { h: 'Register entry', body: 'TODO: Register court, registration number (Handelsregister / HRB).' },
        { h: 'VAT ID', body: 'TODO: VAT identification number per §27a UStG.' },
        { h: 'Responsible for content', body: 'TODO: Name and address of person responsible for content per §18(2) MStV.' },
      ],
    },
    contact: {
      title: 'Talk to the Dento team',
      lead: 'Questions about Dento, pricing or migrating your clinic? Send us a note and we will get back within one business day.',
      emailLabel: 'Email',
      phoneLabel: 'Phone / WhatsApp',
      addressLabel: 'Address',
    },
  },

  about: {
    metaTitle: 'About Dento',
    metaDescription:
      'Why we built Dento — one calm, secure system for the whole dental clinic — and what we believe.',
    eyebrow: 'About us',
    title: 'We built Dento so clinics can focus on patients, not paperwork.',
    lead: 'Dento started with a simple frustration: running a modern dental clinic meant juggling a dozen disconnected tools. We set out to replace all of them with one calm, secure system.',
    storyTitle: 'Our story',
    story: [
      'Clinic owners kept telling us the same thing — the appointment book never talked to the patient file, the X-rays lived in a phone gallery, and billing happened in a spreadsheet. Good care was getting buried under busywork.',
      'So we built Dento: one platform that carries a patient from their first booking to their final payment — records, dental charts, imaging, billing and insurance, all in one place, and Arabic-first from day one.',
      'Today Dento helps clinics run calmer days, with patient data kept private, encrypted and isolated. And we are only getting started.',
    ],
    valuesTitle: 'What we believe',
    valuesSubtitle: 'The principles behind every decision we make.',
    values: [
      {
        title: 'Everything in one place',
        text: 'One connected system beats ten disconnected apps. Less switching, fewer mistakes, calmer days.',
      },
      {
        title: 'Security is not optional',
        text: 'Patient data deserves bank-grade protection by default — encrypted, isolated and audited.',
      },
      {
        title: 'Built for real clinics',
        text: 'We design around how clinics actually work — your language, your payments, your workflows.',
      },
      {
        title: 'Simple beats clever',
        text: 'Software your whole team can learn in a day, not a quarter. Power without the clutter.',
      },
    ],
    statsTitle: 'Dento today',
    stats: [
      { value: '8+', label: 'tools replaced by one platform' },
      { value: '2', label: 'first-class languages (EN + AR)' },
      { value: '100%', label: 'data encrypted & isolated per clinic' },
      { value: '24/7', label: 'online self-booking for patients' },
    ],
    ctaTitle: 'See Dento in your clinic.',
    ctaText: 'Book a free, personalized demo — no pressure, no credit card.',
    ctaButton: 'Book a demo',
  },
} satisfies Record<string, unknown>;

/** The deck's shape. Every locale file must satisfy this exact structure. */
export type Translation = typeof en;
