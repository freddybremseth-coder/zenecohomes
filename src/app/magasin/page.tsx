import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";

import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { allArticles } from "@/lib/magazine";
import { fetchPublishedPosts } from "@/lib/website-content";

export const metadata = {
  title: "Magasin | Guider om boligkjop i Spania",
  description:
    "Praktiske guider for nordmenn som vurderer bolig, tomt, nybygg, finansiering og kjøpsprosess i Spania.",
  alternates: {
    canonical: "/magasin",
  },
  openGraph: {
    title: "Magasin | Zen Eco Homes",
    description:
      "Guider om omradevalg, tomtekjop, finansiering, NIE og trygg kjopsprosess i Spania.",
    url: "https://www.zenecohomes.com/magasin",
    type: "website",
  },
};

export default async function MagazinePage() {
  const cmsArticles = await fetchPublishedPosts("magasin");
  const cmsSlugs = new Set(cmsArticles.map((article) => article.slug));
  const fallbackArticles = allArticles.filter((article) => !cmsSlugs.has(article.slug));

  return (
    <main>
      <SiteHeader />
      <section className="page-hero compact-hero image-hero">
        <p className="eyebrow">Magasin</p>
        <h1>Guider for tryggere boligkjop i Spania</h1>
        <p>
          Omrader, tomter, finansiering, NIE, notar og kjopsprosess forklart for nordmenn som vil ta gode
          beslutninger for de reserverer bolig.
        </p>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">SEO og radgivning</p>
          <h2>Start med kunnskap for du velger bolig</h2>
          <p>
            Disse guidene er bygget for a svare pa sporsmalene nordmenn faktisk soker etter nar de vurderer
            bolig i Spania.
          </p>
        </div>

        <div className="property-grid">
          {cmsArticles.map((article) => (
            <article className="property-card" key={article.slug}>
              {article.image_url ? (
                <img
                  className="property-image"
                  src={article.image_url}
                  alt={article.title}
                  style={{ objectFit: "cover" }}
                />
              ) : (
                <div className="property-image" style={{ background: "linear-gradient(135deg, #efe7d5, #d7c8a8)" }} />
              )}
              <div className="property-body">
                <p>{new Intl.DateTimeFormat("nb-NO").format(new Date(article.published_at || article.created_at))}</p>
                <h2 style={{ margin: "0 0 14px", fontFamily: "\"Playfair Display\", serif", fontSize: "1.55rem" }}>
                  {article.title}
                </h2>
                <p
                  style={{
                    color: "var(--muted)",
                    fontSize: "1rem",
                    fontWeight: 400,
                    letterSpacing: 0,
                    textTransform: "none",
                    lineHeight: 1.7,
                  }}
                >
                  {article.summary}
                </p>
                <div className="facts" style={{ justifyContent: "flex-end" }}>
                  <Link className="text-button" href={`/magasin/${article.slug}`} style={{ fontSize: "0.78rem" }}>
                    Les guide <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </article>
          ))}

          {fallbackArticles.map((article) => (
            <article className="property-card" key={article.slug}>
              <div
                className="property-image"
                style={{ backgroundImage: `url(${article.image})` }}
                role="img"
                aria-label={article.imageAlt}
              />
              <div className="property-body">
                <p>
                  {article.category} · {new Intl.DateTimeFormat("nb-NO").format(new Date(article.date))}
                </p>
                <h2 style={{ margin: "0 0 14px", fontFamily: "\"Playfair Display\", serif", fontSize: "1.55rem" }}>
                  {article.title}
                </h2>
                <p
                  style={{
                    color: "var(--muted)",
                    fontSize: "1rem",
                    fontWeight: 400,
                    letterSpacing: 0,
                    textTransform: "none",
                    lineHeight: 1.7,
                  }}
                >
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
          <p className="eyebrow">Vil du ha hjelp til a velge riktig?</p>
          <h2>Fa en personlig omrade- og kjopsvurdering</h2>
          <p>
            Vi kan hjelpe deg a sortere omrader, budsjett, risiko og neste steg for du bruker tid pa visninger.
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
