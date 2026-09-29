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
  Users,
} from "lucide-react";
import { CorporateHomeCalculator } from "@/components/CorporateHomeCalculator";
import { CorporateLeadForm } from "@/components/CorporateLeadForm";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { CARE_URL } from "@/lib/i18n";
import { corporateArticles } from "@/lib/corporate-content";

export const metadata: Metadata = {
  title: "Bedriftshytte i Spania | Zen Corporate Homes for bedrifter",
  description:
    "Bedriftshytte i Spania for norske bedrifter og organisasjoner. Få hjelp med modell, boligvalg, kjøp, drift og lokal oppfølging på Costa Blanca." ,
  keywords: [
    "bedriftshytte Spania",
    "firmahytte Spania",
    "bedriftsleilighet Spania",
    "bolig i Spania for ansatte",
    "medlemsbolig Spania",
    "firmahytte Costa Blanca",
  ],
  alternates: { canonical: "/bedriftshytte-spania" },
  openGraph: {
    title: "Zen Corporate Homes | Bedriftshytte i Spania",
    description:
      "Fra boligvalg og kjøp til lokal oppfølging: en strukturert B2B-løsning for bedrifter og organisasjoner som vil tilby bolig i Spania.",
    url: "https://www.zenecohomes.com/bedriftshytte-spania",
    type: "website",
  },
};

const products = [
  {
    icon: BriefcaseBusiness,
    label: "Ansattbolig",
    title: "Bedriftshytte for ansatte",
    text: "En leilighet eller villa som bedriften stiller til disposisjon etter tydelige regler og en rettferdig bookingmodell.",
    fit: "Typisk aktuelt for bedrifter med en bred brukergruppe.",
  },
  {
    icon: Building2,
    label: "Bedriftsvilla",
    title: "Større bolig for flere brukere",
    text: "For virksomheter som ønsker mer kapasitet, flere soverom og en bolig som kan fungere gjennom store deler av året.",
    fit: "Egnet når bruk, kapasitet og langsiktig eierskap veier tyngre enn lavest mulig inngangspris.",
  },
  {
    icon: Handshake,
    label: "Delt bedriftsbolig",
    title: "Felles løsning for flere bedrifter",
    text: "Vi kan utrede bolig og praktisk modell for flere mindre virksomheter som ønsker å dele en løsning.",
    fit: "Eierstruktur, booking og skatt må avklares konkret før kjøp.",
  },
  {
    icon: Users,
    label: "Medlemsbolig",
    title: "Medlemsbolig for foreninger",
    text: "En bolig organisasjonen kan gjøre tilgjengelig for medlemmer gjennom booking, trekning eller annen fordelingsmodell.",
    fit: "Medlemsordninger må vurderes separat fra skattereglene for bedriftshytter til ansatte.",
  },
];

const process = [
  ["01", "Behov og bruk", "Vi avklarer hvem som skal bruke boligen, ønsket kapasitet, bookingmodell og budsjett."],
  ["02", "Område og shortlist", "Vi snevrer inn Costa Blanca etter flytilgang, strand, helårsservice og praktisk drift."],
  ["03", "Økonomi", "Vi setter opp kjøpesum, forventet drift, bruksuker og et enkelt beslutningsgrunnlag for styre eller ledelse."],
  ["04", "Juridisk og skattemessig avklaring", "Kunden avklarer eierstruktur, skatt og regnskap med kvalifiserte rådgivere før bindende beslutning."],
  ["05", "Kjøp og overtakelse", "Vi følger eiendomsprosessen og koordinerer de lokale stegene rundt bolig og overtakelse."],
  ["06", "Drift etter kjøpet", "Keyholding, tilsyn, rengjøring og praktiske tjenester kan settes opp gjennom Zen Eco Homes Property Care."],
];

const faq = [
  {
    q: "Kan en bedriftshytte ligge i Spania?",
    a: "Ja. Skatteetatens Skatte-ABC beskriver at reglene for bedriftshytte også kan gjelde bedriftshytter i utlandet når vilkårene for et rimelig velferdstiltak er oppfylt.",
  },
  {
    q: "Er bruken alltid skattefri for de ansatte?",
    a: "Nei. Det avgjørende er blant annet at ordningen er reelt tilgjengelig på like vilkår for alle eller en betydelig gruppe ansatte, og at tiltaket samlet sett anses som rimelig.",
  },
  {
    q: "Må bedriften ha minst 10 ansatte?",
    a: "Skatteetaten bruker færre enn 10 personer med disposisjonsrett som et utgangspunkt for at fordelen kan bli skattepliktig. Det finnes unntak, og flere bedrifter kan eie en bedriftshytte sammen slik at 10 eller flere har rett til å disponere den. Hver modell må vurderes konkret.",
  },
  {
    q: "Kan arbeidsgiver betale flyreisen til bedriftshytten skattefritt?",
    a: "Skatteetatens Skatte-ABC sier at dekning av reisekostnader for privat bruk av bedriftshytte er skattepliktig. Reise og selve bruken av boligen må derfor behandles som separate spørsmål.",
  },
  {
    q: "Kan en forening tilby en bolig til medlemmene?",
    a: "Ja, en organisasjon kan etablere en medlemsordning, men skattereglene for bedriftshytte i arbeidsforhold kan ikke automatisk overføres til medlemsbruk. Struktur, vedtekter og økonomi bør vurderes særskilt.",
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

  return (
    <main className="corporate-page">
      <SiteHeader locale="no" />

      <section className="image-hero corporate-hero">
        <div className="corporate-hero-shade" />
        <div className="corporate-hero-inner">
          <p className="eyebrow">Zen Corporate Homes · Costa Blanca</p>
          <h1>En bedriftshytte i Spania som faktisk blir brukt</h1>
          <p>
            Vi hjelper norske bedrifter, foreninger og organisasjoner med å vurdere, finne, kjøpe og følge opp en moderne bolig på Costa Blanca — med en tydelig modell for bruk, økonomi, booking og lokal drift.
          </p>
          <div className="hero-actions">
            <a className="contact-button" href="#bedriftsvurdering">
              Få en kostnadsfri bedriftsvurdering <ArrowRight size={18} />
            </a>
            <a className="text-button light" href="#kalkulator">
              Beregn et eksempel
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
          <p className="eyebrow">Et varig ansatt- eller medlemsfordel</p>
          <h2>Fra tradisjonell firmahytte til en moderne bolig på Costa Blanca</h2>
        </div>
        <p>
          En bedriftshytte trenger ikke ligge på fjellet. For riktig virksomhet kan en bolig i Spania være et konkret ansattgode, et sted for ledersamlinger og et langsiktig eiendomsvalg. Vi starter med hvem som skal bruke boligen, hvordan den skal fordeles og hva virksomheten ønsker å oppnå — deretter finner vi eiendommen.
        </p>
      </section>

      <section className="section corporate-decision">
        <div className="section-heading">
          <p className="eyebrow">Hva kan boligen brukes til?</p>
          <h2>Én eiendom kan dekke flere behov gjennom året</h2>
          <p>
            Bruken bør være planlagt før kjøpet. Det gjør det lettere å velge riktig størrelse, beliggenhet,
            driftsnivå og bookingmodell.
          </p>
        </div>
        <div className="corporate-decision-grid">
          <div><BriefcaseBusiness /><strong>Ansattgode</strong><span>Ferieopphold eller lengre opphold som fordeles etter tydelige interne regler.</span></div>
          <div><Users /><strong>Ledelse og team</strong><span>Ledersamlinger, strategidager, onboarding eller mindre teamopphold.</span></div>
          <div><Handshake /><strong>Kunder og samarbeid</strong><span>Representasjon eller arbeidsopphold når virksomhetens rådgivere har avklart riktig bruk.</span></div>
          <div><Building2 /><strong>Medlemsfordel</strong><span>For foreninger og organisasjoner som ønsker en konkret, langsiktig medlemsfordel.</span></div>
        </div>
      </section>

      <section className="section corporate-products">
        <div className="section-heading">
          <p className="eyebrow">Fire norske bedriftsmodeller</p>
          <h2>Velg modellen etter hvem som skal bruke boligen</h2>
          <p>Ansatte, ledelse, flere samarbeidende bedrifter eller medlemmer krever ulike løsninger. Vi avklarer bruken først og matcher deretter riktig bolig.</p>
        </div>
        <div className="corporate-product-grid">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <article key={product.label}>
                <Icon size={26} />
                <span>{product.label}</span>
                <h3>{product.title}</h3>
                <p>{product.text}</p>
                <small>{product.fit}</small>
              </article>
            );
          })}
        </div>
      </section>

      <section className="corporate-calculator-section" id="kalkulator">
        <div className="corporate-section-copy">
          <p className="eyebrow">Bedriftshytte-kalkulator</p>
          <h2>Gjør tallene forståelige før dere tar neste steg</h2>
          <p>
            Juster kjøpesum, antall brukere, planlagte bruksuker og forventet drift. Kalkulatoren er ikke et investerings-, skatte- eller regnskapsregnestykke, men gir et enkelt første bilde som kan brukes i den interne vurderingen.
          </p>
        </div>
        <CorporateHomeCalculator />
      </section>

      <section className="section corporate-process">
        <div className="section-heading">
          <p className="eyebrow">Slik foregår det</p>
          <h2>Fra første vurdering til boligen er klar for bruk</h2>
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
          <p className="eyebrow">Skatt og likebehandling</p>
          <h2>Ordningen må bygges riktig fra starten</h2>
          <p>
            Skatteetatens Skatte-ABC for 2026 sier at bruk av bedriftshytte kan være skattefri når boligen er
            tilgjengelig slik at alle eller en betydelig gruppe ansatte har lik rett til å disponere den. Det
            gjelder også bedriftshytter i utlandet.
          </p>
          <p>
            Skatteetaten sier også at færre enn 10 personer med disposisjonsrett som utgangspunkt kan medføre
            skatteplikt, og anbefaler dokumentasjon av hvem som kan bruke boligen, hvordan bruken fordeles og den
            faktiske bruken.
          </p>
          <a
            className="text-button"
            href="https://oppslag.rettskilder.skatteetaten.no/rettskilder2/type/handboker/skatte-abc/gjeldende/skatteabc-V-4/skatteabc-V-4.001"
            target="_blank"
            rel="noopener noreferrer"
          >
            Les gjeldende Skatte-ABC hos Skatteetaten <ArrowRight size={16} />
          </a>
          <small>
            Zen Eco Homes gir ikke skatte- eller juridisk rådgivning. Endelig struktur bør kvalitetssikres av
            kundens norske og spanske fagpersoner.
          </small>
        </div>

        <div className="corporate-split-card corporate-care-card">
          <KeyRound size={28} />
          <p className="eyebrow">Etter kjøpet</p>
          <h2>Bedriften skal ikke måtte drifte en bolig i Spania fra Norge</h2>
          <p>
            Lokal oppfølging er en sentral del av konseptet. Zen Eco Homes Property Care kan brukes til
            nøkkelforvaltning, tilsyn og praktiske tjenester når boligen står tom eller bytter bruker.
          </p>
          <a className="contact-button" href={CARE_URL} target="_blank" rel="noopener noreferrer">
            Se Property Care <ArrowRight size={18} />
          </a>
        </div>
      </section>

      <section className="section corporate-decision">
        <div className="section-heading">
          <p className="eyebrow">Bedriftsvurderingen</p>
          <h2>Dere får et konkret grunnlag for å ta stilling til ideen</h2>
        </div>
        <div className="corporate-decision-grid">
          <div><LineChart /><strong>Økonomisk oversikt</strong><span>Aktuell kjøpesum, forventet drift, bruksuker og sammenlignbare alternativer.</span></div>
          <div><Users /><strong>Bruk og booking</strong><span>Hvem som skal bruke boligen, kapasitet og prinsipper for rettferdig fordeling.</span></div>
          <div><Building2 /><strong>Relevant boligshortlist</strong><span>Et begrenset utvalg som passer budsjett, kapasitet, område og faktisk bruk.</span></div>
          <div><KeyRound /><strong>Lokal drift</strong><span>Plan for nøkkelhold, tilsyn, rengjøring og praktisk oppfølging etter overtakelsen.</span></div>
        </div>
      </section>

      <section className="section corporate-knowledge" id="kunnskap">
        <div className="section-heading">
          <p className="eyebrow">Kunnskap for ledelse og HR</p>
          <h2>Alt dere bør vurdere før en bedriftshytte i Spania</h2>
          <p>
            Vi har samlet praktiske guider om økonomi, bruk, booking, drift, områdevalg og beslutningsgrunnlag.
            Artiklene er skrevet for norske bedrifter, foreninger og organisasjoner.
          </p>
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

      <section className="section corporate-faq">
        <div className="section-heading">
          <p className="eyebrow">Vanlige spørsmål</p>
          <h2>Bedriftshytte og medlemsbolig i Spania</h2>
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
          <p className="eyebrow">Neste steg</p>
          <h2>Få en kostnadsfri første vurdering for deres bedrift eller organisasjon</h2>
          <p>
            Fortell oss hvor mange som skal kunne bruke boligen, hvilket budsjett dere vurderer og hva dere ønsker å oppnå. Vi går gjennom behovet og kan deretter foreslå en egnet modell, aktuelle områder og et første utvalg boliger.
          </p>
          <div className="corporate-contact-note">
            <BriefcaseBusiness size={20} />
            <span>Ingen forpliktelse og ingen generell boligspam. Vi bruker opplysningene til å vurdere om konseptet passer deres virksomhet.</span>
          </div>
          <Link className="text-button" href="/booking">
            Book heller en kort samtale <ArrowRight size={16} />
          </Link>
        </div>
        <CorporateLeadForm />
      </section>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </main>
  );
}
