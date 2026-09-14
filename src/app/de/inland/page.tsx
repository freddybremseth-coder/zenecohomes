import { Home, MapPin, Sprout, Droplets, Ruler, ShieldCheck } from "lucide-react";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { homeLanguageLinks } from "@/lib/i18n";

export const metadata = {
  title: "Hinterland Alicante & Murcia | Grundstücke, Fincas und moderne Neubauvillen",
  description:
    "Entdecken Sie das Hinterland von Alicante und Murcia: Biar, Busot, Villena, Hondón, Pinoso, Aspe, Novelda, Jumilla und weitere Orte. Zuerst die Lage, dann das passende Grundstück und das Hausmodell.",
  alternates: {
    canonical: "/de/inland",
    languages: {
      "nb-NO": "https://www.zenecohomes.com/inland",
      "x-default": "https://www.zenecohomes.com/inland",
      "de-DE": "https://www.zenecohomes.com/de/inland",
      en: "https://www.zenecohomes.com/en/inland",
      "es-ES": "https://www.zenecohomes.com/es/interior",
    },
  },
  openGraph: {
    title: "Hinterland Alicante & Murcia | Zen Eco Homes",
    description:
      "Zuerst wählen Sie die Lage. Wir helfen bei der Suche nach einem geeigneten Grundstück und prüfen, welches moderne Villenmodell dort realisierbar ist.",
    url: "https://www.zenecohomes.com/de/inland",
    type: "website",
  },
};

const highlights = [
  {
    icon: Ruler,
    title: "Zuerst die Lage, dann Grundstück und Haus",
    text: "Beginnen Sie mit dem Ort, an dem Sie wirklich leben möchten. Danach suchen wir ein geeignetes Grundstück und prüfen, welches moderne Hausmodell zu Baurecht, Grundstück und Budget passt.",
  },
  {
    icon: Sprout,
    title: "Küstennah, Berge oder Weinland",
    text: "Busot hält die Küste nah, Biar und Banyeres bieten Bergcharakter, während Pinoso, Hondón und Jumilla stärker von Weinland und ländlicher Umgebung geprägt sind.",
  },
  {
    icon: Droplets,
    title: "Wasser, Strom, Zufahrt und Boden",
    text: "Ein Grundstück ist erst interessant, wenn die praktischen Grundlagen funktionieren. Wasser, Strom, rechtliche Zufahrt, Planungsstatus und Bodenverhältnisse müssen für das konkrete Grundstück geprüft werden.",
  },
  {
    icon: ShieldCheck,
    title: "Bebaubarkeit vor Wunschbild",
    text: "Ein Villenmodell ist Inspiration, aber keine Baugenehmigung für jeden Ort. Baufenster, Abstände, Anschlüsse, Genehmigungen und Gesamtbudget müssen vor dem Grundstückskauf geklärt werden.",
  },
];

const areas = [
  {
    name: "Busot",
    text: "Bergdorfcharakter nahe Alicante und Küste. Interessant für Käufer, die mehr Ruhe und Platz suchen, ohne tief ins Hinterland zu ziehen.",
  },
  {
    name: "Biar",
    text: "Historische Bergstadt zwischen Oliven- und Mandellandschaft mit deutlicheren Jahreszeiten. Unsere Familie hat hier eine Olivenimmobilie, daher kennen wir das Gebiet auch aus eigener Erfahrung.",
  },
  {
    name: "Villena",
    text: "Größere Stadt im Hinterland mit breitem Serviceangebot und Hochgeschwindigkeitsbahnhof. Villena AV verbindet Alicante in rund 20 Minuten und Madrid in etwas über zwei Stunden; der Bahnhof liegt außerhalb des Zentrums.",
  },
  {
    name: "Hondón de las Nieves",
    text: "Dorfleben zwischen Weinbergen, Mandel- und Olivenbäumen, mit etabliertem internationalem Umfeld und praktischer Verbindung Richtung Aspe, Elche und Küste.",
  },
  {
    name: "Pinoso",
    text: "Weinland mit Markt für Grundstücke, Landhäuser und moderne Villen. Ein wichtiges Referenzgebiet für die gezeigten Hausmodelle, aber nicht der einzige Ort, an dem ein geeignetes Modell gebaut werden kann.",
  },
  {
    name: "Jumilla",
    text: "Ein tieferes Inlandziel in der Region Murcia mit Monastrell, Bodegas, eigenständiger Stadt und offener Landschaft für Käufer, die eine ausgeprägte Inlandidentität suchen.",
  },
];

export default function GermanInlandPage() {
  return (
    <main lang="de">
      <SiteHeader locale="de" languageLinks={homeLanguageLinks("de")} />
      <section className="page-hero compact-hero image-hero">
        <p className="eyebrow">Alicante & Murcia Inland</p>
        <h1>Zuerst die Lage wählen. Dann finden wir Grundstück und Haus.</h1>
        <p>
          Die modernen Villen, die wir in Aspe und Pinoso zeigen, sind Beispiele und Hausmodelle — keine geografische
          Begrenzung. Wenn Sie Busot, Biar, Villena, Hondón, Jumilla oder ein anderes geeignetes Inlandgebiet bevorzugen,
          suchen wir dort das passende Grundstück und prüfen, welches Modell gebaut oder angepasst werden kann.
        </p>
        <div className="hero-actions">
          <a className="contact-button" href="/tomter">
            Grundstücke im Inland ansehen
          </a>
          <a className="text-button light" href="/de#kontakt">
            Wunschgebiet nennen
          </a>
        </div>
      </section>

      <section className="section card-list">
        {highlights.map((item) => (
          <article className="info-card" key={item.title}>
            <item.icon />
            <div>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="section area-intro">
        <div className="section-heading">
          <p className="eyebrow">Unterschiedliche Inland-Lebensstile</p>
          <h2>Welche Lage passt zu Ihrem Alltag?</h2>
          <p>
            Das Hinterland ist kein einheitlicher Markt. Entfernung zu Küste und Flughäfen, Klima, Service, Grundstücksarten
            und Baurecht unterscheiden sich deutlich. Deshalb beginnen wir mit Ihrem gewünschten Alltag und vergleichen danach die Orte.
          </p>
        </div>
      </section>

      <section className="section card-list">
        {areas.map((area) => (
          <article className="info-card" key={area.name}>
            <MapPin />
            <div>
              <h2>{area.name}</h2>
              <p>{area.text}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="section proof-section">
        <div className="section-heading">
          <p className="eyebrow">Moderne Neubauvillen</p>
          <h2>Das Hausmodell kann wechseln. Das Grundstück muss passen.</h2>
          <p>
            Die Projekte in Aspe und Pinoso liefern konkrete Architektur-, Grundriss-, Ausstattungs- und Budgetbeispiele.
            Für ein anderes Wunschgebiet nutzen wir diese als Ausgangspunkt und suchen ein Grundstück, auf dem Baurecht,
            zulässige Größe, Zufahrt, Wasser, Strom, Gelände und Gesamtbudget das Projekt tatsächlich ermöglichen.
          </p>
        </div>
      </section>

      <section className="section area-intro">
        <div className="section-heading">
          <p className="eyebrow">Nächster Schritt</p>
          <h2>Nennen Sie Lebensstil und Lage — nicht nur das Haus</h2>
          <p>
            Wir können küstennahes Inland, Bergorte, Weinland und tiefere ländliche Gebiete vergleichen, bevor wir ein Objekt wählen.
            So entscheidet nicht das zufällig verfügbare Angebot darüber, wo Sie leben.
          </p>
          <div className="hero-actions">
            <a className="contact-button" href="/de/immobilien">
              <Home size={18} /> Aktuelle Immobilien und Modelle
            </a>
            <a className="text-button light" href="/de#kontakt">
              Kontakt aufnehmen
            </a>
          </div>
        </div>
      </section>

      <Footer locale="de" />
    </main>
  );
}
