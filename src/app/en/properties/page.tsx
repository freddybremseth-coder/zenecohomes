import { Footer } from "@/components/Footer";
import { PropertyCard } from "@/components/PropertyCard";
import { SiteHeader } from "@/components/SiteHeader";
import {
  getProperties,
  getPropertySearchText,
  getPropertyType,
  normalizeSearchText,
  propertyMatchesArea,
  propertyMatchesLifestyle,
  propertyMatchesRegion,
  regions,
} from "@/lib/realtyflow";

const englishRegionLabels: Record<string, string> = {
  "costa-blanca-nord": "Costa Blanca North",
  "costa-blanca-sor": "Costa Blanca South",
  "costa-calida": "Costa Cálida",
};

function getEnglishRegionLabel(region?: string) {
  return region ? englishRegionLabels[region] || "" : "";
}

export const metadata = {
  title: "Properties for Sale in Spain | New Builds on the Costa Blanca",
  description:
    "Search villas, apartments, townhouses and modern new builds in Spain. Zen Eco Homes helps international buyers with English-speaking advice.",
  alternates: {
    canonical: "/en/properties",
    languages: {
      "nb-NO": "https://www.zenecohomes.com/eiendommer",
      "x-default": "https://www.zenecohomes.com/eiendommer",
      "de-DE": "https://www.zenecohomes.com/de/immobilien",
      en: "https://www.zenecohomes.com/en/properties",
    },
  },
  openGraph: {
    title: "Properties for Sale in Spain | Zen Eco Homes",
    description:
      "Search new builds, villas and apartments on Costa Blanca North, Costa Blanca South and Costa Cálida with English-speaking advice.",
    url: "https://www.zenecohomes.com/en/properties",
    locale: "en_GB",
    type: "website",
  },
};

export default async function EnglishPropertiesPage({
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
  const type = (params.type || "").toLowerCase();
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
    const matchesType = type ? getPropertyType(property).toLowerCase().includes(type) : true;
    const matchesRegion = propertyMatchesRegion(property, region);
    const matchesArea = propertyMatchesArea(property, area);
    const matchesMinPrice = minPrice && property.price ? property.price >= minPrice : true;
    const matchesMaxPrice = maxPrice && property.price ? property.price <= maxPrice : true;
    const matchesBedrooms = minBedrooms && property.bedrooms ? property.bedrooms >= minBedrooms : true;
    const matchesBathrooms = minBathrooms && property.bathrooms ? property.bathrooms >= minBathrooms : true;
    const matchesLifestyle = propertyMatchesLifestyle(property, lifestyle);
    return (
      matchesQuery &&
      matchesType &&
      matchesRegion &&
      matchesArea &&
      matchesMinPrice &&
      matchesMaxPrice &&
      matchesBedrooms &&
      matchesBathrooms &&
      matchesLifestyle
    );
  });
  const locationLabel = area || getEnglishRegionLabel(region);

  return (
    <main lang="en">
      <SiteHeader
        locale="en"
        languageLinks={[
          { locale: "no", href: "/eiendommer", current: false },
          { locale: "de", href: "/de/immobilien", current: false },
          { locale: "en", href: "/en/properties", current: true },
        ]}
      />
      <section className="page-hero compact-hero">
        <p className="eyebrow">Property search in Spain</p>
        <h1>Properties and new builds for sale in Spain</h1>
        <p>
          Explore villas, apartments, townhouses and modern new builds from RealtyFlow.
          {locationLabel ? ` Showing ${locationLabel}.` : " Choose a region with one click."}
        </p>
        <div className="quick-filters">
          <a className={!region && !area ? "active" : ""} href="/en/properties">
            All
          </a>
          {regions.map((item) => (
            <a
              className={region === item.key && !area ? "active" : ""}
              href={`/en/properties?region=${item.key}`}
              key={item.key}
            >
              {englishRegionLabels[item.key] || item.label}
            </a>
          ))}
        </div>
        <form className="search-card page-search" action="/en/properties">
          <input name="q" defaultValue={params.q || ""} placeholder="Search area, reference or style" />
          {region && <input type="hidden" name="region" value={region} />}
          {area && <input type="hidden" name="area" value={area} />}
          <select name="type" defaultValue={params.type || ""}>
            <option value="">All types</option>
            <option>Villa</option>
            <option value="Leilighet">Apartment</option>
            <option value="Rekkehus">Townhouse</option>
            <option>Penthouse</option>
          </select>
          <select name="minPrice" defaultValue={params.minPrice || ""}>
            <option value="">Price from</option>
            <option value="200000">€200 000</option>
            <option value="300000">€300 000</option>
            <option value="400000">€400 000</option>
            <option value="500000">€500 000</option>
            <option value="750000">€750 000</option>
            <option value="1000000">€1 000 000</option>
          </select>
          <select name="maxPrice" defaultValue={params.maxPrice || ""}>
            <option value="">Price to</option>
            <option value="300000">€300 000</option>
            <option value="400000">€400 000</option>
            <option value="500000">€500 000</option>
            <option value="750000">€750 000</option>
            <option value="1000000">€1 000 000</option>
            <option value="1500000">€1 500 000</option>
          </select>
          <select name="bedrooms" defaultValue={params.bedrooms || ""}>
            <option value="">Bedrooms</option>
            <option value="1">1+</option>
            <option value="2">2+</option>
            <option value="3">3+</option>
            <option value="4">4+</option>
          </select>
          <select name="bathrooms" defaultValue={params.bathrooms || ""}>
            <option value="">Bathrooms</option>
            <option value="1">1+</option>
            <option value="2">2+</option>
            <option value="3">3+</option>
            <option value="4">4+</option>
          </select>
          <select name="lifestyle" defaultValue={params.lifestyle || ""}>
            <option value="">Lifestyle</option>
            <option value="pool">Pool</option>
            <option value="sea">Sea / sea view</option>
            <option value="golf">Golf</option>
          </select>
          <button type="submit">Search</button>
        </form>
      </section>
      <section className="section">
        <div className="list-heading">
          <h2>
            {filtered.length} properties{area ? ` in ${area}` : ""}
          </h2>
          <span>Showing newest and most relevant first</span>
        </div>
        <div className="property-grid">
          {filtered.map((property, index) => (
            <PropertyCard
              key={property.id || property.ref || index}
              property={property}
              locale="en"
              detailBasePath="/en/properties"
            />
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
