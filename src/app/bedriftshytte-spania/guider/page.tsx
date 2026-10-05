import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { corporateArticles } from "@/lib/corporate-content";
import { homeLanguageLinks } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Guider om bedriftshytte i Spania | Zen Corporate Homes",
  description:
    "Guider om bedriftshytte i Spania: les om firmabolig, booking, drift, skatt, medlemsbolig og beslutningsgrunnlag for norske bedrifter og organisasjoner.",
  alternates: { canonical: "/bedriftshytte-spania/guider" },
};

const groups = [
  {
    title: "Kalkulator og business case",
    intro: "Nye guider for styre, CFO og ledelse: konkrete opphold, hotellalternativ, årsbudsjett, boligkrav og verdiutvikling.",
    slugs: [
      "ledersamling-avdelingsreise-spania-hotell-eller-bedriftshytte",
      "slik-beregner-cfo-hotellalternativ-bedriftshytte",
      "bedriftshytte-styre-ledelse-avdelingsreiser-krav",
      "arsbudsjett-bedriftshytte-spania",
      "prisvekst-bolig-spania-business-case-bedriftshytte",
    ],
  },
  {
    title: "Kom i gang",
    intro: "For ledelse og HR som vurderer ideen for første gang.",
    slugs: [
      "hva-er-en-bedriftshytte-i-spania",
      "corporate-home-assessment-bedriftsvurdering",
      "fem-mater-bedrifter-kan-bruke-bolig-costa-blanca",
      "bedriftshytte-som-langsiktig-ansattgode",
    ],
  },
  {
    title: "Økonomi, skatt og beslutning",
    intro: "Beslutningsgrunnlag, eierstruktur og spørsmål som bør avklares med rådgivere.",
    slugs: [
      "bedriftshytte-mot-hotell-og-leie",
      "kan-ansatte-bruke-bedriftseid-bolig-i-spania",
      "kjop-av-bolig-gjennom-selskap-i-spania",
      "slik-presenterer-du-bedriftshytte-for-styret",
      "fem-feil-ved-kjop-av-bedriftshytte-i-spania",
    ],
  },
  {
    title: "Bruk, kapasitet og booking",
    intro: "Hvordan ordningen kan fungere i praksis for ansatte eller medlemmer.",
    slugs: [
      "bedriftshytte-for-25-ansatte",
      "bedriftshytte-for-100-ansatte",
      "hvor-mange-kan-dele-en-bedriftshytte",
      "rettferdig-bookingsystem-for-bedriftshytte",
      "firmabolig-for-ledersamlinger-og-team",
      "medlemsbolig-i-spania-for-foreninger",
    ],
  },
  {
    title: "Bolig og område",
    intro: "Velg boligtype og beliggenhet ut fra faktisk bruk og reiselogistikk.",
    slugs: [
      "hvilken-bolig-passer-som-bedriftshytte",
      "bedriftsvilla-eller-ansattleilighet",
      "nybygg-eller-bruktbolig-som-bedriftshytte",
      "costa-blanca-nord-eller-sor-bedriftshytte",
      "alicante-eller-valencia-flyplass-bedriftshytte",
    ],
  },
  {
    title: "Drift og samarbeid",
    intro: "Praktisk oppfølging når boligen skal fungere for mange brukere over tid.",
    slugs: [
      "drifte-bedriftshytte-i-spania-fra-norge",
      "vedlikehold-nokkelhold-og-rengjoring-bedriftshytte",
      "delt-bedriftshytte-for-flere-virksomheter",
    ],
  },
];

export default function CorporateGuidesPage() {
  const bySlug = new Map(corporateArticles.map((article) => [article.slug, article]));

  return (
    <main className="corporate-page">
      <SiteHeader locale="no" languageLinks={homeLanguageLinks("no")} />
      <section className="page-hero compact-hero">
        <p className="eyebrow">Zen Corporate Homes · Kunnskap</p>
        <h1>Guider om bedriftshytte og firmabolig i Spania</h1>
        <p>
          Praktisk innhold for norske bedrifter, foreninger og organisasjoner som vil forstå bruk, økonomi,
          booking, drift og boligvalg før de tar en beslutning.
        </p>
        <div className="hero-actions">
          <Link className="contact-button" href="/bedriftshytte-spania#bedriftsvurdering">
            Få en kostnadsfri bedriftsvurdering <ArrowRight size={18} />
          </Link>
          <Link className="text-button light" href="/bedriftshytte-spania">
            Til Zen Corporate Homes
          </Link>
        </div>
      </section>

      {groups.map((group) => (
        <section className="section corporate-guide-group" key={group.title}>
          <div className="section-heading">
            <p className="eyebrow">Corporate kunnskap</p>
            <h2>{group.title}</h2>
            <p>{group.intro}</p>
          </div>
          <div className="corporate-article-grid">
            {group.slugs.map((slug) => {
              const article = bySlug.get(slug);
              if (!article) return null;
              return (
                <article className="corporate-article-card" key={article.slug}>
                  <span>{article.readingTime}</span>
                  <h3>{article.title}</h3>
                  <p>{article.excerpt}</p>
                  <Link className="text-button" href={`/bedriftshytte-spania/${article.slug}`}>
                    Les artikkelen <ArrowRight size={16} />
                  </Link>
                </article>
              );
            })}
          </div>
        </section>
      ))}

      <section className="corporate-contact corporate-guides-cta">
        <div className="corporate-contact-copy">
          <p className="eyebrow">Neste steg</p>
          <h2>Vil dere se hvordan dette kan fungere for deres virksomhet?</h2>
          <p>
            Vi kan lage en kostnadsfri første vurdering med anbefalt modell, aktuelle områder, budsjettintervall
            og representative boliger.
          </p>
          <Link className="contact-button" href="/bedriftshytte-spania#bedriftsvurdering">
            Be om bedriftsvurdering <ArrowRight size={18} />
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
