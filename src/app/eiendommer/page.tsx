import { Footer } from "@/components/Footer";
import { PropertyCard } from "@/components/PropertyCard";
import { SiteHeader } from "@/components/SiteHeader";
import {
  getProperties,
  getPropertySearchText,
  getPropertyTitle,
  getPropertyType,
  getRegionLabel,
  normalizeSearchText,
  propertyMatchesRegion,
  regions,
} from "@/lib/realtyflow";

export const metadata = {
  title: "Boliger til salgs | Zen Eco Homes",
};

export default async function PropertiesPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; type?: string; region?: string }>;
}) {
  const params = await searchParams;
  const q = normalizeSearchText(params.q || "");
  const type = (params.type || "").toLowerCase();
  const region = params.region || "";
  const properties = await getProperties();
  const filtered = properties.filter((property) => {
    const haystack = getPropertySearchText(property);
    const matchesQuery = q ? haystack.includes(q) : true;
    const matchesType = type ? getPropertyType(property).toLowerCase().includes(type) : true;
    const matchesRegion = propertyMatchesRegion(property, region);
    return matchesQuery && matchesType && matchesRegion;
  });

  return (
    <main>
      <SiteHeader />
      <section className="page-hero compact-hero">
        <p className="eyebrow">Boligsøk</p>
        <h1>Nybygg i Spania</h1>
        <p>
          Utforsk prosjekter og boliger fra RealtyFlow.
          {region ? ` Viser ${getRegionLabel(region) || "valgt region"}.` : " Velg region med ett klikk."}
        </p>
        <div className="quick-filters">
          <a className={!region ? "active" : ""} href="/eiendommer">Alle</a>
          {regions.map((item) => (
            <a
              className={region === item.key ? "active" : ""}
              href={`/eiendommer?region=${item.key}`}
              key={item.key}
            >
              {item.label}
            </a>
          ))}
        </div>
        <form className="search-card page-search" action="/eiendommer">
          <input name="q" defaultValue={params.q || ""} placeholder="Søk område, referanse eller stil" />
          {region && <input type="hidden" name="region" value={region} />}
          <select name="type" defaultValue={params.type || ""}>
            <option value="">Alle typer</option>
            <option>Villa</option>
            <option>Leilighet</option>
            <option>Rekkehus</option>
          </select>
          <button type="submit">Søk</button>
        </form>
      </section>
      <section className="section">
        <div className="list-heading">
          <h2>{filtered.length} boliger</h2>
          <span>Viser nyeste og mest relevante først</span>
        </div>
        <div className="property-grid">
          {filtered.map((property, index) => (
            <PropertyCard key={property.id || property.ref || index} property={property} />
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
