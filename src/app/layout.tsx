import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zen Eco Homes | Nybygg i Spania",
  description:
    "Norsk rådgiver for moderne nybygg, energieffektive boliger og trygge kjøp på Costa Blanca og Costa Calida.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="no">
      <body>{children}</body>
    </html>
  );
}
