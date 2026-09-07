import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";

import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { homeLanguageLinks } from "@/lib/i18n";
import { articlePath, articlesInSilo, SILO_META } from "@/lib/magazine";

const silo = SILO_META.guide;

export const metadata = {
  title: "Guider og områdeinnsikt | Bolig i Spania",
  description:
    "Områdeguider og livsstilsinnsikt for boligkjøp i Spania: hvor du bør kjøpe, kyst vs. innland, tomt og bygging, og når det lønner seg å slå til.",
  alternates: { canonical: "/guide" },
  openGraph: {
    title: "Guider og områdeinnsikt | Zen Eco Homes",
    description:
      "Områdeguider, tomt og bygging, kyst vs. innland og timing – innsikt for tryggere boligvalg i Spania.",
    url: "https://www.zenecohomes.com/guide",
    type: "website",
  },
};

export default function GuideHub() {
  const articles = articlesInSilo("guide");

  return (
    <main>
      <SiteHeader languageLinks={homeLanguageLinks("no")} />
      <section className="page-hero compact-hero image-hero">
        <p className="eyebrow">Guide</p>
        <h1>{silo.title}</h1>
        <p>{silo.intro}</p>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Områder og livsstil</p>
          <h2>Velg riktig område og boligtype med trygghet</h2>
          <p>
            Guidene hjelper deg å sortere områder, boligtyper og timing ut fra livsstil, budsjett og
            hvordan du faktisk skal bruke boligen.
          </p>
        </div>

        <div className="magazine-grid">
          {articles.map((article) => (
            <article className="magazine-card" key={article.slug}>
              <Image
                className="magazine-cover-image"
                src={article.image}
                alt={`Forsidebilde for ${article.title}`}
                width={1200}
                height={760}
              />
              <div className="magazine-body">
                <p className="magazine-meta">
                  {article.category} · {new Intl.DateTimeFormat("nb-NO").format(new Date(article.date))}
                </p>
                <h2>{article.title}</h2>
                <p>{article.excerpt}</p>
                <div className="magazine-actions">
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                    <Clock size={15} /> {article.readingTime}
                  </span>
                  <Link className="text-button" href={articlePath(article)}>
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
