import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";

import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { homeLanguageLinks } from "@/lib/i18n";
import { articlePath, articlesInSilo, SILO_META } from "@/lib/magazine";

const silo = SILO_META.guide;

export const metadata = {
  title: "Guider om boligkjøp i Spania | Råd fra Zen Eco Homes",
  description:
    "Les guider om boligkjøp i Spania, områdevalg, nybygg, tomt, kostnader, finansiering, NIE og praktiske steg før du reserverer bolig i Spania.",
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
  const articles = articlesInSilo("guide").filter((article) => article.slug !== "kjopsprosess-bolig-i-spania");

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
          <p className="eyebrow">Start her</p>
          <h2>De viktigste guidene for boligkjøp i Spania</h2>
          <p>
            Hjørnesteinsguiden forklarer hele kjøpsreisen. Derfra kan du gå videre til egne guider om
            nybygg, finansiering, kostnader, NIE, juridikk, tomt og områdevalg.
          </p>
        </div>
        <div className="proof-grid">
          <article>
            <h3>Kjøpe bolig i Spania (2026)</h3>
            <p>Komplett guide til boligtype, område, visning, juridisk kontroll, NIE, finansiering, kostnader og overtakelse.</p>
            <Link className="text-button" href="/guide/kjope-bolig-i-spania">Les hovedguiden <ArrowRight size={16} /></Link>
          </article>
          <article>
            <h3>Nybygg i Spania</h3>
            <p>Utbygger, betalingsplan, bankgaranti, kostnader, levering og det du bør kontrollere før reservasjon.</p>
            <Link className="text-button" href="/guide/nybygg-i-spania">Les nybyggguiden <ArrowRight size={16} /></Link>
          </article>
          <article>
            <h3>Slik jobber vi</h3>
            <p>Kjøpsprosessen som egen trust-side, fra behovskartlegging og områdevalg til overtakelse og Zen Eco Homes Care.</p>
            <Link className="text-button" href="/kjopsprosessen">Se kjøpsprosessen <ArrowRight size={16} /></Link>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Alle guider</p>
          <h2>Hele kunnskapsbiblioteket – ingenting gjemt bort</h2>
          <p>
            Her ligger alle søkeorienterte guider samlet: områdevalg, finansiering, NIE, juridikk, bank,
            kostnader, skatt, nybygg, tomt, energi, utleie og livet som boligeier i Spania.
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
