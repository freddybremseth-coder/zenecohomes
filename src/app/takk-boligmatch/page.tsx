import type { Metadata } from "next";
import { Suspense } from "react";
import { BuyerMatchThankYou } from "@/components/BuyerMatchThankYou";

export const metadata: Metadata = {
  title: "Takk for Boligmatch | Zen Eco Homes",
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
};
export default function BuyerMatchConfirmationPage() {
  return <Suspense fallback={<main style={{ padding: "100px 24px" }}>Laster boligmatch …</main>}><BuyerMatchThankYou /></Suspense>;
}
