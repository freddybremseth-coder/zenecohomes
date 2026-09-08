import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { Testimonials } from "@/components/Testimonials";
import { homeLanguageLinks } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Über Freddy Bremseth | Immobilienberater an der Costa Blanca",
  description:
    "Lernen Sie Freddy Bremseth kennen: norwegischer Immobilienberater mit Wohnsitz in Benidorm und praktischer Erfahrung mit Costa Blanca, Vermietung, Käuferberatung und Besichtigungsplanung.",
  alternates: {
    canonical: "/de/ueber-freddy",
    languages: {
      "nb-NO": "https://www.zenecohomes.com/om-freddy",
      en: "https://www.zenecohomes.com/en/about-freddy",
      "de-DE": "https://www.zenecohomes.com/de/ueber-freddy",
      "es-ES": "https://www.zenecohomes.com/es/sobre-freddy",
      "x-default": "https://www.zenecohomes.com/om-freddy",
    },
  },
};

export default function GermanAboutFreddyPage() {
  return (
    <main lang="de">
      <SiteHeader locale="de" languageLinks={homeLanguageLinks("de")} />
      <section className="section meet-freddy" style={{ paddingTop: 90 }}>
        <div className="meet-freddy-photo">
          <Image src="/assets/freddy-bremseth.jpg" alt="Freddy Bremseth" width={480} height={482} sizes="(max-width: 760px) 60vw, 320px" priority />
        </div>
        <div className="meet-freddy-body">
          <p className="eyebrow">Über Freddy</p>
          <h1>Immobilienberatung mit den Bedürfnissen des Käufers im Mittelpunkt</h1>
          <blockquote className="meet-freddy-quote">„Das Ziel sind nicht möglichst viele Besichtigungen. Das Ziel sind die richtigen Besichtigungen.“</blockquote>
          <p>Ich bin Freddy Bremseth, norwegischer Immobilienberater mit Wohnsitz in Benidorm. Ich helfe Käufern dabei, Regionen, moderne Neubauprojekte, Preise, Kosten, Besichtigungspläne und den praktischen Kaufprozess zu verstehen, bevor sie eine Entscheidung treffen.</p>
        </div>
      </section>
      <section className="section">
        <article className="om-freddy-bio">
          <h2>Immobilienerfahrung aus beiden Perspektiven</h2>
          <p>Ich lebte zunächst rund dreieinhalb Jahre in Ciudad Quesada, Rojales, an der südlichen Costa Blanca. In dieser Zeit entwickelte ich Daten- und CRM-Systeme für einen Immobilienmakler und betreute die Vermietung von rund zehn Einheiten. Dadurch sammelte ich praktische Erfahrung mit Preisen, Nachfrage, Saison und Vermietungspotenzial.</p>
          <h2>Mehr als zwei Jahre Informationsabende für Käufer in Norwegen</h2>
          <p>Nach meiner Rückkehr nach Norwegen arbeitete ich weiter mit Spanien. Über mehr als zwei Jahre veranstaltete ich wöchentlich Informationsabende in Høvik bei Oslo für Menschen, die einen Immobilienkauf in Spanien erwogen. Es ging um Regionen, Kaufprozess, Kosten, Risiken und die Fragen, die vor einer Reise geklärt werden sollten.</p>
          <h2>Ich kenne auch die Perspektive des frustrierten Käufers</h2>
          <p>Bei der späteren Suche nach der eigenen Immobilie erlebte meine Familie dieselben praktischen Probleme wie viele Käufer: langsame Antworten, unvollständige Informationen und unnötige Fahrten. Wir entschieden uns schließlich für ein Olivengrundstück in Biar, während unser fester Wohnsitz in Benidorm ist.</p>
          <h2>Moderner Neubau ist der Schwerpunkt</h2>
          <p>Zen Eco Homes konzentriert sich vor allem auf moderne Neubauvillen, Apartments und Projekte an der Costa Blanca und in angrenzenden Regionen sowie auf Grundstücke und ausgewählte Möglichkeiten im Hinterland. Wenn eine Bestandsimmobilie eindeutig besser zu einem Kunden passt, helfe ich lieber bei der Bewertung, als jemanden in das falsche Neubauprojekt zu drängen.</p>
          <h2>Beratung zuerst. Immobilie danach.</h2>
          <p>Meine Ausgangsfrage lautet nicht „Was kann ich Ihnen verkaufen?“, sondern „Wo werden Sie sich wirklich wohlfühlen und welche Immobilie passt zu Ihrem Leben?“ Deshalb vergleichen wir Region, Gesamtkosten, Ausstattung, Wege, mögliche Vermietung und tatsächliche Nutzung, bevor wir den Markt auf eine kurze Auswahl reduzieren.</p>
          <div className="hero-actions" style={{ marginTop: 24 }}>
            <Link className="contact-button" href="/de/termin"><MessageCircle size={18} /> Mit Freddy sprechen</Link>
            <Link className="text-button" href="/de/regionen">Regionen vergleichen <ArrowRight size={16} /></Link>
          </div>
        </article>
      </section>
      <Testimonials />
      <Footer locale="de" />
    </main>
  );
}
