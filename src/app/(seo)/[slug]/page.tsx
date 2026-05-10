import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { getSeoLandingPage, seoLandingPages } from "@/lib/seoLandingPages";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return seoLandingPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getSeoLandingPage(slug);

  if (!page) {
    return {
      title: "Side ikke funnet | Zen Eco Homes",
    };
  }

  return {
    title: page.seoTitle,
    description: page.seoDescription,
    alternates: {
      canonical: `/${page.slug}`,
    },
    openGraph: {
      title: page.seoTitle,
      description: page.seoDescription,
      url: `https://www.zenecohomes.com/${page.slug}`,
      type: "website",
    },
  };
}

export default async function SeoLandingPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getSeoLandingPage(slug);

  if (!page) {
    notFound();
  }

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faq.map((item) => ({
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
      { "@type": "ListItem", position: 2, name: page.title, item: `https://www.zenecohomes.com/${page.slug}` },
    ],
  };

  return (
    <main>
      <SiteHeader />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <section className="page-hero compact-hero image-hero">
        <p className="eyebrow">{page.eyebrow}</p>
        <h1>{page.hero}</h1>
        <p>{page.description}</p>
        <div className="hero-actions">
          <Link className="contact-button" href={page.primaryCta.href}>
            {page.primaryCta.label} <ArrowRight size={18} />
          </Link>
          {page.secondaryCta && (
            <Link className="text-button light" href={page.secondaryCta.href}>
              {page.secondaryCta.label}
            </Link>
          )}
        </div>
      </section>

      <section className="section">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1fr) minmax(280px, 360px)",
            gap: 34,
            alignItems: "start",
          }}
        >
          <article
            style={{
              background: "white",
              border: "1px solid var(--line)",
              padding: "clamp(26px, 5vw, 54px)",
              boxShadow: "0 10px 32px rgba(22, 34, 43, 0.06)",
            }}
          >
            {page.sections.map((section) => (
              <section key={section.heading} style={{ marginBottom: 42 }}>
                <h2
                  style={{
                    color: "var(--dark)",
                    fontFamily: "\"Playfair Display\", serif",
                    fontSize: "clamp(1.9rem, 3vw, 2.8rem)",
                    lineHeight: 1.12,
                    margin: "0 0 16px",
                  }}
                >
                  {section.heading}
                </h2>
                {section.body.map((paragraph) => (
                  <p key={paragraph} style={{ color: "var(--muted)", fontSize: "1.08rem", lineHeight: 1.9 }}>
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

            <section style={{ marginTop: 20 }}>
              <p className="eyebrow">Vanlige spørsmål</p>
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
                {page.faq.map((item) => (
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
              <p className="eyebrow">Neste steg</p>
              <h3 style={{ margin: "0 0 12px", color: "var(--dark)", fontSize: "1.45rem" }}>
                Snakk med norsk rådgiver
              </h3>
              <p style={{ color: "var(--muted)", lineHeight: 1.7 }}>
                Få hjelp til å vurdere område, budsjett, boligtype, risiko og riktig prosess før du reserverer.
              </p>
              <Link className="contact-button" href="/#kontakt" style={{ marginTop: 12 }}>
                Kontakt oss <ArrowRight size={17} />
              </Link>
            </div>
            <div style={{ display: "block" }}>
              <strong>Relaterte sider</strong>
              <div style={{ display: "grid", gap: 12, marginTop: 14 }}>
                {page.related.map((item) => (
                  <Link key={item.href} href={item.href} style={{ color: "var(--gold)", lineHeight: 1.45 }}>
                    {item.label}
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
