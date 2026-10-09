import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { homeLanguageLinks } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Kjøpsprosessen i Spania | Slik hjelper Zen Eco Homes",
  description:
    "Se hvordan Zen Eco Homes følger deg fra første boligprat til overtakelse i Spania, med områdevalg, shortlist, visning, advokat, notar og oppfølging.",
  alternates: {
    canonical: "/kjopsprosessen",
  },
  openGraph: {
    title: "Kjøpsprosessen i Spania | Slik hjelper Zen Eco Homes",
    description:
      "Fra behov og områdevalg til reservasjon, juridisk kontroll, notar, nøkler og oppfølging etter kjøpet.",
    url: "https://www.zenecohomes.com/kjopsprosessen",
    type: "website",
  },
};

const journeySteps = [
  {
    title: "Avklar behov, bruk og totalbudsjett",
    text:
      "Vi starter med hvordan boligen skal brukes, hvor ofte du vil være i Spania, hvem som skal bruke den, hvor bilavhengig du ønsker å være og hvilket totalbudsjett du faktisk har.",
  },
  {
    title: "Velg område før du velger bolig",
    text:
      "Vi sammenligner områder ut fra hverdagen du ønsker: strand og gange, internasjonalt miljø, skole, flyplass, ro, utsikt, utleiebehov og videresalg. Først deretter snevrer vi inn boligtypen.",
  },
  {
    title: "Bygg en relevant shortlist",
    text:
      "Vi søker i tilgjengelige boliger og prosjekter, bekrefter så langt mulig at objektene fortsatt er aktuelle og kutter bort alternativer som ikke passer kriteriene dine.",
  },
  {
    title: "Planlegg visninger med et formål",
    text:
      "Visningene brukes ikke bare til å se boligen, men til å teste området, avstander, solforhold, støy, standard, fellesområder og kompromissene som ikke alltid kommer frem i annonsen.",
  },
  {
    title: "Vurder reservasjon før du betaler",
    text:
      "Når du finner riktig bolig, går vi gjennom de praktiske vilkårene rundt reservasjonen. Du skal vite hva som betales, hva boligen tas av markedet for, og hvilke forbehold som må avklares før du binder deg videre.",
  },
  {
    title: "La en uavhengig advokat kontrollere kjøpet",
    text:
      "Advokaten håndterer den juridiske kontrollen av blant annet eierskap, heftelser, registrerte forhold, kontrakter og relevante tillatelser. Zen Eco Homes koordinerer prosessen, men erstatter ikke advokaten.",
  },
  {
    title: "Få NIE, finansiering og fullmakter på plass",
    text:
      "NIE, bank, eventuell finansiering og fullmakt bør avklares tidlig nok til at de ikke forsinker handelen. Flere av disse sporene kan gå parallelt med den juridiske kontrollen.",
  },
  {
    title: "Kontrakt, sluttoppgjør og notar",
    text:
      "Når vilkårene er avklart og kjøpet er klart for sluttføring, følger kontrakt og sluttoppgjør etter modellen som gjelder for boligen. Det offentlige skjøtet signeres hos notar.",
  },
  {
    title: "Overtakelse, nøkler og oppfølging",
    text:
      "Etter signeringen følger registrering og praktisk overtakelse: nøkler, strøm, vann, forsikring, comunidad og andre løpende forhold. Ved behov kan Zen Eco Homes Care følge boligen når du er borte.",
  },
] as const;

const faq = [
  {
    q: "Hva er forskjellen på denne siden og guiden «Kjøpe bolig i Spania»?",
    a: "Denne siden viser hvordan Zen Eco Homes jobber sammen med deg gjennom selve kundereisen. Hovedguiden «Kjøpe bolig i Spania» er den brede kunnskapsguiden om markedet, boligtyper, kostnader, reservasjon, juridikk, finansiering og fallgruver.",
  },
  {
    q: "Bør jeg ha finansiering og budsjett klart før visning?",
    a: "Ja, så langt det er mulig. Det viktigste er å kjenne totalbudsjettet, ikke bare ønsket kjøpesum. Da kan vi unngå boliger som blir for dyre når skatt, juridisk bistand, notar, register, bank og andre kjøpskostnader legges til.",
  },
  {
    q: "Bør en advokat se på reservasjonen før jeg betaler?",
    a: "Reservasjonsavtaler varierer. Du bør forstå beløp, frister, refusjonsvilkår og eventuelle forbehold før betaling. Når avtalen er bindende eller forholdene er uklare, bør en uavhengig spansk advokat vurdere dokumentet før du går videre.",
  },
  {
    q: "Hva gjør Zen Eco Homes – og hva gjør advokaten?",
    a: "Zen Eco Homes hjelper med behovskartlegging, områdevalg, boligsøk, visninger, koordinering og fremdrift. Den uavhengige advokaten har ansvaret for den juridiske kontrollen og kontraktene. Bank og eventuelle finansieringsrådgivere håndterer finansiering, mens notaren formaliserer den offentlige overføringen.",
  },
  {
    q: "Hvor lang tid tar kjøpsprosessen?",
    a: "Bruktbolig kan ofte sluttføres i løpet av noen uker når dokumentasjon, finansiering og juridisk kontroll er på plass, men tidsbruken varierer. Nybygg følger prosjektets bygge- og betalingsplan og kan strekke seg over mange måneder eller år.",
  },
  {
    q: "Er prosessen annerledes for nybygg?",
    a: "Ja. Nybygg har gjerne reservasjons- og utbyggerkontrakt, betalingsplan under byggeperioden, bankgarantier for forskuddsbetalinger der reglene krever det, ferdigstillelse og kontroll før sluttoppgjør. Derfor har vi en egen guide som går dypere i nybygg.",
  },
  {
    q: "Hva skjer etter at jeg har fått nøklene?",
    a: "Da skal registrering og praktiske forhold på plass: strøm, vann, forsikring, felleskostnader og andre avtaler. Dersom du ikke bor fast i Spania, kan du også ha behov for keyholding, tilsyn, klargjøring og koordinering av service.",
  },
] as const;

const roles = [
  ["Behov, område og boligvalg", "Zen Eco Homes + deg", "Vi gir råd og struktur; du tar beslutningen."],
  ["Boligsøk og visninger", "Zen Eco Homes", "Vi finner, sammenligner og koordinerer relevante alternativer."],
  ["Reservasjon", "Deg + selger/utbygger", "Zen koordinerer; advokat bør involveres når vilkårene krever juridisk vurdering."],
  ["Juridisk kontroll", "Uavhengig spansk advokat", "Eierskap, heftelser, registrering, kontrakter og juridiske forhold."],
  ["NIE og eventuell fullmakt", "Advokat / relevant myndighet", "Kan ofte forberedes parallelt med resten av kjøpet."],
  ["Finansiering", "Deg + bank/långiver", "Låneramme, takst, dokumentasjon og lånevilkår."],
  ["Notar og offentlig skjøte", "Notar + partene/representanter", "Notaren formaliserer handelen; advokaten ivaretar kjøperens juridiske kontroll."],
  ["Overtakelse og boligoppfølging", "Zen Eco Homes / Zen Eco Homes Care", "Praktisk overtakelse og valgfri oppfølging når du ikke er i Spania."],
] as const;

export default function BuyingProcessPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.zenecohomes.com/kjopsprosessen#webpage",
        url: "https://www.zenecohomes.com/kjopsprosessen",
        name: "Kjøpsprosessen i Spania med Zen Eco Homes",
        description:
          "Slik følger Zen Eco Homes boligkjøpere fra behovskartlegging og områdevalg til overtakelse og oppfølging.",
      },
      {
        "@type": "HowTo",
        "@id": "https://www.zenecohomes.com/kjopsprosessen#howto",
        name: "Kjøpsprosessen med Zen Eco Homes",
        step: journeySteps.map((step, index) => ({
          "@type": "HowToStep",
          position: index + 1,
          name: step.title,
          text: step.text,
        })),
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.zenecohomes.com/kjopsprosessen#faq",
        mainEntity: faq.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Zen Eco Homes",
            item: "https://www.zenecohomes.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Kjøpsprosessen",
            item: "https://www.zenecohomes.com/kjopsprosessen",
          },
        ],
      },
    ],
  };

  return (
    <main className="buying-process-page">
      <SiteHeader languageLinks={homeLanguageLinks("no")} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="page-hero compact-hero">
        <p className="eyebrow">Slik jobber vi · oppdatert 9. oktober 2026</p>
        <h1>Kjøpsprosessen med Zen Eco Homes – fra første boligprat til nøklene</h1>
        <p>
          Et godt boligkjøp i Spania starter før første visning. Vi hjelper deg å avklare behov,
          totalbudsjett og område, finne relevante boliger, planlegge visninger og holde fremdrift
          gjennom reservasjon, juridisk kontroll, notar og overtakelse.
        </p>
        <div className="hero-actions">
          <Link className="contact-button" href="/booking">
            Start med en boligprat <ArrowRight size={17} />
          </Link>
          <Link className="text-button light" href="/eiendommer">Se boliger</Link>
          <Link className="text-button light" href="/guide/kjope-bolig-i-spania">
            Les den komplette kjøperguiden
          </Link>
        </div>
      </section>

      <section className="section buying-process-portraits" aria-label="Din rådgiver på Costa Blanca">
        <div className="buying-process-portraits-copy">
          <p className="eyebrow">Personlig oppfølging</p>
          <h2>En fast rådgiver gjennom boligkjøpet</h2>
          <p>Hos Zen Eco Homes møter du mennesker som kjenner Costa Blanca og kan hjelpe deg fra de første spørsmålene til overtakelsen.</p>
          <Link className="text-button" href="/om-freddy">Bli kjent med Freddy <ArrowRight size={16} /></Link>
        </div>
        <div className="buying-process-portraits-images">
          <img src="/assets/freddy-eiendom-costa-blanca.webp" alt="Freddy Bremseth som eiendomsrådgiver på Costa Blanca" loading="lazy" onError={(event) => { event.currentTarget.style.display = "none"; }} />
          <img src="/assets/freddy-personlig-radgiver.webp" alt="Freddy Bremseth i en personlig rådgiversamtale ved Middelhavet" loading="lazy" onError={(event) => { event.currentTarget.style.display = "none"; }} />
        </div>
      </section>

      <section className="section split buying-process-intro">
        <div className="section-heading">
          <p className="eyebrow">Kort svar</p>
          <h2>Hva gjør <span className="human-name">Zen Eco Homes</span> <span className="unbroken-word">gjennom</span> kjøpsprosessen?</h2>
          <p>
            Vi fungerer som kjøperens faste rådgiver og koordinator rundt boligvalget. Vår jobb er å
            gjøre søket mer presist, sammenligne områdene før du velger objekt, følge opp visninger og
            sørge for at du vet hva neste steg er.
          </p>
          <p>
            Vi er ikke advokat, bank eller notar. Når kjøpet går inn i juridikk, finansiering og
            offentlig overføring, skal riktig fagperson ha ansvaret. Vi holder trådene samlet rundt deg,
            slik at boligvalget og fremdriften ikke blir fragmentert mellom mange aktører.
          </p>
        </div>
        <aside className="process-trust-panel">
          <p className="eyebrow">Tre prinsipper</p>
          <h2>Område først. Fakta før beslutning. Riktig <span className="unbroken-word">fagperson</span> til riktig jobb.</h2>
          <div>
            <span><CheckCircle2 size={18} /> Totalbudsjett før boligjakt</span>
            <span><CheckCircle2 size={18} /> Tilgjengelighet og dokumentasjon må bekreftes</span>
            <span><CheckCircle2 size={18} /> Juridisk kontroll hos uavhengig advokat</span>
            <span><CheckCircle2 size={18} /> Oppfølging også etter overtakelsen</span>
          </div>
        </aside>
      </section>

      <section className="section cornerstone-section" id="steg-for-steg">
        <div className="section-heading">
          <p className="eyebrow">Steg for steg</p>
          <h2>Slik ser kjøpsreisen ut med Zen Eco Homes</h2>
          <p>
            Den nøyaktige rekkefølgen kan variere mellom bruktbolig og nybygg, men disse ni
            beslutningspunktene gir en god arbeidsmodell for de fleste kjøp.
          </p>
        </div>

        <div className="process-editorial">
          <div className="process-timeline">
            {journeySteps.map((step, index) => (
              <article className="process-row" key={step.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </article>
            ))}
          </div>

          <aside className="process-deeper">
            <p className="eyebrow">Fordypning underveis</p>
            <h3>Les riktig guide når spørsmålet oppstår</h3>
            <Link href="/guide/kjope-bolig-i-spania">
              Komplett kjøperguide <ArrowRight size={15} />
            </Link>
            <Link href="/guide/kostnader-boligkjop-spania">
              Kjøpskostnader og kalkulator <ArrowRight size={15} />
            </Link>
            <Link href="/guide/boliglan-spansk-bank-nordmenn">
              Boliglån i spansk bank <ArrowRight size={15} />
            </Link>
            <Link href="/guide/nie-skattenummer-spania">
              NIE-nummer <ArrowRight size={15} />
            </Link>
            <Link href="/guide/juridiske-fallgruver-boligkjop-spania">
              Juridiske fallgruver <ArrowRight size={15} />
            </Link>
            <Link href="/guide/nybygg-i-spania">
              Nybygg i Spania <ArrowRight size={15} />
            </Link>
          </aside>
        </div>
      </section>

      <section className="section cornerstone-section">
        <div className="section-heading">
          <p className="eyebrow">Ansvar og roller</p>
          <h2>Hvem gjør hva når du kjøper bolig i Spania?</h2>
          <p>
            En vanlig årsak til usikkerhet er at kjøperen ikke vet hvem som faktisk har ansvaret for
            hvert steg. Denne fordelingen er et godt utgangspunkt.
          </p>
        </div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Del av prosessen</th>
                <th>Hovedansvar</th>
                <th>Hva det betyr i praksis</th>
              </tr>
            </thead>
            <tbody>
              {roles.map(([part, owner, explanation]) => (
                <tr key={part}>
                  <td><strong>{part}</strong></td>
                  <td>{owner}</td>
                  <td>{explanation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ marginTop: 18 }}>
          Zen Eco Homes gir eiendomsrådgivning og prosessoppfølging. Juridiske, skattemessige og
          finansielle vurderinger må gjøres av kvalifiserte fagpersoner for din konkrete situasjon.
        </p>
      </section>

      <section className="section proof-section">
        <div className="section-heading">
          <p className="eyebrow">Før reservasjon</p>
          <h2>Dette bør være avklart før du betaler reservasjonsbeløpet</h2>
          <p>
            Reservasjon er et naturlig punkt å stoppe opp. Avtalen kan få økonomiske konsekvenser, og
            vilkårene varierer fra bolig til bolig og mellom bruktbolig og nybygg.
          </p>
        </div>
        <div className="proof-grid">
          <article>
            <strong>01</strong>
            <h3>Er boligen faktisk den riktige?</h3>
            <p>Område, støy, sol, avstander, vedlikehold og kompromisser bør være vurdert – ikke bare bildene.</p>
          </article>
          <article>
            <strong>02</strong>
            <h3>Hva er totalbudsjettet?</h3>
            <p>Kjøpesum er bare én del. Skatt, advokat, notar, register, finansiering og praktiske kostnader kommer i tillegg.</p>
          </article>
          <article>
            <strong>03</strong>
            <h3>Hva sier reservasjonsavtalen?</h3>
            <p>Beløp, frist, refusjon, forbehold og konsekvens ved tilbaketrekning skal være forståelig før betaling.</p>
          </article>
          <article>
            <strong>04</strong>
            <h3>Hvem gjør juridisk kontroll?</h3>
            <p>En uavhengig advokat bør ha et tydelig mandat til å kontrollere eiendom og kontraktsforhold.</p>
          </article>
          <article>
            <strong>05</strong>
            <h3>Er finansieringen realistisk?</h3>
            <p>Hvis du trenger lån, bør ramme, dokumentasjon og tidslinje være avklart før du blir bundet av frister.</p>
          </article>
          <article>
            <strong>06</strong>
            <h3>Hva skjer etter reservasjonen?</h3>
            <p>Du bør kjenne neste kontrakt, neste betaling, forventet notardato eller betalingsplan for nybygg.</p>
          </article>
        </div>
      </section>

      <section className="section split cornerstone-section">
        <div>
          <p className="eyebrow">Markedet i Spania</p>
          <h2>Boligsøket fungerer ikke helt som Finn.no i Norge</h2>
          <p>
            Samme bolig kan markedsføres av flere aktører, informasjon kan komme fra ulike systemer og
            enkelte portalannonser blir liggende etter at statusen har endret seg. Derfor bruker vi
            ikke en annonse alene som bevis på at en bolig fortsatt er tilgjengelig.
          </p>
          <p>
            Shortlisten bør bygge på oppdatert informasjon, og når et interessant objekt dukker opp,
            bør tilgjengelighet og nøkkeldata bekreftes før du planlegger reisen rundt akkurat den boligen.
          </p>
          <Link className="text-button" href="/magasin/idealista-finn-ikke-alltid-til-a-stole-pa">
            Hvorfor boligportaler ikke alltid er fasit <ArrowRight size={16} />
          </Link>
        </div>
        <div>
          <p className="eyebrow">Område før objekt</p>
          <h2>En god bolig i feil område er fortsatt et dårlig kjøp</h2>
          <p>
            På Costa Blanca Nord kan noen få kilometer endre hverdagen mye: gangavstand, høydeforskjell,
            trafikk, vinterliv, skolevei, strand, utsikt og behovet for bil. Derfor sammenligner vi
            området før vi bruker tiden på konkrete boliger.
          </p>
          <Link className="text-button" href="/omrader">
            Sammenlign områdene <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <section className="section cornerstone-section">
        <div className="section-heading">
          <p className="eyebrow">Bruktbolig eller nybygg</p>
          <h2>Prosessen er lik i målet – men forskjellig underveis</h2>
          <p>
            Begge kjøp ender med juridisk kontroll, sluttoppgjør og offentlig overføring, men
            beslutningspunktene før overtakelse er forskjellige.
          </p>
        </div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Bruktbolig</th>
                <th>Nybygg</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Det du vurderer</strong></td>
                <td>Den konkrete boligen, området, teknisk tilstand og registrerte forhold.</td>
                <td>Prosjekt, utbygger, plantegning, materialer, levering og kontrakts-/betalingsmodell.</td>
              </tr>
              <tr>
                <td><strong>Betalingsløp</strong></td>
                <td>Reservasjon/kontrakt og sluttoppgjør etter avtalte frister.</td>
                <td>Ofte flere betalinger under byggeperioden før sluttoppgjør.</td>
              </tr>
              <tr>
                <td><strong>Viktige kontroller</strong></td>
                <td>Eierskap, heftelser, gjeld, registrering, eventuelle ombygginger og sameieforhold.</td>
                <td>Utbygger, kontrakt, bankgarantier for forskudd der reglene krever det, fremdrift og ferdigstillelse.</td>
              </tr>
              <tr>
                <td><strong>Tidslinje</strong></td>
                <td>Ofte uker når finansiering og dokumentasjon er klare, men varierer fra sak til sak.</td>
                <td>Følger byggeplanen og kan strekke seg over mange måneder eller år.</td>
              </tr>
              <tr>
                <td><strong>Fordypning</strong></td>
                <td><Link href="/guide/juridiske-fallgruver-boligkjop-spania">Juridiske fallgruver</Link></td>
                <td><Link href="/guide/nybygg-i-spania">Nybygg i Spania</Link></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="section split cornerstone-section">
        <div>
          <p className="eyebrow">Totalbudsjett</p>
          <h2>Hva bør du vite om kjøpskostnadene før boligsøket?</h2>
          <p>
            Bruk totalbudsjett, ikke bare kjøpesum. I Comunitat Valenciana er den generelle ITP-satsen
            på brukt eiendom 9 % fra 1. juni 2026, mens 11 % gjelder når verdien overstiger 1 million
            euro. Ved ordinært førstegangssalg av ny bolig gjelder normalt 10 % IVA, og den generelle
            AJD-satsen i Valencia-regionen er 1,4 % fra 1. juni 2026. Andre satser og særregler kan
            gjelde i enkelte situasjoner.
          </p>
          <p>
            Advokat, notar, registrering, eventuell bank/takst og andre kostnader kommer i tillegg.
            Derfor bør du bruke et konkret regnestykke for den aktuelle boligen.
          </p>
          <Link className="text-button" href="/guide/kostnader-boligkjop-spania">
            Se kostnadsguiden og kalkulatoren <ArrowRight size={16} />
          </Link>
        </div>
        <div>
          <p className="eyebrow">Finansiering</p>
          <h2>Lån bør avklares før en tidskritisk reservasjon</h2>
          <p>
            Dersom kjøpet krever finansiering, bør du vite hvor mye egen kapital som må være tilgjengelig,
            hvilken dokumentasjon banken trenger og hvor lang behandlingstid som er realistisk.
          </p>
          <p>
            Et lånetilsagn og en faktisk bolighandel er to forskjellige ting. Den konkrete boligen,
            taksten og bankens endelige kredittvurdering kan påvirke hvor mye som kan finansieres.
          </p>
          <Link className="text-button" href="/guide/boliglan-spansk-bank-nordmenn">
            Les den komplette boliglånsguiden <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <section className="section split process-after">
        <div>
          <p className="eyebrow">Etter overtakelsen</p>
          <h2>Prosessen stopper ikke hos notar</h2>
          <p>
            Etter kjøpet skal nøkler, strøm, vann, forsikring, felleskostnader og andre praktiske
            forhold fungere. For en feriebolig er det også viktig å bestemme hvem som følger opp
            eiendommen når den står tom.
          </p>
          <a
            className="text-button"
            href="https://care.zenecohomes.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Se keyholding og boligoppfølging hos Zen Eco Homes Care <ArrowRight size={16} />
          </a>
        </div>
        <div>
          <p className="eyebrow">Kunnskap underveis</p>
          <h2>Vil du forstå detaljene før du bestemmer deg?</h2>
          <p>
            Vi har samlet egne guider om finansiering, kjøpskostnader, juridisk kontroll og nybygg.
            Du kan fordype deg i det som er relevant for din situasjon, mens vi hjelper deg å holde
            oversikt over helheten.
          </p>
          <Link className="contact-button" href="/guide">Se alle guider</Link>
        </div>
      </section>

      <section className="section proof-section" id="faq">
        <div className="section-heading">
          <p className="eyebrow">Vanlige spørsmål</p>
          <h2>Spørsmål om kjøpsprosessen med Zen Eco Homes</h2>
          <p>
            Her svarer vi på spørsmål om roller, fremdrift og samarbeidet. De faglige detaljene ligger
            i de dedikerte guidene.
          </p>
        </div>
        <div className="faq-accordion buying-process-faq">
          {faq.map((item, index) => (
            <details key={item.q} open={index === 0}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="contact-section">
        <div>
          <p className="eyebrow">Neste steg</p>
          <h2>Start med behov, område og totalbudsjett</h2>
          <p>
            Fortell hvordan du skal bruke boligen, omtrent hvilket budsjett du har og hva som er
            viktigst i hverdagen. Da kan vi starte med områdene og boligtypene som faktisk passer.
          </p>
        </div>
        <ContactForm source="buying-process" />
      </section>

      <Footer />
    </main>
  );
}
