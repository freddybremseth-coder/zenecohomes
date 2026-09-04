import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Clock } from "lucide-react";

import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { homeLanguageLinks } from "@/lib/i18n";
import { allArticles } from "@/lib/magazine";
import { fetchPublishedPosts } from "@/lib/website-content";

const booksUrl = "https://freddybremseth.com";

const articleCovers: Record<string, string> = {
  "omradeguide-eiendomskjop-i-spania": "/assets/magasin-covers/omradevalg.svg",
  "guide-tomtekjop-bygging-i-spania": "/assets/magasin-covers/tomt-bygg.svg",
  "kjop-bolig-i-spania-na-eller-vente": "/assets/magasin-covers/kjope-na.svg",
  "finansiering-notar-nie-boligkjop-spania": "/assets/magasin-covers/finansiering.svg",
  "kjopsprosess-bolig-i-spania": "/assets/magasin-covers/kjopsprosess.svg",
  "hvorfor-god-eiendomsradgiver-er-viktig": "/assets/magasin-covers/radgiver.svg",
  "idealista-finn-ikke-alltid-til-a-stole-pa": "/assets/magasin-covers/boligportaler.svg",
};

const bookGuides = [
  {
    title: "Altea",
    language: "Norsk",
    image: "/assets/books/altea-norsk.png",
    description: "Den hvite byen, havet og hverdagslivet.",
  },
  {
    title: "Calpe",
    language: "Norsk",
    image: "/assets/books/calpe-norsk.png",
    description: "Klippen, strendene og byen.",
  },
  {
    title: "Finestrat",
    language: "Norsk",
    image: "/assets/books/finestrat-norsk.png",
    description: "Landsbyen, stranden og nybyen.",
  },
  {
    title: "La Nucia",
    language: "Norsk",
    image: "/assets/books/la-nucia-norsk.png",
    description: "Høydene mellom kyst og fjell.",
  },
  {
    title: "Polop",
    language: "Norsk",
    image: "/assets/books/polop-norsk.png",
    description: "Fontene, fjell og stillhet over kysten.",
  },
  {
    title: "Benidorm",
    language: "English",
    image: "/assets/books/benidorm-english.jpg",
    description: "Beyond the high-rises.",
  },
  {
    title: "Dénia",
    language: "English",
    image: "/assets/books/denia-english.png",
    description: "Port, beaches and year-round life.",
  },
  {
    title: "El Campello",
    language: "English",
    image: "/assets/books/el-campello-english.png",
    description: "Beaches, marina and daily life.",
  },
  {
    title: "Sant Joan d'Alacant",
    language: "English",
    image: "/assets/books/sant-joan-english.png",
    description: "Residential life near Alicante.",
  },
  {
    title: "Moraira",
    language: "Norsk",
    image: "/assets/books/moraira-norsk.jpg",
    description: "Områder, livsstil og hverdag.",
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

export const metadata = {
  title: "Magasin | Guider om boligkjop i Spania",
  description:
    "Praktiske guider for nordmenn som vurderer bolig, tomt, nybygg, finansiering og kjøpsprosess i Spania.",
  alternates: {
    canonical: "/magasin",
  },
  openGraph: {
    title: "Magasin | Zen Eco Homes",
    description:
      "Guider om omradevalg, tomtekjop, finansiering, NIE og trygg kjopsprosess i Spania.",
    url: "https://www.zenecohomes.com/magasin",
    type: "website",
  },
};

export default async function MagazinePage() {
  const cmsArticles = await fetchPublishedPosts("magasin");
  const cmsSlugs = new Set(cmsArticles.map((article) => article.slug));
  const fallbackArticles = allArticles.filter((article) => !cmsSlugs.has(article.slug));

  return (
    <main>
      <SiteHeader languageLinks={homeLanguageLinks("no")} />
      <section className="page-hero compact-hero image-hero">
        <p className="eyebrow">Magasin</p>
        <h1>Guider for tryggere boligkjop i Spania</h1>
        <p>
          Omrader, tomter, finansiering, NIE, notar og kjopsprosess forklart for nordmenn som vil ta gode
          beslutninger for de reserverer bolig.
        </p>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">SEO og radgivning</p>
          <h2>Start med kunnskap for du velger bolig</h2>
          <p>
            Disse guidene er bygget for a svare pa sporsmalene nordmenn faktisk soker etter nar de vurderer
            bolig i Spania.
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
                  <Link className="text-button" href={`/magasin/${article.slug}`}>
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
                  <Link className="text-button" href={`/magasin/${article.slug}`}>
                    Les guide <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="book-showcase">
        <div className="book-showcase-inner">
          <div className="book-showcase-heading">
            <p className="eyebrow">Let Me Guide You</p>
            <h2>Områdebøker for deg som vurderer bolig og liv i Spania</h2>
            <p>
              Praktiske områdeguider om hverdagsliv, kostnader, transport, nabolag og lokale valg. Bøkene kan
              kjøpes for 5 euro på freddybremseth.com.
            </p>
            <Link className="contact-button" href={booksUrl} target="_blank" rel="noreferrer">
              Kjøp bøker for 5 euro <ArrowRight size={18} />
            </Link>
          </div>

          <div className="book-grid">
            {bookGuides.map((book, index) => (
              <Link
                className={`book-card ${index === 0 ? "featured-book" : ""}`}
                href={booksUrl}
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
