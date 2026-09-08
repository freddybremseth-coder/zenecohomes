import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { homeLanguageLinks } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Talk to Freddy | Property advice in Spain",
  description:
    "Request a short conversation with Freddy about area, budget, modern new builds and the buying process on the Costa Blanca.",
  alternates: { canonical: "/en/booking" },
};

export default function EnglishBookingPage() {
  return (
    <main lang="en">
      <SiteHeader locale="en" languageLinks={homeLanguageLinks("en")} />
      <section className="page-hero compact-hero image-hero">
        <p className="eyebrow">15-minute property conversation</p>
        <h1>Tell Freddy what you are looking for</h1>
        <p>
          Start with area, intended use and budget. We will use the conversation to narrow the search before you spend time on individual properties.
        </p>
      </section>

      <section className="section split">
        <div>
          <p className="eyebrow">Useful before the call</p>
          <h2>A short conversation should create clarity</h2>
          <div className="check-list">
            {[
              "How you plan to use the property",
              "Preferred areas or the kind of Spain you want",
              "Budget and approximate timing",
              "Modern new build, villa, apartment or plot",
              "Questions about visits, reservation and the buying process",
            ].map((item) => (
              <span key={item}><CheckCircle2 size={18} /> {item}</span>
            ))}
          </div>
          <p>
            You do not need to know the exact town yet. If the area is unclear, that is often the best place to start.
          </p>
          <Link className="text-button" href="/en/areas">Compare areas first <ArrowRight size={16} /></Link>
        </div>
        <div>
          <ContactForm locale="en" variant="compact" source="zenecohomes-en-booking" requestType="booking_request" />
        </div>
      </section>
      <Footer locale="en" />
    </main>
  );
}
