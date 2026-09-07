import Link from "next/link";
import { ExternalLink, LockKeyhole, ShieldCheck } from "lucide-react";
import { Footer } from "@/components/Footer";
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
        <h1>Kundeportal for kjøpere</h1>
        <p>
          En ryddig portal for boligmatch, dokumenter og meldinger. Alt ligger samlet ett sted, med direkte
          dialog med rådgiveren din.
        </p>
        <div className="portal-actions">
          <Link className="contact-button" href="#portal">
            <LockKeyhole size={19} /> Logg inn på Min side
          </Link>
          <Link className="text-button light" href="https://realtyflow.chatgenius.pro">
            <ShieldCheck size={18} /> Admin-innlogging <ExternalLink size={18} />
          </Link>
        </div>
      </section>
      <section id="portal">
        <PortalWorkspace />
      </section>
      <Footer />
    </main>
  );
}
