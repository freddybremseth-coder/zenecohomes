import type { Metadata } from "next";
import { BuyerMatchThankYou } from "@/components/BuyerMatchThankYou";

export const metadata: Metadata = {
  title: "Takk for Boligmatch | Zen Eco Homes",
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
};

export default function ThankYouPage() {
  return <BuyerMatchThankYou />;
}
