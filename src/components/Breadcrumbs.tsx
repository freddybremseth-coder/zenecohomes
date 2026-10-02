"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { SiteLocale } from "@/lib/i18n";

const labels: Record<SiteLocale, Record<string, string>> = {
  no: {
    eiendommer: "Boliger",
    omrader: "Områder",
    guide: "Guide",
    magasin: "Magasin",
    kjopsprosessen: "Kjøpsprosessen",
    kjopsprosess: "Kjøpsprosessen",
    visningstur: "Visningstur",
    kundeomtaler: "Kundeomtaler",
    "om-oss": "Om oss",
    booking: "Få rådgivning",
    "bedriftshytte-spania": "Bedrift",
    "min-side": "Min side",
    personvern: "Personvern",
    informasjonskapsler: "Informasjonskapsler",
    sammenlign: "Sammenlign",
    inland: "Innlandet",
    tomter: "Tomter",
  },
  en: {
    properties: "Properties",
    areas: "Areas",
    guides: "Guides",
    "buying-process": "Buying process",
    compare: "Compare",
    booking: "Booking",
    inland: "Inland",
    "about-freddy": "About Freddy",
    "min-side": "My account",
  },
  de: {
    immobilien: "Immobilien",
    regionen: "Regionen",
    ratgeber: "Ratgeber",
    kaufprozess: "Kaufprozess",
    vergleichen: "Vergleichen",
    termin: "Termin",
    inland: "Inland",
    "ueber-freddy": "Über Freddy",
    "min-side": "Mein Bereich",
  },
  es: {
    propiedades: "Propiedades",
    zonas: "Zonas",
    guias: "Guías",
    "proceso-de-compra": "Proceso de compra",
    cita: "Cita",
    interior: "Interior",
    "sobre-freddy": "Sobre Freddy",
    "mi-area": "Mi área",
  },
};

const homeLabel: Record<SiteLocale, string> = {
  no: "Forside",
  en: "Home",
  de: "Startseite",
  es: "Inicio",
};

const propertyDetailPatterns = [
  /^\/eiendommer\/[^/]+$/,
  /^\/en\/properties\/[^/]+$/,
  /^\/de\/immobilien\/[^/]+$/,
  /^\/es\/propiedades\/[^/]+$/,
];

function humanize(segment: string, locale: SiteLocale, index: number, segments: string[]) {
  if (labels[locale][segment]) return labels[locale][segment];

  const previous = segments[index - 1];
  if (
    previous === "eiendommer" ||
    previous === "properties" ||
    previous === "immobilien" ||
    previous === "propiedades"
  ) {
    return locale === "de" ? "Immobilie" : locale === "en" ? "Property" : locale === "es" ? "Vivienda" : "Bolig";
  }

  return decodeURIComponent(segment)
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

export function Breadcrumbs({ locale = "no" }: { locale?: SiteLocale }) {
  const pathname = usePathname() || "/";
  const normalized = pathname.replace(/\/$/, "") || "/";
  if (normalized === "/" || normalized === `/${locale}` || propertyDetailPatterns.some((pattern) => pattern.test(normalized))) {
    return null;
  }

  const rawSegments = normalized.split("/").filter(Boolean);
  const segments = ["en", "de", "es"].includes(rawSegments[0]) ? rawSegments.slice(1) : rawSegments;
  const localePrefix = locale === "no" ? "" : `/${locale}`;

  const items = [
    { label: homeLabel[locale], href: localePrefix || "/" },
    ...segments.map((segment, index) => {
      const path = segments.slice(0, index + 1).join("/");
      return {
        label: humanize(segment, locale, index, segments),
        href: `${localePrefix}/${path}`,
      };
    }),
  ];

  return (
    <nav className="global-breadcrumbs" aria-label={locale === "no" ? "Brødsmuler" : "Breadcrumb"}>
      <ol>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.href}>
              {isLast ? (
                <span aria-current="page">{item.label}</span>
              ) : (
                <Link href={item.href}>{item.label}</Link>
              )}
              {!isLast ? <span className="breadcrumb-separator" aria-hidden="true">/</span> : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
