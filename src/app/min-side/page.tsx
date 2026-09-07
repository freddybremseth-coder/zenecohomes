import Link from "next/link";
import { ExternalLink, LockKeyhole, ShieldCheck } from "lucide-react";
import { Footer } from "@/components/Footer";
import { PersonalizedPortalMatches } from "@/components/PersonalizedPortalMatches";
import { PortalMagicLinkLogin } from "@/components/PortalMagicLinkLogin";
import { PortalWorkspace } from "@/components/PortalWorkspace";
import { SiteHeader } from "@/components/SiteHeader";
import { homeLanguageLinks } from "@/lib/i18n";

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
    },
  },
};

export default function PortalPage() {
  return (
    <main>
      <SiteHeader languageLinks={homeLanguageLinks("no")} />
      <section className="page-hero compact-hero">
        <p className="eyebrow">Min Side</p>
        <h1>Din personlige boligoversikt og dialog</h1>
        <p>
          Se boligene vi vurderer sammen, marker hva som er interessant eller ikke passer, oppdater ønskene dine
          og hold dialog, dokumenter og neste steg samlet på ett sted.
        </p>
        <div className="portal-actions">
          <Link className="contact-button" href="#portal-login">
            <LockKeyhole size={19} /> Åpne Min side
          </Link>
          <Link className="text-button light" href="https://realtyflow.chatgenius.pro">
            <ShieldCheck size={18} /> Admin-innlogging <ExternalLink size={18} />
          </Link>
        </div>
      </section>
      <section id="portal-login" style={{ padding: "2rem 1rem 0" }}>
        <PortalMagicLinkLogin />
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
