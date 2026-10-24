"use client";

import { useState } from "react";

export function PropertyFloorplans({ images, locale = "no" }: { images: string[]; locale?: string }) {
  const plans = [...new Set(images.filter(url => /^https:\/\//i.test(url)))];
  const [active, setActive] = useState(0);
  if (!plans.length) return null;
  const index = Math.min(active, plans.length - 1);
  const es = locale === "es";
  return <section className="premium-gallery property-floorplans" aria-label={es ? "Planos de la vivienda" : "Plantegninger"}>
    <h2>{es ? "Planos de la vivienda" : "Plantegninger"}</h2>
    <div className="property-floorplans-view">
      <a href={plans[index]} target="_blank" rel="noopener noreferrer" aria-label={es ? "Abrir plano a tamaño completo" : "Åpne plantegning i full størrelse"}>
        <img src={plans[index]} alt={es ? `Plano ${index + 1} de ${plans.length}` : `Plantegning ${index + 1} av ${plans.length}`} loading="lazy" />
      </a>
    </div>
    <div className="property-floorplans-controls">
      {plans.length > 1 && <button type="button" onClick={() => setActive((index - 1 + plans.length) % plans.length)} aria-label={es ? "Plano anterior" : "Forrige plantegning"}>←</button>}
      <span>{index + 1} / {plans.length}</span>
      {plans.length > 1 && <button type="button" onClick={() => setActive((index + 1) % plans.length)} aria-label={es ? "Plano siguiente" : "Neste plantegning"}>→</button>}
      <a href={plans[index]} target="_blank" rel="noopener noreferrer">{es ? "Abrir en tamaño completo ↗" : "Åpne i full størrelse ↗"}</a>
    </div>
    {plans.length > 1 && <div className="property-floorplans-thumbs">
      {plans.map((url, i) => <button key={url} type="button" onClick={() => setActive(i)} aria-current={i === index ? "true" : undefined} aria-label={es ? `Mostrar plano ${i + 1}` : `Vis plantegning ${i + 1}`}><img src={url} alt="" loading="lazy" /></button>)}
    </div>}
  </section>;
}
