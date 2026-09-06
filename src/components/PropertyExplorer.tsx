"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import "leaflet/dist/leaflet.css";
import { PropertyCard } from "@/components/PropertyCard";
import { getPropertyArea, type Property } from "@/lib/realtyflow";

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

export function PropertyExplorer({ properties }: { properties: Property[] }) {
  const [typeIdx, setTypeIdx] = useState(0);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [minSize, setMinSize] = useState(0);
  const mapNode = useRef<HTMLDivElement>(null);
  const mapRef = useRef<{ remove: () => void } | null>(null);

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
        marker.on("click", () => {
          window.location.href = `/eiendommer?region=${r.key}`;
        });
        marker.on("mouseover", () => marker.setStyle({ fillColor: "#c5a059" }));
        marker.on("mouseout", () => marker.setStyle({ fillColor: "#6f7f42" }));
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

  const filtered = useMemo(() => {
    const terms = TYPE_FILTERS[typeIdx].terms;
    return properties.filter((p) => {
      const t = String(p.property_type || p.type || "").toLowerCase();
      const typeOk = terms.length === 0 || terms.some((term) => t.includes(term));
      const priceOk =
        (!minPrice || (p.price != null && p.price >= minPrice)) && (!maxPrice || (p.price != null && p.price <= maxPrice));
      const size = getPropertyArea(p);
      const sizeOk = !minSize || (size != null && size >= minSize);
      return typeOk && priceOk && sizeOk;
    });
  }, [properties, typeIdx, minPrice, maxPrice, minSize]);

  const allHref = useMemo(() => {
    const params = new URLSearchParams();
    if (TYPE_FILTERS[typeIdx].value) params.set("type", TYPE_FILTERS[typeIdx].value);
    if (minPrice) params.set("minPrice", String(minPrice));
    if (maxPrice) params.set("maxPrice", String(maxPrice));
    const qs = params.toString();
    return `/eiendommer${qs ? `?${qs}` : ""}`;
  }, [typeIdx, minPrice, maxPrice]);

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
          {filtered.length > 0 ? (
            <div className="property-grid">
              {filtered.slice(0, 6).map((property, index) => (
                <PropertyCard key={property.id || property.ref || index} property={property} />
              ))}
            </div>
          ) : (
            <p className="explorer-empty">Ingen treff i utvalget – prøv «Se alle treff» for hele basen.</p>
          )}
        </div>
      </div>

      <div className="center-action">
        <a className="contact-button" href={allHref}>
          Se alle treff{TYPE_FILTERS[typeIdx].value ? ` for ${TYPE_FILTERS[typeIdx].label.toLowerCase()}` : ""}
        </a>
      </div>
    </section>
  );
}
