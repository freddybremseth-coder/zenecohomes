import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar } from "lucide-react";
import { notFound, permanentRedirect } from "next/navigation";

import MarkdownArticle from "@/components/MarkdownArticle";
import { ArticleView, buildArticleMetadata } from "@/components/ArticleView";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { homeLanguageLinks } from "@/lib/i18n";
import { allArticles, articlePath, articleSilo, getMagazineArticle, siloedSlugs } from "@/lib/magazine";
import { fetchPublishedPost, fetchPublishedPosts } from "@/lib/website-content";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function formatDate(value?: string | null) {
  if (!value) return "";
  return new Intl.DateTimeFormat("nb-NO", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(value));
}

export async function generateStaticParams() {
  const cmsPosts = await fetchPublishedPosts("magasin");
  // Siloede artikler bor på /kjopsprosess eller /guide (og 301-redirectes fra /magasin).
  const siloed = new Set(siloedSlugs());
  const slugs = new Set<string>([
    ...allArticles.filter((article) => !articleSilo(article)).map((article) => article.slug),
    ...cmsPosts.map((post) => post.slug),
  ]);
  for (const slug of siloed) slugs.delete(slug);

  return Array.from(slugs).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const cmsPost = await fetchPublishedPost("magasin", slug);

  if (cmsPost) {
    return {
      title: `${cmsPost.title} | Zen Eco Homes`,
      description: cmsPost.summary || "Guider og innsikt fra Zen Eco Homes.",
      alternates: {
        canonical: `/magasin/${cmsPost.slug}`,
      },
      openGraph: {
        title: cmsPost.title,
        description: cmsPost.summary || "Guider og innsikt fra Zen Eco Homes.",
        url: `https://www.zenecohomes.com/magasin/${cmsPost.slug}`,
        type: "article",
        publishedTime: cmsPost.published_at || cmsPost.created_at,
        images: cmsPost.image_url
          ? [
              {
                url: cmsPost.image_url,
                alt: cmsPost.title,
              },
            ]
          : [],
      },
    };
  }

  const article = getMagazineArticle(slug);
  if (!article) {
    return {
      title: "Artikkel ikke funnet | Zen Eco Homes",
    };
  }

  return buildArticleMetadata(article);
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;

  // Datadrevet sikkerhetsnett: en siloet artikkel skal aldri serveres på /magasin.
  // Speiler 301-redirecten i next.config, men styres av SILO_BY_SLUG – kan ikke drifte.
  const staticArticle = getMagazineArticle(slug);
  if (staticArticle && articleSilo(staticArticle)) {
    permanentRedirect(articlePath(staticArticle));
  }

  const cmsPost = await fetchPublishedPost("magasin", slug);

  if (cmsPost && !cmsPost.id.startsWith("fallback-")) {
    return (
      <main>
        <SiteHeader languageLinks={homeLanguageLinks("no")} />
        <section className="page-hero compact-hero">
          <p className="eyebrow">Magasin</p>
          <h1>{cmsPost.title}</h1>
          <p>{cmsPost.summary || "Innsikt, guider og tryggere beslutningsstotte for boligkjopere i Spania."}</p>
        </section>
        <section className="section">
          <div className="mx-auto max-w-4xl px-5 md:px-8">
            <Link
              href="/magasin"
              className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900"
            >
              <ArrowLeft size={16} /> Tilbake til magasin
            </Link>
            {cmsPost.published_at && (
              <p className="mb-6 inline-flex items-center gap-2 text-sm text-slate-500">
                <Calendar size={16} /> {formatDate(cmsPost.published_at)}
              </p>
            )}
            {cmsPost.image_url ? (
              <img
                src={cmsPost.image_url}
                alt={cmsPost.title}
                className="mb-10 aspect-[16/9] w-full rounded-2xl object-cover"
              />
            ) : null}
            <MarkdownArticle markdown={cmsPost.markdown} />
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  const article = getMagazineArticle(slug);
  if (!article) {
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
