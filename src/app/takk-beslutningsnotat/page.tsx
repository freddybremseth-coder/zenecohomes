import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Takk for forespørselen | Zen Eco Homes",
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
};

export default function ConfirmationPage() {
  return (
    <main style={{ maxWidth: 740, margin: "100px auto", padding: "32px 24px", minHeight: "45vh" }}>
      <h1>Takk for forespørselen</h1>
      <p>Forespørselen om beslutningsnotat er registrert. Vi følger den opp. Dersom dokumentet ikke er sendt automatisk, tar vi kontakt.</p>
      <p><Link href="/">Tilbake til forsiden</Link></p>
    </main>
  );
}
