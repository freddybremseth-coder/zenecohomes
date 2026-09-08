import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Building2, MapPin, ShieldCheck } from "lucide-react";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { homeLanguageLinks } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Ratgeber für den Immobilienkauf in Spanien | Zen Eco Homes",
  description: "Praktische deutschsprachige Ratgeber zu Regionen, Neubau, Grundstücken, Kosten und Kaufprozess in Spanien.",
  alternates: { canonical: "/de/ratgeber" },
};

const guides = [
  { icon: MapPin, title: "Wo sollten Sie kaufen?", body: "Vergleichen Sie Costa Blanca Nord, Süd, Costa Cálida und das Hinterland von Alicante, bevor Sie eine Immobilie auswählen.", href: "/de/regionen" },
  { icon: ShieldCheck, title: "Kaufprozess", body: "Verstehen Sie die wichtigsten Schritte von Bedarf und Auswahl bis Reservierung, Prüfung, Vertrag und Abschluss.", href: "/de/kaufprozess" },
  { icon: Building2, title: "Moderner Neubau", body: "Vergleichen Sie Baubeschreibung, Zahlungsplan, Fertigstellung, Energieeffizienz und was tatsächlich enthalten ist.", href: "/de/neubau-costa-blanca" },
  { icon: BookOpen, title: "Grundstücke und Hinterland", body: "Bei mehr Platz und Grundstücken sollten Planungsstatus, Wasser, Strom, Zufahrt und realistische Baukosten früh geprüft werden.", href: "/de/grundstueck-in-spanien" },
];

export default function GermanGuidesPage() {
  return (
    <main lang="de">
      <SiteHeader locale="de" languageLinks={homeLanguageLinks("de")} />
      <section className="page-hero compact-hero image-hero">
        <p className="eyebrow">Wissen vor Entscheidungen</p>
        <h1>Ratgeber für den Immobilienkauf in Spanien</h1>
        <p>Kurze, praktische Orientierung für die wichtigsten Entscheidungen vor Reservierung, Besichtigung und Kauf.</p>
      </section>
      <section className="section">
        <div className="card-list">
          {guides.map((guide) => <article className="info-card" key={guide.title}><guide.icon /><div><h2>{guide.title}</h2><p>{guide.body}</p><Link className="text-button" href={guide.href}>Ratgeber lesen <ArrowRight size={15} /></Link></div></article>)}
        </div>
      </section>
      <section className="section" style={{ textAlign: "center" }}>
        <h2>Erst die Bedürfnisse, dann das Angebot</h2>
        <p style={{ maxWidth: 720, margin: "0 auto 22px", color: "var(--muted)", lineHeight: 1.8 }}>Unser Schwerpunkt liegt auf modernem Neubau und zeitgemäßen Immobilien. Die Ratgeber helfen dabei, Region und Immobilientyp einzugrenzen, bevor Sie Zeit in Besichtigungen investieren.</p>
        <Link className="contact-button" href="/de#kontakt">Frage stellen</Link>
      </section>
      <Footer locale="de" />
    </main>
  );
}
