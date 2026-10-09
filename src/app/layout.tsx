import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import Script from "next/script";
import { LazyZenecoChatbot } from "@/components/LazyZenecoChatbot";
import { SearchDiscoveryTracker } from "@/components/SearchDiscoveryTracker";
import "leaflet/dist/leaflet.css";
import "./globals.css";
import "./accessibility.css";
import "./quality.css";
import "./design-system.css";
import "./signature.css";
import "./premium.css";
import "./mobile-2027.css";
import "./inland-2027.css";
import "./inland-town-2027.css";
import "./assessment-2027.css";
import "./gallery-2027.css";
import "./chatbot-2027.css";
import "./areas-2027.css";
import "./mobile-critical.css";
import "./area-map-2027.css";
import "./corporate-2027.css";
import "./prod-layout-fixes.css";
import "./homepage-v1.css";
import "./properties-v2.css";
import "./advisor-portraits.css";
import "./areas-regions-v2.css";
import "./contrast-standards.css";
import "./area-reading-mobile.css";
import "./area-facts.css";
import "./sitewide-contrast.css";

const zenecoSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const zenecoDisplay = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.zenecohomes.com"),
  title: "Zen Eco Homes | Moderne nybygg i Spania",
  description:
    "Norsk eiendomsrådgivning for moderne nybygg, villaer, leiligheter og tomter på Costa Blanca, Costa Blanca Sør, Costa Cálida og utvalgte innlandsområder.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/assets/zeneco-mark.svg?v=20260926-3", type: "image/svg+xml" }],
    shortcut: "/assets/zeneco-mark.svg?v=20260926-3",
    apple: "/assets/zeneco-mark.svg?v=20260926-3",
  },
  openGraph: {
    title: "Zen Eco Homes | Moderne nybygg i Spania",
    description:
      "Finn og sammenlign moderne nybygg på Costa Blanca og Costa Cálida med områdeguider, kjøperfokus og en strukturert kjøpsreise.",
    url: "https://www.zenecohomes.com",
    siteName: "Zen Eco Homes",
    locale: "nb_NO",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.zenecohomes.com/#website",
        url: "https://www.zenecohomes.com",
        name: "Zen Eco Homes",
        inLanguage: "no",
        potentialAction: {
          "@type": "SearchAction",
          target: "https://www.zenecohomes.com/eiendommer?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": ["Organization", "RealEstateAgent", "LocalBusiness"],
        "@id": "https://www.zenecohomes.com/#organization",
        name: "Zen Eco Homes",
        url: "https://www.zenecohomes.com",
        description:
          "Eiendomsrådgivning for moderne nybygg, villaer, leiligheter, tomter og eiendomsprosjekter i Spania, med særlig fokus på Costa Blanca og Costa Cálida.",
        telephone: "+4796009965",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Benidorm",
          addressRegion: "Alicante / Costa Blanca",
          addressCountry: "ES",
        },
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: "+4796009965",
            contactType: "sales",
            areaServed: ["NO", "ES"],
            availableLanguage: ["Norwegian", "English", "Spanish"],
          },
          {
            "@type": "ContactPoint",
            telephone: "+34624297325",
            contactType: "sales",
            areaServed: ["ES", "NO"],
            availableLanguage: ["Spanish", "English", "Norwegian"],
          },
        ],
        areaServed: ["Benidorm", "Biar", "Costa Blanca", "Costa Blanca Nord", "Costa Blanca Sør", "Costa Cálida", "Alicante", "Spania"],
        knowsAbout: [
          "Boligkjøp i Spania",
          "Moderne nybygg i Spania",
          "Costa Blanca",
          "Costa Blanca Nord",
          "Tomtekjøp i Spania",
          "Kjøpsprosess i Spania",
          "Eiendomsrådgivning for nordmenn",
        ],
        founder: {
          "@type": "Person",
          "@id": "https://www.freddybremseth.com/#person",
          name: "Freddy Bremseth",
          url: "https://www.freddybremseth.com/",
          knowsAbout: ["Eiendom i Spania", "Rådgivning", "Salg", "Digitale systemer"],
        },
      },
    ],
  };

  return (
    <html lang="no" className={`${zenecoSans.variable} ${zenecoDisplay.variable}`}>
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-CLD2P12KW2"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CLD2P12KW2');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        {children}
        <LazyZenecoChatbot />
        <SearchDiscoveryTracker />
      </body>
    </html>
  );
}
