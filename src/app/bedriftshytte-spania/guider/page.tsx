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
    title: "Start her",
    intro: "For ledelse og HR som vil forstå konseptet, bruksmodellene og hva som må avklares før virksomheten går videre.",
    slugs: [
      "hva-er-en-bedriftshytte-i-spania",
      "fem-mater-bedrifter-kan-bruke-bolig-costa-blanca",
    ],
  },
  {
    title: "Økonomi, eierskap og styrebeslutning",
    intro: "Business case, hotellalternativ, selskapseierskap, risiko og beslutningsgrunnlag samlet i tre komplette guider.",
    slugs: [
      "bedriftshytte-mot-hotell-og-leie",
      "kjop-av-bolig-gjennom-selskap-i-spania",
      "slik-presenterer-du-bedriftshytte-for-styret",
    ],
  },
  {
    title: "Ansatte, booking og organisasjoner",
    intro: "Regler for ansattbruk, kapasitet, booking, medlemsbolig og modeller der flere virksomheter eller organisasjoner deler løsningen.",
    slugs: [
      "kan-ansatte-bruke-bedriftseid-bolig-i-spania",
      "medlemsbolig-i-spania-for-foreninger",
    ],
  },
  {
    title: "Boligvalg og drift",
    intro: "Velg riktig bolig, område og kapasitet, og planlegg keyholding, tilsyn, rengjøring og vedlikehold før overtakelsen.",
    slugs: [
      "hvilken-bolig-passer-som-bedriftshytte",
      "vedlikehold-nokkelhold-og-rengjoring-bedriftshytte",
    ],
  },
  {
    title: "For partnere",
    intro: "Én samlet arbeidsmodell for regnskapsførere, rådgivere og organisasjoner som introduserer relevante kunder til Zen Corporate Homes.",
    slugs: [
      "partnerguide-introdusere-zen-corporate-homes",
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
          Komplette guider for norske bedrifter, foreninger og organisasjoner som vil forstå bruk, økonomi,
          skatt, booking, boligvalg og drift før de tar en beslutning.
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
