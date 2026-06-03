import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SeoLandingView } from "@/components/SeoLandingView";
import { getSeoLandingPageDE, seoLandingPagesDE } from "@/lib/seoLandingPages.de";
import { findEquivalentBySlug, ogLocale, seoHreflang } from "@/lib/i18n";

const BASE = "https://www.zenecohomes.com";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return seoLandingPagesDE.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getSeoLandingPageDE(slug);
  if (!page) {
    return { title: "Seite nicht gefunden | Zen Eco Homes" };
  }
  const eq = findEquivalentBySlug("de", slug);
  return {
    title: page.seoTitle,
    description: page.seoDescription,
    alternates: {
      canonical: `/de/${slug}`,
      languages: eq ? seoHreflang(eq) : undefined,
    },
    openGraph: {
      title: page.seoTitle,
      description: page.seoDescription,
      url: `${BASE}/de/${slug}`,
      locale: ogLocale.de,
      type: "website",
    },
  };
}

export default async function GermanSeoLandingPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getSeoLandingPageDE(slug);
  if (!page) notFound();
  const eq = findEquivalentBySlug("de", slug);
  return <SeoLandingView page={page} locale="de" eq={eq} />;
}
