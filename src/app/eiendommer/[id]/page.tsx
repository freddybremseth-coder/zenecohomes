import { PropertyDetailView, PropertyNotFoundView } from "@/components/PropertyDetailView";
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
  // Aldri publiser plassholdere (samsvarer med RealtyFlows «ikke publiser Villa i Ukjent»).
  if (/\b(ukjent|ikke angitt|unknown)\b/i.test(t)) return "";
  const letters = t.replace(/[^A-Za-zÆØÅæøå]/g, "");
  const caps = letters.replace(/[^A-ZÆØÅ]/g, "");
  if (letters.length > 8 && caps.length / letters.length > 0.7) return "";
  // Lengdevakt (for titler): rå marketingtitler er lange – kun korte, rene titler slipper gjennom.
  if (maxLen && t.length > maxLen) return "";
  return t;
}

function truncateMeta(value: string): string {
  if (!value) return "";
  return value.length > 160 ? `${value.slice(0, 157).replace(/\s+\S*$/, "").trim()}…` : value;
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
  // Ren, konstruert SEO-tittel ("Villa med 3 soverom i Polop") i stedet for den rå
  // marketingtittelen fra feeden. Layout-templaten legger på "| Zen Eco Homes".
  const propType = property ? getLocalizedPropertyType(property, "no") : "Bolig";
  const cleanTitle = property
    ? property.bedrooms
      ? `${propType} med ${property.bedrooms} soverom i ${town}`
      : `${propType} i ${town}`
    : "Bolig i Spania";

  // SEO-tittel: prioritet meta_title_no → title_no → lokal fallback. Bruker kun rene
  // verdier (unngår rå ALL-CAPS/entity-tekst før RealtyFlow-backfill er kjørt). Branding
  // "| Zen Eco Homes" legges på én gang av layout-templaten.
  const title = pickSeoText(property?.meta_title_no, 65) || pickSeoText(property?.title_no, 65) || cleanTitle;

  // Meta-beskrivelse: meta_description_no → editorial_no/description_no → faktabasert fallback.
  const editorialMeta =
    property && property.editorial_no_approved !== false
      ? buildEditorialDescription(property.editorial_no).replace(/\s+/g, " ").trim()
      : "";
  const metaDescNo = pickSeoText(property?.meta_description_no);
  const descNo = pickSeoText(property?.description_no);
  const description =
    metaDescNo ||
    truncateMeta(editorialMeta) ||
    truncateMeta(descNo) ||
    (property
      ? `${propType}${property.bedrooms ? ` med ${property.bedrooms} soverom` : ""} i ${town}. ${formatPriceForLocale(property.price, "no")} – se pris, estimert kjøpskostnad, hva som bør kontrolleres og Zen Eco Homes' vurdering.`
      : "Bolig til salgs i Spania hos Zen Eco Homes.");
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

  return <PropertyDetailView property={property} locale="no" />;
}
