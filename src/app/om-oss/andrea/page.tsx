import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { homeLanguageLinks } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Andrea Thorsnes Karlsen | Zen Eco Homes på Costa Blanca",
  description:
    "Møt Andrea Thorsnes Karlsen i Zen Eco Homes. Les om flyttingen til Aspe, erfaringen som boligkjøper i Spania og hvordan hun hjelper norske kunder.",
  alternates: { canonical: "/om-oss/andrea" },
};

export default function AndreaPage() {
  return (
    <main className="andrea-profile-page">
      <SiteHeader languageLinks={homeLanguageLinks("no")} />

      <section className="page-hero compact-hero andrea-profile-hero">
        <div className="andrea-profile-hero-inner">
          <div className="andrea-profile-hero-copy">
            <p className="eyebrow">Andrea Thorsnes Karlsen · Zen Eco Homes</p>
            <h1>Fra drøm til virkelighet</h1>
            <p>
              Andrea kjenner boligkjøpet i Spania fra begge sider – både som rådgiver og som kjøper som selv
              har valgt å flytte familien fra Norge til Costa Blanca.
            </p>
            <div className="hero-actions">
              <Link className="contact-button" href="/booking">
                Få rådgivning <ArrowRight size={17} />
              </Link>
              <Link className="text-button light" href="/om-oss">
                Møt teamet
              </Link>
            </div>
          </div>
          <figure className="andrea-profile-portrait">
            <Image
              src="/assets/andrea-thorsnes-karlsen.webp"
              alt="Andrea Thorsnes Karlsen, rådgiver i Zen Eco Homes"
              width={533}
              height={800}
              sizes="(max-width: 800px) 92vw, 420px"
              priority
            />
          </figure>
        </div>
      </section>

      <article className="section andrea-story">
        <blockquote>
          «Jeg har alltid sagt at den dagen jeg blir pensjonist, skal jeg bo i Spania. Lite visste jeg at jeg
          skulle få muligheten til å flytte dit allerede som 32-åring.»
        </blockquote>

        <p>
          Jeg heter Andrea Thorsnes Karlsen, er 32 år og kommer fra Trondheim. Sammen med mannen min og våre
          tre barn har vi kjøpt tomt og hus i Aspe på Costa Blanca – og snart går flyttelasset fra Norge til
          Spania.
        </p>

        <p>
          For meg har Spania vært en drøm i mange år. De siste syv årene har vi tilbrakt mye tid i San Javier,
          hvor svigerforeldrene mine har feriehus. Etter hvert begynte tanken på et liv i Spania å bli mer enn
          bare en drøm. Vi ønsket oss en varmere hverdag, mer tid utendørs og et liv hvor familien kunne være
          mer sammen.
        </p>

        <p>
          Da vi begynte å se etter et sted å bo fast, ble det tydelig at vi måtte tenke annerledes enn om vi
          bare skulle kjøpe feriebolig. Vi har tre barn i barnehagealder, og for oss var det viktig å finne et
          sted hvor vi kunne etablere oss over tid – med gode utemuligheter, nærhet til sentrum, aktiviteter
          gjennom hele året og et lokalmiljø med fastboende familier.
        </p>

        <p>Valget falt på Aspe.</p>

        <p>
          Her får vi nærheten til Alicante og Elche, kort vei til flyplassen og rundt 30 minutter til stranden
          – samtidig som vi får et roligere liv i en mindre spansk by. Tomten vår ligger litt utenfor byen, med
          utsikt over vingårder og olivenlunder og gode turmuligheter rett i nærheten. Det er akkurat denne
          kombinasjonen vi falt for.
        </p>

        <h2>Jeg vet hvordan det er å være kjøper</h2>

        <p>
          Vår egen boligprosess var overraskende enkel. Freddy var vår eiendomsrådgiver, og han tok seg tid til
          å forstå hva vi faktisk var ute etter. Det var også han som anbefalte oss å se nærmere på Aspe.
        </p>

        <p>
          Det gjorde inntrykk på meg hvor mye en god rådgiver kan bety når man skal kjøpe bolig i et annet
          land.
        </p>

        <p>
          Som kjøper har jeg samtidig fått kjenne på at ting fungerer annerledes i Spania enn i Norge.
          Prosessene kan ta tid, og man må være forberedt på at ikke alt skjer like raskt som vi nordmenn
          kanskje er vant til. Samtidig oppdaget jeg hvor utrolig mange muligheter som faktisk finnes.
        </p>

        <p>
          Jeg ble spesielt overrasket over muligheten til å kjøpe et helt nytt hus, velge tomt selv og få et
          moderne hjem tilpasset egne ønsker – til en pris som for oss var langt mer interessant enn vi hadde
          forventet.
        </p>

        <p>
          Denne erfaringen tar jeg med meg inn i arbeidet med kundene våre. Etter å ha gått gjennom hele
          prosessen selv, vet jeg også hva som er viktig når man skal kjøpe bolig i Spania:
        </p>

        <ul>
          <li>
            <strong>Se boligkjøpet fra kundens perspektiv</strong> – jeg vet hvilke spørsmål, tanker og
            usikkerheter som kan dukke opp når man skal kjøpe bolig i et annet land.
          </li>
          <li>
            <strong>Forstå hva som faktisk er viktig for kunden</strong> – jeg vet at boligjakten handler om
            mer enn selve huset, og at område, hverdagsliv, skole, natur og beliggenhet kan være avgjørende.
          </li>
          <li>
            <strong>Kjenne områdene fra et kjøpers perspektiv</strong> – jeg har selv gått gjennom prosessen
            med å undersøke ulike områder og finne ut hvor vi ønsket å etablere oss.
          </li>
          <li>
            <strong>Være tilgjengelig og følge opp underveis</strong> – jeg vet hvor viktig det er å få svar,
            vite hva som skjer og ha noen som følger deg gjennom hele prosessen.
          </li>
          <li>
            <strong>Hjelpe med å sortere mulighetene</strong> – det finnes mange boliger og muligheter i
            Spania, og jeg ønsker å gjøre det enklere å finne frem til det som passer akkurat deg og din
            situasjon.
          </li>
        </ul>

        <h2>Fra forretningsutvikling til eiendom i Spania</h2>

        <p>
          Før jeg begynte i Zen Eco Homes jobbet jeg som forretningsutvikler i Homely Boligalarm, hvor jeg
          hadde ansvar for blant annet markedsføring, nettside, innhold, sosiale medier, kundereise og
          kundeoppfølging, i tillegg til å være FG-fagansvarlig i Homely.
        </p>

        <p>
          Jeg er utdannet ingeniør innen fornybar energi og har en mastergrad i entreprenørskap og innovasjon.
        </p>

        <p>
          Jeg liker å forstå hvordan ting henger sammen, finne informasjon, se muligheter og ikke minst gjøre
          kompliserte ting litt enklere.
        </p>

        <p>Det er mye av dette jeg nå tar med meg inn i Zen Eco Homes.</p>

        <p>
          Jeg jobber blant annet med markedsføring, SEO, nettside, innhold og sosiale medier. Samtidig følger
          jeg opp norske kunder og hjelper dem med å finne ut hva de faktisk trenger – enten de drømmer om
          feriebolig, ønsker å flytte permanent til Spania, skal kjøpe sin første bolig her eller ønsker å
          bygge et nytt hus.
        </p>

        <p>
          Jeg er også opptatt av hvordan vi kan utvikle Zen Eco Homes videre, finne nye muligheter og hele
          tiden gjøre kundeopplevelsen bedre.
        </p>

        <h2>En god kundereise starter lenge før visningen</h2>

        <p>
          For meg handler ikke en god kundeopplevelse bare om hva som skjer når kunden møter en
          eiendomsrådgiver.
        </p>

        <p>Den starter lenge før.</p>

        <p>
          Når du begynner å drømme om bolig i Spania, har du ofte hundre spørsmål. Hvor bør vi bo? Hvordan er
          området? Hva koster det egentlig? Hvordan fungerer boligkjøp i Spania? Hva er forskjellen på å kjøpe
          nytt og brukt? Hvordan er det å flytte med barn? Og hvordan vet man egentlig om man ser på riktig
          bolig?
        </p>

        <p>
          Jeg ønsker at Zen Eco Homes skal være et sted hvor du kan finne svar på mange av disse spørsmålene
          allerede før du tar kontakt.
        </p>

        <p>
          Deretter ønsker jeg å være en trygg og tilgjengelig person i dialogen videre – en som lytter, finner
          informasjon, stiller spørsmål og hjelper deg å sortere mulighetene.
        </p>

        <p>
          Målet er at kunden skal få en god opplevelse hele veien, fra de første søkene på nettet til
          drømmeboligen står klar til overtakelse.
        </p>

        <h2>Hvorfor Spania?</h2>

        <p>
          Det er vanskelig å peke på én enkelt grunn til at jeg ønsker å flytte til Spania. For meg handler det
          om summen av de små tingene som til sammen gir en helt annen hverdag.
        </p>

        <p>
          Jeg er nok først og fremst klar for litt mer sol og varme. Etter mange år med kalde vintre, hustrige
          høster og vårdager som ikke helt klarer å bestemme seg for om de skal være vår eller vinter, kjenner
          jeg at jeg ønsker en hverdag hvor det er lettere å være ute – nesten uansett årstid.
        </p>

        <p>
          Jeg ser for meg de små øyeblikkene jeg gleder meg aller mest til. Å våkne om morgenen, lage en kopp
          kaffe og åpne døren ut til terrassen. Kjenne solen og varmen, og kunne starte dagen ute i lette
          sommerklær.
        </p>

        <p>
          Jeg gleder meg til å ha frokost ute, tilbringe varme ettermiddager ved bassenget og dra på stranden
          når vi har lyst. Jeg gleder meg til lange turer, sykkelturer med familien og til å kunne spise middag
          ute på terrassen en helt vanlig hverdag.
        </p>

        <p>
          Og kanskje aller mest gleder jeg meg til å se barna løpe rundt og leke i hagen, bruke mer tid ute og
          få en hverdag hvor naturen og utelivet blir en større del av familielivet.
        </p>

        <p>
          For meg handler derfor ikke drømmen om Spania bare om å ha ferie oftere. Jeg ønsker å skape en
          hverdag med mer tid sammen, mindre stress, god mat, mer uteliv og en følelse av frihet.
        </p>

        <p>Det er det gode livet i Spania jeg ser for meg.</p>

        <h2>Et liv med mer tid ute</h2>

        <p>
          Jeg er gift og har tre barn i barnehagealder. På fritiden liker jeg blant annet trening, turer og
          kreative prosjekter. Jeg har alltid likt å holde på med ulike DIY-prosjekter, og for tiden holder jeg
          også på å lære meg å sy klær.
        </p>

        <p>
          I Spania ser jeg mest frem til å kunne bruke mer av tiden vår ute. Bade, gå turer, sykle, utforske
          nye steder, spise gode måltider sammen og bare nyte dagene.
        </p>

        <p>
          Aspe passer godt til akkurat dette. Jeg liker den rolige atmosfæren, nærheten til naturen og ikke
          minst utsikten over alle vingårdene og olivenlundene rundt byen.
        </p>

        <p>Det er kanskje litt symbolsk at jeg i mange år har sagt at jeg en dag skulle bo i Spania.</p>

        <p>Nå skjer det faktisk.</p>

        <p>
          Og noe av det fineste med å jobbe i Zen Eco Homes er at jeg får være med på å hjelpe andre med å
          gjøre den samme drømmen til virkelighet.
        </p>

        <p className="andrea-story-highlight">
          <strong>
            Jeg vet hvor stort steget kan føles. Jeg har tatt det selv. Og jeg vet også hvor mye enklere det
            blir når du har noen ved din side som lytter til dine ønsker, ivaretar dine interesser og følger
            deg trygt gjennom hele prosessen.
          </strong>
        </p>

        <p className="andrea-story-signature">— Andrea Thorsnes Karlsen, Zen Eco Homes</p>

        <div className="andrea-story-actions">
          <Link className="contact-button" href="/booking">
            Snakk med Andrea <ArrowRight size={17} />
          </Link>
          <Link className="text-button" href="/kjopsprosessen">
            Se kjøpsprosessen <ArrowRight size={16} />
          </Link>
        </div>
      </article>

      <Footer />
    </main>
  );
}
