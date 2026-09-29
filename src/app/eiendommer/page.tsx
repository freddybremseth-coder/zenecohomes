import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { BuyerMatchQuiz } from "@/components/BuyerMatchQuiz";
import { Footer } from "@/components/Footer";
import { PropertyCard } from "@/components/PropertyCard";
import { SaveSearchButton } from "@/components/SaveSearchButton";
import { SiteHeader } from "@/components/SiteHeader";
import { homeLanguageLinks } from "@/lib/i18n";
import {
  getProperties,
  getPropertyArea,
  getPropertySearchText,
  getRegionLabel,
  normalizeSearchText,
  propertyMatchesArea,
  propertyMatchesLifestyle,
  propertyMatchesRegion,
  propertyMatchesType,
  regions,
} from "@/lib/realtyflow";

const PAGE_SIZE = 24;

type PropertySearchParams = {
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
  page?: string;
};

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
  ].some((key) => Boolean(params[key]));
  const isPaginated = Number(params.page || 1) > 1;

  return {
    title: { absolute: "Boliger til salgs i Spania | Hus, villa og leilighet" },
    description:
      "Boliger til salgs i Spania: se hus, villaer, leiligheter og nybygg på Costa Blanca og Costa Cálida. Filtrer markedet og få norsk kjøpsrådgivning.",
    ...(isFiltered || isPaginated ? { robots: { index: false, follow: true } } : {}),
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
        "Søk blant hus, villaer, leiligheter og nybygg på Costa Blanca og Costa Cálida med norsk rådgivning.",
      url: "https://www.zenecohomes.com/eiendommer",
      type: "website",
    },
  };
}

export default async function PropertiesPage({
  searchParams,
}: {
  searchParams: Promise<PropertySearchParams>;
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

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const requestedPage = Number(params.page || 1);
  const currentPage = Math.min(
    totalPages,
    Math.max(1, Number.isFinite(requestedPage) ? Math.floor(requestedPage) : 1),
  );
  const start = (currentPage - 1) * PAGE_SIZE;
  const visibleProperties = filtered.slice(start, start + PAGE_SIZE);
  const locationLabel = area || getRegionLabel(region);

  function pageHref(page: number) {
    const next = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      if (key !== "page" && value) next.set(key, value);
    });
    if (page > 1) next.set("page", String(page));
    const query = next.toString();
    return query ? `/eiendommer?${query}` : "/eiendommer";
  }

  return (
    <main>
      <SiteHeader languageLinks={homeLanguageLinks("no")} />

      <section className="page-hero compact-hero search-hero">
        <p className="eyebrow">Boliger til salgs i Spania</p>
        <h1>Hus, villaer og leiligheter til salgs i Spania</h1>
        <p>
          Søk i moderne nybygg og boliger på Costa Blanca, Costa Cálida og utvalgte innlandsområder.
          {locationLabel ? ` Viser ${locationLabel}.` : " Velg region med ett klikk."}
        </p>
        <div className="quick-filters">
          <Link className={!region && !area ? "active" : ""} href="/eiendommer">Alle</Link>
          {regions.map((item) => (
            <Link
              className={region === item.key && !area ? "active" : ""}
              href={`/eiendommer?region=${item.key}`}
              key={item.key}
            >
              {item.label}
            </Link>
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

      <section className="section" style={{ paddingBottom: 18 }}>
        <div className="section-heading">
          <p className="eyebrow">Start bredt – snevre inn smart</p>
          <h2>Finn bolig i Spania uten å lete gjennom hele markedet</h2>
          <p>
            Her finner du hus, villaer og leiligheter til salgs i Spania. Bruk filtrene for å snevre inn søket,
            eller start med område og kjøpsbehov før du velger enkeltboliger. Det gir et bedre grunnlag for både
            visning og beslutning.
          </p>
          <div className="hero-actions" style={{ justifyContent: "flex-start", marginTop: 18 }}>
            <Link className="text-button" href="/omrader">Sammenlign områder <ArrowRight size={16} /></Link>
            <Link className="text-button" href="/guide/kjope-bolig-i-spania">Kjøpe bolig i Spania <ArrowRight size={16} /></Link>
            <Link className="text-button" href="/kjopsprosessen">Se kjøpsprosessen <ArrowRight size={16} /></Link>
            <Link className="text-button" href="/visningstur">Planlegg visningstur <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 24 }}>
        <div className="list-heading">
          <div>
            <h2>{filtered.length} boliger{area ? ` i ${area}` : ""}</h2>
            <span>
              Viser {visibleProperties.length ? start + 1 : 0}–{Math.min(start + PAGE_SIZE, filtered.length)} av {filtered.length}
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

        <div className="property-grid">
          {visibleProperties.map((property, index) => (
            <PropertyCard
              key={property.id || property.ref || index}
              property={property}
              priority={currentPage === 1 && index < 3}
            />
          ))}
        </div>

        {totalPages > 1 && (
          <nav aria-label="Flere boliger" className="hero-actions" style={{ justifyContent: "center", marginTop: 40 }}>
            {currentPage > 1 && (
              <Link className="text-button" href={pageHref(currentPage - 1)}>← Forrige</Link>
            )}
            <span style={{ color: "var(--muted)", fontWeight: 700 }}>
              Side {currentPage} av {totalPages}
            </span>
            {currentPage < totalPages && (
              <Link className="contact-button" href={pageHref(currentPage + 1)}>
                Vis flere boliger <ArrowRight size={16} />
              </Link>
            )}
          </nav>
        )}
      </section>

      <BuyerMatchQuiz />

      <section className="section proof-section">
        <div className="section-heading">
          <p className="eyebrow">Før du bestiller visning</p>
          <h2>Boligannonsen er bare starten</h2>
          <p>
            Når du har funnet aktuelle boliger, bør du også vurdere område, totalbudsjett, dokumentasjon og hvordan
            boligen skal brukes. Zen Eco Homes kan samle dette i en kortere og mer målrettet shortlist.
          </p>
        </div>
        <div className="center-action">
          <Link className="contact-button" href="/booking">Få rådgivning <ArrowRight size={18} /></Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
