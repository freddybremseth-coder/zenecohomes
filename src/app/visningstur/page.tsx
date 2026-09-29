import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, MapPin } from "lucide-react";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { homeLanguageLinks } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Visningstur til Spania | Planlegg med Zen Eco Homes",
  description:
    "Planlegg visningstur til Spania med Zen Eco Homes. Vi avklarer område, budsjett og shortlist før reisen og samler relevante boliger til visning.",
  alternates: { canonical: "/visningstur" },
};

const day = [
  ["Første stopp", "Vi starter i området og ser på hverdagen rundt boligen: service, avstander, adkomst og det du faktisk vil bruke."],
  ["Utvalgte visninger", "Vi prioriterer et begrenset antall relevante boliger fremfor å fylle dagen med objekter som ikke passer profilen din."],
  ["Sammenligning underveis", "Etter hver visning noterer vi hva som fungerte og hva som ikke gjorde det. Shortlisten kan justeres samme dag."],
  ["Oppsummering", "Dagen avsluttes med en konkret rangering av alternativer, spørsmål som må avklares og neste steg – uten press om å reservere."],
] as const;

export default function ViewingTripPage() {
  return (
    <main>
      <SiteHeader languageLinks={homeLanguageLinks("no")} />

      <section className="page-hero compact-hero">
        <p className="eyebrow">Visningstur til Spania</p>
        <h1>En visningstur skal gi klarhet – ikke flere tilfeldige boliger</h1>
        <p>
          Vi avklarer område, budsjett og krav før du reiser, bekrefter tilgjengelighet så nær turen som mulig
          og samler et lite antall boliger som faktisk er relevante.
        </p>
        <div className="hero-actions">
          <Link className="contact-button" href="/booking">Planlegg visningstur <ArrowRight size={17} /></Link>
          <Link className="text-button light" href="/eiendommer">Se boliger</Link>
          <Link className="text-button light" href="/omrader">Sammenlign områder</Link>
        </div>
      </section>

      <section className="section split">
        <div>
          <p className="eyebrow">Før reisen</p>
          <h2>Slik forbereder vi visningsturen</h2>
          <div className="check-list">
            <span><CheckCircle2 size={18}/> Behov, boligbruk og totalbudsjett avklares.</span>
            <span><CheckCircle2 size={18}/> Områder snevres inn før konkrete boliger velges.</span>
            <span><CheckCircle2 size={18}/> Pris og tilgjengelighet sjekkes på nytt før visningsdagen.</span>
            <span><CheckCircle2 size={18}/> Relevante utviklere og meglere koordineres i én plan.</span>
            <span><CheckCircle2 size={18}/> Vi legger inn luft til å oppleve området – ikke bare kjøre mellom dører.</span>
          </div>
        </div>
        <div>
          <p className="eyebrow"><Clock size={14}/> Hvor lenge?</p>
          <h2>Planlegg gjerne 2–3 dager i området</h2>
          <p>
            Når det er praktisk anbefaler vi å ha mer enn én dag tilgjengelig. Én eller to konsentrerte
            visningsdager gir rom til å sammenligne boliger, mens resten av oppholdet kan brukes til å teste
            strand, sentrum, kjøretider, restauranter og hverdagsservice.
          </p>
          <p>
            Har du allerede valgt område og en svært kort shortlist, kan turen være kortere. Er du fortsatt
            usikker på region, er det ofte smartere å bruke mer tid på områdevalg enn på antall visninger.
          </p>
          <Link className="text-button" href="/guide/omradeguide-eiendomskjop-i-spania">
            Les områdeguiden <ArrowRight size={16}/>
          </Link>
        </div>
      </section>

      <section className="section proof-section">
        <div className="section-heading">
          <p className="eyebrow"><MapPin size={14}/> Eksempel på en visningsdag</p>
          <h2>Fra område til oppsummering</h2>
          <p>Planen tilpasses kunden, men en god dag har en tydelig rekkefølge og nok tid til å tenke mellom visningene.</p>
        </div>
        <div className="proof-grid">
          {day.map(([title, text], index) => (
            <article key={title}>
              <strong>{String(index + 1).padStart(2, "0")}</strong>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section split">
        <div>
          <p className="eyebrow">Hva ser vi etter?</p>
          <h2>Boligen er bare én del av vurderingen</h2>
          <p>
            På visning ser vi også på solforhold, adkomst, støy, omkringliggende tomter, byggeaktivitet,
            parkering, gangavstand, servicetilbud og hvordan området fungerer utenfor høysesongen.
          </p>
          <Link className="text-button" href="/guide/kjope-bolig-i-spania">
            Les komplett kjøperguide <ArrowRight size={16}/>
          </Link>
        </div>
        <div>
          <p className="eyebrow">Etter visningen</p>
          <h2>Ingen reservasjon før viktige spørsmål er avklart</h2>
          <p>
            Hvis en bolig skiller seg ut, samler vi spørsmål om pris, leveranse, betalingsplan, dokumentasjon
            og andre forhold som må undersøkes. Deretter går saken videre i den strukturerte
            <Link href="/kjopsprosessen"> kjøpsprosessen</Link>.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Før du bestiller fly</p>
          <h2>Gjør shortlisten så god som mulig hjemmefra</h2>
          <p>
            Start med boligoversikten og Boligmatch. Send oss gjerne referanser du allerede har funnet, også fra
            andre portaler, så kan de vurderes og koordineres før turen.
          </p>
        </div>
        <div className="hero-actions">
          <Link className="contact-button" href="/eiendommer">Se boliger til salgs</Link>
          <Link className="text-button" href="/booking">Book behovsavklaring</Link>
        </div>
      </section>

      <section className="contact-section">
        <div>
          <p className="eyebrow">Neste steg</p>
          <h2>Fortell når du planlegger å komme til Spania</h2>
          <p>Vi starter med område, budsjett og boligbruk og bygger en realistisk visningsplan derfra.</p>
        </div>
        <Link className="contact-button" href="/booking">Planlegg visningstur</Link>
      </section>

      <Footer />
    </main>
  );
}
