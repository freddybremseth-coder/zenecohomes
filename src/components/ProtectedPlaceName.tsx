import type { ReactNode } from "react";

/** Prevent place names from being hyphenated in headlines or editorial text. */
const PLACE_NAMES = [
  "Costa Blanca Nord", "Costa Blanca Sør", "Costa Cálida", "Ciudad Quesada",
  "Guardamar del Segura", "Sant Joan d'Alacant", "San Pedro del Pinatar",
  "Los Alcázares", "La Nucía", "Altea la Vella", "Altea Hills", "Cap Negret",
  "La Olla", "Sierra de Altea", "Benidorm", "Finestrat", "Villajoyosa",
  "Altea", "Albir", "Polop", "Jávea", "Xàbia", "Moraira", "Dénia", "Calpe",
  "Torrevieja", "Orihuela Costa", "Alicante", "El Campello", "Puig Campana",
  "Rojales", "Mar Menor", "Mascarat",
];
const escaped = PLACE_NAMES.map((name) => name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).sort((a, b) => b.length - a.length);
const re = new RegExp(`(${escaped.join("|")})`, "gi");

export function NoBreakName({ name }: { name: string }) {
  return <span className="proper-name">{name}</span>;
}

export function ProtectPlaceNames({ text }: { text: string }): ReactNode {
  const parts = text.split(re);
  return parts.map((part, index) => {
    const isName = PLACE_NAMES.some((name) => name.toLocaleLowerCase("nb-NO") === part.toLocaleLowerCase("nb-NO"));
    return isName ? <span className="proper-name" key={index}>{part}</span> : part;
  });
}
