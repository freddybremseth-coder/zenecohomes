import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { Testimonials } from "@/components/Testimonials";
import { homeLanguageLinks } from "@/lib/i18n";
import { ANDREA_PORTRAIT_DATA_URI } from "@/lib/andreaPortrait";

export const metadata: Metadata = {
  title: "Slik hjelper vi deg med boligkjøpet i Spania | Zen Eco Homes",
  description:
    "Få personlig hjelp gjennom boligkjøpet i Spania – fra områdevalg og skreddersydde boligforslag til visninger, overtakelse og oppfølging hele veien.",
  alternates: {
    canonical: "/kjopsprosessen",
  },
  openGraph: {
    title: "Slik hjelper vi deg med boligkjøpet i Spania | Zen Eco Homes",
    description:
      "Personlig oppfølging fra første samtale til overtakelse. Vi hjelper deg med boligvalg, visninger og koordinering underveis.",
    url: "https://www.zenecohomes.com/kjopsprosessen",
    type: "website",
  },
};

export default function BuyingProcessPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.zenecohomes.com/kjopsprosessen#webpage",
        url: "https://www.zenecohomes.com/kjopsprosessen",
        name: "Slik hjelper vi deg med boligkjøpet i Spania",
        description:
          "Personlig oppfølging fra første samtale til overtakelse med Zen Eco Homes.",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="page-hero compact-hero">
        <h1>Slik hjelper vi deg med boligkjøpet i Spania</h1>
        <p>
          Hos Zen Eco Homes får du personlig oppfølging fra første samtale til overtakelse. Vi hjelper deg med å finne riktig område og bolig, planlegge visninger og koordinere de praktiske stegene underveis. Du har en norsk rådgiver å forholde deg til gjennom hele prosessen.
        </p>
        <div className="hero-actions">
          <Link className="contact-button" href="/booking">
            Start med en boligprat <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      <section className="section buying-process-portraits" aria-label="Dine rådgivere på Costa Blanca">
        <div className="buying-process-portraits-copy">
          <p className="eyebrow">Personlig oppfølging</p>
          <h2>Møt menneskene som hjelper deg med boligkjøpet</h2>
          <p>Hos Zen Eco Homes møter du mennesker som kjenner Costa Blanca og kan hjelpe deg fra de første spørsmålene til overtakelsen.</p>
          <Link className="text-button" href="/om-oss">Bli kjent med Freddy og Andrea <ArrowRight size={16} /></Link>
        </div>
        <div className="buying-process-portraits-images">
          <img src="/assets/freddy-eiendom-costa-blanca.webp" alt="Freddy Bremseth som eiendomsrådgiver på Costa Blanca" loading="lazy" />
          <img src={ANDREA_PORTRAIT_DATA_URI} alt="Andrea Thorsnes Karlsen i Zen Eco Homes" loading="lazy" style={{ objectPosition: "center 26%" }} />
        </div>
      </section>

      <section className="section buying-process-content">
        <div className="section-heading">
          <h2>Dette hjelper vi deg med</h2>
          <p>
            Et boligkjøp skal være oversiktlig og enkelt. Derfor tilpasser vi prosessen etter dine ønsker og behov, slik at du får den hjelpen du trenger underveis.
          </p>
        </div>

        <div className="buying-process-help-grid">
          <article>
            <h3>Finn ut hva som passer deg</h3>
            <p>
              Du får hjelp til å avklare behov, budsjett og hvilke områder som passer best. Målet er å finne alternativer som passer til både økonomien din og hvordan du ønsker å bruke boligen.
            </p>
            <p>
              Er du fortsatt i vurderingsfasen, kan du delta på våre uforpliktende <Link href="/informasjonsmote">informasjonsmøter</Link> for å lære mer om boligmarkedet og stille spørsmål.
            </p>
          </article>

          <article>
            <h3>Få skreddersydde boligforslag</h3>
            <p>
              Sammen finner vi boligene som passer behovene dine. Vi undersøker tilgjengeligheten og hjelper deg med å vurdere aktuelle alternativer, slik at du kan bruke tiden på boliger som faktisk er interessante.
            </p>
            <p>
              Se vårt utvalg av <Link href="/eiendommer">boliger til salgs i Spania</Link>.
            </p>
          </article>

          <article>
            <h3>Opplev boligene på nært hold</h3>
            <p>
              Vi arrangerer <Link href="/visningstur">visningstur til Spania</Link> der vi besøker boligene. Dette er også en god mulighet til å bli bedre kjent med nærområdene. Vi tar oss av planleggingen, slik at du kan konsentrere deg om å finne boligen som passer deg best.
            </p>
          </article>

          <article>
            <h3>Oppfølging frem mot overtakelsen</h3>
            <p>
              Når du har funnet drømmeboligen hjelper vi deg med å koordinere de praktiske stegene frem mot overtakelsen. Du får oversikt over hva som skal skje og hvem som har ansvar for de ulike oppgavene.
            </p>
            <p>
              Vil du vite mer om hvordan selve kjøpet foregår, kan du lese vår guide om å <Link href="/guide/kjope-bolig-i-spania">kjøpe bolig i Spania</Link>.
            </p>
          </article>

          <article>
            <h3>Få hjelp også etter at nøklene er i hånden</h3>
            <p>
              Oppfølgingen trenger ikke avsluttes når boligen er din. Du kan få hjelp med praktiske forhold rundt overtakelsen og videre tilsyn når du ikke er i Spania. Gjennom <a href="https://care.zenecohomes.com/" target="_blank" rel="noopener noreferrer">Zen Eco Homes Care</a> kan du blant annet få hjelp med nøkkeloppbevaring og oppfølging av eiendommen.
            </p>
          </article>
        </div>
      </section>

      <section className="section buying-process-content" aria-label="Roller og neste steg i boligkjøpet">
        <div className="section-heading">
          <h2>Hva gjør <span className="human-name">Zen Eco Homes</span> <span className="unbroken-word">gjennom</span> kjøpsprosessen?</h2>
          <p>Vi hjelper deg med områdevalg, boligforslag, visninger og koordinering. For juridiske, skattemessige og tekniske vurderinger anbefaler vi uavhengige fagpersoner.</p>
        </div>
        <div className="buying-process-help-grid">
          <article>
            <h3>Hvem gjør hva når du kjøper bolig i Spania?</h3>
            <p>Du bestemmer hvilken bolig du vil kjøpe og godkjenner avtalene. Vi organiserer boligjakten, dialogen og visningene. Advokat kontrollerer rettigheter og kjøpekontrakter, mens bank og andre fagpersoner vurderer finansiering og tekniske forhold.</p>
            <p>Før du går videre kan du lese om <Link href="/guide/juridiske-fallgruver-boligkjop-spania">juridiske fallgruver</Link>, <Link href="/guide/nie-skattenummer-spania">NIE og skattenummer</Link> og <Link href="/guide/boliglan-spansk-bank-nordmenn">boliglån i spansk bank</Link>.</p>
          </article>
          <article>
            <h3>Finn riktig område og boligtype</h3>
            <p>Vi hjelper deg med å sammenligne <Link href="/omrader">områdene på Costa Blanca</Link>, og med å vurdere om bruktbolig eller nybygg passer deg. Les også vår <Link href="/guide/nybygg-i-spania">guide om nybygg i Spania</Link>.</p>
          </article>
          <article>
            <h3>Hva er forskjellen på denne siden og guiden til boligkjøp?</h3>
            <p>Her beskriver vi hvordan vi følger deg opp som rådgivere. I den komplette <Link href="/guide/kjope-bolig-i-spania">guiden til boligkjøp i Spania</Link> finner du detaljer om selve kjøpsprosessen, dokumenter, kostnader og viktige kontroller.</p>
          </article>
        </div>
      </section>

      <Testimonials heading="Dette sier våre tidligere kunder" carousel />

      <Footer />
    </main>
  );
}
