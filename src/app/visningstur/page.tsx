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
    <main className="viewing-trip-page">
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

      <section className="section viewing-prep">
        <div>
          <p className="eyebrow">Før reisen</p>
          <h2>Slik forbereder vi visningsturen</h2>
          <p className="viewing-lead">
            Målet er ikke å fylle kalenderen. Målet er at boligene du ser skal være relevante nok til at du faktisk kan sammenligne dem.
          </p>
          <div className="viewing-prep-list">
            <article><CheckCircle2 size={18}/><div><h3>Behov og totalbudsjett først</h3><p>Vi avklarer hvordan boligen skal brukes, økonomisk ramme og hva som er viktigst for deg.</p></div></article>
            <article><CheckCircle2 size={18}/><div><h3>Området snevres inn</h3><p>Vi reduserer geografi før vi velger objekter, slik at visningsdagen ikke brukes på store transportetapper.</p></div></article>
            <article><CheckCircle2 size={18}/><div><h3>Tilgjengelighet bekreftes</h3><p>Pris og tilgjengelighet sjekkes på nytt så nær visningsdagen som mulig.</p></div></article>
            <article><CheckCircle2 size={18}/><div><h3>Én koordinert plan</h3><p>Relevante utviklere og meglere samles i én kjøreplan, med nok tid mellom stoppene.</p></div></article>
          </div>
        </div>
        <aside className="viewing-duration">
          <p className="eyebrow"><Clock size={14}/> Hvor lenge?</p>
          <h2>Planlegg gjerne 2–3 dager i området</h2>
          <p>
            Én eller to konsentrerte visningsdager gir rom til å sammenligne boliger. Resten av oppholdet kan brukes til å teste området i praksis.
          </p>
          <div className="viewing-duration-points">
            <span>Strand, sentrum og servicetilbud</span>
            <span>Kjøretider og hverdagslogistikk</span>
            <span>Hvordan området føles utenfor selve visningen</span>
          </div>
          <p>
            Har du allerede valgt område og en svært kort shortlist, kan turen være kortere.
          </p>
          <Link className="text-button" href="/guide/omradeguide-eiendomskjop-i-spania">
            Les områdeguiden <ArrowRight size={16}/>
          </Link>
        </aside>
      </section>

      <section className="section proof-section">
        <div className="section-heading">
          <p className="eyebrow"><MapPin size={14}/> Eksempel på en visningsdag</p>
          <h2>Fra område til oppsummering</h2>
          <p>Planen tilpasses kunden, men en god dag har en tydelig rekkefølge og nok tid til å tenke mellom visningene.</p>
        </div>
        <div className="viewing-day-timeline">
          {day.map(([title, text], index) => (
            <article key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div><h3>{title}</h3><p>{text}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="section split viewing-evaluation">
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
        <aside className="viewing-after">
          <p className="eyebrow">Etter visningen</p>
          <h2>Ingen reservasjon før viktige spørsmål er avklart</h2>
          <p>
            Hvis en bolig skiller seg ut, samler vi spørsmål om pris, leveranse, betalingsplan, dokumentasjon
            og andre forhold som må undersøkes. Deretter går saken videre i den strukturerte
            <Link href="/kjopsprosessen"> kjøpsprosessen</Link>.
          </p>
          <Link className="text-button" href="/kjopsprosessen">Se hele kjøpsprosessen <ArrowRight size={16}/></Link>
        </aside>
      </section>

      <section className="section viewing-shortlist">
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
