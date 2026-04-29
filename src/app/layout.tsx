import type { Metadata } from "next";
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
      <body>{children}</body>
    </html>
  );
}
