import Link from "next/link";
import { ArrowRight, FileText, Heart, MessageSquareText, ShieldCheck } from "lucide-react";
import { Footer } from "@/components/Footer";
import { PersonalizedPortalMatches } from "@/components/PersonalizedPortalMatches";
import { PortalMagicLinkLogin } from "@/components/PortalMagicLinkLogin";
import { PortalJoinForm } from "@/components/PortalJoinForm";
import { PortalSignedOutOnly } from "@/components/PortalSignedOutOnly";
import { PortalWorkspace } from "@/components/PortalWorkspace";
import { SiteHeader } from "@/components/SiteHeader";
import { TrackedPortalJourneyStatus } from "@/components/TrackedPortalJourneyStatus";
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
  robots: { index: false, follow: false },
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
    <main className="min-side-page">
      <SiteHeader languageLinks={homeLanguageLinks("no")} />

      <PortalSignedOutOnly>
        <section className="min-side-hero">
          <div className="min-side-hero-inner">
            <p className="eyebrow">Min side</p>
            <h1>Min side</h1>
            <span className="min-side-hero-rule" aria-hidden="true" />
            <p className="min-side-hero-copy">
              Alt du trenger på ett sted – fra boligforslag og dokumenter til meldinger og neste steg i kjøpsprosessen.
            </p>
          </div>
        </section>

        <section className="min-side-public-section">
          <div className="min-side-benefits">
            {benefits.map((item) => (
              <article className="min-side-benefit-card" key={item.title}>
                <div className="min-side-benefit-icon"><item.icon size={28} /></div>
                <div className="min-side-benefit-copy">
                  <h2>{item.title}</h2>
                  <p>{item.text}</p>
                </div>
                <span className="min-side-benefit-arrow" aria-hidden="true"><ArrowRight size={18} /></span>
              </article>
            ))}
          </div>

          <div className="portal-access-grid">
            <div id="portal-login">
              <PortalMagicLinkLogin />
            </div>
            <PortalJoinForm />
          </div>

          <div className="min-side-support">
            <p>
              Har du allerede tilgang, bruker du sikker innloggingslenke. Er du ny, kan du opprette Min side og aktivere den fra e-posten du mottar.
            </p>
            <Link className="text-button" href="/booking">
              <ShieldCheck size={17} /> Vil du heller snakke med oss først?
            </Link>
          </div>
        </section>
      </PortalSignedOutOnly>

      <section style={{ padding: "1rem 1rem 0" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <TrackedPortalJourneyStatus />
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
