import type { Metadata } from "next";
import { SpanishPropertyNotFoundView } from "@/components/es/SpanishPropertyDetailView";
import { TrackedSpanishPropertyDetailView } from "@/components/es/TrackedSpanishPropertyDetailView";
import { getProperties, getProperty, getPropertyRef } from "@/lib/realtyflow";
import {
  getSpanishPropertyHeading,
  getSpanishPropertySeoDescription,
} from "@/lib/spanishProperty";

const BASE = "https://www.zenecohomes.com";

function fitSeoTitle(value: string) {
  const clean = value.replace(/\s+/g, " ").trim();
  if (clean.length >= 50 && clean.length <= 60) return clean;
  const candidates = [
    `${clean} | España`,
    `${clean} | Zen Eco Homes`,
    `${clean} | Vivienda en España`,
    `${clean} | Vivienda en España | Zen Eco Homes`,
  ];
  const fitted = candidates.find((candidate) => candidate.length >= 50 && candidate.length <= 60);
  if (fitted) return fitted;
  const fallback = candidates[candidates.length - 1];
  return fallback.length <= 60 ? fallback : fallback.slice(0, 60).replace(/\s+\S*$/, "").trim();
}

function fitMetaDescription(value: string) {
  let clean = value.replace(/\s+/g, " ").trim();
  if (clean.length < 140) {
    clean += " Consulta precio, datos clave, ubicación y qué conviene revisar antes de visitar o reservar con Zen Eco Homes.";
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

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const decoded = decodeURIComponent(id);
  const property = await getProperty(decoded);
  const ref = property ? getPropertyRef(property) : decoded;
  const rawTitle = property ? `${getSpanishPropertyHeading(property)} | Zen Eco Homes` : "Vivienda en España | Zen Eco Homes";
  const title = fitSeoTitle(rawTitle);
  const rawDescription = property
    ? getSpanishPropertySeoDescription(property)
    : "Propiedad en venta en España con información y asesoramiento de Zen Eco Homes.";
  const description = fitMetaDescription(rawDescription);
  const path = `/es/propiedades/${encodeURIComponent(ref)}`;

  return {
    title,
    description,
    robots: property ? undefined : { index: false, follow: true },
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
