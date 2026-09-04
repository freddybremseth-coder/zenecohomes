import { PropertyDetailView, PropertyNotFoundView } from "@/components/PropertyDetailView";
import { getPropertyDetailPath, propertyHreflang } from "@/lib/propertyRouting";
import {
  formatPriceForLocale,
  getLocalizedPropertyTitle,
  getLocalizedPropertyType,
  getProperties,
  getProperty,
  getPropertyRef,
} from "@/lib/realtyflow";

export async function generateStaticParams() {
  const properties = await getProperties(30);
  return properties.map((property) => ({ id: encodeURIComponent(getPropertyRef(property)) }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const property = await getProperty(decodeURIComponent(id));
  const ref = property ? getPropertyRef(property) : decodeURIComponent(id);
  const title = property ? `${getLocalizedPropertyTitle(property, "de")} | Immobilie in Spanien` : "Immobilie in Spanien";
  const description = property
    ? `${formatPriceForLocale(property.price, "de")} · ${property.location || property.town || "Spanien"} · ${getLocalizedPropertyType(property, "de")}. Fordern Sie Exposé, Verfügbarkeit und Beratung von Zen Eco Homes an.`
    : "Immobilie zum Verkauf in Spanien bei Zen Eco Homes.";

  return {
    title,
    description,
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

  return <PropertyDetailView property={property} locale="de" />;
}
