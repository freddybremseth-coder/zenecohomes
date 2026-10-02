"use client";

import { useEffect, useRef } from "react";

export type PropertyMapGroup = {
  town: string;
  region: string;
  count: number;
  items: { ref: string; title: string; price: string }[];
};

const TOWN_COORDS: Record<string, [number, number]> = {
  albir: [38.5705, -0.0656],
  "l'alfas del pi": [38.5806, -0.1031],
  "alfaz del pi": [38.5806, -0.1031],
  altea: [38.6029, -0.0504],
  benidorm: [38.5411, -0.1225],
  finestrat: [38.5678, -0.2123],
  "la nucia": [38.6137, -0.1269],
  polop: [38.6224, -0.1303],
  calpe: [38.6437, 0.0455],
  "calp": [38.6437, 0.0455],
  moraira: [38.6888, 0.1348],
  "benissa": [38.7152, 0.0527],
  denia: [38.8408, 0.1057],
  "dénia": [38.8408, 0.1057],
  javea: [38.789, 0.166],
  "jávea": [38.789, 0.166],
  xabia: [38.789, 0.166],
  "xàbia": [38.789, 0.166],
  villajoyosa: [38.5075, -0.2324],
  "la vila joiosa": [38.5075, -0.2324],
  alicante: [38.3452, -0.481],
  "santa pola": [38.1917, -0.5658],
  guardamar: [38.0909, -0.6555],
  "guardamar del segura": [38.0909, -0.6555],
  torrevieja: [37.9787, -0.6822],
  "orihuela costa": [37.93, -0.74],
  orihuela: [38.0848, -0.944],
  "ciudad quesada": [38.0615, -0.726],
  rojales: [38.0872, -0.7253],
  "san miguel de salinas": [37.9799, -0.789],
  "pilar de la horadada": [37.8659, -0.7926],
  pinoso: [38.4016, -1.0414],
  aspe: [38.3451, -0.7672],
  novelda: [38.3848, -0.7677],
  biar: [38.631, -0.7669],
  villena: [38.6373, -0.8657],
  "la romana": [38.3678, -0.8986],
  murcia: [37.9922, -1.1307],
  cartagena: [37.6257, -0.9966],
  "los alcazares": [37.7443, -0.8497],
  "los alcázares": [37.7443, -0.8497],
  "san pedro del pinatar": [37.8357, -0.791],
};

const REGION_COORDS: Record<string, [number, number]> = {
  "costa-blanca-nord": [38.62, -0.03],
  "costa-blanca-sor": [38.0, -0.68],
  "costa-calida": [37.78, -0.86],
  innlandet: [38.42, -0.92],
};

function normalize(value: string) {
  return value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
}

function hashOffset(value: string) {
  let hash = 0;
  for (let i = 0; i < value.length; i += 1) hash = (hash * 31 + value.charCodeAt(i)) | 0;
  const a = ((hash & 255) / 255 - 0.5) * 0.16;
  const b = (((hash >> 8) & 255) / 255 - 0.5) * 0.16;
  return [a, b] as const;
}

function coordinates(group: PropertyMapGroup): [number, number] {
  const town = normalize(group.town);
  const direct = Object.entries(TOWN_COORDS).find(([key]) => normalize(key) === town)?.[1];
  if (direct) return direct;
  const base = REGION_COORDS[group.region] || [38.25, -0.55];
  const [latOffset, lngOffset] = hashOffset(town || group.region);
  return [base[0] + latOffset, base[1] + lngOffset];
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  }[char] || char));
}

export function PropertyMapView({ groups }: { groups: PropertyMapGroup[] }) {
  const mapNode = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let active = true;
    let cleanup: (() => void) | undefined;

    (async () => {
      if (!mapNode.current) return;
      const L = (await import("leaflet")).default;
      if (!active || !mapNode.current) return;

      const map = L.map(mapNode.current, {
        center: [38.2, -0.55],
        zoom: 8,
        scrollWheelZoom: true,
      });
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 19,
      }).addTo(map);

      const bounds: [number, number][] = [];
      for (const group of groups) {
        const point = coordinates(group);
        bounds.push(point);
        const radius = Math.min(24, 9 + Math.log2(Math.max(1, group.count)) * 3);
        const marker = L.circleMarker(point, {
          radius,
          color: "#ffffff",
          weight: 3,
          fillColor: "#526247",
          fillOpacity: 0.94,
        }).addTo(map);

        const links = group.items
          .slice(0, 5)
          .map(
            (item) =>
              `<li><a href="/eiendommer/${encodeURIComponent(item.ref)}"><strong>${escapeHtml(item.title)}</strong><span>${escapeHtml(item.price)}</span></a></li>`,
          )
          .join("");
        const more = group.count > group.items.length ? `<p>+ ${group.count - group.items.length} flere boliger i området</p>` : "";
        marker.bindPopup(
          `<div class="property-map-popup"><h3>${escapeHtml(group.town || "Området")} · ${group.count}</h3><ul>${links}</ul>${more}</div>`,
          { maxWidth: 330 },
        );
        marker.bindTooltip(`${group.town || "Område"} · ${group.count}`, { direction: "top" });
      }

      if (bounds.length > 1) map.fitBounds(bounds, { padding: [36, 36], maxZoom: 11 });
      if (bounds.length === 1) map.setView(bounds[0], 11);

      cleanup = () => map.remove();
    })();

    return () => {
      active = false;
      cleanup?.();
    };
  }, [groups]);

  if (!groups.length) {
    return <div className="property-map-empty">Ingen boliger å vise på kartet med disse filtrene.</div>;
  }

  return (
    <div className="property-map-browser">
      <div ref={mapNode} className="property-results-map" aria-label="Kart med boliger" />
      <p className="property-map-note">
        Kartet viser område eller kommune for boligene, ikke nødvendigvis den eksakte adressen.
      </p>
    </div>
  );
}
