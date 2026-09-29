import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CalendarClock, CheckCircle2 } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { homeLanguageLinks } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Book boligprat om Spania | Råd fra Freddy Bremseth",
  description:
    "Book en uforpliktende boligprat om Spania med Freddy Bremseth. Få råd om område, budsjett, boligsøk, nybygg og neste steg i kjøpsprosessen i dag.",
  alternates: { canonical: "/booking" },
};

export default function BookingPage() {
  return (
    <main className="booking-page">
      <SiteHeader locale="no" languageLinks={homeLanguageLinks("no")} />
      <section className="page-hero compact-hero image-hero">
        <p className="eyebrow"><CalendarClock size={15} /> 15-minutters boligprat</p>
        <h1>Fortell kort hva du vurderer</h1>
        <p>
          Denne første praten er for å avklare område, budsjett, bruk og hva du bør gjøre videre. Hovedfokuset vårt
          er moderne nybygg og moderne boliger på Costa Blanca og i utvalgte innlandsområder.
        </p>
      </section>

      <section className="section booking-layout">
        <div>
          <p className="eyebrow">Hva vi kan avklare</p>
          <h2>Få et bedre utgangspunkt før du bestiller visningstur</h2>
          <p className="booking-lead">
            Samtalen brukes til å rydde i de viktigste valgene først. Du trenger ikke ha bestemt område eller bolig før du tar kontakt.
          </p>
          <div className="booking-agenda">
            <article><CheckCircle2 size={18}/><div><h3>Område og bruk</h3><p>Hvilke områder som passer feriebruk, fast bolig, utleie eller mer plass.</p></div></article>
            <article><CheckCircle2 size={18}/><div><h3>Totalbudsjett</h3><p>En realistisk ramme som tar høyde for mer enn bare annonseprisen.</p></div></article>
            <article><CheckCircle2 size={18}/><div><h3>Boligtype</h3><p>Nybygg, villa, leilighet, rekkehus eller tomt – og hvilke kompromisser som følger med.</p></div></article>
            <article><CheckCircle2 size={18}/><div><h3>Neste steg</h3><p>Hva som bør avklares før reservasjon, og hvordan en god visningsplan kan bygges opp.</p></div></article>
          </div>
          <p className="booking-note">
            Send inn kontaktinformasjonen din og skriv gjerne når det passer best å bli kontaktet. Dette er en forespørsel om samtale, ikke en automatisk kalenderbooking.
          </p>
          <Link className="text-button" href="/om-oss/freddy"><ArrowLeft size={16} /> Les mer om Freddy</Link>
        </div>
        <aside className="booking-form-panel">
          <p className="eyebrow">Forespør samtale</p>
          <h2>Fortell kort hva du vurderer</h2>
          <ContactForm source="zenecohomes-booking" />
        </aside>
      </section>
      <Footer />
    </main>
  );
}
