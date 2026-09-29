import Link from "next/link";
import { ArrowLeft, ArrowRight, CalendarDays, Clock } from "lucide-react";
import type { Article } from "@/lib/content";
import { allArticles, articleBasePath, articlePath, articleSilo, SILO_META } from "@/lib/magazine";

const BASE = "https://www.zenecohomes.com";

const RETIRED_ARTICLE_SLUGS = new Set(["kjopsprosess-bolig-i-spania"]);

const RELATED_GUIDE_SLUGS: Record<string, string[]> = {
  "omradeguide-eiendomskjop-i-spania": [
    "nybygg-finestrat-omradeguide",
    "innlandet-finca-olivengard-spania",
    "flytte-til-spania-pensjonist",
  ],
  "guide-tomtekjop-bygging-i-spania": [
    "innlandet-finca-olivengard-spania",
    "juridiske-fallgruver-boligkjop-spania",
    "omradeguide-eiendomskjop-i-spania",
  ],
  "kjop-bolig-i-spania-na-eller-vente": [
    "omradeguide-eiendomskjop-i-spania",
    "finansiering-notar-nie-boligkjop-spania",
    "juridiske-fallgruver-boligkjop-spania",
  ],
  "finansiering-notar-nie-boligkjop-spania": [
    "nie-skattenummer-spania",
    "boliglan-spansk-bank-nordmenn",
    "spansk-bankkonto-valutaveksling",
  ],
  "omkostninger-nybygg-spania": [
    "lopende-kostnader-eie-bolig-spania",
    "bankgaranti-nybygg-spania",
    "finansiering-notar-nie-boligkjop-spania",
  ],
  "bankgaranti-nybygg-spania": [
    "omkostninger-nybygg-spania",
    "juridiske-fallgruver-boligkjop-spania",
    "finansiering-notar-nie-boligkjop-spania",
  ],
  "nybygg-finestrat-omradeguide": [
    "omradeguide-eiendomskjop-i-spania",
    "bankgaranti-nybygg-spania",
    "omkostninger-nybygg-spania",
  ],
  "utleie-inntektspotensial-bolig-spania": [
    "lopende-kostnader-eie-bolig-spania",
    "omradeguide-eiendomskjop-i-spania",
    "skatt-ved-salg-bolig-spania",
  ],
  "lopende-kostnader-eie-bolig-spania": [
    "omkostninger-nybygg-spania",
    "utleie-inntektspotensial-bolig-spania",
    "flytte-til-spania-pensjonist",
  ],
  "innlandet-finca-olivengard-spania": [
    "guide-tomtekjop-bygging-i-spania",
    "omradeguide-eiendomskjop-i-spania",
    "juridiske-fallgruver-boligkjop-spania",
  ],
  "flytte-til-spania-pensjonist": [
    "omradeguide-eiendomskjop-i-spania",
    "lopende-kostnader-eie-bolig-spania",
    "spansk-bankkonto-valutaveksling",
  ],
  "energieffektive-nybygg-spania": [
    "bankgaranti-nybygg-spania",
    "omkostninger-nybygg-spania",
    "omradeguide-eiendomskjop-i-spania",
  ],
  "juridiske-fallgruver-boligkjop-spania": [
    "bankgaranti-nybygg-spania",
    "finansiering-notar-nie-boligkjop-spania",
    "nie-skattenummer-spania",
  ],
  "skatt-ved-salg-bolig-spania": [
    "arv-gaveskatt-bolig-spania",
    "lopende-kostnader-eie-bolig-spania",
    "finansiering-notar-nie-boligkjop-spania",
  ],
  "arv-gaveskatt-bolig-spania": [
    "skatt-ved-salg-bolig-spania",
    "lopende-kostnader-eie-bolig-spania",
    "juridiske-fallgruver-boligkjop-spania",
  ],
  "nie-skattenummer-spania": [
    "finansiering-notar-nie-boligkjop-spania",
    "spansk-bankkonto-valutaveksling",
    "juridiske-fallgruver-boligkjop-spania",
  ],
  "spansk-bankkonto-valutaveksling": [
    "finansiering-notar-nie-boligkjop-spania",
    "boliglan-spansk-bank-nordmenn",
    "nie-skattenummer-spania",
  ],
  "boliglan-spansk-bank-nordmenn": [
    "finansiering-notar-nie-boligkjop-spania",
    "spansk-bankkonto-valutaveksling",
    "omkostninger-nybygg-spania",
  ],
};

function resolveRelatedArticles(article: Article, silo: ReturnType<typeof articleSilo>) {
  const curatedSlugs = silo === "guide" ? RELATED_GUIDE_SLUGS[article.slug] || [] : [];
  const curated = curatedSlugs
    .map((slug) => allArticles.find((item) => item.slug === slug))
    .filter((item): item is Article => Boolean(item) && !RETIRED_ARTICLE_SLUGS.has(item.slug));

  const fallback = allArticles.filter(
    (item) =>
      item.slug !== article.slug &&
      !RETIRED_ARTICLE_SLUGS.has(item.slug) &&
      articleSilo(item) === silo &&
      !curated.some((curatedItem) => curatedItem.slug === item.slug),
  );

  return [...curated, ...fallback].slice(0, 3);
}

/** Delt artikkelvisning for /magasin, /kjopsprosess og /guide. Silo-bevisst. */
export function ArticleView({ article }: { article: Article }) {
  const silo = articleSilo(article);
  const hub = silo ? SILO_META[silo] : { label: "Magasin", href: "/magasin" };
  const canonicalPath = articlePath(article);
  const relatedArticles = resolveRelatedArticles(article, silo);
  const isCorporate = silo === "corporate";

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.seoDescription,
    image: `${BASE}${article.image}`,
    datePublished: article.date,
    dateModified: article.updated,
    about: article.keywords,
    mentions: isCorporate
      ? ["Bedriftshytte i Spania", "Firmabolig", "Costa Blanca", "Ansattgode"]
      : ["Boligkjøp i Spania", "Costa Blanca", "Nybygg i Spania", "Eiendomsrådgivning"],
    author:
      silo === "guide"
        ? { "@type": "Person", name: "Freddy Bremseth", url: `${BASE}/om-oss/freddy` }
        : { "@type": "Organization", name: isCorporate ? "Zen Corporate Homes" : "Zen Eco Homes", url: BASE },
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

      <section className="page-hero compact-hero article-hero">
        <Link className="text-button light article-back-link" href={hub.href}>
          <ArrowLeft size={17} /> {hub.label}
        </Link>
        <p className="eyebrow">{article.category}</p>
        <h1>{article.title}</h1>
        <p>{article.excerpt}</p>
        <div className="article-hero-meta">
          {silo === "guide" && (
            <Link href="/om-oss/freddy">
              Av Freddy Bremseth
            </Link>
          )}
          <span><CalendarDays size={16} /> Sist oppdatert {new Intl.DateTimeFormat("nb-NO").format(new Date(article.updated))}</span>
          <span><Clock size={16} /> {article.readingTime}</span>
        </div>
      </section>

      <section className="section article-shell">
        <img className="article-cover-image" src={article.image} alt={article.imageAlt} />

        <div className="article-layout">
          <article className="article-main">
            <div className="article-intro">
              {article.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            {article.sections.map((section) => (
              <section className="article-section" key={section.heading}>
                <h2>{section.heading}</h2>
                {section.body?.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.bullets && (
                  <ul className="article-bullets">
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                )}
                {section.table && (
                  <div className="article-table-wrap">
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

            <section className="article-next-steps">
              <p className="eyebrow">Anbefalte neste steg</p>
              <h2>Slik går du videre</h2>
              <ol>
                {article.nextSteps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
              {article.cta && (
                <Link className="contact-button" href={article.cta.href}>
                  {article.cta.label} <ArrowRight size={17} />
                </Link>
              )}
            </section>

            <section className="article-faq">
              <p className="eyebrow">Vanlige spørsmål</p>
              <h2>FAQ</h2>
              <div className="faq-accordion">
                {article.faq.map((item, index) => (
                  <details key={item.question} open={index === 0}>
                    <summary>{item.question}</summary>
                    <p>{item.answer}</p>
                  </details>
                ))}
              </div>
            </section>
          </article>

          <aside className="article-aside">
            <section className="article-help">
              <p className="eyebrow">Trenger du hjelp?</p>
              <h3>Få en personlig vurdering</h3>
              <p>
                {isCorporate
                  ? "Vi hjelper virksomheten å vurdere modell, budsjett, område, boligtype, drift og neste steg."
                  : "Vi hjelper deg å vurdere område, budsjett, boligtype, risiko og neste steg før du reserverer."}
              </p>
              <Link className="contact-button" href={isCorporate ? "/bedriftshytte-spania#bedriftsvurdering" : "/booking"}>
                {isCorporate ? "Be om bedriftsvurdering" : "Få rådgivning"} <ArrowRight size={17} />
              </Link>
            </section>

            {(silo === "guide" || relatedArticles.length > 0) && (
              <section className="article-related">
                <p className="eyebrow">Les videre</p>
                <h3>{silo === "guide" ? "Hovedguide og relaterte guider" : "Relaterte artikler"}</h3>
                <nav>
                  {silo === "guide" && (
                    <Link href="/guide/kjope-bolig-i-spania">
                      <span>Kjøpe bolig i Spania – komplett hovedguide</span><ArrowRight size={15} />
                    </Link>
                  )}
                  {relatedArticles.map((item) => (
                    <Link key={item.slug} href={articlePath(item)}>
                      <span>{item.title}</span><ArrowRight size={15} />
                    </Link>
                  ))}
                </nav>
              </section>
            )}
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
    title: { absolute: article.seoTitle },
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
