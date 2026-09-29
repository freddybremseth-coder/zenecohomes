import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";

import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { homeLanguageLinks } from "@/lib/i18n";
import { articlePath, articlesInSilo } from "@/lib/magazine";
import type { Article } from "@/lib/content";

export const metadata = {
  title: "Guider om boligkjøp i Spania | Råd fra Zen Eco Homes",
  description:
    "Les guider om boligkjøp i Spania, områdevalg, nybygg, tomt, kostnader, finansiering, NIE og praktiske steg før du reserverer bolig i Spania.",
  alternates: { canonical: "/guide" },
  openGraph: {
    title: "Guider om boligkjøp i Spania | Zen Eco Homes",
    description:
      "Praktiske guider om områdevalg, boligtype, nybygg, finansiering, NIE, juridikk og kostnader ved boligkjøp i Spania.",
    url: "https://www.zenecohomes.com/guide",
    type: "website",
  },
};

const guideGroups = [
  {
    id: "velge",
    eyebrow: "Velge riktig",
    title: "Område, boligtype og timing",
    intro:
      "Start her hvis du fortsatt vurderer hvor du skal kjøpe, hvilken boligtype som passer eller om tidspunktet er riktig.",
    slugs: [
      "omradeguide-eiendomskjop-i-spania",
      "kjop-bolig-i-spania-na-eller-vente",
      "nybygg-finestrat-omradeguide",
      "innlandet-finca-olivengard-spania",
      "flytte-til-spania-pensjonist",
      "guide-tomtekjop-bygging-i-spania",
    ],
  },
  {
    id: "prosess",
    eyebrow: "Fra reservasjon til notar",
    title: "Kjøpsprosess, juridikk og finansiering",
    intro:
      "Guider for deg som har kommet nærmere et konkret kjøp og vil forstå dokumenter, bank, NIE, kostnader og juridiske kontroller.",
    slugs: [
      "finansiering-notar-nie-boligkjop-spania",
      "juridiske-fallgruver-boligkjop-spania",
      "nie-skattenummer-spania",
      "boliglan-spansk-bank-nordmenn",
      "spansk-bankkonto-valutaveksling",
      "omkostninger-nybygg-spania",
      "bankgaranti-nybygg-spania",
    ],
  },
  {
    id: "eie",
    eyebrow: "Etter kjøpet",
    title: "Eie, bruke og senere selge bolig i Spania",
    intro:
      "Kostnader og spørsmål stopper ikke ved overtakelsen. Her finner du guider om drift, utleie, skatt, arv og energieffektivitet.",
    slugs: [
      "lopende-kostnader-eie-bolig-spania",
      "utleie-inntektspotensial-bolig-spania",
      "skatt-ved-salg-bolig-spania",
      "arv-gaveskatt-bolig-spania",
      "energieffektive-nybygg-spania",
    ],
  },
] as const;

function GuideCard({ article }: { article: Article }) {
  return (
    <article className="magazine-card guide-library-card">
      <Image
        className="magazine-cover-image"
        src={article.image}
        alt={article.imageAlt || `Illustrasjon til guiden ${article.title}`}
        width={1200}
        height={760}
      />
      <div className="magazine-body">
        <p className="magazine-meta">
          {article.category} · Sist oppdatert {new Intl.DateTimeFormat("nb-NO").format(new Date(article.updated))}
        </p>
        <h3>{article.title}</h3>
        <p>{article.excerpt}</p>
        <div className="magazine-actions">
          <span className="guide-reading-time">
            <Clock size={15} /> {article.readingTime}
          </span>
          <Link className="text-button" href={articlePath(article)}>
            Les guide <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function GuideHub() {
  const articles = articlesInSilo("guide").filter((article) => article.slug !== "kjopsprosess-bolig-i-spania");
  const bySlug = new Map(articles.map((article) => [article.slug, article]));
  const groupedSlugs = new Set<string>(guideGroups.flatMap((group) => [...group.slugs]));
  const otherArticles = articles.filter((article) => !groupedSlugs.has(article.slug));

  return (
    <main>
      <SiteHeader languageLinks={homeLanguageLinks("no")} />

      <section className="page-hero compact-hero image-hero guide-hub-hero">
        <div className="guide-hero-layout">
          <div className="guide-hero-copy">
            <p className="eyebrow">Kunnskap før boligvalg</p>
            <h1>Guider om boligkjøp i Spania</h1>
            <p>
              Et boligkjøp blir enklere når du vet hva som må avklares – og i hvilken rekkefølge.
              Her finner du praktiske guider om områdevalg, nybygg, finansiering, NIE, juridikk,
              kostnader og livet som boligeier i Spania.
            </p>
            <div className="hero-actions">
              <Link className="contact-button" href="/guide/kjope-bolig-i-spania">
                Start med hovedguiden <ArrowRight size={17} />
              </Link>
              <Link className="text-button light" href="/booking">Få personlig rådgivning</Link>
            </div>
          </div>

          <aside className="guide-hero-panel" aria-label="Finn riktig guide">
            <p className="eyebrow">Finn riktig svar</p>
            <h2>Hva vil du vite mer om?</h2>
            <nav>
              <Link href="/guide/kjope-bolig-i-spania">Hele kjøpsreisen <ArrowRight size={15} /></Link>
              <Link href="/guide/omradeguide-eiendomskjop-i-spania">Velge riktig område <ArrowRight size={15} /></Link>
              <Link href="/guide/nybygg-i-spania">Kjøpe nybygg <ArrowRight size={15} /></Link>
              <Link href="/guide/finansiering-notar-nie-boligkjop-spania">Finansiering og notar <ArrowRight size={15} /></Link>
              <Link href="/guide/juridiske-fallgruver-boligkjop-spania">Juridiske fallgruver <ArrowRight size={15} /></Link>
              <Link href="/guide/guide-tomtekjop-bygging-i-spania">Tomt og bygging <ArrowRight size={15} /></Link>
            </nav>
          </aside>
        </div>
      </section>

      <section className="section guide-start-section" id="start">
        <div className="section-heading guide-section-heading">
          <p className="eyebrow">Start her</p>
          <h2>Tre gode innganger til boligkjøpet</h2>
          <p>
            Du trenger ikke lese alt. Velg det som passer hvor langt du har kommet, og bruk resten som
            oppslagsverk når spørsmålene dukker opp.
          </p>
        </div>

        <div className="guide-start-grid">
          <article className="guide-start-card guide-start-card-primary">
            <span>01</span>
            <h3>Kjøpe bolig i Spania (2026)</h3>
            <p>
              Den komplette hovedguiden: område, boligtype, visning, juridisk kontroll, NIE, finansiering,
              kostnader, notar og overtakelse.
            </p>
            <Link className="text-button" href="/guide/kjope-bolig-i-spania">
              Les hovedguiden <ArrowRight size={16} />
            </Link>
          </article>

          <article className="guide-start-card">
            <span>02</span>
            <h3>Nybygg i Spania</h3>
            <p>
              Utbygger, betalingsplan, bankgaranti, levering og det du bør kontrollere før du reserverer.
            </p>
            <Link className="text-button" href="/guide/nybygg-i-spania">
              Les nybyggguiden <ArrowRight size={16} />
            </Link>
          </article>

          <article className="guide-start-card">
            <span>03</span>
            <h3>Slik jobber Zen Eco Homes</h3>
            <p>
              Se hele arbeidsflyten fra behovskartlegging og områdevalg til visning, kjøp, overtakelse og oppfølging.
            </p>
            <Link className="text-button" href="/kjopsprosessen">
              Se kjøpsprosessen <ArrowRight size={16} />
            </Link>
          </article>
        </div>
      </section>

      <section className="guide-index-band" aria-label="Guideoversikt">
        <div>
          <span>Hopp til:</span>
          {guideGroups.map((group) => (
            <a href={`#${group.id}`} key={group.id}>{group.title}</a>
          ))}
        </div>
      </section>

      {guideGroups.map((group) => {
        const groupArticles = group.slugs.map((slug) => bySlug.get(slug)).filter(Boolean) as Article[];
        if (!groupArticles.length) return null;

        return (
          <section className="section guide-topic-section" id={group.id} key={group.id}>
            <div className="section-heading guide-section-heading">
              <p className="eyebrow">{group.eyebrow}</p>
              <h2>{group.title}</h2>
              <p>{group.intro}</p>
            </div>
            <div className="magazine-grid guide-library-grid">
              {groupArticles.map((article) => <GuideCard article={article} key={article.slug} />)}
            </div>
          </section>
        );
      })}

      {otherArticles.length > 0 && (
        <section className="section guide-topic-section" id="flere">
          <div className="section-heading guide-section-heading">
            <p className="eyebrow">Flere guider</p>
            <h2>Mer kunnskap om bolig og livet i Spania</h2>
            <p>Flere fordypninger som kan være relevante avhengig av boligtype, område og hvordan du vil bruke boligen.</p>
          </div>
          <div className="magazine-grid guide-library-grid">
            {otherArticles.map((article) => <GuideCard article={article} key={article.slug} />)}
          </div>
        </section>
      )}

      <section className="contact-section guide-contact-section" id="kontakt">
        <div>
          <p className="eyebrow">Vil du slippe å sortere alt alene?</p>
          <h2>Få hjelp til å finne riktig område og riktig neste steg</h2>
          <p>
            Fortell hvordan du vil bruke boligen, omtrent hvilket budsjett du har og når du vurderer å kjøpe.
            Da kan vi peke deg mot relevante områder, guider og boliger.
          </p>
        </div>
        <div className="hero-actions">
          <Link className="contact-button" href="/booking">
            Book boligprat <ArrowRight size={18} />
          </Link>
          <Link className="text-button light" href="/eiendommer">Se boliger</Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
