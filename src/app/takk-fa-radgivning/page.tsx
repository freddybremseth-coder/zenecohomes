import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Takk for henvendelsen | Zen Eco Homes",
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
};

export default function ConfirmationPage() {
  return (
    <main style={{ maxWidth: 740, margin: "100px auto", padding: "32px 24px", minHeight: "45vh" }}>
      <h1>Takk for henvendelsen</h1>
      <p>Vi har registrert henvendelsen. En rådgiver følger den opp.</p>
      <p><Link href="/">Tilbake til forsiden</Link></p>
    </main>
  );
}
