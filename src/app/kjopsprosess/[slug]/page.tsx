import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ArticleView, buildArticleMetadata } from "@/components/ArticleView";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { homeLanguageLinks } from "@/lib/i18n";
import { articleSilo, articlesInSilo, getMagazineArticle } from "@/lib/magazine";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articlesInSilo("kjopsprosess").map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getMagazineArticle(slug);
  if (!article || articleSilo(article) !== "kjopsprosess") {
    return { title: "Artikkel ikke funnet | Zen Eco Homes" };
  }
  return buildArticleMetadata(article);
}

export default async function KjopsprosessArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getMagazineArticle(slug);
  if (!article || articleSilo(article) !== "kjopsprosess") {
    notFound();
  }

  return (
    <main>
      <SiteHeader languageLinks={homeLanguageLinks("no")} />
      <ArticleView article={article} />
      <Footer />
    </main>
  );
}
