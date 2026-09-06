"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import "leaflet/dist/leaflet.css";
import { PropertyCard } from "@/components/PropertyCard";
import { getPropertyArea, propertyMatchesType, type Property } from "@/lib/realtyflow";

const TYPE_FILTERS: { label: string; value: string; terms: string[] }[] = [
  { label: "Alle", value: "", terms: [] },
  { label: "Villa", value: "Villa", terms: ["villa"] },
  { label: "Leilighet", value: "Leilighet", terms: ["leilighet", "apartment", "studio"] },
  { label: "Penthouse", value: "Penthouse", terms: ["penthouse"] },
  { label: "Rekkehus", value: "Rekkehus", terms: ["rekkehus", "semidetached", "quad", "townhouse"] },
  { label: "Bungalow", value: "Bungalow", terms: ["bungalow"] },
];

const PRICES = [0, 200000, 300000, 400000, 500000, 750000, 1000000, 1500000];
const SIZES = [0, 80, 100, 150, 200, 300];

const REGIONS = [
  { key: "costa-blanca-nord", label: "Costa Blanca Nord", lat: 38.645, lng: 0.045 },
  { key: "costa-blanca-sor", label: "Costa Blanca Sør", lat: 37.98, lng: -0.68 },
  { key: "costa-calida", label: "Costa Cálida", lat: 37.8, lng: -0.83 },
  { key: "innlandet", label: "Innlandet", lat: 38.4, lng: -1.05 },
];

function euro(n: number) {
  return `€${n.toLocaleString("nb-NO")}`;
}

type ExplorerProperty = Property & { regionKeys?: string[] };
type FilterItem = Pick<Property, "price" | "property_type" | "built_area"> & { regionKeys?: string[] };

export function PropertyExplorer({ filterData, cards }: { filterData: FilterItem[]; cards: ExplorerProperty[] }) {
  const [typeIdx, setTypeIdx] = useState(0);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [minSize, setMinSize] = useState(0);
  const [region, setRegion] = useState("");
  const mapNode = useRef<HTMLDivElement>(null);
  const mapRef = useRef<{ remove: () => void } | null>(null);
  const markersRef = useRef<Record<string, { setStyle: (o: Record<string, unknown>) => void }>>({});
  const filterQueryRef = useRef("");

  useEffect(() => {
    let mounted = true;
    (async () => {
      if (!mapNode.current || mapRef.current) return;
      const L = (await import("leaflet")).default;
      if (!mounted || !mapNode.current) return;
      const map = L.map(mapNode.current, { center: [38.2, -0.55], zoom: 8, scrollWheelZoom: false });
      mapRef.current = map;
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 19,
      }).addTo(map);
      REGIONS.forEach((r) => {
        const marker = L.circleMarker([r.lat, r.lng], {
          radius: 13,
          color: "#ffffff",
          weight: 3,
          fillColor: "#6f7f42",
          fillOpacity: 0.95,
        }).addTo(map);
        marker.bindTooltip(r.label, { direction: "top", permanent: true, className: "region-tip", offset: [0, -10] });
        markersRef.current[r.key] = marker;
        marker.on("click", () => setRegion((prev) => (prev === r.key ? "" : r.key)));
      });
    })();
    return () => {
      mounted = false;
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    Object.entries(markersRef.current).forEach(([key, m]) => {
      m.setStyle({ fillColor: key === region ? "#c5a059" : "#6f7f42", radius: key === region ? 16 : 13 });
    });
  }, [region]);

  const matches = useCallback(
    (p: FilterItem) => {
      const typeOk = propertyMatchesType(p as Property, TYPE_FILTERS[typeIdx].value);
      const regionOk = !region || (p.regionKeys || []).includes(region);
      const priceOk =
        (!minPrice || (p.price != null && p.price >= minPrice)) && (!maxPrice || (p.price != null && p.price <= maxPrice));
      // Areal er kjent for kun ~11 % av importen; behold boliger uten areal-data.
      const size = getPropertyArea(p as Property) || 0;
      const sizeOk = !minSize || size === 0 || size >= minSize;
      return typeOk && regionOk && priceOk && sizeOk;
    },
    [typeIdx, region, minPrice, maxPrice, minSize],
  );

  const count = useMemo(() => filterData.filter(matches).length, [filterData, matches]);
  const previewCards = useMemo(() => cards.filter(matches).slice(0, 6), [cards, matches]);

  const filterQuery = useMemo(() => {
    const params = new URLSearchParams();
    if (region) params.set("region", region);
    if (TYPE_FILTERS[typeIdx].value) params.set("type", TYPE_FILTERS[typeIdx].value);
    if (minPrice) params.set("minPrice", String(minPrice));
    if (maxPrice) params.set("maxPrice", String(maxPrice));
    if (minSize) params.set("minSize", String(minSize));
    return params.toString();
  }, [region, typeIdx, minPrice, maxPrice, minSize]);

  useEffect(() => {
    filterQueryRef.current = filterQuery;
  }, [filterQuery]);

  const allHref = `/eiendommer${filterQuery ? `?${filterQuery}` : ""}`;

  return (
    <section className="section explorer-section">
      <div className="section-heading">
        <p className="eyebrow">Søk på kart og filtre</p>
        <h2>Finn boligen din i Spania</h2>
        <p>Klikk en region på kartet, eller filtrer på type, pris og størrelse – så ser du treffene med en gang.</p>
      </div>

      <div className="explorer-filters">
        <div className="explorer-chips">
          {TYPE_FILTERS.map((t, i) => (
            <button
              key={t.label}
              type="button"
              className={i === typeIdx ? "active" : ""}
              onClick={() => setTypeIdx(i)}
            >
              {t.label}
            </button>
          ))}
        </div>
        <div className="explorer-selects">
          <select value={minPrice} onChange={(e) => setMinPrice(Number(e.target.value))} aria-label="Pris fra">
            <option value={0}>Pris fra</option>
            {PRICES.slice(1).map((p) => (
              <option key={p} value={p}>
                {euro(p)}
              </option>
            ))}
          </select>
          <select value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))} aria-label="Pris til">
            <option value={0}>Pris til</option>
            {PRICES.slice(1).map((p) => (
              <option key={p} value={p}>
                {euro(p)}
              </option>
            ))}
          </select>
          <select value={minSize} onChange={(e) => setMinSize(Number(e.target.value))} aria-label="Størrelse fra">
            <option value={0}>Størrelse fra</option>
            {SIZES.slice(1).map((s) => (
              <option key={s} value={s}>
                {s} m²+
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="explorer-grid-wrap">
        <div ref={mapNode} className="explorer-map" />
        <div className="explorer-results">
          <div className="explorer-results-head">
            <strong>
              {count} {count === 1 ? "bolig" : "boliger"}
            </strong>
            {region && (
              <button type="button" className="region-chip" onClick={() => setRegion("")}>
                {REGIONS.find((r) => r.key === region)?.label} ✕
              </button>
            )}
          </div>
          {previewCards.length > 0 ? (
            <div className="property-grid">
              {previewCards.map((property, index) => (
                <PropertyCard key={property.ref || index} property={property} />
              ))}
            </div>
          ) : count > 0 ? (
            <p className="explorer-empty">Trykk «Se alle {count} treff» for å se disse boligene.</p>
          ) : (
            <p className="explorer-empty">Ingen treff med disse filtrene – juster pris, type eller region.</p>
          )}
        </div>
      </div>

      <div className="center-action">
        <a className="contact-button" href={allHref}>
          Se alle {count} treff
        </a>
      </div>
    </section>
  );
}
