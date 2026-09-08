import Link from "next/link";
import { ArrowRight, Building2, Check, Leaf, ShieldCheck, Snowflake, Sparkles, Sun, Zap } from "lucide-react";
import { BuyerMatchQuiz } from "@/components/BuyerMatchQuiz";
import { GuideDownload } from "@/components/GuideDownload";
import { MeetFreddy } from "@/components/MeetFreddy";
import { Testimonials } from "@/components/Testimonials";
import { PropertyExplorer } from "@/components/PropertyExplorer";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { PropertyCard } from "@/components/PropertyCard";
import { SiteHeader } from "@/components/SiteHeader";
import {
  getPrimaryImage,
  getProperties,
  getPropertyRef,
  getPropertyTown,
  propertyMatchesRegion,
  regions,
} from "@/lib/realtyflow";
import { CARE_URL, homeHreflang, homeLanguageLinks } from "@/lib/i18n";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Moderne nybygg i Spania | Norsk eiendomsrådgivning | Zen Eco Homes",
  description:
    "Finn og sammenlign moderne nybygg, villaer, leiligheter og prosjekter på Costa Blanca. Norsk eiendomsrådgivning med kjøperens behov i sentrum.",
  alternates: { canonical: "/", languages: homeHreflang() },
};

export default async function Home() {
  const regionKeys = regions.map((r) => r.key);
  const allProps = await getProperties();
  const properties = allProps.slice(0, 6);
  const withRegions = allProps.map((p) => ({
    p,
    rk: regionKeys.filter((k) => propertyMatchesRegion(p, k)),
  }));
  // Lett datasett for hele basen – kun det som trengs til nøyaktig telling/filtrering.
  const explorerFilter = withRegions.map(({ p, rk }) => ({
    price: p.price,
    property_type: p.property_type,
    built_area: p.built_area,
    regionKeys: rk,
  }));
  // Fullt kort-datasett kun for forhåndsvisningen (bilder o.l. bare for disse).
  const explorerCards = withRegions.slice(0, 48).map(({ p, rk }) => ({
    ref: getPropertyRef(p),
    title: p.title,
    price: p.price,
    property_type: p.property_type,
    primary_image: getPrimaryImage(p),
    bedrooms: p.bedrooms,
    bathrooms: p.bathrooms,
    built_area: p.built_area,
    pool: p.pool,
    town: getPropertyTown(p) || undefined,
    regionKeys: rk,
  }));

  return (
    <main>
      <SiteHeader locale="no" languageLinks={homeLanguageLinks("no")} />

      <section id="top" className="hero">
        <video className="hero-video" autoPlay muted loop playsInline poster="/assets/areas.jpg">
          <source src="/assets/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow">Norsk eiendomsrådgivning · Moderne nybygg på Costa Blanca</p>
          <h1>Kjøp moderne bolig i Spania trygt</h1>
          <p className="hero-copy">
            Vi hjelper deg å velge riktig område, sammenligne moderne nybygg og forstå pris, kostnader, risiko og
            neste steg før du reserverer. Hvis en bruktbolig faktisk passer behovene dine bedre, hjelper vi deg å
            vurdere den også – uten at det er vårt hovedfokus.
          </p>
          <form className="search-card" action="/eiendommer">
            <input name="q" placeholder="Hvor vil du bo? Altea, Finestrat, Polop..." />
            <select name="type" defaultValue="">
              <option value="">Type bolig</option>
              <option>Villa</option>
              <option>Leilighet</option>
              <option>Rekkehus</option>
            </select>
            <button type="submit">
              Søk boliger <ArrowRight size={18} />
            </button>
          </form>
          <div className="hero-secondary">
            <a href="#boligmatch">Start Boligmatchen (2 min)</a>
            <span>eller</span>
            <a href="#kontakt">Book en uforpliktende boligprat</a>
          </div>
        </div>
      </section>

      <section className="trust-band">
        <div>
          <strong>Rådgivning med kjøperens behov i sentrum</strong>
          <span>Vi sammenligner områder, boliger, prosjekter og utbyggere før du bestemmer deg</span>
        </div>
        <div>
          <strong>Norsk oppfølging</strong>
          <span>Én trygg prosess med dialog, dokumenter og personlig shortlist</span>
        </div>
        <div>
          <strong>Moderne boliger på Costa Blanca</strong>
          <span>Hovedfokus på nybygg, moderne villaer og leiligheter – kyst og utvalgte innlandsområder</span>
        </div>
      </section>

      <PropertyExplorer filterData={explorerFilter} cards={explorerCards} />

      <section className="section proof-section">
        <div className="section-heading">
          <p className="eyebrow">Hvorfor ikke bare portal eller utbygger?</p>
          <h2>Du trenger mer enn en boligannonse</h2>
          <p>
            Portaler viser mange boliger. Utbyggere selger sine egne prosjekter. Zen Eco Homes hjelper deg å forstå
            hva som faktisk passer deg, hva du bør sjekke, og hvilke steg som bør tas før reservasjon.
          </p>
        </div>
        <div className="proof-grid">
          <article>
            <strong>01</strong>
            <h3>Først behov, så bolig</h3>
            <p>Vi starter med livsstil, budsjett, bruk, område og risiko før vi lager shortlist.</p>
            <Link className="text-button" href="/guide/omradeguide-eiendomskjop-i-spania">
              Les områdeguiden <ArrowRight size={16} />
            </Link>
          </article>
          <article>
            <strong>02</strong>
            <h3>Ikke stol blindt på portaler</h3>
            <p>Idealista, Finn.no og andre portaler kan ha duplikater, gamle annonser og feil tilgjengelighet.</p>
            <Link className="text-button" href="/magasin/idealista-finn-ikke-alltid-til-a-stole-pa">
              Unngå lokkeannonser <ArrowRight size={16} />
            </Link>
          </article>
          <article>
            <strong>03</strong>
            <h3>Trygg kjøpsprosess</h3>
            <p>Du får hjelp med prospekt, visning, betalingsplan, kostnader, advokat og neste steg.</p>
            <Link className="text-button" href="/kjopsprosess/kjopsprosess-bolig-i-spania">
              Se kjøpsprosessen <ArrowRight size={16} />
            </Link>
          </article>
        </div>
      </section>

      <section className="section proof-section">
        <div className="section-heading">
          <p className="eyebrow">Kjøpe moderne bolig i Spania med norsk rådgiver</p>
          <h2>Riktig område, riktig prosjekt og riktig prosess</h2>
          <p>
            Zen Eco Homes fokuserer først og fremst på moderne nybygg, villaer, leiligheter og tomter på Costa
            Blanca, Costa Blanca Nord, Costa Blanca Sør, Costa Cálida og utvalgte innlandsområder. Bruktbolig er
            ikke hovedproduktet vårt, men vi lar heller ikke en god kunde gå videre til feil bolig bare fordi den
            riktige løsningen ikke er nybygg.
          </p>
        </div>
        <div className="proof-grid">
          <article>
            <strong>Boliger</strong>
            <h3>Nybygg og moderne boliger</h3>
            <p>Se villaer, leiligheter, rekkehus og moderne prosjekter i utvalgte områder.</p>
            <Link className="text-button" href="/eiendommer">
              Se boliger <ArrowRight size={16} />
            </Link>
          </article>
          <article>
            <strong>Tomter</strong>
            <h3>Bygg nytt i Spania</h3>
            <p>Vurder tomt, regulering, vann, strøm, adkomst, arkitekt og budsjett før kjøp.</p>
            <Link className="text-button" href="/guide/guide-tomtekjop-bygging-i-spania">
              Les tomteguide <ArrowRight size={16} />
            </Link>
          </article>
          <article>
            <strong>Rådgivning</strong>
            <h3>Beslutningsstøtte før salg</h3>
            <p>God rådgivning kan spare deg for feilkjøp, tid, stress og unødvendige kostnader.</p>
            <Link className="text-button" href="/magasin/hvorfor-god-eiendomsradgiver-er-viktig">
              Hvorfor rådgiver er viktig <ArrowRight size={16} />
            </Link>
          </article>
        </div>
      </section>

      <MeetFreddy />

      <Testimonials />

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Utvalgte boliger</p>
          <h2>Aktuelle nybygg og moderne prosjekter</h2>
          <p>Et kuratert utvalg fra boligdatabasen vår, med hovedvekt på moderne boliger og nybygg.</p>
        </div>
        <div className="property-grid">
          {properties.map((property, index) => (
            <PropertyCard key={property.id || property.ref || index} property={property} priority={index < 3} />
          ))}
        </div>
        <div className="center-action">
          <Link className="text-button" href="/eiendommer">
            Se alle boliger <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <section className="section eco-section">
        <div className="section-heading">
          <p className="eyebrow"><Leaf size={15} /> Derfor «Eco»</p>
          <h2>Energieffektive boliger bygget for dagens krav</h2>
          <p>
            «Eco» i Zen Eco Homes handler om boliger med lav energibruk: god isolasjon mot både vinterkulde og
            sommervarme, høy energiklasse og mulighet for solceller. Det gir lavere strømregning, bedre inneklima
            og boliger som er godt rustet for stadig strengere energikrav.
          </p>
        </div>
        <div className="eco-grid">
          <div>
            <Zap />
            <strong>Høy energistandard</strong>
            <span>Mange moderne nybygg leveres med energiklasse A eller B og vesentlig bedre energiytelse enn eldre bygningsmasse.</span>
          </div>
          <div>
            <Snowflake />
            <strong>Isolasjon vinter + sommer</strong>
            <span>Godt isolerte vegger og vinduer holder på varmen om vinteren og kjølig inne om sommeren.</span>
          </div>
          <div>
            <Sun />
            <strong>Solceller og lavere energibruk</strong>
            <span>Mange prosjekter leveres med eller kan klargjøres for solceller, avhengig av prosjekt og spesifikasjon.</span>
          </div>
          <div>
            <ShieldCheck />
            <strong>Godt rustet for strengere energikrav</strong>
            <span>Energikravene i EU skjerpes gradvis. Energieffektive boliger står tryggere for framtiden.</span>
          </div>
        </div>
      </section>

      <BuyerMatchQuiz />

      <section className="section split">
        <div>
          <p className="eyebrow">Trygg kjøpsreise</p>
          <h2>Bygget for nordmenn som vil kjøpe moderne nybygg i Spania</h2>
          <p>
            Zen Eco Homes kombinerer boligsøk, områdevalg, prosjektvurdering, boligmatch og kundeportal med
            personlig oppfølging gjennom kjøpsprosessen.
          </p>
          <div className="check-list">
            {["Prosjektutvalg og rådgivning", "Dokumenter og meldinger på Min Side", "Personlig oppfølging hele veien"].map(
              (item) => (
                <span key={item}>
                  <Check size={18} /> {item}
                </span>
              ),
            )}
          </div>
        </div>
        <div className="feature-panel">
          <div>
            <ShieldCheck /> Norsk trygghet
          </div>
          <div>
            <Leaf /> Energieffektive boliger
          </div>
          <div>
            <Sparkles /> Boliger valgt etter dine behov
          </div>
          <div>
            <Building2 /> Nybygg og moderne prosjekter
          </div>
        </div>
      </section>

      <section className="section proof-section">
        <div className="section-heading">
          <p className="eyebrow">Hvorfor Zen Eco Homes</p>
          <h2>En roligere og mer strukturert vei til bolig i Spania</h2>
          <p>
            Mange kjøpere møter et uoversiktlig marked med like prospekter, ulike meglere og lite norsk oppfølging.
            Zen Eco Homes samler områdevalg, boligmatch og dialog i én ryddig prosess.
          </p>
        </div>
        <div className="proof-grid">
          <article>
            <strong>01</strong>
            <h3>Område først</h3>
            <p>Vi hjelper deg å sortere Costa Blanca Nord, Costa Blanca Sør og Costa Cálida før du forelsker deg i feil bolig.</p>
            <Link className="text-button" href="/omrader">
              Sammenlign områder <ArrowRight size={16} />
            </Link>
          </article>
          <article>
            <strong>02</strong>
            <h3>Nybygg og moderne prosjekter</h3>
            <p>Fokus på moderne boliger, energieffektive løsninger, lavere vedlikehold og tydelige spesifikasjoner.</p>
            <Link className="text-button" href="/guide/kjop-bolig-i-spania-na-eller-vente">
              Kjøpe nå eller vente? <ArrowRight size={16} />
            </Link>
          </article>
          <article>
            <strong>03</strong>
            <h3>Digital oppfølging</h3>
            <p>Vi holder orden på ønskene dine, favoritter, områder og neste steg, slik at du slipper å starte på nytt hver gang.</p>
            <Link className="text-button" href="/kjopsprosessen">
              Se prosessen <ArrowRight size={16} />
            </Link>
          </article>
        </div>
      </section>

      <section className="section proof-section">
        <div className="section-heading">
          <p className="eyebrow">Nye tjenester</p>
          <h2>Mer enn kjøp – vi følger deg hele veien</h2>
          <p>
            Zen Eco Homes handler ikke bare om selve kjøpet. Vi hjelper deg å finne den rette moderne boligen eller
            tomten i innlandet, og vi passer på boligen din når du ikke er der.
          </p>
        </div>
        <div className="proof-grid">
          <article>
            <strong>Innlandet</strong>
            <h3>Mer plass, natur og ro</h3>
            <p>
              Større tomter, moderne villaer og nybygg i innlandet rundt Pinoso, Aspe og Novelda – ofte til en
              lavere pris per kvadratmeter enn ved kysten. Vi legger vekt på vann, strøm, adkomst og regulering før du binder deg.
            </p>
            <Link className="text-button" href="/inland">
              Utforsk innlandet <ArrowRight size={16} />
            </Link>
          </article>
          <article>
            <strong>Keyholding</strong>
            <h3>Vi passer på boligen din</h3>
            <p>
              Nøkkelforvaltning, tilsyn, vedlikehold og klargjøring før ankomst. Med care.zenecohomes.com har du en
              trygg lokal partner som tar seg av boligen mellom hvert opphold.
            </p>
            <a className="text-button" href={CARE_URL} target="_blank" rel="noopener noreferrer">
              Se keyholding-tjenesten <ArrowRight size={16} />
            </a>
          </article>
        </div>
      </section>

      <GuideDownload />

      <section className="contact-section" id="kontakt">
        <div>
          <p className="eyebrow">Klar for neste steg?</p>
          <h2>Fortell oss hva du ser etter</h2>
          <p>Vi hjelper deg med område, budsjett, moderne nybygg, prosjekter og neste steg i kjøpsprosessen.</p>
        </div>
        <ContactForm source="zenecohomes-home" />
      </section>

      <Footer />
    </main>
  );
}
