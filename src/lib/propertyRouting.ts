import type { Locale } from "@/lib/i18n";

const BASE = "https://www.zenecohomes.com";

export const propertyListPathByLocale: Record<Locale, string> = {
  no: "/eiendommer",
  de: "/de/immobilien",
  en: "/en/properties",
};

export function getPropertyDetailPath(ref: string, locale: Locale) {
  return `${propertyListPathByLocale[locale]}/${encodeURIComponent(ref)}`;
}

export function propertyLanguageLinks(ref: string, current: Locale) {
  return (["no", "de", "en"] as Locale[]).map((locale) => ({
    locale,
    href: getPropertyDetailPath(ref, locale),
    current: locale === current,
  }));
}

export function propertyListLanguageLinks(current: Locale) {
  return (["no", "de", "en"] as Locale[]).map((locale) => ({
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
  };
}
