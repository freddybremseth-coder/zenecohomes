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
    <main>
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
      <section className="section split">
        <div>
          <p className="eyebrow">Kundereisen</p>
          <h2>Fra spørsmål til et tydelig neste steg</h2>
          <p>
            Arbeidet omfatter blant annet innhold, søkesynlighet, kundeinformasjon og oppfølging, slik at boligkjøpere
            lettere kan forstå områder, alternativer og prosessen før de bruker tid på konkrete visninger.
          </p>
        </div>
        <div>
          <p className="eyebrow">Zen Eco Homes</p>
          <h2>Et samarbeid mellom rådgivning og digital synlighet</h2>
          <p>
            Andrea jobber tett med Zen Eco Homes-teamet for at nettsiden, guidene og kundedialogen skal henge sammen
            og gi relevant informasjon gjennom hele kjøpsreisen.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
