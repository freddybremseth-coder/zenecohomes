import { siteLocales, type Locale, type SiteLocale } from "@/lib/i18n";

const BASE = "https://www.zenecohomes.com";

export const propertyListPathByLocale: Record<SiteLocale, string> = {
  no: "/eiendommer",
  de: "/de/immobilien",
  en: "/en/properties",
  es: "/es/propiedades",
};

export function getPropertyDetailPath(ref: string, locale: SiteLocale) {
  return `${propertyListPathByLocale[locale]}/${encodeURIComponent(ref)}`;
}

/** Backwards-compatible helper used by the Spanish-specific property components. */
export function getSpanishPropertyDetailPath(ref: string) {
  return getPropertyDetailPath(ref, "es");
}

/** Existing NO/DE/EN detail view can now expose Spanish as an equivalent language. */
export function propertyLanguageLinks(ref: string, current: Locale) {
  return siteLocales.map((locale) => ({
    locale,
    href: getPropertyDetailPath(ref, locale),
    current: locale === current,
  }));
}

export function propertyListLanguageLinks(current: SiteLocale) {
  return siteLocales.map((locale) => ({
    locale,
    href: propertyListPathByLocale[locale],
    current: locale === current,
  }));
}

export function propertyHreflang(ref: string) {
  return {
    "nb-NO": `${BASE}${getPropertyDetailPath(ref, "no")}`,
    "x-default": `${BASE}${getPropertyDetailPath(ref, "no")}`,
    "de-DE": `${BASE}${getPropertyDetailPath(ref, "de")}`,
    en: `${BASE}${getPropertyDetailPath(ref, "en")}`,
    "es-ES": `${BASE}${getPropertyDetailPath(ref, "es")}`,
  };
}
