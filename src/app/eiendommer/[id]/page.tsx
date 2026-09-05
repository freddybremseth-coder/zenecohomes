import { PropertyDetailView, PropertyNotFoundView } from "@/components/PropertyDetailView";
import { getPropertyDetailPath, propertyHreflang } from "@/lib/propertyRouting";
import {
  formatPriceForLocale,
  getLocalizedPropertyTitle,
  getLocalizedPropertyType,
  getProperties,
  getProperty,
  getPropertyRef,
  getPropertyTown,
} from "@/lib/realtyflow";

export async function generateStaticParams() {
  const properties = await getProperties(30);
  return properties.map((property) => ({ id: encodeURIComponent(getPropertyRef(property)) }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const property = await getProperty(decodeURIComponent(id));
  const ref = property ? getPropertyRef(property) : decodeURIComponent(id);
  const town = property ? getPropertyTown(property) || property.location || "Spania" : "Spania";
  const title = property ? `${getLocalizedPropertyTitle(property, "no")} | Bolig i Spania` : "Bolig i Spania";
  const description = property
    ? `${formatPriceForLocale(property.price, "no")} · ${town} · ${getLocalizedPropertyType(property, "no")}. Be om prospekt, tilgjengelighet og norsk vurdering fra Zen Eco Homes.`
    : "Bolig til salgs i Spania hos Zen Eco Homes.";
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
