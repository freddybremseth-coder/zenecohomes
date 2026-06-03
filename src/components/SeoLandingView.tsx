import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import type { SeoLandingPage } from "@/lib/seoLandingPages";
import { htmlLang, ui, withLocale, type Locale } from "@/lib/i18n";

const BASE = "https://www.zenecohomes.com";

type Props = {
  page: SeoLandingPage;
  locale: Locale;
  /** Ekvivalens-rad for hreflang/språkbytter (uten locale-prefiks). */
  eq?: { no: string; de?: string; en?: string };
};

export function SeoLandingView({ page, locale, eq }: Props) {
  const t = ui[locale];
  const selfUrl = `${BASE}${withLocale(locale, `/${page.slug}`)}`;

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: htmlLang[locale],
    mainEntity: page.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: t.home, item: `${BASE}${withLocale(locale, "/")}` },
      { "@type": "ListItem", position: 2, name: page.title, item: selfUrl },
    ],
  };

  // Språkbytter: lenker til de tilgjengelige språkversjonene av denne siden.
  const languageLinks = eq
    ? (["no", "de", "en"] as Locale[])
        .filter((l) => eq[l])
        .map((l) => ({ locale: l, href: withLocale(l, `/${eq[l]}`), current: l === locale }))
    : undefined;

  return (
    <main lang={htmlLang[locale]}>
      <SiteHeader locale={locale} languageLinks={languageLinks} />
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
                    fontFamily: '"Playfair Display", serif',
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
              <p className="eyebrow">{t.faqEyebrow}</p>
              <h2 style={{ color: "var(--dark)", fontFamily: '"Playfair Display", serif', marginTop: 0 }}>
                {t.faqHeading}
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
              <p className="eyebrow">{t.nextStep}</p>
              <h3 style={{ margin: "0 0 12px", color: "var(--dark)", fontSize: "1.45rem" }}>{t.advisorHeading}</h3>
              <p style={{ color: "var(--muted)", lineHeight: 1.7 }}>{t.advisorBody}</p>
              <Link className="contact-button" href={t.contactHref} style={{ marginTop: 12 }}>
                {t.contactCta} <ArrowRight size={17} />
              </Link>
            </div>
            <div style={{ display: "block" }}>
              <strong>{t.relatedHeading}</strong>
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
