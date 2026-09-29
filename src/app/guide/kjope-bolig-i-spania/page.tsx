import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { BuyerMatchQuiz } from "@/components/BuyerMatchQuiz";
import { Footer } from "@/components/Footer";
import { PropertyCard } from "@/components/PropertyCard";
import { SiteHeader } from "@/components/SiteHeader";
import { findEquivalentBySlug, homeLanguageLinks, seoHreflang } from "@/lib/i18n";
import { getLocalizedPropertyType, getProperties } from "@/lib/realtyflow";
import { readZenEcoSeoOverride } from "@/lib/seo-public-overrides";

const pillarEq = findEquivalentBySlug("no", "guide/kjope-bolig-i-spania");

export async function generateMetadata(): Promise<Metadata> {
  const approved = await readZenEcoSeoOverride("guide/kjope-bolig-i-spania");
  const title = approved?.seo_title || "Kjøpe bolig i Spania (2026): Guide og mine erfaringer";
  const description =
    approved?.seo_description ||
    "Kjøpe bolig i Spania? Få en oppdatert guide til områdevalg, kostnader, NIE, finansiering, visning, juridisk kontroll, notar og trygg overtakelse.";
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: "/guide/kjope-bolig-i-spania", languages: pillarEq ? seoHreflang(pillarEq) : undefined },
  };
}

const steps = [
  ["Avklar behov, budsjett og område", "Tenk gjennom hvordan boligen skal brukes, totalbudsjettet og hvilket område som passer hverdagen du ser for deg."],
  ["Finn aktuelle boliger og dra på visning", "Vurder ikke bare selve boligen, men også området, avstandene og de praktiske forholdene rundt."],
  ["Få eiendommen kontrollert juridisk", "Før du binder deg bør blant annet eierskap, heftelser, tillatelser og nødvendig dokumentasjon gjennomgås."],
  ["Ordne NIE-nummer og finansiering", "Sørg for at de praktiske og økonomiske forutsetningene er på plass før kjøpet går videre."],
  ["Reserver boligen og inngå kjøpekontrakt", "Når du har funnet riktig eiendom går prosessen normalt videre med reservasjon og deretter kjøpekontrakt."],
  ["Signer hos notar og gjennomfør betalingen", "Hos notar formaliseres kjøpet, restbeløpet betales og skjøtet signeres."],
  ["Registrer eierskapet og overta boligen", "Etter signeringen registreres eierskapet og boligen kan tas i bruk."],
] as const;

const faq = [
  {
    q: "Hvor mange nordmenn kjøper bolig i Spania?",
    a: "Antallet varierer fra år til år og mellom regioner. For et konkret tall bør du bruke den nyeste offisielle registreringsstatistikken. For deg som kjøper er område, totalbudsjett og kvaliteten på den konkrete prosessen viktigere enn totalvolumet alene.",
  },
  {
    q: "Hva koster det å kjøpe bolig i Spania?",
    a: "Kjøpesummen er bare én del av totalen. Skatter og avgifter, notar, registrering, juridisk bistand og eventuelle finansieringskostnader må planlegges i tillegg. Nybygg og bruktbolig har også ulike kostnadselementer.",
  },
  {
    q: "Kan nordmenn kjøpe bolig i Spania?",
    a: "Ja. Norske kjøpere kan eie bolig i Spania. Du trenger normalt NIE-nummer og bør sørge for juridisk kontroll og korrekt dokumentasjon før du binder deg.",
  },
  {
    q: "Hvordan finansiere kjøp av bolig i Spania?",
    a: "Finansiering kan skje med egenkapital, norsk finansiering eller spansk bank. Låneramme, dokumentkrav, takst og betalingsplan bør avklares tidlig.",
  },
  {
    q: "Hvor lang tid tar det å kjøpe bolig i Spania?",
    a: "Tiden varierer med boligtype, finansiering, dokumentasjon og om du kjøper brukt eller nybygg. Bruktbolig kan ofte gjennomføres raskere, mens nybygg følger prosjektets bygge- og betalingsplan.",
  },
  {
    q: "Er det lurt å kjøpe leilighet i Spania?",
    a: "Det kan være et godt valg dersom du ønsker noe lettstelt og sentralt. Samtidig bør du vurdere felleskostnader, sameieregler, uteplass, parkering, utleieregler og hvordan området fungerer gjennom hele året.",
  },
] as const;

export default async function BuyInSpainGuidePage() {
  const inventory = await getProperties(18, "zeneco");
  const houses = inventory
    .filter((property) => /villa|hus|townhouse|rekke/i.test(getLocalizedPropertyType(property, "no")))
    .slice(0, 3);
  const apartments = inventory
    .filter((property) => /leilig|apartment/i.test(getLocalizedPropertyType(property, "no")))
    .slice(0, 3);
  const featuredHouses = houses.length ? houses : inventory.slice(0, 3);
  const featuredApartments = apartments.length ? apartments : inventory.slice(3, 6);

  return (
    <main className="cornerstone-guide">
      <SiteHeader languageLinks={homeLanguageLinks("no")} />

      <section className="page-hero compact-hero image-hero cornerstone-hero">
        <div className="cornerstone-hero-layout">
          <div className="cornerstone-hero-copy">
            <p className="eyebrow">
              Guide · <Link href="/om-oss/freddy">Freddy Bremseth</Link> · Oppdatert 29. september 2026
            </p>
            <h1>Kjøpe bolig i Spania (2026) – dette må du vite</h1>
            <p>
              Å kjøpe bolig i Spania er enklere når du kjenner rekkefølgen, kostnadene og hva som må kontrolleres.
              Jeg har fulgt kjøpsprosessen både som rådgiver og privat kjøper. Her får du en praktisk vei fra
              de første valgene til notar, overtakelse og tiden etter kjøpet.
            </p>
            <div className="hero-actions">
              <Link className="contact-button" href="/eiendommer">Se boliger til salgs <ArrowRight size={17} /></Link>
              <Link className="text-button light" href="/booking">Book rådgivning</Link>
            </div>
          </div>

          <aside className="cornerstone-hero-panel" aria-label="Kort om guiden">
            <p className="eyebrow">Praktisk kjøperguide</p>
            <h2>Dette får du svar på</h2>
            <ul>
              <li>Hvordan du velger område og boligtype</li>
              <li>Hva du bør kontrollere før reservasjon</li>
              <li>NIE, finansiering, bank og notar</li>
              <li>Hvilke kostnader du må planlegge for</li>
              <li>Vanlige feil – og hvordan du unngår dem</li>
            </ul>
            <Link className="text-button light" href="/om-oss/freddy">Om forfatteren <ArrowRight size={15} /></Link>
          </aside>
        </div>
      </section>

      <nav className="guide-index-band cornerstone-index" aria-label="Innhold i guiden">
        <div>
          <span>På denne siden:</span>
          <a href="#kort-svar">Kort svar</a>
          <a href="#for-boligjakten">Før boligjakten</a>
          <a href="#boligtype">Boligtype</a>
          <a href="#boligsok">Boligsøk</a>
          <a href="#kjopsprosess">Kjøpsprosessen</a>
          <a href="#kostnader">Kostnader</a>
          <a href="#vanlige-feil">Vanlige feil</a>
          <a href="#faq">FAQ</a>
        </div>
      </nav>

      <section className="section cornerstone-section" id="kort-svar">
        <div className="section-heading">
          <p className="eyebrow">Kort svar først</p>
          <h2>Hvordan kjøpe feriebolig i Spania?</h2>
          <p>
            Et godt boligkjøp i Spania starter med behov og område, fortsetter med et realistisk boligsøk og
            visninger, og går deretter gjennom juridisk kontroll, finansiering, kontrakt, notar og overtakelse.
          </p>
        </div>
        <div className="journey-overview">
          {steps.map(([title, text], index) => (
            <article key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="center-action" style={{ marginTop: 28 }}>
          <Link className="text-button" href="/guide/nybygg-i-spania">
            Les kjøperguiden for nybygg i Spania <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <section className="section split cornerstone-section cornerstone-preflight" id="for-boligjakten">
        <div>
          <p className="eyebrow">Før boligjakten</p>
          <h2>Viktig før du begynner å se på bolig i Spania</h2>
          <div className="preflight-list">
            <article className="preflight-item">
              <CheckCircle2 size={19} />
              <div>
                <h3>Markedet fungerer annerledes enn i Norge</h3>
                <p>
                  Flere aktører kan markedsføre samme bolig, og tilgjengelighet og oppfølging kan variere.
                  Derfor er det viktig å ha én tydelig plan og noen som kan kontrollere hva som faktisk er aktuelt.
                  Les mer om hvorfor en{" "}
                  <Link href="/magasin/hvorfor-god-eiendomsradgiver-er-viktig">god eiendomsrådgiver er viktig</Link>.
                </p>
              </div>
            </article>
            <article className="preflight-item">
              <CheckCircle2 size={19} />
              <div>
                <h3>Kjøpesummen er ikke totalkostnaden</h3>
                <p>
                  Skatter og avgifter, notar, registrering, juridisk bistand og eventuelle kostnader til bank,
                  finansiering og valuta må inn i totalbudsjettet før du vurderer hva du har råd til.
                </p>
              </div>
            </article>
            <article className="preflight-item">
              <CheckCircle2 size={19} />
              <div>
                <h3>Velg område før du velger bolig</h3>
                <p>
                  Kyst, by og innland gir svært ulike hverdager, reiseveier og prisbilder. En attraktiv bolig
                  kompenserer sjelden for et område som ikke passer måten du faktisk vil bruke boligen på.
                </p>
              </div>
            </article>
          </div>
          <p className="preflight-next">
            Start gjerne med vår{" "}
            <Link href="/guide/omradeguide-eiendomskjop-i-spania">områdeguide for boligkjøp i Spania</Link>{" "}
            og <Link href="/omrader">områdeoversikten</Link>. Da blir det enklere å sammenligne regionene før
            du lagrer konkrete boliger.
          </p>
        </div>
        <aside className="preflight-match">
          <p className="eyebrow">Boligmatch</p>
          <h2>Start med hvordan boligen skal brukes</h2>
          <p>
            Feriebolig, fast bolig, utleie og tomt/bygging gir forskjellige prioriteringer. Boligmatch hjelper
            oss å snevre inn markedet før du bruker tid på boliger som ikke passer.
          </p>
          <div className="preflight-match-points" aria-label="Dette avklarer Boligmatch">
            <span>Område og ønsket hverdagsliv</span>
            <span>Totalbudsjett og boligtype</span>
            <span>Must-have, nice-to-have og dealbreakers</span>
          </div>
          <Link className="contact-button" href="#boligmatch">Start boligmatch</Link>
        </aside>
      </section>

      <section className="section cornerstone-section" id="boligtype">
        <div className="section-heading">
          <p className="eyebrow">Boligtype</p>
          <h2>Hus, leilighet eller villa – hva passer deg?</h2>
          <p>
            Valget handler om mer enn pris. Vedlikehold, plass, privatliv, felleskostnader, uteområde, parkering,
            avstand til strand og hvordan boligen skal brukes gjennom året bør vurderes samtidig.
          </p>
        </div>

        <div className="split">
          <div>
            <h3>Kjøpe hus eller villa i Spania</h3>
            <p>
              Hus og villa kan gi mer privatliv, uteplass og fleksibilitet, men krever ofte mer vedlikehold.
              Sjekk tomt, adkomst, teknisk tilstand, eventuelle basseng- og hagekostnader og hvilke arbeider som er lovlig registrert.
            </p>
          </div>
          <div>
            <h3>Kjøpe leilighet i Spania</h3>
            <p>
              En leilighet kan være lettstelt og enkel som feriebolig, særlig nær strand, sentrum og servicetilbud.
              Ulempene kan være mindre privatliv, felleskostnader og regler i sameiet som påvirker bruk eller utleie.
            </p>
          </div>
        </div>

        {featuredHouses.length > 0 && (
          <>
            <div className="section-heading" style={{ marginTop: 44 }}>
              <p className="eyebrow">Utvalgte boliger</p>
              <h3>Eksempler på hus og villaer</h3>
            </div>
            <div className="property-grid">
              {featuredHouses.map((property, index) => <PropertyCard key={property.id || index} property={property} />)}
            </div>
          </>
        )}

        {featuredApartments.length > 0 && (
          <>
            <div className="section-heading" style={{ marginTop: 44 }}>
              <p className="eyebrow">Utvalgte leiligheter</p>
              <h3>Eksempler på leiligheter</h3>
            </div>
            <div className="property-grid">
              {featuredApartments.map((property, index) => <PropertyCard key={property.id || index} property={property} />)}
            </div>
          </>
        )}

        <div className="split" style={{ marginTop: 44 }}>
          <div>
            <h3>Villa eller finca</h3>
            <p>
              Finca og landlige boliger kan gi mer plass og ro, men vann, strøm, adkomst, lovlighet, grenser og
              vedlikehold bør undersøkes grundigere. Se også{" "}
              <Link href="/omrader/innlandet">innlandsområdene</Link> og{" "}
              <Link href="/omrader/innlandet/tomter">aktuelle tomter</Link>.
            </p>
          </div>
          <div>
            <h3>Nybygg eller bruktbolig</h3>
            <p>
              Nybygg følger normalt prosjektets betalings- og byggeplan, mens bruktbolig krever vurdering av
              eksisterende bolig, dokumentasjon og tilstand. Les vår{" "}
              <Link href="/guide/nybygg-i-spania">guide til nybygg i Spania</Link> før du sammenligner.
            </p>
          </div>
        </div>

        <div className="center-action" style={{ marginTop: 32 }}>
          <Link className="contact-button" href="/eiendommer">
            Se alle eiendommene vi har til salgs <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <section className="section proof-section cornerstone-section" id="boligsok">
        <div className="section-heading">
          <p className="eyebrow">Boligsøk</p>
          <h2>Slik finner du boliger i Spania</h2>
          <p>
            Finn.no, Idealista og andre portaler er gode til research, men annonser kan være dupliserte, utdaterte
            eller mangle viktig kontekst. Les hvorfor{" "}
            <Link href="/magasin/idealista-finn-ikke-alltid-til-a-stole-pa">Idealista og Finn.no ikke alltid viser hele markedet</Link>.
          </p>
        </div>
        <div className="proof-grid">
          <article>
            <h3>Hva bør du se etter i en boligannonse?</h3>
            <p>Se etter konkret beliggenhet, reell tilgjengelighet, totalpris, felleskostnader, byggeår, energidata, parkering, uteareal og hva som faktisk følger med.</p>
          </article>
          <article>
            <h3>Sammenlign like boliger</h3>
            <p>Pris per kvadratmeter alene er ikke nok. Utsikt, solforhold, etasje, tomt, standard, støy og avstand til service kan forklare store prisforskjeller.</p>
          </article>
          <article>
            <h3>Lokalkunnskap er viktig</h3>
            <p>
              En bolig kan være riktig på papiret og feil i hverdagen. Les{" "}
              <Link href="/om-oss">hvordan Zen Eco Homes jobber</Link> og bruk rådgivning før du fyller kalenderen med visninger.
            </p>
          </article>
        </div>
        <div className="center-action" style={{ marginTop: 28 }}>
          <Link className="contact-button" href="/booking">Få rådgivning før du bestiller visninger</Link>
        </div>
      </section>

      <section className="section cornerstone-section" id="kjopsprosess">
        <div className="section-heading">
          <p className="eyebrow">Kjøpsprosessen</p>
          <h2>Nødvendige steg når du kjøper eiendom i Spania</h2>
          <p>
            Når riktig bolig er funnet bør du gå systematisk videre. Zen Eco Homes sin{" "}
            <Link href="/kjopsprosessen">kjøpsprosess</Link> viser hvordan vi jobber fra behov til overtakelse,
            mens guidene under går dypere i hvert tema.
          </p>
        </div>
        <div className="process-editorial">
          <div className="process-timeline">
            <article className="process-row">
              <span>01</span>
              <div>
                <h3>Visningstur</h3>
                <p>Bruk turen til å sammenligne både boliger og områder, ikke til å se flest mulig objekter.</p>
                <Link href="/visningstur">Slik fungerer visningstur <ArrowRight size={15} /></Link>
              </div>
            </article>
            <article className="process-row">
              <span>02</span>
              <div>
                <h3>Juridisk kontroll</h3>
                <p>Eierskap, heftelser, tillatelser og kontraktsgrunnlag bør kontrolleres før du binder deg.</p>
                <Link href="/guide/juridiske-fallgruver-boligkjop-spania">Les om juridiske fallgruver <ArrowRight size={15} /></Link>
              </div>
            </article>
            <article className="process-row">
              <span>03</span>
              <div>
                <h3>NIE, bank og finansiering</h3>
                <p>Avklar NIE, låneramme, bank og dokumentasjon tidlig slik at praktiske forhold ikke stopper kjøpet.</p>
                <Link href="/guide/nie-skattenummer-spania">Guide til NIE-nummer <ArrowRight size={15} /></Link>
              </div>
            </article>
            <article className="process-row">
              <span>04</span>
              <div>
                <h3>Reservasjon og kjøpekontrakt</h3>
                <p>Forstå hva reservasjonen innebærer, hva som betales og hvilke forutsetninger som gjelder før du signerer.</p>
              </div>
            </article>
            <article className="process-row">
              <span>05</span>
              <div>
                <h3>Notar og sluttoppgjør</h3>
                <p>Ved sluttføringen signeres skjøtet og den avtalte betalingen gjennomføres i tråd med kjøpsopplegget.</p>
              </div>
            </article>
            <article className="process-row">
              <span>06</span>
              <div>
                <h3>Overtakelse og tiden etterpå</h3>
                <p>Etter notaren følger registrering, nøkler, abonnementer og praktisk oppfølging av den nye boligen.</p>
              </div>
            </article>
          </div>
          <aside className="process-deeper">
            <p className="eyebrow">Gå dypere</p>
            <h3>Tre guider det er smart å lese før du reserverer</h3>
            <Link href="/guide/finansiering-notar-nie-boligkjop-spania">Finansiering, notar og NIE <ArrowRight size={15} /></Link>
            <Link href="/guide/boliglan-spansk-bank-nordmenn">Boliglån i Spania <ArrowRight size={15} /></Link>
            <Link href="/guide/spansk-bankkonto-valutaveksling">Bankkonto og valuta <ArrowRight size={15} /></Link>
          </aside>
        </div>
      </section>

      <section className="section cornerstone-section" id="kostnader">
        <div className="section-heading">
          <p className="eyebrow">Totalbudsjett</p>
          <h2>Hva koster det å kjøpe hus eller leilighet i Spania?</h2>
          <p>
            Regn med mer enn annonseprisen. Hvilke kostnader som gjelder avhenger blant annet av om boligen er
            ny eller brukt, regionen, finansieringen og hvilke fagpersoner som brukes.
          </p>
        </div>
        <div className="cost-framing">
          <div>
            <span>1</span>
            <h3>Boligen</h3>
            <p>Kjøpesum, hva som følger med og eventuell betalingsplan.</p>
          </div>
          <div>
            <span>2</span>
            <h3>Selve kjøpet</h3>
            <p>Skatter og avgifter, notar, registrering og juridisk bistand.</p>
          </div>
          <div>
            <span>3</span>
            <h3>Tiden etterpå</h3>
            <p>Felleskostnader, lokale avgifter, forsikring, strøm, vann og vedlikehold.</p>
          </div>
        </div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr><th>Kostnad</th><th>Hva du bør avklare</th></tr>
            </thead>
            <tbody>
              <tr><td>Kjøpesum</td><td>Avtalt pris, betalingsplan og hva som følger med boligen.</td></tr>
              <tr><td>Skatter og avgifter</td><td>Avhenger av boligtype og region. Få en konkret beregning før reservasjon.</td></tr>
              <tr><td>Notar og registrering</td><td>Kostnader knyttet til sluttføring og registrering av eierskapet.</td></tr>
              <tr><td>Juridisk bistand</td><td>Uavhengig kontroll av dokumentasjon, kontrakter og eiendommen.</td></tr>
              <tr><td>Finansiering og valuta</td><td>Takst, bankkostnader, rente, overføringer og valutarisiko der dette er relevant.</td></tr>
              <tr><td>Løpende kostnader</td><td>Felleskostnader, lokale avgifter, forsikring, strøm, vann og vedlikehold etter kjøpet.</td></tr>
            </tbody>
          </table>
        </div>
        <div className="hero-actions" style={{ marginTop: 28 }}>
          <Link className="text-button" href="/guide/omkostninger-nybygg-spania">Kostnader ved nybygg</Link>
          <Link className="text-button" href="/guide/lopende-kostnader-eie-bolig-spania">Løpende kostnader ved å eie bolig</Link>
        </div>
      </section>

      <section className="section proof-section cornerstone-section" id="vanlige-feil">
        <div className="section-heading">
          <p className="eyebrow">Erfaring</p>
          <h2>Vanlige feil mange gjør når de kjøper spansk bolig</h2>
        </div>
        <div className="mistake-list">
          <article><span>01</span><div><h3>Boligen velges før området</h3><p>Et fint objekt løser ikke feil reisevei, feil hverdagsliv eller et område du ikke trives i utenfor ferien.</p></div></article>
          <article><span>02</span><div><h3>Totalbudsjettet blir for lavt</h3><p>Kjøpere ser på pris i annonsen, men glemmer kostnader rundt kjøpet, møbler, drift og eventuelle oppgraderinger.</p></div></article>
          <article><span>03</span><div><h3>Portaler brukes som fasit</h3><p>Tilgjengelighet og pris bør bekreftes før du reiser eller bygger hele beslutningen på én annonse.</p></div></article>
          <article><span>04</span><div><h3>Reservasjon skjer for tidlig</h3><p>Ikke la tidspress erstatte dokumentkontroll, avklaringer og forståelse av hva du faktisk signerer.</p></div></article>
          <article><span>05</span><div><h3>For mange meglere kontaktes samtidig</h3><p>Det kan gi duplikater, telefonpress og en fragmentert prosess. Én tydelig rådgiver kan koordinere bedre.</p></div></article>
          <article><span>06</span><div><h3>Oppfølging etter kjøpet glemmes</h3><p>Overtakelse, nøkler, leverandører og praktiske spørsmål fortsetter etter notar. Planlegg også tiden etter signering.</p></div></article>
        </div>
      </section>

      <section className="section split cornerstone-section cornerstone-experience" id="erfaringer">
        <div>
          <p className="eyebrow">Mine erfaringer</p>
          <h2>Å kjøpe bolig i Spania handler om mer enn boligen</h2>
          <p>
            Min erfaring er at de beste kjøpene starter med å være tydelig på hvordan boligen skal brukes.
            Når område, budsjett og prioriteringer er avklart blir det langt enklere å si nei til feil objekter
            og bruke tiden på alternativer som faktisk kan fungere.
          </p>
          <p>
            Som rådgiver ser jeg også hvor mye tryggere prosessen blir når kunden har én plan og vet hvem som gjør hva.
            Derfor legger vi stor vekt på behovskartlegging, shortlist og tydelige neste steg fremfor flest mulig visninger.
          </p>
          <Link className="text-button" href="/kundeomtaler">Les kundeomtaler og erfaringer <ArrowRight size={16} /></Link>
        </div>
        <div>
          <p className="eyebrow">Zen Eco Homes</p>
          <h2>Slik hjelper vi deg med boligkjøpet</h2>
          <p>
            Vi hjelper med behov, områdevalg, boligsøk, koordinering av visninger og fremdrift gjennom kjøpsreisen.
            Juridiske og tekniske kontroller skal utføres av de relevante fagpersonene, mens vi hjelper deg å holde
            oversikt og få de riktige spørsmålene avklart.
          </p>
          <div className="hero-actions">
            <Link className="contact-button" href="/booking">Book en uforpliktende boligprat</Link>
            <Link className="text-button" href="/kjopsprosessen">Se hvordan vi jobber</Link>
            <a className="text-button" href="https://care.zenecohomes.com" target="_blank" rel="noopener noreferrer">Zen Eco Homes Care</a>
          </div>
        </div>
      </section>

      <BuyerMatchQuiz />

      <section className="section cornerstone-section" id="faq">
        <div className="section-heading">
          <p className="eyebrow">Vanlige spørsmål</p>
          <h2>Kjøpe bolig i Spania – FAQ</h2>
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

      <section className="contact-section">
        <div>
          <p className="eyebrow">Neste steg</p>
          <h2>Vil du ha hjelp til område, bolig og kjøpsprosess?</h2>
          <p>Start med en uforpliktende behovsavklaring. Da kan vi redusere markedet til alternativene som passer deg.</p>
        </div>
        <Link className="contact-button" href="/booking">Få rådgivning <ArrowRight size={18} /></Link>
      </section>

      <Footer />
    </main>
  );
}
