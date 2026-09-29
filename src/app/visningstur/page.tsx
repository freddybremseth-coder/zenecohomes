import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { homeLanguageLinks } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Visningstur til Spania | Planlegg med Zen Eco Homes",
  description: "Planlegg visningstur til Spania med Zen Eco Homes. Vi avklarer område, budsjett og shortlist før reisen og samler relevante boliger til visning.",
  alternates: { canonical: "/visningstur" },
};

export default function ViewingTripPage() {
  return <main>
    <SiteHeader languageLinks={homeLanguageLinks("no")} />
    <section className="page-hero compact-hero">
      <p className="eyebrow">Visningstur til Spania</p>
      <h1>En visningstur skal gi klarhet – ikke flere tilfeldige boliger</h1>
      <p>Vi bruker behov, område og budsjett til å lage en kort shortlist før du reiser. Da kan dagene i Spania brukes på reelle alternativer.</p>
      <div className="hero-actions"><Link className="contact-button" href="/booking">Planlegg visningstur <ArrowRight size={17}/></Link><Link className="text-button light" href="/eiendommer">Se boliger</Link></div>
    </section>
    <section className="section split">
      <div><p className="eyebrow">Før reisen</p><h2>Slik forbereder vi turen</h2><div className="check-list">
        <span><CheckCircle2 size={18}/> Behov, budsjett og finansiering avklares.</span>
        <span><CheckCircle2 size={18}/> Områder snevres inn før vi velger boliger.</span>
        <span><CheckCircle2 size={18}/> Tilgjengelighet og pris sjekkes så nær visningsdagen som mulig.</span>
        <span><CheckCircle2 size={18}/> Vi prioriterer få, relevante visninger fremfor flest mulig.</span>
      </div></div>
      <div><p className="eyebrow">På visningsdagen</p><h2>Bolig, område og praktiske forhold vurderes sammen</h2><p>En god visningsdag handler også om avstander, servicetilbud, solforhold, byggeaktivitet og hvordan stedet fungerer når ferien er over.</p><Link className="text-button" href="/guide/kjope-bolig-i-spania">Les kjøperguiden <ArrowRight size={16}/></Link></div>
    </section>
    <section className="contact-section"><div><p className="eyebrow">Neste steg</p><h2>Fortell når du planlegger å komme til Spania</h2><p>Vi starter med en kort samtale og bygger en realistisk plan derfra.</p></div><Link className="contact-button" href="/booking">Book rådgivning</Link></section>
    <Footer />
  </main>;
}
