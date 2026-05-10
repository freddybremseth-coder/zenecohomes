import type { Metadata } from "next";
import Script from "next/script";
import { ZenecoChatbot } from "@/components/ZenecoChatbot";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.zenecohomes.com"),
  title: {
    default: "Zen Eco Homes | Nybygg i Spania",
    template: "%s | Zen Eco Homes",
  },
  description:
    "Norsk rådgiver for moderne nybygg, energieffektive boliger og trygge kjøp på Costa Blanca, Costa Blanca Sør og Costa Calida.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Zen Eco Homes | Nybygg i Spania",
    description:
      "Finn moderne nybygg på Costa Blanca og Costa Calida med norsk rådgivning, områdeguider og trygg kjøpsreise.",
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
          "Norsk rådgiver for boligkjøp, nybygg, tomter og eiendomsprosjekter i Spania, med særlig fokus på Costa Blanca og Costa Cálida.",
        areaServed: ["Costa Blanca", "Costa Blanca Nord", "Costa Blanca Sør", "Costa Cálida", "Alicante", "Spania"],
        knowsAbout: [
          "Boligkjøp i Spania",
          "Nybygg i Spania",
          "Costa Blanca",
          "Costa Blanca Nord",
          "Tomtekjøp i Spania",
          "Kjøpsprosess i Spania",
          "Eiendomsrådgivning for nordmenn",
        ],
        founder: {
          "@type": "Person",
          name: "Freddy Bremseth",
          url: "https://www.freddybremseth.com",
          knowsAbout: ["Eiendom i Spania", "Rådgivning", "Salg", "AI og digital strategi"],
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
      </body>
    </html>
  );
}
