import type { Property } from "@/lib/realtyflow";

export function PropertyProjectFacts({ property, locale = "no" }: { property: Property; locale?: string }) {
  const isEs = locale === "es";
  const isEn = locale === "en";
  const isDe = locale === "de";
  const completion = String(property.expected_completion_manual || property.expected_completion_source || "").trim();
  const amenities = Array.isArray(property.amenities_no)
    ? property.amenities_no.filter((item): item is string => typeof item === "string" && item.trim().length > 0)
    : typeof property.amenities_no === "string"
      ? property.amenities_no.split(/\\n|;/).map(item => item.trim()).filter(Boolean)
      : [];
  if (!completion && amenities.length === 0) return null;
  const title = isEs ? "Detalles del proyecto" : isEn ? "Project details" : isDe ? "Projektdetails" : "Prosjekt og leveranse";
  const completionLabel = isEs ? "Entrega prevista (según información disponible)" : isEn ? "Estimated completion (as provided)" : isDe ? "Voraussichtliche Fertigstellung (laut Angabe)" : "Oppgitt forventet ferdigstillelse";
  const amenityLabel = isEs ? "Características indicadas" : isEn ? "Listed features" : isDe ? "Angegebene Merkmale" : "Oppgitte fasiliteter og egenskaper";
  return <section className="property-project-facts" aria-label={title}>
    <h2>{title}</h2>
    <dl>
      {completion && <div><dt>{completionLabel}</dt><dd>{completion}</dd></div>}
      {amenities.length > 0 && <div><dt>{amenityLabel}</dt><dd><ul className="list-disc pl-5 space-y-1">{amenities.map((item, index) => <li key={`${item}-${index}`}>{item}</li>)}</ul></dd></div>}
    </dl>
  </section>;
}
