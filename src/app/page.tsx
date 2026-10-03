import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Testimonials } from "@/components/Testimonials";
import { HomeAdvisors } from "@/components/HomeAdvisors";
import { Footer } from "@/components/Footer";
import { PropertyCard } from "@/components/PropertyCard";
import { SiteHeader } from "@/components/SiteHeader";
import { getProperties } from "@/lib/realtyflow";
import { CARE_URL, homeHreflang, homeLanguageLinks } from "@/lib/i18n";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bolig i Spania | Norsk rådgivning | Zen Eco Homes",
  description: "Finn bolig i Spania med norsk rådgivning. Sammenlign områder, nybygg, villaer og leiligheter på Costa Blanca, Costa Cálida og i innlandet.",
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
    href: "/omrader/innlandet",
  },
  {
    label: "Costa Cálida",
    places: "San Pedro · San Javier · Los Alcázares · La Manga · Murcia",
    description: "Et alternativ sør for Alicante med nybygg, golf, kyst og ofte et annet prisnivå enn Costa Blanca.",
    href: "/omrader/costa-calida",
  },
];

export default async function Home() {
  const properties = await getProperties(6, "zeneco");

  return (
    <main className="home-v1">
      <SiteHeader locale="no" languageLinks={homeLanguageLinks("no")} homepage />

      <section id="top" className="hero">
        <Image className="hero-video" src="/assets/areas.jpg" alt="Costa Blanca med moderne boliger, kyst og fjell" fill priority quality={70} sizes="100vw" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow">Norsk eiendomsrådgivning · Moderne nybygg på Costa Blanca</p>
          <h1>Finn din nye bolig i Spania</h1>
          <p className="hero-copy">
            Vi starter med hvor og hvordan du vil bo. Deretter sammenligner vi moderne nybygg, prosjekter og
            alternativer som faktisk passer budsjettet, behovene og planene dine.
          </p>
          <div className="hero-actions">
            <Link className="contact-button" href="/eiendommer#boligmatch">
              Start boligmatchen <ArrowRight size={18} />
            </Link>
            <Link className="text-button light" href="/eiendommer">
              Se boliger
            </Link>
          </div>
          <div className="hero-editorial-meta" aria-label="Zen Eco Homes områder">
            <span>38°32′ N · Costa Blanca</span>
            <span>Nord</span>
            <span>Sør</span>
            <span>Innlandet</span>
            <span>Costa Cálida</span>
          </div>
        </div>
      </section>

      <Testimonials heading="Dette sier kundene våre" carousel />

      <section className="section zeneco-selection">
        <div className="section-heading">
          <p className="eyebrow">ZenEco Selection</p>
          <h2>Utvalgte boliger i Spania</h2>
          <p>
            Vi hjelper deg å finne din nye drømmebolig. Se gjennom våre utvalgte favoritter, eller utforsk hele boligkatalogen.
          </p>
        </div>
        <div className="property-grid home-property-grid">
          {properties.map((property, index) => (
            <PropertyCard key={property.id || property.ref || index} property={property} priority={index < 3} />
          ))}
        </div>
        <div className="center-action">
          <Link className="contact-button" href="/eiendommer">
            Se alle boliger til salgs <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <section className="section proof-section" id="omradevalg">
        <div className="section-heading">
          <p className="eyebrow">Område før bolig</p>
          <h2>Finn området som passer deg</h2>
          <p>
            En flott bolig i feil område blir sjelden et godt kjøp. Start med hverdagen du ønsker, så reduserer vi
            markedet før du bruker tid på enkeltprosjekter.
          </p>
        </div>
        <div className="area-choice-grid editorial-area-grid">
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

      <section className="section proof-section home-process">
        <div className="section-heading">
          <h2>Vi gjør boligjakten enklere</h2>
          <p>Det spanske boligmarkedet kan være uoversiktlig, og samme bolig kan ligge ute flere steder. Hos Zen Eco Homes begynner vi med behovene dine, budsjettet og hvor du ønsker å bo.</p>
        </div>
        <div className="proof-grid home-process-grid">
          {[
            { title: "Område og behov først", text: "Finn steder som passer hverdagen din.", label: "Utforsk områder", href: "/omrader" },
            { title: "Riktige boliger", text: "Se alternativer som passer budsjett og behov.", label: "Se boliger", href: "/eiendommer" },
            { title: "Norsk oppfølging hele veien", text: "Få hjelp gjennom de viktigste stegene i prosessen.", label: "Slik hjelper vi deg", href: "/slik-hjelper-vi-deg" },
            { title: "Etter kjøpet", text: "Vi hjelper deg også med det praktiske rundt boligen når du ikke er i Spania.", label: "Les mer", href: CARE_URL },
          ].map((card, index) => (
            <article key={card.href}>
              <strong aria-hidden="true">0{index + 1}</strong>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
              {card.href === CARE_URL ? (
                <a className="text-button" href={card.href} target="_blank" rel="noopener noreferrer">{card.label} <ArrowRight size={16} /></a>
              ) : (
                <Link className="text-button" href={card.href}>{card.label} <ArrowRight size={16} /></Link>
              )}
            </article>
          ))}
        </div>
        <div className="center-action"><Link className="contact-button" href="/booking">Kontakt oss <ArrowRight size={18} /></Link></div>
      </section>

      <section className="section proof-section" aria-labelledby="opplev-costa-blanca-title">
        <div className="section-heading">
          <p className="eyebrow">Livet rundt boligen</p>
          <h2 id="opplev-costa-blanca-title">Bli kjent med Costa Blanca før og etter boligkjøpet</h2>
          <p>
            Områdevalg handler også om hverdagen utenfor boligen. Costa Blanca Tours samler kuraterte opplevelser,
            mat, kultur og dagsturer som gjør det enklere å forstå områdene du vurderer – og gir deg mer å oppleve
            når boligen er på plass.
          </p>
        </div>
        <div className="proof-grid home-process-grid">
          <article>
            <strong aria-hidden="true">01</strong>
            <h3>Opplev området før du bestemmer deg</h3>
            <p>Bruk en dag på steder, landskap og lokalmiljø som kan påvirke hvor du faktisk ønsker å bo.</p>
            <a className="text-button" href="https://www.costablancatours.pro/?utm_source=zenecohomes&utm_medium=referral&utm_campaign=buyer-owner-journey" target="_blank" rel="noopener noreferrer">
              Utforsk Costa Blanca Tours <ArrowRight size={16} />
            </a>
          </article>
          <article>
            <strong aria-hidden="true">02</strong>
            <h3>Mat, kultur og natur</h3>
            <p>Oppdag mer enn boligannonser: lokale steder, småbyer, matopplevelser og utflukter på Costa Blanca.</p>
            <a className="text-button" href="https://www.costablancatours.pro/?utm_source=zenecohomes&utm_medium=referral&utm_campaign=buyer-owner-journey" target="_blank" rel="noopener noreferrer">
              Se opplevelser <ArrowRight size={16} />
            </a>
          </article>
          <article>
            <strong aria-hidden="true">03</strong>
            <h3>Når du allerede eier bolig</h3>
            <p>Kombiner oppholdet med nye opplevelser og bruk Care når du trenger praktisk oppfølging mellom besøkene.</p>
            <a className="text-button" href="https://www.costablancatours.pro/?utm_source=zenecohomes&utm_medium=referral&utm_campaign=buyer-owner-journey" target="_blank" rel="noopener noreferrer">
              Finn neste utflukt <ArrowRight size={16} />
            </a>
          </article>
        </div>
      </section>

      <HomeAdvisors />

      <section className="contact-section" id="kontakt">
        <div>
          <p className="eyebrow">Klar for neste steg?</p>
          <h2>Fortell oss hvordan du ønsker å bo</h2>
          <p>Vi starter med område, bruk og budsjett og hjelper deg videre til de riktige moderne boligene.</p>
        </div>
        <Link className="contact-button" href="/booking">Book en uforpliktende boligprat <ArrowRight size={18} /></Link>
      </section>

      <Footer showCta={false} />
    </main>
  );
}
