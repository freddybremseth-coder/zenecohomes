import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, CalendarDays, Clock } from "lucide-react";
import { notFound } from "next/navigation";

import MarkdownArticle from "@/components/MarkdownArticle";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { homeLanguageLinks } from "@/lib/i18n";
import { allArticles, getMagazineArticle } from "@/lib/magazine";
import { fetchPublishedPost, fetchPublishedPosts } from "@/lib/website-content";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function formatDate(value?: string | null) {
  if (!value) return "";
  return new Intl.DateTimeFormat("nb-NO", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(value));
}

export async function generateStaticParams() {
  const cmsPosts = await fetchPublishedPosts("magasin");
  const slugs = new Set<string>([
    ...allArticles.map((article) => article.slug),
    ...cmsPosts.map((post) => post.slug),
  ]);

  return Array.from(slugs).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const cmsPost = await fetchPublishedPost("magasin", slug);

  if (cmsPost) {
    return {
      title: `${cmsPost.title} | Zen Eco Homes`,
      description: cmsPost.summary || "Guider og innsikt fra Zen Eco Homes.",
      alternates: {
        canonical: `/magasin/${cmsPost.slug}`,
      },
      openGraph: {
        title: cmsPost.title,
        description: cmsPost.summary || "Guider og innsikt fra Zen Eco Homes.",
        url: `https://www.zenecohomes.com/magasin/${cmsPost.slug}`,
        type: "article",
        publishedTime: cmsPost.published_at || cmsPost.created_at,
        images: cmsPost.image_url
          ? [
              {
                url: cmsPost.image_url,
                alt: cmsPost.title,
              },
            ]
          : [],
      },
    };
  }

  const article = getMagazineArticle(slug);
  if (!article) {
    return {
      title: "Artikkel ikke funnet | Zen Eco Homes",
    };
  }

  return {
    title: article.seoTitle,
    description: article.seoDescription,
    keywords: article.keywords,
    alternates: {
      canonical: `/magasin/${article.slug}`,
    },
    openGraph: {
      title: article.seoTitle,
      description: article.seoDescription,
      url: `https://www.zenecohomes.com/magasin/${article.slug}`,
      type: "article",
      publishedTime: article.date,
      modifiedTime: article.updated,
      images: [
        {
          url: article.image,
          alt: article.imageAlt,
        },
      ],
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const cmsPost = await fetchPublishedPost("magasin", slug);

  if (cmsPost && !cmsPost.id.startsWith("fallback-")) {
    return (
      <main>
        <SiteHeader languageLinks={homeLanguageLinks("no")} />
        <section className="page-hero compact-hero">
          <p className="eyebrow">Magasin</p>
          <h1>{cmsPost.title}</h1>
          <p>{cmsPost.summary || "Innsikt, guider og tryggere beslutningsstotte for boligkjopere i Spania."}</p>
        </section>
        <section className="section">
          <div className="mx-auto max-w-4xl px-5 md:px-8">
            <Link
              href="/magasin"
              className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900"
            >
              <ArrowLeft size={16} /> Tilbake til magasin
            </Link>
            {cmsPost.published_at && (
              <p className="mb-6 inline-flex items-center gap-2 text-sm text-slate-500">
                <Calendar size={16} /> {formatDate(cmsPost.published_at)}
              </p>
            )}
            {cmsPost.image_url ? (
              <img
                src={cmsPost.image_url}
                alt={cmsPost.title}
                className="mb-10 aspect-[16/9] w-full rounded-2xl object-cover"
              />
            ) : null}
            <MarkdownArticle markdown={cmsPost.markdown} />
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  const article = getMagazineArticle(slug);
  if (!article) {
    notFound();
  }

  const relatedArticles = allArticles.filter((item) => item.slug !== article.slug).slice(0, 3);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.seoDescription,
    image: `https://www.zenecohomes.com${article.image}`,
    datePublished: article.date,
    dateModified: article.updated,
    about: article.keywords,
    mentions: ["Boligkjop i Spania", "Costa Blanca", "Nybygg i Spania", "Eiendomsradgivning"],
    author: {
      "@type": "Organization",
      name: "Zen Eco Homes",
      url: "https://www.zenecohomes.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Zen Eco Homes",
      url: "https://www.zenecohomes.com",
    },
    mainEntityOfPage: `https://www.zenecohomes.com/magasin/${article.slug}`,
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: article.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Forside", item: "https://www.zenecohomes.com" },
      { "@type": "ListItem", position: 2, name: "Magasin", item: "https://www.zenecohomes.com/magasin" },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: `https://www.zenecohomes.com/magasin/${article.slug}`,
      },
    ],
  };

  return (
    <main>
      <SiteHeader languageLinks={homeLanguageLinks("no")} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <section className="page-hero compact-hero" style={{ paddingBottom: 42 }}>
        <Link className="text-button light" href="/magasin" style={{ marginBottom: 26 }}>
          <ArrowLeft size={17} /> Tilbake til magasinet
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
              </section>
            ))}

            <section style={{ marginTop: 46, padding: 28, background: "var(--sage)", border: "1px solid var(--line)" }}>
              <p className="eyebrow">Anbefalte neste steg</p>
              <h2
                style={{
                  color: "var(--dark)",
                  fontFamily: "\"Playfair Display\", serif",
                  marginTop: 0,
                }}
              >
                Slik gar du videre
              </h2>
              <ol style={{ display: "grid", gap: 10, paddingLeft: 20, lineHeight: 1.75 }}>
                {article.nextSteps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </section>

            <section style={{ marginTop: 46 }}>
              <p className="eyebrow">Vanlige sporsmal</p>
              <h2
                style={{
                  color: "var(--dark)",
                  fontFamily: "\"Playfair Display\", serif",
                  marginTop: 0,
                }}
              >
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
                  <Link key={item.slug} href={`/magasin/${item.slug}`} style={{ color: "var(--gold)", lineHeight: 1.45 }}>
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
      <Footer />
    </main>
  );
}
