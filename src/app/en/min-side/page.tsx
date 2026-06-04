import Link from "next/link";
import { ExternalLink, LockKeyhole, ShieldCheck } from "lucide-react";
import { Footer } from "@/components/Footer";
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
        <h1>Customer portal for buyers</h1>
        <p>
          A clean portal for property matches, documents and messages. Admin, leads and conversations are handled
          in RealtyFlow, so everything stays in one hub.
        </p>
        <div className="portal-actions">
          <Link className="contact-button" href="#portal">
            <LockKeyhole size={19} /> Log in to the portal
          </Link>
          <Link className="text-button light" href="https://realtyflow.chatgenius.pro">
            <ShieldCheck size={18} /> RealtyFlow admin <ExternalLink size={18} />
          </Link>
        </div>
      </section>
      <section id="portal">
        <PortalWorkspace locale="en" />
      </section>
      <Footer />
    </main>
  );
}
