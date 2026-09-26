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

export const metadata: Metadata = {
  title: "Bedriftshytte i Spania | Bolig for ansatte og medlemmer",
  description:
    "Zen Corporate Homes hjelper bedrifter, foreninger og organisasjoner med å finne, kjøpe og følge opp bolig på Costa Blanca for ansatte eller medlemmer.",
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
    label: "Employee Home",
    title: "Bedriftshytte for ansatte",
    text: "En leilighet eller villa som bedriften stiller til disposisjon etter tydelige regler og en rettferdig bookingmodell.",
    fit: "Typisk aktuelt for bedrifter med en bred brukergruppe.",
  },
  {
    icon: Building2,
    label: "Corporate Villa",
    title: "Større bolig for flere brukere",
    text: "For virksomheter som ønsker mer kapasitet, flere soverom og en bolig som kan fungere gjennom store deler av året.",
    fit: "Egnet når bruk, kapasitet og langsiktig eierskap veier tyngre enn lavest mulig inngangspris.",
  },
  {
    icon: Handshake,
    label: "Shared Corporate Home",
    title: "Felles løsning for flere bedrifter",
    text: "Vi kan utrede bolig og praktisk modell for flere mindre virksomheter som ønsker å dele en løsning.",
    fit: "Eierstruktur, booking og skatt må avklares konkret før kjøp.",
  },
  {
    icon: Users,
    label: "Member Home",
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
          <h1>Gi ansatte eller medlemmer et sted i Spania</h1>
          <p>
            Vi hjelper bedrifter, foreninger og organisasjoner med å finne, kjøpe og følge opp en moderne bolig
            som kan brukes av mange — med en strukturert modell for boligvalg, økonomi, drift og booking.
          </p>
          <div className="hero-actions">
            <a className="contact-button" href="#bedriftsvurdering">
              Få en bedriftsvurdering <ArrowRight size={18} />
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
          <p className="eyebrow">Et annet ansattgode</p>
          <h2>Fra norsk firmahytte til en moderne bolig på Costa Blanca</h2>
        </div>
        <p>
          En bedriftshytte trenger ikke ligge på fjellet. For riktig virksomhet kan en bolig i Spania være både
          et langsiktig eiendomsvalg og et konkret gode som ansatte faktisk kan bruke. Zen Eco Homes bygger
          løsningen rundt brukerne først — ikke rundt en tilfeldig boligannonse.
        </p>
      </section>

      <section className="section corporate-products">
        <div className="section-heading">
          <p className="eyebrow">Fire modeller</p>
          <h2>Velg struktur etter hvem boligen skal være for</h2>
          <p>Vi starter med brukergruppen og beslutningsmodellen, og finner deretter bolig som passer.</p>
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
          <p className="eyebrow">Corporate Home Calculator</p>
          <h2>Gjør investeringen forståelig for ledelsen</h2>
          <p>
            Juster kjøpesum, antall brukere og forventet drift. Kalkulatoren er ikke et investerings- eller
            skatteregnestykke, men gir et enkelt første bilde før vi lager et mer komplett beslutningsgrunnlag.
          </p>
        </div>
        <CorporateHomeCalculator />
      </section>

      <section className="section corporate-process">
        <div className="section-heading">
          <p className="eyebrow">Fra idé til bruk</p>
          <h2>Én prosess fra styrebordet til nøkkelen i Spania</h2>
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
          <p className="eyebrow">Beslutningsgrunnlag</p>
          <h2>Vi kan gjøre mer enn å sende boligannonser</h2>
        </div>
        <div className="corporate-decision-grid">
          <div><LineChart /><strong>Økonomi</strong><span>Kjøpesum, drift, bruk og sammenlignbare alternativer.</span></div>
          <div><Users /><strong>Brukermodell</strong><span>Ansatte, medlemmer, kapasitet og prinsipper for fordeling.</span></div>
          <div><Building2 /><strong>Boligmatch</strong><span>Shortlist basert på mål, ikke tusen tilfeldige objekter.</span></div>
          <div><KeyRound /><strong>Drift</strong><span>Praktisk oppfølging etter overtakelsen.</span></div>
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
          <h2>Få en konkret vurdering for deres bedrift eller organisasjon</h2>
          <p>
            Fortell oss hvor mange som skal kunne bruke boligen, omtrent hvilket budsjett dere vurderer og hva
            dere ønsker å oppnå. Vi kan deretter lage en første modell og en relevant shortlist.
          </p>
          <div className="corporate-contact-note">
            <BriefcaseBusiness size={20} />
            <span>Henvendelser her merkes som B2B-leads i Zen Eco Homes-flyten.</span>
          </div>
          <Link className="text-button" href="/booking">
            Eller book en samtale direkte <ArrowRight size={16} />
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
