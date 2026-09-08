import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { homeLanguageLinks } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Mit Freddy sprechen | Immobilienberatung Spanien",
  description:
    "Fragen Sie ein kurzes Gespräch zu Region, Budget, modernem Neubau und Kaufprozess an der Costa Blanca an.",
  alternates: { canonical: "/de/termin" },
};

export default function GermanBookingPage() {
  return (
    <main lang="de">
      <SiteHeader locale="de" languageLinks={homeLanguageLinks("de")} />
      <section className="page-hero compact-hero image-hero">
        <p className="eyebrow">Kurzes Orientierungsgespräch</p>
        <h1>Erzählen Sie Freddy, wonach Sie suchen</h1>
        <p>
          Beginnen Sie mit Region, Nutzung und Budget. Ziel ist, die Suche zu strukturieren, bevor Sie Zeit mit einzelnen Immobilien verbringen.
        </p>
      </section>

      <section className="section split">
        <div>
          <p className="eyebrow">Hilfreich vor dem Gespräch</p>
          <h2>Ein kurzes Gespräch sollte Klarheit schaffen</h2>
          <div className="check-list">
            {[
              "Wie Sie die Immobilie nutzen möchten",
              "Welche Region oder welcher Lebensstil zu Ihnen passt",
              "Budget und ungefährer Zeithorizont",
              "Moderner Neubau, Villa, Apartment oder Grundstück",
              "Fragen zu Besichtigungen, Reservierung und Kaufprozess",
            ].map((item) => (
              <span key={item}><CheckCircle2 size={18} /> {item}</span>
            ))}
          </div>
          <p>
            Sie müssen den genauen Ort noch nicht kennen. Wenn die Region noch offen ist, beginnen wir genau dort.
          </p>
          <Link className="text-button" href="/de/regionen">Regionen zuerst vergleichen <ArrowRight size={16} /></Link>
        </div>
        <div>
          <ContactForm locale="de" variant="compact" source="zenecohomes-de-booking" requestType="booking_request" />
        </div>
      </section>
      <Footer locale="de" />
    </main>
  );
}
