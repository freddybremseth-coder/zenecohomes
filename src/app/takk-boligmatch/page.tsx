import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Takk for Boligmatch | Zen Eco Homes",
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
};

export default function ThankYouPage() {
  return <main className="mx-auto max-w-2xl px-5 py-24 text-center">
    <h1 className="text-3xl font-bold">Takk for Boligmatch</h1>
    <p className="mt-5 text-lg">Vi har mottatt ønskene dine. Du kan også se boliger som passer kriteriene dine.</p>
    <p className="mt-8"><Link href="/" className="underline">Til forsiden</Link></p>
  </main>;
}
