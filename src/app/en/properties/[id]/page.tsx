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
    `${clean} | Spain`,
    `${clean} | Zen Eco Homes`,
    `${clean} | Property in Spain`,
    `${clean} | Property in Spain | Zen Eco Homes`,
  ];
  const fitted = candidates.find((candidate) => candidate.length >= 50 && candidate.length <= 60);
  if (fitted) return fitted;
  const fallback = candidates[candidates.length - 1];
  return fallback.length <= 60 ? fallback : fallback.slice(0, 60).replace(/\s+\S*$/, "").trim();
}

function fitMetaDescription(value: string) {
  let clean = value.replace(/\s+/g, " ").trim();
  if (clean.length < 140) {
    clean += " See price, key facts, location and what to verify before viewing or reserving with Zen Eco Homes.";
  }
  if (clean.length > 160) {
    clean = `${clean.slice(0, 157).replace(/\s+\S*$/, "").trim()}…`;
  }
  return clean;
}

export async function generateStaticParams() {
  const properties = await getProperties(30);
  return properties.map((property) => ({ id: encodeURIComponent(getPropertyRef(property)) }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const property = await getProperty(decodeURIComponent(id));
  const ref = property ? getPropertyRef(property) : decodeURIComponent(id);
  const rawTitle = property ? `${getLocalizedPropertyTitle(property, "en")} | Property in Spain` : "Property in Spain";
  const title = fitSeoTitle(rawTitle);
  const rawDescription = property
    ? `${formatPriceForLocale(property.price, "en")} · ${property.location || property.town || "Spain"} · ${getLocalizedPropertyType(property, "en")}. Request brochure, availability and advice from Zen Eco Homes.`
    : "Property for sale in Spain with Zen Eco Homes.";
  const description = fitMetaDescription(rawDescription);

  return {
    title,
    description,
    robots: property ? undefined : { index: false, follow: true },
    alternates: {
      canonical: getPropertyDetailPath(ref, "en"),
      languages: propertyHreflang(ref),
    },
    openGraph: {
      title,
      description,
      locale: "en_GB",
      type: "website",
      url: `https://www.zenecohomes.com${getPropertyDetailPath(ref, "en")}`,
    },
  };
}

export default async function EnglishPropertyPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const property = await getProperty(decodeURIComponent(id));

  if (!property) return <PropertyNotFoundView locale="en" />;

  return <TrackedPropertyDetailView property={property} locale="en" />;
}
