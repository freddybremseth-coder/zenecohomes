import type { Metadata } from "next";
import { SeoLandingView } from "@/components/SeoLandingView";
import type { SeoLandingPage } from "@/lib/seoLandingPages";

const page: SeoLandingPage = {
  slug: "eiendomsradgiver-spania",
  title: "Eiendomsrådgiver Spania",
  eyebrow: "Rådgivning før salg",
  hero: "Norsk eiendomsrådgiver i Spania med kjøperens behov i sentrum",
  description:
    "Få hjelp til å velge område, sammenligne moderne nybygg og prosjekter, forstå totalpris og planlegge neste steg før du reserverer. Zen Eco Homes har hovedfokus på moderne boliger, men vurderer også andre alternativer når de passer kunden bedre.",
  seoTitle: "Eiendomsrådgiver Spania | Norsk rådgivning ved boligkjøp",
  seoDescription:
    "Norsk eiendomsrådgiver i Spania. Få hjelp med områdevalg, moderne nybygg, prosjektvurdering, kostnader, visninger og trygg kjøpsprosess.",
  primaryCta: { label: "Be om en boligprat", href: "/booking" },
  secondaryCta: { label: "Sammenlign områder", href: "/omrader" },
  sections: [
    {
      heading: "Rådgivning starter før boligjakten",
      body: [
        "Det spanske eiendomsmarkedet kan være uoversiktlig. Samme bolig kan markedsføres av flere aktører, tilgjengelighet kan endre seg raskt og to prosjekter med lik pris kan være svært forskjellige når beliggenhet, spesifikasjon og totale kostnader sammenlignes.",
        "Zen Eco Homes starter derfor med hvordan du vil bruke boligen, totalbudsjett, område og praktiske behov. Først deretter gir det mening å snevre inn markedet til en kort liste.",
      ],
      bullets: [
        "Hovedfokus på moderne nybygg, villaer, leiligheter og prosjekter.",
        "Områdevalg før du bruker tid på tilfeldige visninger.",
        "Sammenligning av pris, spesifikasjon, betalingsplan og alternativer.",
        "Bruktbolig vurderes når den objektivt passer behovene bedre, men er ikke hovedproduktet.",
      ],
    },
    {
      heading: "En rådgiver skal også kunne sortere bort",
      body: [
        "Verdien ligger ikke i å vise flest mulig boliger. Den ligger i å redusere utvalget, finne manglende informasjon og forklare hvorfor et prosjekt eller område passer – eller ikke passer – før du bruker tid og penger på en visningstur.",
        "Juridiske, skattemessige og tekniske kontroller skal utføres av de relevante fagpersonene. Eiendomsrådgivningen hjelper deg å holde oversikt og stille riktige spørsmål gjennom prosessen.",
      ],
      bullets: [
        "Effektiv shortlist og geografisk visningsplan.",
        "Realistisk totalpris, ikke bare markedsført kjøpesum.",
        "Hva som er inkludert og hvilke tilvalg som kommer i tillegg.",
        "Utleie og videresalg vurdert ut fra faktisk bruk og beliggenhet.",
      ],
    },
  ],
  faq: [
    {
      question: "Hva gjør en eiendomsrådgiver i Spania?",
      answer:
        "En eiendomsrådgiver kan hjelpe med behovsavklaring, områdevalg, shortlist, sammenligning av prosjekter og boliger, kostnadsforståelse, visningsplan og koordinering av neste steg med relevante aktører.",
    },
    {
      question: "Selger Zen Eco Homes bare nybygg?",
      answer:
        "Hovedfokuset er moderne nybygg og moderne boliger. Dersom en bruktbolig klart passer en kundes behov bedre, kan den også vurderes slik at kunden ikke må starte hele prosessen hos en annen aktør.",
    },
    {
      question: "Er eiendomsrådgiver det samme som advokat?",
      answer:
        "Nei. Juridiske kontroller skal gjøres av kvalifisert spansk advokat. Rådgiverrollen handler om bolig- og områdevalg, beslutningsstøtte, sammenligning og koordinering gjennom kjøpsreisen.",
    },
  ],
  related: [
    { label: "Om Freddy Bremseth", href: "/om-freddy" },
    { label: "Sammenlign områder", href: "/omrader" },
    { label: "Kjøpsprosessen", href: "/kjopsprosessen" },
    { label: "Se moderne boliger", href: "/eiendommer" },
  ],
};

export const metadata: Metadata = {
  title: page.seoTitle,
  description: page.seoDescription,
  alternates: {
    canonical: "/eiendomsradgiver-spania",
    languages: {
      "nb-NO": "https://www.zenecohomes.com/eiendomsradgiver-spania",
      en: "https://www.zenecohomes.com/en/property-advisor-spain",
      "de-DE": "https://www.zenecohomes.com/de/immobilienberater-spanien",
      "es-ES": "https://www.zenecohomes.com/es/asesor-inmobiliario-espana",
      "x-default": "https://www.zenecohomes.com/eiendomsradgiver-spania",
    },
  },
};

export default function PropertyAdvisorSpainPage() {
  return (
    <SeoLandingView
      page={page}
      locale="no"
      eq={{
        no: "eiendomsradgiver-spania",
        en: "property-advisor-spain",
        de: "immobilienberater-spanien",
        es: "asesor-inmobiliario-espana",
      }}
    />
  );
}
