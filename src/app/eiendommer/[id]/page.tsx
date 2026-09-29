import { PropertyNotFoundView } from "@/components/PropertyDetailView";
import { TrackedPropertyDetailView } from "@/components/TrackedPropertyDetailView";
import { getPropertyDetailPath, propertyHreflang } from "@/lib/propertyRouting";
import {
  buildEditorialDescription,
  formatPriceForLocale,
  getLocalizedPropertyType,
  getProperties,
  getProperty,
  getPropertyRef,
  getPropertyTown,
} from "@/lib/realtyflow";

/**
 * Slipper kun gjennom "rene" SEO-verdier: avviser tomt, rå HTML-entities og
 * ROPENDE ALL-CAPS-feedtekst. Beskytter mot rå feed-tekst før RealtyFlow-backfill.
 */
function pickSeoText(value?: string | null, maxLen?: number): string {
  const t = (value || "").replace(/\s+/g, " ").trim();
  if (!t) return "";
  if (/&#\d|&[a-z]+;/i.test(t)) return "";
  if (/\b(ukjent|ikke angitt|unknown)\b/i.test(t)) return "";
  const letters = t.replace(/[^A-Za-zÆØÅæøå]/g, "");
  const caps = letters.replace(/[^A-ZÆØÅ]/g, "");
  if (letters.length > 8 && caps.length / letters.length > 0.7) return "";
  if (maxLen && t.length > maxLen) return "";
  return t;
}

function truncateMeta(value: string): string {
  if (!value) return "";
  return value.length > 160 ? `${value.slice(0, 157).replace(/\s+\S*$/, "").trim()}…` : value;
}

function fitSeoTitle(value: string): string {
  const clean = value.replace(/\s+/g, " ").trim();
  if (clean.length >= 50 && clean.length <= 60) return clean;

  const candidates = [
    `${clean} | Spania`,
    `${clean} | Zen Eco Homes`,
    `${clean} | Bolig i Spania`,
    `${clean} | Bolig i Spania | Zen Eco Homes`,
    `${clean} til salgs | Bolig i Spania | Zen Eco Homes`,
  ];
  const fitted = candidates.find((candidate) => candidate.length >= 50 && candidate.length <= 60);
  if (fitted) return fitted;

  const fallback = candidates[candidates.length - 1];
  if (fallback.length <= 60) return fallback;
  return fallback.slice(0, 60).replace(/\s+\S*$/, "").trim();
}

function fitMetaDescription(value: string, fallback: string): string {
  let clean = (value || fallback).replace(/\s+/g, " ").trim();
  if (clean.length < 140) {
    clean += " Se pris, nøkkelfakta, område og hva som bør kontrolleres før visning og kjøp med Zen Eco Homes.";
  }
  if (clean.length < 140) {
    clean += " Få norsk rådgivning før du reserverer.";
  }
  return truncateMeta(clean);
}

export async function generateStaticParams() {
  const properties = await getProperties(30);
  return properties.map((property) => ({ id: encodeURIComponent(getPropertyRef(property)) }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const property = await getProperty(decodeURIComponent(id));
  const ref = property ? getPropertyRef(property) : decodeURIComponent(id);
  const town = property ? getPropertyTown(property) || property.location || "Spania" : "Spania";
  const propType = property ? getLocalizedPropertyType(property, "no") : "Bolig";
  const cleanTitle = property
    ? property.bedrooms
      ? `${propType} med ${property.bedrooms} soverom i ${town}`
      : `${propType} i ${town}`
    : "Bolig i Spania";

  const sourceTitle = pickSeoText(property?.meta_title_no, 60) || pickSeoText(property?.title_no, 60) || cleanTitle;
  const title = fitSeoTitle(sourceTitle);
  const editorialMeta =
    property && property.editorial_no_approved !== false
      ? buildEditorialDescription(property.editorial_no).replace(/\s+/g, " ").trim()
      : "";
  const metaDescNo = pickSeoText(property?.meta_description_no);
  const descNo = pickSeoText(property?.description_no);
  const fallbackDescription = property
    ? `${propType}${property.bedrooms ? ` med ${property.bedrooms} soverom` : ""} i ${town}. ${formatPriceForLocale(property.price, "no")} – se pris, estimert kjøpskostnad, hva som bør kontrolleres og Zen Eco Homes' vurdering.`
    : "Bolig til salgs i Spania hos Zen Eco Homes.";
  const description = fitMetaDescription(metaDescNo || editorialMeta || descNo, fallbackDescription);
  const ogImage = `https://www.zenecohomes.com/eiendommer/${encodeURIComponent(ref)}/og`;

  return {
    title,
    description,
    alternates: {
      canonical: getPropertyDetailPath(ref, "no"),
      languages: propertyHreflang(ref),
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://www.zenecohomes.com${getPropertyDetailPath(ref, "no")}`,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function PropertyPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const property = await getProperty(decodeURIComponent(id));

  if (!property) return <PropertyNotFoundView locale="no" />;

  return <TrackedPropertyDetailView property={property} locale="no" />;
}
