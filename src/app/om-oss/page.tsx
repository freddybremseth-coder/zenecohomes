import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { homeLanguageLinks } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Om Zen Eco Homes | Norsk eiendomsrådgivning i Spania",
  description: "Bli kjent med Zen Eco Homes og hvordan vi hjelper boligkjøpere med områdevalg, shortlist, visning, kjøpsprosess, overtakelse og oppfølging i Spania.",
  alternates: { canonical: "/om-oss" },
};

export default function AboutPage() {
  return <main className="about-page"><SiteHeader languageLinks={homeLanguageLinks("no")} />
    <section className="page-hero compact-hero"><p className="eyebrow">Om Zen Eco Homes</p><h1>Rådgivning først. Boligen etterpå.</h1><p>Vi hjelper kjøpere å sortere område, budsjett, boligtype og prosess før de binder seg til en konkret eiendom.</p></section>
    <section className="section about-intro">
      <div>
        <p className="eyebrow">Arbeidsmåten</p>
        <h2>Vi starter med beslutningen – ikke med annonsen</h2>
        <p>
          Behov, område og budsjett avklares før vi lager shortlist. Deretter følger boligsøk, visning, relevante kontroller, notar, overtakelse og oppfølging etter kjøpet.
        </p>
        <Link className="text-button" href="/kjopsprosessen">Se hele kjøpsprosessen <ArrowRight size={16}/></Link>
      </div>
      <aside className="about-process-panel">
        <p className="eyebrow">Fra første samtale</p>
        <div><span>01</span><p>Behov og totalbudsjett</p></div>
        <div><span>02</span><p>Område og boligtype</p></div>
        <div><span>03</span><p>Shortlist og visning</p></div>
        <div><span>04</span><p>Kjøp, overtakelse og oppfølging</p></div>
      </aside>
    </section>

    <section className="section about-team-section">
      <div className="section-heading">
        <p className="eyebrow">Menneskene bak</p>
        <h2>Rådgivning, kunder og digital synlighet</h2>
        <p>Zen Eco Homes kombinerer lokal eiendomsrådgivning med innhold og systemer som skal gjøre kjøpsreisen enklere å forstå.</p>
      </div>
      <div className="about-team-grid">
        <article>
          <span>Eiendomsrådgivning</span>
          <h3>Freddy Bremseth</h3>
          <p>Eiendomsrådgiver med base på Costa Blanca og fokus på nordmenn som kjøper bolig i Spania.</p>
          <Link className="text-button" href="/om-oss/freddy">Les om Freddy <ArrowRight size={16}/></Link>
        </article>
        <article>
          <span>Kunder · Markedsføring · SEO</span>
          <h3>Andrea Thorsnes Karlsen</h3>
          <p>Jobber med kunder, markedsføring, SEO og utvikling av Zen Eco Homes og Pinoso EcoLife.</p>
          <Link className="text-button" href="/om-oss/andrea">Les om Andrea <ArrowRight size={16}/></Link>
        </article>
      </div>
    </section>
    <Footer />
  </main>;
}
