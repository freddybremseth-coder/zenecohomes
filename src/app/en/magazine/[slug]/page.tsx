import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocalizedMagazineArticleView, localizedMagazineArticleMetadata } from "@/components/LocalizedMagazineArticleView";
import { findLocalizedMagazineArticle, magazineArticles } from "@/lib/localizedMagazine";

export function generateStaticParams() {
  return magazineArticles.en.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  return localizedMagazineArticleMetadata("en", slug);
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = findLocalizedMagazineArticle("en", slug);
  if (!article) notFound();
  return <LocalizedMagazineArticleView locale="en" article={article} />;
}
