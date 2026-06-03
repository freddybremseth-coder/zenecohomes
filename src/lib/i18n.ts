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
    contactHref: "https://appointment.chatgenius.pro/zeneco",
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
    contactHref: "https://appointment.chatgenius.pro/zeneco",
  },
};

/**
 * Ekvivalens-kart for SEO-landingssider på tvers av språk (uten locale-prefiks).
 * Brukes til hreflang. Legg til en rad når en side oversettes.
 */
export const seoEquivalents: { no: string; de?: string; en?: string }[] = [
  { no: "bolig-i-spania", de: "immobilie-in-spanien" },
  { no: "nybygg-costa-blanca", de: "neubau-costa-blanca" },
  { no: "eiendomsradgiver-spania", de: "immobilienberater-spanien" },
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
