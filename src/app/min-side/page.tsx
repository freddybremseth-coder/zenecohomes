import Link from "next/link";
import { ExternalLink, LockKeyhole } from "lucide-react";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata = {
  title: "Min Side | Zen Eco Homes",
};

export default function PortalPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-hero compact-hero">
        <p className="eyebrow">Min Side</p>
        <h1>Kundeportal flyttes til Next.js</h1>
        <p>
          Innlogging, dokumenter og meldinger skal kobles mot RealtyFlow. I overgangsfasen kan eksisterende PHP-portal
          brukes på hoveddomenet mens Next-portalen bygges ferdig.
        </p>
        <div className="portal-actions">
          <Link className="contact-button" href="https://zenecohomes.com/client-login.php">
            <LockKeyhole size={19} /> Åpne eksisterende portal
          </Link>
          <Link className="text-button light" href="https://realtyflow.chatgenius.pro">
            RealtyFlow admin <ExternalLink size={18} />
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
