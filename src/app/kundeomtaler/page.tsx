import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { Testimonials } from "@/components/Testimonials";
import { homeLanguageLinks } from "@/lib/i18n";

export const metadata: Metadata = {
  title: { absolute: "Kundeomtaler | Erfaringer med Zen Eco Homes i Spania" },
  description:
    "Les kundeomtaler og erfaringer fra boligkjøpere Freddy Bremseth har hjulpet med rådgivning, områdevalg, visninger og boligkjøp i Spania på en trygg måte.",
  alternates: { canonical: "/kundeomtaler" },
};

export default function ReviewsPage() {
  return (
    <main>
      <SiteHeader languageLinks={homeLanguageLinks("no")} />
      <section className="page-hero compact-hero">
        <p className="eyebrow">Kundeomtaler</p>
        <h1>Erfaringer fra mennesker som har fått hjelp med bolig i Spania</h1>
        <p>
          Tillit bygges best gjennom konkrete erfaringer. Her samler vi tilbakemeldinger fra kunder og
          offentlig publiserte anmeldelser med tydelig kilde og kontekst.
        </p>
      </section>

      <Testimonials heading="Hva kundene sier om rådgivningen" />

      <section className="section proof-section">
        <div className="section-heading">
          <p className="eyebrow">Mer enn stjerner</p>
          <h2>Vi bygger siden videre med kundehistorier</h2>
          <p>
            Kundeomtaler blir mest nyttige når de forteller hva kunden faktisk skulle løse: områdevalg,
            usikkerhet før kjøp, visning, finansiering eller valget mellom flere boliger. Derfor skal denne siden
            også kunne utvides med lengre kundecaser og intervjuer når vi har samtykke til publisering.
          </p>
        </div>
        <div className="center-action">
          <Link className="contact-button" href="/booking">Snakk med oss <ArrowRight size={18} /></Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
