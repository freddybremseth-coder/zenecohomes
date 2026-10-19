import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CorporateHomeCalculator } from "@/components/CorporateHomeCalculator";
import { CorporateLeadForm } from "@/components/CorporateLeadForm";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { CARE_URL } from "@/lib/i18n";
import { corporateArticles } from "@/lib/corporate-content";

export const metadata: Metadata = {
  title: "Bedriftshytte i Spania for norske virksomheter | Zen Eco Homes",
  description: "Vurder bedriftshytte i Spania for ansatte eller medlemmer. Se ulike modeller, kjøpskostnader, skatt, lokal drift og beregn budsjettet.",
  alternates: {canonical:"/bedriftshytte-spania"},
};
const benefits = [
  ["Et gode folk husker", "Gi ansatte tilgang til en feriebolig i Spania som kan brukes til avslapning og kvalitetstid med familien. En bedriftshytte kan være et verdifullt ansattgode som bidrar til å styrke trivsel og tilhørighet."],
  ["Fast base for samlinger", "Bruk boligen som base for mindre samlinger, lengre arbeidsopphold eller tid sammen utenfor de vanlige rammene. Med riktig tilrettelegging kan boligen bli en nyttig ressurs for både samarbeid og fellesskap."],
  ["En medlemsfordel som skaper verdi", "Foreninger og organisasjoner kan tilby medlemmer tilgang til en bolig i Spania som en del av medlemsfordelene. Det kan gi medlemmene nye muligheter og gjøre medlemskapet mer attraktivt."],
  ["Del eierskapet med andre bedrifter", "Ønsker dere fordelene ved en egen feriebolig uten å stå for hele investeringen alene? Flere bedrifter kan gå sammen om eierskap og bruk, og dele både kostnader og ansvar etter en avtalt modell."],
];
const steps = [
  ["01 Avklar behovene", "Vi starter med å forstå hva dere ønsker å oppnå, hvem som skal bruke boligen og hvordan den skal benyttes gjennom året. Sammen ser vi på ulike løsninger for bruk, booking og eierskap, slik at modellen passer virksomhetens behov og forutsetninger."],
  ["02 Få oversikt over økonomien", "Vi setter opp et beslutningsgrunnlag med aktuelle kostnader, budsjett og boligmuligheter, slik at dere kan vurdere hva som er realistisk før dere går videre."],
  ["03 Finn riktig bolig", "Når behov og økonomiske rammer er avklart, hjelper vi dere med å finne aktuelle boliger som passer virksomhetens ønsker og forutsetninger. Vi bistår dere gjennom kjøpsprosessen frem til dere får nøklene i hånden."],
  ["04 Rådgivning uten kostnad for kunden", "Det skal være enkelt å utforske mulighetene. Derfor er rådgivningen og hjelpen vi gir i forbindelse med kjøpsprosessen, kostnadsfri og uforpliktende for dere."],
  ["05 Zen Eco Care – oppfølging etter kjøpet", "Også etter at nøklene er overlevert, kan vi hjelpe dere videre. Gjennom Zen Eco Care kan vi tilby tilleggstjenester for oppfølging og ivaretakelse av boligen."],
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
  const faqJsonLd = {"@context":"https://schema.org","@type":"FAQPage",mainEntity:faq.map(item=>({"@type":"Question",name:item.q,acceptedAnswer:{"@type":"Answer",text:item.a}}))};
  return <main className="corporate-page">
    <SiteHeader locale="no" />
    <section className="image-hero corporate-hero">
      <div className="corporate-hero-shade" />
      <div className="corporate-hero-inner">
        <h1>Bedriftshytte i Spania for norske virksomheter</h1>
        <p>Gi ansatte, ledere eller medlemmer muligheten til å bruke en bolig i Spania. Zen Eco Homes hjelper dere med å utforske mulighetene og finne en løsning som passer bedriftens behov.</p>
        <p>Her kan dere lese om ulike modeller for bedriftshytte i Spania, hva dere bør vite om kostnader og skatt, hvordan dere kan organisere bruken av boligen, og hva som kreves for kjøp og lokal drift.</p>
        <div className="hero-actions"><Link className="contact-button" href="/booking">Book en uforpliktende prat <ArrowRight size={18}/></Link><a className="text-button light" href="#kalkulator">Se hva en bedriftshytte kan koste</a></div>
      </div>
    </section>
    <section className="section corporate-decision">
      <div className="section-heading"><h2>En bedriftshytte - mange muligheter</h2><p>En bedriftshytte i Spania er en mulighet til å gi ansatte, ledere eller medlemmer noe litt utenom det vanlige. Se for dere en feriebolig på Costa Blanca, der sol, varme og nye opplevelser blir en del av et ansattgode dere kan tilby. Det kan skape verdi langt utover selve oppholdet – enten målet er å belønne ansatte, styrke samholdet eller gi medlemmene en ekstra fordel.</p><p>Her er noen måter en bolig i Spania kan bli en verdifull ressurs for virksomheten.</p></div>
      <div className="corporate-decision-grid">{benefits.map(([title,copy])=><article key={title} style={{padding:"1.5rem",borderRadius:"1rem",background:"var(--surface, #fff)",boxShadow:"0 6px 22px #172f4012"}}><h3>{title}</h3><p>{copy}</p></article>)}</div>
    </section>
    <section className="section corporate-process">
      <div className="section-heading"><h2>Dette hjelper Zen Eco Homes med</h2><p>Fra den første idéen til nøklene i hånden – og videre derfra. Zen Eco Homes hjelper dere gjennom hele prosessen, fra behovsavklaring og boligvalg til kjøp og lokal oppfølging gjennom Zen Eco Care når boligen er deres.</p></div>
      <div className="corporate-process-grid">{steps.map(([title,copy])=><article key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div>
    </section>
    <section className="corporate-calculator-section" id="kalkulator">
      <div className="corporate-section-copy"><h2>Hva koster en bedriftshytte i Spania</h2><p>For å finne ut hvilke muligheter virksomheten har, er det lurt å starte med totalbudsjettet. Boligprisen er bare én del av regnestykket. I tillegg kommer kjøpsomkostninger, løpende eierkostnader og eventuell praktisk oppfølging av boligen. Disse utgiftene påvirker hvor mye dere faktisk kan bruke på selve boligen.</p><p>Hva dere får for budsjettet, avhenger blant annet av hvor i Spania dere ønsker å kjøpe, hvilken boligtype dere ser etter, og hvilken størrelse og standard dere ønsker. En leilighet i et etablert boligområde vil for eksempel ha en annen pris enn en større villa med privat basseng. Derfor er det viktig å se boligprisen i sammenheng med både totalbudsjettet og virksomhetens behov.</p><p>Med vår budsjettkalkulator kan dere beregne en veiledende boligpris, få en første oversikt over kostnadene og sammenligne med hva tilsvarende opphold på hotell kan koste.</p></div>
      <CorporateHomeCalculator />
    </section>
    <section className="section corporate-products"><div className="section-heading"><h2>Sammen finner vi riktig bedriftshytte i Spania</h2><p>En bedriftshytte skal dekke virksomhetens behov over tid. Derfor er det viktig å tenke gjennom hvordan boligen skal brukes. Svarene gir et tydeligere bilde av hvilken bolig som vil passe virksomheten – og hvilke egenskaper dere bør prioritere når dere skal velge.</p></div>
      <div className="corporate-product-grid">{[["Formål og bruk","Hva ønsker dere å oppnå med boligen, og hvem skal kunne bruke den?"],["Kapasitet og fasiliteter","Hvor mange skal kunne bo der samtidig, og hvilke fasiliteter er viktige for den planlagte bruken?"],["Beliggenhet","Er det viktigst med kort vei til flyplass, strender, restauranter, aktiviteter eller gode arbeidsforhold?"]].map(([t,d])=><article key={t}><h3>{t}</h3><p>{d}</p></article>)}</div>
    </section>
    <section className="section corporate-decision"><div className="section-heading"><h2>Ordningen må bygges riktig fra starten</h2><p>En bedriftshytte i Spania kan være et verdifullt gode for ansatte, men det er viktig å avklare skatteregler, eierskap og bruk før virksomheten bestemmer seg for å kjøpe. Hvordan ordningen organiseres og praktiseres, har betydning for den skattemessige behandlingen.</p></div>
      <h3>Skatt og bruk av bedriftshytten</h3><p>Bruk av bedriftshytte kan på visse vilkår være skattefri for ansatte når den regnes som et rimelig velferdstiltak og er reelt tilgjengelig for alle eller en betydelig gruppe ansatte. Det er derfor viktig å planlegge hvem som skal kunne bruke boligen, hvordan oppholdene fordeles, og hvordan ordningen dokumenteres.</p>
      <p>Les mer i guiden <Link href="/bedriftshytte-spania/hva-er-en-bedriftshytte-i-spania">Bedriftshytte i Spania: Slik fungerer det for norske bedrifter</Link>.</p>
      <h3>Eierskap og skattemessige forhold</h3><p>Valg av eierstruktur og hvordan boligen skal brukes, kan få betydning for både skatt og regnskap. Virksomheten bør derfor få den planlagte løsningen vurdert av kvalifiserte rådgivere før kjøpet gjennomføres.</p>
      <p>I guiden <Link href="/bedriftshytte-spania/kan-ansatte-bruke-bedriftseid-bolig-i-spania">Kan ansatte bruke bedriftseid bolig i Spania? Regler og praksis</Link> kan dere lese mer om skattebehandling, likebehandling, booking og dokumentasjon.</p>
      <p>Zen Eco Homes bistår med eiendomsvalg og kjøpsprosessen, men erstatter ikke juridisk, skattemessig eller regnskapsmessig rådgivning.</p>
    </section>
    <section className="section corporate-knowledge" id="kunnskap"><div className="section-heading"><h2>Lær mer om bedriftshytte i Spania</h2><p>Det er flere forhold å sette seg inn i når virksomheten vurderer å kjøpe bolig i Spania. I guidene våre får dere mer kunnskap om mulighetene, reglene og de praktiske vurderingene som kan hjelpe dere med å ta gode beslutninger.</p></div>
      <div className="corporate-article-grid">{corporateArticles.slice(0,3).map(article=><article className="corporate-article-card" key={article.slug}><span>{article.readingTime}</span><h3>{article.title}</h3><p>{article.excerpt}</p><Link className="text-button" href={`/bedriftshytte-spania/${article.slug}`}>Les guiden <ArrowRight size={16}/></Link></article>)}</div>
      <div className="center-action corporate-knowledge-action"><Link className="contact-button" href="/bedriftshytte-spania/guider">Se alle guidene for bedrifter <ArrowRight size={18}/></Link></div>
    </section>
    <section className="corporate-split"><div className="corporate-split-card corporate-care-card"><h2>Zen Eco Care – oppfølging av boligen etter kjøpet</h2><p>Når virksomheten eier en bolig i Spania, er det viktig at den blir godt ivaretatt også mellom oppholdene. Med Zen Eco Care kan dere få hjelp med praktisk oppfølging og tilsyn av boligen, slik at det blir enklere å eie og administrere en eiendom fra Norge.</p><p>Vi kan blant annet tilby regelmessig boligtilsyn, nøkkeloppbevaring, klargjøring før ankomst, rengjøring og oppfølging av basseng og hage. Tjenestene tilpasses boligen og behovene deres, slik at dere kan velge den oppfølgingen som passer virksomheten best.</p><a className="contact-button" href={CARE_URL}>Les mer om Zen Eco Care <ArrowRight size={18}/></a></div></section>
    <section className="section corporate-decision"><div className="section-heading"><h2>Neste steg for deres virksomhet</h2><p>Enten dere er i startfasen eller allerede har konkrete planer, hjelper vi dere videre. Zen Eco Homes gir råd gjennom hele prosessen – fra behovsavklaring og vurdering av ulike løsninger til gjennomgang av budsjett og aktuelle boliger.</p><p>Book en uforpliktende prat for å utforske mulighetene, eller send oss en e-post dersom dere har spørsmål. Sammen finner vi ut hva som kan passe for deres virksomhet.</p><Link className="contact-button" href="/booking">Ta kontakt <ArrowRight size={18}/></Link></div></section>
    <section className="section corporate-faq"><div className="section-heading"><h2>FAQ</h2></div><div className="corporate-faq-list">{faq.map(item=><details key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>)}</div></section>
    <section className="corporate-intro"><div><h2>Har dere kunder eller medlemmer som kan være aktuelle?</h2></div><div><p>Zen Eco Homes har en egen partnerkanal for norske regnskapsmiljøer, advokatfirmaer, HR-/rekrutteringsselskaper, bedriftsrådgivere og medlemsorganisasjoner.</p><Link className="contact-button" href="/bedriftshytte-spania/partnere">Se partnerprogrammet <ArrowRight size={18}/></Link></div></section>
    <section className="corporate-contact" id="bedriftsvurdering"><div className="corporate-contact-copy"><h2>Få en detaljert kostnadsoversikt på e-post</h2><p>Fyll inn kontaktinformasjon for en mer utfyllende rapport med beregninger, forutsetninger og kostnadsoversikt. Har dere brukt kalkulatoren, følger tallene med.</p></div><CorporateLeadForm /></section>
    <Footer/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqJsonLd)}}/>
  </main>;
}
