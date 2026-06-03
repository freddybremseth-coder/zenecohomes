import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SeoLandingView } from "@/components/SeoLandingView";
import { getSeoLandingPageEN, seoLandingPagesEN } from "@/lib/seoLandingPages.en";
import { localSeoLandingPagesEN } from "@/lib/localSeoLandingPages.en";
import { findEquivalentBySlug, ogLocale, seoHreflang } from "@/lib/i18n";

const BASE = "https://www.zenecohomes.com";
const allEN = [...seoLandingPagesEN, ...localSeoLandingPagesEN];

function getPage(slug: string) {
  return getSeoLandingPageEN(slug) || localSeoLandingPagesEN.find((p) => p.slug === slug);
}

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return allEN.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getPage(slug);
  if (!page) {
    return { title: "Page not found | Zen Eco Homes" };
  }
  const eq = findEquivalentBySlug("en", slug);
  return {
    title: page.seoTitle,
    description: page.seoDescription,
    alternates: {
      canonical: `/en/${slug}`,
      languages: eq ? seoHreflang(eq) : undefined,
    },
    openGraph: {
      title: page.seoTitle,
      description: page.seoDescription,
      url: `${BASE}/en/${slug}`,
      locale: ogLocale.en,
      type: "website",
    },
  };
}

export default async function EnglishSeoLandingPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getPage(slug);
  if (!page) notFound();
  const eq = findEquivalentBySlug("en", slug);
  return <SeoLandingView page={page} locale="en" eq={eq} />;
}
