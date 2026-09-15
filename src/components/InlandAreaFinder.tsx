import Link from "next/link";
import { ArrowRight, Building2, Grape, Leaf, Mountain, Waves } from "lucide-react";

type InlandFinderLocale = "no" | "en" | "de" | "es";

type TownLink = {
  name: string;
  slug: string;
};

const groups = [
  {
    key: "coast",
    icon: Waves,
    towns: [
      { name: "Busot", slug: "busot" },
      { name: "Monforte del Cid", slug: "monforte-del-cid" },
      { name: "Aspe", slug: "aspe" },
    ],
  },
  {
    key: "mountain",
    icon: Mountain,
    towns: [
      { name: "Biar", slug: "biar" },
      { name: "Banyeres de Mariola", slug: "banyeres-de-mariola" },
      { name: "Castalla", slug: "castalla" },
    ],
  },
  {
    key: "city",
    icon: Building2,
    towns: [
      { name: "Villena", slug: "villena" },
      { name: "Sax", slug: "sax" },
      { name: "Novelda", slug: "novelda" },
    ],
  },
  {
    key: "wine",
    icon: Grape,
    towns: [
      { name: "Pinoso", slug: "pinoso" },
      { name: "Hondón de las Nieves", slug: "hondon-de-las-nieves" },
      { name: "La Romana", slug: "la-romana" },
      { name: "Monóvar", slug: "monovar" },
    ],
  },
  {
    key: "deep",
    icon: Leaf,
    towns: [{ name: "Jumilla", slug: "jumilla" }],
  },
] as const;

type GroupKey = (typeof groups)[number]["key"];

type FinderCopy = {
  eyebrow: string;
  title: string;
  lead: string;
  note: string;
  ariaPrefix: string;
  compareEyebrow: string;
  compareTitle: string;
  compareLead: string;
  headers: [string, string, string, string];
  profiles: Record<GroupKey, { title: string; text: string }>;
  comparisons: Record<GroupKey, { bestFor: string; feel: string; check: string }>;
};

const copy: Record<InlandFinderLocale, FinderCopy> = {
  no: {
    eyebrow: "Finn ditt innlandsområde",
    title: "Start med hverdagen du ønsker – ikke med boligannonsen",
    lead:
      "Velg det som betyr mest for deg. Dette er ikke en fasit, men en rask måte å snevre inn hvilke områder som bør undersøkes først før vi begynner med tomt og boligmodell.",
    note:
      "Moderne boligmodeller er ikke låst til én av gruppene. Når området er valgt, må en konkret tomt og lokale regler avgjøre hva som faktisk kan bygges.",
    ariaPrefix: "Aktuelle områder for",
    compareEyebrow: "Sammenlign før du velger",
    compareTitle: "Fem forskjellige måter å bo i innlandet på",
    compareLead:
      "Sammenlign livsstil og praktiske hensyn først. Pris og tilgjengelighet må vurderes med ferske, konkrete boliger og tomter når vi vet hvilket delmarked du faktisk vurderer.",
    headers: ["Områdegruppe", "Passer best hvis du vil ha", "Hverdagsfølelse", "Viktig å avklare"],
    profiles: {
      coast: {
        title: "Kysten fortsatt nær",
        text: "For deg som vil ha mer luft og landsbyfølelse, men fortsatt ønsker enkel tilgang til sjø, Alicante og kystliv.",
      },
      mountain: {
        title: "Fjell og kjøligere innland",
        text: "For deg som prioriterer natur, høyde, tydeligere årstider og historiske landsbyer fremfor strandnærhet.",
      },
      city: {
        title: "Byservice og transport",
        text: "For deg som vil bo i innlandet uten å gi slipp på butikker, helsetjenester, skoler og gode forbindelser videre.",
      },
      wine: {
        title: "Vinland, tomt og finca",
        text: "For deg som ser etter mer landlig preg, vinmarker, større tomter og et prosjekt der plass og uteområder er viktige.",
      },
      deep: {
        title: "Dypere innland og større horisonter",
        text: "For deg som ønsker tydelig innlandsklima, vinby, større avstand til kysten og et mer selvstendig by- og landliv.",
      },
    },
    comparisons: {
      coast: {
        bestFor: "Kystnært innland",
        feel: "Landsby eller mindre by med enklere vei mot Alicante og kysten",
        check: "Mikrobeliggenhet, trafikk, tomt og faktisk avstand til daglig service",
      },
      mountain: {
        bestFor: "Fjell, natur og tydeligere årstider",
        feel: "Historiske landsbyer, høyere terreng og mer uttalt innlandspreg",
        check: "Vinterklima, høyde, adkomst og hvor ofte du skal til kysten",
      },
      city: {
        bestFor: "Byservice og praktisk hverdag",
        feel: "Mer urban hverdag med butikker, tjenester og transportforbindelser",
        check: "Nabolag, støy, lokal trafikk og hvor landlig du faktisk vil bo",
      },
      wine: {
        bestFor: "Tomt, finca og vinland",
        feel: "Mer landlig, større variasjon i tomter og tydelig vin- og jordbrukslandskap",
        check: "Vann, strøm, adkomst, regulering og avstand til helsetjenester og handel",
      },
      deep: {
        bestFor: "Dypere innland og vinby",
        feel: "Selvstendig by omgitt av Monastrell-landskap og større åpne arealer",
        check: "Reisevei til kyst og flyplass, klima og hvor mye bilkjøring som passer deg",
      },
    },
  },
  en: {
    eyebrow: "Find your inland area",
    title: "Start with the life you want – not the listing",
    lead:
      "Choose what matters most to you. This is not a verdict, but a quick way to narrow down which areas deserve a closer look before we move on to plots and home models.",
    note:
      "Modern home models are not tied to one group. Once the area is chosen, the specific plot and local planning rules determine what can actually be built.",
    ariaPrefix: "Suggested areas for",
    compareEyebrow: "Compare before you choose",
    compareTitle: "Five different ways to live inland",
    compareLead:
      "Compare lifestyle and practical considerations first. Prices and availability should be assessed from current, specific homes and plots once the relevant local market is clear.",
    headers: ["Area group", "Best if you want", "Everyday feel", "Important to check"],
    profiles: {
      coast: {
        title: "Keep the coast within reach",
        text: "For buyers who want more space and village character while keeping Alicante, the sea and coastal life reasonably accessible.",
      },
      mountain: {
        title: "Mountains and a cooler inland feel",
        text: "For buyers who prioritise nature, elevation, more pronounced seasons and historic towns over beach proximity.",
      },
      city: {
        title: "Town services and transport",
        text: "For buyers who want inland living without giving up shops, healthcare, schools and useful transport connections.",
      },
      wine: {
        title: "Wine country, plots and fincas",
        text: "For buyers looking for a more rural setting, vineyards, larger plots and a project where outdoor space matters.",
      },
      deep: {
        title: "Deeper inland and wider horizons",
        text: "For buyers who want a stronger inland climate, a self-contained wine town and greater distance from the coast.",
      },
    },
    comparisons: {
      coast: {
        bestFor: "Coast-near inland living",
        feel: "Village or smaller-town life with easier access towards Alicante and the coast",
        check: "Micro-location, traffic, plot conditions and real distance to everyday services",
      },
      mountain: {
        bestFor: "Mountains, nature and stronger seasons",
        feel: "Historic towns, higher ground and a more pronounced inland character",
        check: "Winter climate, elevation, access and how often you expect to travel to the coast",
      },
      city: {
        bestFor: "Services and practical daily life",
        feel: "A more urban everyday setting with shops, services and transport connections",
        check: "Neighbourhood, noise, local traffic and how rural you actually want to be",
      },
      wine: {
        bestFor: "Plots, fincas and wine country",
        feel: "More rural surroundings with varied plots and a clear vineyard and agricultural landscape",
        check: "Water, electricity, legal access, planning and distance to healthcare and shopping",
      },
      deep: {
        bestFor: "Deeper inland and a wine town",
        feel: "A self-contained town surrounded by Monastrell country and broad open landscapes",
        check: "Travel time to coast and airport, climate and how much driving suits your lifestyle",
      },
    },
  },
  de: {
    eyebrow: "Das passende Inlandgebiet finden",
    title: "Beginnen Sie mit Ihrem Alltag – nicht mit dem Immobilienangebot",
    lead:
      "Wählen Sie zuerst, was Ihnen am wichtigsten ist. So lässt sich schnell eingrenzen, welche Gebiete wir genauer prüfen sollten, bevor Grundstück und Hausmodell ausgewählt werden.",
    note:
      "Moderne Hausmodelle sind nicht an eine dieser Gruppen gebunden. Nach der Standortwahl entscheiden das konkrete Grundstück und die örtlichen Bauvorschriften darüber, was tatsächlich realisierbar ist.",
    ariaPrefix: "Geeignete Gebiete für",
    compareEyebrow: "Vor der Wahl vergleichen",
    compareTitle: "Fünf unterschiedliche Arten, im Hinterland zu leben",
    compareLead:
      "Vergleichen Sie zuerst Lebensstil und praktische Faktoren. Preise und Verfügbarkeit sollten anschließend anhand aktueller, konkreter Immobilien und Grundstücke im gewählten Teilmarkt geprüft werden.",
    headers: ["Gebietsgruppe", "Geeignet, wenn Sie möchten", "Alltagsgefühl", "Wichtig zu prüfen"],
    profiles: {
      coast: {
        title: "Die Küste bleibt gut erreichbar",
        text: "Für Käufer, die mehr Raum und Dorfcharakter möchten, aber Alicante, Meer und Küstenleben weiterhin gut erreichen wollen.",
      },
      mountain: {
        title: "Berge und kühleres Inland",
        text: "Für Käufer, die Natur, Höhenlage, deutlichere Jahreszeiten und historische Orte höher gewichten als Strandnähe.",
      },
      city: {
        title: "Stadtservice und Verkehrsanbindung",
        text: "Für Käufer, die im Inland leben möchten, ohne auf Einkauf, Gesundheitsversorgung, Schulen und gute Verbindungen zu verzichten.",
      },
      wine: {
        title: "Weinland, Grundstück und Finca",
        text: "Für Käufer, die ländliche Umgebung, Weinberge, größere Grundstücke und viel Außenraum suchen.",
      },
      deep: {
        title: "Tieferes Inland und weite Horizonte",
        text: "Für Käufer, die ein ausgeprägteres Inlandklima, eine eigenständige Weinstadt und mehr Distanz zur Küste wünschen.",
      },
    },
    comparisons: {
      coast: {
        bestFor: "Küstennahes Hinterland",
        feel: "Dorf oder kleinere Stadt mit guter Orientierung Richtung Alicante und Küste",
        check: "Mikrolage, Verkehr, Grundstück und tatsächliche Entfernung zu täglichen Dienstleistungen",
      },
      mountain: {
        bestFor: "Berge, Natur und deutlichere Jahreszeiten",
        feel: "Historische Orte, höhere Lagen und stärkerer Inlandcharakter",
        check: "Winterklima, Höhenlage, Zufahrt und wie oft Sie zur Küste fahren möchten",
      },
      city: {
        bestFor: "Service und praktischer Alltag",
        feel: "Urbanerer Alltag mit Geschäften, Dienstleistungen und Verkehrsanbindungen",
        check: "Wohnviertel, Lärm, lokaler Verkehr und wie ländlich Sie tatsächlich wohnen möchten",
      },
      wine: {
        bestFor: "Grundstücke, Fincas und Weinland",
        feel: "Ländlicher, mit unterschiedlichen Grundstücken und Wein- und Agrarlandschaft",
        check: "Wasser, Strom, rechtliche Zufahrt, Baurecht und Entfernung zu Medizin und Einkauf",
      },
      deep: {
        bestFor: "Tieferes Inland und Weinstadt",
        feel: "Eigenständige Stadt in Monastrell-Landschaft mit weiten offenen Flächen",
        check: "Fahrt zur Küste und zum Flughafen, Klima und gewünschter Anteil an Autofahrten",
      },
    },
  },
  es: {
    eyebrow: "Encuentra tu zona del interior",
    title: "Empieza por la vida que quieres – no por el anuncio",
    lead:
      "Elige primero lo que más te importa. No es una respuesta definitiva, sino una forma rápida de reducir las zonas que merece la pena estudiar antes de pasar al terreno y al modelo de vivienda.",
    note:
      "Los modelos de vivienda moderna no están ligados a uno de estos grupos. Una vez elegida la zona, la parcela concreta y la normativa local determinan qué puede construirse realmente.",
    ariaPrefix: "Zonas recomendadas para",
    compareEyebrow: "Compara antes de elegir",
    compareTitle: "Cinco formas diferentes de vivir en el interior",
    compareLead:
      "Compara primero el estilo de vida y los aspectos prácticos. El precio y la disponibilidad deben valorarse después con viviendas y parcelas concretas y actuales del mercado local elegido.",
    headers: ["Grupo de zonas", "Encaja si buscas", "Sensación diaria", "Qué conviene comprobar"],
    profiles: {
      coast: {
        title: "Mantener la costa cerca",
        text: "Para quien busca más espacio y ambiente de pueblo sin renunciar a un acceso razonable a Alicante, el mar y la vida costera.",
      },
      mountain: {
        title: "Montaña y un interior más fresco",
        text: "Para quien prioriza naturaleza, altitud, estaciones más marcadas y pueblos históricos frente a la cercanía inmediata a la playa.",
      },
      city: {
        title: "Servicios urbanos y conexiones",
        text: "Para quien quiere vivir en el interior sin renunciar a comercios, sanidad, colegios y buenas conexiones de transporte.",
      },
      wine: {
        title: "Tierra de vino, parcelas y fincas",
        text: "Para quien busca un entorno más rural, viñedos, parcelas amplias y un proyecto donde el espacio exterior sea importante.",
      },
      deep: {
        title: "Interior más profundo y horizontes abiertos",
        text: "Para quien quiere un clima interior más marcado, una ciudad vinícola autosuficiente y mayor distancia respecto a la costa.",
      },
    },
    comparisons: {
      coast: {
        bestFor: "Interior cercano a la costa",
        feel: "Pueblo o pequeña ciudad con acceso más sencillo hacia Alicante y la costa",
        check: "Microubicación, tráfico, parcela y distancia real a los servicios cotidianos",
      },
      mountain: {
        bestFor: "Montaña, naturaleza y estaciones más marcadas",
        feel: "Pueblos históricos, mayor altitud y un carácter interior más evidente",
        check: "Clima de invierno, altitud, acceso y frecuencia con la que quieres ir a la costa",
      },
      city: {
        bestFor: "Servicios y vida diaria práctica",
        feel: "Un día a día más urbano con comercios, servicios y conexiones de transporte",
        check: "Barrio, ruido, tráfico local y hasta qué punto quieres una vida realmente rural",
      },
      wine: {
        bestFor: "Parcelas, fincas y tierra de vino",
        feel: "Entorno más rural, parcelas variadas y paisaje claramente agrícola y vitivinícola",
        check: "Agua, electricidad, acceso legal, urbanismo y distancia a sanidad y comercios",
      },
      deep: {
        bestFor: "Interior profundo y ciudad vinícola",
        feel: "Ciudad autosuficiente rodeada de paisaje Monastrell y grandes espacios abiertos",
        check: "Trayecto a costa y aeropuerto, clima y cuánto uso del coche encaja contigo",
      },
    },
  },
};

function townHref(locale: InlandFinderLocale, town: TownLink, intent?: GroupKey) {
  if (locale === "no") {
    return intent ? `/inland/${town.slug}?intent=${intent}` : `/inland/${town.slug}`;
  }

  const query = encodeURIComponent(town.name);
  if (locale === "en") return `/en/properties?q=${query}`;
  if (locale === "de") return `/de/immobilien?q=${query}`;
  return `/es/propiedades?q=${query}`;
}

export function InlandAreaFinder({ locale = "no" }: { locale?: InlandFinderLocale }) {
  const text = copy[locale];

  return (
    <>
      <section className="inland-area-finder" id="finn-omrade">
        <div className="inland-area-finder-heading">
          <p className="eyebrow">{text.eyebrow}</p>
          <h2>{text.title}</h2>
          <p>{text.lead}</p>
        </div>

        <div className="inland-profile-grid">
          {groups.map((group) => {
            const Icon = group.icon;
            const profile = text.profiles[group.key];
            return (
              <article className="inland-profile-card" key={group.key}>
                <div className="inland-profile-icon" aria-hidden="true"><Icon size={24} /></div>
                <h3>{profile.title}</h3>
                <p>{profile.text}</p>
                <div className="inland-profile-links" aria-label={`${text.ariaPrefix} ${profile.title}`}>
                  {group.towns.map((town) => (
                    <Link href={townHref(locale, town, group.key)} key={town.slug}>
                      {town.name} <ArrowRight size={14} />
                    </Link>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        <p className="inland-area-finder-note">{text.note}</p>
      </section>

      <section className="inland-comparison" aria-labelledby={`inland-comparison-title-${locale}`}>
        <div className="inland-comparison-heading">
          <p className="eyebrow">{text.compareEyebrow}</p>
          <h2 id={`inland-comparison-title-${locale}`}>{text.compareTitle}</h2>
          <p>{text.compareLead}</p>
        </div>

        <div className="inland-comparison-scroll">
          <table className="inland-comparison-table">
            <thead>
              <tr>
                {text.headers.map((header) => <th key={header}>{header}</th>)}
              </tr>
            </thead>
            <tbody>
              {groups.map((group) => {
                const row = text.comparisons[group.key];
                const area = group.towns.map((town) => town.name).join(" / ");
                return (
                  <tr key={group.key}>
                    <th scope="row">{area}</th>
                    <td>{row.bestFor}</td>
                    <td>{row.feel}</td>
                    <td>{row.check}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
