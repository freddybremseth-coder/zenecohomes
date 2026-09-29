import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { homeLanguageLinks } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Andrea Thorsnes Karlsen | Zen Eco Homes og bolig i Spania",
  description: "Møt Andrea Thorsnes Karlsen i Zen Eco Homes. Hun jobber med kunder, markedsføring, SEO og utvikling av tydeligere informasjon for boligkjøpere i Spania.",
  alternates: { canonical: "/om-oss/andrea" },
};

export default function AndreaPage() {
  return (
    <main className="andrea-profile-page">
      <SiteHeader languageLinks={homeLanguageLinks("no")} />
      <section className="page-hero compact-hero">
        <p className="eyebrow">Andrea Thorsnes Karlsen · Zen Eco Homes</p>
        <h1>Kunder, markedsføring og bedre boligvalg</h1>
        <p>
          Andrea arbeider med kundeoppfølging, markedsføring, SEO og utvikling av Zen Eco Homes.
          Målet er at kunder skal finne riktig informasjon tidligere og få en enklere vei fra research til rådgivning.
        </p>
        <div className="hero-actions">
          <Link className="contact-button" href="/booking">Få rådgivning <ArrowRight size={17} /></Link>
          <Link className="text-button light" href="/guide">Se alle guider</Link>
        </div>
      </section>
      <section className="section andrea-profile-intro">
        <div>
          <p className="eyebrow">Kundereisen</p>
          <h2>Fra spørsmål til et tydelig neste steg</h2>
          <p>
            Arbeidet omfatter innhold, søkesynlighet, kundeinformasjon og oppfølging, slik at boligkjøpere
            lettere kan forstå områder, alternativer og prosessen før de bruker tid på konkrete visninger.
          </p>
          <p>
            Målet er at informasjonen kunden møter på nettsiden, i guidene og i dialogen skal henge sammen –
            slik at det blir enklere å vite hva som er relevant nå, og hva som bør gjøres videre.
          </p>
          <Link className="text-button" href="/kjopsprosessen">
            Se hvordan Zen Eco Homes jobber <ArrowRight size={16} />
          </Link>
        </div>
        <aside className="andrea-focus-panel">
          <p className="eyebrow">Fokusområder</p>
          <div><span>01</span><p>Kundeinformasjon og oppfølging</p></div>
          <div><span>02</span><p>Markedsføring og innhold</p></div>
          <div><span>03</span><p>SEO og søkesynlighet</p></div>
          <div><span>04</span><p>Sammenheng mellom nettside, guider og kundedialog</p></div>
        </aside>
      </section>

      <section className="section andrea-work-section">
        <div className="section-heading">
          <p className="eyebrow">Zen Eco Homes</p>
          <h2>Digital synlighet skal gjøre boligvalget enklere</h2>
          <p>
            God markedsføring handler ikke bare om å bli funnet. Den skal hjelpe kjøperen å forstå området,
            sammenligne alternativer og komme til en bedre forberedt samtale.
          </p>
        </div>
        <div className="andrea-work-grid">
          <article>
            <span>Innhold</span>
            <h3>Riktig informasjon på riktig sted</h3>
            <p>Guider, områdesider og kundeinformasjon bygges slik at viktige spørsmål blir besvart før visningen.</p>
            <Link className="text-button" href="/guide">Se guide-huben <ArrowRight size={16}/></Link>
          </article>
          <article>
            <span>Områder</span>
            <h3>Fra bred research til relevante valg</h3>
            <p>Områdeinnholdet skal gjøre det enklere å sammenligne kyst, by og innland før kunden velger konkrete boliger.</p>
            <Link className="text-button" href="/omrader">Sammenlign områder <ArrowRight size={16}/></Link>
          </article>
          <article>
            <span>Kundeoppfølging</span>
            <h3>En tydelig vei videre</h3>
            <p>Kundekommunikasjonen skal henge sammen med det kunden allerede har lest og vurdert, slik at neste steg blir konkret.</p>
            <Link className="text-button" href="/booking">Få rådgivning <ArrowRight size={16}/></Link>
          </article>
        </div>
      </section>
      <Footer />
    </main>
  );
}
