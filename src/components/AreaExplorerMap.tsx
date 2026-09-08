"use client";

import { useEffect, useMemo, useRef, useState } from "react";

export type AreaExplorerLocation = {
  id: string;
  name: string;
  lat: number;
  lng: number;
  region?: string;
  description?: string;
  image?: string;
  href: string;
  propertyHref?: string;
};

export function AreaExplorerMap({
  locations,
  label = "Utforsk områdene på kartet",
  intro = "Trykk på et sted for å få en rask forklaring før du leser mer.",
}: {
  locations: AreaExplorerLocation[];
  label?: string;
  intro?: string;
}) {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const mapInstance = useRef<any>(null);
  const [selectedId, setSelectedId] = useState(locations[0]?.id || "");
  const selected = useMemo(
    () => locations.find((location) => location.id === selectedId) || locations[0],
    [locations, selectedId],
  );

  useEffect(() => {
    if (!mapRef.current || mapInstance.current || locations.length === 0) return;
    let cancelled = false;

    void import("leaflet").then((leafletModule) => {
      if (cancelled || !mapRef.current) return;
      const L = leafletModule.default;
      const map = L.map(mapRef.current, {
        scrollWheelZoom: false,
        zoomControl: true,
        attributionControl: true,
      });
      mapInstance.current = map;

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: "&copy; OpenStreetMap",
      }).addTo(map);

      const bounds = L.latLngBounds([]);
      locations.forEach((location) => {
        const markerIcon = L.divIcon({
          className: "zeneco-map-marker-wrap",
          html: '<span class="zeneco-map-marker" aria-hidden="true"><span></span></span>',
          iconSize: [30, 38],
          iconAnchor: [15, 34],
        });
        const marker = L.marker([location.lat, location.lng], { icon: markerIcon }).addTo(map);
        marker.bindTooltip(location.name, { direction: "top", offset: [0, -28] });
        marker.on("click", () => setSelectedId(location.id));
        bounds.extend([location.lat, location.lng]);
      });

      if (locations.length === 1) map.setView([locations[0].lat, locations[0].lng], 11);
      else map.fitBounds(bounds, { padding: [42, 42], maxZoom: 10 });
    });

    return () => {
      cancelled = true;
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, [locations]);

  if (locations.length === 0) return null;

  return (
    <section className="area-explorer-map-section" aria-label={label}>
      <div className="area-explorer-map-heading">
        <p className="eyebrow">Rask områdeoversikt</p>
        <h2>{label}</h2>
        <p>{intro}</p>
      </div>
      <div className="area-explorer-map-shell">
        <div className="area-explorer-map-canvas" ref={mapRef} />
        {selected && (
          <article className="area-explorer-map-card" aria-live="polite">
            {selected.image && <img src={selected.image} alt="" />}
            <div>
              <span>{selected.region || "Zen Eco Homes"}</span>
              <h3>{selected.name}</h3>
              {selected.description && <p>{selected.description}</p>}
              <div className="area-explorer-map-actions">
                <a href={selected.href}>Utforsk området</a>
                {selected.propertyHref && <a href={selected.propertyHref}>Se boliger</a>}
              </div>
            </div>
          </article>
        )}
      </div>
      <div className="area-explorer-map-list" aria-label="Velg sted">
        {locations.map((location) => (
          <button
            className={selected?.id === location.id ? "active" : ""}
            key={location.id}
            onClick={() => {
              setSelectedId(location.id);
              mapInstance.current?.setView([location.lat, location.lng], Math.max(mapInstance.current.getZoom(), 10), { animate: true });
            }}
            type="button"
          >
            {location.name}
          </button>
        ))}
      </div>
    </section>
  );
}
