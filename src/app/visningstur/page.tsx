import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin } from "lucide-react";

import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { homeLanguageLinks } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Visningstur til Spania | Planlegg med Zen Eco Homes",
  description:
    "Planlegg visningstur til Spania med en målrettet shortlist. Vi avklarer område, budsjett og behov, bekrefter boliger og organiserer effektive visninger.",
  alternates: { canonical: "/visningstur" },
};

const steps = [
  ["1. Før reisen", "Vi avklarer bruk, budsjett, boligtype, områder og hva som er viktigst i hverdagen din."],
  ["2. Shortlist", "Vi undersøker aktuelle boliger, bekrefter status og kutter bort alternativer som ikke passer kriteriene."],
  ["3. Visningsplan", "Visningene grupperes geografisk slik at tiden brukes på boliger og områder som faktisk kan være relevante."],
  ["4. På visningsdagen", "Vi sammenligner bolig, område, avstander, prosjekt, pris, leveranse og de praktiske forholdene rundt."],
  ["5. Etter visning", "Du får hjelp til å sammenligne alternativene og forstå hva som bør kontrolleres før reservasjon eller videre dialog."],
];

export default function ViewingTripPage() {
  return (
    <main>
      <SiteHeader languageLinks={homeLanguageLinks("no")} />
      <section className="page-hero compact-hero">
        <p className="eyebrow">Visningstur til Spania</p>
        <h1>En visningstur skal gjøre valget enklere – ikke mer uoversiktlig</h1>
        <p>
          Vi planlegger turen rundt område, behov og en kortere liste med reelle alternativer. Målet er færre
          tilfeldige visninger og mer tid til å forstå hva som faktisk passer deg.
        </p>
        <div className="hero-actions">
          <Link className="contact-button" href="/booking">Planlegg visningstur <ArrowRight size={18} /></Link>
          <Link className="text-button light" href="/eiendommer">Se boliger</Link>
        </div>
      </section>

      <section className="section split">
        <div className="section-heading">
          <p className="eyebrow">Før du bestiller fly</p>
          <h2>Vi starter med behovskartlegging</h2>
          <p>
            En god visningstur begynner før du lander i Spania. Vi avklarer hvilke områder som passer,
            totalbudsjett, ønsket boligtype og hvordan boligen skal brukes. Deretter kan vi bygge en realistisk
            shortlist.
          </p>
          <p>
            Hvor mange dager som trengs avhenger av hvor bredt du søker. Når områdene ligger nær hverandre og
            kriteriene er tydelige, kan visningene samles effektivt. Søker du på tvers av store deler av
            Costa Blanca eller flere regioner, bør planen gi mer tid til selve områdene.
          </p>
        </div>
        <div className="feature-panel">
          <div><CheckCircle2 /> Behov og totalbudsjett først</div>
          <div><MapPin /> Områdene grupperes geografisk</div>
          <div><CheckCircle2 /> Tilgjengelighet bekreftes før turen</div>
          <div><CheckCircle2 /> Tid til sammenligning mellom visningene</div>
        </div>
      </section>

      <section className="section proof-section">
        <div className="section-heading">
          <p className="eyebrow">Slik foregår det</p>
          <h2>Fra første samtale til oppsummering etter visning</h2>
        </div>
        <div className="proof-grid">
          {steps.map(([title, body]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section proof-section">
        <div className="section-heading">
          <p className="eyebrow">Typisk visningsdag</p>
          <h2>Boligen er bare én del av beslutningen</h2>
          <p>
            På en visningsdag bør du også se nærområdet, kjøreruter, servicetilbud og hvordan avstandene
            oppleves i praksis. Vi legger derfor ikke opp til et program der antall visninger er det eneste målet.
          </p>
        </div>
        <div className="center-action">
          <Link className="text-button" href="/guide/kjope-bolig-i-spania">
            Les komplett guide til boligkjøp i Spania <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <section className="contact-section">
        <div>
          <p className="eyebrow">Planlegg turen</p>
          <h2>Fortell når du kommer og hva du ser etter</h2>
          <p>Send område, omtrent budsjett, boligtype og reisedatoer. Vi bruker det som startpunkt for shortlisten.</p>
        </div>
        <ContactForm source="zenecohomes-viewing-trip" />
      </section>
      <Footer />
    </main>
  );
}
