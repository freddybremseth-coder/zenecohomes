import { normalizeSearchText } from "@/lib/realtyflow";

/**
 * Editorial area photography for guide pages.
 *
 * These images are intentionally about the PLACE, not a random property:
 * beach + skyline for Benidorm, old town for Altea, Peñón de Ifach for Calpe,
 * Puig Campana for Finestrat, etc.
 *
 * Wikimedia sources have different copyright licenses (CC0, CC BY, CC BY-SA
 * and public domain). See the per-file credits and link to the Commons file.
 */
/* Commons redirect pages are not valid Next.js optimized image hosts.
 * These paths point directly at Wikimedia's static upload origin, which is
 * allowed by next.config.ts; files checked against their Commons file pages.
 * Do not generate these paths from unverified file names. */
const VERIFIED_COMMONS: Record<string, string> = {
  "Playa del Racó del Albir.JPG": "9/97/Playa_del_Rac%C3%B3_del_Albir.JPG",
  "Vista de Altea, Alicante, España, 2023-01-21, DD 43.jpg": "0/09/Vista_de_Altea,_Alicante,_Espa%C3%B1a,_2023-01-21,_DD_43.jpg",
  "Benidorm - Playa de Poniente 26.jpg": "4/45/Benidorm_-_Playa_de_Poniente_26.jpg",
  "Punta Prado in Benissa.jpg": "8/8c/Punta_Prado_in_Benissa.jpg",
  "Vista sobre Calpe y el Peñón de Ifach.jpg": "5/53/Vista_sobre_Calpe_y_el_Pe%C3%B1%C3%B3n_de_Ifach.jpg",
  "Dénia castillo 1.jpg": "6/6f/D%C3%A9nia_castillo_1.jpg",
  "Puig Campana Puig Campana.JPG": "7/71/Puig_Campana_Puig_Campana.JPG",
  "Polop i el Panoig.jpg": "a/a9/Polop_i_el_Panoig.jpg",
  "CastMoraira01.jpg": "7/71/CastMoraira01.jpg",
  "Jávea desde el Montgó.jpg": "9/9b/J%C3%A1vea_desde_el_Montg%C3%B3.jpg",
  "El Campello - Playa 2.jpg": "8/85/El_Campello_-_Playa_2.jpg",
  "Xaló, Marina Alta, País Valencià.JPG": "2/28/Xal%C3%B3%2C_Marina_Alta%2C_Pa%C3%ADs_Valenci%C3%A0.JPG",
  "Playa Centro, Villajoyosa, España, 2014-07-03, DD 28.JPG": "9/9b/Playa_Centro%2C_Villajoyosa%2C_Espa%C3%B1a%2C_2014-07-03%2C_DD_28.JPG",
  "Pueblo y castillo de Biar, Alicante.jpg": "c/cd/Pueblo_y_castillo_de_Biar%2C_Alicante.jpg",
  "Església de sant Joan Baptista de Sant Joan d'Alacant.jpg": "0/0d/Esgl%C3%A9sia_de_sant_Joan_Baptista_de_Sant_Joan_d%27Alacant.jpg",
  "Iglesia parroquial de Muchamiel.jpg": "5/58/Iglesia_parroquial_de_Muchamiel.jpg",
  "Vista Alicante-Desde Castillo Santa Bárbara.JPG": "b/b0/Vista_Alicante-Desde_Castillo_Santa_B%C3%A1rbara.JPG",
  "L'Alfàs del Pi.jpg": "f/fd/L%27Alf%C3%A0s_del_Pi.jpg",
  "Vista de la Nucia des del castell de Polop.JPG": "e/e4/Vista_de_la_Nucia_des_del_castell_de_Polop.JPG",
  "Teulada.jpg": "f/fb/Teulada.jpg",
  "Playa de La Glea, en Dehesa de Campoamor.jpg": "9/9a/Playa_de_La_Glea,_en_Dehesa_de_Campoamor.jpg",
  "Gran Alacant 03.JPG": "6/6d/Gran_Alacant_03.JPG",
  "La Zenia Boulevard (49287363646).jpg": "c/c4/La_Zenia_Boulevard_(49287363646).jpg",
  "Plaza del ayuntamiento de Calasparra.jpg": "b/b7/Plaza_del_ayuntamiento_de_Calasparra.jpg",
  "Playa de la Mata in La Mata, Torrevieja, Alicante, Spain, 2022 January.jpg": "e/e3/Playa_de_la_Mata_in_La_Mata,_Torrevieja,_Alicante,_Spain,_2022_January.jpg",
  "Calle de San Fulgencio.jpg": "3/37/Calle_de_San_Fulgencio.jpg",
  "Cathedral, Murcia.jpg": "2/27/Cathedral,_Murcia.jpg",
  "Windmühle bei Torre Pacheco - 52476806321.jpg": "5/5e/Windm%C3%BChle_bei_Torre_Pacheco_-_52476806321.jpg",
  "Santiago de la Ribera.jpg": "3/3b/Santiago_de_la_Ribera.jpg",
  "La Manga - Playa de la naturaleza - panoramio.jpg": "9/92/La_Manga_-_Playa_de_la_naturaleza_-_panoramio.jpg",
  "Torrevieja - Playas 12.jpg": "4/45/Torrevieja_-_Playas_12.jpg",
  "Guardamar del Segura - Playa Babilonia 4.jpg": "3/34/Guardamar_del_Segura_-_Playa_Babilonia_4.jpg",
  "Ciudad Quesada 02.jpg": "4/41/Ciudad_Quesada_02.jpg",
  "Beach in Cala Capitán in Cabo Roig in Orihuela Costa, Orihuela, Alicante, Spain, 2022 January - 2.jpg": "9/92/Beach_in_Cala_Capit%C3%A1n_in_Cabo_Roig_in_Orihuela_Costa,_Orihuela,_Alicante,_Spain,_2022_January_-_2.jpg",
  "Santa Pola - panoramio (4).jpg": "c/cb/Santa_Pola_-_panoramio_(4).jpg",
  "Mar Menor desde Villananitos.jpg": "a/a2/Mar_Menor_desde_Villananitos.jpg",
  "Iglesia San Francisco Javier.jpg": "4/42/Iglesia_San_Francisco_Javier.jpg",
  "Los Alcazares del mar menor.JPG": "c/c0/Los_Alcazares_del_mar_menor.JPG",
  "Playa natural - La Manga - panorama - panoramio.jpg": "d/d2/Playa_natural_-_La_Manga_-_panorama_-_panoramio.jpg",
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
  "alfas del pi": commons("L'Alfàs del Pi.jpg"),
  "alfaz del pi": commons("L'Alfàs del Pi.jpg"),
  "l alfas del pi": commons("L'Alfàs del Pi.jpg"),
  "l’alfas del pi": commons("L'Alfàs del Pi.jpg"),
  "l\u0027alfas del pi": commons("L\u0027Alfàs del Pi.jpg"),

  altea: commons("Vista de Altea, Alicante, España, 2023-01-21, DD 43.jpg"),

  benidorm: commons("Benidorm - Playa de Poniente 26.jpg"),

  // Playa Centro: colorful waterfront houses, promenade and sandy beach.
  villajoyosa: commons("Playa Centro, Villajoyosa, España, 2014-07-03, DD 28.JPG"),
  "la vila joiosa": commons("Playa Centro, Villajoyosa, España, 2014-07-03, DD 28.JPG"),

  benissa: commons("Punta Prado in Benissa.jpg"),

  calpe: commons("Vista sobre Calpe y el Peñón de Ifach.jpg"),
  calp: commons("Vista sobre Calpe y el Peñón de Ifach.jpg"),

  denia: commons("Dénia castillo 1.jpg"),

  finestrat: commons("Puig Campana Puig Campana.JPG"),

  polop: commons("Polop i el Panoig.jpg"),

  moraira: commons("CastMoraira01.jpg"),
  teulada: commons("Teulada.jpg"),

  javea: commons("Jávea desde el Montgó.jpg"),
  xabia: commons("Jávea desde el Montgó.jpg"),
  "javea/xabia": commons("Jávea desde el Montgó.jpg"),
  "javea / xabia": commons("Jávea desde el Montgó.jpg"),
  "javea xabia": commons("Jávea desde el Montgó.jpg"),

  "el campello": commons("El Campello - Playa 2.jpg"),
  campello: commons("El Campello - Playa 2.jpg"),

  // Verified local historic center, municipal church and Alicante cityscape.
  "sant joan d'alacant": commons("Església de sant Joan Baptista de Sant Joan d'Alacant.jpg"),
  "sant joan dalacant": commons("Església de sant Joan Baptista de Sant Joan d'Alacant.jpg"),
  "san juan de alicante": commons("Església de sant Joan Baptista de Sant Joan d'Alacant.jpg"),
  mutxamel: commons("Iglesia parroquial de Muchamiel.jpg"),
  muchamiel: commons("Iglesia parroquial de Muchamiel.jpg"),
  alicante: commons("Vista Alicante-Desde Castillo Santa Bárbara.JPG"),
  alacant: commons("Vista Alicante-Desde Castillo Santa Bárbara.JPG"),

  // Real Xaló/Jalón town view. Joanbanjo, CC BY-SA 3.0 (attributed on area pages).

  biar: commons("Pueblo y castillo de Biar, Alicante.jpg"),
  nucia: commons("Vista de la Nucia des del castell de Polop.JPG"),
  "la nucia": commons("Vista de la Nucia des del castell de Polop.JPG"),
  "la nucia alicante": commons("Vista de la Nucia des del castell de Polop.JPG"),
  torrevieja: commons("Torrevieja - Playas 12.jpg"),
  "guardamar del segura": commons("Guardamar del Segura - Playa Babilonia 4.jpg"),
  guardamar: commons("Guardamar del Segura - Playa Babilonia 4.jpg"),
  "ciudad quesada": commons("Ciudad Quesada 02.jpg"),
  campoamor: commons("Playa de La Glea, en Dehesa de Campoamor.jpg"),
  "dehesa de campoamor": commons("Playa de La Glea, en Dehesa de Campoamor.jpg"),
  "gran alacant": commons("Gran Alacant 03.JPG"),
  "la zenia": commons("La Zenia Boulevard (49287363646).jpg"),
  calasparra: commons("Plaza del ayuntamiento de Calasparra.jpg"),
  "la mata": commons("Playa de la Mata in La Mata, Torrevieja, Alicante, Spain, 2022 January.jpg"),
  "san fulgencio": commons("Calle de San Fulgencio.jpg"),
  murcia: commons("Cathedral, Murcia.jpg"),
  "torre pacheco": commons("Windmühle bei Torre Pacheco - 52476806321.jpg"),
  "torre-pacheco": commons("Windmühle bei Torre Pacheco - 52476806321.jpg"),
  "santiago de la ribera": commons("Santiago de la Ribera.jpg"),
  "playa honda": commons("La Manga - Playa de la naturaleza - panoramio.jpg"),
  "orihuela costa": commons("Beach in Cala Capitán in Cabo Roig in Orihuela Costa, Orihuela, Alicante, Spain, 2022 January - 2.jpg"),
  "santa pola": commons("Santa Pola - panoramio (4).jpg"),
  "san pedro del pinatar": commons("Mar Menor desde Villananitos.jpg"),
  "san javier": commons("Iglesia San Francisco Javier.jpg"),
  "los alcazares": commons("Los Alcazares del mar menor.JPG"),
  "la manga": commons("Playa natural - La Manga - panorama - panoramio.jpg"),

  "xalo jalon": commons("Xaló, Marina Alta, País Valencià.JPG"),
  "xalo (jalon)": commons("Xaló, Marina Alta, País Valencià.JPG"),
  xalo: commons("Xaló, Marina Alta, País Valencià.JPG"),
  "xalo/jalon": commons("Xaló, Marina Alta, País Valencià.JPG"),
  jalon: commons("Xaló, Marina Alta, País Valencià.JPG"),
};

/** Photo selection is exact: neither substring matching nor a nearby town counts. */
export function getEditorialAreaImage(areaName: string): string | null {
  const key = normalizeSearchText(areaName).trim().replace(/\s+/g, " ");
  return key ? AREA_VISUALS[key] || null : null;
}

type Credit = { author: string; license: string; licenseUrl?: string };
const PHOTO_CREDITS: Record<string, Credit> = {
  "Windmühle bei Torre Pacheco - 52476806321.jpg": { author: "Werner Wilmes", license: "CC BY 2.0", licenseUrl: "https://creativecommons.org/licenses/by/2.0/" },
  "Cathedral, Murcia.jpg": { author: "PiotrMig", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/" },
  "Santiago de la Ribera.jpg": { author: "Wikiwiki", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/" },
  "La Manga - Playa de la naturaleza - panoramio.jpg": { author: "INDALOMANIA", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/" },
  "Playa de la Mata in La Mata, Torrevieja, Alicante, Spain, 2022 January.jpg": { author: "Ximonic (Simo Räsänen)", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/" },
  "Calle de San Fulgencio.jpg": { author: "19Tarrestnom65", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/" },
  "Playa de La Glea, en Dehesa de Campoamor.jpg": { author: "Emilio Gómez Fernández", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/" },
  "Gran Alacant 03.JPG": { author: "Zeisterre", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/" },
  "La Zenia Boulevard (49287363646).jpg": { author: "Kent Wang", license: "CC BY-SA 2.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/" },
  "Plaza del ayuntamiento de Calasparra.jpg": { author: "Anidae", license: "CC BY 4.0", licenseUrl: "https://creativecommons.org/licenses/by/4.0/" },
  "Vista de Altea, Alicante, España, 2023-01-21, DD 43.jpg": { author: "Diego Delso", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/" },
  "Església de sant Joan Baptista de Sant Joan d'Alacant.jpg": { author: "Joanbanjo", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/" },
  "Iglesia parroquial de Muchamiel.jpg": { author: "Rodriguillo", license: "Public domain" },
  "Vista Alicante-Desde Castillo Santa Bárbara.JPG": { author: "Tamorlan", license: "CC BY 3.0", licenseUrl: "https://creativecommons.org/licenses/by/3.0/" },
  "Pueblo y castillo de Biar, Alicante.jpg": { author: "Bsanchez", license: "CC BY-SA 3.0 ES", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/es/" },
  "Playa Centro, Villajoyosa, España, 2014-07-03, DD 28.JPG": { author: "Diego Delso", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/" },
  "Xaló, Marina Alta, País Valencià.JPG": { author: "Joanbanjo", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/" },
  "L'Alfàs del Pi.jpg": { author: "B25es", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/" },
  "Vista de la Nucia des del castell de Polop.JPG": { author: "Joanbanjo", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/" },
  "Teulada.jpg": { author: "Espencat", license: "Public domain" },
  "Torrevieja - Playas 12.jpg": { author: "Zarateman", license: "CC0 1.0", licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/" },
  "Guardamar del Segura - Playa Babilonia 4.jpg": { author: "Zarateman", license: "CC0 1.0", licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/" },
  "Ciudad Quesada 02.jpg": { author: "H. Helmlechner", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/" },
  "Beach in Cala Capitán in Cabo Roig in Orihuela Costa, Orihuela, Alicante, Spain, 2022 January - 2.jpg": { author: "Ximonic (Simo Räsänen)", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/" },
  "Santa Pola - panoramio (4).jpg": { author: "Halina Frederiksen", license: "CC BY 3.0", licenseUrl: "https://creativecommons.org/licenses/by/3.0/" },
  "Mar Menor desde Villananitos.jpg": { author: "Anidae", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/" },
  "Iglesia San Francisco Javier.jpg": { author: "Nurialsl", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/" },
  "Los Alcazares del mar menor.JPG": { author: "Vordmeils", license: "Public domain" },
  "Playa natural - La Manga - panorama - panoramio.jpg": { author: "INDALOMANIA", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/" },
};

export function getEditorialAreaPhoto(areaName: string) {
  const url = getEditorialAreaImage(areaName);
  if (!url) return null;
  const fileName = Object.keys(VERIFIED_COMMONS).find((file) => commons(file) === url);
  if (!fileName) return null;
  const credit: Credit = PHOTO_CREDITS[fileName] || { author: "Wikimedia Commons", license: "Se kildeside for lisens" };
  return {
    url,
    sourceUrl: `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(fileName.replaceAll(" ", "_"))}`,
    credit,
  };
}
