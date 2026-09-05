import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { seoLandingPagesEN } from "@/lib/seoLandingPages.en";
import { localSeoLandingPagesEN } from "@/lib/localSeoLandingPages.en";
import { CARE_URL, homeHreflang, homeLanguageLinks, ogLocale } from "@/lib/i18n";

const BASE = "https://www.zenecohomes.com";
const BOOKING = "/en#kontakt";

export const metadata: Metadata = {
  title: "Buy Property in Spain | Zen Eco Homes",
  description:
    "New builds, villas and plots on the Costa Blanca with independent, English-speaking advice. Area, budget, buying process, NIE and lawyer safely coordinated.",
  alternates: { canonical: "/en", languages: homeHreflang() },
  openGraph: {
    title: "Buy Property in Spain | Zen Eco Homes",
    description: "New builds and property on the Costa Blanca with English-speaking advice.",
    url: `${BASE}/en`,
    locale: ogLocale.en,
    type: "website",
  },
};

export default function EnglishHome() {
  return (
    <main lang="en">
      <SiteHeader locale="en" languageLinks={homeLanguageLinks("en")} />

      <section className="page-hero compact-hero image-hero">
        <p className="eyebrow">Property on the Costa Blanca</p>
        <h1>Buy property in Spain, safely</h1>
        <p>
          Zen Eco Homes helps international buyers purchase new builds, villas and plots on the Costa Blanca –
          independent, in English, from choosing the area to the keys in your hand.
        </p>
        <div className="hero-actions">
          <Link className="contact-button" href={BOOKING}>
            Book a consultation <ArrowRight size={18} />
          </Link>
          <Link className="text-button light" href="/en/properties">
            Browse properties
          </Link>
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">How we help</p>
        <h2 style={{ fontFamily: '"Playfair Display", serif', color: "var(--dark)", marginTop: 0 }}>
          Topics for buyers in Spain
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 18, marginTop: 18 }}>
          {seoLandingPagesEN.map((page) => (
            <Link
              key={page.slug}
              href={`/en/${page.slug}`}
              style={{
                display: "block",
                background: "white",
                border: "1px solid var(--line)",
                padding: 22,
                boxShadow: "0 8px 24px rgba(22,34,43,0.05)",
              }}
            >
              <strong style={{ color: "var(--dark)", fontSize: "1.15rem" }}>{page.title}</strong>
              <p style={{ color: "var(--muted)", lineHeight: 1.6, margin: "10px 0 0" }}>{page.seoDescription}</p>
              <span style={{ color: "var(--gold)", fontWeight: 800, display: "inline-flex", alignItems: "center", gap: 6, marginTop: 12 }}>
                Learn more <ArrowRight size={15} />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">Areas</p>
        <h2 style={{ fontFamily: '"Playfair Display", serif', color: "var(--dark)", marginTop: 0 }}>
          Popular locations on the Costa Blanca
        </h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 16 }}>
          {localSeoLandingPagesEN.map((page) => (
            <Link
              key={page.slug}
              href={`/en/${page.slug}`}
              style={{ border: "1px solid var(--line)", padding: "10px 16px", color: "var(--dark)", fontWeight: 700, background: "white" }}
            >
              {page.title}
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">New services</p>
        <h2 style={{ fontFamily: '"Playfair Display", serif', color: "var(--dark)", marginTop: 0 }}>
          More than the purchase – we stay with you all the way
        </h2>
        <p style={{ color: "var(--muted)", maxWidth: 640, lineHeight: 1.7 }}>
          Zen Eco Homes is about more than the purchase itself. We help you find the dream in the interior, and we
          look after your home while you are away – two new services that make owning in Spain easier and safer.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 18, marginTop: 18 }}>
          <Link
            href="/en/inland"
            style={{ display: "block", background: "white", border: "1px solid var(--line)", padding: 22, boxShadow: "0 8px 24px rgba(22,34,43,0.05)" }}
          >
            <strong style={{ color: "var(--dark)", fontSize: "1.15rem" }}>Inland</strong>
            <p style={{ color: "var(--muted)", lineHeight: 1.6, margin: "10px 0 0" }}>
              Larger plots, finca properties and new builds around Pinoso, Aspe and Novelda – often at a lower price
              per square metre than the coast. We check water, power, access and zoning before you commit.
            </p>
            <span style={{ color: "var(--gold)", fontWeight: 800, display: "inline-flex", alignItems: "center", gap: 6, marginTop: 12 }}>
              Explore the interior <ArrowRight size={15} />
            </span>
          </Link>
          <a
            href={CARE_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "block", background: "white", border: "1px solid var(--line)", padding: 22, boxShadow: "0 8px 24px rgba(22,34,43,0.05)" }}
          >
            <strong style={{ color: "var(--dark)", fontSize: "1.15rem" }}>Keyholding</strong>
            <p style={{ color: "var(--muted)", lineHeight: 1.6, margin: "10px 0 0" }}>
              Key holding, inspections, maintenance and getting the home ready before you arrive. With
              care.zenecohomes.com you have a trusted local partner looking after your property between every stay.
            </p>
            <span style={{ color: "var(--gold)", fontWeight: 800, display: "inline-flex", alignItems: "center", gap: 6, marginTop: 12 }}>
              See keyholding <ArrowRight size={15} />
            </span>
          </a>
        </div>
      </section>

      <section className="section" id="kontakt">
        <p className="eyebrow">Contact</p>
        <h2 style={{ fontFamily: '"Playfair Display", serif', color: "var(--dark)", marginTop: 0 }}>
          Tell us what you are looking for
        </h2>
        <p style={{ color: "var(--muted)", maxWidth: 620, lineHeight: 1.7 }}>
          We will get back to you personally – independent, in English, with no obligation.
        </p>
        <div style={{ maxWidth: 760, marginTop: 18 }}>
          <ContactForm locale="en" variant="compact" />
        </div>
      </section>

      <Footer />
    </main>
  );
}
