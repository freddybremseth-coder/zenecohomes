import { CompareView } from "@/components/CompareView";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata = {
  title: "Immobilien vergleichen | Zen Eco Homes",
  description:
    "Sehen Sie Ihre gespeicherten Immobilien nebeneinander – Preis, Preis pro m², Fläche, Schlafzimmer, Bäder und Energieklasse an einem Ort.",
  alternates: {
    canonical: "/de/vergleichen",
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
  { locale: "de" as const, href: "/de/vergleichen", current: true },
  { locale: "en" as const, href: "/en/compare", current: false },
];

export default function VergleichenPage() {
  return (
    <main>
      <SiteHeader languageLinks={languageLinks} />
      <section className="page-hero compact-hero">
        <p className="eyebrow">Ihre Favoriten</p>
        <h1>Immobilien vergleichen</h1>
        <p>
          Ihre gespeicherten Immobilien liegen hier nebeneinander, damit Sie Preis, Fläche und
          Ausstattung schnell vergleichen können.
        </p>
      </section>
      <section className="section">
        <CompareView locale="de" />
      </section>
      <Footer />
    </main>
  );
}
