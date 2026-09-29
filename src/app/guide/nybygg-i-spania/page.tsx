import type { Metadata } from "next";
import { SeoLandingView } from "@/components/SeoLandingView";
import { getSeoLandingPage } from "@/lib/seoLandingPages";

const page = getSeoLandingPage("nybygg-i-spania")!;

export const metadata: Metadata = {
  title: "Nybygg i Spania | Guide til trygt boligkjøp",
  description: "Nybygg i Spania: vurder område, utbygger, betalingsplan, garantier, kostnader og overtakelse før du reserverer bolig.",
  alternates: { canonical: "/guide/nybygg-i-spania" },
};

export default function NewBuildGuidePage() {
  return <SeoLandingView page={{ ...page, slug: "guide/nybygg-i-spania" }} locale="no" />;
}
