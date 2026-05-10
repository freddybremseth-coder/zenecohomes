import { Footer } from "@/components/Footer";
import { PlotsMap } from "@/components/PlotsMap";
import { SiteHeader } from "@/components/SiteHeader";
import { getLandPlots, type LandPlot } from "@/lib/realtyflow";

export const metadata = {
  title: "Tomter til salgs i Spania | Bygg moderne bolig på Costa Blanca",
  description:
    "Finn tomter og byggeprosjekter i Spania. Vi hjelper deg å vurdere regulering, vann, strøm, adkomst, arkitekt og trygg kjøpsprosess.",
  alternates: {
    canonical: "/tomter",
  },
  openGraph: {
    title: "Tomter til salgs i Spania | Zen Eco Homes",
    description:
      "Utforsk tomter på Costa Blanca og i Spania med kart, regulering, pris, størrelse og norsk rådgivning før kjøp.",
    url: "https://www.zenecohomes.com/tomter",
    type: "website",
  },
};

function formatEuro(value?: number) {
  if (!value) return "Pris på forespørsel";
  return new Intl.NumberFormat("nb-NO", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(value);
}

function normalize(value?: string) {
  return (value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function plotRef(plot: LandPlot) {
  return plot.plot_number || plot.plotNumber || plot.id || "Tomt";
}

export default async function PlotsPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; minArea?: string; maxPrice?: string; zoning?: string }>;
}) {
  const params = await searchParams;
  const plots = await getLandPlots();
  const q = normalize(params.q);
  const minArea = Number(params.minArea || 0);
  const maxPrice = Number(params.maxPrice || 0);
  const zoning = normalize(params.zoning);

  const filtered = plots.filter((plot) => {
    const haystack = normalize([plotRef(plot), plot.location, plot.municipality, plot.zoning, plot.notes].filter(Boolean).join(" "));
    return (
      (!q || haystack.includes(q)) &&
      (!zoning || normalize(plot.zoning) === zoning) &&
      (!minArea || Number(plot.area || 0) >= minArea) &&
      (!maxPrice || Number(plot.price || 0) <= maxPrice)
    );
  });
  const mapped = filtered.filter((plot) => plot.lat && plot.lng);

  return (
    <main>
      <SiteHeader />
      <section className="page-hero compact-hero image-hero">
        <p className="eyebrow">Tomter i Spania</p>
        <h1>Tomter til salgs og byggeprosjekter i Spania</h1>
        <p>
          Utforsk tomter med størrelse, pris, regulering, vann, strøm og beliggenhet. Vi hjelper deg å vurdere
          om tomten faktisk passer for boligen du ønsker å bygge.
        </p>
        <form className="search-card page-search plots-search" action="/tomter">
          <input name="q" defaultValue={params.q || ""} placeholder="Søk sted, kommune eller ref" />
          <select name="minArea" defaultValue={params.minArea || ""}>
            <option value="">Areal fra</option>
            <option value="800">800 m²</option>
            <option value="1000">1 000 m²</option>
            <option value="5000">5 000 m²</option>
            <option value="10000">10 000 m²</option>
          </select>
          <select name="maxPrice" defaultValue={params.maxPrice || ""}>
            <option value="">Pris til</option>
            <option value="30000">€30 000</option>
            <option value="50000">€50 000</option>
            <option value="75000">€75 000</option>
            <option value="100000">€100 000</option>
          </select>
          <select name="zoning" defaultValue={params.zoning || ""}>
            <option value="">Regulering</option>
            <option value="rustico">Rustico</option>
            <option value="urbano">Urbano</option>
            <option value="urbanizable">Urbanizable</option>
          </select>
          <button type="submit">Søk</button>
        </form>
      </section>

      <section className="plots-layout">
        <div className="plots-map">
          <PlotsMap plots={mapped} />
        </div>

        <div className="plots-list">
          <div className="list-heading">
            <h2>{filtered.length} tomter</h2>
            <span>{mapped.length} med kartposisjon</span>
          </div>
          {filtered.map((plot) => (
            <article className="plot-card" id={`plot-${plot.id || encodeURIComponent(plotRef(plot))}`} key={plot.id || plotRef(plot)}>
              <div>
                <p>{plot.municipality || plot.location || "Spania"}</p>
                <h2>{plotRef(plot)}</h2>
                <strong>{formatEuro(plot.price)}</strong>
              </div>
              <dl>
                <div><dt>Areal</dt><dd>{Number(plot.area || 0).toLocaleString("nb-NO")} m²</dd></div>
                <div><dt>Regulering</dt><dd>{plot.zoning || "Ikke oppgitt"}</dd></div>
                <div><dt>Vann</dt><dd>{plot.water ? "Ja" : "Ikke oppgitt"}</dd></div>
                <div><dt>Strøm</dt><dd>{plot.electricity ? "Ja" : "Ikke oppgitt"}</dd></div>
              </dl>
              {plot.notes && <p className="plot-notes">{plot.notes}</p>}
            </article>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
