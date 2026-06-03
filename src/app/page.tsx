import Link from "next/link";
import { ArrowRight, Building2, Check, Leaf, ShieldCheck, Sparkles } from "lucide-react";
import { BuyerMatchQuiz } from "@/components/BuyerMatchQuiz";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { PropertyCard } from "@/components/PropertyCard";
import { SiteHeader } from "@/components/SiteHeader";
import { getProperties } from "@/lib/realtyflow";
import { homeHreflang, homeLanguageLinks } from "@/lib/i18n";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/", languages: homeHreflang() },
};

export default async function Home() {
  const properties = await getProperties(6);

  return (
    <main>
      <SiteHeader locale="no" languageLinks={homeLanguageLinks("no")} />

      <section id="top" className="hero">
        <video className="hero-video" autoPlay muted loop playsInline poster="/assets/areas.jpg">
          <source src="/assets/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow">Norsk, uavhengig rådgivning · Nybygg i Spania</p>
          <h1>Kjøp bolig i Spania trygt</h1>
          <p className="hero-copy">
            Med norsk, uavhengig rådgivning fra første søk til overtakelse. Vi hjelper deg å vurdere område,
            prosjekt, pris, risiko og neste steg før du reserverer.
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
        </div>
      </section>

      <section className="trust-band">
        <div>
          <strong>Uavhengig rådgivning</strong>
          <span>Vi hjelper deg å sammenligne boliger, områder og utbyggere</span>
        </div>
        <div>
          <strong>Norsk oppfølging</strong>
          <span>Én trygg prosess med dialog, dokumenter og shortlist</span>
        </div>
        <div>
          <strong>1329+ boliger</strong>
          <span>Oppdateres fra RealtyFlow med regioner og områdevalg</span>
        </div>
      </section>

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
            <Link className="text-button" href="/magasin/omradeguide-eiendomskjop-i-spania">
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
            <Link className="text-button" href="/magasin/kjopsprosess-bolig-i-spania">
              Se kjøpsprosessen <ArrowRight size={16} />
            </Link>
          </article>
        </div>
      </section>

      <section className="section proof-section">
        <div className="section-heading">
          <p className="eyebrow">Kjøpe bolig i Spania med norsk rådgiver</p>
          <h2>Riktig område, riktig bolig og riktig prosess</h2>
          <p>
            Zen Eco Homes hjelper nordmenn med å finne bolig, nybygg, tomt eller villa i Spania. Vi fokuserer
            spesielt på Costa Blanca, Costa Blanca Nord, Costa Blanca Sør, Costa Cálida og innlandsområder med
            store tomter og moderne boliger.
          </p>
        </div>
        <div className="proof-grid">
          <article>
            <strong>Boliger</strong>
            <h3>Nybygg og moderne boliger</h3>
            <p>Se villaer, leiligheter, rekkehus og prosjekter i utvalgte områder.</p>
            <Link className="text-button" href="/eiendommer">
              Se boliger <ArrowRight size={16} />
            </Link>
          </article>
          <article>
            <strong>Tomter</strong>
            <h3>Bygg nytt i Spania</h3>
            <p>Vurder tomt, regulering, vann, strøm, adkomst, arkitekt og budsjett før kjøp.</p>
            <Link className="text-button" href="/magasin/guide-tomtekjop-bygging-i-spania">
              Les tomteguide <ArrowRight size={16} />
            </Link>
          </article>
          <article>
            <strong>Rådgivning</strong>
            <h3>En rådgiver som jobber for deg</h3>
            <p>God rådgivning kan spare deg for feilkjøp, tid, stress og unødvendige kostnader.</p>
            <Link className="text-button" href="/magasin/hvorfor-god-eiendomsradgiver-er-viktig">
              Hvorfor rådgiver er viktig <ArrowRight size={16} />
            </Link>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Utvalgte boliger</p>
          <h2>Aktuelle nybygg og prosjekter</h2>
          <p>Et kuratert utvalg hentes fra RealtyFlow. Når databasen oppdateres der, følger nettsiden etter.</p>
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

      <BuyerMatchQuiz />

      <section className="section split">
        <div>
          <p className="eyebrow">Trygg kjøpsreise</p>
          <h2>Bygget for nordmenn som vil kjøpe nybygg i Spania</h2>
          <p>
            Siden kombinerer et stilrent førsteinntrykk med en praktisk kundereise: boligsøk, match, kundeportal og
            oppfølging via RealtyFlow.
          </p>
          <div className="check-list">
            {["Prosjektutvalg og rådgivning", "Dokumenter og meldinger på Min Side", "Automatisert leadflyt til CRM"].map(
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
            <Sparkles /> AI-støttet boligmatch
          </div>
          <div>
            <Building2 /> Nybygg og prosjekter
          </div>
        </div>
      </section>

      <section className="section proof-section">
        <div className="section-heading">
          <p className="eyebrow">Hvorfor Zeneco</p>
          <h2>En roligere og mer strukturert vei til bolig i Spania</h2>
          <p>
            Mange kjøpere møter et uoversiktlig marked med like prospekter, ulike meglere og lite norsk oppfølging.
            Zeneco samler områdevalg, boligmatch og dialog i én ryddig prosess.
          </p>
        </div>
        <div className="proof-grid">
          <article>
            <strong>01</strong>
            <h3>Område først</h3>
            <p>Vi hjelper deg å sortere Costa Blanca Nord, Costa Blanca Sør og Costa Calida før du forelsker deg i feil bolig.</p>
            <Link className="text-button" href="/omrader">
              Sammenlign områder <ArrowRight size={16} />
            </Link>
          </article>
          <article>
            <strong>02</strong>
            <h3>Nybygg og prosjekter</h3>
            <p>Fokus på moderne boliger, energieffektive løsninger, lavere vedlikehold og tryggere overtakelse.</p>
            <Link className="text-button" href="/magasin/kjop-bolig-i-spania-na-eller-vente">
              Kjøpe nå eller vente? <ArrowRight size={16} />
            </Link>
          </article>
          <article>
            <strong>03</strong>
            <h3>Digital oppfølging</h3>
            <p>RealtyFlow holder orden på leads, favoritter, områder og neste steg, slik at du slipper å starte på nytt hver gang.</p>
            <Link className="text-button" href="/kjopsprosessen">
              Se prosessen <ArrowRight size={16} />
            </Link>
          </article>
        </div>
      </section>

      <section className="contact-section" id="kontakt">
        <div>
          <p className="eyebrow">Klar for en prat?</p>
          <h2>Fortell oss hva du ser etter</h2>
          <p>Vi hjelper deg med område, budsjett, prosjekter og neste steg i kjøpsprosessen.</p>
        </div>
        <ContactForm source="zenecohomes-home" />
      </section>

      <Footer />
    </main>
  );
}
