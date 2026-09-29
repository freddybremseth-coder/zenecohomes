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
    const siloRedirects = [
      ["omkostninger-nybygg-spania", "guide"],
      ["bankgaranti-nybygg-spania", "guide"],
      ["finansiering-notar-nie-boligkjop-spania", "guide"],
      ["omradeguide-eiendomskjop-i-spania", "guide"],
      ["guide-tomtekjop-bygging-i-spania", "guide"],
      ["kjop-bolig-i-spania-na-eller-vente", "guide"],
      ["nybygg-finestrat-omradeguide", "guide"],
      ["utleie-inntektspotensial-bolig-spania", "guide"],
      ["lopende-kostnader-eie-bolig-spania", "guide"],
      ["innlandet-finca-olivengard-spania", "guide"],
      ["flytte-til-spania-som-pensjonist", "guide"],
      ["energieffektive-nybygg-spania", "guide"],
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

    // Tidligere guideinnhold har ligget under /kjopsprosess. Fang hele den gamle
    // flaten, ikke bare URL-ene vi tilfeldigvis kjenner fra Search Console.
    const legacyKjopsprosessSlugs = [
      "omradeguide-eiendomskjop-i-spania",
      "guide-tomtekjop-bygging-i-spania",
      "kjop-bolig-i-spania-na-eller-vente",
      "finansiering-notar-nie-boligkjop-spania",
      "omkostninger-nybygg-spania",
      "bankgaranti-nybygg-spania",
      "nybygg-finestrat-omradeguide",
      "utleie-inntektspotensial-bolig-spania",
      "lopende-kostnader-eie-bolig-spania",
      "innlandet-finca-olivengard-spania",
      "flytte-til-spania-som-pensjonist",
      "energieffektive-nybygg-spania",
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
      ...siloRedirects,
    ];
  },
};

export default nextConfig;
