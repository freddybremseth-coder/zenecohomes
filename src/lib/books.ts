// Freddy Bremseths stedsguider ("Let Me Guide You"-serien) på books.freddybremseth.com.
// Kobles inn der et sted omtales på zenecohomes.com. Blurb = bokas egen undertittel
// (hentet fra books-data.js). Cover bruker lokale filer der de finnes, ellers bok-sidens.

export const BOOKS_BASE = "https://books.freddybremseth.com";

/** Lenke til en bok, f.eks. bookUrl("guide-finestrat-no"). */
export const bookUrl = (slug: string) => `${BOOKS_BASE}/book/${slug}`;

export type PlaceBook = {
  town: string;
  title: string;
  /** Bokas egen undertittel/blurb. */
  blurb: string;
  slug: string;
  cover: string;
  /** Region-nøkler (jf. realtyflow.ts) der boken hører hjemme. */
  regions: string[];
};

/** Den generelle guideboken – naturlig å anbefale i innlandsseksjonen og på forsiden. */
export const generalGuideBook = {
  title: "Costa Blanca — North, South or Inland?",
  blurb:
    "Bok 1 i serien Let Me Guide You – en ærlig, praktisk guide til å velge riktig del av Costa Blanca (nord, sør eller innland) før du kjøper.",
  slug: "guide-costa-blanca",
  cover: `${BOOKS_BASE}/assets/covers/guide-costa-blanca.png`,
};

/** Alle stedsbøkene er kyst-/Marina-byer nord for eller rundt Alicante = Costa Blanca Nord. */
export const placeBooks: PlaceBook[] = [
  {
    town: "Altea",
    title: "Altea",
    blurb: "En lokal guide til å bo og kjøpe bolig i Altea, Costa Blanca.",
    slug: "guide-altea-no",
    cover: "/assets/books/altea-norsk.png",
    regions: ["costa-blanca-nord"],
  },
  {
    town: "Albir",
    title: "Albir",
    blurb: "En lokal guide til å bo og kjøpe bolig i Albir, Costa Blanca.",
    slug: "guide-albir-no",
    cover: "/assets/books/albir-norsk.png",
    regions: ["costa-blanca-nord"],
  },
  {
    town: "Calpe",
    title: "Calpe",
    blurb: "En lokal guide til å bo og kjøpe bolig i Calpe, Costa Blanca.",
    slug: "guide-calpe-no",
    cover: "/assets/books/calpe-norsk.png",
    regions: ["costa-blanca-nord"],
  },
  {
    town: "Dénia",
    title: "Dénia",
    blurb: "Havnen, strandene – og byen som lever hele året.",
    slug: "guide-denia-no",
    cover: "/assets/books/denia-english.png",
    regions: ["costa-blanca-nord"],
  },
  {
    town: "Finestrat",
    title: "Finestrat",
    blurb: "En lokal guide til å bo og kjøpe bolig i Finestrat, Costa Blanca.",
    slug: "guide-finestrat-no",
    cover: "/assets/books/finestrat-norsk.png",
    regions: ["costa-blanca-nord"],
  },
  {
    town: "La Nucía",
    title: "La Nucía",
    blurb: "Sportsbyen, høydene – og livet mellom kyst og fjell.",
    slug: "guide-la-nucia-no",
    cover: "/assets/books/la-nucia-norsk.png",
    regions: ["costa-blanca-nord"],
  },
  {
    town: "Moraira",
    title: "Moraira",
    blurb: "Mer enn en idyll.",
    slug: "guide-moraira-no",
    cover: "/assets/books/moraira-norsk.jpg",
    regions: ["costa-blanca-nord"],
  },
  {
    town: "Polop",
    title: "Polop",
    blurb: "En lokal guide til å bo og kjøpe bolig i Polop, Costa Blanca.",
    slug: "guide-polop-no",
    cover: "/assets/books/polop-norsk.png",
    regions: ["costa-blanca-nord"],
  },
  {
    town: "Benidorm",
    title: "Benidorm",
    blurb: "Bak høyhusene – den virkelige byen bak feriebildet.",
    slug: "guide-benidorm-no",
    cover: "/assets/books/benidorm-english.jpg",
    regions: ["costa-blanca-nord"],
  },
  {
    town: "El Campello",
    title: "El Campello",
    blurb: "Strendene, marinaen – og kystbyen som kobler Alicante med nord.",
    slug: "guide-el-campello-no",
    cover: "/assets/books/el-campello-english.png",
    regions: ["costa-blanca-nord"],
  },
  {
    town: "Sant Joan d'Alacant",
    title: "Sant Joan d'Alacant",
    blurb: "Huerta-byen, sykehuset – og villalivet mellom Alicante og San Juan-stranden.",
    slug: "guide-sant-joan-en",
    cover: "/assets/books/sant-joan-english.png",
    regions: ["costa-blanca-nord"],
  },
  {
    town: "Mutxamel",
    title: "Mutxamel",
    blurb: "Den gamle byen, appelsinlundene – og villalivet mellom Alicante og havet.",
    slug: "guide-mutxamel-no",
    cover: "/assets/books/mutxamel-norsk.png",
    regions: ["costa-blanca-nord"],
  },
];

/** Stedsbøker som hører til en gitt region (tom liste = ingen bok-seksjon). */
export function booksForRegion(regionKey: string): PlaceBook[] {
  return placeBooks.filter((book) => book.regions.includes(regionKey));
}
