import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SeoLandingView } from "@/components/SeoLandingView";
import { localSeoLandingPages } from "@/lib/localSeoLandingPages";
import { getSeoLandingPage, seoLandingPages } from "@/lib/seoLandingPages";
import { findEquivalentBySlug, ogLocale, seoHreflang } from "@/lib/i18n";

const BASE = "https://www.zenecohomes.com";
const allSeoPages = [...seoLandingPages, ...localSeoLandingPages];

function getLandingPage(slug: string) {
  return getSeoLandingPage(slug) || localSeoLandingPages.find((page) => page.slug === slug);
}

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return allSeoPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getLandingPage(slug);

  if (!page) {
    return { title: "Side ikke funnet | Zen Eco Homes" };
  }

  const eq = findEquivalentBySlug("no", slug);

  return {
    title: page.seoTitle,
    description: page.seoDescription,
    alternates: {
      canonical: `/${page.slug}`,
      languages: eq ? seoHreflang(eq) : undefined,
    },
    openGraph: {
      title: page.seoTitle,
      description: page.seoDescription,
      url: `${BASE}/${page.slug}`,
      locale: ogLocale.no,
      type: "website",
    },
  };
}

export default async function SeoLandingPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getLandingPage(slug);

  if (!page) {
    notFound();
  }

  const eq = findEquivalentBySlug("no", slug);
  return <SeoLandingView page={page} locale="no" eq={eq} />;
}
