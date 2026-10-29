import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CalendarClock, CheckCircle2 } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { BookingTimeRequest } from "@/components/BookingTimeRequest";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { homeLanguageLinks } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Book boligprat om Spania | Råd fra Freddy Bremseth",
  description:
    "Book en uforpliktende boligprat om Spania med Freddy Bremseth. Få råd om område, budsjett, boligsøk, nybygg og neste steg i kjøpsprosessen i dag.",
  alternates: { canonical: "/booking" },
};

export default async function BookingPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>;
}) {
  const params = await searchParams;
  const infoMeeting = params.type === "infomote";
  return (
    <main className="booking-page">
      <SiteHeader locale="no" languageLinks={homeLanguageLinks("no")} />
      <section className="page-hero compact-hero image-hero">
        <p className="eyebrow"><CalendarClock size={15} /> 15-minutters boligprat</p>
        <h1>Ta en boligprat med oss</h1>
        <p>
          Velg det som passer deg best: send oss en kort henvendelse, eller foreslå et tidspunkt for en uforpliktende samtale om bolig i Spania.
        </p>
      </section>

      <section className="section" aria-labelledby="booking-options-title">
        <p className="eyebrow">Enkelt å komme i gang</p>
        <h2 id="booking-options-title">Hvordan vil du ta kontakt?</h2>
        <p className="booking-lead">Du trenger ikke ha valgt område eller bolig. Begge alternativer er uforpliktende.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 290px), 1fr))", gap: "1rem", marginTop: "1.5rem" }}>
          <a className="booking-form-panel" href="#foresporsel" style={{ display: "block", textDecoration: "none", color: "inherit" }}>
            <p className="eyebrow">Alternativ 1</p>
            <h3>Send en henvendelse</h3>
            <p>Skriv kort hva du lurer på. Vi tar kontakt med deg.</p>
            <strong>Gå til kontaktskjema →</strong>
          </a>
          <a className="booking-form-panel" href="#book-tid" style={{ display: "block", textDecoration: "none", color: "inherit" }}>
            <p className="eyebrow">Alternativ 2</p>
            <h3>Book en tid</h3>
            <p>Foreslå dato og klokkeslett for en 15-minutters boligprat. Vi bekrefter tidspunktet.</p>
            <strong>Velg ønsket tid →</strong>
          </a>
        </div>
      </section>
      <section className="section booking-layout">
        <div>
          <p className="eyebrow">1 · Send en henvendelse</p>
          <h2>Fortell kort hva du vurderer</h2>
          <p className="booking-lead">Spør om områder, budsjett, boligtype, visningstur eller kjøpsprosessen. Vi svarer og hjelper deg videre.</p>
          <Link className="text-button" href="/om-oss/freddy"><ArrowLeft size={16} /> Les mer om Freddy</Link>
        </div>
        <aside className="booking-form-panel" id="foresporsel">
          <p className="eyebrow">{infoMeeting ? "Interesse for infomøte" : "Kontaktskjema"}</p>
          <h2>{infoMeeting ? "Få beskjed når neste infomøte er satt" : "Send oss en melding"}</h2>
          <ContactForm
            source={infoMeeting ? "zenecohomes-infomote" : "zenecohomes-booking"}
            requestType={infoMeeting ? "infomote" : "booking"}
            variant="simple"
          />
        </aside>
      </section>
      {!infoMeeting && (
        <section className="section booking-layout" id="book-tid">
          <div>
            <p className="eyebrow">2 · Book en tid</p>
            <h2>Foreslå en tid for boligprat</h2>
            <p className="booking-lead">Velg en dato og et klokkeslett som passer deg. Samtalen varer omtrent 15 minutter og kan gjennomføres på telefon eller digitalt.</p>
            <p className="booking-note">Tidspunktet er ikke reservert før du har fått en bekreftelse fra oss.</p>
          </div>
          <aside className="booking-form-panel">
            <h2>Velg ønsket tidspunkt</h2>
            <BookingTimeRequest />
          </aside>
        </section>
      )}
      <section className="contact-section booking-info-meeting">
        <div>
          <p className="eyebrow">Digitalt infomøte</p>
          <h2>Vil du få beskjed om neste infomøte om boligkjøp i Spania?</h2>
          <p>
            Vi publiserer dato når neste møte er satt. Meld interesse nå, så bruker vi samme enkle kontaktskjema uten å opprette et ekstra skjema på siden.
          </p>
        </div>
        <Link className="contact-button" href="/booking?type=infomote#foresporsel">
          Meld interesse
        </Link>
      </section>
      <Footer />
    </main>
  );
}
