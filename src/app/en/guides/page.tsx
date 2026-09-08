import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Building2, MapPin, ShieldCheck } from "lucide-react";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { homeLanguageLinks } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Property buying guides for Spain | Zen Eco Homes",
  description:
    "Practical English guides for buying modern property in Spain: areas, new build, plots, costs and the buying process.",
  alternates: { canonical: "/en/guides" },
};

const guides = [
  { icon: MapPin, title: "Where should you buy?", body: "Compare Costa Blanca North, South, Costa Cálida and inland Alicante before choosing a property.", href: "/en/areas" },
  { icon: ShieldCheck, title: "Buying process", body: "Understand the main stages from criteria and shortlist through reservation, checks, contracts and completion.", href: "/en/buying-process" },
  { icon: Building2, title: "Modern new-build property", body: "Compare specifications, payment plans, delivery timing, energy performance and what is actually included.", href: "/en/new-build-costa-blanca" },
  { icon: BookOpen, title: "Plots and inland living", body: "If you want more space, compare planning status, water, electricity, access and realistic construction costs before buying land.", href: "/en/plot-of-land-in-spain" },
];

export default function EnglishGuidesPage() {
  return (
    <main lang="en">
      <SiteHeader locale="en" languageLinks={homeLanguageLinks("en")} />
      <section className="page-hero compact-hero image-hero">
        <p className="eyebrow">Knowledge before decisions</p>
        <h1>Guides for buying property in Spain</h1>
        <p>Short, practical guidance for the decisions that matter before you reserve a home, project or plot.</p>
      </section>
      <section className="section">
        <div className="card-list">
          {guides.map((guide) => (
            <article className="info-card" key={guide.title}>
              <guide.icon />
              <div><h2>{guide.title}</h2><p>{guide.body}</p><Link className="text-button" href={guide.href}>Read guide <ArrowRight size={15} /></Link></div>
            </article>
          ))}
        </div>
      </section>
      <section className="section" style={{ textAlign: "center" }}>
        <h2>Start with your needs, not our inventory</h2>
        <p style={{ maxWidth: 720, margin: "0 auto 22px", color: "var(--muted)", lineHeight: 1.8 }}>Our main focus is modern new build and contemporary homes. The purpose of the guides is to help you narrow down where and what to buy before you spend time on viewings.</p>
        <Link className="contact-button" href="/en#kontakt">Ask us a question</Link>
      </section>
      <Footer locale="en" />
    </main>
  );
}
