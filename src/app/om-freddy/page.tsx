import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle, ShieldCheck } from "lucide-react";

import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
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
            Jeg heter Freddy Bremseth, og jeg hjelper nordmenn med å kjøpe bolig i Spania – trygt, på norsk,
            og uten de fellene som altfor mange går i.
          </p>
          <p>
            Veien hit startet med samme drøm som du kanskje har nå: sol, livskvalitet og en bolig i Spania. Da
            jeg selv ble kjent med det spanske markedet, oppdaget jeg hvor lett det er å miste oversikten:
            uklare kostnader, kontrakter på et språk du ikke behersker, og meglere som jobber for utbygger –
            ikke for deg.
          </p>
          <p>
            Det ble utgangspunktet for måten jeg jobber på i dag. Etter å ha holdt informasjonsmøter og eventer
            om boligkjøp i Spania, etablerte jeg meg permanent på Costa Blanca nord høsten 2025. Herfra driver
            jeg Zen Eco Homes, med base i Biar der jeg også har min egen olivengård. Jeg kjenner både kysten og
            innlandet – fra de etablerte områdene rundt Torrevieja og Finestrat, til de rolige innlandsbyene
            Biar, Villena og Sax.
          </p>
          <p>
            Som uavhengig rådgiver står jeg på din side gjennom hele prosessen: fra første samtale om budsjett
            og behov, via visning og kontrakt, til utlevert nøkkel – og alt det praktiske etterpå, som
            nøkkelhåndtering og oppfølging av boligen. Jeg samarbeider tett med etablerte aktører i markedet,
            blant annet soleada.no, slik at du får et bredt utvalg av boliger uten å miste den uavhengige
            rådgivningen.
          </p>
          <p>
            Filosofien min er enkel: <strong>Jeg sier like ofte nei til et prosjekt som ja.</strong> Holder ikke
            beliggenheten eller papirene mål, skal du få vite det. For det er verdiene dine vi snakker om – ikke
            en rask handel.
          </p>
          <p>
            Jeg snakker norsk, engelsk og spansk, bor her fast med familien min, og er bare en telefon eller
            e-post unna når du lurer på noe.
          </p>
          <p className="om-freddy-sign">— Freddy Bremseth, Zen Eco Homes</p>

          <div className="hero-actions" style={{ marginTop: 8 }}>
            <Link className="contact-button" href="/#kontakt">
              <MessageCircle size={18} /> Ta en uforpliktende prat
            </Link>
            <a className="text-button" href="https://www.freddybremseth.com" target="_blank" rel="noopener noreferrer">
              freddybremseth.com <ArrowRight size={16} />
            </a>
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

      <section className="contact-section" id="kontakt-om">
        <div>
          <p className="eyebrow">Neste steg</p>
          <h2>La oss ta en uforpliktende prat</h2>
          <p>Fortell meg hva du ser etter, så hjelper jeg deg å vurdere område, budsjett, risiko og neste steg.</p>
        </div>
        <Link className="contact-button" href="/#kontakt">
          Kontakt Freddy <ArrowRight size={18} />
        </Link>
      </section>
      <Footer />
    </main>
  );
}
