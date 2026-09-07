import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";

import { Footer } from "@/components/Footer";
import { GuideDownload } from "@/components/GuideDownload";
import { SiteHeader } from "@/components/SiteHeader";
import { homeLanguageLinks } from "@/lib/i18n";
import { articlePath, articlesInSilo, SILO_META } from "@/lib/magazine";

const silo = SILO_META.kjopsprosess;

export const metadata = {
  title: "Kjøpsprosessen i Spania | Omkostninger, bankgaranti og finansiering",
  description:
    "Kunnskapshub for kjøp av bolig i Spania: omkostninger og skatt, bankgaranti, finansiering, NIE, notar og hele prosessen fra reservasjon til overtakelse.",
  alternates: { canonical: "/kjopsprosess" },
  openGraph: {
    title: "Kjøpsprosessen i Spania | Zen Eco Homes",
    description:
      "Omkostninger, bankgaranti, finansiering, NIE, notar og trygg kjøpsprosess forklart for nordmenn.",
    url: "https://www.zenecohomes.com/kjopsprosess",
    type: "website",
  },
};

export default function KjopsprosessHub() {
  const articles = articlesInSilo("kjopsprosess");

  return (
    <main>
      <SiteHeader languageLinks={homeLanguageLinks("no")} />
      <section className="page-hero compact-hero image-hero">
        <p className="eyebrow">Kjøpsprosess</p>
        <h1>{silo.title}</h1>
        <p>{silo.intro}</p>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Kunnskapshub</p>
          <h2>Forstå kostnadene og tryggheten før du reserverer</h2>
          <p>
            Disse guidene svarer på det nordmenn faktisk lurer på før de kjøper nybygg i Spania – fra
            totalbudsjett til sikkerheten rundt forskuddsbetalinger.
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

      <GuideDownload />

      <section className="contact-section" id="kontakt">
        <div>
          <p className="eyebrow">Usikker på totalbudsjettet?</p>
          <h2>Få en personlig kjøps- og kostnadsvurdering</h2>
          <p>
            Vi hjelper deg å sette opp et realistisk budsjett med omkostninger, og å sjekke at
            tryggheten er på plass før du reserverer.
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
