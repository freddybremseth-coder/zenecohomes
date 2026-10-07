import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Footer } from "@/components/Footer";
import { PropertyCard } from "@/components/PropertyCard";
import { SiteHeader } from "@/components/SiteHeader";
import { findEquivalentBySlug, seoHreflang, siteLocales, withLocale } from "@/lib/i18n";
import { getProperties, propertyMatchesType } from "@/lib/realtyflow";

const eq = findEquivalentBySlug("no", "guide/kjope-bolig-i-spania");
const languageLinks = eq
  ? siteLocales
      .filter((locale) => eq[locale])
      .map((locale) => ({
        locale,
        href: withLocale(locale, `/${eq[locale]}`),
        current: locale === "no",
      }))
  : undefined;

export const metadata: Metadata = {
  title: "Kjøpe bolig i Spania (2026): Dette må du vite før kjøp",
  description:
    "Kjøpe hus eller leilighet i Spania? Les om kjøpsprosessen, kostnadene, finansiering og fallgruvene du bør kjenne før du starter boligjakten.",
  alternates: {
    canonical: "/guide/kjope-bolig-i-spania",
    languages: eq ? seoHreflang(eq) : undefined,
  },
};

const eightSteps = [
  [
    "Avklar budsjett og finansiering",
    "Finn ut hvor mye du kan bruke totalt, inkludert egenkapital, finansiering og kostnader som kommer i tillegg til kjøpesummen.",
  ],
  [
    "Velg område og boligtype",
    "Bestem hvor du vil kjøpe, og om du ser etter leilighet, villa, rekkehus, finca eller en annen boligtype.",
  ],
  [
    "Finn boliger og dra på visning",
    "Sammenlign aktuelle boliger, undersøk nærområdet og kontroller at boligen samsvarer med annonsen og behovene dine.",
  ],
  [
    "Reserver boligen",
    "Når du har funnet riktig bolig, inngås det en reservasjonsavtale for å ta den av markedet mens dokumentasjon og vilkår gjennomgås.",
  ],
  [
    "Få boligen juridisk kontrollert",
    "En advokat bør kontrollere eierskap, heftelser, gjeld, tillatelser og opplysninger i eiendomsregisteret før du binder deg videre.",
  ],
  [
    "Skaff NIE og avklar det praktiske",
    "Sørg for at NIE-nummer, finansiering og eventuell fullmakt er på plass før sluttføringen av kjøpet.",
  ],
  [
    "Signer kjøpekontrakten og betal depositum",
    "Deretter følger normalt en privat kjøpekontrakt eller contrato de arras, med avtalte vilkår, frister og depositum.",
  ],
  [
    "Signer hos notar og registrer eierskapet",
    "Hos notar signeres det offentlige skjøtet, escritura pública, og sluttoppgjøret gjennomføres. Deretter registreres eierskapet i det spanske eiendomsregisteret før overtakelsen fullføres.",
  ],
] as const;

const houseChecks = [
  "om tomt, basseng og eventuelle tilbygg er korrekt registrert",
  "hvor mye vedlikehold eiendommen krever",
  "hva den årlige IBI-en faktisk er",
  "om boligen ligger i en urbanisasjon med felleskostnader",
  "om vann, avløp og øvrig infrastruktur er kommunalt tilknyttet eller privat",
] as const;

const apartmentChecks = [
  "hvor høye felleskostnadene er og hva de dekker",
  "om sameiet har planlagte større vedlikeholdsarbeider",
  "om det finnes utestående gjeld knyttet til leiligheten",
  "hvilke regler som gjelder for utleie",
  "om bod, parkering og terrasse faktisk følger boligen juridisk",
  "om heis og fellesområder er tilgjengelige og i god stand",
] as const;

const reservationChecks = [
  "hvor stort reservasjonsbeløpet er",
  "hvor lenge boligen tas av markedet",
  "om beløpet trekkes fra kjøpesummen senere",
  "hva som skjer dersom juridisk kontroll avdekker problemer",
  "hvilke vilkår som gjelder dersom kjøper eller selger trekker seg",
  "når neste kontrakt og betaling skal gjennomføres",
] as const;

const legalChecks = [
  "hvem som faktisk står registrert som eier",
  "om det finnes lån, heftelser eller andre krav knyttet til eiendommen",
  "om oppgitt areal stemmer med registrerte opplysninger",
  "om tilbygg, basseng, terrasse eller andre endringer er lovlig oppført og registrert",
  "om det finnes utestående skatter eller felleskostnader",
  "om eiendommen har nødvendige tillatelser og sertifikater",
  "om det finnes begrensninger, servitutter eller andre forhold som påvirker bruken av eiendommen",
] as const;

const faq = [
  {
    q: "Hvor mange nordmenn kjøper bolig i Spania?",
    a: "Det finnes ikke ett fast årlig tall som beskriver norske kjøpere alene i de korte offisielle markedssammendragene, og antallet varierer fra år til år. Det sikre bildet er at utenlandske kjøpere utgjør en stor del av markedet, særlig på Costa Blanca. I andre kvartal 2026 sto utenlandske kjøpere for 15,98 % av boligkjøpene i Spania og 31,03 % i Comunitat Valenciana. For deg som kjøper er likevel område, totalbudsjett og kvaliteten på den konkrete kjøpsprosessen viktigere enn totalvolumet alene.",
  },
  {
    q: "Hva koster det å kjøpe bolig i Spania?",
    a: "Som tommelfingerregel bør du budsjettere med omtrent 10–15 % utover kjøpesummen, men det faktiske beløpet avhenger av region, boligtype, juridisk bistand og eventuell finansiering. Bruktbolig utløser ITP, mens nybygg normalt har 10 % IVA i tillegg til AJD og øvrige kostnader.",
  },
  {
    q: "Kan nordmenn kjøpe bolig i Spania?",
    a: "Ja. Nordmenn kan kjøpe og eie bolig i Spania. I praksis trenger du NIE-nummer for å gjennomføre kjøpet og håndtere skatt, bank og registrering, og du bør sørge for uavhengig juridisk kontroll før du binder deg.",
  },
  {
    q: "Hvordan finansiere kjøp av bolig i Spania?",
    a: "De vanligste løsningene er egenkapital, lån med sikkerhet i bolig eller andre verdier i Norge, eller boliglån med sikkerhet i den spanske eiendommen. DNB Luxembourg tilbyr lån med pant i bolig i Spania, og du kan også søke hos spanske banker. Låneramme, takst, dokumentasjon og total kostnad bør avklares tidlig.",
  },
  {
    q: "Hvor lang tid tar det å kjøpe bolig i Spania?",
    a: "Tidsbruken avhenger av boligtype, dokumentasjon, finansiering og hvor raskt juridiske kontroller kan gjennomføres. Et bruktboligkjøp kan ofte gjennomføres på rundt 8–10 uker når alt er ryddig, mens nybygg følger prosjektets bygge- og betalingsplan og kan ta 12–24 måneder eller mer.",
  },
  {
    q: "Er det lurt å kjøpe leilighet i Spania?",
    a: "Det kan være et godt valg dersom du ønsker en lettstelt feriebolig med mindre ansvar for utvendig vedlikehold. Før kjøpet bør du kontrollere felleskostnader, sameiets økonomi, planlagte arbeider, utleieregler og at parkering, bod og terrasse juridisk følger boligen dersom dette er opplyst.",
  },
] as const;

function PropertyShowcase({
  title,
  eyebrow,
  properties,
  href,
  linkLabel,
}: {
  title: string;
  eyebrow: string;
  properties: Awaited<ReturnType<typeof getProperties>>;
  href: string;
  linkLabel: string;
}) {
  return (
    <div style={{ marginTop: 44 }}>
      <div className="section-heading">
        <p className="eyebrow">{eyebrow}</p>
        <h3>{title}</h3>
      </div>
      {properties.length > 0 ? (
        <div className="property-grid">
          {properties.slice(0, 3).map((property, index) => (
            <PropertyCard key={property.id || index} property={property} />
          ))}
        </div>
      ) : (
        <p>Utvalget oppdateres løpende. Åpne boligoversikten for å se dagens tilgjengelige alternativer.</p>
      )}
      <div className="center-action" style={{ marginTop: 22 }}>
        <Link className="text-button" href={href}>
          {linkLabel} <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}

export default async function BuyInSpainGuidePage() {
  const inventory = await getProperties(0, "zeneco");
  const townhouses = inventory.filter((property) => propertyMatchesType(property, "Rekkehus")).slice(0, 3);
  const apartments = inventory.filter((property) => propertyMatchesType(property, "Leilighet")).slice(0, 3);
  const villas = inventory.filter((property) => propertyMatchesType(property, "Villa")).slice(0, 3);

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
    <main className="cornerstone-guide">
      <SiteHeader languageLinks={languageLinks} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="page-hero compact-hero image-hero cornerstone-hero">
        <div className="cornerstone-hero-layout">
          <div className="cornerstone-hero-copy">
            <p className="eyebrow">
              Guide · <Link href="/om-oss/freddy">Freddy Bremseth</Link> · Oppdatert 7. oktober 2026
            </p>
            <h1>Kjøpe bolig i Spania (2026) – Dette må du vite</h1>
            <p>
              Kjøpe hus eller leilighet i Spania? Les om kjøpsprosessen, kostnadene og fallgruvene du bør se opp for før du starter boligjakten.
            </p>
            <div className="hero-actions">
              <Link className="contact-button" href="/eiendommer">
                Se boliger til salgs <ArrowRight size={17} />
              </Link>
              <Link className="text-button light" href="/booking">Book en uforpliktende boligprat</Link>
            </div>
          </div>

          <aside className="cornerstone-hero-panel" aria-label="Kort om guiden">
            <p className="eyebrow">Praktisk kjøperguide</p>
            <h2>Dette får du svar på</h2>
            <ul>
              <li>Hvordan kjøpsprosessen fungerer steg for steg</li>
              <li>Hva boligkjøpet faktisk koster</li>
              <li>Hvordan det spanske markedet skiller seg fra Norge</li>
              <li>Hva du bør kontrollere før du reserverer</li>
              <li>Hus, leilighet, villa, finca og nybygg</li>
            </ul>
            <Link className="text-button light" href="/om-oss/freddy">
              Om forfatteren <ArrowRight size={15} />
            </Link>
          </aside>
        </div>
      </section>

      <nav className="guide-index-band cornerstone-index" aria-label="Innhold i guiden">
        <div>
          <span>På denne siden:</span>
          <a href="#hvordan-kjope">Hvordan kjøpe</a>
          <a href="#for-boligjakten">Før boligjakten</a>
          <a href="#boliger-til-salgs">Finne bolig</a>
          <a href="#boligtype">Boligtype</a>
          <a href="#kjopsprosess">Steg for steg</a>
          <a href="#etter-kjopet">Etter kjøpet</a>
          <a href="#erfaringer">Mine erfaringer</a>
          <a href="#faq">FAQ</a>
        </div>
      </nav>

      <section className="section cornerstone-section">
        <div className="section-heading">
          <p className="eyebrow">Innledning</p>
          <p>
            Å kjøpe bolig i Spania kan virke som en komplisert og forvirrende prosess. Du har helt sikkert sett identiske boliger på flere nettsider, noen ganger med ulike bilder, beskrivelser og priser.
          </p>
          <p>
            Jeg har fulgt kjøpsprosessen tett fra begge sider, både som selger og privat kjøper, og vet godt hvilke spørsmål som dukker opp underveis. Her får du svar på det som er viktigst å vite før du kjøper hus, leilighet eller annen eiendom i Spania.
          </p>
        </div>
      </section>

      <section className="section cornerstone-section" id="hvordan-kjope">
        <div className="section-heading">
          <p className="eyebrow">Kort svar først</p>
          <h2>Hvordan kjøpe bolig i Spania?</h2>
          <p>Et boligkjøp i Spania følger vanligvis en fast prosess i åtte steg:</p>
        </div>

        <div className="journey-overview">
          {eightSteps.map(([title, text], index) => (
            <article key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="section-heading" style={{ marginTop: 36 }}>
          <p>
            Kjøper du bruktbolig kan du normalt flytte inn etter rundt 10 uker. Ved nybygg kjøper du ofte før boligen er ferdigstilt, og må derfor vente en god del lengre.
          </p>
          <p>
            Et kjøp av nybygg følger også en litt annen prosess, eksempelvis ved at kjøpesummen deles opp og betales underveis i byggeperioden.
          </p>
          <Link className="text-button" href="/guide/nybygg-i-spania">
            Les kjøperguiden for nybygg i Spania <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <section className="section cornerstone-section" id="for-boligjakten">
        <div className="section-heading">
          <p className="eyebrow">Før boligjakten</p>
          <h2>Viktig før du begynner å se på hus og leilighet i Spania</h2>
          <p>
            Før du begynner å lete etter konkrete boliger i Spania, bør du forstå rammene rundt kjøpet. Min erfaring er at mange starter i feil ende, noe som ofte leder til problemer. Her er tre ting du bør vite før du starter boligjakten.
          </p>
        </div>

        <div className="preflight-list">
          <article className="preflight-item">
            <CheckCircle2 size={19} />
            <div>
              <h3>1. Kjøpesummen er ikke totalkostnaden</h3>
              <p>
                Som en tommelfingerregel bør du regne med at et boligkjøp i Spania koster omtrent 10–15 % mer enn selve kjøpesummen. Det nøyaktige beløpet avhenger først og fremst av om du kjøper bruktbolig eller nybygg, hvilken region boligen ligger i og om kjøpet finansieres med boliglån.
              </p>
              <p>
                Ved kjøp av bruktbolig betaler kjøperen ITP (Impuesto sobre Transmisiones Patrimoniales), og satsen varierer mellom de autonome regionene i Spania. Kjøper du nybygg direkte fra en utbygger, betales normalt 10 % IVA (spansk merverdiavgift), i tillegg til AJD (dokumentavgift) som også varierer regionalt.
              </p>
              <p>I tillegg bør du ta høyde for:</p>
              <ul className="article-bullets">
                <li>advokat og juridisk kontroll</li>
                <li>notar</li>
                <li>registrering i eiendomsregisteret</li>
                <li>eventuell gestoría</li>
                <li>takst og andre kostnader dersom du finansierer kjøpet</li>
                <li>valutaveksling dersom pengene skal overføres fra norske kroner til euro</li>
              </ul>
              <p>
                Husk også at kostnadene ikke stopper når du får nøklene. Som boligeier må du regne med løpende utgifter til blant annet kommunal eiendomsskatt (IBI), felleskostnader dersom boligen ligger i et sameie, forsikring, strøm, vann og vedlikehold.
              </p>
              <Link className="text-button" href="/guide/lopende-kostnader-eie-bolig-spania">
                Les om hva det koster å eie bolig i Spania <ArrowRight size={15} />
              </Link>
            </div>
          </article>

          <article className="preflight-item">
            <CheckCircle2 size={19} />
            <div>
              <h3>2. Velg område før bolig</h3>
              <p>
                Området har ofte større betydning for hvor fornøyd du blir med kjøpet enn selve boligen. Min erfaring er at mange begynner med å lete etter den fineste boligen innenfor budsjettet og vurderer området etterpå. Det kan fort bli feil rekkefølge.
              </p>
              <p>
                En bolig kan være svært attraktiv på papiret, men mindre praktisk dersom du senere oppdager at du er avhengig av bil til alt, at området er langt roligere utenfor sesongen enn du forventet, eller at avstanden til flyplassen blir upraktisk.
              </p>
              <p>
                Derfor er det lurt å starte med hvordan du faktisk ønsker å bruke boligen. Behovene blir ganske forskjellige dersom du vil ha gangavstand til restauranter og strand, sammenlignet med om du ønsker større tomt, mer ro og lavere boligpris i innlandet.
              </p>
              <p>
                I vår <Link href="/guide/omradeguide-eiendomskjop-i-spania">områdeguide for boligkjøp i Spania</Link> kan du lese mer om de ulike regionene og sammenligne blant annet prisnivå, klima, avstand til flyplass og servicetilbud.
              </p>
              <Link className="text-button" href="/omrader">
                Utforsk områdene våre <ArrowRight size={15} />
              </Link>
            </div>
          </article>

          <article className="preflight-item">
            <CheckCircle2 size={19} />
            <div>
              <h3>3. Det spanske boligmarkedet fungerer annerledes enn det norske</h3>
              <p>
                Boligmarkedet i Spania er strukturert på en annen måte enn hjemme. Det finnes ikke én nasjonal meglerordning med de samme kravene over hele landet, og reglene for eiendomsformidling varierer mellom de autonome regionene.
              </p>
              <p>
                En annen forskjell er hvordan boligene markedsføres. I Spania kan den samme leiligheten eller det samme huset være annonsert av flere meglere samtidig, med ulike bilder og beskrivelser.
              </p>
              <p>
                Det betyr ikke nødvendigvis at noe er galt, men det gjør boligjakten mer uoversiktlig. Da jeg kjøpte min første leilighet i Spania, opplevde jeg selv hvor vanskelig det kunne være å vite hvilke opplysninger som faktisk stemte.
              </p>
              <p>
                Heldigvis hadde jeg en lokal rådgiver som kunne rydde opp i informasjonen og svare på spørsmål underveis. Derfor mener jeg det er en klar fordel å ha én rådgiver som kjenner området, kan verifisere opplysningene i annonsene og hjelpe deg med å sortere hvilke boliger som faktisk er relevante.
              </p>
              <Link className="contact-button" href="/booking">Book en uforpliktende boligprat</Link>
            </div>
          </article>
        </div>
      </section>

      <section className="section proof-section cornerstone-section" id="boliger-til-salgs">
        <div className="section-heading">
          <p className="eyebrow">Boligsøk</p>
          <h2>Hvor finner jeg boliger til salgs i Spania?</h2>
          <p>
            Hos ZenEcoHomes finner du et bredt utvalg av <Link href="/eiendommer">boliger til salgs i Spania</Link>, inkludert hus, leiligheter, villaer og fincaer i områdene vi jobber i. Finner du ikke det du ser etter i boligoversikten vår, kan vi hjelpe deg å finne alternativer gjennom nettverket vårt.
          </p>
          <p>
            Mange nordmenn starter også den spanske boligdrømmen på Finn og Idealista. Det er forståelig, men <Link href="/magasin/idealista-finn-ikke-alltid-til-a-stole-pa">Finn og Idealista er ikke alltid til å stole på</Link>. Utdaterte annonser og boliger som allerede er reservert er bare noen av problemene med store boligportaler.
          </p>
          <p>
            Derfor bør du få bekreftet pris og tilgjengelighet, samt rådføre deg med noen som kjenner det lokale markedet før du går videre.
          </p>
        </div>

        <div className="section-heading" style={{ marginTop: 34 }}>
          <h3>Hva bør man se etter i en boligannonse?</h3>
          <p>
            De som vurderer å kjøpe eiendom i Spania vil naturligvis fokusere mest på faktorer som solforhold, basseng og avstanden til strand og flyplass. Men det er minst like viktig å se på forholdene som kan påvirke kostnader og vedlikehold.
          </p>
        </div>
        <div className="proof-grid">
          <article>
            <h3>Energimerking</h3>
            <p>En svak energiklasse kan bety høyere strømforbruk og større behov for oppgraderinger senere. Dette blir også mer relevant i takt med strengere krav til energieffektivitet i europeiske bygg.</p>
          </article>
          <article>
            <h3>Felleskostnader</h3>
            <p>Sjekk hvor høye de er, hva de dekker og om sameiet har planlagt større arbeider. Et lavt månedsbeløp er ikke nødvendigvis positivt dersom det samtidig ligger større vedlikehold foran.</p>
          </article>
          <article>
            <h3>Oppgitt areal</h3>
            <p>Skill mellom boareal, terrasse, tomt og eventuelle fellesarealer. Tallene i annonsen kan være presentert på ulike måter og bør sammenlignes med den offisielle dokumentasjonen.</p>
          </article>
          <article>
            <h3>Lovlighet og registrering</h3>
            <p>Tilbygg, basseng, innglassede terrasser eller andre endringer bør være korrekt godkjent og registrert. Dette er ikke alltid synlig i annonsen og bør kontrolleres før kjøpet.</p>
          </article>
          <article>
            <h3>Gjeld og heftelser</h3>
            <p>En bolig kan ha lån, utestående krav eller andre heftelser knyttet til seg. Dette må undersøkes gjennom blant annet eiendomsregisteret før du går videre.</p>
          </article>
          <article>
            <h3>Byggeår og større oppgraderinger</h3>
            <p>Eldre boliger kan være gode kjøp, men det er viktig å vite hva som er gjort av oppgraderinger på for eksempel strøm, rør, tak og klimaanlegg.</p>
          </article>
          <article>
            <h3>Tilgjengelighet og pris</h3>
            <p>Bekreft at boligen fortsatt er til salgs og at prisantydningen er oppdatert. I et marked der samme bolig kan ligge hos flere meglere samtidig, kan informasjonen variere fra annonse til annonse.</p>
          </article>
        </div>
      </section>

      <section className="section cornerstone-section" id="boligtype">
        <div className="section-heading">
          <p className="eyebrow">Boligtype</p>
          <h2>Hus, leilighet eller villa – hva passer deg?</h2>
          <p>
            Hva du bør kjøpe av hus, leilighet og villa i Spania handler om langt mer enn bare pris og størrelse. Forskjellene ligger også i hvor mye vedlikehold du ønsker, hvor mye privatliv du trenger, hvilke felleskostnader du er komfortabel med og hvordan du faktisk skal bruke boligen.
          </p>
        </div>

        <div className="section-heading" style={{ marginTop: 34 }}>
          <h3>Kjøpe hus i Spania</h3>
          <p>
            Når du kjøper hus i Spania får du noen opplagte fordeler som mer privatliv og mindre avhengighet av fellesarealer og sameieregler. Det er også vanlig at hus har lavere eller ingen fellesutgifter dersom eiendommen ikke ligger i en urbanisasjon.
          </p>
          <p>
            Samtidig følger det større ansvar for eiendommen enn ved kjøp av leilighet. Du er selv ansvarlig for å dekke vedlikehold av for eksempel fasade, tak, uteområder, basseng og tekniske installasjoner.
          </p>
          <p>
            Et hus vil naturligvis koste mer enn en leilighet, spesielt hvis du vil bo nær stranden, men når det gjelder skatt og øvrige kostnader, er det ikke slik at hus automatisk beskattes hardere enn leiligheter. Den kommunale eiendomsskatten, IBI, påvirkes blant annet av eiendommens kadastrale verdi og hvilken sats kommunen bruker.
          </p>
          <p>
            Et større hus med tomt kan derfor få høyere løpende skatt enn en mindre leilighet, men det skyldes verdien og eiendommen – ikke at det er et hus i seg selv.
          </p>
          <p>Før du kjøper et spansk hus, bør du undersøke:</p>
          <ul className="article-bullets">
            {houseChecks.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>

        <PropertyShowcase
          eyebrow="Utvalgte rekkehus"
          title="Tre rekkehus fra boligoversikten"
          properties={townhouses}
          href="/eiendommer?q=&type=Rekkehus&minPrice=&maxPrice=&bedrooms=&bathrooms=&lifestyle=&minSize="
          linkLabel="Se alle rekkehus"
        />

        <div className="section-heading" style={{ marginTop: 50 }}>
          <h3>Kjøpe leilighet i Spania</h3>
          <p>
            Et leilighetskjøp er ypperlig om du ønsker noe lettstelt og ikke ønsker ansvar for utvendig vedlikehold. Mange leilighetsbygg har også felles basseng, grøntområder og andre fasiliteter som kan være kostbare å ha alene.
          </p>
          <p>
            Men en viktig nyanse er sameiets økonomi. Felleskostnadene kan være høye, spesielt hos bygg med mange fasiliteter. Det er også verdt å undersøke hvorvidt bygget har planlagte rehabiliteringer, som i så fall kan føre til ekstra innbetalinger utover de vanlige felleskostnadene.
          </p>
          <p>Hvis det er leilighet du vil kjøpe i Spania, bør du sjekke følgende i forkant:</p>
          <ul className="article-bullets">
            {apartmentChecks.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>

        <PropertyShowcase
          eyebrow="Utvalgte leiligheter"
          title="Tre leiligheter fra boligoversikten"
          properties={apartments}
          href="/eiendommer?q=&type=Leilighet&minPrice=&maxPrice=&bedrooms=&bathrooms=&lifestyle=&minSize="
          linkLabel="Se alle leiligheter"
        />

        <div className="section-heading" style={{ marginTop: 50 }}>
          <h3>Villa eller finca?</h3>
          <p>En villa og finca kan ved første øyekast ligne på hverandre, men det er likevel noen markante forskjeller.</p>
          <ul className="article-bullets">
            <li><strong>Villa:</strong> Ligger gjerne i et etablert boligområde eller en urbanisasjon.</li>
            <li><strong>Finca:</strong> Er en landlig eiendom med større tomt og større avstand til naboer.</li>
          </ul>
          <p>
            En finca kan gi langt mer plass for pengene, og det kan være et spennende alternativ hvis du ønsker stor tomt, mer privatliv eller kanskje plass til appelsintrær, oliventrær eller en liten vingård.
          </p>
          <p>
            Slike eiendommer finnes særlig i <Link href="/omrader/innlandet">innlandet i Alicante</Link>, hvor prisnivået ofte er lavere enn langs kysten. Ulempen med en finca er at man får lengre avstand til strand og internasjonale miljøer.
          </p>
        </div>

        <PropertyShowcase
          eyebrow="Utvalgte villaer"
          title="Tre villaer fra boligoversikten"
          properties={villas}
          href="/eiendommer?q=&type=Villa&minPrice=&maxPrice=&bedrooms=&bathrooms=&lifestyle=&minSize="
          linkLabel="Se alle villaer"
        />

        <div className="section-heading" style={{ marginTop: 50 }}>
          <h3>Nybygg eller bruktbolig?</h3>
          <p>
            Forskjellen mellom nybygg og bruktbolig handler først og fremst om hva du kjøper, når du kan overta og hvor mye usikkerhet du er komfortabel med. Med bruktbolig kan du se nøyaktig hva du kjøper, overta raskere og velge fra et større utvalg.
          </p>
          <p>
            Nybygg gir på sin side moderne standard, mindre vedlikeholdsbehov og bedre forutsigbarhet rundt boligens tekniske tilstand. Sistnevnte er noe jeg mener er lett å undervurdere.
          </p>
          <p>
            Jeg har selv tatt over en spansk bruktbolig, som tilsynelatende var i god stand, men hvor store deler av gulvet måtte rives grunnet problemer med vannrørene. Denne enkelthendelsen betyr ikke at det er risikabelt å kjøpe bruktbolig i Spania, men den påpeker viktigheten av å undersøke teknisk stand og tidligere ombygging før du binder deg.
          </p>
        </div>

        <div className="table-wrap">
          <table>
            <thead>
              <tr><th></th><th>Nybygg</th><th>Bruktbolig</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Overtakelse</strong></td><td>Som regel et sted mellom 12 og 24 måneder</td><td>Inntil 10 uker</td></tr>
              <tr><td><strong>Skatt ved kjøp</strong></td><td>Normalt 10 % IVA, i tillegg til AJD</td><td>ITP varierer etter region og situasjon</td></tr>
              <tr><td><strong>Betaling</strong></td><td>Kjøpesummen betales ofte i flere omganger under byggeperioden</td><td>Depositum først, resten ved signering hos notar</td></tr>
              <tr><td><strong>Vedlikehold</strong></td><td>Begrenset de første fem til ti årene</td><td>Avhenger av alder og tidligere vedlikehold</td></tr>
              <tr><td><strong>Teknisk risiko</strong></td><td>Lavere grunnet nye installasjoner og lovbestemte garantier</td><td>Høyere. Skjulte feil og eldre installasjoner kan forekomme</td></tr>
              <tr><td><strong>Tilpasninger</strong></td><td>Ofte mulig å velge enkelte materialer og løsninger</td><td>Du kjøper i hovedsak boligen slik den står</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="section cornerstone-section" id="kjopsprosess">
        <div className="section-heading">
          <p className="eyebrow">Kjøpsprosessen</p>
          <h2>Slik kjøper du eiendom i Spania steg for steg</h2>
          <p>
            Et hus- eller leilighetskjøp i Spania går normalt fra behovskartlegging og visning til juridisk kontroll, finansiering, kontrakter og til slutt signering hos notar. Selve prosessen er ikke nødvendigvis komplisert, men rekkefølgen er viktig.
          </p>
          <p>
            Du bør særlig unngå å betale større beløp eller signere bindende avtaler før boligen og dokumentasjonen er kontrollert.
          </p>
          <p>
            Min erfaring er at prosessen blir langt enklere når de viktigste avklaringene tas tidlig. Videre går jeg gjennom hvert steg, og forklarer hvordan vi i ZenEcoHomes kan hjelpe deg med boligjakten.
          </p>
          <Link className="text-button" href="/kjopsprosessen">
            Les mer om hvordan vi hjelper deg med boligkjøpet <ArrowRight size={16} />
          </Link>
        </div>

        <div className="process-editorial">
          <div className="process-timeline">
            <article className="process-row">
              <span>01</span>
              <div>
                <h3>1. Behovskartlegging</h3>
                <p>
                  Et godt boligkjøp starter med å avklare hva du faktisk trenger. Hos Zen Eco Homes bruker vi behovskartleggingen til å snevre inn søket og unngå at du bruker tid på boliger som aldri var aktuelle.
                </p>
                <p>
                  Vi ser blant annet på hvor ofte du skal bruke boligen, hvor avhengig du ønsker å være av bil, hvor viktig nærhet til strand og servicetilbud er, og hvor mye vedlikehold du er komfortabel med.
                </p>
                <p>
                  Dette gjør det enklere å finne ut om du bør se mot kysten, innlandet, leilighet, villa, finca eller nybygg – og hvilke områder som faktisk passer budsjettet og hverdagen du ser for deg.
                </p>
                <Link href="/booking">Book en uforpliktende prat <ArrowRight size={15} /></Link>
              </div>
            </article>

            <article className="process-row">
              <span>02</span>
              <div>
                <h3>2. Visningstur</h3>
                <p>
                  En visningstur er en planlagt tur der du ser flere aktuelle boliger og samtidig blir bedre kjent med områdene du vurderer. Målet er ikke å presse frem et kjøp, men å gi deg et bedre beslutningsgrunnlag.
                </p>
                <p>
                  Hos Zen Eco Homes legger vi opp turen på forhånd, basert på behovene og budsjettet ditt. Det betyr at vår <Link href="/visningstur">visningstur til Spania</Link> består utelukkende av boliger som er relevante for deg.
                </p>
              </div>
            </article>

            <article className="process-row">
              <span>03</span>
              <div>
                <h3>3. Reservasjon</h3>
                <p>
                  Når du har funnet en bolig du ønsker å gå videre med, er neste steg ofte å reservere den. En reservasjonsavtale brukes for å ta boligen midlertidig av markedet, mens dokumentasjon, juridiske forhold og videre vilkår blir gjennomgått.
                </p>
                <p>
                  Ved reservasjon betales det normalt et mindre beløp. Størrelsen varierer fra handel til handel, og derfor er det viktig å lese avtalen nøye før du betaler.
                </p>
                <p>Sjekk særlig:</p>
                <ul className="article-bullets">
                  {reservationChecks.map((item) => <li key={item}>{item}</li>)}
                </ul>
                <p>
                  Reservasjon betyr ikke nødvendigvis at hele kjøpet er endelig avgjort, men avtalen kan likevel få økonomiske konsekvenser. Derfor bør du vite nøyaktig hva du signerer og på hvilke vilkår før pengene overføres.
                </p>
                <p>
                  Etter reservasjonen går prosessen normalt videre med juridisk kontroll av eiendommen før du signerer en mer omfattende kjøpekontrakt.
                </p>
              </div>
            </article>

            <article className="process-row">
              <span>04</span>
              <div>
                <h3>4. Få eiendommen juridisk kontrollert</h3>
                <p>
                  Før du binder deg til kjøpet, bør eiendommen kontrolleres juridisk av en uavhengig advokat. Målet er å bekrefte at boligen faktisk kan selges på de vilkårene du er forespeilet, og at det ikke følger med problemer som først dukker opp etter overtakelsen.
                </p>
                <p>En grundig kontroll bør blant annet avklare:</p>
                <ul className="article-bullets">
                  {legalChecks.map((item) => <li key={item}>{item}</li>)}
                </ul>
                <p>
                  Dette er viktig fordi spesielt eldre boliger kan ha blitt bygget om eller utvidet over tid uten at alle endringene nødvendigvis er registrert korrekt. Selv det minste avvik kan skape problemer ved videresalg, finansiering eller senere søknader om nye endringer.
                </p>
                <Link href="/guide/juridiske-fallgruver-boligkjop-spania">
                  Les mer om juridiske fallgruver ved boligkjøp i Spania <ArrowRight size={15} />
                </Link>
              </div>
            </article>

            <article className="process-row">
              <span>05</span>
              <div>
                <h3>5. Skaff NIE-nummer og avklar finansiering</h3>
                <p>
                  Du må ha et <Link href="/guide/nie-skattenummer-spania">NIE-nummer</Link> for å gjennomføre et boligkjøp i Spania. NIE (Número de Identidad de Extranjero) er identifikasjonsnummeret utlendinger bruker i Spania, blant annet i forbindelse med boligkjøp, skatt, bankforhold og andre offentlige eller økonomiske prosesser.
                </p>
                <p>Når det gjelder finansiering, finnes det flere vanlige løsninger:</p>
                <ul className="article-bullets">
                  <li><strong>Lån med sikkerhet i bolig i Norge:</strong> Du øker eller refinansierer boliglånet hjemme og bruker kapitalen til kjøpet i Spania.</li>
                  <li><strong><Link href="/guide/boliglan-spansk-bank-nordmenn">Boliglån i Spania:</Link></strong> Du låner med sikkerhet i den spanske eiendommen. DNB Luxembourg tilbyr denne typen lån til bolig i Spania, og du kan også søke lån i en spansk bank.</li>
                </ul>
              </div>
            </article>

            <article className="process-row">
              <span>06</span>
              <div>
                <h3>6. Signering hos notar</h3>
                <p>
                  Når kjøpekontrakten er på plass og alle vilkår er oppfylt, fullføres handelen hos notar. Her signeres det offentlige skjøtet, escritura pública, og resten av kjøpesummen betales i henhold til avtalen.
                </p>
                <p>
                  Notaren kontrollerer identiteten til partene og formaliserer overføringen av eiendommen. Før signeringen bør advokaten din ha gjennomgått dokumentasjonen og bekreftet at boligen kan overtas på de avtalte vilkårene.
                </p>
                <p>Dersom du ikke kan møte personlig, kan handelen i mange tilfeller gjennomføres ved hjelp av fullmakt.</p>
              </div>
            </article>

            <article className="process-row">
              <span>07</span>
              <div>
                <h3>7. Registrering og overtakelse</h3>
                <p>
                  Etter signeringen skal relevante skatter og avgifter betales, og eierskapet registreres i det spanske eiendomsregisteret.
                </p>
                <p>
                  Samtidig starter den praktiske overtakelsen. Du får nøklene og bør sørge for at blant annet strøm, vann, forsikring og eventuelle felleskostnader overføres til ditt navn.
                </p>
                <p>
                  Når registreringen og de praktiske forholdene er på plass, er boligkjøpet formelt avsluttet og eiendommen klar til bruk.
                </p>
              </div>
            </article>
          </div>

          <aside className="process-deeper">
            <p className="eyebrow">Gå dypere</p>
            <h3>Guider det er smart å lese underveis</h3>
            <Link href="/guide/nie-skattenummer-spania">NIE i Spania <ArrowRight size={15} /></Link>
            <Link href="/guide/boliglan-spansk-bank-nordmenn">Boliglån i Spania <ArrowRight size={15} /></Link>
            <Link href="/guide/juridiske-fallgruver-boligkjop-spania">Juridiske fallgruver <ArrowRight size={15} /></Link>
            <Link href="/guide/nybygg-i-spania">Nybygg i Spania <ArrowRight size={15} /></Link>
          </aside>
        </div>
      </section>

      <section className="section cornerstone-section" id="etter-kjopet">
        <div className="section-heading">
          <p className="eyebrow">Etter overtakelsen</p>
          <h2>Hva skjer etter kjøpet?</h2>
          <p>
            Når boligen er overtatt, starter en ny del av prosessen. Nå handler det først og fremst om å få de praktiske forholdene på plass og sørge for at løpende kostnader, skatt og vedlikehold blir fulgt opp.
          </p>
          <p>
            Det første du bør gjøre er å kontrollere at strøm, vann, forsikring og eventuelle felleskostnader er registrert riktig. Har du kjøpt leilighet eller bolig i en urbanisasjon, bør sameiet også ha korrekte kontakt- og betalingsopplysninger.
          </p>
          <p>
            Dersom du ikke bor fast i Spania, bør du også tenke gjennom hvem som følger opp boligen når du er borte. Det kan være nyttig med noen som kan kontrollere eiendommen, håndtere mindre problemer og sørge for at boligen er klar før du kommer tilbake.
          </p>
          <p>
            Gjennom <a href="https://care.zenecohomes.com/" target="_blank" rel="noopener noreferrer">Zen Eco Homes Care</a> tilbyr vi også keyholding og oppfølging av boligen når du ikke er i Spania. Det gir deg et fast kontaktpunkt dersom noe skulle oppstå mellom oppholdene.
          </p>
        </div>
      </section>

      <section className="section split cornerstone-section cornerstone-experience" id="erfaringer">
        <div>
          <p className="eyebrow">Mine erfaringer</p>
          <h2>Mine erfaringer med å kjøpe bolig i Spania</h2>
          <p>
            Da jeg kjøpte min første bolig i Spania, merket jeg raskt hvor annerledes prosessen var sammenlignet med Norge. Ting tar ofte litt lengre tid, og flere prosesser er mindre digitale enn vi er vant til hjemme.
          </p>
          <p>
            Første gang jeg skulle ordne bankforhold i Spania, føltes det nesten som å bli sendt tilbake til 80-tallet. Jeg måtte fysisk møte opp på bankkontoret og gå gjennom dokumentasjonen der. Det er ikke nødvendigvis vanskelig, men du må være forberedt på at ting ikke alltid løses med BankID og noen få klikk.
          </p>
          <p>
            Et annet inntrykk jeg satt igjen med, var mengden papirarbeid. Pass, NIE, bankpapirer, kontrakter, skatteopplysninger og andre dokumenter dukker opp flere steder i prosessen.
          </p>
        </div>
        <div>
          <p>
            Samtidig er dette småting sett opp mot det jeg faktisk fikk igjen. Når kjøpet først er gjennomført, sitter du igjen med det som faktisk betyr noe: et eget sted i solen, mer tid utendørs, et behagelig klima og friheten til å reise ned når det passer.
          </p>
          <p>
            Derfor er det ikke de praktiske hindrene jeg husker best i ettertid, men hvor mye glede jeg faktisk har hatt av å kjøpe bolig i Spania. Med litt tålmodighet og riktige folk rundt deg er prosessen fullt håndterbar.
          </p>
          <Link className="text-button" href="/om-oss/freddy">
            Les mer om Freddy Bremseth <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <section className="contact-section">
        <div>
          <p className="eyebrow">Klar til å begynne boligjakten?</p>
          <h2>Start med en uforpliktende boligprat</h2>
          <p>
            Vi kan hjelpe deg med områdevalg, boligtype, aktuelle boliger og neste steg i kjøpsprosessen.
          </p>
        </div>
        <Link className="contact-button" href="/booking">
          Book en prat <ArrowRight size={18} />
        </Link>
      </section>

      <section className="section cornerstone-section" id="faq">
        <div className="section-heading">
          <p className="eyebrow">Vanlige spørsmål</p>
          <h2>Vanlige spørsmål om å kjøpe bolig i Spania</h2>
        </div>
        <div className="faq-accordion">
          {faq.map((item, index) => (
            <details key={item.q} open={index === 0}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
