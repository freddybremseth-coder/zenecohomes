import Link from "next/link";
import { ArrowRight, Leaf, ShieldCheck, Snowflake, Sun, Zap } from "lucide-react";
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

const areaChoices = [
  {
    label: "Costa Blanca Nord",
    places: "Altea · Albir · Finestrat · Benidorm · Villajoyosa · Calpe",
    description: "For deg som prioriterer moderne boliger, landskap, helårsservice og kort vei til Alicante flyplass.",
    href: "/omrader/costa-blanca-nord",
  },
  {
    label: "Costa Blanca Sør",
    places: "Guardamar · Ciudad Quesada · Torrevieja · Orihuela Costa",
    description: "Stort marked, mange moderne prosjekter og et bredt internasjonalt miljø nær strand og golf.",
    href: "/omrader/costa-blanca-sor",
  },
  {
    label: "Innlandet",
    places: "Biar · Villena · Sax · Pinoso · Aspe · Novelda",
    description: "Mer plass, større tomter, natur og mulighet for moderne villa eller eget byggeprosjekt.",
    href: "/inland",
  },
  {
    label: "Costa Cálida",
    places: "San Pedro · San Javier · Los Alcázares · La Manga · Murcia",
    description: "Et alternativ sør for Alicante med nybygg, golf, kyst og ofte et annet prisnivå enn Costa Blanca.",
    href: "/eiendommer?region=costa-calida",
  },
];

export default async function Home() {
  const regionKeys = regions.map((r) => r.key);
  const allProps = await getProperties();
  const properties = allProps.slice(0, 6);
  const withRegions = allProps.map((p) => ({
    p,
    rk: regionKeys.filter((k) => propertyMatchesRegion(p, k)),
  }));

  const explorerFilter = withRegions.map(({ p, rk }) => ({
    price: p.price,
    property_type: p.property_type,
    built_area: p.built_area,
    regionKeys: rk,
  }));

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
          <h1>Finn riktig moderne bolig i Spania</h1>
          <p className="hero-copy">
            Vi starter med hvor og hvordan du vil bo. Deretter sammenligner vi moderne nybygg, prosjekter og
            alternativer som faktisk passer budsjettet, behovene og planene dine.
          </p>
          <div className="hero-actions">
            <a className="contact-button" href="#boligmatch">
              Start Boligmatchen <ArrowRight size={18} />
            </a>
            <Link className="text-button light" href="/eiendommer">
              Se boliger
            </Link>
            <Link className="text-button light" href="/booking">
              Book en prat
            </Link>
          </div>
        </div>
      </section>

      <section className="trust-band">
        <div>
          <strong>Rådgivning før bolig</strong>
          <span>Område, bruk og budsjett først. Deretter bolig og prosjekt.</span>
        </div>
        <div>
          <strong>Norsk oppfølging</strong>
          <span>Én strukturert prosess med shortlist, dokumenter og neste steg.</span>
        </div>
        <div>
          <strong>Moderne bolig som hovedfokus</strong>
          <span>Nybygg, moderne villaer, leiligheter og utvalgte byggeprosjekter.</span>
        </div>
      </section>

      <PropertyExplorer filterData={explorerFilter} cards={explorerCards} />

      <section className="section proof-section" id="omradevalg">
        <div className="section-heading">
          <p className="eyebrow">Område før bolig</p>
          <h2>Hvilket Spania passer deg?</h2>
          <p>
            En flott bolig i feil område blir sjelden et godt kjøp. Start med hverdagen du ønsker, så reduserer vi
            markedet før du bruker tid på enkeltprosjekter.
          </p>
        </div>
        <div className="area-choice-grid">
          {areaChoices.map((area) => (
            <article className="area-choice-card" key={area.label}>
              <span>{area.places}</span>
              <h3>{area.label}</h3>
              <p>{area.description}</p>
              <Link className="text-button" href={area.href}>
                Utforsk området <ArrowRight size={16} />
              </Link>
            </article>
          ))}
        </div>
        <div className="center-action">
          <Link className="contact-button" href="/omrader">
            Sammenlign alle områder <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <MeetFreddy />
      <Testimonials />

      <BuyerMatchQuiz />

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Utvalgte boliger</p>
          <h2>Aktuelle nybygg og moderne prosjekter</h2>
          <p>
            Et utvalg fra boligdatabasen vår. Bruk søket for hele markedet, eller la Boligmatchen hjelpe deg å
            snevre inn valget.
          </p>
        </div>
        <div className="property-grid">
          {properties.map((property, index) => (
            <PropertyCard key={property.id || property.ref || index} property={property} priority={index < 3} />
          ))}
        </div>
        <div className="center-action">
          <Link className="contact-button" href="/eiendommer">
            Se alle boliger <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <section className="section proof-section">
        <div className="section-heading">
          <p className="eyebrow">Hvorfor Zen Eco Homes</p>
          <h2>Færre tilfeldige visninger. Bedre beslutninger.</h2>
          <p>
            Vi kombinerer lokal områdekunnskap, moderne boligprosjekter og en ryddig digital kjøperreise. Målet er
            ikke flest mulig annonser eller visninger, men de riktige alternativene.
          </p>
        </div>
        <div className="proof-grid">
          <article>
            <strong>01</strong>
            <h3>Først behov og område</h3>
            <p>Vi avklarer bruk, budsjett, livsstil og geografi før vi lager shortlist.</p>
            <Link className="text-button" href="/omrader">Sammenlign områder <ArrowRight size={16} /></Link>
          </article>
          <article>
            <strong>02</strong>
            <h3>Moderne nybygg i fokus</h3>
            <p>Vi sammenligner prosjekt, beliggenhet, pris, kvaliteter, betalingsplan og alternativer.</p>
            <Link className="text-button" href="/nybygg-costa-blanca">Se nybygg-guiden <ArrowRight size={16} /></Link>
          </article>
          <article>
            <strong>03</strong>
            <h3>Oppfølging hele veien</h3>
            <p>Shortlist, favoritter, meldinger, dokumenter og neste steg samles i én kjøperreise.</p>
            <Link className="text-button" href="/kjopsprosessen">Se kjøpsprosessen <ArrowRight size={16} /></Link>
          </article>
        </div>
      </section>

      <section className="section eco-section">
        <div className="section-heading">
          <p className="eyebrow"><Leaf size={15} /> Derfor «Eco»</p>
          <h2>Moderne boliger med lavere energibehov</h2>
          <p>
            Energieffektivitet er en viktig del av moderne boligstandard i Spania. Vi vurderer alltid prosjektets
            faktiske spesifikasjon fremfor å anta at alle nybygg har samme nivå.
          </p>
        </div>
        <div className="eco-grid">
          <div><Zap /><strong>Høy energistandard</strong><span>Mange moderne nybygg leveres med energiklasse A eller B.</span></div>
          <div><Snowflake /><strong>Komfort hele året</strong><span>God isolasjon og moderne vinduer kan redusere behovet for både oppvarming og kjøling.</span></div>
          <div><Sun /><strong>Solenergi</strong><span>Mange prosjekter leveres med eller kan klargjøres for solceller, avhengig av spesifikasjonen.</span></div>
          <div><ShieldCheck /><strong>Fremtidig standard</strong><span>Lavere energibehov og moderne tekniske løsninger kan gjøre boligen bedre rustet for fremtidige krav.</span></div>
        </div>
      </section>

      <section className="section proof-section">
        <div className="section-heading">
          <p className="eyebrow">Etter kjøpet</p>
          <h2>Boligen skal fungere også når du ikke er i Spania</h2>
        </div>
        <div className="proof-grid">
          <article>
            <strong>Min side</strong>
            <h3>Hold oversikt over kjøperreisen</h3>
            <p>Favoritter, dokumenter, meldinger og neste steg er samlet på ett sted.</p>
            <Link className="text-button" href="/min-side">Åpne Min side <ArrowRight size={16} /></Link>
          </article>
          <article>
            <strong>Keyholding</strong>
            <h3>Lokal oppfølging av boligen</h3>
            <p>Nøkkelforvaltning, tilsyn og praktiske tjenester når du ikke er i Spania.</p>
            <a className="text-button" href={CARE_URL} target="_blank" rel="noopener noreferrer">Se Property Care <ArrowRight size={16} /></a>
          </article>
        </div>
      </section>

      <GuideDownload />

      <section className="contact-section" id="kontakt">
        <div>
          <p className="eyebrow">Klar for neste steg?</p>
          <h2>Fortell oss hvordan du ønsker å bo</h2>
          <p>Vi starter med område, bruk og budsjett og hjelper deg videre til de riktige moderne boligene.</p>
        </div>
        <ContactForm source="zenecohomes-home" />
      </section>

      <Footer />
    </main>
  );
}
