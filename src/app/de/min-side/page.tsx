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
        <h1>Ihre persönliche Immobilien-Auswahl und direkte Kommunikation</h1>
        <p>
          Sehen Sie die Immobilien, die wir gemeinsam prüfen, markieren Sie interessante oder unpassende Objekte,
          aktualisieren Sie Ihre Wünsche und halten Sie Nachrichten, Dokumente und nächste Schritte an einem Ort.
        </p>
        <div className="portal-actions">
          <Link className="contact-button" href="#portal-login">
            <LockKeyhole size={19} /> Mein Bereich öffnen
          </Link>
          <Link className="text-button light" href="https://realtyflow.chatgenius.pro">
            <ShieldCheck size={18} /> Admin-Login <ExternalLink size={18} />
          </Link>
        </div>
      </section>
      <section id="portal-login" style={{ padding: "2rem 1rem 0" }}>
        <PortalMagicLinkLogin locale="de" />
      </section>
      <section style={{ padding: "1rem 1rem 0" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <PersonalizedPortalMatches locale="de" />
        </div>
      </section>
      <section id="portal">
        <PortalWorkspace locale="de" />
      </section>
      <Footer />
    </main>
  );
}
