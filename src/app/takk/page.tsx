import Link from "next/link";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "Takk for din henvendelse | Zen Eco Homes", robots: { index: false, follow: false } };
export default function ThanksPage() {
  return <main style={{ maxWidth: 740, margin: "100px auto", padding: "32px 24px", minHeight: "45vh" }}>
    <h1>Takk for din henvendelse</h1>
    <p>Vi vil ta kontakt med deg så raskt vi har anledning.</p>
    <Link href="/">Tilbake til forsiden</Link>
  </main>;
}
