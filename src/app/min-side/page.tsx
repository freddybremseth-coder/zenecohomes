import Link from "next/link";
import { FileText, Heart, MessageSquareText, ShieldCheck } from "lucide-react";
import { Footer } from "@/components/Footer";
import { PersonalizedPortalMatches } from "@/components/PersonalizedPortalMatches";
import { PortalMagicLinkLogin } from "@/components/PortalMagicLinkLogin";
import { PortalWorkspace } from "@/components/PortalWorkspace";
import { SiteHeader } from "@/components/SiteHeader";
import { homeLanguageLinks } from "@/lib/i18n";

const benefits = [
  {
    icon: Heart,
    title: "Din personlige boligliste",
    text: "Se boligene vi vurderer sammen, favorittene dine og forslag som passer ønskene dine.",
  },
  {
    icon: FileText,
    title: "Dokumenter og kalkyler",
    text: "Ha viktige dokumenter, kostnader og beregninger samlet på ett sted.",
  },
  {
    icon: MessageSquareText,
    title: "Meldinger og neste steg",
    text: "Hold dialogen ryddig og ha oversikt over hva som skjer videre i kjøpsprosessen.",
  },
];

export const metadata = {
  title: "Min side",
  description: "Kundeportal for boligmatch, dokumenter, meldinger og oppfølging hos Zen Eco Homes.",
  alternates: {
    canonical: "/min-side",
    languages: {
      "nb-NO": "https://www.zenecohomes.com/min-side",
      "x-default": "https://www.zenecohomes.com/min-side",
      "de-DE": "https://www.zenecohomes.com/de/min-side",
      en: "https://www.zenecohomes.com/en/min-side",
      "es-ES": "https://www.zenecohomes.com/es/mi-area",
    },
  },
};

export default function PortalPage() {
  return (
    <main>
      <SiteHeader languageLinks={homeLanguageLinks("no")} />

      <section className="page-hero compact-hero">
        <p className="eyebrow">Min side</p>
        <h1>Din boligreise – samlet på ett sted</h1>
        <p>
          Når du samarbeider med Zen Eco Homes får du din egen side med boligforslag, dokumenter,
          meldinger og oppfølging – trygt og ryddig.
        </p>
      </section>

      <section className="section">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 18,
            marginBottom: 30,
          }}
        >
          {benefits.map((item) => (
            <article className="info-card" key={item.title}>
              <item.icon />
              <div>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>

        <div id="portal-login">
          <PortalMagicLinkLogin />
        </div>

        <div style={{ maxWidth: 760, margin: "24px auto 0", textAlign: "center" }}>
          <p style={{ color: "var(--muted)", lineHeight: 1.7 }}>
            Tilgang aktiveres personlig for kunder hos Zen Eco Homes. Vi oppretter ikke offentlige kontoer automatisk.
          </p>
          <Link className="text-button" href="/#kontakt">
            <ShieldCheck size={17} /> Trenger du tilgang? Kontakt oss
          </Link>
        </div>
      </section>

      <section style={{ padding: "1rem 1rem 0" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <PersonalizedPortalMatches locale="no" />
        </div>
      </section>

      <section id="portal">
        <PortalWorkspace />
      </section>

      <Footer />
    </main>
  );
}
