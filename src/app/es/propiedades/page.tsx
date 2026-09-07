import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { SpanishPropertyCard } from "@/components/es/SpanishPropertyCard";
import {
  getProperties,
  getPropertySearchText,
  normalizeSearchText,
  propertyMatchesArea,
  propertyMatchesLifestyle,
  propertyMatchesRegion,
  propertyMatchesType,
  regions,
} from "@/lib/realtyflow";

const BASE = "https://www.zenecohomes.com";

const regionLabels: Record<string, string> = {
  "costa-blanca-nord": "Costa Blanca Norte",
  "costa-blanca-sor": "Costa Blanca Sur",
  "costa-calida": "Costa Cálida",
  innlandet: "Interior",
};

export const metadata: Metadata = {
  title: "Propiedades en venta en España | Costa Blanca",
  description:
    "Busca villas, apartamentos, adosados y obra nueva en la Costa Blanca. Filtra por zona, precio, dormitorios y estilo de vida con asesoramiento de Zen Eco Homes.",
  alternates: {
    canonical: "/es/propiedades",
    languages: {
      "nb-NO": `${BASE}/eiendommer`,
      "x-default": `${BASE}/eiendommer`,
      "de-DE": `${BASE}/de/immobilien`,
      en: `${BASE}/en/properties`,
      "es-ES": `${BASE}/es/propiedades`,
    },
  },
  openGraph: {
    title: "Propiedades en venta en España | Zen Eco Homes",
    description: "Villas, apartamentos y obra nueva en Costa Blanca Norte, Sur, Costa Cálida e interior.",
    url: `${BASE}/es/propiedades`,
    locale: "es_ES",
    type: "website",
  },
};

export default async function SpanishPropertiesPage({
  searchParams,
}: {
  searchParams: Promise<{
    q?: string;
    type?: string;
    region?: string;
    area?: string;
    minPrice?: string;
    maxPrice?: string;
    bedrooms?: string;
    bathrooms?: string;
    lifestyle?: string;
  }>;
}) {
  const params = await searchParams;
  const q = normalizeSearchText(params.q || "");
  const type = params.type || "";
  const region = params.region || "";
  const area = params.area || "";
  const minPrice = Number(params.minPrice || 0);
  const maxPrice = Number(params.maxPrice || 0);
  const minBedrooms = Number(params.bedrooms || 0);
  const minBathrooms = Number(params.bathrooms || 0);
  const lifestyle = params.lifestyle || "";
  const properties = await getProperties();
  const filtered = properties.filter((property) => {
    const haystack = getPropertySearchText(property);
    const matchesQuery = q ? haystack.includes(q) : true;
    const matchesType = propertyMatchesType(property, type);
    const matchesRegion = propertyMatchesRegion(property, region);
    const matchesArea = propertyMatchesArea(property, area);
    const matchesMinPrice = minPrice && property.price ? property.price >= minPrice : true;
    const matchesMaxPrice = maxPrice && property.price ? property.price <= maxPrice : true;
    const matchesBedrooms = minBedrooms && property.bedrooms ? property.bedrooms >= minBedrooms : true;
    const matchesBathrooms = minBathrooms && property.bathrooms ? property.bathrooms >= minBathrooms : true;
    const matchesLifestyle = propertyMatchesLifestyle(property, lifestyle);
    return matchesQuery && matchesType && matchesRegion && matchesArea && matchesMinPrice && matchesMaxPrice && matchesBedrooms && matchesBathrooms && matchesLifestyle;
  });

  const locationLabel = area || regionLabels[region] || "";

  return (
    <main lang="es">
      <SiteHeader
        locale="es"
        languageLinks={[
          { locale: "no", href: "/eiendommer", current: false },
          { locale: "de", href: "/de/immobilien", current: false },
          { locale: "en", href: "/en/properties", current: false },
          { locale: "es", href: "/es/propiedades", current: true },
        ]}
      />

      <section className="page-hero compact-hero">
        <p className="eyebrow">Buscar vivienda en España</p>
        <h1>Propiedades y obra nueva en la Costa Blanca</h1>
        <p>
          Explora villas, apartamentos, adosados y promociones de obra nueva. Usa los filtros para reducir opciones y, si quieres, te ayudamos a preparar una selección personal.
        </p>
        <div className="quick-filters">
          <a className={!region && !area ? "active" : ""} href="/es/propiedades">Todas</a>
          {regions.map((item) => (
            <a
              className={region === item.key && !area ? "active" : ""}
              href={`/es/propiedades?region=${item.key}`}
              key={item.key}
            >
              {regionLabels[item.key] || item.label}
            </a>
          ))}
        </div>

        <form className="search-card page-search" action="/es/propiedades">
          <input name="q" defaultValue={params.q || ""} placeholder="Buscar zona, referencia o estilo" />
          {region && <input type="hidden" name="region" value={region} />}
          {area && <input type="hidden" name="area" value={area} />}
          <select name="type" defaultValue={params.type || ""}>
            <option value="">Todos los tipos</option>
            <option value="villa">Villa</option>
            <option value="leilighet">Apartamento</option>
            <option value="rekkehus">Adosado</option>
            <option value="penthouse">Ático</option>
            <option value="bungalow">Bungalow</option>
          </select>
          <select name="minPrice" defaultValue={params.minPrice || ""}>
            <option value="">Precio desde</option>
            <option value="200000">200.000 €</option>
            <option value="300000">300.000 €</option>
            <option value="400000">400.000 €</option>
            <option value="500000">500.000 €</option>
            <option value="750000">750.000 €</option>
            <option value="1000000">1.000.000 €</option>
          </select>
          <select name="maxPrice" defaultValue={params.maxPrice || ""}>
            <option value="">Precio hasta</option>
            <option value="300000">300.000 €</option>
            <option value="400000">400.000 €</option>
            <option value="500000">500.000 €</option>
            <option value="750000">750.000 €</option>
            <option value="1000000">1.000.000 €</option>
            <option value="1500000">1.500.000 €</option>
          </select>
          <select name="bedrooms" defaultValue={params.bedrooms || ""}>
            <option value="">Dormitorios</option>
            <option value="1">1+</option><option value="2">2+</option><option value="3">3+</option><option value="4">4+</option>
          </select>
          <select name="bathrooms" defaultValue={params.bathrooms || ""}>
            <option value="">Baños</option>
            <option value="1">1+</option><option value="2">2+</option><option value="3">3+</option><option value="4">4+</option>
          </select>
          <select name="lifestyle" defaultValue={params.lifestyle || ""}>
            <option value="">Estilo de vida</option>
            <option value="pool">Piscina</option>
            <option value="sea">Mar / vistas al mar</option>
            <option value="golf">Golf</option>
          </select>
          <button type="submit">Buscar</button>
        </form>
      </section>

      <section className="section">
        <div className="list-heading">
          <div>
            <h2>{filtered.length} propiedades{locationLabel ? ` · ${locationLabel}` : ""}</h2>
            <span>Mostramos primero las opciones más recientes y relevantes.</span>
          </div>
          <Link className="text-button" href="/es#contacto">Quiero una selección personal</Link>
        </div>
        <div className="property-grid">
          {filtered.map((property, index) => (
            <SpanishPropertyCard key={property.id || property.ref || index} property={property} priority={index < 3} />
          ))}
        </div>
      </section>

      <section className="section proof-section">
        <div className="section-heading">
          <p className="eyebrow">Menos anuncios. Más criterio.</p>
          <h2>¿No quieres revisar cientos de viviendas?</h2>
          <p>Cuéntanos qué buscas y te ayudamos a descartar lo que no encaja antes de organizar visitas.</p>
        </div>
        <div className="center-action">
          <Link className="contact-button" href="/es#contacto">Hablar con Zen Eco Homes</Link>
        </div>
      </section>

      <Footer locale="es" />
    </main>
  );
}
