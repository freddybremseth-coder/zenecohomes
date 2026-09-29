import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { homeLanguageLinks } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Informasjonskapsler | Cookies og sporing hos Zen Eco Homes",
  description: "Les hvilke informasjonskapsler og sporingsteknologier Zen Eco Homes kan bruke, hvorfor de brukes, og hvordan du kan styre eller slette valgene dine.",
  alternates: { canonical: "/informasjonskapsler" },
};

export default function CookiesPage() {
  return <main><SiteHeader languageLinks={homeLanguageLinks("no")} />
    <section className="page-hero compact-hero"><p className="eyebrow">Cookies</p><h1>Informasjonskapsler og sporing</h1><p>Sist oppdatert 29. september 2026.</p></section>
    <section className="section article-body">
      <h2>Hva er informasjonskapsler?</h2><p>Informasjonskapsler er små datafiler som kan lagres i nettleseren for at et nettsted skal fungere, huske valg eller måle bruk.</p>
      <h2>Hva vi kan bruke dem til</h2><p>Nødvendige teknologier brukes for funksjonalitet og sikkerhet. Analyse- og måleverktøy kan brukes for å forstå trafikk og forbedre innhold. Booking- og kommunikasjonstjenester kan sette egne nødvendige teknologier når de lastes inn.</p>
      <h2>Dine valg</h2><p>Du kan styre eller slette informasjonskapsler i nettleseren. Der samtykke kreves, skal ikke valgfrie sporingskategorier aktiveres før du har valgt dem.</p>
      <h2>Kontakt</h2><p>Kontakt Zen Eco Homes dersom du har spørsmål om hvilke teknologier som brukes på nettstedet.</p>
    </section><Footer showCta={false}/>
  </main>;
}
