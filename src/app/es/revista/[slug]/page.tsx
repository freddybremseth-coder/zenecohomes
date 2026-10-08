import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocalizedMagazineArticleView, localizedMagazineArticleMetadata } from "@/components/LocalizedMagazineArticleView";
import { findLocalizedMagazineArticle, magazineArticles } from "@/lib/localizedMagazine";

export function generateStaticParams() {
  return magazineArticles.es.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  return localizedMagazineArticleMetadata("es", slug);
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = findLocalizedMagazineArticle("es", slug);
  if (!article) notFound();
  return <LocalizedMagazineArticleView locale="es" article={article} />;
}
