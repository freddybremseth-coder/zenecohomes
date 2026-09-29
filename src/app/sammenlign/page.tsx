import { CompareView } from "@/components/CompareView";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata = {
  title: "Sammenlign boliger i Spania side ved side | Zen Eco Homes",
  description:
    "Sammenlign lagrede boliger i Spania side ved side med pris, pris per m², areal, soverom, bad og energiklasse i Zen Eco Homes sitt boligverktøy.",
  alternates: {
    canonical: "/sammenlign",
    languages: {
      no: "/sammenlign",
      de: "/de/vergleichen",
      en: "/en/compare",
    },
  },
  robots: { index: false, follow: true },
};

const languageLinks = [
  { locale: "no" as const, href: "/sammenlign", current: true },
  { locale: "de" as const, href: "/de/vergleichen", current: false },
  { locale: "en" as const, href: "/en/compare", current: false },
];

export default function ComparePage() {
  return (
    <main>
      <SiteHeader languageLinks={languageLinks} />
      <section className="page-hero compact-hero">
        <p className="eyebrow">Dine favoritter</p>
        <h1>Sammenlign boliger</h1>
        <p>
          Boligene du har lagret ligger her side ved side, slik at du raskt ser forskjellene i pris,
          areal og standard.
        </p>
      </section>
      <section className="section">
        <CompareView locale="no" />
      </section>
      <Footer />
    </main>
  );
}
