export type Locale = "ar" | "en";

export interface Bilingual {
  ar: string;
  en: string;
}

export interface BilingualList {
  ar: string[];
  en: string[];
}

export interface Dictionary {
  meta: {
    titleSuffix: string;
    defaultDescription: string;
  };
  nav: {
    home: string;
    about: string;
    services: string;
    portfolio: string;
    pricing: string;
    team: string;
    testimonials: string;
    faq: string;
    contact: string;
    startProject: string;
    langSwitch: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    headlineHighlight: string;
    subhead: string;
    ctaPrimary: string;
    ctaSecondary: string;
    scrollHint: string;
  };
  trustedBy: {
    label: string;
  };
  stats: {
    label: string;
  };
  services: {
    eyebrow: string;
    title: string;
    subtitle: string;
    viewAll: string;
    problem: string;
    solution: string;
    benefits: string;
    ctaCard: string;
  };
  portfolio: {
    eyebrow: string;
    title: string;
    subtitle: string;
    viewAll: string;
    filterAll: string;
    viewProject: string;
    related: string;
    close: string;
  };
  pricing: {
    eyebrow: string;
    title: string;
    subtitle: string;
    recommended: string;
    startingAt: string;
    egp: string;
    perMonth: string;
    requestQuote: string;
    categories: {
      social: string;
      branding: string;
      ads: string;
      web: string;
    };
    note: string;
  };
  team: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  testimonials: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    subtitle: string;
    stillHave: string;
    contactUs: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    subtitle: string;
    formName: string;
    formEmail: string;
    formPhone: string;
    formService: string;
    formBudget: string;
    formMessage: string;
    formMessagePlaceholder: string;
    formSubmit: string;
    formSubmitting: string;
    formSuccess: string;
    formSuccessSub: string;
    formSelectService: string;
    formSelectBudget: string;
    directLabel: string;
    whatsappCta: string;
    addressLabel: string;
    hoursLabel: string;
    hoursValue: string;
    socialLabel: string;
    mapPlaceholder: string;
  };
  about: {
    eyebrow: string;
    title: string;
    intro: string;
    missionLabel: string;
    mission: string;
    values: { title: string; desc: string }[];
    processTitle: string;
    processSubtitle: string;
    processSteps: { label: string; title: string; desc: string }[];
  };
  cta: {
    title: string;
    subtitle: string;
    primary: string;
    secondary: string;
  };
  footer: {
    tagline: string;
    quickLinks: string;
    servicesTitle: string;
    contactTitle: string;
    rights: string;
    madeWith: string;
  };
  whatsapp: {
    tooltip: string;
    defaultMessage: string;
  };
  common: {
    readMore: string;
    learnMore: string;
    backHome: string;
    minutesToRead: string;
  };
}
