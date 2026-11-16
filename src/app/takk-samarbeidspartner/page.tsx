import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Takk for interessen | Zen Eco Homes",
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
};

export default function ConfirmationPage() {
  return (
    <main style={{ maxWidth: 740, margin: "100px auto", padding: "32px 24px", minHeight: "45vh" }}>
      <h1>Takk for interessen</h1>
      <p>Vi har registrert henvendelsen om samarbeid og tar kontakt.</p>
      <p><Link href="/">Tilbake til forsiden</Link></p>
    </main>
  );
}
