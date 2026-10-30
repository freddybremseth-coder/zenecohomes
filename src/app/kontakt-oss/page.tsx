import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { Footer } from "@/components/Footer";
import { GeneralContactForm } from "@/components/GeneralContactForm";
import { homeLanguageLinks } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Kontakt oss | Zen Eco Homes",
  description: "Har du spørsmål om bolig i Spania? Send en melding til Zen Eco Homes, så tar vi kontakt så raskt vi kan.",
  alternates: { canonical: "/kontakt-oss" },
};

export default function ContactUsPage() {
  return (
    <main>
      <SiteHeader locale="no" languageLinks={homeLanguageLinks("no")} />
      <section className="page-hero compact-hero">
        <h1>Kontakt oss</h1>
        <p>Har du spørsmål om bolig i Spania, eller ønsker du å vite mer om hvordan vi kan hjelpe deg? Send oss en melding, så tar vi kontakt. Vi svarer så raskt vi kan.</p>
      </section>
      <section className="section" aria-label="Kontaktskjema">
        <div className="booking-form-panel" style={{ maxWidth: 680, margin: "0 auto" }}>
          <GeneralContactForm />
        </div>
      </section>
      <Footer showCta={false} />
    </main>
  );
}
