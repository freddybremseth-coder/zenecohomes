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
    <Testimonials />
    <section className="contact-section"><div><h2>Vil du vite hvordan vi kan hjelpe deg?</h2><p>Start med en kort, uforpliktende behovsavklaring.</p></div><Link className="contact-button" href="/booking">Få rådgivning</Link></section>
    <Footer />
  </main>;
}
