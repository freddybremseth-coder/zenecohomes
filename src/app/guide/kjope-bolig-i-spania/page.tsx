import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarDays, CheckCircle2, Clock, UserRound } from "lucide-react";

import { BuyerMatchQuiz } from "@/components/BuyerMatchQuiz";
import { Footer } from "@/components/Footer";
import { PropertyCard } from "@/components/PropertyCard";
import { SiteHeader } from "@/components/SiteHeader";
import { homeLanguageLinks } from "@/lib/i18n";
import { getProperties } from "@/lib/realtyflow";

const BASE = "https://www.zenecohomes.com";
const PUBLISHED = "2026-09-29";
const UPDATED = "2026-09-29";

export const metadata: Metadata = {
  title: { absolute: "Kjøpe bolig i Spania (2026) | Guide og erfaringer" },
  description:
    "Skal du kjøpe bolig eller leilighet i Spania? Se kjøpsprosessen steg for steg, hva du bør avklare før visning og hvordan Zen Eco Homes kan hjelpe.",
  alternates: { canonical: "/guide/kjope-bolig-i-spania" },
  openGraph: {
    title: "Kjøpe bolig i Spania (2026) | Guide og erfaringer",
    description:
      "En praktisk guide for deg som vil kjøpe hus, leilighet eller feriebolig i Spania – fra områdevalg og visning til advokat, notar og overtakelse.",
    url: `${BASE}/guide/kjope-bolig-i-spania`,
    type: "article",
    publishedTime: PUBLISHED,
    modifiedTime: UPDATED,
  },
};

const buyingSteps = [
  {
    title: "Avklar behov, budsjett og område",
    body: "Bestem hvordan boligen skal brukes, hvilket totalbudsjett du har og hvilken hverdag du ønsker. Områdevalg bør komme før enkeltboliger.",
  },
  {
    title: "Finn aktuelle boliger og dra på visning",
    body: "Sammenlign ikke bare boligene, men også avstander, servicetilbud, sesongliv, solforhold og hvordan området fungerer når du faktisk skal bruke boligen.",
  },
  {
    title: "Få eiendommen kontrollert juridisk",
    body: "La kvalifisert juridisk rådgiver kontrollere eierskap, heftelser, tillatelser og relevant dokumentasjon før du binder deg videre.",
  },
  {
    title: "Ordne NIE og avklar finansiering",
    body: "De praktiske og økonomiske forutsetningene bør være på plass tidlig, særlig dersom finansiering eller bankforhold kan påvirke tidslinjen.",
  },
  {
    title: "Reserver boligen og inngå kjøpekontrakt",
    body: "Når riktig bolig er funnet, går prosessen normalt videre med reservasjon og kontrakt. Sørg for at vilkårene er forstått før betaling.",
  },
  {
    title: "Signer hos notar og gjennomfør betalingen",
    body: "Ved sluttføringen formaliseres kjøpet, restbeløpet betales og skjøtedokumentene signeres hos notar.",
  },
  {
    title: "Registrer eierskapet og overta boligen",
    body: "Etter signering følger registrering, overtakelse og praktiske oppgaver som strøm, vann, forsikring, nøkkelhold og løpende drift.",
  },
];

const propertyTypes = [
  {
    title: "Kjøpe hus i Spania",
    body: "Et hus kan gi mer plass, uteareal og privatliv, men innebærer ofte mer vedlikehold og større ansvar for uteområder, tekniske installasjoner og løpende drift.",
  },
  {
    title: "Kjøpe leilighet i Spania",
    body: "Leilighet kan passe godt når du ønsker en lettstelt feriebolig nær strand, byliv og service. Vurder felleskostnader, sameieregler, parkering, uteplass og hvordan bygget fungerer utenfor høysesong.",
  },
  {
    title: "Villa eller finca",
    body: "Villa og finca gir ofte mer privatliv og tomt. Her blir adkomst, teknisk tilstand, lovlighet, vann, strøm, vedlikehold og avstander ekstra viktige i vurderingen.",
  },
  {
    title: "Nybygg eller bruktbolig",
    body: "Nybygg og bruktbolig har ulik risikoprofil, betalingsflyt og dokumentasjon. Nybygg bør vurderes mot utbygger, bankgaranti, leveranse og spesifikasjon; bruktbolig krever særlig grundig kontroll av faktisk tilstand og historikk.",
  },
];

const faq = [
  {
    q: "Kan nordmenn kjøpe bolig i Spania?",
    a: "Ja. Norske kjøpere kan eie bolig i Spania. Du trenger blant annet NIE-nummer og må forholde deg til spansk kontrakts-, skatte- og registreringsprosess.",
  },
  {
    q: "Hva koster det å kjøpe bolig i Spania?",
    a: "Kjøpesummen er ikke totalkostnaden. Skatter, notar, register, juridisk bistand og andre kostnader kommer i tillegg. Beløpet avhenger blant annet av om boligen er ny eller brukt og hvor den ligger.",
  },
  {
    q: "Hvordan finansierer man bolig i Spania?",
    a: "Noen kjøper med egenkapital, andre bruker finansiering i Spania eller i hjemlandet. Finansieringen bør avklares tidlig fordi bankens krav, verdsettelse og behandlingstid kan påvirke kjøpet.",
  },
  {
    q: "Hvor lang tid tar det å kjøpe bolig i Spania?",
    a: "Det varierer med boligtype, finansiering, juridiske kontroller og om boligen er ferdigstilt. Et nybygg under oppføring følger gjerne prosjektets betalings- og leveranseplan, mens en ferdig bolig kan gå raskere når dokumentasjonen er klar.",
  },
  {
    q: "Er det lurt å kjøpe leilighet i Spania?",
    a: "Det kommer an på hvordan boligen skal brukes. For mange er leilighet et praktisk valg fordi vedlikeholdet er enklere, men sameieregler, felleskostnader, beliggenhet og ønsket bruk bør vurderes før kjøp.",
  },
];

export default async function BuyPropertySpainGuide() {
  const properties = (await getProperties(6, "zeneco")).slice(0, 3);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Kjøpe bolig i Spania (2026) – Dette må du vite",
    description:
      "Praktisk guide til boligkjøp i Spania: områdevalg, boligsøk, visning, juridisk kontroll, NIE, finansiering, kontrakt, notar og overtakelse.",
    datePublished: PUBLISHED,
    dateModified: UPDATED,
    author: {
      "@type": "Person",
      name: "Freddy Bremseth",
      url: `${BASE}/om-oss/freddy`,
    },
    publisher: {
      "@type": "Organization",
      name: "Zen Eco Homes",
      url: BASE,
    },
    mainEntityOfPage: `${BASE}/guide/kjope-bolig-i-spania`,
  };

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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <section className="page-hero compact-hero">
        <p className="eyebrow">Komplett kjøperguide</p>
        <h1>Kjøpe bolig i Spania (2026) – Dette må du vite</h1>
        <p>
          Å kjøpe bolig i Spania blir enklere når du tar beslutningene i riktig rekkefølge. Start med behov,
          totalbudsjett og område – og bruk boligsøket først når du vet hvilken hverdag du faktisk ser etter.
        </p>
        <div className="hero-actions" aria-label="Artikkelinformasjon">
          <Link className="text-button light" href="/om-oss/freddy">
            <UserRound size={17} /> Freddy Bremseth
          </Link>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
            <CalendarDays size={17} /> Oppdatert 29. september 2026
          </span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
            <Clock size={17} /> ca. 12 min lesing
          </span>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 48 }}>
        <article className="rich-text">
          <p style={{ fontSize: "1.16rem", lineHeight: 1.9 }}>
            Kjøpe bolig i Spania er for mange både en økonomisk beslutning og et livsstilsvalg. Jeg har selv
            vært gjennom prosessen som privat kjøper og arbeider i dag med kjøpere som vurderer hus,
            leiligheter, villaer og nybygg. Det viktigste jeg har lært er at en god boligjakt starter lenge før
            første visning.
          </p>

          <h2>Hvordan kjøpe feriebolig i Spania?</h2>
          <p>
            Den tryggeste måten å kjøpe feriebolig eller annen eiendom i Spania på er å dele prosessen i tydelige
            steg og kontrollere økonomi, område og dokumentasjon før du forplikter deg.
          </p>
          <ol style={{ display: "grid", gap: 18, paddingLeft: 24 }}>
            {buyingSteps.map((step) => (
              <li key={step.title}>
                <strong>{step.title}:</strong> {step.body}
              </li>
            ))}
          </ol>

          <h2>Viktig før du begynner boligjakten</h2>
          <p>
            Tre avklaringer sparer mye tid: det spanske boligmarkedet fungerer annerledes enn det norske,
            kjøpesummen er ikke den totale kostnaden, og riktig område er minst like viktig som selve boligen.
          </p>
          <ul>
            <li><strong>Markedet:</strong> tilgjengelighet og annonser kan endre seg raskt, og samme bolig kan markedsføres av flere aktører.</li>
            <li><strong>Totalbudsjettet:</strong> legg inn kjøpskostnader, møblering, reise, finansiering og løpende drift før du setter maksimal kjøpesum.</li>
            <li><strong>Området:</strong> vurder flyplass, strand, skole, helårsservice, klima, transport og hvordan stedet fungerer når du ikke er på ferie.</li>
          </ul>
          <p>
            <Link className="text-button" href="/omrader">
              Sammenlign områder før du velger bolig <ArrowRight size={16} />
            </Link>
          </p>

          <h2>Hus, leilighet eller villa – hva passer deg?</h2>
          <p>
            Boligtypen bør følge bruken. En feriebolig som står tom deler av året har andre behov enn et
            permanent hjem, og en bolig som også skal leies ut må vurderes annerledes enn en bolig kun til eget bruk.
          </p>
          <div className="proof-grid" style={{ marginTop: 28 }}>
            {propertyTypes.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>

          <h2>Slik finner du boliger i Spania</h2>
          <p>
            Boligportaler er nyttige for å forstå områder og prisnivå, men de bør ikke være eneste kilde.
            Tilgjengelighet, pris og dokumentasjon må bekreftes før du planlegger en visningstur rundt en bolig.
          </p>
          <p>
            <Link className="text-button" href="/magasin/idealista-finn-ikke-alltid-til-a-stole-pa">
              Les hvorfor boligportaler ikke alltid viser hele markedet <ArrowRight size={16} />
            </Link>
          </p>

          <h3>Hva bør du se etter i en boligannonse?</h3>
          <ul>
            <li>Nøyaktig beliggenhet og hva som faktisk finnes i gang- eller kjøreavstand.</li>
            <li>Om pris, tilgjengelighet og boligtype fortsatt er oppdatert.</li>
            <li>Hva som er inkludert: parkering, bod, hvitevarer, basseng, uteareal og andre tilvalg.</li>
            <li>Felleskostnader og regler dersom boligen ligger i et sameie eller anlegg.</li>
            <li>Om bilder, planløsning og arealtall faktisk gjelder den enheten som er til salgs.</li>
          </ul>

          <h2>Nødvendige steg når du kjøper eiendom i Spania</h2>
          <p>
            Når du har valgt bolig, blir prosessen mer formell. Da bør juridisk kontroll, finansiering og
            dokumentasjon gå foran ønsket om å få handelen gjennomført raskest mulig.
          </p>

          <h3>Visningstur</h3>
          <p>
            En god visningstur bør være en planlagt beslutningsreise, ikke en maraton av tilfeldige objekter.
            Vi snevrer inn område og behov på forhånd, bekrefter tilgjengelighet og bygger en kortere shortlist.
          </p>
          <p><Link className="text-button" href="/visningstur">Se hvordan vi planlegger visningstur <ArrowRight size={16} /></Link></p>

          <h3>Få eiendommen juridisk kontrollert</h3>
          <p>
            Bruk kvalifisert juridisk rådgiver til å kontrollere eierskap, heftelser, tillatelser og relevante
            dokumenter før kjøpet blir endelig.
          </p>
          <p><Link className="text-button" href="/kjopsprosess/juridiske-fallgruver-boligkjop-spania">Les om juridiske fallgruver <ArrowRight size={16} /></Link></p>

          <h3>Skaff NIE og avklar finansiering</h3>
          <p>
            NIE er et sentralt identifikasjonsnummer i den spanske kjøpsprosessen. Finansiering og bankforhold
            bør avklares tidlig nok til at de ikke stopper reservasjon, kontrakt eller sluttføring.
          </p>
          <p><Link className="text-button" href="/kjopsprosess/nie-skattenummer-spania">Les om NIE-nummer <ArrowRight size={16} /></Link></p>

          <h3>Reservasjon, kontrakt, notar og overtakelse</h3>
          <p>
            Når juridiske og økonomiske forutsetninger er avklart, går kjøpet normalt videre fra reservasjon til
            kontrakt, sluttoppgjør hos notar, registrering og overtakelse. Detaljene varierer med boligtype og
            avtale, så dokumentene må vurderes konkret i hvert kjøp.
          </p>

          <h2>Hva koster det å kjøpe hus eller leilighet i Spania?</h2>
          <p>
            Du bør alltid budsjettere med mer enn kjøpesummen. Skatter, notar, register, advokat,
            finansieringskostnader og eventuelle praktiske etableringskostnader kommer i tillegg. Nybygg og
            bruktbolig behandles ulikt, og enkelte kostnader varierer regionalt.
          </p>
          <p><Link className="text-button" href="/guide/omkostninger-nybygg-spania">Se guiden til omkostninger <ArrowRight size={16} /></Link></p>

          <h2>Vanlige feil mange gjør når de kjøper spansk bolig</h2>
          <ul>
            <li>De forelsker seg i en bolig før de har vurdert området.</li>
            <li>De bruker hele budsjettet på kjøpesummen og glemmer kostnader og drift.</li>
            <li>De planlegger visning rundt annonser uten å bekrefte tilgjengelighet.</li>
            <li>De lar tidspress gjøre at juridisk eller teknisk kontroll blir for svak.</li>
            <li>De sammenligner pris, men ikke totalverdi, beliggenhet og hva som faktisk er inkludert.</li>
            <li>De vurderer utleie først etter kjøpet i stedet for før.</li>
          </ul>

          <h2>Mine erfaringer med å kjøpe bolig i Spania</h2>
          <p>
            Jeg har selv opplevd hvor mye tid som går tapt når annonser er ufullstendige, svarene er uklare og
            visningsplanen bygges før de viktigste spørsmålene er besvart. Da familien min skulle kjøpe egen
            eiendom, lette vi blant annet etter land og oliveneiendom og måtte kontrollere langt mer enn bare
            pris og bilder.
          </p>
          <p>
            Det er en viktig grunn til at Zen Eco Homes jobber med område og behov først. Har du bare noen få
            dager i Spania, bør de brukes på de alternativene som faktisk kan passe – ikke på objekter som kunne
            vært sortert bort på forhånd.
          </p>
          <p><Link className="text-button" href="/om-oss/freddy">Les mer om Freddy og erfaringen bak Zen Eco Homes <ArrowRight size={16} /></Link></p>

          <h2>Slik hjelper Zen Eco Homes deg med boligkjøpet</h2>
          <p>
            Vi starter med behovskartlegging, områdevalg og totalbudsjett. Deretter søker og sammenligner vi
            relevante boliger, organiserer målrettede visninger og følger deg videre gjennom kjøpsprosessen.
          </p>
          <p><Link className="text-button" href="/kjopsprosessen">Se hele kjøpsprosessen hos Zen Eco Homes <ArrowRight size={16} /></Link></p>
        </article>
      </section>

      {properties.length > 0 && (
        <section className="section zeneco-selection">
          <div className="section-heading">
            <p className="eyebrow">Aktuelle boliger</p>
            <h2>Se et utvalg før du åpner hele boligsøket</h2>
            <p>Dette er et lite utsnitt av tilgjengelige boliger. Bruk boligsøket for hele markedet og filtrer på område, boligtype og budsjett.</p>
          </div>
          <div className="property-grid editorial-property-grid">
            {properties.map((property, index) => (
              <PropertyCard key={property.id || property.ref || index} property={property} priority={index < 2} />
            ))}
          </div>
          <div className="center-action">
            <Link className="contact-button" href="/eiendommer">Se alle boliger <ArrowRight size={18} /></Link>
          </div>
        </section>
      )}

      <BuyerMatchQuiz />

      <section className="section proof-section">
        <div className="section-heading">
          <p className="eyebrow">Vanlige spørsmål</p>
          <h2>Spørsmål om å kjøpe bolig i Spania</h2>
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
          <p className="eyebrow">Få rådgivning</p>
          <h2>Fortell oss hvordan du ønsker å bruke boligen</h2>
          <p>Vi starter med behov, område og budsjett og lager et mer målrettet søk før du planlegger visning.</p>
        </div>
        <Link className="contact-button" href="/booking">
          Book en uforpliktende boligprat <ArrowRight size={18} />
        </Link>
      </section>

      <Footer />
    </main>
  );
}
