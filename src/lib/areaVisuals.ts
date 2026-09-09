import { normalizeSearchText } from "@/lib/realtyflow";

/**
 * Editorial area photography for guide pages.
 *
 * These images are intentionally about the PLACE, not a random property:
 * beach + skyline for Benidorm, old town for Altea, Peñón de Ifach for Calpe,
 * Puig Campana for Finestrat, etc.
 *
 * Sources below are Wikimedia Commons files released as CC0/public domain,
 * so they can be used commercially without attribution requirements.
 */
function commons(fileName: string) {
  return `https://commons.wikimedia.org/wiki/Special:Redirect/file/${encodeURIComponent(fileName)}?width=1800`;
}

const AREA_VISUALS: Record<string, string> = {
  // Costa Blanca Nord — coastal identity first
  albir: commons("Playa del Racó del Albir.JPG"),
  "l albir": commons("Playa del Racó del Albir.JPG"),
  "alfas del pi": commons("Playa del Racó del Albir.JPG"),
  "alfaz del pi": commons("Playa del Racó del Albir.JPG"),

  altea: commons("Old altea.jpg"),

  benidorm: commons("Benidorm - Playa de Poniente 26.jpg"),

  benissa: commons("Punta Prado in Benissa.jpg"),

  calpe: commons("Vista sobre Calpe y el Peñón de Ifach.jpg"),
  calp: commons("Vista sobre Calpe y el Peñón de Ifach.jpg"),

  denia: commons("Dénia castillo 1.jpg"),

  finestrat: commons("Puig Campana Puig Campana.JPG"),

  polop: commons("Polop i el Panoig.jpg"),

  moraira: commons("CastMoraira01.jpg"),
  teulada: commons("CastMoraira01.jpg"),

  javea: commons("Jávea desde el Montgó.jpg"),
  xabia: commons("Jávea desde el Montgó.jpg"),

  "el campello": commons("El Campello - Playa 2.jpg"),
  campello: commons("El Campello - Playa 2.jpg"),
};

export function getEditorialAreaImage(areaName: string): string | null {
  const target = normalizeSearchText(areaName);
  if (!target) return null;

  if (AREA_VISUALS[target]) return AREA_VISUALS[target];

  // RealtyFlow area names can include a municipality/region suffix. Match a
  // known place only when it is a meaningful contained term.
  const match = Object.entries(AREA_VISUALS).find(([key]) =>
    key.length >= 5 && (target.includes(key) || key.includes(target)),
  );

  return match?.[1] || null;
}
