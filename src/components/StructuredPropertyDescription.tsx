"use client";

import { useMemo, useState } from "react";

const labels: Record<string, { about: string; facilities: string; location: string; more: string; less: string }> = {
  no: { about: "Om boligen og prosjektet", facilities: "Fasiliteter", location: "Beliggenhet", more: "Les hele prosjektbeskrivelsen", less: "Vis kortversjonen" },
  es: { about: "Sobre la vivienda y el proyecto", facilities: "Instalaciones", location: "Ubicación", more: "Leer la descripción completa", less: "Mostrar resumen" },
  en: { about: "About the property and project", facilities: "Facilities", location: "Location", more: "Read full description", less: "Show summary" },
  de: { about: "Immobilie und Projekt", facilities: "Ausstattung", location: "Lage", more: "Gesamte Beschreibung lesen", less: "Zusammenfassung anzeigen" },
};
function parseDescription(text: string) {
  // Group only original sentences. No invented facts or inferred completion dates.
  const sentences = text.replace(/\s+/g, " ").trim().match(/[^.!?]+(?:[.!?]+|$)/g)?.map(s => s.trim()).filter(Boolean) || [];
  const groups = { about: [] as string[], facilities: [] as string[], location: [] as string[] };
  for (const sentence of sentences) {
    if (/\b(strand|sjøen|havet|sentrum|flyplass|beliggen|nærheten|minutes from|beach|airport|playa|aeropuerto|centro|strandnähe|lage)\b/i.test(sentence)) groups.location.push(sentence);
    else if (/\b(basseng|svømmebasseng|trenings|parkering|garasje|felles|klubb|swimming pool|gym|parking|piscina|gimnasio|aparcamiento|pool|fitness)\b/i.test(sentence)) groups.facilities.push(sentence);
    else groups.about.push(sentence);
  }
  return groups;
}
export function StructuredPropertyDescription({ text, locale = "no" }: { text: string; locale?: string }) {
  const [expanded, setExpanded] = useState(false);
  const t = labels[locale] || labels.no;
  const groups = useMemo(() => parseDescription(text), [text]);
  const all = groups.about.length + groups.facilities.length + groups.location.length;
  if (!text.trim()) return null;
  if (text.length < 450 || all < 4) return <div className="rich-text"><h2>{t.about}</h2><p className="whitespace-pre-line">{text}</p></div>;
  return <article className="rich-text property-description-structured">
    {(["about", "facilities", "location"] as const).map(key => {
      const sentences = groups[key];
      if (!sentences.length) return null;
      const shown = expanded ? sentences : sentences.slice(0, key === "about" ? 3 : 2);
      return <section key={key} className="property-description-group">
        <h2>{t[key]}</h2>
        <p>{shown.join(" ")}{!expanded && shown.length < sentences.length ? "…" : ""}</p>
      </section>;
    })}
    <button type="button" aria-expanded={expanded} onClick={() => setExpanded(v => !v)} className="property-description-toggle">{expanded ? t.less : t.more}</button>
  </article>;
}
