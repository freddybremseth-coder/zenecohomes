import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { BuyerMatchQuiz } from "@/components/BuyerMatchQuiz";
import { homeLanguageLinks } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Kjøpe bolig i Spania (2026): Guide og erfaringer",
  description: "Skal du kjøpe bolig i Spania? Se kjøpsprosessen, kostnader, NIE, finansiering, boligtyper, visning og råd før du reserverer.",
  alternates: { canonical: "/guide/kjope-bolig-i-spania" },
};

const steps = [
  "Avklar behov, budsjett og område",
  "Finn aktuelle boliger og dra på visning",
  "Få eiendommen kontrollert juridisk",
  "Ordne NIE-nummer og finansiering",
  "Reserver boligen og inngå kjøpekontrakt",
  "Signer hos notar og gjennomfør betalingen",
  "Registrer eierskapet og overta boligen",
];

const faq = [
  ["Kan nordmenn kjøpe bolig i Spania?", "Ja. Nordmenn kan kjøpe fast eiendom i Spania. Du trenger normalt NIE-nummer og bør bruke uavhengig juridisk bistand før du binder deg."],
  ["Hva koster det å kjøpe bolig i Spania?", "Kjøpesummen er bare én del av totalen. Skatter, notar, registrering, advokat og eventuelle finansieringskostnader må tas med i budsjettet."],
  ["Hvordan finansiere kjøp av bolig i Spania?", "Finansiering kan skje med egenkapital, norsk finansiering eller spansk bank. Avklar låneramme og dokumentkrav tidlig."],
  ["Hvor lang tid tar det å kjøpe bolig i Spania?", "Tiden varierer med boligtype, finansiering og dokumentkontroll. Bruktbolig kan ofte gjennomføres raskere enn nybygg som følger en bygge- og betalingsplan."],
];

export default function BuyInSpainGuidePage() {
  return (
    <main>
      <SiteHeader languageLinks={homeLanguageLinks("no")} />
      <section className="page-hero compact-hero">
        <p className="eyebrow">Oppdatert 29. september 2026 · Av Freddy Bremseth</p>
        <h1>Kjøpe bolig i Spania (2026) – dette må du vite</h1>
        <p>
          Å kjøpe bolig i Spania blir langt enklere når du starter med område, totalbudsjett og en tydelig prosess.
          Denne guiden samler stegene fra første boligjakt til notar, overtakelse og oppfølging.
        </p>
        <div className="hero-actions">
          <Link className="contact-button" href="/eiendommer">Se boliger <ArrowRight size={17} /></Link>
          <Link className="text-button light" href="/booking">Book rådgivning</Link>
          <Link className="text-button light" href="/om-oss/freddy">Om forfatteren</Link>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Kort forklart</p>
          <h2>Hvordan kjøpe feriebolig i Spania?</h2>
          <p>Prosessen kan deles inn i sju hovedsteg. Rekkefølgen gjør det lettere å unngå feilkjøp og uventede kostnader.</p>
        </div>
        <div className="proof-grid">
          {steps.map((step, index) => (
            <article key={step}><strong>{String(index + 1).padStart(2,"0")}</strong><h3>{step}</h3></article>
          ))}
        </div>
      </section>

      <section className="section split">
        <div>
          <p className="eyebrow">Før boligjakten</p>
          <h2>Tre ting du bør avklare først</h2>
          <div className="check-list">
            <span><CheckCircle2 size={18}/> Det spanske boligmarkedet fungerer annerledes enn det norske.</span>
            <span><CheckCircle2 size={18}/> Kjøpesummen er ikke det samme som totalkostnaden.</span>
            <span><CheckCircle2 size={18}/> Velg område før du velger selve boligen.</span>
          </div>
          <p>
            Sammenlign kyst, by og innland ut fra bruk gjennom året, reisevei, servicetilbud og budsjett.
          </p>
          <Link className="text-button" href="/guide/omradeguide-eiendomskjop-i-spania">Les områdeguiden <ArrowRight size={16}/></Link>
        </div>
        <div>
          <p className="eyebrow">Boligtype</p>
          <h2>Hus, leilighet, villa eller nybygg?</h2>
          <p>
            Leilighet kan være lettstelt og sentralt. Villa gir mer privatliv og uteplass. Nybygg gir ofte moderne standard
            og forutsigbar betalingsplan, mens bruktbolig kan gi andre beliggenheter og mer forhandlingsrom.
          </p>
          <Link className="text-button" href="/eiendommer">Se boliger til salgs <ArrowRight size={16}/></Link>
        </div>
      </section>

      <section className="section proof-section">
        <div className="section-heading">
          <p className="eyebrow">Kjøpsreisen</p>
          <h2>Nødvendige steg når du kjøper eiendom i Spania</h2>
          <p>Visning, juridisk kontroll, NIE, finansiering, reservasjon, kontrakt, notar og registrering må henge sammen.</p>
        </div>
        <div className="proof-grid">
          <article><h3>Visningstur</h3><p>Planlegg få, relevante visninger fremfor å fylle dagene med tilfeldige boliger.</p><Link className="text-button" href="/visningstur">Slik fungerer visningstur</Link></article>
          <article><h3>Juridisk kontroll</h3><p>Få eierskap, heftelser, tillatelser og kontraktsgrunnlag kontrollert før du binder deg.</p><Link className="text-button" href="/kjopsprosess/juridiske-fallgruver-boligkjop-spania">Les om juridiske fallgruver</Link></article>
          <article><h3>NIE og finansiering</h3><p>Avklar NIE, bank og finansiering tidlig slik at praktiske forhold ikke stopper kjøpet.</p><Link className="text-button" href="/kjopsprosess/nie-skattenummer-spania">Les om NIE</Link></article>
        </div>
      </section>

      <section className="section">
        <div className="section-heading"><p className="eyebrow">Boligmatch</p><h2>Finn et bedre utgangspunkt før du ser på enkeltboliger</h2></div>
        <BuyerMatchQuiz />
      </section>

      <section className="section proof-section">
        <div className="section-heading"><p className="eyebrow">Vanlige spørsmål</p><h2>Kjøpe bolig i Spania – FAQ</h2></div>
        <div className="proof-grid">
          {faq.map(([q,a]) => <article key={q}><h3>{q}</h3><p>{a}</p></article>)}
        </div>
      </section>

      <section className="contact-section">
        <div><p className="eyebrow">Neste steg</p><h2>Vil du ha hjelp til område, bolig og kjøpsprosess?</h2><p>Start med en uforpliktende behovsavklaring.</p></div>
        <Link className="contact-button" href="/booking">Få rådgivning <ArrowRight size={18}/></Link>
      </section>
      <Footer />
    </main>
  );
}
