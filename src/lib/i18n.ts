// Flerspråklig grunnlag for zenecohomes.com.
// Norsk (no) ligger på rot uten prefiks; tysk (de), engelsk (en) og spansk (es)
// under egne språkprefiks. hreflang er det autoritative signalet til Google.

/** Eksisterende applikasjons-locale brukt av eldre delte komponenter. */
export type Locale = "no" | "de" | "en";
/** Alle offentlige nettstedsspråk. Spansk holdes kompatibelt med eldre komponenter. */
export type SiteLocale = Locale | "es";

export const locales: Locale[] = ["no", "de", "en"];
export const siteLocales: SiteLocale[] = ["no", "de", "en", "es"];
export const defaultLocale: SiteLocale = "no";

export const htmlLang: Record<SiteLocale, string> = { no: "no", de: "de", en: "en", es: "es" };
export const ogLocale: Record<SiteLocale, string> = { no: "nb_NO", de: "de_DE", en: "en_GB", es: "es_ES" };
export const localeName: Record<SiteLocale, string> = {
  no: "Norsk",
  de: "Deutsch",
  en: "English",
  es: "Español",
};

/** Legg locale-prefiks på en sti ("" for norsk). */
export function withLocale(locale: SiteLocale, path: string): string {
  if (locale === "no") return path;
  return `/${locale}${path === "/" ? "" : path}`;
}

/** Mikro-copy brukt i delte SEO-komponenter. */
export const ui: Record<
  SiteLocale,
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
  es: {
    faqEyebrow: "Preguntas frecuentes",
    faqHeading: "Preguntas frecuentes",
    nextStep: "Siguiente paso",
    advisorHeading: "Habla con un asesor inmobiliario",
    advisorBody:
      "Te ayudamos a valorar zona, presupuesto, tipo de vivienda, riesgos y el proceso correcto antes de reservar.",
    contactCta: "Contactar",
    relatedHeading: "Páginas relacionadas",
    home: "Inicio",
    contactHref: "/es#contacto",
  },
};

/**
 * Ekvivalens-kart for SEO-landingssider på tvers av språk (uten locale-prefiks).
 * Brukes til hreflang. Legg til en rad når en side oversettes.
 */
export type SeoEquivalent = { no: string; de?: string; en?: string; es?: string };

export const seoEquivalents: SeoEquivalent[] = [
  { no: "bolig-i-spania", de: "immobilie-in-spanien", en: "property-in-spain", es: "vivienda-en-espana" },
  { no: "nybygg-i-spania", de: "neubau-in-spanien", en: "new-build-in-spain", es: "obra-nueva-en-espana" },
  { no: "nybygg-costa-blanca", de: "neubau-costa-blanca", en: "new-build-costa-blanca", es: "obra-nueva-costa-blanca" },
  {
    no: "eiendomsradgiver-spania",
    de: "immobilienberater-spanien",
    en: "property-advisor-spain",
    es: "asesor-inmobiliario-espana",
  },
  { no: "tomt-i-spania", de: "grundstueck-in-spanien", en: "plot-of-land-in-spain", es: "terreno-en-espana" },
  // Områdesider (long-tail)
  { no: "bolig-i-altea", de: "immobilie-altea", en: "property-in-altea", es: "vivienda-en-altea" },
  { no: "bolig-i-albir", de: "immobilie-albir", en: "property-in-albir", es: "vivienda-en-albir" },
  { no: "bolig-i-calpe", de: "immobilie-calpe", en: "property-in-calpe", es: "vivienda-en-calpe" },
  { no: "bolig-i-finestrat", de: "immobilie-finestrat", en: "property-in-finestrat", es: "vivienda-en-finestrat" },
  { no: "bolig-i-polop", de: "immobilie-polop", en: "property-in-polop", es: "vivienda-en-polop" },
  { no: "bolig-i-pinoso", de: "immobilie-pinoso", en: "property-in-pinoso", es: "vivienda-en-pinoso" },
];

const BASE = "https://www.zenecohomes.com";

/** Bygg Next `alternates.languages` (hreflang) for en SEO-side. */
export function seoHreflang(eq: SeoEquivalent): Record<string, string> {
  const languages: Record<string, string> = {
    "nb-NO": `${BASE}/${eq.no}`,
    "x-default": `${BASE}/${eq.no}`,
  };
  if (eq.de) languages["de-DE"] = `${BASE}/de/${eq.de}`;
  if (eq.en) languages.en = `${BASE}/en/${eq.en}`;
  if (eq.es) languages["es-ES"] = `${BASE}/es/${eq.es}`;
  return languages;
}

/** Finn ekvivalens-raden ut fra slug i et gitt språk. */
export function findEquivalentBySlug(locale: SiteLocale, slug: string) {
  return seoEquivalents.find((e) => e[locale] === slug);
}

/** hreflang for forsidene. */
export function homeHreflang(): Record<string, string> {
  return {
    "nb-NO": `${BASE}/`,
    "x-default": `${BASE}/`,
    "de-DE": `${BASE}/de`,
    en: `${BASE}/en`,
    "es-ES": `${BASE}/es`,
  };
}

export type NavLink = { label: string; href: string; external?: boolean; cta?: boolean };

/** Keyholding / property care ligger på eget subdomene (care.zenecohomes.com). */
export const CARE_URL = "https://care.zenecohomes.com";

export function navLinks(locale: SiteLocale): NavLink[] {
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
  if (locale === "es") {
    return [
      { label: "Propiedades", href: "/es/propiedades" },
      { label: "Interior", href: "/es/interior" },
      { label: "Terrenos", href: "/es/terreno-en-espana" },
      { label: "Zonas", href: "/es/zonas" },
      { label: "Keyholding", href: CARE_URL, external: true },
      { label: "Proceso de compra", href: "/es/proceso-de-compra" },
      { label: "Guías", href: "/es/guias" },
      { label: "Sobre Freddy", href: "/es/sobre-freddy" },
      { label: "Mi área", href: "/es/mi-area", cta: true },
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
    { label: "Om Freddy", href: "/om-freddy" },
    { label: "Min side", href: "/min-side", cta: true },
  ];
}

/** Språkbytter-lenker for forsidene. */
export function homeLanguageLinks(current: SiteLocale): { locale: SiteLocale; href: string; current: boolean }[] {
  return [
    { locale: "no", href: "/", current: current === "no" },
    { locale: "de", href: "/de", current: current === "de" },
    { locale: "en", href: "/en", current: current === "en" },
    { locale: "es", href: "/es", current: current === "es" },
  ];
}
