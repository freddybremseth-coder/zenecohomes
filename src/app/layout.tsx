import type { Metadata } from "next";
import Script from "next/script";
import { ZenecoChatbot } from "@/components/ZenecoChatbot";
import { RemasterPlayer } from "@/components/RemasterPlayer";
import "./globals.css";
import "./accessibility.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.zenecohomes.com"),
  title: {
    default: "Zen Eco Homes | Moderne nybygg i Spania",
    template: "%s | Zen Eco Homes",
  },
  description:
    "Norsk eiendomsrådgivning for moderne nybygg, villaer, leiligheter og tomter på Costa Blanca, Costa Blanca Sør, Costa Cálida og utvalgte innlandsområder.",
  alternates: {
    canonical: "/",
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
          name: "Freddy Bremseth",
          url: "https://www.zenecohomes.com/om-freddy",
          knowsAbout: ["Eiendom i Spania", "Rådgivning", "Salg", "Digitale systemer"],
        },
        sameAs: ["https://www.freddybremseth.com"],
      },
    ],
  };

  return (
    <html lang="no">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        {children}
        <Script
          src="https://appointment.chatgenius.pro/embed.js"
          strategy="afterInteractive"
          data-brand="zen"
          data-config-url="https://realtyflow.chatgenius.pro/api/public/booking-config?brand_id=zeneco"
        />
        <ZenecoChatbot />
        <RemasterPlayer />
      </body>
    </html>
  );
}