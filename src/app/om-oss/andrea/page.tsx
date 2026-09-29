import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
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
    <main className="team-profile-page">
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

      <section className="section team-profile-intro">
        <div>
          <p className="eyebrow">Kundereisen</p>
          <h2>Fra spørsmål til et tydelig neste steg</h2>
          <p>
            Arbeidet omfatter innhold, søkesynlighet, kundeinformasjon og oppfølging, slik at boligkjøpere lettere
            kan forstå områder, alternativer og prosessen før de bruker tid på konkrete visninger.
          </p>
          <p>
            Målet er at nettsiden, guidene og kundedialogen skal henge sammen. Informasjonen kunden finner tidlig
            i prosessen skal gjøre den personlige rådgivningen mer konkret senere.
          </p>
        </div>
        <aside className="team-profile-focus">
          <p className="eyebrow">Arbeidsområder</p>
          <span><CheckCircle2 size={18}/> Kundeoppfølging</span>
          <span><CheckCircle2 size={18}/> Markedsføring og innhold</span>
          <span><CheckCircle2 size={18}/> SEO og søkesynlighet</span>
          <span><CheckCircle2 size={18}/> Tydeligere digital kundereise</span>
        </aside>
      </section>

      <section className="section team-profile-links">
        <div>
          <p className="eyebrow">Zen Eco Homes</p>
          <h2>Innholdet skal gjøre boligvalget enklere</h2>
          <p>Områder, guider og kjøpsinformasjon er koblet sammen slik at kunden kan gå fra research til et konkret neste steg.</p>
        </div>
        <nav>
          <Link href="/guide">Se alle guider <ArrowRight size={16}/></Link>
          <Link href="/magasin">Les Magasin <ArrowRight size={16}/></Link>
          <Link href="/omrader">Sammenlign områder <ArrowRight size={16}/></Link>
          <Link href="/kjopsprosessen">Se kjøpsprosessen <ArrowRight size={16}/></Link>
        </nav>
      </section>

      <Footer />
    </main>
  );
}
