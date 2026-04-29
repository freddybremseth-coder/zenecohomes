import { Footer } from "@/components/Footer";
import { PropertyCard } from "@/components/PropertyCard";
import { SiteHeader } from "@/components/SiteHeader";
import { getProperties, getPropertyTitle, getPropertyType } from "@/lib/realtyflow";

export const metadata = {
  title: "Boliger til salgs | Zen Eco Homes",
};

export default async function PropertiesPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; type?: string }>;
}) {
  const params = await searchParams;
  const q = (params.q || "").toLowerCase();
  const type = (params.type || "").toLowerCase();
  const properties = await getProperties();
  const filtered = properties.filter((property) => {
    const haystack = [getPropertyTitle(property), property.location, property.town, property.ref, getPropertyType(property)]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();
    const matchesQuery = q ? haystack.includes(q) : true;
    const matchesType = type ? getPropertyType(property).toLowerCase().includes(type) : true;
    return matchesQuery && matchesType;
  });

  return (
    <main>
      <SiteHeader />
      <section className="page-hero compact-hero">
        <p className="eyebrow">Boligsøk</p>
        <h1>Nybygg i Spania</h1>
        <p>Utforsk prosjekter og boliger fra RealtyFlow. Bruk søket for område, referanse eller boligtype.</p>
        <form className="search-card page-search" action="/eiendommer">
          <input name="q" defaultValue={params.q || ""} placeholder="Søk område, referanse eller stil" />
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
