import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
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

export default function BuyingProcessPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Trenger jeg NIE for å kjøpe bolig i Spania?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja, NIE er normalt nødvendig for eiendomskjøp, skatt, bank og registrering i Spania.",
        },
      },
      {
        "@type": "Question",
        name: "Bør jeg bruke advokat ved boligkjøp i Spania?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja, det anbefales sterkt å bruke uavhengig spansk advokat som kontrollerer eiendomsrett, kontrakter, heftelser, skatter og lovlighet.",
        },
      },
      {
        "@type": "Question",
        name: "Hvor lang tid tar kjøpsprosessen i Spania?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Et vanlig kjøp kan ofte gjennomføres på 4–8 uker etter reservasjon, men dette avhenger av finansiering, dokumentasjon og juridisk kontroll.",
        },
      },
    ],
  };

  return (
    <main>
      <SiteHeader />
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
