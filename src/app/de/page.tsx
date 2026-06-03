import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { seoLandingPagesDE } from "@/lib/seoLandingPages.de";
import { localSeoLandingPagesDE } from "@/lib/localSeoLandingPages.de";
import { homeHreflang, homeLanguageLinks, ogLocale } from "@/lib/i18n";

const BASE = "https://www.zenecohomes.com";
const BOOKING = "https://appointment.chatgenius.pro/zeneco";

export const metadata: Metadata = {
  title: "Immobilie in Spanien kaufen | Zen Eco Homes",
  description:
    "Neubau, Villen und Grundstücke an der Costa Blanca – mit unabhängiger Beratung auf Deutsch. Region, Budget, Kaufprozess, NIE und Anwalt sicher koordiniert.",
  alternates: { canonical: "/de", languages: homeHreflang() },
  openGraph: {
    title: "Immobilie in Spanien kaufen | Zen Eco Homes",
    description: "Neubau und Immobilien an der Costa Blanca mit deutschsprachiger Beratung.",
    url: `${BASE}/de`,
    locale: ogLocale.de,
    type: "website",
  },
};

export default function GermanHome() {
  return (
    <main lang="de">
      <SiteHeader locale="de" languageLinks={homeLanguageLinks("de")} />

      <section className="page-hero compact-hero image-hero">
        <p className="eyebrow">Immobilien an der Costa Blanca</p>
        <h1>Sicher eine Immobilie in Spanien kaufen</h1>
        <p>
          Zen Eco Homes begleitet internationale Käufer beim Kauf von Neubauten, Villen und Grundstücken an
          der Costa Blanca – unabhängig, auf Deutsch, von der Region bis zur Schlüsselübergabe.
        </p>
        <div className="hero-actions">
          <Link className="contact-button" href={BOOKING}>
            Beratungsgespräch buchen <ArrowRight size={18} />
          </Link>
          <Link className="text-button light" href="/eiendommer">
            Immobilien ansehen
          </Link>
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">Wobei wir helfen</p>
        <h2 style={{ fontFamily: '"Playfair Display", serif', color: "var(--dark)", marginTop: 0 }}>
          Themen für Käufer in Spanien
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 18, marginTop: 18 }}>
          {seoLandingPagesDE.map((page) => (
            <Link
              key={page.slug}
              href={`/de/${page.slug}`}
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
                Mehr erfahren <ArrowRight size={15} />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">Regionen</p>
        <h2 style={{ fontFamily: '"Playfair Display", serif', color: "var(--dark)", marginTop: 0 }}>
          Beliebte Lagen an der Costa Blanca
        </h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 16 }}>
          {localSeoLandingPagesDE.map((page) => (
            <Link
              key={page.slug}
              href={`/de/${page.slug}`}
              style={{ border: "1px solid var(--line)", padding: "10px 16px", color: "var(--dark)", fontWeight: 700, background: "white" }}
            >
              {page.title}
            </Link>
          ))}
        </div>
      </section>

      <section className="section" id="kontakt">
        <p className="eyebrow">Kontakt</p>
        <h2 style={{ fontFamily: '"Playfair Display", serif', color: "var(--dark)", marginTop: 0 }}>
          Erzählen Sie uns, wonach Sie suchen
        </h2>
        <p style={{ color: "var(--muted)", maxWidth: 620, lineHeight: 1.7 }}>
          Wir melden uns persönlich – unabhängig, auf Deutsch, und ohne Verpflichtung.
        </p>
        <div style={{ maxWidth: 760, marginTop: 18 }}>
          <ContactForm locale="de" />
        </div>
      </section>

      <Footer />
    </main>
  );
}
