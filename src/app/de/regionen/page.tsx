import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, MapPin, Mountain, Palmtree, Waves } from "lucide-react";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { homeLanguageLinks } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Wo an der Costa Blanca kaufen? | Regionen im Vergleich",
  description:
    "Vergleichen Sie Costa Blanca Nord, Costa Blanca Süd, Costa Cálida und das Hinterland von Alicante, bevor Sie eine Immobilie auswählen.",
  alternates: { canonical: "/de/regionen" },
};

const zones = [
  {
    icon: Waves,
    title: "Costa Blanca Nord",
    areas: "Benidorm · Villajoyosa · Finestrat · Albir · Altea · Calpe · Moraira · Dénia",
    body: "Eine abwechslungsreiche Küste mit ganzjährig lebendigen Städten, ruhigeren Orten, Villenlagen und modernen Neubauprojekten. Höhenunterschiede und tatsächliche Wege zu Dienstleistungen können selbst innerhalb einer Gemeinde stark variieren.",
    goodFor: "Käufer, die Meer, Infrastruktur, Landschaft und unterschiedliche Lebensstile kombinieren möchten.",
    href: "/de/immobilien?region=costa-blanca-nord",
  },
  {
    icon: Palmtree,
    title: "Costa Blanca Süd",
    areas: "Alicante · Santa Pola · Guardamar · Ciudad Quesada · Torrevieja · Orihuela Costa",
    body: "Ein großer, etablierter Immobilienmarkt mit vielen internationalen Wohngebieten. Entscheidend sind Mikrolage, Alltagswege und die Frage, wie ein Gebiet außerhalb der Hauptsaison funktioniert.",
    goodFor: "Käufer, die viel Auswahl, etablierte Urbanisationen und gute Strand- und Serviceanbindung suchen.",
    href: "/de/immobilien?region=costa-blanca-sor",
  },
  {
    icon: Building2,
    title: "Costa Cálida",
    areas: "San Pedro del Pinatar · San Javier · Los Alcázares · La Manga · Cartagena · Murcia",
    body: "Südlich von Alicante bietet Murcia Küste, Golf, Städte und moderne Projekte. Neben dem Preis sollten Erreichbarkeit, Dienstleistungen, Saison und geplante Nutzung gleich stark gewichtet werden.",
    goodFor: "Käufer, die Preis-Leistung, Küste, Golf und ganzjährige Nutzung miteinander vergleichen möchten.",
    href: "/de/immobilien?region=costa-calida",
  },
  {
    icon: Mountain,
    title: "Hinterland von Alicante",
    areas: "Biar · Villena · Sax · Castalla · Pinoso · Monóvar · Aspe · Novelda",
    body: "Mehr Grundstück, Privatsphäre und lokales spanisches Leben. Bei Grundstücken und Fincas sind Wasser, Strom, Zufahrt, Planungsstatus und die Legalität bestehender Bauten besonders wichtig.",
    goodFor: "Käufer, die Platz, Natur, Ruhe oder ein ländlicheres Leben priorisieren.",
    href: "/de/inland",
  },
];

export default function GermanAreasPage() {
  return (
    <main lang="de">
      <SiteHeader locale="de" languageLinks={homeLanguageLinks("de")} />
      <section className="page-hero compact-hero image-hero">
        <p className="eyebrow">Erst die Region, dann die Immobilie</p>
        <h1>Nord, Süd, Costa Cálida oder Hinterland?</h1>
        <p>Eine attraktive Immobilie kann trotzdem am falschen Ort liegen. Deshalb beginnen wir mit Alltag, Nutzung, Wegen und Budget, bevor wir die Suche eingrenzen.</p>
        <div className="hero-actions">
          <Link className="contact-button" href="/de#kontakt">Bei der Regionswahl helfen <ArrowRight size={18} /></Link>
          <Link className="text-button light" href="/de/immobilien">Immobilien ansehen</Link>
        </div>
      </section>
      <section className="section">
        <div className="section-heading"><p className="eyebrow">Vier Ausgangspunkte</p><h2>Der Unterschied zeigt sich im Alltag</h2></div>
        <div className="card-list">
          {zones.map((zone) => (
            <article className="info-card" key={zone.title}>
              <zone.icon />
              <div><h2>{zone.title}</h2><strong>{zone.areas}</strong><p>{zone.body}</p><p><strong>Kann passen, wenn:</strong> {zone.goodFor}</p><Link className="text-button" href={zone.href}>Region erkunden <ArrowRight size={15} /></Link></div>
            </article>
          ))}
        </div>
      </section>
      <section className="section proof-section">
        <div className="section-heading"><p className="eyebrow"><MapPin size={15} /> Vor Besichtigungen</p><h2>Nutzung, Budget und Lage zuerst</h2></div>
        <p style={{ maxWidth: 760, margin: "0 auto", lineHeight: 1.8, textAlign: "center" }}>Zen Eco Homes konzentriert sich vor allem auf moderne Neubauten und zeitgemäße Immobilien. Wenn eine Bestandsimmobilie objektiv besser zu Ihren Bedürfnissen passt, helfen wir trotzdem bei der Bewertung, statt Sie in das falsche Produkt zu drängen.</p>
      </section>
      <Footer locale="de" />
    </main>
  );
}
