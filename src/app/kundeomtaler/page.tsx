import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { Testimonials } from "@/components/Testimonials";
import { homeLanguageLinks } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Kundeomtaler | Erfaringer med Zen Eco Homes i Spania",
  description: "Les kundeomtaler og erfaringer med Zen Eco Homes. Se hvordan boligkjøpere opplever rådgivning, områdevalg, boligsøk, visning og oppfølging i Spania.",
  alternates: { canonical: "/kundeomtaler" },
};

export default function ReviewsPage() {
  return <main><SiteHeader languageLinks={homeLanguageLinks("no")} />
    <section className="page-hero compact-hero"><p className="eyebrow">Kundeomtaler</p><h1>Erfaringer fra boligkjøpere</h1><p>Troverdighet bygges best gjennom faktiske kundereiser. Her samler vi omtaler og etter hvert mer detaljerte kundecaser.</p></section>
    <section className="section"><Testimonials /></section>
    <section className="section split"><div><p className="eyebrow">Slik jobber vi</p><h2>Se hva som ligger bak oppfølgingen</h2><p>Kundeomtaler gir én del av bildet. På Om oss og Kjøpsprosessen kan du se hvem du jobber med og hvordan vi følger kjøpsreisen.</p><div className="hero-actions"><Link className="text-button" href="/om-oss">Om Zen Eco Homes</Link><Link className="text-button" href="/kjopsprosessen">Se kjøpsprosessen</Link></div></div><div><p className="eyebrow">Neste steg</p><h2>Vil du vite hvordan vi kan hjelpe deg?</h2><p>Start med en kort, uforpliktende behovsavklaring.</p><Link className="contact-button" href="/booking">Få rådgivning</Link></div></section>
    <Footer />
  </main>;
}
