import Link from "next/link";
import { ArrowLeft, ArrowRight, CalendarDays, Clock } from "lucide-react";
import type { Article } from "@/lib/content";
import { allArticles, articleBasePath, articlePath, articleSilo, SILO_META } from "@/lib/magazine";

const BASE = "https://www.zenecohomes.com";

/** Delt artikkelvisning for /magasin, /kjopsprosess og /guide. Silo-bevisst. */
export function ArticleView({ article }: { article: Article }) {
  const silo = articleSilo(article);
  const hub = silo ? SILO_META[silo] : { label: "Magasin", href: "/magasin" };
  const canonicalPath = articlePath(article);
  const relatedArticles = allArticles.filter((item) => item.slug !== article.slug).slice(0, 3);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.seoDescription,
    image: `${BASE}${article.image}`,
    datePublished: article.date,
    dateModified: article.updated,
    about: article.keywords,
    mentions: ["Boligkjop i Spania", "Costa Blanca", "Nybygg i Spania", "Eiendomsradgivning"],
    author: { "@type": "Organization", name: "Zen Eco Homes", url: BASE },
    publisher: { "@type": "Organization", name: "Zen Eco Homes", url: BASE },
    mainEntityOfPage: `${BASE}${canonicalPath}`,
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: article.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Forside", item: BASE },
      { "@type": "ListItem", position: 2, name: hub.label, item: `${BASE}${hub.href}` },
      { "@type": "ListItem", position: 3, name: article.title, item: `${BASE}${canonicalPath}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <section className="page-hero compact-hero" style={{ paddingBottom: 42 }}>
        <Link className="text-button light" href={hub.href} style={{ marginBottom: 26 }}>
          <ArrowLeft size={17} /> {hub.label}
        </Link>
        <p className="eyebrow">{article.category}</p>
        <h1>{article.title}</h1>
        <p>{article.excerpt}</p>
        <div className="hero-actions">
          <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
            <CalendarDays size={17} /> {new Intl.DateTimeFormat("nb-NO").format(new Date(article.updated))}
          </span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
            <Clock size={17} /> {article.readingTime}
          </span>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 46 }}>
        <img
          src={article.image}
          alt={article.imageAlt}
          style={{
            width: "100%",
            maxHeight: 460,
            objectFit: "cover",
            border: "1px solid var(--line)",
            boxShadow: "var(--shadow)",
            background: "white",
          }}
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 330px), 1fr))",
            gap: 42,
            alignItems: "start",
            marginTop: 46,
          }}
        >
          <article
            style={{
              background: "white",
              border: "1px solid var(--line)",
              padding: "clamp(26px, 5vw, 58px)",
              boxShadow: "0 10px 32px rgba(22, 34, 43, 0.06)",
            }}
          >
            {article.intro.map((paragraph) => (
              <p key={paragraph} style={{ color: "var(--text)", fontSize: "1.16rem", lineHeight: 1.9 }}>
                {paragraph}
              </p>
            ))}

            {article.sections.map((section) => (
              <section key={section.heading} style={{ marginTop: 42 }}>
                <h2
                  style={{
                    color: "var(--dark)",
                    fontFamily: "\"Playfair Display\", serif",
                    fontSize: "clamp(1.8rem, 3vw, 2.7rem)",
                    lineHeight: 1.12,
                    margin: "0 0 16px",
                  }}
                >
                  {section.heading}
                </h2>
                {section.body?.map((paragraph) => (
                  <p key={paragraph} style={{ color: "var(--muted)", fontSize: "1.05rem", lineHeight: 1.9 }}>
                    {paragraph}
                  </p>
                ))}
                {section.bullets && (
                  <ul style={{ display: "grid", gap: 10, paddingLeft: 20, color: "var(--text)", lineHeight: 1.75 }}>
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                )}
                {section.table && (
                  <div style={{ overflowX: "auto", marginTop: 18 }}>
                    <table className="article-table">
                      <thead>
                        <tr>
                          {section.table.headers.map((h) => (
                            <th key={h}>{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {section.table.rows.map((row, ri) => (
                          <tr key={ri}>
                            {row.map((cell, ci) => (
                              <td key={ci}>{cell}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    {section.table.caption && <p className="article-table-caption">{section.table.caption}</p>}
                  </div>
                )}
              </section>
            ))}

            <section style={{ marginTop: 46, padding: 28, background: "var(--sage)", border: "1px solid var(--line)" }}>
              <p className="eyebrow">Anbefalte neste steg</p>
              <h2 style={{ color: "var(--dark)", fontFamily: "\"Playfair Display\", serif", marginTop: 0 }}>
                Slik gar du videre
              </h2>
              <ol style={{ display: "grid", gap: 10, paddingLeft: 20, lineHeight: 1.75 }}>
                {article.nextSteps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
              {article.cta && (
                <Link className="contact-button" href={article.cta.href} style={{ marginTop: 20 }}>
                  {article.cta.label} <ArrowRight size={17} />
                </Link>
              )}
            </section>

            <section style={{ marginTop: 46 }}>
              <p className="eyebrow">Vanlige sporsmal</p>
              <h2 style={{ color: "var(--dark)", fontFamily: "\"Playfair Display\", serif", marginTop: 0 }}>
                FAQ
              </h2>
              <div style={{ display: "grid", gap: 14 }}>
                {article.faq.map((item) => (
                  <details key={item.question} style={{ border: "1px solid var(--line)", padding: 18, background: "#fbfbf7" }}>
                    <summary style={{ cursor: "pointer", color: "var(--dark)", fontWeight: 900 }}>{item.question}</summary>
                    <p style={{ color: "var(--muted)", lineHeight: 1.75 }}>{item.answer}</p>
                  </details>
                ))}
              </div>
            </section>
          </article>

          <aside className="feature-panel" style={{ position: "sticky", top: 110 }}>
            <div style={{ display: "block" }}>
              <p className="eyebrow">Trenger du hjelp?</p>
              <h3 style={{ margin: "0 0 12px", color: "var(--dark)", fontSize: "1.45rem" }}>
                Fa en personlig vurdering
              </h3>
              <p style={{ color: "var(--muted)", lineHeight: 1.7 }}>
                Vi hjelper deg a vurdere omrade, budsjett, boligtype, risiko og neste steg for du reserverer.
              </p>
              <Link className="contact-button" href="/#kontakt" style={{ marginTop: 12 }}>
                Kontakt Zen Eco Homes <ArrowRight size={17} />
              </Link>
            </div>
            <div style={{ display: "block" }}>
              <strong>Relaterte guider</strong>
              <div style={{ display: "grid", gap: 12, marginTop: 14 }}>
                {relatedArticles.map((item) => (
                  <Link key={item.slug} href={articlePath(item)} style={{ color: "var(--gold)", lineHeight: 1.45 }}>
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

/** Delt metadata-bygger for artikkelsidene (kanonisk = silo-sti). */
export function buildArticleMetadata(article: Article) {
  const canonicalPath = articleBasePath(article) + `/${article.slug}`;
  return {
    title: article.seoTitle,
    description: article.seoDescription,
    keywords: article.keywords,
    alternates: { canonical: canonicalPath },
    openGraph: {
      title: article.seoTitle,
      description: article.seoDescription,
      url: `${BASE}${canonicalPath}`,
      type: "article" as const,
      publishedTime: article.date,
      modifiedTime: article.updated,
      images: [{ url: article.image, alt: article.imageAlt }],
    },
  };
}
