import type { Metadata } from "next";
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
  return (
    <html lang="no">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              name: "Zen Eco Homes",
              url: "https://www.zenecohomes.com",
              areaServed: ["Costa Blanca", "Costa Calida", "Spania"],
              knowsAbout: ["Nybygg i Spania", "Costa Blanca", "Costa Calida", "Boligkjøp i Spania"],
              sameAs: [],
            }),
          }}
        />
        {children}
        <ZenecoChatbot />
      </body>
    </html>
  );
}
