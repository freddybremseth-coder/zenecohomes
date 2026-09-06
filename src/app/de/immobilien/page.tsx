import { Footer } from "@/components/Footer";
import { PropertyCard } from "@/components/PropertyCard";
import { SaveSearchButton } from "@/components/SaveSearchButton";
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

const germanRegionLabels: Record<string, string> = {
  "costa-blanca-nord": "Costa Blanca Nord",
  "costa-blanca-sor": "Costa Blanca Süd",
  "costa-calida": "Costa Cálida",
};

function getGermanRegionLabel(region?: string) {
  return region ? germanRegionLabels[region] || "" : "";
}

export const metadata = {
  title: "Immobilien zum Verkauf in Spanien | Neubau an der Costa Blanca",
  description:
    "Suchen Sie Villen, Wohnungen, Reihenhäuser und moderne Neubauten in Spanien. Zen Eco Homes begleitet internationale Käufer auf Deutsch.",
  alternates: {
    canonical: "/de/immobilien",
    languages: {
      "nb-NO": "https://www.zenecohomes.com/eiendommer",
      "x-default": "https://www.zenecohomes.com/eiendommer",
      "de-DE": "https://www.zenecohomes.com/de/immobilien",
      en: "https://www.zenecohomes.com/en/properties",
    },
  },
  openGraph: {
    title: "Immobilien zum Verkauf in Spanien | Zen Eco Homes",
    description:
      "Suchen Sie Neubau, Villen und Wohnungen an der Costa Blanca Nord, Costa Blanca Süd und Costa Cálida mit deutschsprachiger Beratung.",
    url: "https://www.zenecohomes.com/de/immobilien",
    locale: "de_DE",
    type: "website",
  },
};

export default async function GermanPropertiesPage({
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
  const locationLabel = area || getGermanRegionLabel(region);

  return (
    <main lang="de">
      <SiteHeader
        locale="de"
        languageLinks={[
          { locale: "no", href: "/eiendommer", current: false },
          { locale: "de", href: "/de/immobilien", current: true },
          { locale: "en", href: "/en/properties", current: false },
        ]}
      />
      <section className="page-hero compact-hero">
        <p className="eyebrow">Immobiliensuche in Spanien</p>
        <h1>Immobilien und Neubau zum Verkauf in Spanien</h1>
        <p>
          Entdecken Sie Villen, Wohnungen, Reihenhäuser und moderne Neubauten von RealtyFlow.
          {locationLabel ? ` Angezeigt wird ${locationLabel}.` : " Wählen Sie eine Region mit einem Klick."}
        </p>
        <div className="quick-filters">
          <a className={!region && !area ? "active" : ""} href="/de/immobilien">
            Alle
          </a>
          {regions.map((item) => (
            <a
              className={region === item.key && !area ? "active" : ""}
              href={`/de/immobilien?region=${item.key}`}
              key={item.key}
            >
              {germanRegionLabels[item.key] || item.label}
            </a>
          ))}
        </div>
        <form className="search-card page-search" action="/de/immobilien">
          <input name="q" defaultValue={params.q || ""} placeholder="Ort, Referenz oder Stil suchen" />
          {region && <input type="hidden" name="region" value={region} />}
          {area && <input type="hidden" name="area" value={area} />}
          <select name="type" defaultValue={params.type || ""}>
            <option value="">Alle Typen</option>
            <option>Villa</option>
            <option value="Leilighet">Wohnung</option>
            <option value="Rekkehus">Reihenhaus</option>
            <option>Penthouse</option>
          </select>
          <select name="minPrice" defaultValue={params.minPrice || ""}>
            <option value="">Preis ab</option>
            <option value="200000">€200 000</option>
            <option value="300000">€300 000</option>
            <option value="400000">€400 000</option>
            <option value="500000">€500 000</option>
            <option value="750000">€750 000</option>
            <option value="1000000">€1 000 000</option>
          </select>
          <select name="maxPrice" defaultValue={params.maxPrice || ""}>
            <option value="">Preis bis</option>
            <option value="300000">€300 000</option>
            <option value="400000">€400 000</option>
            <option value="500000">€500 000</option>
            <option value="750000">€750 000</option>
            <option value="1000000">€1 000 000</option>
            <option value="1500000">€1 500 000</option>
          </select>
          <select name="bedrooms" defaultValue={params.bedrooms || ""}>
            <option value="">Schlafzimmer</option>
            <option value="1">1+</option>
            <option value="2">2+</option>
            <option value="3">3+</option>
            <option value="4">4+</option>
          </select>
          <select name="bathrooms" defaultValue={params.bathrooms || ""}>
            <option value="">Bäder</option>
            <option value="1">1+</option>
            <option value="2">2+</option>
            <option value="3">3+</option>
            <option value="4">4+</option>
          </select>
          <select name="lifestyle" defaultValue={params.lifestyle || ""}>
            <option value="">Lebensstil</option>
            <option value="pool">Pool</option>
            <option value="sea">Meer / Meerblick</option>
            <option value="golf">Golf</option>
          </select>
          <button type="submit">Suchen</button>
        </form>
      </section>
      <section className="section">
        <div className="list-heading">
          <div>
          <h2>
            {filtered.length} Immobilien{area ? ` in ${area}` : ""}
          </h2>
          <span>Neueste und relevanteste zuerst</span>
          </div>
          <SaveSearchButton
            locale="de"
            filters={{
              region: region || undefined,
              type: type || undefined,
              minPrice: minPrice || undefined,
              maxPrice: maxPrice || undefined,
            }}
          />
        </div>
        <div className="property-grid">
          {filtered.map((property, index) => (
            <PropertyCard
              key={property.id || property.ref || index}
              property={property}
              locale="de"
              detailBasePath="/de/immobilien"
            />
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
