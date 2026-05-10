import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { allArticles } from "@/lib/magazine";

export const metadata = {
  title: "Magasin | Guider om boligkjøp i Spania",
  description:
    "Praktiske guider for nordmenn som vurderer bolig, tomt, nybygg, finansiering og kjøpsprosess i Spania.",
  alternates: {
    canonical: "/magasin",
  },
  openGraph: {
    title: "Magasin | Zen Eco Homes",
    description:
      "Guider om områdevalg, tomtekjøp, finansiering, NIE og trygg kjøpsprosess i Spania.",
    url: "https://www.zenecohomes.com/magasin",
    type: "website",
  },
};

export default function MagazinePage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-hero compact-hero image-hero">
        <p className="eyebrow">Magasin</p>
        <h1>Guider for tryggere boligkjøp i Spania</h1>
        <p>
          Områder, tomter, finansiering, NIE, notar og kjøpsprosess forklart for nordmenn som vil ta gode
          beslutninger før de reserverer bolig.
        </p>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">SEO og rådgivning</p>
          <h2>Start med kunnskap før du velger bolig</h2>
          <p>
            Disse guidene er bygget for å svare på spørsmålene nordmenn faktisk søker etter når de vurderer
            bolig i Spania.
          </p>
        </div>

        <div className="property-grid">
          {allArticles.map((article) => (
            <article className="property-card" key={article.slug}>
              <div
                className="property-image"
                style={{ backgroundImage: `url(${article.image})` }}
                role="img"
                aria-label={article.imageAlt}
              />
              <div className="property-body">
                <p>{article.category} · {new Intl.DateTimeFormat("nb-NO").format(new Date(article.date))}</p>
                <h2 style={{ margin: "0 0 14px", fontFamily: "\"Playfair Display\", serif", fontSize: "1.55rem" }}>
                  {article.title}
                </h2>
                <p style={{ color: "var(--muted)", fontSize: "1rem", fontWeight: 400, letterSpacing: 0, textTransform: "none", lineHeight: 1.7 }}>
                  {article.excerpt}
                </p>
                <div className="facts" style={{ justifyContent: "space-between" }}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                    <Clock size={15} /> {article.readingTime}
                  </span>
                  <Link className="text-button" href={`/magasin/${article.slug}`} style={{ fontSize: "0.78rem" }}>
                    Les guide <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section" id="kontakt">
        <div>
          <p className="eyebrow">Vil du ha hjelp til å velge riktig?</p>
          <h2>Få en personlig område- og kjøpsvurdering</h2>
          <p>
            Vi kan hjelpe deg å sortere områder, budsjett, risiko og neste steg før du bruker tid på visninger.
          </p>
        </div>
        <Link className="contact-button" href="/#kontakt">
          Kontakt oss <ArrowRight size={18} />
        </Link>
      </section>
      <Footer />
    </main>
  );
}
