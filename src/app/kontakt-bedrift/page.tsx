import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { Footer } from "@/components/Footer";
import { BusinessContactForm } from "@/components/BusinessContactForm";
import { homeLanguageLinks } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Kontakt bedrift | Zen Eco Homes",
  description: "Spørsmål om firmabolig i Spania? Kontakt Zen Eco Homes for bedriftsrådgivning.",
  alternates: { canonical: "/kontakt-bedrift" },
};

export default function BusinessContactPage() {
  return (
    <main>
      <SiteHeader locale="no" languageLinks={homeLanguageLinks("no")} />
      <section className="page-hero compact-hero">
        <h1>Kontakt bedrift</h1>
        <p>Har du spørsmål om firmabolig i Spania, eller ønsker du å vite mer om hvordan vi kan hjelpe deg? Send oss en melding, så tar vi kontakt. Vi svarer så raskt vi kan.</p>
      </section>
      <section className="section" aria-label="Kontaktskjema for bedriftskunder">
        <div className="booking-form-panel" style={{ maxWidth: 680, margin: "0 auto" }}>
          <BusinessContactForm />
        </div>
      </section>
      <Footer showCta={false} />
    </main>
  );
}
