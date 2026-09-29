import type { NextConfig } from "next";

// Konsolidert config (tidligere delt mellom next.config.ts og .mjs – Next bruker
// bare én fil, så images-/turbopack-config kunne bli ignorert).
const nextConfig: NextConfig = {
  turbopack: {
    root: import.meta.dirname,
  },
  images: {
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
      ["kjopsprosess-bolig-i-spania", "kjopsprosess"],
      ["finansiering-notar-nie-boligkjop-spania", "guide"],
      ["omradeguide-eiendomskjop-i-spania", "guide"],
      ["guide-tomtekjop-bygging-i-spania", "guide"],
      ["kjop-bolig-i-spania-na-eller-vente", "guide"],
      ["nybygg-finestrat-omradeguide", "guide"],
      ["lopende-kostnader-eie-bolig-spania", "guide"],
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
      { source: "/kjopsprosess/lopende-kostnader-eie-bolig-spania", destination: "/guide/lopende-kostnader-eie-bolig-spania", permanent: true },
      { source: "/kjopsprosess/juridiske-fallgruver-boligkjop-spania", destination: "/guide/juridiske-fallgruver-boligkjop-spania", permanent: true },
      { source: "/kjopsprosess/skatt-ved-salg-bolig-spania", destination: "/guide/skatt-ved-salg-bolig-spania", permanent: true },
      { source: "/kjopsprosess/arv-gaveskatt-bolig-spania", destination: "/guide/arv-gaveskatt-bolig-spania", permanent: true },
      { source: "/kjopsprosess/nie-skattenummer-spania", destination: "/guide/nie-skattenummer-spania", permanent: true },
      { source: "/kjopsprosess/spansk-bankkonto-valutaveksling", destination: "/guide/spansk-bankkonto-valutaveksling", permanent: true },
      { source: "/kjopsprosess/boliglan-spansk-bank-nordmenn", destination: "/guide/boliglan-spansk-bank-nordmenn", permanent: true },
      { source: "/juridiske-fallgruver-boligkjop-spania", destination: "/guide/juridiske-fallgruver-boligkjop-spania", permanent: true },
      { source: "/nie-skattenummer-spania", destination: "/guide/nie-skattenummer-spania", permanent: true },
      { source: "/hvorfor-god-eiendomsradgiver-er-viktig", destination: "/magasin/hvorfor-god-eiendomsradgiver-er-viktig", permanent: true },
      { source: "/idealista-finn-ikke-alltid-til-a-stole-pa", destination: "/magasin/idealista-finn-ikke-alltid-til-a-stole-pa", permanent: true },
      { source: "/guide/omradeguide", destination: "/guide/omradeguide-eiendomskjop-i-spania", permanent: true },
      { source: "/nybygg-costa-blanca", destination: "/guide/nybygg-i-spania", permanent: true },
      { source: "/nybygg-i-spania", destination: "/guide/nybygg-i-spania", permanent: true },
      { source: "/om-freddy", destination: "/om-oss/freddy", permanent: true },
      { source: "/inland", destination: "/omrader/innlandet", permanent: true },
      { source: "/inland/:sted", destination: "/omrader/innlandet/:sted", permanent: true },
      { source: "/tomter", destination: "/omrader/innlandet/tomter", permanent: true },
      { source: "/kjopsprosess/kjopsprosess-bolig-i-spania", destination: "/guide/kjope-bolig-i-spania", permanent: true },
      { source: "/kjopsprosess/finansiering-notar-nie-boligkjop-spania", destination: "/guide/finansiering-notar-nie-boligkjop-spania", permanent: true },
      { source: "/kjopsprosess/omkostninger-nybygg-spania", destination: "/guide/omkostninger-nybygg-spania", permanent: true },
      { source: "/kjopsprosess/bankgaranti-nybygg-spania", destination: "/guide/bankgaranti-nybygg-spania", permanent: true },
      ...siloRedirects,
    ];
  },
};

export default nextConfig;
