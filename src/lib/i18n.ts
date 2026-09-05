// Flerspråklig grunnlag for zenecohomes.com.
// Norsk (no) ligger på rot uten prefiks; tysk (de) og engelsk (en) under /de og /en.
// hreflang er den autoritative signalen til Google – bygges fra seoEquivalents.

export type Locale = "no" | "de" | "en";
export const locales: Locale[] = ["no", "de", "en"];
export const defaultLocale: Locale = "no";

export const htmlLang: Record<Locale, string> = { no: "no", de: "de", en: "en" };
export const ogLocale: Record<Locale, string> = { no: "nb_NO", de: "de_DE", en: "en_GB" };
export const localeName: Record<Locale, string> = { no: "Norsk", de: "Deutsch", en: "English" };

/** Legg locale-prefiks på en sti ("" for norsk). */
export function withLocale(locale: Locale, path: string): string {
  if (locale === "no") return path;
  return `/${locale}${path === "/" ? "" : path}`;
}

/** Mikro-copy brukt i delte komponenter (SeoLandingView). */
export const ui: Record<
  Locale,
  {
    faqEyebrow: string;
    faqHeading: string;
    nextStep: string;
    advisorHeading: string;
    advisorBody: string;
    contactCta: string;
    relatedHeading: string;
    home: string;
    contactHref: string;
  }
> = {
  no: {
    faqEyebrow: "Vanlige spørsmål",
    faqHeading: "FAQ",
    nextStep: "Neste steg",
    advisorHeading: "Snakk med norsk rådgiver",
    advisorBody: "Få hjelp til å vurdere område, budsjett, boligtype, risiko og riktig prosess før du reserverer.",
    contactCta: "Kontakt oss",
    relatedHeading: "Relaterte sider",
    home: "Forside",
    contactHref: "/#kontakt",
  },
  de: {
    faqEyebrow: "Häufige Fragen",
    faqHeading: "FAQ",
    nextStep: "Nächster Schritt",
    advisorHeading: "Sprechen Sie mit einem Berater",
    advisorBody:
      "Wir helfen Ihnen, Region, Budget, Immobilientyp, Risiken und den richtigen Ablauf zu klären – bevor Sie reservieren.",
    contactCta: "Kontakt aufnehmen",
    relatedHeading: "Verwandte Seiten",
    home: "Startseite",
    contactHref: "/de#kontakt",
  },
  en: {
    faqEyebrow: "Frequently asked questions",
    faqHeading: "FAQ",
    nextStep: "Next step",
    advisorHeading: "Talk to an advisor",
    advisorBody:
      "Get help assessing area, budget, property type, risks and the right process before you reserve.",
    contactCta: "Contact us",
    relatedHeading: "Related pages",
    home: "Home",
    contactHref: "/en#kontakt",
  },
};

/**
 * Ekvivalens-kart for SEO-landingssider på tvers av språk (uten locale-prefiks).
 * Brukes til hreflang. Legg til en rad når en side oversettes.
 */
export const seoEquivalents: { no: string; de?: string; en?: string }[] = [
  { no: "bolig-i-spania", de: "immobilie-in-spanien", en: "property-in-spain" },
  { no: "nybygg-i-spania", de: "neubau-in-spanien", en: "new-build-in-spain" },
  { no: "nybygg-costa-blanca", de: "neubau-costa-blanca", en: "new-build-costa-blanca" },
  { no: "eiendomsradgiver-spania", de: "immobilienberater-spanien", en: "property-advisor-spain" },
  { no: "tomt-i-spania", de: "grundstueck-in-spanien", en: "plot-of-land-in-spain" },
  // Områdesider (long-tail)
  { no: "bolig-i-altea", de: "immobilie-altea", en: "property-in-altea" },
  { no: "bolig-i-albir", de: "immobilie-albir", en: "property-in-albir" },
  { no: "bolig-i-calpe", de: "immobilie-calpe", en: "property-in-calpe" },
  { no: "bolig-i-finestrat", de: "immobilie-finestrat", en: "property-in-finestrat" },
  { no: "bolig-i-polop", de: "immobilie-polop", en: "property-in-polop" },
  { no: "bolig-i-pinoso", de: "immobilie-pinoso", en: "property-in-pinoso" },
];

const BASE = "https://www.zenecohomes.com";

/** Bygg Next `alternates.languages` (hreflang) for en SEO-side. */
export function seoHreflang(eq: { no: string; de?: string; en?: string }): Record<string, string> {
  const languages: Record<string, string> = {
    "nb-NO": `${BASE}/${eq.no}`,
    "x-default": `${BASE}/${eq.no}`,
  };
  if (eq.de) languages["de-DE"] = `${BASE}/de/${eq.de}`;
  if (eq.en) languages["en"] = `${BASE}/en/${eq.en}`;
  return languages;
}

/** Finn ekvivalens-raden ut fra slug i et gitt språk. */
export function findEquivalentBySlug(locale: Locale, slug: string) {
  return seoEquivalents.find((e) => e[locale] === slug);
}

/** hreflang for forsidene (no=/, de=/de, en=/en). */
export function homeHreflang(): Record<string, string> {
  return {
    "nb-NO": `${BASE}/`,
    "x-default": `${BASE}/`,
    "de-DE": `${BASE}/de`,
    en: `${BASE}/en`,
  };
}

/** Hovedmeny per språk. Norsk beholder full meny; de/en får en lokalisert,
 *  litt slankere meny som kun peker til sider vi faktisk har på språket. */
export type NavLink = { label: string; href: string; external?: boolean; cta?: boolean };

/** Keyholding / property care ligger på eget subdomene (care.zenecohomes.com). */
export const CARE_URL = "https://care.zenecohomes.com";

export function navLinks(locale: Locale): NavLink[] {
  if (locale === "de") {
    return [
      { label: "Immobilien", href: "/de/immobilien" },
      { label: "Inland", href: "/de/inland" },
      { label: "Neubau", href: "/de/neubau-costa-blanca" },
      { label: "Beratung", href: "/de/immobilienberater-spanien" },
      { label: "Keyholding", href: CARE_URL, external: true },
      { label: "Kontakt", href: "/de#kontakt" },
      { label: "Über Freddy", href: "https://www.freddybremseth.com", external: true },
      { label: "Mein Bereich", href: "/de/min-side", cta: true },
    ];
  }
  if (locale === "en") {
    return [
      { label: "Properties", href: "/en/properties" },
      { label: "Inland", href: "/en/inland" },
      { label: "New build", href: "/en/new-build-costa-blanca" },
      { label: "Advice", href: "/en/property-advisor-spain" },
      { label: "Keyholding", href: CARE_URL, external: true },
      { label: "Contact", href: "/en#kontakt" },
      { label: "About Freddy", href: "https://www.freddybremseth.com", external: true },
      { label: "My account", href: "/en/min-side", cta: true },
    ];
  }
  return [
    { label: "Boliger", href: "/eiendommer" },
    { label: "Innlandet", href: "/inland" },
    { label: "Tomter", href: "/tomter" },
    { label: "Områder", href: "/omrader" },
    { label: "Keyholding", href: CARE_URL, external: true },
    { label: "Kjøpsprosess", href: "/kjopsprosessen" },
    { label: "Magasin", href: "/magasin" },
    { label: "Om Freddy", href: "https://www.freddybremseth.com", external: true },
    { label: "Min side", href: "/min-side", cta: true },
  ];
}

/** Språkbytter-lenker for forsidene. */
export function homeLanguageLinks(current: Locale): { locale: Locale; href: string; current: boolean }[] {
  return [
    { locale: "no", href: "/", current: current === "no" },
    { locale: "de", href: "/de", current: current === "de" },
    { locale: "en", href: "/en", current: current === "en" },
  ];
}
