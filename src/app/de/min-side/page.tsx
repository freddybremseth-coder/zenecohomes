import Link from "next/link";
import { ExternalLink, LockKeyhole, ShieldCheck } from "lucide-react";
import { Footer } from "@/components/Footer";
import { PortalWorkspace } from "@/components/PortalWorkspace";
import { SiteHeader } from "@/components/SiteHeader";
import { homeLanguageLinks } from "@/lib/i18n";

const BASE = "https://www.zenecohomes.com";

export const metadata = {
  title: "Mein Bereich",
  description: "Kundenportal für Immobilien-Auswahl, Dokumente, Nachrichten und Begleitung bei Zen Eco Homes.",
  alternates: {
    canonical: "/de/min-side",
    languages: {
      "nb-NO": `${BASE}/min-side`,
      "x-default": `${BASE}/min-side`,
      "de-DE": `${BASE}/de/min-side`,
      en: `${BASE}/en/min-side`,
    },
  },
};

export default function GermanPortalPage() {
  return (
    <main lang="de">
      <SiteHeader locale="de" languageLinks={homeLanguageLinks("de")} />
      <section className="page-hero compact-hero">
        <p className="eyebrow">Mein Bereich</p>
        <h1>Kundenportal für Käufer</h1>
        <p>
          Ein übersichtliches Portal für Immobilien-Auswahl, Dokumente und Nachrichten. Admin, Leads und Gespräche
          laufen in RealtyFlow, damit alles an einem Ort zusammenläuft.
        </p>
        <div className="portal-actions">
          <Link className="contact-button" href="#portal">
            <LockKeyhole size={19} /> Im Kundenportal anmelden
          </Link>
          <Link className="text-button light" href="https://realtyflow.chatgenius.pro">
            <ShieldCheck size={18} /> RealtyFlow Admin <ExternalLink size={18} />
          </Link>
        </div>
      </section>
      <section id="portal">
        <PortalWorkspace locale="de" />
      </section>
      <Footer />
    </main>
  );
}
