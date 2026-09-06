import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { homeLanguageLinks } from "@/lib/i18n";
import { processSteps } from "@/lib/content";

export const metadata = {
  title: "Kjøpsprosess for bolig i Spania | Trygg guide for nordmenn",
  description:
    "Slik fungerer kjøpsprosessen i Spania: behov, finansiering, NIE, visning, reservasjon, advokat, notar, kontrakt og overtakelse.",
  alternates: {
    canonical: "/kjopsprosessen",
  },
  openGraph: {
    title: "Kjøpsprosess for bolig i Spania | Zen Eco Homes",
    description:
      "Få oversikt over prosessen fra første boligsøk til overtakelse med norsk rådgivning og trygg struktur.",
    url: "https://www.zenecohomes.com/kjopsprosessen",
    type: "website",
  },
};

const faq = [
  {
    q: "Trenger jeg NIE for å kjøpe bolig i Spania?",
    a: "Ja. NIE (Número de Identificación de Extranjero) er utlendingens skattenummer og er normalt nødvendig for eiendomskjøp, skatt, bank og registrering. Vi hjelper deg å skaffe det.",
  },
  {
    q: "Bør jeg bruke advokat ved boligkjøp i Spania?",
    a: "Ja, det anbefales sterkt å bruke en uavhengig spansk advokat (abogado) som kontrollerer eiendomsrett, heftelser, lovlighet, kontrakter og skatter før du signerer noe.",
  },
  {
    q: "Hva koster det å kjøpe bolig i Spania – utover selve prisen?",
    a: "Regn med om lag 11–14 % i omkostninger på toppen av kjøpesummen. På bruktbolig betaler du overføringsskatt (ITP), som i Valencia-regionen typisk er rundt 10 %, pluss notar, registrering og advokat. På nybygg betaler du 10 % IVA (moms) + 1,5 % stempelavgift (AJD) i tillegg til notar og registrering.",
  },
  {
    q: "Kan nordmenn få boliglån i en spansk bank?",
    a: "Ja. Spanske banker gir ofte lån til utenlandske kjøpere, vanligvis med 60–70 % belåning av kjøpesummen (verdivurdering) for ikke-residenter. Renten og vilkårene avhenger av bank, inntekt og profil.",
  },
  {
    q: "Hva er forskjellen på nybygg og bruktbolig når det gjelder avgifter?",
    a: "Nybygg (førstegangssalg fra utbygger) har 10 % IVA + 1,5 % AJD. Bruktbolig har overføringsskatt ITP i stedet (typisk rundt 10 % i Valencia-regionen). Nybygg selges ofte med betalingsplan underveis i byggeperioden.",
  },
  {
    q: "Hvordan fungerer reservasjon og kontrakt?",
    a: "Prosessen går normalt fra en reservasjonsavtale (tar boligen av markedet), til en depositumskontrakt (contrato de arras, ofte ~10 %), og til slutt signering av skjøtet (escritura) hos notar der resten betales og nøklene overleveres.",
  },
  {
    q: "Hvor lang tid tar kjøpsprosessen i Spania?",
    a: "Et vanlig kjøp gjennomføres ofte på 4–8 uker etter reservasjon, avhengig av finansiering, dokumentasjon og juridisk kontroll. Nybygg følger byggeperioden og kan ta lengre tid.",
  },
  {
    q: "Hvilke løpende kostnader har en bolig i Spania?",
    a: "De vanligste er kommunal eiendomsskatt (IBI), fellesutgifter (comunidad) hvis boligen ligger i en urbanisasjon, forsikring, strøm og vann, samt en årlig ikke-resident-skatt for utenlandske eiere som ikke er bosatt i Spania.",
  },
];

export default function BuyingProcessPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <main>
      <SiteHeader languageLinks={homeLanguageLinks("no")} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <section className="page-hero compact-hero">
        <p className="eyebrow">Kjøpsprosessen i Spania</p>
        <h1>Trygt kjøp av bolig og nybygg i Spania</h1>
        <p>
          Vi følger deg gjennom behov, områdevalg, finansiering, NIE, visning, reservasjon, advokat,
          kontrakt, notar og overtakelse.
        </p>
        <div className="hero-actions">
          <Link className="text-button light" href="/magasin/kjopsprosess-bolig-i-spania">
            Les komplett guide <ArrowRight size={17} />
          </Link>
          <Link className="text-button light" href="/magasin/finansiering-notar-nie-boligkjop-spania">
            Finansiering, notar og NIE
          </Link>
        </div>
      </section>
      <section className="section split">
        <div className="timeline">
          {processSteps.map((step, index) => (
            <div className="timeline-item" key={step}>
              <span>{index + 1}</span>
              <p>{step}</p>
            </div>
          ))}
        </div>
        <div className="feature-panel">
          <div>
            <CheckCircle2 /> Strukturert prosess
          </div>
          <div>
            <CheckCircle2 /> Dokumenter samlet
          </div>
          <div>
            <CheckCircle2 /> Rådgivning på norsk
          </div>
          <div>
            <CheckCircle2 /> RealtyFlow-oppfølging
          </div>
        </div>
      </section>
      <section className="section proof-section">
        <div className="section-heading">
          <p className="eyebrow">Unngå vanlige feil</p>
          <h2>Kunnskap før reservasjon</h2>
          <p>
            Før du reserverer bolig bør du forstå markedspris, tilgjengelighet, dokumentasjon, betalingsplan og
            hvilke forbehold som bør inn i prosessen.
          </p>
        </div>
        <div className="proof-grid">
          <article>
            <strong>01</strong>
            <h3>Ikke stol blindt på portaler</h3>
            <p>Gamle annonser og duplikater kan gi feil bilde av markedet.</p>
            <Link className="text-button" href="/magasin/idealista-finn-ikke-alltid-til-a-stole-pa">
              Les mer <ArrowRight size={16} />
            </Link>
          </article>
          <article>
            <strong>02</strong>
            <h3>Velg riktig rådgiver</h3>
            <p>En god rådgiver jobber for dine interesser før, under og etter kjøpet.</p>
            <Link className="text-button" href="/magasin/hvorfor-god-eiendomsradgiver-er-viktig">
              Les mer <ArrowRight size={16} />
            </Link>
          </article>
          <article>
            <strong>03</strong>
            <h3>Sammenlign områder</h3>
            <p>Riktig område påvirker livskvalitet, kostnader, utleie og videresalg.</p>
            <Link className="text-button" href="/magasin/omradeguide-eiendomskjop-i-spania">
              Les mer <ArrowRight size={16} />
            </Link>
          </article>
        </div>
      </section>
      <section className="section proof-section">
        <div className="section-heading">
          <p className="eyebrow">Vanlige spørsmål</p>
          <h2>Kjøpsprosessen i Spania – spørsmål og svar</h2>
          <p>De vanligste spørsmålene nordmenn stiller om NIE, kostnader, finansiering og prosessen.</p>
        </div>
        <div className="proof-grid inland-faq">
          {faq.map((item) => (
            <article key={item.q}>
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section">
        <div>
          <p className="eyebrow">Neste steg</p>
          <h2>Start med en kort behovsavklaring</h2>
          <p>Fortell oss hva du ser etter, så kan vi foreslå områder og prosjekter.</p>
        </div>
        <ContactForm source="buying-process" />
      </section>
      <Footer />
    </main>
  );
}
