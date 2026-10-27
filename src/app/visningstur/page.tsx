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
  ["Utvalgte visninger", "Vi prioriterer boliger som passer profilen din, slik at du får mest mulig ut av visningsdagen."],
  ["Sammenligning underveis", "Etter hver visning noterer vi hva som fungerte og hva som ikke gjorde det. Shortlisten kan justeres samme dag."],
  ["Oppsummering", "Dagen avsluttes med en konkret rangering av alternativer, spørsmål som må avklares og neste steg – uten press om å reservere."],
] as const;

export default function ViewingTripPage() {
  return (
    <main className="viewing-trip-page">
      <SiteHeader languageLinks={homeLanguageLinks("no")} />

      <section className="page-hero compact-hero">
        <p className="eyebrow">Visningstur til Spania</p>
        <h1>Visningstur til Spania – finn riktig bolig og område med norske rådgivere</h1>
        <p>
          På en visningstur får du oppleve aktuelle boliger, utforske områdene og kjenne etter hvor du kan trives. Zen Eco Homes hjelper deg med å finne relevante boliger ut fra dine ønsker og ditt budsjett.
        </p>
        <div className="hero-actions">
          <Link className="contact-button" href="/booking">Ta kontakt <ArrowRight size={17} /></Link>
          <Link className="text-button light" href="/eiendommer">Se boliger</Link>
        </div>
      </section>

      <section className="section viewing-prep">
        <div>
          <p className="eyebrow">Før reisen</p>
          <h2>Slik planlegger vi visningsturen til Spania</h2>
          <p className="viewing-lead">
            God planlegging er nøkkelen til en vellykket visningstur. Vi ser på et nøye utvalg av boliger som samsvarer med ønskene dine, og vurderer helheten – fra boligens egenskaper og beliggenhet til området rundt. Slik får du et godt grunnlag for å finne boligen som passer best for deg.
          </p>
          <p><Link className="text-button" href="/kjopsprosessen">Les om kjøpsprosessen <ArrowRight size={16} /></Link></p>
          <div className="viewing-prep-list">
            <article><CheckCircle2 size={18}/><div><h3>Behov og totalbudsjett først</h3><p>Vi avklarer hvordan boligen skal brukes, økonomisk ramme og hva som er viktigst for deg.</p></div></article>
            <article><CheckCircle2 size={18}/><div><h3>Vi finner de rette områdene</h3><p>Vi ser etter områder på Costa Blanca der du kan trives. <Link href="/omrader">Se områdene</Link>.</p></div></article>
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
        </aside>
      </section>

      <section className="section proof-section">
        <div className="section-heading">
          <p className="eyebrow"><MapPin size={14}/> Eksempel på en visningsdag</p>
          <h2>Slik foregår en visningsdag i Spania</h2>
          <p>Planen for visningsdagen skreddersys for hver enkelt, med en god balanse mellom boligvisninger, opplevelsen av områdene og tid til å vurdere inntrykkene underveis.</p>
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

      <section className="section viewing-evaluation">
        <div>
          <p className="eyebrow">Din rådgiver på turen</p>
          <h2>Visningstur med norsk rådgiver</h2>
          <p>
            På visningstur i Spania møter du Freddy, vår norske eiendomsrådgiver med god kjennskap til det spanske boligmarkedet. Han hjelper deg med å vurdere boligene, bli kjent med områdene og få svar på spørsmålene som dukker opp underveis. Med en norsk rådgiver ved din side blir det enklere å forstå mulighetene og ta gode, informerte valg.
          </p>
          <p>
            <Link href="/om-oss">Les mer om oss</Link> og <Link href="/kundeomtaler">se kundeomtaler</Link>.
          </p>
        </div>
      </section>

      <section className="section viewing-shortlist">
        <div className="section-heading">
          <p className="eyebrow">Før du bestiller fly</p>
          <h2>Har du funnet en interessant bolig et annet sted</h2>
          <p>
            Du trenger ikke begrense deg til boligene du finner hos Zen Eco Homes. Har du sett en interessant bolig på Finn.no, Idealista eller hos en annen eiendomsmegler? Send oss lenken, så setter vi opp visning for deg og koordinerer den med resten av visningsturen.
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
          <h2>Fortell oss når du ønsker å komme på visningstur</h2>
          <p>Vi starter med område, budsjett og boligbruk og bygger en realistisk visningsplan derfra.</p>
        </div>
        <Link className="contact-button" href="/booking">Planlegg visningstur</Link>
      </section>

      <Footer />
    </main>
  );
}
