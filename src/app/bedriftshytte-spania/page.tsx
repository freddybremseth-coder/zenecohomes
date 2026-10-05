import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  Handshake,
  KeyRound,
  LineChart,
  ShieldCheck,
  SunMedium,
  Users,
  Wifi,
} from "lucide-react";
import { CorporateHomeCalculator } from "@/components/CorporateHomeCalculator";
import { CorporateLeadForm } from "@/components/CorporateLeadForm";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { CARE_URL } from "@/lib/i18n";
import { corporateArticles } from "@/lib/corporate-content";

export const metadata: Metadata = {
  title: "Bedriftshytte i Spania | Firmahytte på Costa Blanca",
  description:
    "Vurder bedriftshytte eller firmabolig i Spania. Beregn kostnad og bruk, sammenlign arbeidsopphold med hotell og få beslutningsnotat til styret.",
  keywords: [
    "bedriftshytte i Spania",
    "firmahytte i Spania",
    "firmabolig i Spania",
    "bedriftsbolig Costa Blanca",
    "bolig for ansatte i Spania",
    "bedrift kjøpe bolig i Spania",
    "bedriftshytte for ansatte",
    "medlemsbolig Spania",
  ],
  alternates: { canonical: "/bedriftshytte-spania" },
  openGraph: {
    title: "Bedriftshytte i Spania | Zen Corporate Homes",
    description:
      "Fra idé og styreunderlag til boligvalg, kjøp, bookingmodell og lokal drift på Costa Blanca.",
    url: "https://www.zenecohomes.com/bedriftshytte-spania",
    type: "website",
  },
};

const process = [
  ["01", "Formål", "Hva skal boligen løse: ansattgode, medlemsfordel, samlinger, arbeidsopphold eller en kombinasjon?"],
  ["02", "Brukere", "Hvem skal ha tilgang, hvor mange skal bruke boligen, og hvordan skal ukene fordeles?"],
  ["03", "Kapasitet", "Vi avklarer antall soverom, bad, arbeidsplasser, fellesareal og praktiske behov."],
  ["04", "Økonomi", "Kjøpesum, kjøpskostnader, drift, kapitalkostnad og alternative overnattingskostnader settes inn i modellen."],
  ["05", "Område og shortlist", "Først når bruken er tydelig, velger vi område og aktuelle boliger på Costa Blanca."],
  ["06", "Kjøp og drift", "Vi følger kjøpsprosessen og kan sette opp lokal oppfølging gjennom Zen Eco Homes Property Care."],
];

const faq = [
  {
    q: "Hva koster en bedriftshytte i Spania?",
    a: "Det avhenger av kjøpesum, kjøpskostnader, årlig drift, kapitalkostnad, antall bruksuker og hvor lenge virksomheten planlegger å eie boligen. Kalkulatoren på siden viser et første scenario med disse forutsetningene hver for seg.",
  },
  {
    q: "Kan en norsk bedrift eie bolig i Spania?",
    a: "Ja, norske virksomheter kan kjøpe eiendom i Spania. Eierstruktur, skatt, regnskap og bruk bør avklares med kvalifiserte norske og spanske rådgivere før bindende beslutning.",
  },
  {
    q: "Kan en bedriftshytte i Spania være skattefri for ansatte?",
    a: "Det kan være mulig når ordningen oppfyller vilkårene for et rimelig velferdstiltak og er reelt tilgjengelig på like vilkår for alle eller en betydelig gruppe ansatte. Modellen må vurderes konkret.",
  },
  {
    q: "Må minst 10 ansatte ha disposisjonsrett?",
    a: "Skatteetatens Skatte-ABC bruker færre enn 10 personer med disposisjonsrett som et utgangspunkt for at fordelen kan bli skattepliktig. Det finnes nyanser og unntak, og flere virksomheter kan i enkelte modeller dele en løsning.",
  },
  {
    q: "Kan boligen brukes til styre- og ledersamlinger?",
    a: "Ja, boligen kan fungere godt for styrearbeid, ledermøter, strategisamlinger og prosjektuker. Formelle selskapsmøter må gjennomføres i tråd med norsk selskapsrett og selskapets vedtekter.",
  },
  {
    q: "Kan generalforsamlingen holdes fra Spania?",
    a: "Aksjeloven skiller mellom fysisk og elektronisk generalforsamling. Et fysisk møte skal som hovedregel holdes i kommunen der selskapet har forretningskontor, med mindre vedtektene eller særlige grunner åpner for annet. Elektronisk møte kan gjennomføres når lovens krav er oppfylt.",
  },
  {
    q: "Kan en forening leie ut boligen til medlemmene?",
    a: "En medlemsordning kan organiseres på flere måter, men betaling, utleie og eventuell turistbruk må vurderes særskilt etter lokale regler og organisasjonens struktur før kjøp.",
  },
  {
    q: "Hva skjer hvis virksomheten senere vil selge?",
    a: "Boligen er en eiendel med markedsverdi og kan selges senere. Kalkulatorens verdiutvikling er kun et scenario, ikke en garanti eller prognose.",
  },
];

export default function CorporateHomesPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Bedriftshytte og firmabolig i Spania",
    serviceType: "Rådgivning ved kjøp av bedriftshytte og firmabolig på Costa Blanca",
    provider: {
      "@type": "Organization",
      name: "Zen Eco Homes",
      url: "https://www.zenecohomes.com",
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Costa Blanca",
    },
    audience: {
      "@type": "Audience",
      audienceType: "Norske bedrifter, foreninger og medlemsorganisasjoner",
    },
    url: "https://www.zenecohomes.com/bedriftshytte-spania",
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Forside", item: "https://www.zenecohomes.com" },
      { "@type": "ListItem", position: 2, name: "Bedriftshytte i Spania", item: "https://www.zenecohomes.com/bedriftshytte-spania" },
    ],
  };

  return (
    <main className="corporate-page">
      <SiteHeader locale="no" />

      <section className="image-hero corporate-hero">
        <div className="corporate-hero-shade" />
        <div className="corporate-hero-inner">
          <p className="eyebrow">Zen Corporate Homes · Costa Blanca</p>
          <h1>En bedriftshytte i Spania som faktisk blir brukt</h1>
          <p>
            Ferieuker for ansatte og medlemmer, teamsamlinger med arbeidsro og et fast sted for ledelse og styre.
            Vi hjelper dere fra første vurdering og styreunderlag til boligvalg, kjøp og lokal oppfølging etter overtakelsen.
          </p>
          <div className="hero-actions">
            <a className="contact-button" href="#kalkulator">
              Beregn deres modell <ArrowRight size={18} />
            </a>
            <a className="text-button light" href="#bedriftsvurdering">
              Be om beslutningsnotat
            </a>
          </div>
          <div className="corporate-hero-points">
            <span><CheckCircle2 size={16} /> Bedrifter</span>
            <span><CheckCircle2 size={16} /> Foreninger</span>
            <span><CheckCircle2 size={16} /> Medlemsorganisasjoner</span>
          </div>
        </div>
      </section>

      <section className="corporate-intro">
        <div>
          <p className="eyebrow">Hvorfor Costa Blanca?</p>
          <h2>Fra tradisjonell firmahytte til en bolig som kan brukes gjennom året</h2>
        </div>
        <p>
          En bolig på Costa Blanca kan fungere både som feriebolig for ansatte eller medlemmer og som fast base for mindre arbeids- og ledersamlinger. Poenget er ikke bare å kjøpe en bolig i Spania, men å velge en eiendom som passer måten organisasjonen faktisk skal bruke den på.
        </p>
      </section>

      <section className="section corporate-decision">
        <div className="section-heading">
          <p className="eyebrow">Et år med boligen</p>
          <h2>Planlegg bruken før dere velger eiendommen</h2>
          <p>En tydelig årsmodell gjør det enklere å velge riktig størrelse, beliggenhet, kapasitet og driftsnivå.</p>
        </div>
        <div className="corporate-year-grid">
          <article><strong>30</strong><span>uker til ansatte eller medlemmer</span></article>
          <article><strong>6</strong><span>uker til teamsamlinger og prosjektarbeid</span></article>
          <article><strong>4</strong><span>uker til ledelse og styre</span></article>
          <article><strong>12</strong><span>uker buffer, fleksibilitet og vedlikehold</span></article>
        </div>
        <p className="corporate-example-note">Eksempelet viser én mulig modell. Fordelingen tilpasses virksomhetens faktiske behov før boligjakten starter.</p>
      </section>

      <section className="section corporate-decision">
        <div className="section-heading">
          <p className="eyebrow">Hva får virksomheten igjen?</p>
          <h2>Et ansattgode, en møtebase og en eiendel i samme løsning</h2>
        </div>
        <div className="corporate-decision-grid">
          <div><Users /><strong>Et gode folk husker</strong><span>Tilgang til en bolig i Spania er konkret, synlig og lett å forstå som del av employer branding og medlemsverdi.</span></div>
          <div><BriefcaseBusiness /><strong>Fast base for samlinger</strong><span>Strategi, onboarding og prosjektarbeid kan gjennomføres i kjente omgivelser uten å starte hotell- og møteplanlegging på nytt hver gang.</span></div>
          <div><Building2 /><strong>Virksomheten eier eiendelen</strong><span>Boligkjøp er ikke automatisk billigere enn hotell, men virksomheten står igjen med en eiendel som senere kan selges.</span></div>
          <div><KeyRound /><strong>Lokal drift kan settes bort</strong><span>Nøkkelhold, tilsyn, klargjøring og praktiske tjenester kan organiseres lokalt når ingen fra virksomheten er til stede.</span></div>
        </div>
      </section>

      <section className="section corporate-products">
        <div className="section-heading">
          <p className="eyebrow">Hva gjør en bolig egnet?</p>
          <h2>Vi vurderer bruken – ikke bare utsikten</h2>
          <p>En bedriftshytte med mange brukere stiller andre krav enn en vanlig privat feriebolig.</p>
        </div>
        <div className="corporate-product-grid">
          <article><Wifi size={26} /><span>Arbeid</span><h3>Stabilt nett og gode arbeidsflater</h3><p>For teamsamlinger og lederopphold må boligen fungere som arbeidssted, ikke bare feriebolig.</p><small>Fiber, arbeidsbord, skjermmuligheter og nok strømuttak vurderes tidlig.</small></article>
          <article><Users size={26} /><span>Kapasitet</span><h3>Nok soverom, bad og fellesareal</h3><p>Boligen må tåle hyppige brukerbytter og samtidig gi plass til både fellesskap og privatliv.</p><small>Kapasiteten bør matche den vanligste bruken, ikke bare maksimum.</small></article>
          <article><SunMedium size={26} /><span>Beliggenhet</span><h3>Enkel reise og helårsservice</h3><p>Kort vei til Alicante lufthavn, restauranter, dagligvarer og tjenester betyr mer når mange skal bruke boligen.</p><small>Området vurderes ut fra logistikk og helårsbruk, ikke bare høysesong.</small></article>
          <article><KeyRound size={26} /><span>Drift</span><h3>Enkel å følge opp når den står tom</h3><p>Innredning, tekniske løsninger og vedlikeholdsbehov bør tåle mange brukere og perioder uten eier til stede.</p><small>Care-planen bør være en del av beslutningen før kjøp.</small></article>
        </div>
      </section>

      <section className="corporate-calculator-section" id="kalkulator">
        <div className="corporate-section-copy">
          <p className="eyebrow">Bedriftshytte-kalkulator</p>
          <h2>Regn på modellen før dere ser på konkrete boliger</h2>
          <p>
            Hovedtallet viser kostnad før eventuell verdiendring. Hotellalternativet bygges av konkrete bedriftsopphold: hvor mange turer eller samlinger dere har per år, hvor mange personer som deltar, antall netter og pris per person per natt. Ferie- og medlemsuker holdes helt utenfor hotellregnestykket.
          </p>
        </div>
        <CorporateHomeCalculator />
      </section>

      <section className="section corporate-process">
        <div className="section-heading">
          <p className="eyebrow">Fra idé til beslutning</p>
          <h2>Det første steget er ikke å se på boliger</h2>
          <p>Vi avklarer formål, bruk og økonomi først. Deretter lager vi en shortlist som faktisk passer modellen.</p>
        </div>
        <div className="corporate-process-grid">
          {process.map(([number, title, text]) => (
            <article key={number}>
              <strong>{number}</strong>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="corporate-split">
        <div className="corporate-split-card corporate-tax-card">
          <ShieldCheck size={28} />
          <p className="eyebrow">Skatt, juss og likebehandling</p>
          <h2>Ordningen må bygges riktig fra starten</h2>
          <p>
            Skatteetatens Skatte-ABC beskriver at bruk av bedriftshytte kan være skattefri når vilkårene for et rimelig velferdstiltak er oppfylt og ordningen er reelt tilgjengelig for alle eller en betydelig gruppe ansatte.
          </p>
          <p>
            Uker som brukes som premie, privat fordel eller annen særbruk bør holdes tydelig adskilt fra den ordinære ordningen. Eierstruktur, selskapsmøter, skatt og regnskap må kvalitetssikres av kvalifiserte rådgivere.
          </p>
          <a
            className="text-button"
            href="https://oppslag.rettskilder.skatteetaten.no/rettskilder2/type/handboker/skatte-abc/gjeldende/skatteabc-V-4/skatteabc-V-4.001"
            target="_blank"
            rel="noopener noreferrer"
          >
            Les gjeldende Skatte-ABC hos Skatteetaten <ArrowRight size={16} />
          </a>
          <small>Zen Eco Homes gir ikke skatte-, juridisk eller regnskapsrådgivning.</small>
        </div>

        <div className="corporate-split-card corporate-care-card">
          <KeyRound size={28} />
          <p className="eyebrow">Etter kjøpet</p>
          <h2>Bedriften skal ikke måtte drifte en bolig i Spania fra Norge</h2>
          <p>
            Zen Eco Homes Property Care kan brukes til nøkkelforvaltning, tilsyn, klargjøring og praktiske tjenester mellom oppholdene.
          </p>
          <a className="contact-button" href={CARE_URL} target="_blank" rel="noopener noreferrer">
            Se Property Care <ArrowRight size={18} />
          </a>
        </div>
      </section>

      <section className="section corporate-decision">
        <div className="section-heading">
          <p className="eyebrow">Hva får styret?</p>
          <h2>Et beslutningsgrunnlag før dere bruker tid på boligjakt</h2>
        </div>
        <div className="corporate-decision-grid">
          <div><LineChart /><strong>Økonomisk modell</strong><span>Kjøpesum, kjøpskostnader, drift, kapitalkostnad, bruksuker og alternative overnattingskostnader.</span></div>
          <div><Users /><strong>Bruk og booking</strong><span>Forslag til hvem som skal ha tilgang, kapasitet og prinsipper for rettferdig fordeling.</span></div>
          <div><Building2 /><strong>Krav til bolig</strong><span>Størrelse, beliggenhet, soverom, arbeidsmuligheter og driftsbehov før shortlist lages.</span></div>
          <div><KeyRound /><strong>Lokal driftsmodell</strong><span>Plan for nøkkelhold, tilsyn, klargjøring og praktisk oppfølging etter overtakelsen.</span></div>
        </div>
      </section>

      <section className="section corporate-knowledge" id="kunnskap">
        <div className="section-heading">
          <p className="eyebrow">Kunnskap for ledelse, HR og styre</p>
          <h2>Spørsmålene dere bør avklare før en bedriftshytte i Spania</h2>
          <p>Praktiske guider om økonomi, booking, drift, skatt, områdevalg og beslutningsgrunnlag.</p>
        </div>
        <div className="corporate-article-grid">
          {corporateArticles.slice(0, 6).map((article) => (
            <article className="corporate-article-card" key={article.slug}>
              <span>{article.readingTime}</span>
              <h3>{article.title}</h3>
              <p>{article.excerpt}</p>
              <Link className="text-button" href={`/bedriftshytte-spania/${article.slug}`}>
                Les artikkelen <ArrowRight size={16} />
              </Link>
            </article>
          ))}
        </div>
        <div className="center-action corporate-knowledge-action">
          <Link className="contact-button" href="/bedriftshytte-spania/guider">
            Se alle Corporate-guider <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <section className="corporate-intro">
        <div>
          <p className="eyebrow">For rådgivere og organisasjoner</p>
          <h2>Har dere kunder eller medlemmer som kan være aktuelle?</h2>
        </div>
        <div>
          <p>
            Zen Corporate Homes har en egen partnerkanal for norske regnskapsmiljøer, advokatfirmaer,
            HR-/rekrutteringsselskaper, bedriftsrådgivere og medlemsorganisasjoner.
          </p>
          <Link className="text-button" href="/bedriftshytte-spania/partnere">
            Se partnerprogrammet <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <section className="section corporate-faq">
        <div className="section-heading">
          <p className="eyebrow">Vanlige spørsmål</p>
          <h2>Bedriftshytte, firmabolig og medlemsbolig i Spania</h2>
        </div>
        <div className="corporate-faq-list">
          {faq.map((item) => (
            <details key={item.q}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="corporate-contact" id="bedriftsvurdering">
        <div className="corporate-contact-copy">
          <p className="eyebrow">Klar til å legge det fram for styret?</p>
          <h2>Be om et beslutningsnotat med deres egne tall</h2>
          <p>
            Vi setter opp et første beslutningsgrunnlag med kjøpesum, drift, ferie-/medlemsbruk, konkrete bedriftsopphold, alternative hotellkostnader og anbefalt bruk- og bookingmodell. Har dere brukt kalkulatoren, følger tallene og oppholdene automatisk med.
          </p>
          <div className="corporate-contact-note">
            <BriefcaseBusiness size={20} />
            <span>Kostnadsfritt og uforpliktende. Ingen generell boligspam.</span>
          </div>
          <Link className="text-button" href="/booking">
            Book heller en kort samtale <ArrowRight size={16} />
          </Link>
        </div>
        <CorporateLeadForm />
      </section>

      <Footer />

      {[faqJsonLd, serviceJsonLd, breadcrumbJsonLd].map((data, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
    </main>
  );
}
