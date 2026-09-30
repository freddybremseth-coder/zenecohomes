import Image from "next/image";
import Link from "next/link";
import { CalendarClock, MessageCircle } from "lucide-react";

import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { Testimonials } from "@/components/Testimonials";
import { homeLanguageLinks } from "@/lib/i18n";

export const metadata = {
  title: "Freddy Bremseth | Norsk rådgiver for bolig i Spania",
  description:
    "Møt Freddy Bremseth, norsk eiendomsrådgiver på Costa Blanca. Les om områdevalg, boligsøk, visning, kjøpsprosess og hans erfaring med bolig i Spania.",
  alternates: {
    canonical: "/om-oss/freddy",
    languages: {
      "nb-NO": "https://www.zenecohomes.com/om-oss/freddy",
      en: "https://www.zenecohomes.com/en/about-freddy",
      "de-DE": "https://www.zenecohomes.com/de/ueber-freddy",
      "es-ES": "https://www.zenecohomes.com/es/sobre-freddy",
      "x-default": "https://www.zenecohomes.com/om-oss/freddy",
    },
  },
  openGraph: {
    title: "Om Freddy Bremseth | Zen Eco Homes",
    description:
      "Norsk eiendomsrådgiver på Costa Blanca. Rådgivning med kjøperens behov i sentrum – fra områdevalg og prosjektvurdering til visning og neste steg.",
    url: "https://www.zenecohomes.com/om-oss/freddy",
    type: "profile",
    images: [{ url: "https://www.zenecohomes.com/assets/freddy-bremseth.jpg", alt: "Freddy Bremseth" }],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Freddy Bremseth",
  jobTitle: "Eiendomsrådgiver",
  worksFor: { "@type": "Organization", name: "Zen Eco Homes", url: "https://www.zenecohomes.com" },
  address: { "@type": "PostalAddress", addressLocality: "Benidorm", addressRegion: "Alicante", addressCountry: "ES" },
  knowsLanguage: ["no", "en", "es"],
  image: "https://www.zenecohomes.com/assets/freddy-bremseth.jpg",
  url: "https://www.zenecohomes.com/om-oss/freddy",
  sameAs: ["https://www.freddybremseth.com"],
};

export default function FreddyPage() {
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
          <p className="eyebrow">Om Freddy</p>
          <h1>En norsk eiendomsrådgiver med kjøperens behov i sentrum</h1>
          <blockquote className="meet-freddy-quote">
            «Jeg sier like ofte nei til et prosjekt som ja. Holder ikke beliggenheten eller informasjonen mål,
            skal du få vite det – for det er verdiene dine vi snakker om, ikke en rask handel.»
          </blockquote>
        </div>
      </section>

      <section className="section">
        <article className="om-freddy-bio">
          <p>
            Jeg heter Freddy Bremseth, og jeg hjelper nordmenn med å finne og kjøpe bolig i Spania på en
            tryggere, mer oversiktlig og effektiv måte. Gjennom Zen Eco Homes er hovedfokuset moderne nybygg,
            moderne villaer og leiligheter, prosjekter og tomter på Costa Blanca og i utvalgte innlandsområder.
          </p>
          <p>
            For meg handler eiendomsrådgivning om langt mer enn å finne en bolig på en portal og avtale en
            visning. En god rådgiver skal forstå menneskene han jobber med, markedet, områdene, prisnivået,
            økonomien, utleiepotensialet og selve kjøpsprosessen – men også kunne se hva som mangler av
            informasjon, hvilke spørsmål som ennå ikke er besvart og hva som bør avklares før kunden tar en
            stor beslutning. Det er nettopp denne kombinasjonen av eiendomserfaring, struktur og analyse jeg
            ønsker å bruke for kundene mine.
          </p>

          <h2>En bred bakgrunn fra mennesker, salg, ledelse og teknologi</h2>
          <p>
            Før eiendom har jeg hatt et variert yrkesliv. I Norge drev jeg egen transportvirksomhet i 13 år,
            med ansatte og flere kjøretøy. Jeg har arbeidet med internasjonale flyselskaper på Gardermoen og
            Fornebu, og senere innen IT, teknologi og digitale løsninger som supportleder, Key Account Manager
            og rådgiver i forprosjekter. Jeg har også bakgrunn som fotograf.
          </p>
          <p>
            Utdannings- og fagbakgrunnen min omfatter blant annet BI, IT Akademiet, EDB-skolen, Google,
            WEB Academy og Selgerskolen, i tillegg til ett år foto og ett år mediedesign ved Idefagskolen.
            Jeg bruker ikke denne bredden for å gjøre en boligprosess mer komplisert – tvert imot. Den hjelper
            meg å stille bedre spørsmål, strukturere mye informasjon og forklare alternativene på en måte som
            gjør det enklere for kunden å ta en gjennomtenkt beslutning.
          </p>

          <h2>Fra kompliserte IT-forprosjekter til kompliserte boligvalg</h2>
          <p>
            I IT-bransjen arbeidet jeg blant annet med forprosjekter for større private og offentlige
            virksomheter, organisasjoner og foreninger. Oppgaven var ofte å definere kompliserte nettsteder,
            digitale løsninger og integrasjoner før utviklingen startet: Hva er det egentlige behovet? Hvilke
            systemer må snakke sammen? Hvem sitter på riktig informasjon? Hva er krav, hva er antakelser, og
            hvilke avklaringer må på plass før man går videre?
          </p>
          <p>
            Den arbeidsmåten er svært relevant også i et boligkjøp i Spania. Et prosjekt kan se enkelt ut i en
            annonse, men bak beslutningen ligger ofte områdevalg, økonomi, totalpris, dokumentasjon,
            betalingsplaner, utbygger, advokat, bank, utleieregler, tidslinje og en rekke praktiske forhold.
            Min rolle er ikke å være advokat, bank eller teknisk kontrollør, men å hjelpe kunden med å se
            helheten, oppdage hva som mangler og sørge for at de riktige spørsmålene blir stilt til de riktige
            fagpersonene før beslutningen tas.
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
            en annen type hverdagsliv. Mitt utgangspunkt er derfor ikke «hvor har jeg en bolig å selge?», men
            <strong> «hvor tror jeg du faktisk vil trives?»</strong>
          </p>

          <h2>Rådgivning før boligjakt</h2>
          <p>
            En bolighandel starter for meg ikke med «hvilken bolig skal jeg selge deg?», men med «hva prøver du
            egentlig å finne – og hvorfor?». Skal boligen være feriebolig, permanent bolig, investering,
            utleiebolig – eller en kombinasjon? Hvor ofte skal den brukes? Hvor viktig er sjøen, roen,
            flyplassen? Hva er totalbudsjettet – ikke bare kjøpesummen? Først når vi forstår dette, gir det
            mening å begynne å lete.
          </p>
          <p>
            Nybygg og moderne boliger er hovedfokuset i Zen Eco Homes. Hvis en bruktbolig likevel er klart bedre
            for behovene dine, lar jeg heller den bli en del av vurderingen enn å presse deg mot feil prosjekt.
          </p>

          <h3>Jeg ser etter mer enn boligannonsen</h3>
          <ul>
            <li>Definere behov, prioriteringer og totalbudsjett før vi begynner å lete</li>
            <li>Velge og sammenligne områder ut fra hvordan boligen faktisk skal brukes</li>
            <li>Finne boliger og prosjekter, og kontakte meglere, utbyggere og selgere</li>
            <li>Skille mellom det vi vet, det vi tror og det som fortsatt må avklares</li>
            <li>Innhente manglende informasjon og sammenligne pris, verdi og alternativer</li>
            <li>Forstå kostnader, betalingsplaner, tilvalg og hva som faktisk er inkludert</li>
            <li>Forberede effektive visningsdager slik at tiden brukes på de riktige boligene</li>
            <li>Vurdere utleiepotensial realistisk ut fra boligtype, beliggenhet og bruk</li>
            <li>Følge kunden videre og sørge for at de riktige fagpersonene kobles inn når det trengs</li>
          </ul>
          <p>
            Ved nybygg kan arbeidet også omfatte gjennomgang av planløsninger, tilvalg, betalingsbetingelser og
            dialog med utbygger. Gjennom Zen Eco Homes og samarbeid med blant annet Soleada.no får kundene
            samtidig tilgang til et bredt marked av moderne boliger og prosjekter.
          </p>

          <h2>Utleie må vurderes realistisk</h2>
          <p>
            Mange sier: «Vi skal bruke boligen selv, men kanskje leie den ut litt.» To boliger som ser nesten
            like ut kan ha svært forskjellig utleiepotensial. Beliggenhet, gangavstand, terrasse, utsikt,
            planløsning og boligtype kan påvirke etterspørselen på ulike måter. Er utleie en del av regnestykket,
            bør det med i vurderingen før kjøpet – ikke etterpå. Min erfaring fra drift og utleie gjør at jeg kan
            hjelpe deg å stille de spørsmålene tidlig.
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
            <br /><a href="https://www.freddybremseth.com/" target="_blank" rel="noopener noreferrer">Se Freddy Bremseths samlede profil, bøker og prosjekter</a>
          </p>

          <div className="hero-actions freddy-profile-actions">
            <Link className="contact-button" href="/booking">
              <CalendarClock size={18} /> Be om en 15-minutters boligprat
            </Link>
            <a className="text-button" href="mailto:freddy@zenecohomes.com">
              <MessageCircle size={16} /> Send e-post
            </a>
          </div>
        </article>
      </section>

      <Testimonials />

      <section className="contact-section" id="kontakt-om">
        <div>
          <p className="eyebrow">Neste steg</p>
          <h2>Be om en 15-minutters uforpliktende boligprat</h2>
          <p>
            Vi går gjennom budsjett, områder og hva du bør avklare før du bestiller flybilletter. Uforpliktende,
            på norsk, og uten at du sendes ut av Zen Eco Homes.
          </p>
        </div>
        <Link className="contact-button" href="/booking">
          <CalendarClock size={18} /> Be om en prat med Freddy
        </Link>
      </section>
      <Footer />
    </main>
  );
}