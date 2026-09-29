import type { Metadata } from "next";
import { SeoLandingView } from "@/components/SeoLandingView";
import { findEquivalentBySlug, seoHreflang } from "@/lib/i18n";
import { getSeoLandingPage } from "@/lib/seoLandingPages";
import { readZenEcoSeoOverride } from "@/lib/seo-public-overrides";

const page = getSeoLandingPage("nybygg-i-spania")!;
const eq = findEquivalentBySlug("no", "guide/nybygg-i-spania");

export async function generateMetadata(): Promise<Metadata> {
  const approved = await readZenEcoSeoOverride("guide/nybygg-i-spania");
  const title = approved?.seo_title || "Nybygg i Spania | Guide for tryggere boligkjøp i 2026";
  const description =
    approved?.seo_description ||
    "Nybygg i Spania: vurder område, utbygger, betalingsplan, garantier, kostnader og overtakelse før du reserverer bolig eller prosjekt i Spania.";
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: "/guide/nybygg-i-spania", languages: eq ? seoHreflang(eq) : undefined },
  };
}

export default function NewBuildGuidePage() {
  return <SeoLandingView page={{ ...page, slug: "guide/nybygg-i-spania" }} locale="no" eq={eq} guideMeta={{ author: "Freddy Bremseth", authorHref: "/om-oss/freddy", updated: "2026-09-29" }} />;
}
