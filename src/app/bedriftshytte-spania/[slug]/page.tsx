import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ArticleView, buildArticleMetadata } from "@/components/ArticleView";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { homeLanguageLinks } from "@/lib/i18n";
import { articleSilo, articlesInSilo, getMagazineArticle } from "@/lib/magazine";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articlesInSilo("corporate").map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getMagazineArticle(slug);
  if (!article || articleSilo(article) !== "corporate") {
    return { title: "Artikkel ikke funnet | Zen Corporate Homes" };
  }
  return buildArticleMetadata(article);
}

export default async function CorporateArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getMagazineArticle(slug);
  if (!article || articleSilo(article) !== "corporate") notFound();

  return (
    <main className="corporate-page">
      <SiteHeader locale="no" languageLinks={homeLanguageLinks("no")} />
      <ArticleView article={article} />
      <Footer />
    </main>
  );
}
