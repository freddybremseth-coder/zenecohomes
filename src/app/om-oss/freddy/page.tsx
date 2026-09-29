import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { homeLanguageLinks } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Freddy Bremseth | Norsk rådgiver for bolig i Spania",
  description: "Møt Freddy Bremseth, norsk eiendomsrådgiver på Costa Blanca. Les om områdekunnskap, boligsøk, visning, kjøpsprosess og boligkjøp i Spania nå.",
  alternates: { canonical: "/om-oss/freddy" },
};

export default function FreddyPage() {
  return <main><SiteHeader languageLinks={homeLanguageLinks("no")} />
    <section className="page-hero compact-hero"><p className="eyebrow">Freddy Bremseth · Zen Eco Homes</p><h1>Norsk eiendomsrådgiver på Costa Blanca</h1><p>Freddy jobber med kjøpere som vil forstå området, alternativene og kjøpsprosessen før de reserverer bolig i Spania.</p><div className="hero-actions"><Link className="contact-button" href="/booking">Book en prat <ArrowRight size={17}/></Link><Link className="text-button light" href="/guide/kjope-bolig-i-spania">Les kjøperguiden</Link></div></section>
    <section className="section split"><div><h2>Områdekunnskap og kjøperperspektiv</h2><p>Arbeidet omfatter Costa Blanca Nord, Costa Blanca Sør, Costa Cálida og utvalgte innlandsområder. Målet er å redusere et stort marked til alternativene som faktisk passer kundens bruk og budsjett.</p></div><div><h2>Fra første samtale til overtakelse</h2><p>Zen Eco Homes følger kjøpsreisen med shortlist, visninger, koordinering, informasjon og neste steg, mens juridiske og tekniske kontroller gjøres av relevante fagpersoner.</p></div></section><Footer />
  </main>;
}
