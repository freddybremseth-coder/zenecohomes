import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CalendarClock, CheckCircle2, MapPinned, Users } from "lucide-react";
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

      <section className="section booking-choice-section">
        <div className="section-heading">
          <p className="eyebrow">Velg hva du trenger</p>
          <h2>Tre enkle måter å starte på</h2>
          <p>Du trenger ikke fylle ut mer enn nødvendig. Velg inngangen som passer situasjonen din best.</p>
        </div>
        <div className="proof-grid booking-choice-grid">
          <article>
            <CalendarClock size={22} aria-hidden="true" />
            <h3>15-minutters boligprat</h3>
            <p>For deg som vil avklare område, budsjett og neste steg før du bruker tid på konkrete boliger.</p>
            <a className="text-button" href="#boligprat">Start her</a>
          </article>
          <article>
            <MapPinned size={22} aria-hidden="true" />
            <h3>Planlegge visningstur</h3>
            <p>For deg som allerede vet omtrent når du kommer til Spania og vil bygge en relevant shortlist før reisen.</p>
            <Link className="text-button" href="/visningstur">Se hvordan visningstur fungerer</Link>
          </article>
          <article>
            <Users size={22} aria-hidden="true" />
            <h3>Informasjonsmøte</h3>
            <p>Meld interesse for neste informasjonsmøte om boligkjøp i Spania. Når dato er satt, får du informasjon.</p>
            <a className="text-button" href="#infomote">Meld interesse</a>
          </article>
        </div>
      </section>

      <section className="section split" id="boligprat">
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
          <Link className="text-button" href="/om-oss/freddy"><ArrowLeft size={16} /> Les mer om Freddy</Link>
        </div>
        <div>
          <ContactForm source="zenecohomes-booking" />
        </div>
      </section>
      <section className="section split booking-info-meeting" id="infomote">
        <div>
          <p className="eyebrow">Informasjonsmøte</p>
          <h2>Meld interesse for neste møte</h2>
          <p>
            Vi bruker informasjonsmøtene til å gå gjennom områder, kostnader, kjøpsprosess, nybygg og vanlige
            fallgruver. Det er ingen fast dato publisert akkurat nå, så dette er en interesseliste – ikke en bekreftet booking.
          </p>
          <p>
            Når et møte er satt opp får de som står på listen informasjon om tidspunkt, format og tema.
          </p>
        </div>
        <div>
          <ContactForm source="zenecohomes-info-meeting" requestType="Interesse for informasjonsmøte" variant="compact" />
        </div>
      </section>
      <Footer />
    </main>
  );
}
