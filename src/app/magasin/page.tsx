import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Clock } from "lucide-react";

import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { homeLanguageLinks } from "@/lib/i18n";
import { allArticles, articlePath, articleSilo, getMagazineArticle } from "@/lib/magazine";
import { corporateArticles } from "@/lib/corporate-content";
import { fetchPublishedPosts } from "@/lib/website-content";

const booksUrl = "https://books.freddybremseth.com";
const bookUrl = (slug: string) => `${booksUrl}/book/${slug}`;

const articleCovers: Record<string, string> = {
  "boligmarkedet-costa-blanca-hosten-2026": "/assets/areas.jpg",
  "omradeguide-eiendomskjop-i-spania": "/assets/magasin-covers/omradevalg.svg",
  "guide-tomtekjop-bygging-i-spania": "/assets/magasin-covers/tomt-bygg.svg",
  "kjop-bolig-i-spania-na-eller-vente": "/assets/magasin-covers/kjope-na.svg",
  "finansiering-notar-nie-boligkjop-spania": "/assets/magasin-covers/finansiering.svg",
  "kjopsprosess-bolig-i-spania": "/assets/magasin-covers/kjopsprosess.svg",
  "hvorfor-god-eiendomsradgiver-er-viktig": "/assets/magasin-covers/radgiver.svg",
  "idealista-finn-ikke-alltid-til-a-stole-pa": "/assets/magasin-covers/boligportaler.svg",
  "omkostninger-nybygg-spania": "/assets/magasin-covers/finansiering.svg",
  "bankgaranti-nybygg-spania": "/assets/magasin-covers/kjopsprosess.svg",
  "nybygg-finestrat-omradeguide": "/assets/magasin-covers/omradevalg.svg",
  "utleie-inntektspotensial-bolig-spania": "/assets/magasin-covers/utleie-inntekt.svg",
  "lopende-kostnader-eie-bolig-spania": "/assets/magasin-covers/kostnader-eie.svg",
  "innlandet-finca-olivengard-spania": "/assets/magasin-covers/innlandet-livsstil.svg",
  "flytte-til-spania-som-pensjonist": "/assets/magasin-covers/pensjon-flytte.svg",
  "energieffektive-nybygg-spania": "/assets/magasin-covers/energi-baerekraft.svg",
  "juridiske-fallgruver-boligkjop-spania": "/assets/magasin-covers/juridisk.svg",
  "skatt-ved-salg-bolig-spania": "/assets/magasin-covers/skatt-salg.svg",
  "arv-gaveskatt-bolig-spania": "/assets/magasin-covers/arv-gave.svg",
  "nie-skattenummer-spania": "/assets/magasin-covers/nie-skattenummer.svg",
  "spansk-bankkonto-valutaveksling": "/assets/magasin-covers/bankkonto-valuta.svg",
  "boliglan-spansk-bank-nordmenn": "/assets/magasin-covers/boliglan-bank.svg",
  "hva-far-du-for-4-6-8-10-millioner-costa-blanca": "/assets/magasin-covers/finansiering.svg",
  "bolig-500000-euro-totalbudsjett-spania": "/assets/magasin-covers/finansiering.svg",
  "lan-i-norge-eller-spania-boligkjop": "/assets/magasin-covers/boliglan-bank.svg",
  "albir-finestrat-villajoyosa-benidorm-hvor-kjope": "/assets/magasin-covers/omradevalg.svg",
  "nybygg-eller-bruktbolig-costa-blanca": "/assets/magasin-covers/omradet-for-boligen.svg",
  "eurokurs-boligbudsjett-spania-nordmenn": "/assets/magasin-covers/bankkonto-valuta.svg",
  "hva-koster-feriebolig-spania-i-aret": "/assets/magasin-covers/kostnader-eie.svg",
  "7-dyre-feil-nordmenn-bolig-spania": "/assets/magasin-covers/juridisk.svg",
  "havutsikt-eller-gangavstand-costa-blanca": "/assets/magasin-covers/omradet-for-boligen.svg",
  "leilighet-eller-villa-costa-blanca": "/assets/magasin-covers/omradevalg.svg",
  "bolig-som-er-lett-a-selge-igjen-spania": "/assets/magasin-covers/radgiver.svg",
  "bolig-under-bygging-eller-ferdig-spania": "/assets/magasin-covers/kjopsprosess.svg",
  "costa-blanca-nord-500000-euro-hva-kjope-na": "/assets/areas.jpg",
  "benidorm-villa-456000-vs-516000": "/assets/magasin-covers/omradet-for-boligen.svg",
  "finestrat-villa-650000-700000-735000": "/assets/magasin-covers/omradevalg.svg",
  "villajoyosa-275000-vs-375000": "/assets/magasin-covers/kjope-na.svg",
  "costa-blanca-nord-under-300000-tre-kjop": "/assets/magasin-covers/kjope-na.svg",
  "600000-euro-benidorm-polop-finestrat": "/assets/magasin-covers/omradevalg.svg",
  "finestrat-430000-leilighet-eller-bungalow": "/assets/magasin-covers/omradet-for-boligen.svg",
  "finestrat-rundt-700000-114-155-314-m2": "/assets/magasin-covers/omradet-for-boligen.svg",
  "finestrat-735000-vs-735950": "/assets/magasin-covers/kjope-na.svg",
};

const bookGuides = [
  {
    title: "Altea",
    language: "Norsk",
    image: "/assets/books/altea-norsk.png",
    description: "Den hvite byen, havet og hverdagslivet.",
    slug: "guide-altea-no",
  },
  {
    title: "Calpe",
    language: "Norsk",
    image: "/assets/books/calpe-norsk.png",
    description: "Klippen, strendene og byen.",
    slug: "guide-calpe-no",
  },
  {
    title: "Finestrat",
    language: "Norsk",
    image: "/assets/books/finestrat-norsk.png",
    description: "Landsbyen, stranden og nybyen.",
    slug: "guide-finestrat-no",
  },
  {
    title: "La Nucia",
    language: "Norsk",
    image: "/assets/books/la-nucia-norsk.png",
    description: "Høydene mellom kyst og fjell.",
    slug: "guide-la-nucia-no",
  },
  {
    title: "Polop",
    language: "Norsk",
    image: "/assets/books/polop-norsk.png",
    description: "Fontene, fjell og stillhet over kysten.",
    slug: "guide-polop-no",
  },
  {
    title: "Benidorm",
    language: "English",
    image: "/assets/books/benidorm-english.jpg",
    description: "Beyond the high-rises.",
    slug: "guide-benidorm-en",
  },
  {
    title: "Dénia",
    language: "English",
    image: "/assets/books/denia-english.png",
    description: "Port, beaches and year-round life.",
    slug: "guide-denia-en",
  },
  {
    title: "El Campello",
    language: "English",
    image: "/assets/books/el-campello-english.png",
    description: "Beaches, marina and daily life.",
    slug: "guide-el-campello-en",
  },
  {
    title: "Sant Joan d'Alacant",
    language: "English",
    image: "/assets/books/sant-joan-english.png",
    description: "Residential life near Alicante.",
    slug: "guide-sant-joan-en",
  },
  {
    title: "Moraira",
    language: "Norsk",
    image: "/assets/books/moraira-norsk.jpg",
    description: "Områder, livsstil og hverdag.",
    slug: "guide-moraira-no",
  },
];

function formatDate(date: string | null) {
  const parsed = new Date(date || "");
  if (Number.isNaN(parsed.getTime())) return "Ny guide";
  return new Intl.DateTimeFormat("nb-NO").format(parsed);
}

function getArticleCover(slug: string) {
  return articleCovers[slug] || "/assets/magasin-covers/magasin-standard.svg";
}

/** Kanonisk lenke for en artikkel-slug: silo-sti (/guide, /kjopsprosess) når kjent, ellers /magasin. */
function hrefForSlug(slug: string): string {
  const article = getMagazineArticle(slug);
  return article ? articlePath(article) : `/magasin/${slug}`;
}

export const metadata = {
  title: "Magasin om bolig og livet i Spania | Zen Eco Homes",
  description:
    "Les markedsoppdateringer, lokale nyheter og artikler om boligmarkedet, områdene, prisutvikling og hverdagslivet i Spania fra Zen Eco Homes i dag.",
  alternates: {
    canonical: "/magasin",
  },
  openGraph: {
    title: "Magasin | Zen Eco Homes",
    description:
      "Markedsoppdateringer, lokale nyheter, boligprisutvikling og redaksjonelle artikler om bolig og hverdagsliv i Spania.",
    url: "https://www.zenecohomes.com/magasin",
    type: "website",
  },
};

export default async function MagazinePage() {
  const cmsArticles = await fetchPublishedPosts("magasin");
  const magazineCmsArticles = cmsArticles.filter((article) => {
    const known = getMagazineArticle(article.slug);
    return !known || !articleSilo(known);
  });
  const cmsSlugs = new Set(magazineCmsArticles.map((article) => article.slug));
  const fallbackArticles = allArticles.filter(
    (article) => !cmsSlugs.has(article.slug) && !articleSilo(article),
  );
  const currentMarketMaxAgeDays = 45;
  const marketAgeDays = (date: string) => Math.floor((Date.now() - new Date(date).getTime()) / 86_400_000);
  const isFreshMarketArticle = (article: (typeof fallbackArticles)[number]) =>
    article.category === "Marked akkurat nå" && marketAgeDays(article.updated) <= currentMarketMaxAgeDays;
  const currentMarketArticles = fallbackArticles.filter(isFreshMarketArticle);
  const evergreenFallbackArticles = fallbackArticles.filter((article) => !isFreshMarketArticle(article));

  return (
    <main className="magazine-page">
      <SiteHeader languageLinks={homeLanguageLinks("no")} />
      <section className="page-hero compact-hero image-hero">
        <p className="eyebrow">Magasin</p>
        <h1>Magasin om boligmarkedet og livet i Spania</h1>
        <p>
          Markedsoppdateringer, boligprisutvikling, lokale nyheter, livet i Spania og redaksjonelt innhold
          som gir mer kontekst rundt områdene og markedet.
        </p>
      </section>

      <section className="section magazine-guide-bridge">
        <div>
          <p className="eyebrow">Ser du etter kjøperguider?</p>
          <h2>Kjøperguidene ligger samlet under Guide</h2>
          <p>
            De søkeorienterte guidene om kjøp, NIE, bank, juridikk, kostnader, tomt og nybygg ligger samlet
            under Guide. Magasin brukes til markedsoppdateringer, lokale nyheter og redaksjonelt innhold.
          </p>
        </div>
        <nav aria-label="Viktige kjøperguider">
          <Link href="/guide/kjope-bolig-i-spania"><span>01</span><div><strong>Kjøpe bolig i Spania</strong><small>Hjørnesteinsguiden til hele kjøpsreisen</small></div><ArrowRight size={16}/></Link>
          <Link href="/guide"><span>02</span><div><strong>Alle guider</strong><small>NIE, bank, juridikk, kostnader, område og nybygg</small></div><ArrowRight size={16}/></Link>
          <Link href="/kjopsprosessen"><span>03</span><div><strong>Kjøpsprosessen</strong><small>Slik jobber Zen Eco Homes fra behov til oppfølging</small></div><ArrowRight size={16}/></Link>
        </nav>
      </section>

      <section className="section proof-section">
        <div className="section-heading">
          <p className="eyebrow">Redaksjonelle temaer</p>
          <h2>Dette finner du i Magasin</h2>
          <p>
            Magasin bygger bredde og aktualitet rundt boligmarkedet og hverdagen i Spania, mens de
            søkeorienterte kjøperguidene ligger samlet under Guide.
          </p>
        </div>
        <div className="magazine-topic-list">
          <article><span>01</span><div><h3>Markedsoppdateringer</h3><p>Endringer i tilbud, etterspørsel, kjøperinteresse og andre signaler fra boligmarkedet.</p></div></article>
          <article><span>02</span><div><h3>Boligprisutvikling</h3><p>Redaksjonelle oppdateringer om priser og utvikling i relevante deler av Spania.</p></div></article>
          <article><span>03</span><div><h3>Lokale nyheter</h3><p>Endringer i områder, infrastruktur, prosjekter og forhold som kan være relevante for boligkjøpere.</p></div></article>
          <article><span>04</span><div><h3>Livet i Spania</h3><p>Hverdagsliv, sesonger, praktiske valg og erfaringer som gir mer kontekst enn en boligannonse.</p></div></article>
          <article><span>05</span><div><h3>Nyheter fra Costa Blanca</h3><p>Lokale utviklingstrekk fra Costa Blanca Nord og Sør som kan påvirke områdene og markedet.</p></div></article>
          <article><span>06</span><div><h3>Redaksjonelt</h3><p>Intervjuer, analyser og andre artikler som støtter nettstedets område- og markedskunnskap.</p></div></article>
        </div>
      </section>

      {currentMarketArticles.length > 0 && (
        <section className="section">
          <div className="section-heading">
            <p className="eyebrow">Marked akkurat nå</p>
            <h2>Konkrete boliger. Konkrete priser. Bedre beslutninger.</h2>
            <p>
              Daterte sammenligninger fra boliger som faktisk ligger i Zen-katalogen. Vi bruker dem til å vise
              hva budsjettet kjøper akkurat nå – og hva som må kontrolleres før du bestemmer deg.
            </p>
          </div>
          <div className="magazine-grid">
            {currentMarketArticles.map((article) => (
              <article className="magazine-card" key={article.slug}>
                <Image
                  className="magazine-cover-image"
                  src={getArticleCover(article.slug)}
                  alt={article.imageAlt}
                  width={1200}
                  height={760}
                />
                <div className="magazine-body">
                  <p className="magazine-meta">
                    Marked akkurat nå · {new Intl.DateTimeFormat("nb-NO").format(new Date(article.updated))}
                  </p>
                  <h2>{article.title}</h2>
                  <p>{article.excerpt}</p>
                  <div className="magazine-actions">
                    <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                      <Clock size={15} /> {article.readingTime}
                    </span>
                    <Link className="text-button" href={articlePath(article)}>
                      Se sammenligningen <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Magasin</p>
          <h2>Markedsoppdateringer, lokale nyheter og livet i Spania</h2>
          <p>
            Her publiserer vi innhold som støtter område- og markedskunnskap: prisutvikling, lokale endringer,
            nye prosjekter, hverdagsliv og andre redaksjonelle saker.
          </p>
        </div>

        <div className="magazine-grid">
          {magazineCmsArticles.map((article) => (
            <article className="magazine-card" key={article.slug}>
              <Image
                className="magazine-cover-image"
                src={getArticleCover(article.slug)}
                alt={`Forsidebilde for ${article.title}`}
                width={1200}
                height={760}
              />
              <div className="magazine-body">
                <p className="magazine-meta">{formatDate(article.published_at || article.created_at)}</p>
                <h2>{article.title}</h2>
                <p>{article.summary}</p>
                <div className="magazine-actions">
                  <Link className="text-button" href={hrefForSlug(article.slug)}>
                    Les artikkel <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </article>
          ))}

          {evergreenFallbackArticles.map((article) => (
            <article className="magazine-card" key={article.slug}>
              <Image
                className="magazine-cover-image"
                src={getArticleCover(article.slug)}
                alt={`Forsidebilde for ${article.title}`}
                width={1200}
                height={760}
              />
              <div className="magazine-body">
                <p className="magazine-meta">
                  {article.category === "Marked akkurat nå"
                    ? "Tidligere markedsøyeblikksbilde"
                    : article.category} · {new Intl.DateTimeFormat("nb-NO").format(new Date(article.date))}
                </p>
                <h2>{article.title}</h2>
                <p>{article.excerpt}</p>
                <div className="magazine-actions">
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                    <Clock size={15} /> {article.readingTime}
                  </span>
                  <Link className="text-button" href={articlePath(article)}>
                    Les artikkel <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Zen Corporate Homes</p>
          <h2>Guider for norske bedrifter og organisasjoner</h2>
          <p>
            Bedriftshytte, firmabolig, booking, drift, skatt, medlemsmodeller og beslutningsgrunnlag samlet på ett sted.
          </p>
        </div>
        <div className="magazine-grid">
          {corporateArticles.map((article) => (
            <article className="magazine-card" key={article.slug}>
              <Image
                className="magazine-cover-image"
                src={getArticleCover(article.slug)}
                alt={article.imageAlt}
                width={1200}
                height={760}
              />
              <div className="magazine-body">
                <p className="magazine-meta">Zen Corporate Homes · {article.readingTime}</p>
                <h2>{article.title}</h2>
                <p>{article.excerpt}</p>
                <div className="magazine-actions">
                  <Link className="text-button" href={articlePath(article)}>
                    Les artikkel <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="center-action" style={{ marginTop: 32 }}>
          <Link className="contact-button" href="/bedriftshytte-spania/guider">
            Se Corporate-kunnskapssenter <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <section className="book-showcase">
        <div className="book-showcase-inner">
          <div className="book-showcase-heading">
            <p className="eyebrow">Let Me Guide You</p>
            <h2>Områdebøker for deg som vurderer bolig og liv i Spania</h2>
            <p>
              Praktiske områdeguider om hverdagsliv, kostnader, transport, nabolag og lokale valg. Bøkene kan
              kjøpes for 5 euro på books.freddybremseth.com.
            </p>
            <Link className="contact-button" href={`${booksUrl}/library`} target="_blank" rel="noreferrer">
              Se alle bøkene <ArrowRight size={18} />
            </Link>
          </div>

          <div className="book-grid">
            {bookGuides.map((book, index) => (
              <Link
                className={`book-card ${index === 0 ? "featured-book" : ""}`}
                href={bookUrl(book.slug)}
                target="_blank"
                rel="noreferrer"
                key={`${book.title}-${book.language}`}
              >
                <div className="book-cover-wrap">
                  <Image src={book.image} alt={`Cover for Let Me Guide You ${book.title}`} fill sizes="(max-width: 900px) 88vw, 330px" />
                </div>
                <div className="book-card-body">
                  <span>
                    <BookOpen size={14} /> {book.language}
                  </span>
                  <h3>{book.title}</h3>
                  <p>{book.description}</p>
                  <strong>Kjøpes for 5 euro</strong>
                </div>
              </Link>
            ))}
          </div>
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
        <Link className="contact-button" href="/booking">
          Kontakt oss <ArrowRight size={18} />
        </Link>
      </section>
      <Footer />
    </main>
  );
}
