import { PropertyNotFoundView } from "@/components/PropertyDetailView";
import { TrackedPropertyDetailView } from "@/components/TrackedPropertyDetailView";
import { getPropertyDetailPath, propertyHreflang } from "@/lib/propertyRouting";
import {
  formatPriceForLocale,
  getLocalizedPropertyTitle,
  getLocalizedPropertyType,
  getProperties,
  getProperty,
  getPropertyRef,
} from "@/lib/realtyflow";

function fitSeoTitle(value: string) {
  const clean = value.replace(/\s+/g, " ").trim();
  if (clean.length >= 50 && clean.length <= 60) return clean;
  const candidates = [
    `${clean} | Spanien`,
    `${clean} | Zen Eco Homes`,
    `${clean} | Immobilie in Spanien`,
    `${clean} | Immobilie Spanien | Zen Eco Homes`,
  ];
  const fitted = candidates.find((candidate) => candidate.length >= 50 && candidate.length <= 60);
  if (fitted) return fitted;
  const fallback = candidates[candidates.length - 1];
  return fallback.length <= 60 ? fallback : fallback.slice(0, 60).replace(/\s+\S*$/, "").trim();
}

function fitMetaDescription(value: string) {
  let clean = value.replace(/\s+/g, " ").trim();
  if (clean.length < 140) {
    clean += " Sehen Sie Preis, Eckdaten, Lage und wichtige Prüfpunkte vor Besichtigung oder Reservierung mit Zen Eco Homes.";
  }
  if (clean.length > 160) {
    clean = `${clean.slice(0, 157).replace(/\s+\S*$/, "").trim()}…`;
  }
  return clean;
}

export async function generateStaticParams() {
  const properties = await getProperties(30, "zeneco");
  return properties.map((property) => ({ id: encodeURIComponent(getPropertyRef(property)) }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const property = await getProperty(decodeURIComponent(id));
  const ref = property ? getPropertyRef(property) : decodeURIComponent(id);
  const rawTitle = property ? `${getLocalizedPropertyTitle(property, "de")} | Immobilie in Spanien` : "Immobilie in Spanien";
  const title = fitSeoTitle(rawTitle);
  const rawDescription = property
    ? `${formatPriceForLocale(property.price, "de")} · ${property.location || property.town || "Spanien"} · ${getLocalizedPropertyType(property, "de")}. Fordern Sie Exposé, Verfügbarkeit und Beratung von Zen Eco Homes an.`
    : "Immobilie zum Verkauf in Spanien bei Zen Eco Homes.";
  const description = fitMetaDescription(rawDescription);

  return {
    title,
    description,
    robots: property ? undefined : { index: false, follow: true },
    alternates: {
      canonical: getPropertyDetailPath(ref, "de"),
      languages: propertyHreflang(ref),
    },
    openGraph: {
      title,
      description,
      locale: "de_DE",
      type: "website",
      url: `https://www.zenecohomes.com${getPropertyDetailPath(ref, "de")}`,
    },
  };
}

export default async function GermanPropertyPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const property = await getProperty(decodeURIComponent(id));

  if (!property) return <PropertyNotFoundView locale="de" />;

  return <TrackedPropertyDetailView property={property} locale="de" />;
}
