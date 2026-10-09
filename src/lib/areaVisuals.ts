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
/* Commons redirect pages are not valid Next.js optimized image hosts.
 * These paths point directly at Wikimedia's static upload origin, which is
 * allowed by next.config.ts; files checked against their Commons file pages.
 * Do not generate these paths from unverified file names. */
const VERIFIED_COMMONS: Record<string, string> = {
  "Playa del Racó del Albir.JPG": "9/97/Playa_del_Rac%C3%B3_del_Albir.JPG",
  "Old altea.jpg": "b/b7/Old_altea.jpg",
  "Benidorm - Playa de Poniente 26.jpg": "4/45/Benidorm_-_Playa_de_Poniente_26.jpg",
  "Punta Prado in Benissa.jpg": "8/8c/Punta_Prado_in_Benissa.jpg",
  "Vista sobre Calpe y el Peñón de Ifach.jpg": "5/53/Vista_sobre_Calpe_y_el_Pe%C3%B1%C3%B3n_de_Ifach.jpg",
  "Dénia castillo 1.jpg": "6/6f/D%C3%A9nia_castillo_1.jpg",
  "Puig Campana Puig Campana.JPG": "7/71/Puig_Campana_Puig_Campana.JPG",
  "Polop i el Panoig.jpg": "a/a9/Polop_i_el_Panoig.jpg",
  "CastMoraira01.jpg": "7/71/CastMoraira01.jpg",
  "Jávea desde el Montgó.jpg": "9/9b/J%C3%A1vea_desde_el_Montg%C3%B3.jpg",
  "El Campello - Playa 2.jpg": "8/85/El_Campello_-_Playa_2.jpg",
};
function commons(fileName: string) {
  const path = VERIFIED_COMMONS[fileName];
  if (!path) throw new Error(`Unverified Wikimedia file: ${fileName}`);
  return `https://upload.wikimedia.org/wikipedia/commons/${path}`;
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
