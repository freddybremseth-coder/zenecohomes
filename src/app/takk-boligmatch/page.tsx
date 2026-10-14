import type { Metadata } from "next";
import { Suspense } from "react";
import { BuyerMatchThankYou } from "@/components/BuyerMatchThankYou";

export const metadata: Metadata = {
  title: "Takk for Boligmatch | Zen Eco Homes",
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
};

export default function ThankYouPage() {
  return <Suspense fallback={<main className="mx-auto max-w-2xl px-5 py-24">Laster boligmatch…</main>}><BuyerMatchThankYou /></Suspense>;
}
