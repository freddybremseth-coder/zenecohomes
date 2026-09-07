import { ShieldCheck } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import { getPropertyArea, type Property } from "@/lib/realtyflow";

/**
 * "Zen Eco Homes' vurdering" – en redaksjonell tekstblokk øverst på boligsiden.
 * Teksten settes sammen av boligens egne data (sted, areal, energiklasse) pluss
 * type- og regionspesifikke råd, slik at hver side får unikt innhold (mot
 * duplicate content fra utbyggerfeeden) uten å påstå noe konkret om nettopp
 * denne enheten som vi ikke vet.
 */

type Bucket = "villa" | "leilighet" | "penthouse" | "rekkehus" | "bungalow" | "default";

function bucketOf(property: Property): Bucket {
  const t = String(property.property_type || property.type || "").toLowerCase();
  if (t.includes("penthouse")) return "penthouse";
  if (t.includes("villa") || t.includes("detached")) return "villa";
  if (t.includes("bungalow")) return "bungalow";
  if (t.includes("rekkehus") || t.includes("town") || t.includes("semi") || t.includes("quad") || t.includes("terraced"))
    return "rekkehus";
  if (t.includes("leilighet") || t.includes("apart") || t.includes("studio") || t.includes("flat") || t.includes("penth"))
    return "leilighet";
  return "default";
}

const FOCUS: Record<Bucket, Record<Locale, string>> = {
  villa: {
    no: "tomtegrense, utsikt, solforhold og byggeaktivitet på nabotomtene",
    de: "Grundstücksgrenze, Aussicht, Sonnenverhältnisse und Bautätigkeit auf den Nachbargrundstücken",
    en: "plot boundaries, views, sun exposure and building activity on neighbouring plots",
  },
  leilighet: {
    no: "etasje, fellesutgifter, utsikt og innsyn fra naboterrasser",
    de: "Etage, Gemeinschaftskosten, Aussicht und Einblick von Nachbarterrassen",
    en: "the floor, community fees, views and overlooking from neighbouring terraces",
  },
  penthouse: {
    no: "takterrasse, utsikt, isolasjon mot sommervarme og fellesutgifter",
    de: "Dachterrasse, Aussicht, Dämmung gegen Sommerhitze und Gemeinschaftskosten",
    en: "the roof terrace, views, insulation against summer heat and community fees",
  },
  rekkehus: {
    no: "fellesområder, parkering, felleskostnader og lysforhold",
    de: "Gemeinschaftsanlagen, Parkplatz, Gemeinschaftskosten und Lichtverhältnisse",
    en: "shared areas, parking, community fees and natural light",
  },
  bungalow: {
    no: "uteplass, planløsning på ett plan og fellesområder",
    de: "Außenbereich, ebenerdige Aufteilung und Gemeinschaftsanlagen",
    en: "outdoor space, single-level layout and shared areas",
  },
  default: {
    no: "beliggenhet, standard og hva som faktisk er inkludert",
    de: "Lage, Ausstattung und was tatsächlich inbegriffen ist",
    en: "location, standard and what is actually included",
  },
};

const REGION_CTX: Record<string, Record<Locale, string>> = {
  "costa-blanca-nord": {
    no: "Costa Blanca Nord gir kort vei til både strand, fjell og service, og har et etablert helårsmiljø.",
    de: "Costa Blanca Nord bietet kurze Wege zu Strand, Bergen und Versorgung sowie ein etabliertes Ganzjahresumfeld.",
    en: "Costa Blanca North offers short distances to beach, mountains and services, with an established year-round community.",
  },
  "costa-blanca-sor": {
    no: "Costa Blanca Sør er strandnært med golf, service og et stort utvalg moderne prosjekter.",
    de: "Costa Blanca Süd liegt strandnah mit Golf, Versorgung und vielen modernen Projekten.",
    en: "Costa Blanca South is close to the beach with golf, services and a wide choice of modern projects.",
  },
  "costa-calida": {
    no: "Costa Cálida gir ofte god verdi for pengene, roligere tempo og nyere prosjekter.",
    de: "Costa Cálida bietet oft ein gutes Preis-Leistungs-Verhältnis, ein ruhigeres Tempo und neuere Projekte.",
    en: "Costa Cálida often offers good value, a calmer pace and newer projects.",
  },
  innlandet: {
    no: "Innlandet gir mer plass, ro og natur, med kysten under en time unna.",
    de: "Das Inland bietet mehr Platz, Ruhe und Natur, mit der Küste in unter einer Stunde.",
    en: "The inland areas offer more space, calm and nature, with the coast under an hour away.",
  },
};

const COPY: Record<Locale, {
  heading: string;
  intro: (type: string, town: string) => string;
  size: (area: number) => string;
  energyHas: (rating: string) => string;
  energyAsk: string;
  advice: string;
}> = {
  no: {
    heading: "Zen Eco Homes' vurdering",
    intro: (type, town) => `For en ${type.toLowerCase()} i ${town} ser vi særlig på `,
    size: (area) => ` Denne boligen er på om lag ${area} m².`,
    energyHas: (r) => ` Oppgitt energiklasse er ${r}.`,
    energyAsk: " Be om energiattesten, slik at du kjenner den faktiske energibruken.",
    advice:
      " Vår anbefaling: få bekreftet oppdatert tilgjengelighet og pris, hva som er inkludert, og be om en uavhengig vurdering før du reserverer.",
  },
  de: {
    heading: "Einschätzung von Zen Eco Homes",
    intro: (type, town) => `Bei einer ${type} in ${town} achten wir besonders auf `,
    size: (area) => ` Diese Immobilie hat etwa ${area} m².`,
    energyHas: (r) => ` Angegebene Energieklasse: ${r}.`,
    energyAsk: " Fordern Sie den Energieausweis an, um den tatsächlichen Verbrauch zu kennen.",
    advice:
      " Unsere Empfehlung: Lassen Sie Verfügbarkeit und Preis bestätigen, klären Sie, was inbegriffen ist, und holen Sie vor der Reservierung eine unabhängige Bewertung ein.",
  },
  en: {
    heading: "The Zen Eco Homes assessment",
    intro: (type, town) => `For a ${type.toLowerCase()} in ${town}, we look especially at `,
    size: (area) => ` This property is around ${area} m².`,
    energyHas: (r) => ` The stated energy rating is ${r}.`,
    energyAsk: " Ask for the energy certificate so you know the actual energy use.",
    advice:
      " Our advice: confirm current availability and price, clarify what is included, and get an independent assessment before you reserve.",
  },
};

export function PropertyAssessment({
  property,
  locale = "no",
  town,
  regionKey,
  typeLabel,
}: {
  property: Property;
  locale?: Locale;
  town: string;
  regionKey?: string;
  typeLabel: string;
}) {
  const c = COPY[locale];
  const bucket = bucketOf(property);
  const area = getPropertyArea(property);
  const regionCtx = regionKey ? REGION_CTX[regionKey]?.[locale] : undefined;

  // Kun ekte energiklasser (A–G) vises. Placeholders som "X", "en trámite",
  // "-" eller "pending" i feeden behandles som ikke oppgitt.
  const rawEnergy = String(property.energy_rating || "").trim();
  const validEnergy = /^[A-G][+-]?$/i.test(rawEnergy) ? rawEnergy.toUpperCase() : "";

  const text =
    c.intro(typeLabel, town) +
    FOCUS[bucket][locale] +
    "." +
    (regionCtx ? ` ${regionCtx}` : "") +
    (area ? c.size(area) : "") +
    (validEnergy ? c.energyHas(validEnergy) : c.energyAsk) +
    c.advice;

  return (
    <aside className="property-assessment">
      <p className="eyebrow">
        <ShieldCheck size={15} /> {c.heading}
      </p>
      <p>{text}</p>
    </aside>
  );
}
