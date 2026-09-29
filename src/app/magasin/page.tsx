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
  "flytte-til-spania-pensjonist": "/assets/magasin-covers/pensjon-flytte.svg",
  "energieffektive-nybygg-spania": "/assets/magasin-covers/energi-baerekraft.svg",
  "juridiske-fallgruver-boligkjop-spania": "/assets/magasin-covers/juridisk.svg",
  "skatt-ved-salg-bolig-spania": "/assets/magasin-covers/skatt-salg.svg",
  "arv-gaveskatt-bolig-spania": "/assets/magasin-covers/arv-gave.svg",
  "nie-skattenummer-spania": "/assets/magasin-covers/nie-skattenummer.svg",
  "spansk-bankkonto-valutaveksling": "/assets/magasin-covers/bankkonto-valuta.svg",
  "boliglan-spansk-bank-nordmenn": "/assets/magasin-covers/boliglan-bank.svg",
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
  title: { absolute: "Boligmagasin fra Spania | Marked og livet på Costa Blanca" },
  description:
    "Boligmagasin fra Spania med markedsoppdateringer, lokale nyheter, boligprisutvikling og redaksjonelle saker om livet på Costa Blanca og i Spania.",
  alternates: {
    canonical: "/magasin",
  },
  openGraph: {
    title: "Magasin | Zen Eco Homes",
    description:
      "Guider om områdevalg, tomtekjøp, finansiering, NIE og trygg kjøpsprosess i Spania.",
    url: "https://www.zenecohomes.com/magasin",
    type: "website",
  },
};

export default async function MagazinePage() {
  const cmsArticles = await fetchPublishedPosts("magasin");
  const cmsSlugs = new Set(cmsArticles.map((article) => article.slug));
  const fallbackArticles = allArticles.filter((article) => !cmsSlugs.has(article.slug) && !articleSilo(article));

  return (
    <main>
      <SiteHeader languageLinks={homeLanguageLinks("no")} />
      <section className="page-hero compact-hero image-hero">
        <p className="eyebrow">Magasin</p>
        <h1>Marked, boligpriser og livet i Spania</h1>
        <p>
          Redaksjonelle saker, markedsoppdateringer, lokale nyheter og innsikt i hverdagen på Costa Blanca og
          i Spania. De søkeorienterte kjøperguidene finner du i Guide-seksjonen.
        </p>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Redaksjonelt</p>\n          <h2>Følg markedet og livet rundt boligen</h2>
          <p>
            Magasinet støtter kjøperguidene med ferskere markedskontekst, lokale saker og innhold om hvordan
            områdene faktisk utvikler seg og fungerer i hverdagen.
          </p>
        </div>

        <div className="magazine-grid">
          {cmsArticles.map((article) => (
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
                    Les guide <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </article>
          ))}

          {fallbackArticles.map((article) => (
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
          <p className="eyebrow">Vil du ha hjelp til a velge riktig?</p>
          <h2>Fa en personlig omrade- og kjopsvurdering</h2>
          <p>
            Vi kan hjelpe deg a sortere omrader, budsjett, risiko og neste steg for du bruker tid pa visninger.
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
