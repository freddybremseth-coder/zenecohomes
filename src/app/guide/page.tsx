import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";

import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { homeLanguageLinks } from "@/lib/i18n";
import { articlePath, articlesInSilo, SILO_META } from "@/lib/magazine";

const silo = SILO_META.guide;

export const metadata = {
  title: { absolute: "Guider til boligkjøp i Spania | Råd fra Zen Eco Homes" },
  description:
    "Guider til boligkjøp i Spania om kjøpsprosess, nybygg, finansiering, områdevalg, kostnader og juridiske forhold – skrevet for norske kjøpere.",
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
        <h1>Guider til boligkjøp i Spania</h1>\n        <p>Start med den komplette kjøperguiden, og bruk temaguidene når du trenger mer dybde om område, nybygg, finansiering, kostnader eller juridiske spørsmål.</p>
      </section>

      <section className="section" style={{ paddingBottom: 18 }}>
        <div className="proof-grid">
          <article>
            <strong>Pillar guide</strong>
            <h2>Kjøpe bolig i Spania (2026)</h2>
            <p>Hele kjøperreisen samlet på ett sted – fra område og boligsøk til juridisk kontroll, notar og overtakelse.</p>
            <Link className="text-button" href="/guide/kjope-bolig-i-spania">Les hovedguiden <ArrowRight size={16} /></Link>
          </article>
          <article>
            <strong>Nybygg</strong>
            <h2>Nybygg i Spania</h2>
            <p>Slik vurderer du prosjekt, utbygger, betalingsplan, leveranse, område og risiko før reservasjon.</p>
            <Link className="text-button" href="/guide/nybygg-i-spania">Les nybyggguiden <ArrowRight size={16} /></Link>
          </article>
        </div>
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
