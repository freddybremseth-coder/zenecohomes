import { CompareView } from "@/components/CompareView";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata = {
  title: "Compare properties | Zen Eco Homes",
  description:
    "See your saved properties side by side – price, price per m², living area, bedrooms, bathrooms and energy rating in one place.",
  alternates: {
    canonical: "/en/compare",
    languages: {
      no: "/sammenlign",
      de: "/de/vergleichen",
      en: "/en/compare",
    },
  },
  robots: { index: false, follow: true },
};

const languageLinks = [
  { locale: "no" as const, href: "/sammenlign", current: false },
  { locale: "de" as const, href: "/de/vergleichen", current: false },
  { locale: "en" as const, href: "/en/compare", current: true },
];

export default function ComparePage() {
  return (
    <main>
      <SiteHeader languageLinks={languageLinks} />
      <section className="page-hero compact-hero">
        <p className="eyebrow">Your favourites</p>
        <h1>Compare properties</h1>
        <p>
          The properties you saved are lined up here side by side, so you can quickly see the
          differences in price, size and standard.
        </p>
      </section>
      <section className="section">
        <CompareView locale="en" />
      </section>
      <Footer />
    </main>
  );
}
