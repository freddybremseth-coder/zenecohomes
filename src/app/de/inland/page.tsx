import { Home, MapPin, Sprout, Droplets, Ruler, ShieldCheck } from "lucide-react";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { homeLanguageLinks } from "@/lib/i18n";

export const metadata = {
  title: "Inland – Immobilie und Grundstück im Landesinneren Spaniens | Pinoso, Aspe, Novelda",
  description:
    "Entdecken Sie das Hinterland der Costa Blanca: größere Grundstücke, Fincas, Neubauten und Ruhe rund um Pinoso, Aspe und Novelda. Beratung auf Deutsch zu Wasser, Strom, Zufahrt und sicherem Kaufprozess.",
  alternates: {
    canonical: "/de/inland",
    languages: {
      "nb-NO": "https://www.zenecohomes.com/inland",
      "x-default": "https://www.zenecohomes.com/inland",
      "de-DE": "https://www.zenecohomes.com/de/inland",
      en: "https://www.zenecohomes.com/en/inland",
    },
  },
  openGraph: {
    title: "Inland in Spanien | Zen Eco Homes",
    description:
      "Immobilie, Grundstück und Finca im Hinterland der Costa Blanca. Mehr Platz, Natur und niedrigere Quadratmeterpreise – mit sicherer Beratung auf Deutsch.",
    url: "https://www.zenecohomes.com/de/inland",
    type: "website",
  },
};

const highlights = [
  {
    icon: Ruler,
    title: "Mehr Platz fürs Geld",
    text: "Größere Grundstücke und niedrigere Quadratmeterpreise als an der Küste. Raum für Pool, Garten, Gästehaus oder Anbau.",
  },
  {
    icon: Sprout,
    title: "Ruhe, Natur und Selbstversorgung",
    text: "Weinberge, Mandelbäume und offene Landschaften. Ideal für einen ruhigeren Alltag und einen selbstversorgenden Lebensstil.",
  },
  {
    icon: Droplets,
    title: "Wasser, Strom und Zufahrt",
    text: "Wir prüfen die Wasserquelle (kommunales Netz, Wassergemeinschaft, Brunnen oder Tank), den Stromanschluss und die rechtlich gesicherte Zufahrt – bevor Sie sich binden.",
  },
  {
    icon: ShieldCheck,
    title: "Sichere Einstufung",
    text: "Rústico, urbano oder urbanizable? Wir klären, was Sie tatsächlich bauen dürfen und welche Genehmigungen nötig sind.",
  },
];

const areas = [
  {
    name: "Pinoso",
    text: "Bekannt für Wein, Salz und ländliche Fincas. Große Grundstücke, gute Baumöglichkeiten und eine angenehme Gemeinde.",
  },
  {
    name: "Aspe",
    text: "Grünes Hinterland mit Trauben und Oliven, kurze Wege nach Alicante und zum Flughafen. Mehr Infrastruktur bei ländlicher Ruhe.",
  },
  {
    name: "Novelda",
    text: "Historische Stadt mit Marmorindustrie und Jugendstil-Architektur. Guter Ausgangspunkt für Grundstück, Neubau und größere Immobilien.",
  },
];

export default function GermanInlandPage() {
  return (
    <main lang="de">
      <SiteHeader locale="de" languageLinks={homeLanguageLinks("de")} />
      <section className="page-hero compact-hero image-hero">
        <p className="eyebrow">Neuer Service · Hinterland Spaniens</p>
        <h1>Inland – Immobilie, Grundstück und Finca im Hinterland</h1>
        <p>
          Sie möchten mehr Platz, Natur und Ruhe als an der Küste? Im Hinterland rund um Pinoso, Aspe und Novelda
          finden Sie größere Grundstücke, Fincas und Neubauten zu niedrigeren Quadratmeterpreisen – mit sicherer
          Beratung auf Deutsch, den ganzen Weg.
        </p>
        <div className="hero-actions">
          <a className="contact-button" href="/tomter">
            Grundstücke ansehen
          </a>
          <a className="text-button light" href="/de#kontakt">
            Mit einem Berater sprechen
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
          <p className="eyebrow">Beliebte Lagen im Hinterland</p>
          <h2>Wo im Hinterland passt zu Ihnen?</h2>
          <p>
            Das Hinterland bietet oft mehr Grundstück, Natur und niedrigere Preise – aber Wasser, Strom, Zufahrt und
            Einstufung variieren stark von Objekt zu Objekt. Wir helfen Ihnen beim Vergleich.
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

      <section className="section area-intro">
        <div className="section-heading">
          <p className="eyebrow">Nächster Schritt</p>
          <h2>Küste oder Hinterland – wir helfen bei der richtigen Wahl</h2>
          <p>
            Die Küste bietet einfachere Vermietung, Strand und mehr Infrastruktur. Das Hinterland bietet mehr
            Grundstück, Ruhe und Natur. Die Wahl sollte sich nach Lebensstil und Nutzung richten.
          </p>
          <div className="hero-actions">
            <a className="contact-button" href="/de/immobilien">
              <Home size={18} /> Immobilien ansehen
            </a>
            <a className="text-button light" href="/de#kontakt">
              Kontakt aufnehmen
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
