import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";

import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import type { SiteLocale } from "@/lib/i18n";
import {
  findLocalizedMagazineArticle,
  magazineArticles,
  magazineNoEquivalents,
  type EditorialLocale,
  type LocalizedMagazineArticle,
} from "@/lib/localizedMagazine";

const BASE = "https://www.zenecohomes.com";

const PREFIX: Record<EditorialLocale, string> = {
  en: "/en/magazine",
  de: "/de/magazin",
  es: "/es/revista",
};

const HUB: Record<EditorialLocale, string> = {
  en: "/en/magazine",
  de: "/de/magazin",
  es: "/es/revista",
};

const BOOKING: Record<EditorialLocale, string> = {
  en: "/en/booking",
  de: "/de/termin",
  es: "/es/cita",
};

const GUIDES: Record<EditorialLocale, string> = {
  en: "/en/guides",
  de: "/de/ratgeber",
  es: "/es/guias",
};

function equivalentFor(key: LocalizedMagazineArticle["key"], locale: EditorialLocale) {
  const article = magazineArticles[locale].find((item) => item.key === key);
  return article ? PREFIX[locale] + "/" + article.slug : HUB[locale];
}

function languageLinks(article: LocalizedMagazineArticle, locale: EditorialLocale) {
  return (["no", "de", "en", "es"] as const).map((code) => ({
    locale: code as SiteLocale,
    href:
      code === "no"
        ? magazineNoEquivalents[article.key]
        : equivalentFor(article.key, code),
    current: code === locale,
  }));
}

export function localizedMagazineArticleMetadata(locale: EditorialLocale, slug: string): Metadata {
  const article = findLocalizedMagazineArticle(locale, slug);
  if (!article) return {};
  const canonical = PREFIX[locale] + "/" + article.slug;
  return {
    title: article.title + " | Zen Eco Homes",
    description: article.excerpt,
    alternates: {
      canonical,
      languages: {
        "nb-NO": BASE + magazineNoEquivalents[article.key],
        "x-default": BASE + magazineNoEquivalents[article.key],
        "de-DE": BASE + equivalentFor(article.key, "de"),
        en: BASE + equivalentFor(article.key, "en"),
        "es-ES": BASE + equivalentFor(article.key, "es"),
      },
    },
  };
}

export function LocalizedMagazineArticleView({
  locale,
  article,
}: {
  locale: EditorialLocale;
  article: LocalizedMagazineArticle;
}) {
  const backLabel = locale === "en" ? "Back to Magazine" : locale === "de" ? "Zurück zum Magazin" : "Volver a Revista";
  const guideLabel = locale === "en" ? "Buyer guides" : locale === "de" ? "Ratgeber" : "Guías de compra";
  const adviceLabel = locale === "en" ? "Get property advice" : locale === "de" ? "Beratung erhalten" : "Solicitar asesoramiento";
  const updatedLabel = locale === "en" ? "Updated" : locale === "de" ? "Aktualisiert" : "Actualizado";

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    dateModified: "2026-10-08",
    author: { "@type": "Person", name: "Freddy Bremseth", url: BASE + (locale === "en" ? "/en/about-freddy" : locale === "de" ? "/de/ueber-freddy" : "/es/sobre-freddy") },
    publisher: { "@type": "Organization", name: "Zen Eco Homes", url: BASE },
    mainEntityOfPage: BASE + PREFIX[locale] + "/" + article.slug,
  };

  return (
    <main lang={locale}>
      <SiteHeader locale={locale} languageLinks={languageLinks(article, locale)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      <section className="page-hero compact-hero image-hero">
        <p className="eyebrow">{article.eyebrow}</p>
        <h1>{article.title}</h1>
        <p>{article.excerpt}</p>
        <div className="article-hero-meta">
          <span><CalendarDays size={16} /> {updatedLabel} 8.10.2026</span>
          <span>{article.readingTime}</span>
        </div>
        <div className="hero-actions">
          <Link className="contact-button" href={BOOKING[locale]}>{adviceLabel} <ArrowRight size={17} /></Link>
          <Link className="text-button light" href={HUB[locale]}>{backLabel}</Link>
        </div>
      </section>

      <article className="section guide-article">
        {article.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}

        {article.sections.map((section) => (
          <section key={section.heading}>
            <h2>{section.heading}</h2>
            {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            {section.bullets ? <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul> : null}
          </section>
        ))}

        <div className="hero-actions" style={{ marginTop: 36 }}>
          <Link className="contact-button" href={BOOKING[locale]}>{adviceLabel}</Link>
          <Link className="text-button" href={GUIDES[locale]}>{guideLabel} <ArrowRight size={16} /></Link>
        </div>
      </article>

      <Footer locale={locale} />
    </main>
  );
}
