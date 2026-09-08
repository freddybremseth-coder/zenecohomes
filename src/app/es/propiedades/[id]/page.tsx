import type { Metadata } from "next";
import { SpanishPropertyNotFoundView } from "@/components/es/SpanishPropertyDetailView";
import { TrackedSpanishPropertyDetailView } from "@/components/es/TrackedSpanishPropertyDetailView";
import { getProperties, getProperty, getPropertyRef } from "@/lib/realtyflow";
import {
  getSpanishPropertyHeading,
  getSpanishPropertySeoDescription,
} from "@/lib/spanishProperty";

const BASE = "https://www.zenecohomes.com";

export async function generateStaticParams() {
  const properties = await getProperties(30);
  return properties.map((property) => ({ id: encodeURIComponent(getPropertyRef(property)) }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const decoded = decodeURIComponent(id);
  const property = await getProperty(decoded);
  const ref = property ? getPropertyRef(property) : decoded;
  const title = property ? `${getSpanishPropertyHeading(property)} | Zen Eco Homes` : "Vivienda en España | Zen Eco Homes";
  const description = property
    ? getSpanishPropertySeoDescription(property)
    : "Propiedad en venta en España con información y asesoramiento de Zen Eco Homes.";
  const path = `/es/propiedades/${encodeURIComponent(ref)}`;

  return {
    title,
    description,
    alternates: {
      canonical: path,
      languages: {
        "nb-NO": `${BASE}/eiendommer/${encodeURIComponent(ref)}`,
        "x-default": `${BASE}/eiendommer/${encodeURIComponent(ref)}`,
        "de-DE": `${BASE}/de/immobilien/${encodeURIComponent(ref)}`,
        en: `${BASE}/en/properties/${encodeURIComponent(ref)}`,
        "es-ES": `${BASE}${path}`,
      },
    },
    openGraph: {
      title,
      description,
      locale: "es_ES",
      type: "website",
      url: `${BASE}${path}`,
    },
  };
}

export default async function SpanishPropertyPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const property = await getProperty(decodeURIComponent(id));
  if (!property) return <SpanishPropertyNotFoundView />;
  return <TrackedSpanishPropertyDetailView property={property} />;
}
