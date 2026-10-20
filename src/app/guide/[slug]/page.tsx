import type { Metadata } from "next";
import { SpainAreaGuide } from "@/components/SpainAreaGuide";
import { notFound } from "next/navigation";

import { ArticleView, buildArticleMetadata } from "@/components/ArticleView";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { homeLanguageLinks } from "@/lib/i18n";
import { articleSilo, articlesInSilo, getMagazineArticle } from "@/lib/magazine";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articlesInSilo("guide").map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getMagazineArticle(slug);
  if (!article || articleSilo(article) !== "guide") {
    return { title: "Artikkel ikke funnet | Zen Eco Homes" };
  }
  if (slug === "omradeguide-eiendomskjop-i-spania") {
    return { title: "Hvor er det best å kjøpe eiendom i Spania? | Zen Eco Homes", description: "Finn riktig område i Spania for boligkjøp. Sammenlign klima, pris, reisevei og norsk miljø i Costa Blanca, Costa del Sol, innlandet og øyene.", alternates: { canonical: "/guide/omradeguide-eiendomskjop-i-spania" } };
  }
  return buildArticleMetadata(article);
}

export default async function GuideArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getMagazineArticle(slug);
  if (!article || articleSilo(article) !== "guide") {
    notFound();
  }

  return (
    <main>
      <SiteHeader languageLinks={homeLanguageLinks("no")} />
      {slug === "omradeguide-eiendomskjop-i-spania" ? (
        <><section className="page-hero compact-hero article-hero"><p className="eyebrow">Områdeguide</p><h1>Hvor er det best å kjøpe eiendom i Spania?</h1></section><SpainAreaGuide /></>
      ) : <ArticleView article={article} />}
      <Footer />
    </main>
  );
}
