import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CalendarClock, CheckCircle2 } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { homeLanguageLinks } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Book boligprat med Freddy | Zen Eco Homes",
  description:
    "Be om en kort, uforpliktende boligprat med Freddy Bremseth om område, budsjett, moderne nybygg og neste steg ved boligkjøp i Spania.",
  alternates: { canonical: "/booking" },
};

export default function BookingPage() {
  return (
    <main>
      <SiteHeader locale="no" languageLinks={homeLanguageLinks("no")} />
      <section className="page-hero compact-hero image-hero">
        <p className="eyebrow"><CalendarClock size={15} /> 15-minutters boligprat</p>
        <h1>Fortell kort hva du vurderer</h1>
        <p>
          Denne første praten er for å avklare område, budsjett, bruk og hva du bør gjøre videre. Hovedfokuset vårt
          er moderne nybygg og moderne boliger på Costa Blanca og i utvalgte innlandsområder.
        </p>
      </section>

      <section className="section split">
        <div>
          <p className="eyebrow">Hva vi kan avklare</p>
          <h2>Få et bedre utgangspunkt før du bestiller visningstur</h2>
          <div className="check-list">
            <span><CheckCircle2 size={18} /> Hvilke områder som passer hvordan du vil bruke boligen</span>
            <span><CheckCircle2 size={18} /> Realistisk totalbudsjett – ikke bare annonseprisen</span>
            <span><CheckCircle2 size={18} /> Moderne nybygg, villa, leilighet eller tomt</span>
            <span><CheckCircle2 size={18} /> Hvilke spørsmål som bør avklares før reservasjon</span>
            <span><CheckCircle2 size={18} /> Hvordan en effektiv visningsdag kan bygges opp</span>
          </div>
          <p style={{ color: "var(--muted)", lineHeight: 1.8, marginTop: 24 }}>
            Send inn kontaktinformasjonen din og skriv gjerne når det passer best å bli kontaktet. Dette er foreløpig
            en forespørsel om samtale, ikke en automatisk kalenderbooking.
          </p>
          <Link className="text-button" href="/om-freddy"><ArrowLeft size={16} /> Les mer om Freddy</Link>
        </div>
        <div>
          <ContactForm source="zenecohomes-booking" />
        </div>
      </section>
      <Footer />
    </main>
  );
}
