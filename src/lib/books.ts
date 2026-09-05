// Freddy Bremseths stedsguider ("Let Me Guide You"-serien) på books.freddybremseth.com.
// Kobles inn der et sted omtales på zenecohomes.com. Blurb = bokas egen undertittel
// (hentet fra books-data.js). Cover bruker lokale filer der de finnes, ellers bok-sidens.

export const BOOKS_BASE = "https://books.freddybremseth.com";

/** Lenke til en bok, f.eks. bookUrl("guide-finestrat-no"). */
export const bookUrl = (slug: string) => `${BOOKS_BASE}/book/${slug}`;

type BookLocale = "no" | "de" | "en";

function normalize(value: string) {
  return value
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase();
}

export type PlaceBook = {
  town: string;
  title: string;
  /** Bokas egen undertittel/blurb (norsk). */
  blurb: string;
  /** Engelsk blurb (brukt på /en og /de). */
  blurbEn: string;
  /** Norsk utgave-slug (kan mangle – da finnes bare engelsk). */
  slug: string;
  /** Engelsk utgave-slug (kan mangle). */
  slugEn?: string;
  cover: string;
  /** Region-nøkler (jf. realtyflow.ts) der boken hører hjemme. */
  regions: string[];
  /** Normaliserte søkeord for å matche en bolig (tittel/sted) mot denne boken. */
  matchTerms: string[];
};

/** Den generelle guideboken – naturlig å anbefale i innlandsseksjonen og på forsiden. */
export const generalGuideBook = {
  title: "Costa Blanca — North, South or Inland?",
  blurb:
    "Bok 1 i serien Let Me Guide You – en ærlig, praktisk guide til å velge riktig del av Costa Blanca (nord, sør eller innland) før du kjøper.",
  blurbEn: "A Real-World Guide to Finding the Part of Spain That Fits the Life You Want.",
  slug: "guide-costa-blanca",
  cover: `${BOOKS_BASE}/assets/covers/guide-costa-blanca.png`,
};

/** Alle stedsbøkene er kyst-/Marina-byer nord for eller rundt Alicante = Costa Blanca Nord. */
export const placeBooks: PlaceBook[] = [
  {
    town: "Altea",
    title: "Altea",
    blurb: "En lokal guide til å bo og kjøpe bolig i Altea, Costa Blanca.",
    blurbEn: "A local guide to living and buying property in Altea, Costa Blanca.",
    slug: "guide-altea-no",
    slugEn: "guide-altea-en",
    cover: "/assets/books/altea-norsk.png",
    regions: ["costa-blanca-nord"],
    matchTerms: ["altea"],
  },
  {
    town: "Albir",
    title: "Albir",
    blurb: "En lokal guide til å bo og kjøpe bolig i Albir, Costa Blanca.",
    blurbEn: "A local guide to living and buying property in Albir, Costa Blanca.",
    slug: "guide-albir-no",
    slugEn: "guide-albir-en",
    cover: "/assets/books/albir-norsk.png",
    regions: ["costa-blanca-nord"],
    matchTerms: ["albir", "alfas del pi", "alfaz", "alfas"],
  },
  {
    town: "Calpe",
    title: "Calpe",
    blurb: "En lokal guide til å bo og kjøpe bolig i Calpe, Costa Blanca.",
    blurbEn: "A local guide to living and buying property in Calpe, Costa Blanca.",
    slug: "guide-calpe-no",
    slugEn: "guide-calpe-en",
    cover: "/assets/books/calpe-norsk.png",
    regions: ["costa-blanca-nord"],
    matchTerms: ["calpe", "calp"],
  },
  {
    town: "Dénia",
    title: "Dénia",
    blurb: "Havnen, strandene – og byen som lever hele året.",
    blurbEn: "The port, the beaches — and the year-round city.",
    slug: "guide-denia-no",
    slugEn: "guide-denia-en",
    cover: "/assets/books/denia-english.png",
    regions: ["costa-blanca-nord"],
    matchTerms: ["denia"],
  },
  {
    town: "Finestrat",
    title: "Finestrat",
    blurb: "En lokal guide til å bo og kjøpe bolig i Finestrat, Costa Blanca.",
    blurbEn: "A local guide to living and buying property in Finestrat, Costa Blanca.",
    slug: "guide-finestrat-no",
    slugEn: "guide-finestrat-en",
    cover: "/assets/books/finestrat-norsk.png",
    regions: ["costa-blanca-nord"],
    matchTerms: ["finestrat"],
  },
  {
    town: "La Nucía",
    title: "La Nucía",
    blurb: "Sportsbyen, høydene – og livet mellom kyst og fjell.",
    blurbEn: "The sports city, the hills — and the life between coast and mountain.",
    slug: "guide-la-nucia-no",
    slugEn: "guide-la-nucia-en",
    cover: "/assets/books/la-nucia-norsk.png",
    regions: ["costa-blanca-nord"],
    matchTerms: ["la nucia", "nucia"],
  },
  {
    town: "Moraira",
    title: "Moraira",
    blurb: "Mer enn en idyll.",
    blurbEn: "More than a postcard.",
    slug: "guide-moraira-no",
    cover: "/assets/books/moraira-norsk.jpg",
    regions: ["costa-blanca-nord"],
    matchTerms: ["moraira", "teulada"],
  },
  {
    town: "Polop",
    title: "Polop",
    blurb: "En lokal guide til å bo og kjøpe bolig i Polop, Costa Blanca.",
    blurbEn: "A local guide to living and buying property in Polop, Costa Blanca.",
    slug: "guide-polop-no",
    slugEn: "guide-polop-en",
    cover: "/assets/books/polop-norsk.png",
    regions: ["costa-blanca-nord"],
    matchTerms: ["polop"],
  },
  {
    town: "Benidorm",
    title: "Benidorm",
    blurb: "Bak høyhusene – den virkelige byen bak feriebildet.",
    blurbEn: "Beyond the high-rises — the real city behind the holiday image.",
    slug: "guide-benidorm-no",
    slugEn: "guide-benidorm-en",
    cover: "/assets/books/benidorm-english.jpg",
    regions: ["costa-blanca-nord"],
    matchTerms: ["benidorm"],
  },
  {
    town: "El Campello",
    title: "El Campello",
    blurb: "Strendene, marinaen – og kystbyen som kobler Alicante med nord.",
    blurbEn: "The beaches, the marina — and the coastal town that connects Alicante with the north.",
    slug: "guide-el-campello-no",
    slugEn: "guide-el-campello-en",
    cover: "/assets/books/el-campello-english.png",
    regions: ["costa-blanca-nord"],
    matchTerms: ["campello"],
  },
  {
    town: "Sant Joan d'Alacant",
    title: "Sant Joan d'Alacant",
    blurb: "Huerta-byen, sykehuset – og villalivet mellom Alicante og San Juan-stranden.",
    blurbEn: "The huerta town, the hospital — and the residential life between Alicante and San Juan beach.",
    slug: "guide-sant-joan-en",
    slugEn: "guide-sant-joan-en",
    cover: "/assets/books/sant-joan-english.png",
    regions: ["costa-blanca-nord"],
    matchTerms: ["sant joan"],
  },
  {
    town: "Mutxamel",
    title: "Mutxamel",
    blurb: "Den gamle byen, appelsinlundene – og villalivet mellom Alicante og havet.",
    blurbEn: "The old town, the orchards — and the villa life between Alicante and the sea.",
    slug: "guide-mutxamel-no",
    slugEn: "guide-mutxamel-en",
    cover: "/assets/books/mutxamel-norsk.png",
    regions: ["costa-blanca-nord"],
    matchTerms: ["mutxamel", "muchamiel"],
  },
];

/** Stedsbøker som hører til en gitt region (tom liste = ingen bok-seksjon). */
export function booksForRegion(regionKey: string): PlaceBook[] {
  return placeBooks.filter((book) => book.regions.includes(regionKey));
}

export type LocalizedBook = { title: string; url: string; blurb: string; cover: string };

function slugForLocale(book: PlaceBook, locale: BookLocale) {
  // Ingen tysk utgave finnes – tysk faller tilbake til engelsk, deretter norsk.
  if (locale === "no") return book.slug;
  return book.slugEn || book.slug;
}

/**
 * Finn boken som passer best til en bolig – matcher sted/tittel mot en stedsbok,
 * ellers den generelle Costa Blanca-guiden. Returnerer lokalisert lenke og blurb.
 */
export function bookForProperty(haystack: string, locale: BookLocale): LocalizedBook {
  const h = normalize(haystack);
  const match = placeBooks.find((book) => book.matchTerms.some((term) => h.includes(term)));
  if (match) {
    return {
      title: match.title,
      url: bookUrl(slugForLocale(match, locale)),
      blurb: locale === "no" ? match.blurb : match.blurbEn,
      cover: match.cover,
    };
  }
  return {
    title: generalGuideBook.title,
    url: bookUrl(generalGuideBook.slug),
    blurb: locale === "no" ? generalGuideBook.blurb : generalGuideBook.blurbEn,
    cover: generalGuideBook.cover,
  };
}
