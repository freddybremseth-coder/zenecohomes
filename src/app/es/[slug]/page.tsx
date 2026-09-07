import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SeoLandingView } from "@/components/SeoLandingView";
import { findEquivalentBySlug, ogLocale, seoHreflang } from "@/lib/i18n";
import { localSeoLandingPagesES } from "@/lib/localSeoLandingPages.es";
import { getSeoLandingPageES, seoLandingPagesES } from "@/lib/seoLandingPages.es";

const BASE = "https://www.zenecohomes.com";
const allES = [...seoLandingPagesES, ...localSeoLandingPagesES];

function getPage(slug: string) {
  return getSeoLandingPageES(slug) || localSeoLandingPagesES.find((page) => page.slug === slug);
}

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return allES.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getPage(slug);
  if (!page) return { title: "Página no encontrada | Zen Eco Homes" };
  const eq = findEquivalentBySlug("es", slug);
  return {
    title: page.seoTitle,
    description: page.seoDescription,
    alternates: {
      canonical: `/es/${slug}`,
      languages: eq ? seoHreflang(eq) : undefined,
    },
    openGraph: {
      title: page.seoTitle,
      description: page.seoDescription,
      url: `${BASE}/es/${slug}`,
      locale: ogLocale.es,
      type: "website",
    },
  };
}

export default async function SpanishSeoLandingPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getPage(slug);
  if (!page) notFound();
  const eq = findEquivalentBySlug("es", slug);
  return <SeoLandingView page={page} locale="es" eq={eq} />;
}
