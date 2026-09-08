import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { seoLandingPagesDE } from "@/lib/seoLandingPages.de";
import { localSeoLandingPagesDE } from "@/lib/localSeoLandingPages.de";
import { CARE_URL, homeHreflang, homeLanguageLinks, ogLocale } from "@/lib/i18n";

const BASE = "https://www.zenecohomes.com";
const BOOKING = "/de/termin";

export const metadata: Metadata = {
  title: "Moderner Neubau in Spanien | Costa Blanca Beratung",
  description:
    "Moderne Neubauten, Villen, Apartments und Grundstücke an der Costa Blanca mit käuferorientierter Beratung. Regionen, Projekte, Kosten und Kaufprozess vor der Reservierung vergleichen.",
  alternates: { canonical: "/de", languages: homeHreflang() },
  openGraph: {
    title: "Moderne Immobilien in Spanien | Zen Eco Homes",
    description: "Moderne Neubauten und käuferorientierte Immobilienberatung an der Costa Blanca.",
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
        <p className="eyebrow">Moderne Immobilien an der Costa Blanca</p>
        <h1>Die richtige moderne Immobilie in Spanien kaufen</h1>
        <p>
          Zen Eco Homes konzentriert sich vor allem auf moderne Neubauten, Villen, Apartments und Grundstücke an der
          Costa Blanca. Im Mittelpunkt stehen Ihre Bedürfnisse: Region, Projekt, Preis, Gesamtkosten, Risiken und der
          nächste Schritt vor einer Reservierung. Wenn eine Bestandsimmobilie klar besser passt, helfen wir trotzdem
          bei der Bewertung, statt das falsche Neubauprojekt zu empfehlen. Diese Website ist auf Deutsch verfügbar;
          persönliche Beratung bieten wir auf Englisch, Norwegisch und Spanisch.
        </p>
        <div className="hero-actions">
          <Link className="contact-button" href="/de/regionen">
            Region auswählen <ArrowRight size={18} />
          </Link>
          <Link className="text-button light" href="/de/immobilien">
            Moderne Immobilien ansehen
          </Link>
          <Link className="text-button light" href={BOOKING}>
            Mit Freddy sprechen
          </Link>
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">Wobei wir helfen</p>
        <h2 style={{ fontFamily: "var(--display)", color: "var(--dark)", marginTop: 0 }}>
          Entscheidungen vor Inseraten
        </h2>
        <p style={{ color: "var(--muted)", maxWidth: 760, lineHeight: 1.7 }}>
          Wir helfen Ihnen, Region und Projekttyp einzugrenzen, bevor Sie Zeit in Besichtigungen investieren. Unser
          Schwerpunkt liegt auf modernem Neubau und zeitgemäßen Immobilien; Bestand ist eine praktische Alternative,
          wenn er objektiv besser zu Ihren Anforderungen passt.
        </p>
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
        <h2 style={{ fontFamily: "var(--display)", color: "var(--dark)", marginTop: 0 }}>
          Erst die Region, dann die Immobilie
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
        <div style={{ marginTop: 22 }}>
          <Link className="text-button" href="/de/regionen">Nord, Süd, Costa Cálida und Hinterland vergleichen <ArrowRight size={15} /></Link>
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">Nach dem Kauf</p>
        <h2 style={{ fontFamily: "var(--display)", color: "var(--dark)", marginTop: 0 }}>
          Immobilie, Hinterland und Betreuung
        </h2>
        <p style={{ color: "var(--muted)", maxWidth: 640, lineHeight: 1.7 }}>
          Zen Eco Homes konzentriert sich auf moderne Immobilienkäufe. Die Reise kann aber auch Grundstücke,
          Projekte im Hinterland und praktische Betreuung nach dem Kauf umfassen.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 18, marginTop: 18 }}>
          <Link
            href="/de/inland"
            style={{ display: "block", background: "white", border: "1px solid var(--line)", padding: 22, boxShadow: "0 8px 24px rgba(22,34,43,0.05)" }}
          >
            <strong style={{ color: "var(--dark)", fontSize: "1.15rem" }}>Inland</strong>
            <p style={{ color: "var(--muted)", lineHeight: 1.6, margin: "10px 0 0" }}>
              Größere Grundstücke, moderne Villen und Neubauoptionen rund um Pinoso, Aspe und Novelda. Wasser,
              Strom, Zufahrt und Planungsstatus sollten vor einer Bindung geklärt werden.
            </p>
            <span style={{ color: "var(--gold)", fontWeight: 800, display: "inline-flex", alignItems: "center", gap: 6, marginTop: 12 }}>
              Hinterland entdecken <ArrowRight size={15} />
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
              Schlüsselverwaltung, Kontrolle, Wartung und Vorbereitung vor der Ankunft. Mit care.zenecohomes.com
              haben Sie einen verlässlichen Partner vor Ort, der sich zwischen den Aufenthalten um Ihre Immobilie kümmert.
            </p>
            <span style={{ color: "var(--gold)", fontWeight: 800, display: "inline-flex", alignItems: "center", gap: 6, marginTop: 12 }}>
              Keyholding ansehen <ArrowRight size={15} />
            </span>
          </a>
        </div>
      </section>

      <section className="section" id="kontakt">
        <p className="eyebrow">Kontakt</p>
        <h2 style={{ fontFamily: "var(--display)", color: "var(--dark)", marginTop: 0 }}>
          Erzählen Sie uns, wonach Sie suchen
        </h2>
        <p style={{ color: "var(--muted)", maxWidth: 620, lineHeight: 1.7 }}>
          Wir melden uns persönlich und helfen Ihnen, Region, Projekt und nächsten Schritt zu vergleichen – ohne Verpflichtung.
          Die persönliche Beratung erfolgt auf Englisch, Norwegisch oder Spanisch.
        </p>
        <div style={{ maxWidth: 760, marginTop: 18 }}>
          <ContactForm locale="de" variant="compact" />
        </div>
      </section>

      <Footer locale="de" />
    </main>
  );
}
