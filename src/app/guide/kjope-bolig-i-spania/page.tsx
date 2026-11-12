import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Footer } from "@/components/Footer";
import { PurchaseBudgetCalculator } from "@/components/PurchaseBudgetCalculator";
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
  title: "Kjøpe bolig i Spania (2026) – komplett guide for nordmenn",
  description:
    "Komplett guide for nordmenn som vil kjøpe bolig i Spania. Les om kjøpsprosessen, kostnader, finansiering, områdevalg, boligtyper og overtakelse.",
  alternates: {
    canonical: "/guide/kjope-bolig-i-spania",
    languages: eq ? seoHreflang(eq) : undefined,
  },
};

const apartmentChecks = [
  "hvor høye felleskostnadene er og hva de dekker",
  "om sameiet har planlagte større vedlikeholdsarbeider",
  "om det finnes utestående gjeld knyttet til leiligheten",
  "hvilke regler som gjelder for utleie",
  "om bod, parkering og terrasse faktisk følger boligen juridisk",
  "om heis og fellesområder er tilgjengelige og i god stand",
] as const;

const faq = [
  { q: "Er det trygt å kjøpe bolig i Spania?", a: "Ja, det kan være trygt å kjøpe bolig i Spania når du bruker en uavhengig advokat, kontrollerer eierskap, heftelser, tillatelser og dokumentasjon, og forstår avtalene før du betaler eller signerer. Les også vår guide til juridiske fallgruver." },
  { q: "Er notar og eiendomsregister inkludert i skatten?", a: "Nei. Skatter som ITP, IVA og AJD kommer i tillegg til kostnader for notar og registrering i eiendomsregisteret. Dette er separate kostnader som beregnes ut fra den konkrete handelen." },
  {
    q: "Hvor mange nordmenn kjøper bolig i Spania?",
    a: "Det finnes ikke ett fast årlig tall som beskriver norske kjøpere alene i de korte offisielle markedssammendragene, og antallet varierer fra år til år. Det sikre bildet er at utenlandske kjøpere utgjør en stor del av markedet, særlig på Costa Blanca. I andre kvartal 2026 sto utenlandske kjøpere for 15,98 % av boligkjøpene i Spania og 31,03 % i Comunitat Valenciana. For deg som kjøper er likevel område, totalbudsjett og kvaliteten på den konkrete kjøpsprosessen viktigere enn totalvolumet alene.",
  },
  {
    q: "Kan nordmenn kjøpe bolig i Spania?",
    a: "Ja. Nordmenn kan kjøpe og eie bolig i Spania. I praksis trenger du NIE-nummer for å gjennomføre kjøpet og håndtere skatt, bank og registrering, og du bør sørge for uavhengig juridisk kontroll før du binder deg.",
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
        <p className="article-item-title"><strong>{title}</strong></p>
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
              Guide · <Link href="/om-oss/freddy">Freddy Bremseth</Link> · Oppdatert 12. november 2026
            </p>
            <h1>Kjøpe bolig i Spania (2026) – guide for nordmenn</h1>
          </div>
        </div>
      </section>

      <nav className="guide-index-band cornerstone-index" aria-label="Innhold i guiden">
        <div>
          <span>På denne siden:</span>
          <a href="#hvordan-kjope">Hvordan kjøpe</a>
          <a href="#for-du-kjoper">Før du kjøper</a>
          <a href="#boligtype">Boligtype</a>
          <a href="#boligannonse">Boligannonse</a>
          <a href="#etter-kjopet">Etter kjøpet</a>
          <a href="#erfaringer">Mine erfaringer</a>
          <a href="#faq">FAQ</a>
        </div>
      </nav>

      <section className="section cornerstone-section">
        <div className="section-heading">
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
          <h2>Hvordan kjøpe bolig i Spania?</h2>
          <p>
            Et boligkjøp i Spania følger mange av de samme prinsippene som i Norge, men det er enkelte forskjeller i hvordan kjøpet gjennomføres. Blant annet brukes reservasjonsavtaler, juridiske kontroller og notar ved sluttføringen.
          </p>
          <p>
            Her går vi gjennom kjøpsprosessen i seks steg, fra de første forberedelsene til du får nøklene til din nye bolig.
          </p>
        </div>

        <div className="section-heading">
          <h3>1. Avklar budsjett og finansiering</h3>
          <p>
            Før du begynner å se på <Link href="/eiendommer">boliger til salgs i Spania</Link>, bør du finne ut hvor mye du kan bruke på boligkjøpet. Husk at skatter, avgifter og andre kjøpsomkostninger kommer i tillegg til kjøpesummen. Dersom du trenger lån, bør finansieringen avklares på et tidlig tidspunkt.
          </p>
          <p>
            Tenk også gjennom hvordan boligen skal brukes. Skal du kjøpe feriebolig i Spania, helårsbolig eller kanskje den skal leies ut deler av året? Dette har betydning for både budsjett, områdevalg og hvilken boligtype som passer deg.
          </p>

          <h3>2. Finn bolig og dra på visning</h3>
          <p>
            Når budsjettet er avklart, kan du begynne å lete etter aktuelle boliger. Vær oppmerksom på at eiendommer som fortsatt er annonsert på boligportaler, allerede kan være reservert eller solgt. Du bør derfor få bekreftet tilgjengeligheten før du planlegger en visning.
          </p>
          <p>
            På visning bør du undersøke både boligen og nærområdet. Solforhold, støy, avstand til servicetilbud og behovet for bil kan være minst like viktig som selve boligen.
          </p>
          <p>Les mer om hvordan vi organiserer <Link href="/visningstur">visningsturer i Spania</Link>.</p>

          <h3>3. Reservasjon og juridisk kontroll</h3>
          <p>
            Når du har funnet en bolig du ønsker å kjøpe, er det vanlig å inngå en reservasjonsavtale. Dette innebærer at du betaler et beløp for å holde boligen av markedet i en avtalt periode.
          </p>
          <p>
            Før du signerer eller betaler, bør en uavhengig advokat gjennomgå vilkårene. Advokaten bør også kontrollere eierskap, heftelser, tillatelser og annen relevant dokumentasjon før du påtar deg ytterligere forpliktelser.
          </p>
          <p>
            Les også om <Link href="/guide/juridiske-fallgruver-boligkjop-spania">juridiske fallgruver ved boligkjøp i Spania</Link> før du går videre.
          </p>

          <h3>4. Kjøpekontrakt, NIE og forberedelser</h3>
          <p>
            Når de nødvendige kontrollene er gjennomført, inngås normalt en privat kjøpekontrakt. Den fastsetter blant annet kjøpesum, betalingsplan, frister og vilkår for handelen. Ved bruktbolig benyttes ofte en <em>contrato de arras</em>, der kjøper betaler et avtalt depositum.
          </p>
          <p>
            Du trenger også et <Link href="/guide/nie-skattenummer-spania">spansk identifikasjonsnummer (NIE)</Link> for å gjennomføre kjøpet. Søknaden bør startes tidlig, samtidig som du avklarer bank, finansiering og eventuelle fullmakter.
          </p>

          <h3>5. Signering og sluttoppgjør hos notar</h3>
          <p>
            Selve boligkjøpet sluttføres normalt hos en spansk notar (<em>notario</em>). Her signerer kjøper og selger det offentlige skjøtet, <em>escritura pública</em>, og sluttoppgjøret gjennomføres etter det som er avtalt.
          </p>
          <p>
            Notaren kontrollerer bestemte formelle og juridiske forhold ved handelen, men erstatter ikke kjøperens egen advokat. Husk å kontrollere at dokumentasjonen og eventuelle uavklarte forhold er gjennomgått før signeringen.
          </p>

          <h3>6. Registrering og overtakelse</h3>
          <p>
            Når skjøtet er signert og oppgjøret gjennomført, får du normalt nøklene til boligen. Deretter skal nødvendige skatter og avgifter håndteres, og eierskapet registreres i det spanske eiendomsregisteret (<em>Registro de la Propiedad</em>). Du må også sørge for at blant annet strøm, vann, forsikring og eventuelle felleskostnader blir fulgt opp.
          </p>
        </div>
      </section>

      <section className="section cornerstone-section" id="for-du-kjoper">
        <div className="section-heading">
          <h2>Dette bør du vite før du kjøper eiendom i Spania</h2>
          <p>
            Før du begynner å lete etter hus, leilighet eller annen eiendom, er det noen forhold du bør sette deg inn i. Kostnader, finansiering og valg av område har stor betydning for hvilke boliger som faktisk passer deg.
          </p>
        </div>

        <div className="section-heading">
          <h3>Kostnader ved boligkjøpet</h3>
          <p>
            Når du kjøper eiendom i Spania bør du beregne 10–15 % ekstra i kjøpsomkostninger utover kjøpesummen. Ved nybygg ligger ekstrakostnaden mellom 12 og 14 prosent, mens bruktbolig ligger mellom 10 og 13 prosent.
          </p>
          <PurchaseBudgetCalculator />
          <p>
            I tillegg bør du ta høyde for de løpende <Link href="/guide/lopende-kostnader-eie-bolig-spania">kostnadene ved å eie bolig i Spania</Link>, som blant annet omfatter eiendomsskatt, forsikring, strøm, vann og fellesutgifter.
          </p>

          <h3>Hvordan finansiere kjøpet?</h3>
          <p>
            Du kan <Link href="/guide/finansiere-bolig-i-spania">finansiere boligkjøpet i Spania</Link> på fire måter:
          </p>
          <ul className="article-bullets">
            <li><strong>Egne midler:</strong> Du betaler hele kjøpesummen med oppsparte penger, uten å ta opp boliglån.</li>
            <li><strong>Lån med sikkerhet i norsk bolig:</strong> Har du tilstrekkelig egenkapital i en bolig i Norge, kan det være mulig å øke det eksisterende boliglånet.</li>
            <li><strong>Boliglån i Spania:</strong> Du kan søke om finansiering gjennom en spansk bank, som blant annet vurderer inntekt, gjeld, egenkapital og boligens verdi.</li>
            <li><strong>Boliglån i Norge med sikkerhet i spansk bolig:</strong> Noen banker, som DNB Luxembourg, tilbyr lån med sikkerhet i din spanske bolig.</li>
          </ul>

          <h3>Velg riktig område før boligjakten</h3>
          <p>
            Området har ofte større betydning for hvor fornøyd du blir med kjøpet enn selve boligen. Min erfaring er at mange begynner med å lete etter den fineste boligen innenfor budsjettet og vurderer beliggenheten etterpå. Det kan fort bli feil rekkefølge.
          </p>
          <p>
            Et hus eller en leilighet kan være attraktiv på papiret, men mindre praktisk dersom du senere oppdager at du er avhengig av bil til alt, at området er langt roligere utenfor sesongen enn forventet, eller at reiseveien fra flyplassen blir upraktisk.
          </p>
          <p>
            Derfor anbefaler jeg å ta utgangspunkt i hvordan du ønsker å bruke boligen. Behovene blir ganske forskjellige dersom du vil ha gangavstand til restauranter og strand, sammenlignet med om du ønsker større tomt, mer ro og lavere boligpris i innlandet. Vår <Link href="/guide/omradeguide-eiendomskjop-i-spania">områdeguide for boligkjøp i Spania</Link> gir deg en oversikt over ulike regioner og hva som skiller dem.
          </p>

          <h3>Slik skiller det spanske boligmarkedet seg fra det norske</h3>
          <p>
            Det spanske boligmarkedet fungerer annerledes enn det norske. Reglene for eiendomsformidling varierer mellom regionene, og boligportaler som <Link href="/magasin/idealista-finn-ikke-alltid-til-a-stole-pa">Finn og Idealista er ikke alltid til å stole på</Link> fordi annonser kan bli liggende ute selv etter at eiendommen er solgt.
          </p>
          <p>Priser og andre opplysninger kan også være utdaterte.</p>
          <p>
            Da jeg kjøpte min første leilighet i Spania, opplevde jeg selv hvor vanskelig det kunne være å vite hvilke opplysninger som faktisk stemte. Heldigvis hadde jeg en lokal rådgiver som kunne rydde opp i informasjonen og svare på spørsmål underveis.
          </p>
          <p>
            Derfor mener jeg det er en fordel å ha én rådgiver som kjenner området, kan kontrollere at opplysningene stemmer og hjelpe deg med å finne boliger som faktisk er aktuelle.
          </p>
          <p>
            Les også hvorfor en <Link href="/magasin/hvorfor-god-eiendomsradgiver-er-viktig">god eiendomsrådgiver er viktig</Link>, mer om <Link href="/om-oss">hvordan Zen Eco Homes jobber</Link> og hvordan vi følger deg gjennom <Link href="/kjopsprosessen">kjøpsprosessen</Link>.
          </p>
          <div className="hero-actions">
            <Link className="contact-button" href="/booking">Book en uforpliktende boligprat</Link>
          </div>
        </div>
      </section>

      <section className="section cornerstone-section" id="boligtype">
        <div className="section-heading">
          <h2>Hus, leilighet eller villa – hva passer deg?</h2>
          <p>
            Hva du bør kjøpe av hus, leilighet eller villa i Spania handler om langt mer enn bare pris og størrelse. Forskjellene ligger også i hvor mye vedlikehold du ønsker, hvor mye privatliv du trenger, hvilke felleskostnader du er komfortabel med og hvordan du faktisk skal bruke boligen.
          </p>
        </div>
        <div className="section-heading" style={{ marginTop: 34 }}>
          <h3>Kjøpe hus i Spania</h3>
          <p>
            Når du kjøper hus i Spania får du noen opplagte fordeler som mer privatliv og mindre avhengighet av fellesarealer og sameieregler. Det er også vanlig at hus har lavere fellesutgifter.
          </p>
          <p>
            Samtidig innebærer et hus ofte større ansvar enn en leilighet. Du må selv sørge for vedlikehold av blant annet tak, fasade, uteområder og tekniske installasjoner. Har boligen privat basseng, kommer også rengjøring og vedlikehold av dette i tillegg. Før du kjøper et spansk hus, bør du undersøke:
          </p>
          <ul className="article-bullets">
            <li><strong>Vedlikehold:</strong> Hvilken stand er tak, fasade, basseng og tekniske installasjoner i?</li>
            <li><strong>Felleskostnader:</strong> Ligger boligen i en urbanisasjon med fellesutgifter og egne regler?</li>
            <li><strong>Tomt og tilbygg:</strong> Er basseng, garasje og eventuelle utvidelser lovlig oppført og registrert?</li>
            <li><strong>Infrastruktur:</strong> Er vann, avløp og strøm tilkoblet ordinære forsyningsnett, eller har eiendommen egne løsninger?</li>
          </ul>
        </div>

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
          <h3>Villa eller finca – hva er forskjellen?</h3>
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
            Forskjellen mellom nybygg og bruktbolig handler først og fremst om hva du kjøper, når du kan overta, og hvor mye usikkerhet du er komfortabel med. Med bruktbolig kan du se nøyaktig hva du kjøper, overta raskere og velge blant et større utvalg av boliger.
          </p>
          <p>
            Nybygg gir på sin side moderne standard, mindre vedlikeholdsbehov og bedre forutsigbarhet rundt boligens tekniske tilstand. Det siste er noe jeg mener er lett å undervurdere.
          </p>
          <p>
            Jeg har selv overtatt en bruktbolig i Spania som tilsynelatende var i god stand. Likevel måtte store deler av gulvet rives på grunn av problemer med vannrørene. Denne erfaringen betyr ikke at det er risikabelt å kjøpe bruktbolig, men viser hvor viktig det er å undersøke boligens tekniske tilstand og tidligere ombygginger før du binder deg.
          </p>
          <p>
            Vil du lese mer om hva du bør vite når du vurderer å kjøpe ny bolig i Spania? Se vår <Link href="/guide/nybygg-i-spania">guide til nybygg i Spania</Link>.
          </p>
        </div>

        <div className="table-wrap buy-guide-comparison">
          <table>
            <thead>
              <tr><th scope="col">Tema</th><th scope="col">Nybygg</th><th scope="col">Bruktbolig</th></tr>
            </thead>
            <tbody>
              <tr><th scope="row">Overtakelse</th><td data-label="Nybygg">Fra noen få måneder til opptil 24 måneder, avhengig av prosjektets fremdrift.</td><td data-label="Bruktbolig">Kan ofte overtas kort tid etter at kjøpet er gjennomført</td></tr>
              <tr><th scope="row">Skatt ved kjøp</th><td data-label="Nybygg">Normalt 10 % IVA (merverdiavgift) og dokumentavgift (AJD)</td><td data-label="Bruktbolig">ITP (overføringsavgift), som varierer etter region og situasjon</td></tr>
              <tr><th scope="row">Betaling</th><td data-label="Nybygg">Ved kjøp før ferdigstillelse betales kjøpesummen ofte i flere omganger</td><td data-label="Bruktbolig">Vanligvis depositum først og resten ved signering hos notar</td></tr>
              <tr><th scope="row">Vedlikehold</th><td data-label="Nybygg">Vanligvis mindre vedlikehold de første årene</td><td data-label="Bruktbolig">Avhenger av boligens alder, tilstand og tidligere vedlikehold</td></tr>
              <tr><th scope="row">Teknisk risiko</th><td data-label="Nybygg">Nye installasjoner og lovbestemte garantier gir bedre forutsigbarhet</td><td data-label="Bruktbolig">Eldre installasjoner og skjulte feil kan føre til uventede kostnader</td></tr>
              <tr><th scope="row">Tilpasninger</th><td data-label="Nybygg">Ofte mulig å velge enkelte materialer og løsninger under byggeprosessen</td><td data-label="Bruktbolig">Du kjøper i hovedsak boligen slik den står</td></tr>
            </tbody>
          </table>
        </div>

      </section>

      <section className="section cornerstone-section" id="boligannonse">
        <div className="section-heading">
          <h2>Hva bør man se etter i en boligannonse?</h2>
          <p>
            Mange som vurderer å kjøpe bolig i Spania starter naturligvis med faktorer som solforhold, basseng og avstand til strand og flyplass. Men det er minst like viktig å se på forholdene som kan påvirke kostnader og vedlikehold.
          </p>
        </div>
        <div className="section-heading" style={{ marginTop: 28 }}>
          {/* Seksjonen ble kontrollert og republiseres etter PR #348. */}
          <h3>Skatt og utleie ved kjøp av feriebolig i Spania</h3>
          <p>
            Som norsk skattemessig bosatt eier av feriebolig i Spania betaler du årlig spansk <Link href="/guide/lopende-kostnader-eie-bolig-spania">eiendomsskatt (IBI)</Link>. I tillegg beregnes det normalt spansk inntektsskatt på en sjablongmessig leieverdi når boligen står til din egen disposisjon, selv om du ikke leier den ut.
          </p>
          <p>
            Dersom du ønsker å leie ut boligen når du ikke bruker den selv, skal leieinntektene rapporteres og beskattes i Spania. Utleie kan dermed bidra til å dekke deler av kostnadene ved å eie boligen, og er verdt å ta med i vurderingen av boligens <Link href="/guide/utleie-inntektspotensial-bolig-spania">utleiepotensial og mulige leieinntekter</Link>.
          </p>
          <p>
            Ved et senere salg kan en eventuell gevinst også utløse skatt i Spania. Du kan lese mer om <Link href="/guide/skatt-ved-salg-bolig-spania">skatt ved salg av bolig i Spania</Link> og hvilke regler som gjelder for gevinstbeskatning.
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
      
      <section className="section cornerstone-section" id="etter-kjopet">
        <div className="section-heading">
          <h2>Hva skjer etter boligkjøpet?</h2>
          <p>
            Når du har fått nøklene til din nye bolig i Spania, gjenstår det fortsatt noen praktiske oppgaver. Blant annet må eierskapet registreres, avtaler overføres og nødvendige betalinger organiseres.
          </p>
        </div>
        <div className="section-heading">
          <p>Dette bør du sørge for etter overtakelsen:</p>
          <ul className="article-bullets">
            <li><strong>Skjøte og registrering:</strong> Få bekreftet at relevante skatter og avgifter er håndtert, og at eierskapet blir registrert i det spanske eiendomsregisteret.</li>
            <li><strong>Strøm og vann:</strong> Sørg for at abonnementene overføres til ditt navn, og at riktige betalingsopplysninger er registrert.</li>
            <li><strong>Forsikring:</strong> Kontroller at boligen er forsikret fra overtakelsen, med dekning som passer eiendommen og hvordan den skal brukes.</li>
            <li><strong>Sameie og lokale avgifter:</strong> Oppdater kontaktinformasjon og betalingsavtaler for eventuelle felleskostnader, kommunale avgifter og eiendomsskatt.</li>
          </ul>
          <p>
            Det er også viktig å avklare hvem som har ansvaret for de forskjellige oppgavene. I vår guide om <Link href="/magasin/etter-boligkjop-spania-skjote-strom-vann-avgifter">hva du må ordne etter boligkjøpet i Spania</Link> går vi gjennom de praktiske forberedelsene og hva du bør kontrollere etter overtakelsen.
          </p>
          <p>
            Dersom du skal bruke boligen som feriebolig, bør du også tenke på hvem som følger opp eiendommen når du er i Norge. Gjennom <Link href="https://care.zenecohomes.com/">Zen Eco Homes Care</Link> tilbyr vi blant annet nøkkeloppbevaring og tilsyn, slik at du har et lokalt kontaktpunkt når du ikke er i Spania.
          </p>
        </div>
      </section>

      <section className="section split cornerstone-section cornerstone-experience" id="erfaringer">
        <div>
          <h2>Mine erfaringer med å kjøpe bolig i Spania</h2>
          <p>
            Da jeg kjøpte min første bolig i Spania, merket jeg raskt hvor annerledes prosessen var sammenlignet med Norge. Ting tar ofte litt lengre tid, og flere prosesser er mindre digitale enn vi er vant til hjemme.
          </p>
          <p>
            Første gang jeg skulle ordne bankforhold i Spania, føltes det nesten som å bli sendt tilbake til 80-tallet. Jeg måtte fysisk møte opp på bankkontoret og gå gjennom dokumentasjonen der. Det er ikke nødvendigvis vanskelig, men du må være forberedt på at ting ikke alltid løses med BankID og noen få klikk.
          </p>
          <p>
            Samtidig er dette småting sett opp mot det jeg faktisk fikk igjen. Når kjøpet først er gjennomført, sitter du igjen med det som faktisk betyr noe: et eget sted i solen, mer tid utendørs, et behagelig klima og friheten til å reise ned når det passer.
          </p>
          <p>
            Derfor er det ikke de praktiske hindrene jeg husker best i ettertid, men hvor mye glede jeg faktisk har hatt av å kjøpe bolig i Spania. Med litt tålmodighet og riktige folk rundt deg er prosessen fullt håndterbar.
          </p>
          <div className="hero-actions">
            <Link className="contact-button" href="/kontakt-oss">Kontakt oss</Link>
            <Link className="text-button" href="/kundeomtaler">Se hva tidligere kunder sier om oss</Link>
          </div>
        </div>
      </section>

      <section className="section cornerstone-section" id="faq">
        <div className="section-heading">
          <h2>Vanlige spørsmål om boligkjøp i Spania</h2>
        </div>
        <div className="faq-accordion">
          {faq.map((item, index) => (
            <details key={item.q} open={index === 0}>
              <summary><h3>{item.q}</h3></summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
