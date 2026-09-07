import { PropertyDetailView, PropertyNotFoundView } from "@/components/PropertyDetailView";
import { getPropertyDetailPath, propertyHreflang } from "@/lib/propertyRouting";
import {
  formatPriceForLocale,
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
  // Ren, konstruert SEO-tittel ("Villa med 3 soverom i Polop") i stedet for den rå
  // marketingtittelen fra feeden. Layout-templaten legger på "| Zen Eco Homes".
  const propType = property ? getLocalizedPropertyType(property, "no") : "Bolig";
  const cleanTitle = property
    ? property.bedrooms
      ? `${propType} med ${property.bedrooms} soverom i ${town}`
      : `${propType} i ${town}`
    : "Bolig i Spania";
  const title = cleanTitle;
  const description = property
    ? `${propType}${property.bedrooms ? ` med ${property.bedrooms} soverom` : ""} i ${town}. ${formatPriceForLocale(property.price, "no")} – se pris, estimert kjøpskostnad, hva som bør kontrolleres og Zen Eco Homes' vurdering.`
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
