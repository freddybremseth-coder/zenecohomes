import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SeoLandingView } from "@/components/SeoLandingView";
import { getSeoLandingPage } from "@/lib/seoLandingPages";

const PAGE_SLUG = "nybygg-i-spania";

export const metadata: Metadata = {
  title: { absolute: "Nybygg i Spania | Moderne bolig med norsk rådgivning" },
  description:
    "Se nybygg i Spania og få hjelp til å vurdere prosjekt, utbygger, betalingsplan, område, pris, leveranse og trygg kjøpsprosess før reservasjon.",
  alternates: { canonical: "/guide/nybygg-i-spania" },
};

export default function NewBuildSpainGuide() {
  const page = getSeoLandingPage(PAGE_SLUG);
  if (!page) notFound();

  return <SeoLandingView page={page} locale="no" canonicalPath="/guide/nybygg-i-spania" />;
}
