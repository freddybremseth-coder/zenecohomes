import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import { Footer } from "@/components/Footer";
import { PurchaseBudgetCalculator } from "@/components/PurchaseBudgetCalculator";
import { SiteHeader } from "@/components/SiteHeader";
import { homeLanguageLinks } from "@/lib/i18n";

const BASE = "https://www.zenecohomes.com";

export const metadata: Metadata = {
  title: "Kostnader ved boligkjøp i Spania | Skatt og kalkulator",
  description:
    "Hva koster det å kjøpe bolig i Spania? Se ITP, IVA, AJD, advokat, notar, register og finansiering, og bruk kalkulatoren for å beregne totalbudsjettet.",
  alternates: { canonical: "/guide/kostnader-boligkjop-spania" },
};

const faq = [
  {
    q: "Hvor mye bør jeg legge til kjøpesummen i Spania?",
    a: "Det finnes ikke én prosent som passer alle kjøp. På Costa Blanca vil skatt alene normalt være 9 % ITP på ordinær bruktbolig under én million euro, mens ordinært nybygg normalt har 10 % IVA og i Comunitat Valenciana vanligvis 1,4 % AJD for en ferie-/sekundærbolig. Advokat, notar, register, bank og andre tjenester kommer i tillegg.",
  },
  {
    q: "Hva er ITP ved kjøp av bruktbolig i Valencia-regionen?",
    a: "Den generelle ITP-satsen i Comunitat Valenciana er 9 % fra 1. juni 2026. For fast eiendom med verdi over én million euro er den generelle satsen 11 %. Reduserte satser kan gjelde i særskilte situasjoner.",
  },
  {
    q: "Hva betaler jeg i skatt på nybygg i Spania?",
    a: "Ved ordinær førstegangsoverdragelse av bolig fra utbygger er IVA normalt 10 %. I Comunitat Valenciana kommer AJD i tillegg. Den generelle AJD-satsen er 1,4 % fra 1. juni 2026, mens særregler blant annet finnes for egen faste bolig når vilkårene er oppfylt.",
  },
  {
    q: "Er notar og eiendomsregister inkludert i skatten?",
    a: "Nei. Skatter og kostnader til notar, eiendomsregister og juridisk bistand er forskjellige poster. Notar- og registerhonorar følger regulerte tariffer og bør beregnes for den konkrete transaksjonen.",
  },
  {
    q: "Hvem betaler kostnadene ved et spansk boliglån?",
    a: "For selve pantelånet betaler låntaker normalt taksten. Banken dekker etter dagens boliglånsregler blant annet notar, registrering, gestoría og avgiften knyttet til låneskjøtet. Dette må ikke forveksles med kostnadene ved selve boligkjøpet.",
  },
  {
    q: "Er kalkulatoren et bindende kostnadsoverslag?",
    a: "Nei. Kalkulatoren er et planleggingsverktøy. Skatt, honorarer og andre kostnader må bekreftes for den konkrete boligen, regionen, kjøperen og finansieringen før du signerer.",
  },
] as const;

export default function PurchaseCostsGuidePage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Hva koster det å kjøpe bolig i Spania?",
    description: metadata.description,
    dateModified: "2026-10-07",
    author: { "@type": "Person", name: "Freddy Bremseth", url: BASE + "/om-oss/freddy" },
    publisher: { "@type": "Organization", name: "Zen Eco Homes", url: BASE },
    mainEntityOfPage: BASE + "/guide/kostnader-boligkjop-spania",
  };

  return (
    <main className="cornerstone-guide">
      <SiteHeader languageLinks={homeLanguageLinks("no")} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      <section className="page-hero compact-hero image-hero cornerstone-hero">
        <div className="cornerstone-hero-layout">
          <div className="cornerstone-hero-copy">
            <p className="eyebrow">Guide · Kostnader og totalbudsjett</p>
            <h1>Hva koster det å kjøpe bolig i Spania?</h1>
            <p>
              Kjøpesummen er bare starten. Her ser du hvilke skatter og kostnader som normalt kommer i tillegg
              når du kjøper bruktbolig eller nybygg – og kan beregne hvor stor del av totalbudsjettet som faktisk
              kan brukes på selve boligen.
            </p>
            <div className="article-hero-meta">
              <Link href="/om-oss/freddy">Av Freddy Bremseth</Link>
              <span><CalendarDays size={16} /> Sist oppdatert 7. oktober 2026</span>
            </div>
            <div className="hero-actions">
              <a className="contact-button" href="#boligbudsjett-kalkulator">Åpne kalkulatoren <ArrowRight size={17} /></a>
              <Link className="text-button light" href="/booking">Få et konkret regnestykke</Link>
            </div>
          </div>
          <aside className="cornerstone-hero-panel">
            <p className="eyebrow">Kort svar</p>
            <h2>Regn totalpris – ikke bare annonsepris</h2>
            <ul>
              <li>Bruktbolig: ITP varierer mellom regionene.</li>
              <li>Nybygg: normalt 10 % IVA + regional AJD.</li>
              <li>Advokat, notar og register kommer i tillegg.</li>
              <li>Boliglån kan gi egne kostnader og krav til takst.</li>
              <li>Valuta kan påvirke totalen betydelig for norske kjøpere.</li>
            </ul>
          </aside>
        </div>
      </section>

      <nav className="guide-index-band cornerstone-index" aria-label="Innhold i kostnadsguiden">
        <div>
          <span>På denne siden:</span>
          <a href="#oversikt">Kostnadsoversikt</a>
          <a href="#bruktbolig">Bruktbolig</a>
          <a href="#nybygg">Nybygg</a>
          <a href="#andre-kostnader">Andre kostnader</a>
          <a href="#boliglan">Boliglån</a>
          <a href="#boligbudsjett-kalkulator">Kalkulator</a>
          <a href="#faq">FAQ</a>
        </div>
      </nav>

      <section className="section cornerstone-section" id="oversikt">
        <div className="section-heading">
          <p className="eyebrow">Totalbudsjett</p>
          <h2>Hvor mye kommer i tillegg til boligprisen?</h2>
          <p>
            Du vil ofte høre at man bør legge 10–15 % til kjøpesummen. Det kan være en grei første huskeregel,
            men den er for grov til å bruke som endelig budsjett. Bruktbolig og nybygg beskattes forskjellig,
            de autonome regionene har ulike satser, og kostnader til advokat, bank, notar og register varierer.
          </p>
          <p>
            På Costa Blanca ligger boligen normalt i Comunitat Valenciana. Fra 1. juni 2026 er den generelle
            ITP-satsen ved ordinært bruktboligkjøp 9 % opp til én million euro og 11 % når eiendomsverdien er
            over én million euro. Ved ordinært nybygg fra utbygger betales normalt 10 % IVA. I Valencia-regionen
            kommer AJD i tillegg, med 1,4 % som generell sats for relevante notarielle dokumenter fra samme dato.
          </p>
        </div>
        <div className="table-wrap">
          <table>
            <thead><tr><th>Post</th><th>Bruktbolig på Costa Blanca</th><th>Nybygg på Costa Blanca</th></tr></thead>
            <tbody>
              <tr><td><strong>Hovedskatt</strong></td><td>Normalt ITP</td><td>Normalt IVA</td></tr>
              <tr><td><strong>Generell sats</strong></td><td>9 % til €1 mill. · 11 % over €1 mill.</td><td>10 % IVA</td></tr>
              <tr><td><strong>AJD</strong></td><td>Ikke samme hovedmodell som ved ordinært bruktboligkjøp</td><td>Vanligvis 1,4 % i Comunitat Valenciana; særregler finnes</td></tr>
              <tr><td><strong>Advokat</strong></td><td>Avtales med advokat</td><td>Avtales med advokat</td></tr>
              <tr><td><strong>Notar og register</strong></td><td>Regulerte tariffer – beregnes konkret</td><td>Regulerte tariffer – beregnes konkret</td></tr>
              <tr><td><strong>Finansiering</strong></td><td>Eventuell takst og bankrelaterte kostnader</td><td>Eventuell takst og bankrelaterte kostnader</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="section split cornerstone-section" id="bruktbolig">
        <div>
          <p className="eyebrow">Bruktbolig</p>
          <h2>Kostnader når du kjøper bruktbolig i Spania</h2>
          <p>
            Ved bruktbolig er ITP normalt den største enkeltkostnaden utover kjøpesummen. ITP er regional,
            så en sats du har lest om for Andalucía, Murcia eller Madrid skal ikke automatisk brukes på en bolig
            i Alicante-provinsen.
          </p>
          <p>
            For et ordinært kjøp i Comunitat Valenciana til €500.000 gir 9 % ITP alene €45.000 i skatt.
            Deretter må du legge til blant annet juridisk bistand, notar og registrering. Har du finansiering,
            kan takst og andre relevante bankkostnader også komme inn i regnestykket.
          </p>
        </div>
        <aside className="feature-panel purchase-cost-panel" aria-label="Kostnadseksempel for bruktbolig">
          <div className="purchase-cost-example">
            <p className="eyebrow">Eksempel · bruktbolig</p>
            <h3>Bruktbolig til €500.000</h3>
            <dl className="purchase-cost-breakdown">
              <dt>Kjøpesum</dt><dd>€500.000</dd>
              <dt>ITP (9 %)</dt><dd>€45.000</dd>
              <dt>Juridisk bistand (anslag 1 %)</dt><dd>€5.000</dd>
              <dt>Notar, register m.m. (anslag 0,5 %)</dt><dd>€2.500</dd>
              <dt className="purchase-cost-total-label">Illustrativ totalpris</dt>
              <dd className="purchase-cost-total-value">€552.500</dd>
            </dl>
            <p className="purchase-cost-caveat">
              Honorarene er planleggingsanslag, ikke lovbestemte satser eller et bindende tilbud.
              Be om konkrete kostnadsoverslag før kjøpet.
            </p>
          </div>
        </aside>
      </section>

      <section className="section split cornerstone-section" id="nybygg">
        <div>
          <p className="eyebrow">Nybygg</p>
          <h2>Kostnader når du kjøper nybygg i Spania</h2>
          <p>
            Kjøper du en ordinær ny bolig direkte fra utbygger i en førstegangsoverdragelse, betales normalt
            10 % IVA. I Comunitat Valenciana kommer AJD i tillegg. For ferie- og sekundærbolig vil den generelle
            AJD-satsen normalt være 1,4 %. Ved egen faste bolig finnes en særskilt 0,1 %-sats når vilkårene er oppfylt.
          </p>
          <p>
            På en ny bolig til €500.000 utgjør 10 % IVA €50.000. Med 1,4 % AJD kommer ytterligere €7.000 i
            dokumentavgift før juridisk bistand, notar, register og andre kostnader. Nybygg har derfor ofte
            høyere kjøpsskatt enn en ordinær bruktbolig til samme pris i Valencia-regionen.
          </p>
          <Link className="text-button" href="/guide/nybygg-i-spania">Les den komplette nybyggguiden <ArrowRight size={16} /></Link>
        </div>
        <aside className="feature-panel purchase-cost-panel" aria-label="Kostnadseksempel for nybygg">
          <div className="purchase-cost-example">
            <p className="eyebrow">Eksempel · nybygg</p>
            <h3>Nybygg til €500.000</h3>
            <dl className="purchase-cost-breakdown">
              <dt>Kjøpesum</dt><dd>€500.000</dd>
              <dt>IVA (10 %)</dt><dd>€50.000</dd>
              <dt>AJD (1,4 %)</dt><dd>€7.000</dd>
              <dt>Juridisk bistand (anslag 1 %)</dt><dd>€5.000</dd>
              <dt>Notar, register m.m. (anslag 0,5 %)</dt><dd>€2.500</dd>
              <dt className="purchase-cost-total-label">Illustrativ totalpris</dt>
              <dd className="purchase-cost-total-value">€564.500</dd>
            </dl>
            <p className="purchase-cost-caveat">
              Eksemplet bruker generell AJD-sats for en ordinær ferie- eller sekundærbolig.
              Andre satser kan gjelde. Honorarene er kun planleggingsanslag.
            </p>
          </div>
        </aside>
      </section>

      <section className="section cornerstone-section" id="andre-kostnader">
        <div className="section-heading">
          <p className="eyebrow">Ikke glem disse</p>
          <h2>Advokat, notar, register, valuta og etablering</h2>
          <p>
            Skattene er forholdsvis enkle å regne når riktig sats er avklart. De øvrige kostnadene bør baseres
            på konkrete tilbud og dokumentasjon, ikke en tilfeldig prosent fra en nettside.
          </p>
        </div>
        <div className="proof-grid">
          <article><h3>Uavhengig advokat</h3><p>Avklar honorar og hva oppdraget dekker: juridisk kontroll, kontrakter, fullmakt, NIE, sluttoppgjør og oppfølging varierer mellom firmaer.</p></article>
          <article><h3>Notar og register</h3><p>Honorarene følger regulerte tariffer og påvirkes av dokumentene og transaksjonen. Be om konkret beregning.</p></article>
          <article><h3>Gestoría og praktisk bistand</h3><p>Kan være relevant for skatteinnlevering, registrering, kontrakter med leverandører og annen administrasjon, avhengig av hvem som håndterer kjøpet.</p></article>
          <article><h3>Valutaveksling</h3><p>For norske kjøpere kan EUR/NOK flytte totalprisen med langt mer enn små forskjeller i andre gebyrer. Planlegg store overføringer tidlig.</p></article>
          <article><h3>Møbler og tilvalg</h3><p>Særlig ved nybygg kan belysning, hvitevarer, møbler, basseng, uteområder og andre tilvalg komme utenom annonsert pris.</p></article>
          <article><h3>Reserve etter overtakelse</h3><p>Behold likviditet til forsikring, strøm, vann, felleskostnader, mindre feil, møblering og uforutsette arbeider.</p></article>
        </div>
      </section>

      <section className="section cornerstone-section" id="boliglan">
        <div className="section-heading">
          <p className="eyebrow">Finansiering</p>
          <h2>Hva endrer seg hvis du har boliglån?</h2>
          <p>
            Kostnadene ved selve boligkjøpet og kostnadene ved pantelånet er to forskjellige ting. Etter de
            spanske boliglånsreglene betaler låntakeren normalt taksten. Banken dekker flere kostnader ved
            selve låneskjøtet, blant annet notar, register og gestoría knyttet til pantet.
          </p>
          <p>
            Det betyr ikke at banken betaler notar og register for selve eiendomskjøpet. Hold derfor kjøpskostnader
            og lånekostnader i to separate kolonner når du sammenligner finansiering.
          </p>
          <div className="hero-actions">
            <Link className="text-button" href="/guide/boliglan-spansk-bank-nordmenn">Boliglån i spansk bank</Link>
            <Link className="text-button" href="/guide/finansiere-bolig-i-spania">Finansiere bolig i Spania</Link>
          </div>
        </div>
      </section>

      <section className="section cornerstone-section">
        <PurchaseBudgetCalculator />
      </section>

      <section className="section cornerstone-section" id="faq">
        <div className="section-heading">
          <p className="eyebrow">Vanlige spørsmål</p>
          <h2>Kostnader ved boligkjøp i Spania – FAQ</h2>
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
          <p className="eyebrow">Før du reserverer</p>
          <h2>Få totalbudsjettet på plass før du velger bolig</h2>
          <p>Vi kan hjelpe deg å koble sammen kjøpesum, kostnader, finansiering og aktuelle boliger innenfor en realistisk ramme.</p>
        </div>
        <Link className="contact-button" href="/booking">Book en boligprat <ArrowRight size={18} /></Link>
      </section>

      <Footer />
    </main>
  );
}
