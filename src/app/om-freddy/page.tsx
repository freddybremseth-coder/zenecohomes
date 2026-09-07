import Image from "next/image";
import Link from "next/link";
import { CalendarClock, MessageCircle, ShieldCheck } from "lucide-react";

import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { Testimonials } from "@/components/Testimonials";
import { homeLanguageLinks } from "@/lib/i18n";

export const metadata = {
  title: "Om Freddy Bremseth | Norsk, uavhengig boligrådgiver på Costa Blanca",
  description:
    "Møt Freddy Bremseth – norsk, uavhengig boligrådgiver bosatt på Costa Blanca. Trygt boligkjøp i Spania på norsk, fra første samtale til utlevert nøkkel.",
  alternates: { canonical: "/om-freddy" },
  openGraph: {
    title: "Om Freddy Bremseth | Zen Eco Homes",
    description:
      "Norsk, uavhengig boligrådgiver på Costa Blanca. Trygt boligkjøp i Spania – på norsk, fra visning til nøkkel.",
    url: "https://www.zenecohomes.com/om-freddy",
    type: "profile",
    images: [{ url: "https://www.zenecohomes.com/assets/freddy-bremseth.jpg", alt: "Freddy Bremseth" }],
  },
};

const cases = [
  {
    title: "Ekteparet som styrte unna det forsinkede prosjektet",
    body: "Et ektepar i 50-årene ønsket en moderne leilighet nær stranden, med et budsjett rundt €450 000. De var i ferd med å binde seg til et prosjekt i Torrevieja som viste tegn til forsinkelse. Vi tok en uavhengig gjennomgang av papirene, og fant i stedet en energieffektiv leilighet i Finestrat med bankgaranti på plass fra dag én. Resultatet: en tryggere handel – og en god natts søvn gjennom hele byggeperioden.",
  },
  {
    title: "Familien som fant roen i innlandet",
    body: "En norsk familie var lei av kø, støy og høye priser langs kysten, og drømte om plass, utsikt og et ekte spansk nabolag. Vi så innover i landet – mot Biar og Villena – og fant en bolig med god standard, kort vei til flyplass, og olivenlunder som nærmeste nabo. For familier som prioriterer plass og helårskvalitet fremfor strandnærhet, er innlandet ofte den best bevarte hemmeligheten på Costa Blanca.",
  },
  {
    title: "Kjøperen som slapp å bekymre seg for boligen mellom besøkene",
    body: "En kjøper som bare skulle bruke boligen deler av året, var usikker på hvem som skulle se til den resten av tiden. Etter kjøpet tok vi hånd om det praktiske gjennom nøkkelhåndteringen vår: tilsyn, nøkler ved besøk og håndtering av småting som dukker opp. Trygghet fra dag én – også når du selv er hjemme i Norge.",
  },
];

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Freddy Bremseth",
  jobTitle: "Uavhengig boligrådgiver",
  worksFor: { "@type": "Organization", name: "Zen Eco Homes", url: "https://www.zenecohomes.com" },
  address: { "@type": "PostalAddress", addressLocality: "Biar", addressRegion: "Alicante", addressCountry: "ES" },
  knowsLanguage: ["no", "en", "es"],
  image: "https://www.zenecohomes.com/assets/freddy-bremseth.jpg",
  url: "https://www.zenecohomes.com/om-freddy",
  sameAs: ["https://www.freddybremseth.com"],
};

export default function OmFreddyPage() {
  return (
    <main>
      <SiteHeader languageLinks={homeLanguageLinks("no")} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />

      <section className="section meet-freddy" style={{ paddingTop: 90 }}>
        <div className="meet-freddy-photo">
          <Image
            src="/assets/freddy-bremseth.jpg"
            alt="Freddy Bremseth"
            width={480}
            height={482}
            sizes="(max-width: 760px) 60vw, 320px"
            priority
          />
        </div>
        <div className="meet-freddy-body">
          <p className="eyebrow">Om oss</p>
          <h1>En uavhengig norsk stemme på Costa Blanca</h1>
          <blockquote className="meet-freddy-quote">
            «Jeg sier like ofte nei til et prosjekt som ja. Holder ikke beliggenheten eller papirene mål,
            skal du få vite det – for det er verdiene dine vi snakker om, ikke en rask handel.»
          </blockquote>
        </div>
      </section>

      <section className="section">
        <article className="om-freddy-bio">
          <p>
            Jeg heter Freddy Bremseth, og jeg hjelper nordmenn med å finne og kjøpe bolig i Spania på en
            tryggere, mer oversiktlig og effektiv måte.
          </p>
          <p>
            For meg handler eiendomsrådgivning om langt mer enn å finne en bolig på en portal og avtale en
            visning. En god rådgiver skal forstå menneskene han jobber med, markedet, områdene, prisnivået,
            økonomien, utleiepotensialet og selve kjøpsprosessen – og hvordan det oppleves å sitte på den andre
            siden, som kjøper i et fremmed land. Det vet jeg mye om, fordi jeg både har arbeidet med
            boligmarkedet og selv vært gjennom prosessen.
          </p>

          <h2>En bred bakgrunn fra mennesker, salg, ledelse og teknologi</h2>
          <p>
            Før eiendom har jeg hatt et variert yrkesliv. I Norge drev jeg egen transportvirksomhet i 13 år,
            med ansatte og flere kjøretøy. Jeg har arbeidet med internasjonale flyselskaper på Gardermoen og
            Fornebu, og senere innen teknologi og digitale løsninger som supportleder og Key Account Manager.
            Jeg har også bakgrunn som fotograf. Fellesnevneren gjennom hele yrkeslivet har vært mennesker,
            problemløsning, struktur og kommunikasjon – mye av det en god eiendomsrådgiver trenger.
          </p>

          <h2>Første periode i Spania – 3,5 år i Ciudad Quesada</h2>
          <p>
            Min historie i Spania startet lenge før jeg flyttet hit permanent. Jeg bodde først rundt 3,5 år i
            Ciudad Quesada i Rojales, på Costa Blanca sør. Der arbeidet jeg blant annet med å bygge opp
            data- og CRM-systemer for eiendomsmegler, samtidig som jeg hadde ansvar for utleie av rundt ti
            boligenheter.
          </p>
          <p>
            Det ga meg praktisk erfaring med prisnivå og etterspørsel, sesongvariasjoner, korttids- og
            ferieutleie, riktig prisstrategi, og hvordan beliggenhet, boligtype og standard påvirker både
            inntekter og belegg. Derfor kan jeg se en bolig fra mer enn ett perspektiv: Er den først og fremst
            et hjem? En feriebolig? En investering? Eller en kombinasjon? Målet avgjør ofte både bolig- og
            områdevalg.
          </p>

          <h2>Tilbake til Norge – men fortsatt med Spania som arbeidsområde</h2>
          <p>
            Etter perioden i Ciudad Quesada flyttet jeg tilbake til Norge, men arbeidet med Spania fortsatte. I
            mer enn to år holdt jeg ukentlige informasjonsmøter på Høvik utenfor Oslo for mennesker som vurderte
            å kjøpe bolig i Spania. Hvor bør man kjøpe? Hva koster det egentlig? Hvordan fungerer
            kjøpsprosessen? Hva er forskjellen på nybygg og bruktbolig? Hva bør man vite om utleie?
          </p>
          <p>
            Målet var ikke å presse deltakerne mot en bestemt bolig, men at de skulle sitte igjen med mer
            kunnskap og et bedre beslutningsgrunnlag. Møtene var satt til to timer, men varte ofte nærmere
            fire – rett og slett fordi deltakerne hadde mange spørsmål. For meg var ikke det noe problem. Når
            mennesker vurderer å investere store deler av sparepengene sine i et annet land, fortjener de
            ordentlige svar.
          </p>

          <h2>Jeg har selv vært den frustrerte boligkjøperen</h2>
          <p>
            Da familien min og jeg senere begynte å lete etter vår egen eiendom, fikk jeg oppleve
            kjøpsprosessen fra kundens side igjen. Vi ville ikke ha en helt vanlig bolig – vi lette etter land
            og en olivengård. Jeg søkte på spanske portaler, kontaktet meglere og private selgere, og opplevde
            hvor frustrerende det er å sende forespørsler uten å få svar, eller få svar som ikke egentlig
            svarer på spørsmålet: Er eiendommen fortsatt tilgjengelig? Hvor ligger den nøyaktig? Stemmer
            arealet? Hva kan bygges? Finnes dokumentasjonen?
          </p>
          <p>
            Har du bare tre–fire dager i Spania på å finne bolig, er det synd å bruke tiden på eiendommer som
            burde vært sortert bort på forhånd. Den erfaringen tar jeg med når jeg planlegger visninger for
            andre. Målet er ikke flest mulig visninger – målet er de riktige visningene.
          </p>

          <h2>Fra Valencia til La Manga – og erfaring fra Andalucía</h2>
          <p>
            Gjennom årene har jeg reist og arbeidet over store deler av den spanske middelhavskysten – fra
            Valencia og sørover til La Manga, fra innlandet til kysten. Før vi valgte olivengården vår, reiste
            vi også mye rundt i Andalucía. Til slutt falt valget på Biar i Alicante-provinsen, hvor familien i
            dag har en oliveneiendom med rundt 1 500 oliventrær. I 2025 flyttet vi permanent tilbake til
            Spania, og bor i dag i Benidorm.
          </p>
          <p>
            Det betyr at jeg kjenner svært forskjellige sider av Spania: turistområdene, boligområdene hvor
            mange skandinaver bor, kysten – og det mer tradisjonelle spanske livet i innlandet.
          </p>

          <h2>Hvor vil du egentlig bo?</h2>
          <p>
            Det finnes ikke ett område som er riktig for alle. Noen passer perfekt i Benidorm. Andre trives
            bedre i Villajoyosa, Finestrat, Albir, Altea eller Polop. Noen ønsker Torrevieja, Guardamar eller
            Ciudad Quesada. Og for noen gir innlandet rundt Biar, Villena eller Sax mer plass, natur og
            livskvalitet for pengene. Mitt utgangspunkt er derfor ikke «hvor har jeg en bolig å selge?», men
            <strong> «hvor tror jeg du faktisk vil trives?»</strong>
          </p>

          <h2>Rådgivning før boligjakt</h2>
          <p>
            En bolighandel starter for meg ikke med «hvilken bolig skal jeg selge deg?», men med «hva prøver du
            egentlig å finne – og hvorfor?». Skal boligen være feriebolig, permanent bolig, investering,
            utleiebolig – eller en kombinasjon? Hvor ofte skal den brukes? Hvor viktig er sjøen, roen,
            flyplassen? Nybygg eller brukt? Hva er totalbudsjettet – ikke bare kjøpesummen? Først når vi
            forstår dette, gir det mening å begynne å lete.
          </p>

          <h3>Jeg ser etter mer enn boligannonsen</h3>
          <ul>
            <li>Definere behov og budsjett, og velge og sammenligne aktuelle områder</li>
            <li>Finne boliger og prosjekter, og kontakte meglere, utbyggere og selgere</li>
            <li>Innhente manglende informasjon og sammenligne pris og verdi</li>
            <li>Forberede og organisere effektive visningsdager</li>
            <li>Forstå kostnader og betalingsplaner, og vurdere nybygg mot bruktbolig</li>
            <li>Vurdere utleiepotensial ut fra boligtype og beliggenhet</li>
            <li>Følge deg videre gjennom hele kjøpsprosessen</li>
          </ul>
          <p>
            Ved nybygg kan arbeidet også omfatte gjennomgang av planløsninger, tilvalg, betalingsbetingelser og
            dialog med utbygger. Gjennom Zen Eco Homes og samarbeid med blant annet Soleada.no får kundene
            samtidig tilgang til et bredt marked av boliger.
          </p>

          <h2>Utleie må vurderes realistisk</h2>
          <p>
            Mange sier: «Vi skal bruke boligen selv, men kanskje leie den ut litt.» To boliger som ser nesten
            like ut kan ha svært forskjellig utleiepotensial. Beliggenheten kan være viktigere enn
            kvadratmeterne, gangavstand viktigere enn utsikten, terrassen viktigere enn et ekstra rom. Er
            utleie en del av regnestykket, bør det med i vurderingen før kjøpet – ikke etterpå. Min erfaring fra
            drift og utleie gjør at jeg kan hjelpe deg å stille de spørsmålene tidlig.
          </p>

          <h2>En god rådgiver skal også kunne si nei</h2>
          <p>
            Filosofien min er enkel: en god rådgiver skal også kunne anbefale deg å la være å kjøpe. Passer
            ikke boligen deg, skal du få vite det. Blir totalprisen vesentlig høyere enn det markedsførte
            beløpet, regner vi på den reelle kostnaden. Jeg ønsker ikke at du skal kjøpe raskest mulig – jeg
            ønsker at du skal kunne svare på tre spørsmål: <strong>Hva kjøper jeg? Hvorfor kjøper jeg akkurat
            dette? Er dette riktig for meg?</strong>
          </p>

          <h2>Spania er blitt hjemmet mitt</h2>
          <p>
            I dag bor jeg fast i Spania med familien min. Jeg arbeider her, vi har investert her, og vi driver
            olivengården vår her. Jeg har selv måttet forholde meg til mye av det kundene mine møter – fra
            eiendomssøk og meglere til kontrakter, administrasjon og praktiske utfordringer. Et boligkjøp i
            Spania handler ofte om et nytt kapittel i livet. Da fortjener beslutningen mer enn en rask visning
            og en salgsbrosjyre – den fortjener gode spørsmål, gode svar og et best mulig beslutningsgrunnlag.
          </p>

          <p className="om-freddy-sign">
            Rådgivning først. Boligen etterpå.
            <br />— Freddy Bremseth, Zen Eco Homes
          </p>

          <div className="hero-actions" style={{ marginTop: 8 }}>
            <a
              className="contact-button"
              href="https://www.freddybremseth.com/foredrag-og-radgivning.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CalendarClock size={18} /> Book 15-minutters prat med Freddy
            </a>
            <Link className="text-button" href="/#kontakt">
              <MessageCircle size={16} /> Eller send en melding
            </Link>
          </div>
        </article>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow"><ShieldCheck size={15} /> Representative eksempler</p>
          <h2>Slik jobber vi i praksis</h2>
          <p>
            Representative eksempler bygget på reelle situasjoner – ikke navngitte enkeltkunder. De viser
            hvordan uavhengig rådgivning gjør en forskjell.
          </p>
        </div>
        <div className="proof-grid">
          {cases.map((c) => (
            <article key={c.title}>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </article>
          ))}
        </div>
      </section>

      <Testimonials />

      <section className="contact-section" id="kontakt-om">
        <div>
          <p className="eyebrow">Neste steg</p>
          <h2>Book en 15-minutters uforpliktende prat</h2>
          <p>
            Vi går gjennom budsjett, områder og fallgruver før du bestiller flybilletter. Uforpliktende, på
            norsk, og helt gratis.
          </p>
        </div>
        <a
          className="contact-button"
          href="https://www.freddybremseth.com/foredrag-og-radgivning.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CalendarClock size={18} /> Book en prat med Freddy
        </a>
      </section>
      <Footer />
    </main>
  );
}
