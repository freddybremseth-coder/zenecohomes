import { EnergyBenefits } from "@/components/EnergyBenefits";
import Link from "next/link";
import { BuyerMatchQuiz } from "@/components/BuyerMatchQuiz";
import { Footer } from "@/components/Footer";
import { PropertyCard } from "@/components/PropertyCard";
import { PropertyMapView, type PropertyMapGroup } from "@/components/PropertyMapView";
import { SaveSearchButton } from "@/components/SaveSearchButton";
import { SiteHeader } from "@/components/SiteHeader";
import { homeLanguageLinks } from "@/lib/i18n";
import {
  formatPriceForLocale,
  getLocalizedPropertyTitle,
  getProperties,
  getPropertyArea,
  getPropertyRef,
  getPropertySearchText,
  getPropertyTown,
  getRegionLabel,
  normalizeSearchText,
  propertyMatchesArea,
  propertyMatchesLifestyle,
  propertyMatchesRegion,
  propertyMatchesType,
  regions,
  type Property,
} from "@/lib/realtyflow";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | undefined>>;
}) {
  const params = await searchParams;
  const isFiltered = [
    "q",
    "type",
    "region",
    "area",
    "minPrice",
    "maxPrice",
    "bedrooms",
    "bathrooms",
    "minSize",
    "lifestyle",
    "page",
    "sort",
    "view",
  ].some((key) => Boolean(params[key]));

  return {
    title: "Boliger til salgs i Spania | Costa Blanca og Cálida",
    description:
      "Se boliger til salgs i Spania: villaer, leiligheter og nybygg på Costa Blanca og Costa Cálida, med norsk rådgivning om område og kjøpsprosess.",
    ...(isFiltered ? { robots: { index: false, follow: true } } : {}),
    alternates: {
      canonical: "/eiendommer",
      languages: {
        "nb-NO": "https://www.zenecohomes.com/eiendommer",
        "x-default": "https://www.zenecohomes.com/eiendommer",
        "de-DE": "https://www.zenecohomes.com/de/immobilien",
        en: "https://www.zenecohomes.com/en/properties",
      },
    },
    openGraph: {
      title: "Boliger til salgs i Spania | Zen Eco Homes",
      description:
        "Søk blant nybygg, villaer og leiligheter på Costa Blanca Nord, Costa Blanca Sør og Costa Cálida med norsk rådgivning.",
      url: "https://www.zenecohomes.com/eiendommer",
      type: "website",
    },
  };
}

function updatedTimestamp(property: Property) {
  const value = property.updated_at || property.updatedAt;
  const time = value ? Date.parse(value) : 0;
  return Number.isFinite(time) ? time : 0;
}

function regionKeyFor(property: Property) {
  return regions.find((region) => propertyMatchesRegion(property, region.key))?.key || "";
}

export default async function PropertiesPage({
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
    minSize?: string;
    lifestyle?: string;
    match?: string;
    page?: string;
    sort?: string;
    view?: string;
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
  const minSize = Number(params.minSize || 0);
  const lifestyle = params.lifestyle || "";
  const isQuizMatch = params.match === "quiz";
  const sort = ["price-asc", "price-desc"].includes(params.sort || "") ? params.sort! : "newest";
  const view = params.view === "map" ? "map" : "list";
  const currentPage = Math.max(1, Number(params.page || 1) || 1);
  const pageSize = 24;

  const properties = await getProperties(0, "zeneco");
  const originalOrder = new Map(properties.map((property, index) => [getPropertyRef(property), index]));
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
    const propArea = getPropertyArea(property) || 0;
    const matchesMinSize = minSize ? propArea === 0 || propArea >= minSize : true;
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
      matchesMinSize &&
      matchesLifestyle
    );
  });

  const sorted = [...filtered].sort((a, b) => {
    if (sort === "price-asc") return (a.price ?? Number.POSITIVE_INFINITY) - (b.price ?? Number.POSITIVE_INFINITY);
    if (sort === "price-desc") return (b.price ?? 0) - (a.price ?? 0);
    const byDate = updatedTimestamp(b) - updatedTimestamp(a);
    if (byDate !== 0) return byDate;
    return (originalOrder.get(getPropertyRef(a)) ?? 0) - (originalOrder.get(getPropertyRef(b)) ?? 0);
  });

  const locationLabel = area || getRegionLabel(region);
  const totalPages = Math.max(1, Math.ceil(sorted.length / pageSize));
  const safePage = Math.min(currentPage, totalPages);
  const visibleProperties = sorted.slice((safePage - 1) * pageSize, safePage * pageSize);

  const hrefWith = (overrides: Record<string, string | undefined>) => {
    const query = new URLSearchParams();
    for (const [key, value] of Object.entries({ ...params, ...overrides })) {
      if (value && key !== "page") query.set(key, value);
    }
    if (overrides.page && Number(overrides.page) > 1) query.set("page", overrides.page);
    const qs = query.toString();
    return qs ? `/eiendommer?${qs}` : "/eiendommer";
  };

  const pageHref = (page: number) => hrefWith({ page: page > 1 ? String(page) : undefined });

  const grouped = new Map<string, PropertyMapGroup>();
  for (const property of sorted) {
    const town = getPropertyTown(property) || getRegionLabel(regionKeyFor(property)) || "Område";
    const propertyRegion = regionKeyFor(property);
    const key = `${town}|${propertyRegion}`;
    const group = grouped.get(key) || { town, region: propertyRegion, count: 0, items: [] };
    group.count += 1;
    if (group.items.length < 5) {
      group.items.push({
        ref: getPropertyRef(property),
        title: getLocalizedPropertyTitle(property, "no"),
        price: formatPriceForLocale(property.price, "no"),
      });
    }
    grouped.set(key, group);
  }
  const mapGroups = [...grouped.values()];

  const schemaItems = sorted.slice(0, 24).map((property, index) => ({
    "@type": "ListItem",
    position: index + 1,
    url: `https://www.zenecohomes.com/eiendommer/${encodeURIComponent(getPropertyRef(property))}`,
    name: getLocalizedPropertyTitle(property, "no"),
  }));
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://www.zenecohomes.com/eiendommer#collection",
        url: "https://www.zenecohomes.com/eiendommer",
        name: "Boliger og nybygg til salgs i Spania",
        description:
          "Villaer, leiligheter, rekkehus og moderne nybygg til salgs i Spania, med norsk rådgivning.",
        isPartOf: { "@id": "https://www.zenecohomes.com/#website" },
        mainEntity: {
          "@type": "ItemList",
          numberOfItems: filtered.length,
          itemListElement: schemaItems,
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Forside", item: "https://www.zenecohomes.com/" },
          { "@type": "ListItem", position: 2, name: "Boliger", item: "https://www.zenecohomes.com/eiendommer" },
        ],
      },
    ],
  };

  return (
    <main className="properties-page">
      <SiteHeader languageLinks={homeLanguageLinks("no")} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="page-hero compact-hero search-hero">
        <p className="eyebrow">Boligsøk i Spania</p>
        <h1>Boliger og nybygg til salgs i Spania</h1>
        <p>
          Utforsk villaer, leiligheter, rekkehus og moderne nybygg til salgs i Spania. Vil du slippe å sjekke siden
          hver dag? Opprett et boligvarsel, så får du tilsendt nye boliger fra ditt søk.
        </p>
        <div className="quick-filters">
          <a className={!region && !area ? "active" : ""} href="/eiendommer">Alle</a>
          {regions.map((item) => (
            <a
              className={region === item.key && !area ? "active" : ""}
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
          {area && <input type="hidden" name="area" value={area} />}
          <input type="checkbox" id="search-more" className="search-more-toggle" hidden />
          <label htmlFor="search-more" className="search-more-btn">Flere filtre</label>
          <div className="search-more-fields">
            <select name="type" defaultValue={params.type || ""}>
              <option value="">Alle typer</option>
              <option>Villa</option>
              <option>Leilighet</option>
              <option>Rekkehus</option>
              <option>Penthouse</option>
            </select>
            <select name="minPrice" defaultValue={params.minPrice || ""}>
              <option value="">Pris fra</option>
              <option value="200000">€200 000</option>
              <option value="300000">€300 000</option>
              <option value="400000">€400 000</option>
              <option value="500000">€500 000</option>
              <option value="750000">€750 000</option>
              <option value="1000000">€1 000 000</option>
            </select>
            <select name="maxPrice" defaultValue={params.maxPrice || ""}>
              <option value="">Pris til</option>
              <option value="300000">€300 000</option>
              <option value="400000">€400 000</option>
              <option value="500000">€500 000</option>
              <option value="750000">€750 000</option>
              <option value="1000000">€1 000 000</option>
              <option value="1500000">€1 500 000</option>
            </select>
            <select name="bedrooms" defaultValue={params.bedrooms || ""}>
              <option value="">Soverom</option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
              <option value="4">4+</option>
            </select>
            <select name="bathrooms" defaultValue={params.bathrooms || ""}>
              <option value="">Bad</option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
              <option value="4">4+</option>
            </select>
            <select name="lifestyle" defaultValue={params.lifestyle || ""}>
              <option value="">Livsstil</option>
              <option value="pool">Basseng</option>
              <option value="sea">Nær sjø / havutsikt</option>
              <option value="golf">Golf</option>
            </select>
            <select name="minSize" defaultValue={params.minSize || ""}>
              <option value="">Størrelse fra</option>
              <option value="80">80 m²+</option>
              <option value="100">100 m²+</option>
              <option value="150">150 m²+</option>
              <option value="200">200 m²+</option>
              <option value="300">300 m²+</option>
            </select>
          </div>
          <button type="submit">Søk</button>
        </form>
      </section>

      <section className="section property-results-section" id="boliger">
        <div className="list-heading property-results-heading">
          <div>
            <p className="eyebrow">{isQuizMatch ? "Din boligmatch" : "Boliger"}</p>
            <h2>
              {sorted.length} {isQuizMatch ? "boliger matcher svarene dine" : `boliger${area ? ` i ${area}` : ""}`}
            </h2>
            <span>
              {isQuizMatch
                ? [
                    maxPrice ? `maks €${maxPrice.toLocaleString("nb-NO")}` : "",
                    minBedrooms ? `${minBedrooms}+ soverom` : "",
                    locationLabel || "",
                  ].filter(Boolean).join(" · ")
                : sort === "price-asc"
                  ? "Sortert fra lav til høy pris"
                  : sort === "price-desc"
                    ? "Sortert fra høy til lav pris"
                    : "Nyeste først"}
            </span>
          </div>
          <SaveSearchButton
            locale="no"
            filters={{
              region: region || undefined,
              type: type || undefined,
              minPrice: minPrice || undefined,
              maxPrice: maxPrice || undefined,
              minSize: minSize || undefined,
            }}
          />
        </div>

        <div className="property-results-toolbar">
          <div className="view-toggle" role="group" aria-label="Velg visning">
            <Link className={view === "list" ? "active" : ""} href={hrefWith({ view: undefined, page: undefined })}>
              Liste
            </Link>
            <Link className={view === "map" ? "active" : ""} href={hrefWith({ view: "map", page: undefined })}>
              Kart
            </Link>
          </div>
          <form className="property-sort-form" action="/eiendommer">
            {Object.entries(params).map(([key, value]) =>
              value && !["sort", "page"].includes(key) ? <input key={key} type="hidden" name={key} value={value} /> : null,
            )}
            <label htmlFor="property-sort">Sorter</label>
            <select id="property-sort" name="sort" defaultValue={sort}>
              <option value="newest">Nyeste først</option>
              <option value="price-asc">Pris: Lav til høy</option>
              <option value="price-desc">Pris: Høy til lav</option>
            </select>
            <button type="submit">Bruk</button>
          </form>
        </div>

        {view === "map" ? (
          <PropertyMapView groups={mapGroups} />
        ) : (
          <>
            <div className="property-grid">
              {visibleProperties.map((property, index) => (
                <PropertyCard key={property.id || property.ref || index} property={property} />
              ))}
            </div>
            {totalPages > 1 && (
              <nav className="property-pagination" aria-label="Sider">
                {safePage > 1 ? (
                  <Link className="pagination-link" href={pageHref(safePage - 1)}>← Forrige</Link>
                ) : <span />}
                <span>Side {safePage} av {totalPages}</span>
                {safePage < totalPages ? (
                  <Link className="pagination-link pagination-next" href={pageHref(safePage + 1)}>Neste →</Link>
                ) : <span />}
              </nav>
            )}
          </>
        )}
      </section>

      <BuyerMatchQuiz />
      <EnergyBenefits />

      <section className="section property-next-steps">
        <div className="section-heading">
          <p className="eyebrow">Videre i boligjakten</p>
          <h2>Nyttige neste steg</h2>
          <p>Bruk disse sidene for å avklare område, kjøpsprosess og visning før du bruker tid på feil boliger.</p>
        </div>
        <div className="property-next-grid">
          <Link href="/omrader">
            <h3>Finn riktig område</h3>
            <p>Sammenlign kyst, by og innland ut fra hvordan du ønsker å bo.</p>
            <span>Utforsk områder →</span>
          </Link>
          <Link href="/guide/kjope-bolig-i-spania">
            <h3>Kjøpe bolig i Spania</h3>
            <p>Les hovedguiden om boligkjøp, kostnader og hva du bør vite før du bestemmer deg.</p>
            <span>Les guiden →</span>
          </Link>
          <Link href="/kjopsprosessen">
            <h3>Kjøpsprosessen</h3>
            <p>Se stegene fra behov og boligsøk til reservasjon, juridisk kontroll, notar og overtakelse.</p>
            <span>Se prosessen →</span>
          </Link>
          <Link href="/visningstur">
            <h3>Planlegg visningstur</h3>
            <p>Få bedre visninger ved å avklare behov, område og aktuelle boliger på forhånd.</p>
            <span>Les om visningstur →</span>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
