import { notFound } from "next/navigation";
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

export async function generateStaticParams() {
  const properties = await getProperties(30);
  return properties.map((property) => ({ id: encodeURIComponent(getPropertyRef(property)) }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const property = await getProperty(decodeURIComponent(id));
  if (!property) return { title: "Property unavailable", robots: { index: false, follow: false } };
  const ref = getPropertyRef(property);
  const title = property ? `${getLocalizedPropertyTitle(property, "en")} | Property in Spain` : "Property in Spain";
  const description = property
    ? `${formatPriceForLocale(property.price, "en")} · ${property.location || property.town || "Spain"} · ${getLocalizedPropertyType(property, "en")}. Request brochure, availability and advice from Zen Eco Homes.`
    : "Property for sale in Spain with Zen Eco Homes.";

  return {
    title,
    description,
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

  if (!property) notFound();

  return <TrackedPropertyDetailView property={property} locale="en" />;
}
