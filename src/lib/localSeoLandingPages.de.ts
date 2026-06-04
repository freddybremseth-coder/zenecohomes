import type { SeoLandingPage } from "./seoLandingPages";

// Tyske områdesider (long-tail): "Immobilie Altea", "Immobilie Calpe" osv.
// Samme fabrikk-mønster som den norske localSeoLandingPages.

const localPageDE = ({
  slug,
  place,
  area,
  angle,
  highlights,
  filterHref,
  extraBody,
}: {
  slug: string;
  place: string;
  area: string;
  angle: string;
  highlights: string[];
  filterHref: string;
  extraBody: string;
}): SeoLandingPage => ({
  slug,
  title: `Immobilie in ${place}`,
  eyebrow: `${area} · Regionsguide`,
  hero: `Immobilie in ${place} kaufen`,
  description: `${place} ist interessant, wenn Sie eine Immobilie, einen Neubau oder eine Kapitalanlage an der ${area} erwägen. Zen Eco Homes hilft Ihnen, Lage, Preisniveau, Lebensstil, Erreichbarkeit und einen sicheren Kaufprozess zu bewerten – bevor Sie reservieren.`,
  seoTitle: `Immobilie in ${place} kaufen | Neubau & Beratung`,
  seoDescription: `Sie überlegen eine Immobilie in ${place}? Lesen Sie über Lage, Neubau, Preisniveau, Lebensstil und sicheren Kaufprozess mit Beratung in Spanien.`,
  primaryCta: { label: `Immobilien in ${place} ansehen`, href: filterHref },
  secondaryCta: { label: "Regionen vergleichen", href: "/omrader" },
  sections: [
    {
      heading: `Warum eine Immobilie in ${place}?`,
      body: [
        `${place} ist eine der Lagen, die viele internationale Käufer erwägen, wenn sie eine sichere Basis in Spanien suchen. Bewerten Sie mehr als Preis und Fotos: Alltag, Entfernung zu Diensten, Sonnenlage, Wiederverkauf, Strand- oder Naturnähe und wie der Ort außerhalb der Hochsaison funktioniert, sind mindestens ebenso wichtig.`,
        angle,
      ],
      bullets: highlights,
    },
    {
      heading: `Neubau, Bestand oder Grundstück in ${place}`,
      body: [
        `Die Wahl zwischen Neubau, Bestandsimmobilie und Grundstück sollte sich nach Budget, Zeithorizont und gewünschtem Risiko richten. Neubau bietet oft planbaren Standard und wenig Instandhaltung, Bestand mehr Verhandlungsspielraum. Grundstück und Bau geben die größte Freiheit, erfordern aber sorgfältigere Prüfung.`,
        extraBody,
      ],
      bullets: [
        "Aktuellen Preis und Verfügbarkeit vor der Besichtigung bestätigen lassen.",
        "Mit alternativen Lagen und vergleichbaren Objekten vergleichen.",
        "Vor verbindlichen Verträgen oder Anzahlungen immer einen Anwalt einschalten.",
      ],
    },
    {
      heading: "So hilft Zen Eco Homes",
      body: [
        `Wir helfen Ihnen einzuschätzen, ob ${place} wirklich zu Ihrem Lebensstil, Budget und Kaufplan passt. Ziel ist, dass Sie Chancen und Grenzen verstehen, bevor Sie sich in eine einzelne Immobilie verlieben.`,
      ],
      bullets: [
        "Bedarfsanalyse und realistisches Budget.",
        "Bewertung von Lage, Preisniveau und Alternativen.",
        "Koordination mit Makler, Bauträger, Anwalt und Bank, wo sinnvoll.",
        "Begleitung vor, während und nach dem Kauf.",
      ],
    },
  ],
  faq: [
    {
      question: `Ist ${place} ein guter Ort zum Immobilienkauf in Spanien?`,
      answer: `${place} kann eine gute Wahl sein, wenn die Lage zu Ihrer Nutzung, Ihrem Budget und Lebensstil passt. Wichtig ist, konkrete Objekte, Lage, Infrastruktur und Ganzjahresnutzung zu vergleichen, bevor Sie sich entscheiden.`,
    },
    {
      question: `Gibt es Neubauten in ${place}?`,
      answer: `Ja, in oder um ${place} gibt es oft Neubauten oder neuere Projekte, aber Verfügbarkeit und Preis ändern sich schnell. Lassen Sie den Status immer bestätigen, bevor Sie eine Besichtigung oder Reservierung planen.`,
    },
    {
      question: `Brauche ich einen Berater beim Kauf in ${place}?`,
      answer: `Es ist empfehlenswert. Ein Berater hilft, den realen Marktwert einzuschätzen, Alternativen zu vergleichen, den Kaufprozess zu verstehen und die nächsten Schritte mit lokalen Akteuren zu koordinieren.`,
    },
  ],
  related: [
    { label: "Immobilie in Spanien kaufen", href: "/de/immobilie-in-spanien" },
    { label: "Neubau an der Costa Blanca", href: "/de/neubau-costa-blanca" },
    { label: "Immobilienberater für Spanien", href: "/de/immobilienberater-spanien" },
  ],
});

export const localSeoLandingPagesDE: SeoLandingPage[] = [
  localPageDE({
    slug: "immobilie-altea",
    place: "Altea",
    area: "Costa Blanca Nord",
    angle:
      "Altea ist besonders interessant für Käufer, die schöne Umgebung, weiß getünchte Altstadt, Marina, Ausblick, Restaurants und ein gehobeneres Flair suchen. Die Lage verbindet Lebensqualität und Ruhe mit kurzen Wegen nach Albir, Benidorm, Calpe und zum Flughafen Alicante.",
    highlights: [
      "Für Käufer, die schöne Umgebung, Ausblick und Qualität schätzen.",
      "Kurze Wege nach Albir, Calpe, Benidorm und zu Diensten.",
      "Geeignet für moderne Wohnungen, Villen und Projekte mit Aussicht.",
      "Gute Wahl für Ganzjahresnutzung und langfristigen Besitz.",
    ],
    filterHref: "/de/immobilien?region=costa-blanca-nord&area=Altea",
    extraBody:
      "In Altea sollten Sie besonders auf Höhenunterschiede, Fahrwege zu täglichen Diensten, Sonnenausrichtung, Ausblick, Gemeinschaftskosten und die Eignung für Alltags- oder Ferienbedarf achten.",
  }),
  localPageDE({
    slug: "immobilie-albir",
    place: "Albir",
    area: "Costa Blanca Nord",
    angle:
      "Albir ist beliebt, weil der Ort übersichtlich, praktisch, in großen Teilen flach, strandnah ist und ein gutes Angebot an Restaurants, Geschäften und Diensten hat. Ideal für Käufer, die einen einfachen Alltag ohne ständige Autofahrten wünschen.",
    highlights: [
      "Beliebt bei internationalen Käufern.",
      "Flaches, praktisches Zentrum mit kurzen Wegen zu Strand und Diensten.",
      "Nah an Altea, Benidorm, Alfaz del Pi und Flughafen Alicante.",
      "Geeignet für Wohnungen, Ferien- und Ganzjahresnutzung.",
    ],
    filterHref: "/de/immobilien?region=costa-blanca-nord&area=Albir",
    extraBody:
      "In Albir ist die genaue Lage im Ort wichtig. Manche Objekte liegen fußläufig zu allem, andere erfordern mehr Autonutzung – das beeinflusst Nutzung, Vermietung und Wiederverkauf.",
  }),
  localPageDE({
    slug: "immobilie-calpe",
    place: "Calpe",
    area: "Costa Blanca Nord",
    angle:
      "Calpe verbindet Strand, Stadtleben, Marina, Restaurants und das bekannte Wahrzeichen Peñón de Ifach. Ideal für Käufer, die eine ausgeprägte Küstenstadt mit gutem Serviceangebot wünschen – mit Wohnung, Penthouse oder Villa.",
    highlights: [
      "Starkes Küstenprofil mit Stränden, Marina und Stadtleben.",
      "Für Wohnungen, Penthäuser, Villen und Ferienimmobilien.",
      "Gutes Serviceangebot und ausgeprägte Sommersaison.",
      "Für Käufer, die strandnahes Leben und urbanen Komfort suchen.",
    ],
    filterHref: "/de/immobilien?region=costa-blanca-nord&area=Calpe",
    extraBody:
      "In Calpe sollten Sie Strandentfernung, Lärm, Parksituation, Ausblick, Gebäudealter und die Eignung außerhalb der Hochsaison prüfen.",
  }),
  localPageDE({
    slug: "immobilie-finestrat",
    place: "Finestrat",
    area: "Costa Blanca Nord",
    angle:
      "Finestrat ist eine der aktivsten Lagen für modernen Neubau an der Costa Blanca Nord. Viele Projekte verbinden Ausblick, moderne Architektur, Nähe zu Benidorm, Shopping, Golf und kurze Wege zu Stränden wie der Cala de Finestrat.",
    highlights: [
      "Viele moderne Neubauten, Villen und Wohnprojekte.",
      "Nah an Benidorm, Einkaufszentren, Golf und Strand.",
      "Für Käufer, die Ausblick und modernen Standard suchen.",
      "Gute Lage für Neubau und Kapitalanlage.",
    ],
    filterHref: "/de/immobilien?region=costa-blanca-nord&area=Finestrat",
    extraBody:
      "In Finestrat sollten Sie Bauphasen, Ausblick, Straßenlärm, Erreichbarkeit von Diensten und Leistungsumfang im Neubaupreis vergleichen. Das Preisniveau variiert je Projekt deutlich.",
  }),
  localPageDE({
    slug: "immobilie-polop",
    place: "Polop",
    area: "Costa Blanca Nord",
    angle:
      "Polop eignet sich für Käufer, die ruhigere Umgebung, Bergblick und mehr Immobilie fürs Geld suchen als in den etabliertesten Küstenstädten – und dabei in praktischer Reichweite zu Altea, La Nucía, Benidorm und der Küste bleiben.",
    highlights: [
      "Ruhigere Lage mit Bergen, Natur und Ausblick.",
      "Oft mehr Immobilie fürs Budget als direkt an der Küste.",
      "Für Villen, Reihenhäuser und Neubauprojekte.",
      "Gut für Ganzjahresnutzung und mehr Platz.",
    ],
    filterHref: "/de/immobilien?region=costa-blanca-nord&area=Polop",
    extraBody:
      "In Polop sollten Sie Transportbedarf, Entfernung zu täglichen Diensten, Sonnenlage, Ausblick und Gemeinschaftskosten bewerten – und ob Sie Ruhe gegenüber Strandnähe bevorzugen.",
  }),
  localPageDE({
    slug: "immobilie-pinoso",
    place: "Pinoso",
    area: "im Hinterland der Costa Blanca",
    angle:
      "Pinoso ist interessant für Käufer, die ein großes Grundstück, ruhige Umgebung, Natur, Weinberge und die Möglichkeit suchen, eine moderne Immobilie mit mehr Platz zu bauen oder zu kaufen. Ideal für einen ländlicheren, unabhängigeren Lebensstil in Spanien.",
    highlights: [
      "Für große Grundstücke, Villen, Fincas und modernen Neubau.",
      "Mehr Platz und Ruhe als in vielen Küstenorten.",
      "Für Käufer, die Natur, Privatsphäre und langfristigen Lebensstil suchen.",
      "Wasser, Strom, Zufahrt, Bebauungsrecht und Baulizenz unbedingt prüfen.",
    ],
    filterHref: "/de/immobilien?area=Pinoso",
    extraBody:
      "In Pinoso ist Due Diligence bei Grundstück und Neubau besonders wichtig. Bebauungsrecht, Wasser, Strom, Zufahrt, Bodenverhältnisse und Gesamtbudget sollten vor Reservierung oder Kauf geklärt sein.",
  }),
];
