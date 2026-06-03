import type { SeoLandingPage } from "./seoLandingPages";

// Tyske SEO-landingssider. Søkeord-ledet (ikke ord-for-ord fra norsk).
// Slugs tilpasset tyske søk: "Immobilie Spanien kaufen", "Neubau Costa Blanca",
// "Immobilienberater Spanien". Legg nye sider her + i seoEquivalents (i18n.ts).

const BOOKING = "https://appointment.chatgenius.pro/zeneco";

export const seoLandingPagesDE: SeoLandingPage[] = [
  {
    slug: "immobilie-in-spanien",
    title: "Immobilie in Spanien",
    eyebrow: "Immobilienkauf in Spanien",
    hero: "Immobilie in Spanien kaufen – mit norwegischer Beratung",
    description:
      "Finden Sie die richtige Region, den passenden Immobilientyp und einen sicheren Ablauf, bevor Sie reservieren. Zen Eco Homes begleitet internationale Käufer beim Kauf von Neubauten, Villen, Wohnungen und Grundstücken an der Costa Blanca.",
    seoTitle: "Immobilie in Spanien kaufen | Sicher mit Beratung",
    seoDescription:
      "Sie überlegen, eine Immobilie in Spanien zu kaufen? Wir helfen bei Regionswahl, Neubau, Villa, Wohnung, Finanzierung, NIE, Anwalt und sicherem Kaufprozess.",
    primaryCta: { label: "Beratungsgespräch buchen", href: BOOKING },
    secondaryCta: { label: "Immobilien ansehen", href: "/eiendommer" },
    sections: [
      {
        heading: "Beginnen Sie mit Region und Lebensstil, nicht nur mit der Immobilie",
        body: [
          "Viele Käufer starten die Suche mit Fotos, Preis und Anzahl der Schlafzimmer. Verständlich – doch die wichtigste Entscheidung ist meist die Lage. Alltag, Flughafennähe, Strand, Ganzjahresangebot, Schulen, Golf, Vermietung und Wiederverkauf hängen davon ab, wo Sie kaufen.",
          "Zen Eco Homes hilft Ihnen zu klären, wofür die Immobilie genutzt werden soll, welches Budget realistisch ist und welche Regionen wirklich passen – bevor Sie Zeit in Besichtigungen investieren.",
        ],
        bullets: [
          "Ferienimmobilie, Hauptwohnsitz, Kapitalanlage oder Ruhestand.",
          "Costa Blanca Nord, Costa Blanca Süd, Costa Cálida oder Hinterland.",
          "Neubau, Bestandsimmobilie, Villa, Wohnung, Reihenhaus oder Grundstück.",
        ],
      },
      {
        heading: "Ein sichererer Kaufprozess für internationale Käufer",
        body: [
          "Spanien hat einen anderen Kaufprozess als Deutschland oder Österreich. Mehrere Makler können dieselbe Immobilie bewerben, Portale zeigen teils veraltete Inserate, und eine Reservierung kann schnell nötig sein, wenn das passende Objekt auftaucht.",
          "Deshalb sollten Beratung, Finanzierung, NIE-Nummer, ein unabhängiger Anwalt und klare Kriterien stehen, bevor Sie reservieren.",
        ],
        bullets: [
          "Wir bewerten Preis, Lage, Verfügbarkeit und Alternativen.",
          "Wir erklären Zahlungsplan, Nebenkosten und die nächsten Schritte.",
          "Wir empfehlen immer einen unabhängigen Anwalt und gute rechtliche Prüfung.",
        ],
      },
    ],
    faq: [
      {
        question: "Wo sollten internationale Käufer in Spanien kaufen?",
        answer:
          "Die Costa Blanca ist für viele eine gute Wahl: Klima, Preisniveau, Flugverbindungen und Infrastruktur. Die Costa Blanca Nord passt zu qualitätsbewussten Käufern, das Hinterland bietet mehr Grundstück und Ruhe.",
      },
      {
        question: "Ist der Immobilienkauf in Spanien sicher?",
        answer:
          "Ja, aber der Prozess erfordert die richtige Kontrolle. Nutzen Sie einen unabhängigen Anwalt, holen Sie aktuelle Informationen zur Immobilie ein und verstehen Sie Vertrag, Kosten und Unterlagen vor der Reservierung.",
      },
      {
        question: "Welche Nebenkosten fallen beim Kauf an?",
        answer:
          "Rechnen Sie je nach Region und Objekt mit rund 10–14 % zusätzlich zum Kaufpreis (Steuern, Notar, Grundbuch, Anwalt). Bei Neubau und Bestandsimmobilien gelten unterschiedliche Steuersätze – wir erklären Ihnen Ihren Fall.",
      },
    ],
    related: [
      { label: "Neubau an der Costa Blanca", href: "/de/neubau-costa-blanca" },
      { label: "Immobilienberater für Spanien", href: "/de/immobilienberater-spanien" },
    ],
  },
  {
    slug: "neubau-costa-blanca",
    title: "Neubau Costa Blanca",
    eyebrow: "Neubau in Spanien",
    hero: "Neubau an der Costa Blanca – moderne, energieeffiziente Häuser",
    description:
      "Moderne Neubauwohnungen, Villen und Projekte an der Costa Blanca – mit guter Energieeffizienz, durchdachtem Design und sicherer Begleitung von der Auswahl bis zur Übergabe.",
    seoTitle: "Neubau Costa Blanca | Moderne Immobilien in Spanien",
    seoDescription:
      "Neubau an der Costa Blanca: moderne Wohnungen, Villen und Projekte mit hoher Energieeffizienz. Beratung zu Lage, Bauträger, Zahlungsplan und Übergabe.",
    primaryCta: { label: "Beratungsgespräch buchen", href: BOOKING },
    secondaryCta: { label: "Immobilien ansehen", href: "/eiendommer" },
    sections: [
      {
        heading: "Warum Neubau?",
        body: [
          "Neubauten an der Costa Blanca bieten moderne Grundrisse, hohe Energieeffizienz (oft A-Klasse), Klimaanlage, gute Dämmung und niedrigere laufende Kosten. Viele Projekte liegen in gefragten Lagen mit Pool, Gemeinschaftsanlagen und Meerblick.",
          "Beim Neubau zahlen Sie meist nach Baufortschritt. Das verteilt die Investition – erfordert aber, dass Bauträger, Bankgarantien und Vertrag sorgfältig geprüft werden.",
        ],
        bullets: [
          "Energieeffizienz und niedrige Betriebskosten.",
          "Moderne Ausstattung und individuelle Auswahl bei frühem Kauf.",
          "Zahlung nach Baufortschritt mit Bankgarantie.",
        ],
      },
      {
        heading: "Die besten Lagen gehen zuerst",
        body: [
          "Bei guten Projekten sind die besten Einheiten – Etage, Ausrichtung, Eckwohnung, Meerblick – schnell vergeben. Wer vorbereitet ist (Budget, Finanzierung, NIE), kann zugreifen, wenn das richtige Objekt erscheint.",
          "Wir kennen die Region und die Bauträger und helfen Ihnen, seriöse Projekte von schwächeren zu unterscheiden – in Dénia, Jávea, Calpe, Altea, Finestrat, Benidorm und Umgebung.",
        ],
        bullets: [
          "Costa Blanca Nord: Qualität, Natur und Meerblick.",
          "Costa Blanca Süd: Preis-Leistung und große Auswahl.",
          "Wir prüfen Bauträger, Garantien und realistische Übergabetermine.",
        ],
      },
    ],
    faq: [
      {
        question: "Wie läuft die Zahlung bei einem Neubau in Spanien?",
        answer:
          "Üblich ist eine Reservierung, dann eine Anzahlung beim Vertrag und weitere Raten nach Baufortschritt, der Rest bei der Übergabe. Anzahlungen sollten durch eine Bankgarantie abgesichert sein.",
      },
      {
        question: "Welche Regionen der Costa Blanca eignen sich für Neubau?",
        answer:
          "Die Costa Blanca Nord (Dénia, Jávea, Moraira, Calpe, Altea) steht für Qualität und Natur. Finestrat und Benidorm bieten moderne Projekte mit Meerblick, der Süden viel Auswahl zu attraktiven Preisen.",
      },
      {
        question: "Ist eine Energieeffizienzklasse A wichtig?",
        answer:
          "Sie senkt laufende Kosten und steigert Komfort und Wiederverkaufswert. Die meisten neuen Projekte erfüllen heute hohe Standards bei Dämmung, Fenstern und Klimatisierung.",
      },
    ],
    related: [
      { label: "Immobilie in Spanien kaufen", href: "/de/immobilie-in-spanien" },
      { label: "Immobilienberater für Spanien", href: "/de/immobilienberater-spanien" },
    ],
  },
  {
    slug: "immobilienberater-spanien",
    title: "Immobilienberater Spanien",
    eyebrow: "Beratung beim Immobilienkauf",
    hero: "Immobilienberater für Spanien – unabhängig an Ihrer Seite",
    description:
      "Ein Berater, der auf Ihrer Seite steht: Wir helfen Ihnen, den Markt zu verstehen, Optionen zu vergleichen und den Prozess mit Maklern, Bauträgern, Bank und Anwalt zu koordinieren – an der Costa Blanca.",
    seoTitle: "Immobilienberater Spanien | Beratung beim Kauf",
    seoDescription:
      "Unabhängiger Immobilienberater für Spanien: Marktüberblick, Regionswahl, Objektvergleich, Kaufprozess, NIE, Anwalt und Finanzierung an der Costa Blanca.",
    primaryCta: { label: "Beratungsgespräch buchen", href: BOOKING },
    secondaryCta: { label: "Immobilien ansehen", href: "/eiendommer" },
    sections: [
      {
        heading: "Was ein Berater für Sie tut",
        body: [
          "In Spanien vertritt der Makler oft den Verkäufer. Ein Berater an Ihrer Seite hilft Ihnen, Bedürfnisse zu klären, passende Regionen und Objekte zu finden und den gesamten Ablauf zu koordinieren – damit Sie keine teuren Fehler machen.",
          "Wir sind vor Ort an der Costa Blanca, kennen die Bauträger und Projekte und sprechen Ihre Sprache – das spart Zeit, Geld und Unsicherheit.",
        ],
        bullets: [
          "Bedarfsanalyse: Nutzung, Budget, Region und Zeithorizont.",
          "Objektauswahl statt Inseratflut – nur, was wirklich passt.",
          "Koordination mit Makler, Bauträger, Bank, Notar und Anwalt.",
        ],
      },
      {
        heading: "Sicher kaufen – Schritt für Schritt",
        body: [
          "Die häufigsten Fehler passieren vor der ersten Besichtigung: falscher Anwalt, ungeklärte Steuern (Modelo 720, NIE, Plusvalía) und ungünstige Wechselkurse. Wir bringen die Grundlagen in die richtige Reihenfolge.",
          "Rechtliche und steuerliche Detailfragen klären immer unabhängige Fachleute (Anwalt, Steuerberater) – wir koordinieren und behalten den Überblick.",
        ],
        bullets: [
          "Unabhängiger Anwalt statt Empfehlung allein vom Verkäufer.",
          "NIE-Nummer und Konto vor dem Angebot.",
          "Steuern und Wechselkurs vor der Unterschrift klären.",
        ],
      },
    ],
    faq: [
      {
        question: "Was kostet ein Immobilienberater in Spanien?",
        answer:
          "Das hängt vom Umfang ab. Vereinbaren Sie ein unverbindliches Erstgespräch – dann besprechen wir, wie wir Sie am besten unterstützen und welche Schritte sinnvoll sind.",
      },
      {
        question: "Brauche ich trotzdem einen Anwalt?",
        answer:
          "Ja. Ein Berater koordiniert den Prozess, aber die rechtliche Prüfung übernimmt immer ein unabhängiger Anwalt. Wir empfehlen das ausdrücklich und arbeiten eng zusammen.",
      },
      {
        question: "Sprechen Sie Deutsch?",
        answer:
          "Wir beraten internationale Käufer und kommunizieren in Deutsch und Englisch. So verstehen Sie jeden Schritt – ohne Sprachbarriere.",
      },
    ],
    related: [
      { label: "Immobilie in Spanien kaufen", href: "/de/immobilie-in-spanien" },
      { label: "Neubau an der Costa Blanca", href: "/de/neubau-costa-blanca" },
    ],
  },
];

export function getSeoLandingPageDE(slug: string) {
  return seoLandingPagesDE.find((page) => page.slug === slug);
}
