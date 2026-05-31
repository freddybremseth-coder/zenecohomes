"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import "leaflet/dist/leaflet.css";
import type { LandPlot } from "@/lib/realtyflow";

const CATASTRO_WMS_URL = "https://ovc.catastro.meh.es/Cartografia/WMS/ServidorWMS.aspx";
const CATASTRO_MAP_URL = "https://www1.sedecatastro.gob.es/Cartografia/mapa.aspx";
const CATASTRO_REF_PATTERN = /\b\d{5}[A-Z]\d{7}[A-Z0-9]{7}\b/i;

type PlotWithCatastro = LandPlot & {
  cadastral_reference?: string;
  cadastralReference?: string;
  referencia_catastral?: string;
  referenciaCatastral?: string;
  catastro_ref?: string;
  catastroRef?: string;
  polygon?: string | number;
  poligono?: string | number;
  polígono?: string | number;
  parcel?: string | number;
  parcela?: string | number;
  registry_number?: string;
  finca_registral?: string;
};

function formatEuro(value?: number) {
  if (!value) return "Pris på forespørsel";
  return new Intl.NumberFormat("nb-NO", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(value);
}

function plotRef(plot: PlotWithCatastro) {
  return plot.plot_number || plot.plotNumber || plot.id || "Tomt";
}

function cleanCatastroRef(value?: string | number) {
  const normalized = String(value || "").toUpperCase().replace(/[^0-9A-Z]/g, "");
  const directMatch = normalized.match(CATASTRO_REF_PATTERN);
  if (directMatch) return directMatch[0];

  const looseMatch = String(value || "").toUpperCase().match(CATASTRO_REF_PATTERN);
  return looseMatch?.[0] || "";
}

function extractCatastroRefFromPlot(plot: PlotWithCatastro) {
  return cleanCatastroRef(
    [
      plot.notes,
      plot.location,
      plot.municipality,
      plotRef(plot),
      plot.registry_number,
      plot.finca_registral,
    ]
      .filter(Boolean)
      .join(" "),
  );
}

function getCatastroRef(plot: PlotWithCatastro) {
  return (
    cleanCatastroRef(plot.cadastral_reference) ||
    cleanCatastroRef(plot.cadastralReference) ||
    cleanCatastroRef(plot.referencia_catastral) ||
    cleanCatastroRef(plot.referenciaCatastral) ||
    cleanCatastroRef(plot.catastro_ref) ||
    cleanCatastroRef(plot.catastroRef) ||
    extractCatastroRefFromPlot(plot)
  );
}

function getPolygon(plot: PlotWithCatastro) {
  return plot.poligono || plot.polígono || plot.polygon || "";
}

function getParcel(plot: PlotWithCatastro) {
  return plot.parcela || plot.parcel || "";
}

function getCatastroUrl(plot: PlotWithCatastro) {
  const ref = getCatastroRef(plot);
  if (ref) return `${CATASTRO_MAP_URL}?refcat=${encodeURIComponent(ref)}`;

  if (plot.lat && plot.lng) {
    return `${CATASTRO_MAP_URL}?lat=${encodeURIComponent(String(plot.lat))}&lng=${encodeURIComponent(String(plot.lng))}`;
  }

  return CATASTRO_MAP_URL;
}

function popupHtml(plot: PlotWithCatastro) {
  const ref = getCatastroRef(plot);
  const polygon = getPolygon(plot);
  const parcel = getParcel(plot);
  const facts = [
    plot.location || plot.municipality || "Spania",
    formatEuro(plot.price),
    `${Number(plot.area || 0).toLocaleString("nb-NO")} m²`,
    polygon ? `Polígono ${polygon}` : "",
    parcel ? `Parcela ${parcel}` : "",
    ref ? `Catastro: ${ref}` : "",
  ]
    .filter(Boolean)
    .join("<br>");

  return `<strong>${plotRef(plot)}</strong><br>${facts}<br><a href="${getCatastroUrl(plot)}" target="_blank" rel="noopener noreferrer">Åpne i Catastro</a>`;
}

export function PlotsMap({ plots }: { plots: LandPlot[] }) {
  const mapNode = useRef<HTMLDivElement>(null);
  const mapRef = useRef<any>(null);
  const catastroLayerRef = useRef<any>(null);
  const [catastroEnabled, setCatastroEnabled] = useState(true);
  const typedPlots = useMemo(() => plots as PlotWithCatastro[], [plots]);

  useEffect(() => {
    let mounted = true;

    async function initMap() {
      if (!mapNode.current || mapRef.current) return;
      const L = (await import("leaflet")).default;
      if (!mounted || !mapNode.current) return;

      const validPlots = typedPlots.filter((plot) => Number(plot.lat) && Number(plot.lng));
      const center: [number, number] = validPlots.length
        ? [Number(validPlots[0].lat), Number(validPlots[0].lng)]
        : [38.45, -0.95];

      const map = L.map(mapNode.current, {
        center,
        zoom: validPlots.length > 1 ? 10 : 12,
        scrollWheelZoom: true,
      });

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 19,
      }).addTo(map);

      const catastroLayer = L.tileLayer.wms(CATASTRO_WMS_URL, {
        layers: "Catastro",
        format: "image/png",
        transparent: true,
        version: "1.1.1",
        attribution: "Dirección General del Catastro",
        maxZoom: 22,
      });

      if (catastroEnabled) catastroLayer.addTo(map);
      catastroLayerRef.current = catastroLayer;

      const bounds: Array<[number, number]> = [];
      validPlots.forEach((plot) => {
        const lat = Number(plot.lat);
        const lng = Number(plot.lng);
        bounds.push([lat, lng]);

        const marker = L.circleMarker([lat, lng], {
          radius: 8,
          color: "#ffffff",
          weight: 3,
          fillColor: "#b9935a",
          fillOpacity: 0.95,
        }).addTo(map);

        const catastroRef = getCatastroRef(plot);
        const polygon = getPolygon(plot);
        const parcel = getParcel(plot);
        const tooltipParts = [
          `<strong>${plotRef(plot)}</strong>`,
          `${formatEuro(plot.price)} · ${Number(plot.area || 0).toLocaleString("nb-NO")} m²`,
          polygon || parcel ? `Polígono ${polygon || "-"} · Parcela ${parcel || "-"}` : "",
          catastroRef ? `Ref. catastral: ${catastroRef}` : "",
        ].filter(Boolean);

        marker.bindTooltip(tooltipParts.join("<br>"), { direction: "top", sticky: true });
        marker.bindPopup(popupHtml(plot));
      });

      if (bounds.length > 1) {
        map.fitBounds(bounds, { padding: [28, 28], maxZoom: 14 });
      }

      setTimeout(() => map.invalidateSize(), 120);
      mapRef.current = map;
    }

    initMap();

    return () => {
      mounted = false;
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [typedPlots, catastroEnabled]);

  useEffect(() => {
    const map = mapRef.current;
    const catastroLayer = catastroLayerRef.current;
    if (!map || !catastroLayer) return;

    if (catastroEnabled && !map.hasLayer(catastroLayer)) catastroLayer.addTo(map);
    if (!catastroEnabled && map.hasLayer(catastroLayer)) map.removeLayer(catastroLayer);
  }, [catastroEnabled]);

  return (
    <div className="map-surface real-map catastro-map-surface">
      <span className="map-label">Kartoversikt</span>
      <div className="catastro-map-tools" aria-label="Kartvalg">
        <button type="button" className={catastroEnabled ? "active" : ""} onClick={() => setCatastroEnabled((value) => !value)}>
          {catastroEnabled ? "Catastro på" : "Catastro av"}
        </button>
        <span>WMS-lag med parcelgrenser</span>
      </div>
      <div ref={mapNode} className="leaflet-plot-map" />
      <style jsx global>{`
        .catastro-map-surface .leaflet-popup-content a {
          color: #047857;
          font-weight: 900;
        }

        .catastro-map-tools {
          position: absolute;
          right: 18px;
          top: 18px;
          z-index: 3;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px;
          border-radius: 4px;
          background: rgba(255, 255, 255, 0.94);
          box-shadow: 0 12px 32px rgba(22, 34, 43, 0.16);
        }

        .catastro-map-tools button {
          min-height: 36px;
          border: 0;
          border-radius: 4px;
          padding: 0 12px;
          background: #171e3a;
          color: white;
          cursor: pointer;
          font-weight: 900;
        }

        .catastro-map-tools button.active {
          background: #b9935a;
        }

        .catastro-map-tools span {
          color: #617084;
          font-size: 0.78rem;
          font-weight: 800;
        }
      `}</style>
    </div>
  );
}
