import type { NextConfig } from "next";

// Konsolidert config (tidligere delt mellom next.config.ts og .mjs – Next bruker
// bare én fil, så images-/turbopack-config kunne bli ignorert).
const nextConfig: NextConfig = {
  turbopack: {
    root: import.meta.dirname,
  },
  images: {
    qualities: [70, 75],
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "realtyflow.chatgenius.pro" },
      { protocol: "https", hostname: "*.apinmo.com" },
      { protocol: "https", hostname: "upload.wikimedia.org" },
    ],
  },
  async redirects() {
    // Artikler som er flyttet fra /magasin til innholdssiloer. Holdes i synk med
    // SILO_BY_SLUG i src/lib/magazine.ts. 301 for å bevare SEO-verdi.
    const corporateArticleSlugs = [
      "hva-er-en-bedriftshytte-i-spania",
      "bedriftshytte-mot-hotell-og-leie",
      "kan-ansatte-bruke-bedriftseid-bolig-i-spania",
      "fem-mater-bedrifter-kan-bruke-bolig-costa-blanca",
      "hvilken-bolig-passer-som-bedriftshytte",
      "medlemsbolig-i-spania-for-foreninger",
      "vedlikehold-nokkelhold-og-rengjoring-bedriftshytte",
      "kjop-av-bolig-gjennom-selskap-i-spania",
      "slik-presenterer-du-bedriftshytte-for-styret",
      "partnerguide-introdusere-zen-corporate-homes",
    ];
    const corporateLegacyRedirects = corporateArticleSlugs.map((slug) => ({
      source: `/magasin/${slug}`,
      destination: `/bedriftshytte-spania/${slug}`,
      permanent: true,
    }));

    const corporateMergedTargets: Record<string, string> = {
      "alicante-eller-valencia-flyplass-bedriftshytte": "hvilken-bolig-passer-som-bedriftshytte",
      "bedriftsvilla-eller-ansattleilighet": "hvilken-bolig-passer-som-bedriftshytte",
      "bedriftshytte-for-25-ansatte": "kan-ansatte-bruke-bedriftseid-bolig-i-spania",
      "bedriftshytte-for-100-ansatte": "kan-ansatte-bruke-bedriftseid-bolig-i-spania",
      "drifte-bedriftshytte-i-spania-fra-norge": "vedlikehold-nokkelhold-og-rengjoring-bedriftshytte",
      "nybygg-eller-bruktbolig-som-bedriftshytte": "hvilken-bolig-passer-som-bedriftshytte",
      "hvor-mange-kan-dele-en-bedriftshytte": "kan-ansatte-bruke-bedriftseid-bolig-i-spania",
      "costa-blanca-nord-eller-sor-bedriftshytte": "hvilken-bolig-passer-som-bedriftshytte",
      "fem-feil-ved-kjop-av-bedriftshytte-i-spania": "slik-presenterer-du-bedriftshytte-for-styret",
      "rettferdig-bookingsystem-for-bedriftshytte": "kan-ansatte-bruke-bedriftseid-bolig-i-spania",
      "bedriftshytte-som-langsiktig-ansattgode": "kan-ansatte-bruke-bedriftseid-bolig-i-spania",
      "corporate-home-assessment-bedriftsvurdering": "slik-presenterer-du-bedriftshytte-for-styret",
      "firmabolig-for-ledersamlinger-og-team": "fem-mater-bedrifter-kan-bruke-bolig-costa-blanca",
      "delt-bedriftshytte-for-flere-virksomheter": "medlemsbolig-i-spania-for-foreninger",
      "ledersamling-avdelingsreise-spania-hotell-eller-bedriftshytte": "bedriftshytte-mot-hotell-og-leie",
      "slik-beregner-cfo-hotellalternativ-bedriftshytte": "bedriftshytte-mot-hotell-og-leie",
      "bedriftshytte-styre-ledelse-avdelingsreiser-krav": "hvilken-bolig-passer-som-bedriftshytte",
      "arsbudsjett-bedriftshytte-spania": "bedriftshytte-mot-hotell-og-leie",
      "prisvekst-bolig-spania-business-case-bedriftshytte": "bedriftshytte-mot-hotell-og-leie",
      "feriebruk-vs-bedriftsbruk-firmabolig-spania": "fem-mater-bedrifter-kan-bruke-bolig-costa-blanca",
      "beslutningsnotat-bedriftshytte-spania-mal": "slik-presenterer-du-bedriftshytte-for-styret",
      "bedriftshytte-alternativ-hotell-gjentatte-samlinger": "bedriftshytte-mot-hotell-og-leie",
      "storrelse-bolig-styre-teamsamlinger": "hvilken-bolig-passer-som-bedriftshytte",
      "kombinere-ansattgode-bedriftsbruk-samme-bolig": "fem-mater-bedrifter-kan-bruke-bolig-costa-blanca",
      "regnskapsforer-sporsmal-selskap-kjope-bolig-spania": "kjop-av-bolig-gjennom-selskap-i-spania",
      "partnerprosess-introduksjon-til-kjop": "partnerguide-introdusere-zen-corporate-homes",
    };
    const corporateMergedRedirects = Object.entries(corporateMergedTargets).flatMap(([sourceSlug, targetSlug]) => [
      {
        source: `/bedriftshytte-spania/${sourceSlug}`,
        destination: `/bedriftshytte-spania/${targetSlug}`,
        permanent: true,
      },
      {
        source: `/corporate/${sourceSlug}`,
        destination: `/bedriftshytte-spania/${targetSlug}`,
        permanent: true,
      },
      {
        source: `/magasin/${sourceSlug}`,
        destination: `/bedriftshytte-spania/${targetSlug}`,
        permanent: true,
      },
    ]);

    const marketComparisonLegacySlugs = [
      "costa-blanca-nord-500000-euro-hva-kjope-na",
      "benidorm-villa-456000-vs-516000",
      "finestrat-villa-650000-700000-735000",
      "villajoyosa-275000-vs-375000",
      "costa-blanca-nord-under-300000-tre-kjop",
      "600000-euro-benidorm-polop-finestrat",
      "finestrat-430000-leilighet-eller-bungalow",
      "finestrat-rundt-700000-114-155-314-m2",
      "finestrat-735000-vs-735950",
    ];
    const marketComparisonRedirects = marketComparisonLegacySlugs.map((slug) => ({
      source: `/magasin/${slug}`,
      destination: "/magasin/hva-far-du-for-pengene-costa-blanca-nord-na",
      permanent: true,
    }));

    const siloRedirects = [
      ["finansiere-bolig-i-spania", "guide"],
      ["omradeguide-eiendomskjop-i-spania", "guide"],
      ["guide-tomtekjop-bygging-i-spania", "guide"],
      ["utleie-inntektspotensial-bolig-spania", "guide"],
      ["lopende-kostnader-eie-bolig-spania", "guide"],
      ["flytte-til-spania-som-pensjonist", "guide"],
      ["juridiske-fallgruver-boligkjop-spania", "guide"],
      ["skatt-ved-salg-bolig-spania", "guide"],
      ["arv-gaveskatt-bolig-spania", "guide"],
      ["nie-skattenummer-spania", "guide"],
      ["spansk-bankkonto-valutaveksling", "guide"],
      ["boliglan-spansk-bank-nordmenn", "guide"],
    ].map(([slug, silo]) => ({
      source: `/magasin/${slug}`,
      destination: `/${silo}/${slug}`,
      permanent: true,
    }));

    const contentConsolidationRedirects = [
      ["/guide/nybygg-finestrat-omradeguide", "/omrader/costa-blanca-nord/finestrat"],
      ["/magasin/nybygg-finestrat-omradeguide", "/omrader/costa-blanca-nord/finestrat"],
      ["/kjopsprosess/nybygg-finestrat-omradeguide", "/omrader/costa-blanca-nord/finestrat"],
      ["/guide/finansiering-notar-nie-boligkjop-spania", "/guide/finansiere-bolig-i-spania"],
      ["/magasin/finansiering-notar-nie-boligkjop-spania", "/guide/finansiere-bolig-i-spania"],
      ["/kjopsprosess/finansiering-notar-nie-boligkjop-spania", "/guide/finansiere-bolig-i-spania"],
      ["/guide/innlandet-finca-olivengard-spania", "/omrader/innlandet"],
      ["/magasin/innlandet-finca-olivengard-spania", "/omrader/innlandet"],
      ["/kjopsprosess/innlandet-finca-olivengard-spania", "/omrader/innlandet"],
      ["/guide/omkostninger-nybygg-spania", "/guide/nybygg-i-spania"],
      ["/magasin/omkostninger-nybygg-spania", "/guide/nybygg-i-spania"],
      ["/kjopsprosess/omkostninger-nybygg-spania", "/guide/nybygg-i-spania"],
      ["/guide/bankgaranti-nybygg-spania", "/guide/nybygg-i-spania"],
      ["/magasin/bankgaranti-nybygg-spania", "/guide/nybygg-i-spania"],
      ["/kjopsprosess/bankgaranti-nybygg-spania", "/guide/nybygg-i-spania"],
      ["/guide/energieffektive-nybygg-spania", "/guide/nybygg-i-spania"],
      ["/magasin/energieffektive-nybygg-spania", "/guide/nybygg-i-spania"],
      ["/kjopsprosess/energieffektive-nybygg-spania", "/guide/nybygg-i-spania"],
      ["/guide/kjop-bolig-i-spania-na-eller-vente", "/magasin/kjop-bolig-i-spania-na-eller-vente"],
      ["/kjopsprosess/kjop-bolig-i-spania-na-eller-vente", "/magasin/kjop-bolig-i-spania-na-eller-vente"],
    ].map(([source, destination]) => ({ source, destination, permanent: true }));

    // Tidligere guideinnhold har ligget under /kjopsprosess. Fang hele den gamle
    // flaten, ikke bare URL-ene vi tilfeldigvis kjenner fra Search Console.
    const legacyKjopsprosessSlugs = [
      "finansiere-bolig-i-spania",
      "omradeguide-eiendomskjop-i-spania",
      "guide-tomtekjop-bygging-i-spania",
      "utleie-inntektspotensial-bolig-spania",
      "lopende-kostnader-eie-bolig-spania",
      "flytte-til-spania-som-pensjonist",
      "juridiske-fallgruver-boligkjop-spania",
      "skatt-ved-salg-bolig-spania",
      "arv-gaveskatt-bolig-spania",
      "nie-skattenummer-spania",
      "spansk-bankkonto-valutaveksling",
      "boliglan-spansk-bank-nordmenn",
    ];
    const legacyKjopsprosessRedirects = legacyKjopsprosessSlugs.map((slug) => ({
      source: `/kjopsprosess/${slug}`,
      destination: `/guide/${slug}`,
      permanent: true,
    }));

    return [
      ...corporateMergedRedirects,
      { source: "/corporate/:slug", destination: "/bedriftshytte-spania/:slug", permanent: true },
      { source: "/slik-hjelper-vi-deg", destination: "/kjopsprosessen", permanent: true },
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "zenecohomes.com",
          },
        ],
        destination: "https://www.zenecohomes.com/:path*",
        permanent: true,
      },
      { source: "/kjopsprosess", destination: "/kjopsprosessen", permanent: true },
      { source: "/guide/kjopsprosess-bolig-i-spania", destination: "/guide/kjope-bolig-i-spania", permanent: true },
      { source: "/magasin/kjopsprosess-bolig-i-spania", destination: "/guide/kjope-bolig-i-spania", permanent: true },
      { source: "/juridiske-fallgruver-boligkjop-spania", destination: "/guide/juridiske-fallgruver-boligkjop-spania", permanent: true },
      { source: "/nie-skattenummer-spania", destination: "/guide/nie-skattenummer-spania", permanent: true },
      { source: "/hvorfor-god-eiendomsradgiver-er-viktig", destination: "/magasin/hvorfor-god-eiendomsradgiver-er-viktig", permanent: true },
      { source: "/idealista-finn-ikke-alltid-til-a-stole-pa", destination: "/magasin/idealista-finn-ikke-alltid-til-a-stole-pa", permanent: true },
      { source: "/guide/omradeguide", destination: "/guide/omradeguide-eiendomskjop-i-spania", permanent: true },
      { source: "/guide/flytte-til-spania-pensjonist", destination: "/guide/flytte-til-spania-som-pensjonist", permanent: true },
      { source: "/magasin/flytte-til-spania-pensjonist", destination: "/guide/flytte-til-spania-som-pensjonist", permanent: true },
      { source: "/kjopsprosess/flytte-til-spania-pensjonist", destination: "/guide/flytte-til-spania-som-pensjonist", permanent: true },
      { source: "/flytte-til-spania-pensjonist", destination: "/guide/flytte-til-spania-som-pensjonist", permanent: true },
      { source: "/flytte-til-spania-som-pensjonist", destination: "/guide/flytte-til-spania-som-pensjonist", permanent: true },
      { source: "/nybygg-costa-blanca", destination: "/guide/nybygg-i-spania", permanent: true },
      { source: "/nybygg-i-spania", destination: "/guide/nybygg-i-spania", permanent: true },
      { source: "/bolig-i-spania", destination: "/guide/kjope-bolig-i-spania", permanent: true },
      { source: "/tomt-i-spania", destination: "/omrader/innlandet/tomter", permanent: true },
      { source: "/bolig-i-altea", destination: "/omrader/costa-blanca-nord/altea", permanent: true },
      { source: "/bolig-i-albir", destination: "/omrader/costa-blanca-nord/albir", permanent: true },
      { source: "/bolig-i-calpe", destination: "/omrader/costa-blanca-nord/calpe", permanent: true },
      { source: "/bolig-i-finestrat", destination: "/omrader/costa-blanca-nord/finestrat", permanent: true },
      { source: "/bolig-i-polop", destination: "/omrader/costa-blanca-nord/polop", permanent: true },
      { source: "/bolig-i-pinoso", destination: "/omrader/innlandet/pinoso", permanent: true },
      { source: "/om-freddy", destination: "/om-oss/freddy", permanent: true },
      { source: "/om-oss/om-freddy", destination: "/om-oss/freddy", permanent: true },
      { source: "/om-oss/om-andrea", destination: "/om-oss/andrea", permanent: true },
      { source: "/inland", destination: "/omrader/innlandet", permanent: true },
      { source: "/inland/:sted", destination: "/omrader/innlandet/:sted", permanent: true },
      { source: "/tomter", destination: "/omrader/innlandet/tomter", permanent: true },
      { source: "/kjopsprosess/kjopsprosess-bolig-i-spania", destination: "/guide/kjope-bolig-i-spania", permanent: true },
      ...legacyKjopsprosessRedirects,
      ...contentConsolidationRedirects,
      ...marketComparisonRedirects,
      ...siloRedirects,
      ...corporateLegacyRedirects,
    ];
  },
};

export default nextConfig;
