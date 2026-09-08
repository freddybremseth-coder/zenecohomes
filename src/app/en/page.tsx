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
  title: "Modern New Build Property in Spain | Costa Blanca Advisor",
  description:
    "Modern new builds, villas, apartments and plots on the Costa Blanca with buyer-focused English-speaking advice. Compare areas, projects, costs and the buying process before you reserve.",
  alternates: { canonical: "/en", languages: homeHreflang() },
  openGraph: {
    title: "Modern Property in Spain | Zen Eco Homes",
    description: "Modern new builds and buyer-focused property advice on the Costa Blanca.",
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
        <p className="eyebrow">Modern property on the Costa Blanca</p>
        <h1>Buy the right modern home in Spain</h1>
        <p>
          Zen Eco Homes primarily helps buyers compare modern new builds, villas, apartments and plots on the Costa Blanca.
          We put your needs first: area, project, price, costs, risks and the next step before you reserve. If a resale home
          clearly fits you better, we can still help you assess it rather than pushing the wrong new-build option.
        </p>
        <div className="hero-actions">
          <Link className="contact-button" href={BOOKING}>
            Book a property consultation <ArrowRight size={18} />
          </Link>
          <Link className="text-button light" href="/en/properties">
            Browse modern properties
          </Link>
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">How we help</p>
        <h2 style={{ fontFamily: '"Playfair Display", serif', color: "var(--dark)", marginTop: 0 }}>
          Decisions before listings
        </h2>
        <p style={{ color: "var(--muted)", maxWidth: 760, lineHeight: 1.7 }}>
          We help you narrow down the right area and project type before spending time on viewings. Our main focus is modern
          new build and contemporary property, with resale treated as a practical alternative only when it genuinely makes more sense.
        </p>
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
          Choose the area before the property
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
        <div style={{ marginTop: 22 }}>
          <Link className="text-button" href="/en/areas">Compare North, South, Costa Cálida and inland <ArrowRight size={15} /></Link>
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">Beyond the purchase</p>
        <h2 style={{ fontFamily: '"Playfair Display", serif', color: "var(--dark)", marginTop: 0 }}>
          Property, inland opportunities and aftercare
        </h2>
        <p style={{ color: "var(--muted)", maxWidth: 640, lineHeight: 1.7 }}>
          Zen Eco Homes focuses on modern property purchases, but the journey can also include land, inland projects and practical
          aftercare once you own the home.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 18, marginTop: 18 }}>
          <Link
            href="/en/inland"
            style={{ display: "block", background: "white", border: "1px solid var(--line)", padding: 22, boxShadow: "0 8px 24px rgba(22,34,43,0.05)" }}
          >
            <strong style={{ color: "var(--dark)", fontSize: "1.15rem" }}>Inland</strong>
            <p style={{ color: "var(--muted)", lineHeight: 1.6, margin: "10px 0 0" }}>
              Larger plots, modern villas and new-build opportunities around Pinoso, Aspe and Novelda. Water, power, access and planning
              status should be understood before committing.
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
              care.zenecohomes.com you have a trusted local partner looking after your property between stays.
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
          We will get back to you personally and help you compare the area, project and next step — with no obligation.
        </p>
        <div style={{ maxWidth: 760, marginTop: 18 }}>
          <ContactForm locale="en" variant="compact" />
        </div>
      </section>

      <Footer locale="en" />
    </main>
  );
}