import Link from "next/link";
import { ExternalLink, LockKeyhole, ShieldCheck } from "lucide-react";
import { Footer } from "@/components/Footer";
import { PersonalizedPortalMatches } from "@/components/PersonalizedPortalMatches";
import { PortalMagicLinkLogin } from "@/components/PortalMagicLinkLogin";
import { PortalWorkspace } from "@/components/PortalWorkspace";
import { SiteHeader } from "@/components/SiteHeader";
import { homeLanguageLinks } from "@/lib/i18n";

const BASE = "https://www.zenecohomes.com";

export const metadata = {
  title: "My account",
  description: "Customer portal for property matches, documents, messages and guidance at Zen Eco Homes.",
  alternates: {
    canonical: "/en/min-side",
    languages: {
      "nb-NO": `${BASE}/min-side`,
      "x-default": `${BASE}/min-side`,
      "de-DE": `${BASE}/de/min-side`,
      en: `${BASE}/en/min-side`,
    },
  },
};

export default function EnglishPortalPage() {
  return (
    <main lang="en">
      <SiteHeader locale="en" languageLinks={homeLanguageLinks("en")} />
      <section className="page-hero compact-hero">
        <p className="eyebrow">My account</p>
        <h1>Your personal property shortlist and dialogue</h1>
        <p>
          Review the properties we are considering together, tell us what is interesting or not right for you,
          update your preferences and keep messages, documents and next steps in one place.
        </p>
        <div className="portal-actions">
          <Link className="contact-button" href="#portal-login">
            <LockKeyhole size={19} /> Open My account
          </Link>
          <Link className="text-button light" href="https://realtyflow.chatgenius.pro">
            <ShieldCheck size={18} /> Admin login <ExternalLink size={18} />
          </Link>
        </div>
      </section>
      <section id="portal-login" style={{ padding: "2rem 1rem 0" }}>
        <PortalMagicLinkLogin locale="en" />
      </section>
      <section style={{ padding: "1rem 1rem 0" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <PersonalizedPortalMatches locale="en" />
        </div>
      </section>
      <section id="portal">
        <PortalWorkspace locale="en" />
      </section>
      <Footer locale="en" />
    </main>
  );
}
