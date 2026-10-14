import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Takk for interessen | Zen Eco Homes",
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
};

export default function ThankYouPage() {
  return <main className="mx-auto max-w-2xl px-5 py-24 text-center">
    <h1 className="text-3xl font-bold">Takk for interessen</h1>
    <p className="mt-5 text-lg">Vi har mottatt henvendelsen om samarbeid.</p>
    <p className="mt-8"><Link href="/" className="underline">Til forsiden</Link></p>
  </main>;
}
