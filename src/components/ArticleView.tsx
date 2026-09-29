import Link from "next/link";
import { ArrowLeft, ArrowRight, CalendarDays, Clock } from "lucide-react";
import type { Article } from "@/lib/content";
import { allArticles, articleBasePath, articlePath, articleSilo, SILO_META } from "@/lib/magazine";

const BASE = "https://www.zenecohomes.com";

const RETIRED_ARTICLE_SLUGS = new Set(["kjopsprosess-bolig-i-spania"]);

const RELATED_GUIDE_SLUGS: Record<string, string[]> = {
  "omradeguide-eiendomskjop-i-spania": [
    "nybygg-finestrat-omradeguide",
    "innlandet-finca-olivengard-spania",
    "flytte-til-spania-som-pensjonist",
  ],
  "guide-tomtekjop-bygging-i-spania": [
    "innlandet-finca-olivengard-spania",
    "juridiske-fallgruver-boligkjop-spania",
    "omradeguide-eiendomskjop-i-spania",
  ],
  "kjop-bolig-i-spania-na-eller-vente": [
    "omradeguide-eiendomskjop-i-spania",
    "finansiering-notar-nie-boligkjop-spania",
    "juridiske-fallgruver-boligkjop-spania",
  ],
  "finansiering-notar-nie-boligkjop-spania": [
    "nie-skattenummer-spania",
    "boliglan-spansk-bank-nordmenn",
    "spansk-bankkonto-valutaveksling",
  ],
  "omkostninger-nybygg-spania": [
    "lopende-kostnader-eie-bolig-spania",
    "bankgaranti-nybygg-spania",
    "finansiering-notar-nie-boligkjop-spania",
  ],
  "bankgaranti-nybygg-spania": [
    "omkostninger-nybygg-spania",
    "juridiske-fallgruver-boligkjop-spania",
    "finansiering-notar-nie-boligkjop-spania",
  ],
  "nybygg-finestrat-omradeguide": [
    "omradeguide-eiendomskjop-i-spania",
    "bankgaranti-nybygg-spania",
    "omkostninger-nybygg-spania",
  ],
  "utleie-inntektspotensial-bolig-spania": [
    "lopende-kostnader-eie-bolig-spania",
    "omradeguide-eiendomskjop-i-spania",
    "skatt-ved-salg-bolig-spania",
  ],
  "lopende-kostnader-eie-bolig-spania": [
    "omkostninger-nybygg-spania",
    "utleie-inntektspotensial-bolig-spania",
    "flytte-til-spania-som-pensjonist",
  ],
  "innlandet-finca-olivengard-spania": [
    "guide-tomtekjop-bygging-i-spania",
    "omradeguide-eiendomskjop-i-spania",
    "juridiske-fallgruver-boligkjop-spania",
  ],
  "flytte-til-spania-som-pensjonist": [
    "omradeguide-eiendomskjop-i-spania",
    "lopende-kostnader-eie-bolig-spania",
    "spansk-bankkonto-valutaveksling",
  ],
  "energieffektive-nybygg-spania": [
    "bankgaranti-nybygg-spania",
    "omkostninger-nybygg-spania",
    "omradeguide-eiendomskjop-i-spania",
  ],
  "juridiske-fallgruver-boligkjop-spania": [
    "bankgaranti-nybygg-spania",
    "finansiering-notar-nie-boligkjop-spania",
    "nie-skattenummer-spania",
  ],
  "skatt-ved-salg-bolig-spania": [
    "arv-gaveskatt-bolig-spania",
    "lopende-kostnader-eie-bolig-spania",
    "finansiering-notar-nie-boligkjop-spania",
  ],
  "arv-gaveskatt-bolig-spania": [
    "skatt-ved-salg-bolig-spania",
    "lopende-kostnader-eie-bolig-spania",
    "juridiske-fallgruver-boligkjop-spania",
  ],
  "nie-skattenummer-spania": [
    "finansiering-notar-nie-boligkjop-spania",
    "spansk-bankkonto-valutaveksling",
    "juridiske-fallgruver-boligkjop-spania",
  ],
  "spansk-bankkonto-valutaveksling": [
    "finansiering-notar-nie-boligkjop-spania",
    "boliglan-spansk-bank-nordmenn",
    "nie-skattenummer-spania",
  ],
  "boliglan-spansk-bank-nordmenn": [
    "finansiering-notar-nie-boligkjop-spania",
    "spansk-bankkonto-valutaveksling",
    "omkostninger-nybygg-spania",
  ],
};

type ContextualLink = { label: string; href: string };
type ContextualLinkRule = { headingIncludes: string; links: ContextualLink[] };

/**
 * Kontekstuelle internlenker for guide-siloen.
 * De ligger i selve relevante avsnittet, ikke bare i en generell "relatert"-boks,
 * slik at både leseren og søkemotoren får et tydelig tematisk forhold mellom sidene.
 */
const CONTEXTUAL_GUIDE_LINKS: Record<string, ContextualLinkRule[]> = {
  "omradeguide-eiendomskjop-i-spania": [
    {
      headingIncludes: "Costa Blanca",
      links: [
        { label: "Sammenlign alle områder på Costa Blanca", href: "/omrader" },
        { label: "Costa Blanca Nord", href: "/omrader/costa-blanca-nord" },
        { label: "Costa Blanca Sør", href: "/omrader/costa-blanca-sor" },
      ],
    },
  ],
  "guide-tomtekjop-bygging-i-spania": [
    {
      headingIncludes: "Regulering, vann, strøm",
      links: [
        { label: "Tomter i innlandet", href: "/omrader/innlandet/tomter" },
        { label: "Innlandsområdene", href: "/omrader/innlandet" },
      ],
    },
    {
      headingIncludes: "due diligence",
      links: [
        { label: "Juridiske fallgruver ved boligkjøp", href: "/guide/juridiske-fallgruver-boligkjop-spania" },
      ],
    },
  ],
  "finansiering-notar-nie-boligkjop-spania": [
    {
      headingIncludes: "Finansieringsvalg",
      links: [
        { label: "Boliglån i Spania: bank, belåning og takst", href: "/guide/boliglan-spansk-bank-nordmenn" },
      ],
    },
    {
      headingIncludes: "NIE, bankkonto og notar",
      links: [
        { label: "NIE i Spania – steg for steg", href: "/guide/nie-skattenummer-spania" },
        { label: "Spansk bankkonto og valutaveksling", href: "/guide/spansk-bankkonto-valutaveksling" },
      ],
    },
  ],
  "omkostninger-nybygg-spania": [
    {
      headingIncludes: "Rask oversikt",
      links: [
        { label: "Løpende kostnader ved å eie bolig i Spania", href: "/guide/lopende-kostnader-eie-bolig-spania" },
      ],
    },
    {
      headingIncludes: "Juridisk bistand",
      links: [
        { label: "Bankgaranti ved nybygg", href: "/guide/bankgaranti-nybygg-spania" },
        { label: "Juridiske fallgruver ved boligkjøp", href: "/guide/juridiske-fallgruver-boligkjop-spania" },
      ],
    },
    {
      headingIncludes: "spansk boliglån",
      links: [
        { label: "Boliglån i Spania", href: "/guide/boliglan-spansk-bank-nordmenn" },
      ],
    },
  ],
  "bankgaranti-nybygg-spania": [
    {
      headingIncludes: "Hva er garantien",
      links: [
        { label: "Komplett guide til nybygg i Spania", href: "/guide/nybygg-i-spania" },
      ],
    },
    {
      headingIncludes: "Hva du må sjekke",
      links: [
        { label: "Omkostninger ved kjøp av nybygg", href: "/guide/omkostninger-nybygg-spania" },
        { label: "Juridiske fallgruver ved boligkjøp", href: "/guide/juridiske-fallgruver-boligkjop-spania" },
      ],
    },
  ],
  "lopende-kostnader-eie-bolig-spania": [
    {
      headingIncludes: "De vanligste løpende kostnadene",
      links: [
        { label: "Omkostninger ved selve kjøpet av nybygg", href: "/guide/omkostninger-nybygg-spania" },
      ],
    },
  ],
  "juridiske-fallgruver-boligkjop-spania": [
    {
      headingIncludes: "Megler, notar",
      links: [
        { label: "Slik fungerer hele kjøpsprosessen", href: "/kjopsprosessen" },
      ],
    },
    {
      headingIncludes: "Reservasjon",
      links: [
        { label: "Kjøpe bolig i Spania – komplett guide", href: "/guide/kjope-bolig-i-spania" },
      ],
    },
  ],
  "nie-skattenummer-spania": [
    {
      headingIncludes: "Hva NIE er",
      links: [
        { label: "Finansiering, notar og NIE ved boligkjøp", href: "/guide/finansiering-notar-nie-boligkjop-spania" },
      ],
    },
    {
      headingIncludes: "Hva du bruker NIE",
      links: [
        { label: "Spansk bankkonto og valutaveksling", href: "/guide/spansk-bankkonto-valutaveksling" },
      ],
    },
  ],
  "spansk-bankkonto-valutaveksling": [
    {
      headingIncludes: "Hvorfor mange bruker",
      links: [
        { label: "Finansiering, notar og NIE ved boligkjøp", href: "/guide/finansiering-notar-nie-boligkjop-spania" },
      ],
    },
    {
      headingIncludes: "Valutaveksling",
      links: [
        { label: "Boliglån i Spania", href: "/guide/boliglan-spansk-bank-nordmenn" },
      ],
    },
  ],
  "boliglan-spansk-bank-nordmenn": [
    {
      headingIncludes: "Hva banken ser på",
      links: [
        { label: "Finansiering, notar og NIE ved boligkjøp", href: "/guide/finansiering-notar-nie-boligkjop-spania" },
        { label: "Spansk bankkonto og valutaveksling", href: "/guide/spansk-bankkonto-valutaveksling" },
      ],
    },
    {
      headingIncludes: "Kostnader og vilkår",
      links: [
        { label: "Omkostninger ved kjøp av nybygg", href: "/guide/omkostninger-nybygg-spania" },
      ],
    },
  ],
  "energieffektive-nybygg-spania": [
    {
      headingIncludes: "Energiklasse",
      links: [
        { label: "Komplett guide til nybygg i Spania", href: "/guide/nybygg-i-spania" },
      ],
    },
  ],
  "utleie-inntektspotensial-bolig-spania": [
    {
      headingIncludes: "Regn på reelt nettoresultat",
      links: [
        { label: "Løpende kostnader ved å eie bolig i Spania", href: "/guide/lopende-kostnader-eie-bolig-spania" },
      ],
    },
  ],
  "flytte-til-spania-som-pensjonist": [
    {
      headingIncludes: "Ferie eller fast bosetting",
      links: [
        { label: "Sammenlign områder før du velger bolig", href: "/omrader" },
      ],
    },
    {
      headingIncludes: "Skatt ved fast bosted",
      links: [
        { label: "Løpende kostnader ved å eie bolig i Spania", href: "/guide/lopende-kostnader-eie-bolig-spania" },
      ],
    },
  ],
  "kjop-bolig-i-spania-na-eller-vente": [
    {
      headingIncludes: "Markedet må vurderes lokalt",
      links: [
        { label: "Områdeguide for boligkjøp i Spania", href: "/guide/omradeguide-eiendomskjop-i-spania" },
      ],
    },
    {
      headingIncludes: "Hva kan endre regnestykket",
      links: [
        { label: "Finansiering, notar og NIE ved boligkjøp", href: "/guide/finansiering-notar-nie-boligkjop-spania" },
      ],
    },
  ],
  "nybygg-finestrat-omradeguide": [
    {
      headingIncludes: "Hvorfor vurdere Finestrat",
      links: [
        { label: "Områdeguide for Finestrat", href: "/omrader/costa-blanca-nord/finestrat" },
        { label: "Se boliger i Finestrat", href: "/eiendommer?region=costa-blanca-nord&area=Finestrat" },
      ],
    },
    {
      headingIncludes: "Pris og hva som er inkludert",
      links: [
        { label: "Omkostninger ved kjøp av nybygg", href: "/guide/omkostninger-nybygg-spania" },
      ],
    },
  ],
  "innlandet-finca-olivengard-spania": [
    {
      headingIncludes: "Hvorfor velge innlandet",
      links: [
        { label: "Utforsk innlandsområdene", href: "/omrader/innlandet" },
      ],
    },
    {
      headingIncludes: "Dette må sjekkes ved tomt og finca",
      links: [
        { label: "Se tomter i innlandet", href: "/omrader/innlandet/tomter" },
        { label: "Juridiske fallgruver ved boligkjøp", href: "/guide/juridiske-fallgruver-boligkjop-spania" },
      ],
    },
  ],
  "skatt-ved-salg-bolig-spania": [
    {
      headingIncludes: "Tenk på et framtidig salg",
      links: [
        { label: "Løpende kostnader ved å eie bolig i Spania", href: "/guide/lopende-kostnader-eie-bolig-spania" },
        { label: "Arv og gaveskatt for bolig i Spania", href: "/guide/arv-gaveskatt-bolig-spania" },
      ],
    },
  ],
  "arv-gaveskatt-bolig-spania": [
    {
      headingIncludes: "Testament og grensekryssende arv",
      links: [
        { label: "Juridiske fallgruver ved boligkjøp", href: "/guide/juridiske-fallgruver-boligkjop-spania" },
      ],
    },
    {
      headingIncludes: "Planlegg i tide",
      links: [
        { label: "Skatt ved salg av bolig i Spania", href: "/guide/skatt-ved-salg-bolig-spania" },
      ],
    },
  ],
};

const CONTEXTUAL_MAGAZINE_LINKS: Record<string, ContextualLinkRule[]> = {
  "det-du-ikke-ser-i-boligannonsen": [
    {
      headingIncludes: "hverdagen ikke passer",
      links: [
        { label: "Sammenlign områdene før du velger bolig", href: "/omrader" },
        { label: "Kjøpe bolig i Spania – komplett guide", href: "/guide/kjope-bolig-i-spania" },
      ],
    },
    {
      headingIncludes: "færre og bedre visninger",
      links: [
        { label: "Slik planlegger vi en visningstur", href: "/visningstur" },
        { label: "Se boliger til salgs i Spania", href: "/eiendommer" },
      ],
    },
  ],
  "hva-far-du-for-4-6-8-10-millioner-costa-blanca": [
    {
      headingIncludes: "4 millioner",
      links: [
        { label: "Se Costa Blanca Nord opptil €370.000", href: "/eiendommer?region=costa-blanca-nord&maxPrice=370000" },
        { label: "Valuta og bankkonto ved boligkjøp", href: "/guide/spansk-bankkonto-valutaveksling" },
      ],
    },
    {
      headingIncludes: "6 millioner",
      links: [
        { label: "Se boliger opptil €550.000", href: "/eiendommer?region=costa-blanca-nord&maxPrice=550000" },
      ],
    },
    {
      headingIncludes: "8 millioner",
      links: [
        { label: "Se boliger opptil €740.000", href: "/eiendommer?region=costa-blanca-nord&maxPrice=740000" },
        { label: "Nybygg i Finestrat", href: "/guide/nybygg-finestrat-omradeguide" },
      ],
    },
    {
      headingIncludes: "kjøpskostnadene",
      links: [
        { label: "Omkostninger ved kjøp av nybygg", href: "/guide/omkostninger-nybygg-spania" },
        { label: "Slik utvikler markedet seg nå", href: "/magasin/boligmarkedet-costa-blanca-hosten-2026" },
      ],
    },
  ],
  "bolig-500000-euro-totalbudsjett-spania": [
    {
      headingIncludes: "Kjøpesummen er bare",
      links: [
        { label: "Kjøpe bolig i Spania – komplett guide", href: "/guide/kjope-bolig-i-spania" },
        { label: "Omkostninger ved nybygg", href: "/guide/omkostninger-nybygg-spania" },
      ],
    },
    {
      headingIncludes: "Valutakursen",
      links: [
        { label: "Spansk bankkonto og valutaveksling", href: "/guide/spansk-bankkonto-valutaveksling" },
      ],
    },
    {
      headingIncludes: "tiden etter overtakelse",
      links: [
        { label: "Løpende kostnader ved å eie bolig", href: "/guide/lopende-kostnader-eie-bolig-spania" },
      ],
    },
  ],
  "lan-i-norge-eller-spania-boligkjop": [
    {
      headingIncludes: "Lån i Spania",
      links: [
        { label: "Boliglån i spansk bank for nordmenn", href: "/guide/boliglan-spansk-bank-nordmenn" },
      ],
    },
    {
      headingIncludes: "Valuta",
      links: [
        { label: "Bankkonto og valutaveksling", href: "/guide/spansk-bankkonto-valutaveksling" },
        { label: "Siste markedsoppdatering", href: "/magasin/boligmarkedet-costa-blanca-hosten-2026" },
      ],
    },
    {
      headingIncludes: "arbeidsrekkefølge",
      links: [
        { label: "Finansiering, notar og NIE", href: "/guide/finansiering-notar-nie-boligkjop-spania" },
      ],
    },
  ],
  "albir-finestrat-villajoyosa-benidorm-hvor-kjope": [
    {
      headingIncludes: "Albir",
      links: [
        { label: "Områdeguide Albir", href: "/omrader/costa-blanca-nord/albir" },
        { label: "Se boliger i Albir", href: "/eiendommer?region=costa-blanca-nord&area=Albir" },
      ],
    },
    {
      headingIncludes: "Finestrat",
      links: [
        { label: "Områdeguide Finestrat", href: "/omrader/costa-blanca-nord/finestrat" },
        { label: "Se boliger i Finestrat", href: "/eiendommer?region=costa-blanca-nord&area=Finestrat" },
      ],
    },
    {
      headingIncludes: "Villajoyosa",
      links: [
        { label: "Se boliger i Villajoyosa", href: "/eiendommer?region=costa-blanca-nord&area=Villajoyosa" },
      ],
    },
    {
      headingIncludes: "Benidorm",
      links: [
        { label: "Se boliger i Benidorm", href: "/eiendommer?region=costa-blanca-nord&area=Benidorm" },
      ],
    },
  ],
  "nybygg-eller-bruktbolig-costa-blanca": [
    {
      headingIncludes: "Nybygg",
      links: [
        { label: "Komplett guide til nybygg i Spania", href: "/guide/nybygg-i-spania" },
        { label: "Se nybygg og moderne boliger", href: "/eiendommer" },
      ],
    },
    {
      headingIncludes: "Bruktbolig",
      links: [
        { label: "Juridiske fallgruver ved boligkjøp", href: "/guide/juridiske-fallgruver-boligkjop-spania" },
      ],
    },
    {
      headingIncludes: "Pris",
      links: [
        { label: "Hva får du for 4, 6, 8 og 10 millioner?", href: "/magasin/hva-far-du-for-4-6-8-10-millioner-costa-blanca" },
      ],
    },
  ],
  "eurokurs-boligbudsjett-spania-nordmenn": [
    {
      headingIncludes: "€500.000",
      links: [
        { label: "Slik lager du totalbudsjettet", href: "/magasin/bolig-500000-euro-totalbudsjett-spania" },
      ],
    },
    {
      headingIncludes: "finansiering",
      links: [
        { label: "Lån i Norge eller Spania?", href: "/magasin/lan-i-norge-eller-spania-boligkjop" },
        { label: "Bankkonto og valutaveksling", href: "/guide/spansk-bankkonto-valutaveksling" },
      ],
    },
  ],
  "hva-koster-feriebolig-spania-i-aret": [
    {
      headingIncludes: "årsbudsjettet",
      links: [
        { label: "Komplett guide til løpende eierkostnader", href: "/guide/lopende-kostnader-eie-bolig-spania" },
      ],
    },
    {
      headingIncludes: "Villa og leilighet",
      links: [
        { label: "Sammenlign områder og boligtyper", href: "/omrader/costa-blanca-nord" },
      ],
    },
  ],
  "7-dyre-feil-nordmenn-bolig-spania": [
    {
      headingIncludes: "velger bolig",
      links: [
        { label: "Sammenlign Albir, Finestrat, Villajoyosa og Benidorm", href: "/magasin/albir-finestrat-villajoyosa-benidorm-hvor-kjope" },
      ],
    },
    {
      headingIncludes: "totalramme",
      links: [
        { label: "Slik lager du et realistisk totalbudsjett", href: "/magasin/bolig-500000-euro-totalbudsjett-spania" },
      ],
    },
    {
      headingIncludes: "boligportaler",
      links: [
        { label: "Hvorfor Idealista og Finn ikke alltid er fasit", href: "/magasin/idealista-finn-ikke-alltid-til-a-stole-pa" },
      ],
    },
    {
      headingIncludes: "valuta",
      links: [
        { label: "Slik påvirker eurokursen budsjettet", href: "/magasin/eurokurs-boligbudsjett-spania-nordmenn" },
      ],
    },
  ],

};

function contextualLinksFor(slug: string, heading: string): ContextualLink[] {
  const rules = [
    ...(CONTEXTUAL_GUIDE_LINKS[slug] || []),
    ...(CONTEXTUAL_MAGAZINE_LINKS[slug] || []),
  ];
  return rules
    .filter((rule) => heading.toLowerCase().includes(rule.headingIncludes.toLowerCase()))
    .flatMap((rule) => rule.links);
}

function resolveRelatedArticles(article: Article, silo: ReturnType<typeof articleSilo>) {
  const curatedSlugs = silo === "guide" ? RELATED_GUIDE_SLUGS[article.slug] || [] : [];
  const curated = curatedSlugs
    .map((slug) => allArticles.find((item) => item.slug === slug))
    .filter((item): item is Article => item !== undefined && !RETIRED_ARTICLE_SLUGS.has(item.slug));

  const fallback = allArticles.filter(
    (item) =>
      item.slug !== article.slug &&
      !RETIRED_ARTICLE_SLUGS.has(item.slug) &&
      articleSilo(item) === silo &&
      !curated.some((curatedItem) => curatedItem.slug === item.slug),
  );

  return [...curated, ...fallback].slice(0, 3);
}

/** Delt artikkelvisning for /magasin, /kjopsprosess og /guide. Silo-bevisst. */
export function ArticleView({ article }: { article: Article }) {
  const silo = articleSilo(article);
  const hub = silo ? SILO_META[silo] : { label: "Magasin", href: "/magasin" };
  const canonicalPath = articlePath(article);
  const relatedArticles = resolveRelatedArticles(article, silo);
  const isCorporate = silo === "corporate";
  const personalAuthor =
    article.author ||
    (silo === "guide" ? { name: "Freddy Bremseth", href: "/om-oss/freddy" } : null);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.seoDescription,
    image: `${BASE}${article.image}`,
    datePublished: article.date,
    dateModified: article.updated,
    about: article.keywords,
    mentions: isCorporate
      ? ["Bedriftshytte i Spania", "Firmabolig", "Costa Blanca", "Ansattgode"]
      : ["Boligkjøp i Spania", "Costa Blanca", "Nybygg i Spania", "Eiendomsrådgivning"],
    author: personalAuthor
      ? {
          "@type": "Person",
          name: personalAuthor.name,
          ...(personalAuthor.href ? { url: `${BASE}${personalAuthor.href}` } : {}),
        }
      : { "@type": "Organization", name: isCorporate ? "Zen Corporate Homes" : "Zen Eco Homes", url: BASE },
    publisher: { "@type": "Organization", name: "Zen Eco Homes", url: BASE },
    mainEntityOfPage: `${BASE}${canonicalPath}`,
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: article.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Forside", item: BASE },
      { "@type": "ListItem", position: 2, name: hub.label, item: `${BASE}${hub.href}` },
      { "@type": "ListItem", position: 3, name: article.title, item: `${BASE}${canonicalPath}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <section className="page-hero compact-hero article-hero">
        <Link className="text-button light article-back-link" href={hub.href}>
          <ArrowLeft size={17} /> {hub.label}
        </Link>
        <p className="eyebrow">{article.category}</p>
        <h1>{article.title}</h1>
        <p>{article.excerpt}</p>
        <div className="article-hero-meta">
          {personalAuthor && (
            personalAuthor.href ? (
              <Link href={personalAuthor.href}>Av {personalAuthor.name}</Link>
            ) : (
              <span>Av {personalAuthor.name}</span>
            )
          )}
          <span><CalendarDays size={16} /> Publisert {new Intl.DateTimeFormat("nb-NO").format(new Date(article.date))}</span>
          {article.updated !== article.date && (
            <span>Sist oppdatert {new Intl.DateTimeFormat("nb-NO").format(new Date(article.updated))}</span>
          )}
          <span><Clock size={16} /> {article.readingTime}</span>
        </div>
      </section>

      <section className="section article-shell">
        <img className="article-cover-image" src={article.image} alt={article.imageAlt} />

        <div className="article-layout">
          <article className="article-main">
            <div className="article-intro">
              {silo === "guide" && (
                <p className="article-cluster-link">
                  Denne artikkelen er en del av{" "}
                  <Link href="/guide/kjope-bolig-i-spania">vår komplette guide til å kjøpe bolig i Spania</Link>.
                </p>
              )}
              {article.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            {article.sections.map((section) => {
              const contextualLinks = contextualLinksFor(article.slug, section.heading);
              return (
                <section className="article-section" key={section.heading}>
                  <h2>{section.heading}</h2>
                  {section.body?.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {section.bullets && (
                    <ul className="article-bullets">
                      {section.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                  {section.table && (
                    <div className="article-table-wrap">
                      <table className="article-table">
                        <thead>
                          <tr>
                            {section.table.headers.map((h) => (
                              <th key={h}>{h}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {section.table.rows.map((row, ri) => (
                            <tr key={ri}>
                              {row.map((cell, ci) => (
                                <td key={ci}>{cell}</td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      {section.table.caption && <p className="article-table-caption">{section.table.caption}</p>}
                    </div>
                  )}
                  {contextualLinks.length > 0 && (
                    <nav className="article-context-links" aria-label={`Relaterte guider til ${section.heading}`}>
                      <span>Les også</span>
                      {contextualLinks.map((link) => (
                        <Link href={link.href} key={link.href}>
                          {link.label} <ArrowRight size={14} />
                        </Link>
                      ))}
                    </nav>
                  )}
                </section>
              );
            })}

            <section className="article-next-steps">
              <p className="eyebrow">Anbefalte neste steg</p>
              <h2>Slik går du videre</h2>
              <ol>
                {article.nextSteps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
              {article.cta && (
                <Link className="contact-button" href={article.cta.href}>
                  {article.cta.label} <ArrowRight size={17} />
                </Link>
              )}
            </section>

            <section className="article-faq">
              <p className="eyebrow">Vanlige spørsmål</p>
              <h2>FAQ</h2>
              <div className="faq-accordion">
                {article.faq.map((item, index) => (
                  <details key={item.question} open={index === 0}>
                    <summary>{item.question}</summary>
                    <p>{item.answer}</p>
                  </details>
                ))}
              </div>
            </section>
          </article>

          <aside className="article-aside">
            <section className="article-help">
              <p className="eyebrow">Trenger du hjelp?</p>
              <h3>Få en personlig vurdering</h3>
              <p>
                {isCorporate
                  ? "Vi hjelper virksomheten å vurdere modell, budsjett, område, boligtype, drift og neste steg."
                  : "Vi hjelper deg å vurdere område, budsjett, boligtype, risiko og neste steg før du reserverer."}
              </p>
              <Link className="contact-button" href={isCorporate ? "/bedriftshytte-spania#bedriftsvurdering" : "/booking"}>
                {isCorporate ? "Be om bedriftsvurdering" : "Få rådgivning"} <ArrowRight size={17} />
              </Link>
            </section>

            {(silo === "guide" || relatedArticles.length > 0) && (
              <section className="article-related">
                <p className="eyebrow">Les videre</p>
                <h3>{silo === "guide" ? "Hovedguide og relaterte guider" : "Relaterte artikler"}</h3>
                <nav>
                  {silo === "guide" && (
                    <Link href="/guide/kjope-bolig-i-spania">
                      <span>Kjøpe bolig i Spania – komplett hovedguide</span><ArrowRight size={15} />
                    </Link>
                  )}
                  {relatedArticles.map((item) => (
                    <Link key={item.slug} href={articlePath(item)}>
                      <span>{item.title}</span><ArrowRight size={15} />
                    </Link>
                  ))}
                </nav>
              </section>
            )}
          </aside>
        </div>
      </section>
    </>
  );
}

/** Delt metadata-bygger for artikkelsidene (kanonisk = silo-sti). */
export function buildArticleMetadata(article: Article) {
  const canonicalPath = articleBasePath(article) + `/${article.slug}`;
  return {
    title: { absolute: article.seoTitle },
    description: article.seoDescription,
    keywords: article.keywords,
    alternates: { canonical: canonicalPath },
    openGraph: {
      title: article.seoTitle,
      description: article.seoDescription,
      url: `${BASE}${canonicalPath}`,
      type: "article" as const,
      publishedTime: article.date,
      modifiedTime: article.updated,
      images: [{ url: article.image, alt: article.imageAlt }],
    },
  };
}
