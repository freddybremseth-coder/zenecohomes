import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { homeLanguageLinks } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Immobilienkauf in Spanien | Kaufprozess Schritt für Schritt",
  description: "Praktischer Überblick vom Bedarf und der Auswahl bis Reservierung, Prüfung, Vertrag, Notar und Übergabe.",
  alternates: { canonical: "/de/kaufprozess" },
};

const steps = [
  ["1", "Nutzung und Budget definieren", "Klären Sie Feriennutzung, dauerhaftes Wohnen, Ruhestand oder Investition und rechnen Sie mit dem Gesamtbudget statt nur mit dem Kaufpreis."],
  ["2", "Die passende Region wählen", "Vergleichen Sie Alltag, Infrastruktur, Flughafen, Saison und den Immobilientyp, der zu Ihrer tatsächlichen Nutzung passt."],
  ["3", "Eine kurze, relevante Auswahl erstellen", "Verfügbarkeit und wichtige Fakten möglichst vor der Besichtigung bestätigen. Ziel sind nicht möglichst viele, sondern die richtigen Besichtigungen."],
  ["4", "Reservierung", "Vor einer Reservierungszahlung sollten Objekt, Bedingungen, Rückerstattung und noch offene Prüfungen klar sein."],
  ["5", "Rechtliche und technische Prüfung", "Beauftragen Sie geeignete unabhängige Fachleute in Spanien mit Eigentum, Belastungen, Planungsstatus, Verträgen und technischen Fragen."],
  ["6", "Vertrag und Zahlungsplan", "Bei Neubau sind Baubeschreibung, Zahlungsstufen, Garantien, enthaltene Leistungen und Fertigstellungstermin besonders wichtig."],
  ["7", "Notar und Abschluss", "Die endgültige Urkunde wird üblicherweise vor einem spanischen Notar unterzeichnet, gefolgt von Registrierung, Steuern und Übergabeschritten."],
  ["8", "Schlüssel und Betreuung", "Versorger, Gemeinschaft, Versicherung, Keyholding und praktische Betreuung sollten früh geplant werden."],
];

export default function GermanBuyingProcessPage() {
  return (
    <main lang="de">
      <SiteHeader locale="de" languageLinks={homeLanguageLinks("de")} />
      <section className="page-hero compact-hero image-hero">
        <p className="eyebrow">Beratung vor der Reservierung</p>
        <h1>Immobilie in Spanien kaufen – Schritt für Schritt</h1>
        <p>Der Kauf wird übersichtlicher, wenn Region, Immobilie, Kosten und Prüfungen in der richtigen Reihenfolge behandelt werden.</p>
        <div className="hero-actions"><Link className="contact-button" href="/de#kontakt">Kauf besprechen <ArrowRight size={18} /></Link><Link className="text-button light" href="/de/immobilien">Moderne Immobilien ansehen</Link></div>
      </section>
      <section className="section">
        <div className="section-heading"><p className="eyebrow">Acht Schritte</p><h2>Von der Idee bis zur Schlüsselübergabe</h2></div>
        <div className="card-list">
          {steps.map(([number, title, body]) => <article className="info-card" key={number}><CheckCircle2 /><div><p className="eyebrow">Schritt {number}</p><h2>{title}</h2><p>{body}</p></div></article>)}
        </div>
      </section>
      <section className="section" style={{ textAlign: "center" }}>
        <h2>Unser Hauptfokus: moderner Neubau</h2>
        <p style={{ maxWidth: 760, margin: "0 auto 22px", color: "var(--muted)", lineHeight: 1.8 }}>Zen Eco Homes konzentriert sich vor allem auf moderne Neubauprojekte, Villen und Apartments. Wenn eine Bestandsimmobilie klar besser passt, helfen wir trotzdem bei der Bewertung.</p>
        <Link className="contact-button" href="/de#kontakt">Mit Freddy sprechen</Link>
      </section>
      <Footer locale="de" />
    </main>
  );
}
