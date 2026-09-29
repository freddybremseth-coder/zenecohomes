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
  return <main><SiteHeader languageLinks={homeLanguageLinks("no")} />
    <section className="page-hero compact-hero"><p className="eyebrow">Om Zen Eco Homes</p><h1>Rådgivning først. Boligen etterpå.</h1><p>Vi hjelper kjøpere å sortere område, budsjett, boligtype og prosess før de binder seg til en konkret eiendom.</p></section>
    <section className="section proof-section"><div className="proof-grid about-trust-grid">
      <article><h2>Freddy Bremseth</h2><p>Eiendomsrådgiver med base på Costa Blanca og fokus på nordmenn som kjøper bolig i Spania.</p><Link className="text-button" href="/om-oss/freddy">Les om Freddy <ArrowRight size={16}/></Link></article>
      <article><h2>Andrea Thorsnes Karlsen</h2><p>Jobber med kunder, markedsføring, SEO og utvikling av Zen Eco Homes og Pinoso EcoLife.</p><Link className="text-button" href="/om-oss/andrea">Les om Andrea <ArrowRight size={16}/></Link></article>
      <article><h2>Slik jobber vi</h2><p>Behovskartlegging, områdevalg, boligsøk, visning, juridiske kontroller, notar og oppfølging etter kjøpet.</p><Link className="text-button" href="/kjopsprosessen">Se kjøpsprosessen <ArrowRight size={16}/></Link></article><article><h2>Kundeerfaringer</h2><p>Les faktiske tilbakemeldinger fra mennesker som har fått rådgivning og hjelp i kjøpsreisen.</p><Link className="text-button" href="/kundeomtaler">Se kundeomtaler <ArrowRight size={16}/></Link></article>
    </div></section><Footer />
  </main>;
}
