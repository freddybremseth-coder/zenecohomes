export type AreaMapCoordinate = { lat: number; lng: number };

function key(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

const COORDINATES: Record<string, AreaMapCoordinate> = {
  "altea": { lat: 38.6029, lng: -0.0511 },
  "albir": { lat: 38.5688, lng: -0.0676 },
  "l albir": { lat: 38.5688, lng: -0.0676 },
  "benidorm": { lat: 38.5411, lng: -0.1225 },
  "finestrat": { lat: 38.5677, lng: -0.2124 },
  "polop": { lat: 38.6229, lng: -0.1302 },
  "la nucia": { lat: 38.6131, lng: -0.1269 },
  "villajoyosa": { lat: 38.5071, lng: -0.2335 },
  "la vila joiosa": { lat: 38.5071, lng: -0.2335 },
  "calpe": { lat: 38.6448, lng: 0.0453 },
  "calp": { lat: 38.6448, lng: 0.0453 },
  "moraira": { lat: 38.6883, lng: 0.1348 },
  "teulada moraira": { lat: 38.6883, lng: 0.1348 },
  "javea": { lat: 38.7893, lng: 0.1667 },
  "xabia": { lat: 38.7893, lng: 0.1667 },
  "denia": { lat: 38.8408, lng: 0.1057 },
  "alicante": { lat: 38.3452, lng: -0.4810 },
  "el campello": { lat: 38.4280, lng: -0.3977 },
  "mutxamel": { lat: 38.4158, lng: -0.4453 },
  "santa pola": { lat: 38.1917, lng: -0.5658 },
  "guardamar del segura": { lat: 38.0903, lng: -0.6556 },
  "rojales": { lat: 38.0875, lng: -0.7254 },
  "ciudad quesada": { lat: 38.0617, lng: -0.7180 },
  "torrevieja": { lat: 37.9787, lng: -0.6822 },
  "orihuela costa": { lat: 37.9305, lng: -0.7331 },
  "orihuela": { lat: 38.0856, lng: -0.9445 },
  "pilar de la horadada": { lat: 37.8659, lng: -0.7925 },
  "mil palmeras": { lat: 37.8842, lng: -0.7598 },
  "campoamor": { lat: 37.9044, lng: -0.7477 },
  "la zenia": { lat: 37.9306, lng: -0.7276 },
  "cabo roig": { lat: 37.9134, lng: -0.7299 },
  "los alcazares": { lat: 37.7443, lng: -0.8508 },
  "san javier": { lat: 37.8063, lng: -0.8374 },
  "san pedro del pinatar": { lat: 37.8357, lng: -0.7910 },
  "santiago de la ribera": { lat: 37.7968, lng: -0.8054 },
  "murcia": { lat: 37.9922, lng: -1.1307 },
  "biar": { lat: 38.6311, lng: -0.7667 },
  "villena": { lat: 38.6373, lng: -0.8657 },
  "sax": { lat: 38.5370, lng: -0.8178 },
  "castalla": { lat: 38.5964, lng: -0.6721 },
  "banyeres de mariola": { lat: 38.7154, lng: -0.6596 },
  "pinoso": { lat: 38.4028, lng: -1.0420 },
  "el pinos": { lat: 38.4028, lng: -1.0420 },
  "monovar": { lat: 38.4374, lng: -0.8382 },
  "hondon dalene": { lat: 38.3089, lng: -0.8534 },
  "hondon de las nieves": { lat: 38.3089, lng: -0.8534 },
  "hondon de los frailes": { lat: 38.2731, lng: -0.9294 },
  "aspe": { lat: 38.3450, lng: -0.7670 },
  "novelda": { lat: 38.3848, lng: -0.7670 },
  "elda": { lat: 38.4786, lng: -0.7916 },
  "petrer": { lat: 38.4852, lng: -0.7690 },
  "salinas": { lat: 38.5207, lng: -0.9129 },
  "la romana": { lat: 38.3670, lng: -0.8985 },
  "algueña": { lat: 38.3389, lng: -1.0041 },
  "alguena": { lat: 38.3389, lng: -1.0041 },
  "ibi": { lat: 38.6250, lng: -0.5725 },
  "onil": { lat: 38.6264, lng: -0.6746 },
  "tibi": { lat: 38.5307, lng: -0.5778 },
};

export function getAreaMapCoordinate(name: string): AreaMapCoordinate | null {
  const normalized = key(name);
  if (COORDINATES[normalized]) return COORDINATES[normalized];

  const exactContained = Object.entries(COORDINATES).find(([candidate]) =>
    normalized.includes(candidate) || candidate.includes(normalized),
  );
  return exactContained?.[1] || null;
}
