import Link from "next/link";
import { ArrowRight, Home, MapPin } from "lucide-react";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { homeLanguageLinks } from "@/lib/i18n";

export default function NotFound() {
  return (
    <main>
      <SiteHeader locale="no" languageLinks={homeLanguageLinks("no")} />
      <section
        className="page-hero compact-hero"
        style={{
          minHeight: "72vh",
          display: "grid",
          alignContent: "center",
          background:
            "radial-gradient(circle at 78% 24%, rgba(198,167,109,.2), transparent 34%), linear-gradient(145deg, #172027 0%, #263942 100%)",
          color: "white",
        }}
      >
        <p className="eyebrow" style={{ color: "#c6a76d" }}>404 · Zen Eco Homes</p>
        <h1 style={{ color: "white", maxWidth: "12ch" }}>Denne siden finnes ikke.</h1>
        <p style={{ maxWidth: 650, color: "rgba(255,255,255,.72)", lineHeight: 1.8 }}>
          Lenken kan være gammel, boligen kan ha fått en ny adresse, eller siden kan være flyttet. Du kan gå tilbake
          til boligene eller starte fra forsiden.
        </p>
        <div className="hero-actions" style={{ justifyContent: "flex-start", marginTop: 28 }}>
          <Link className="contact-button" href="/eiendommer"><MapPin size={17} /> Se boliger</Link>
          <Link className="hero-link" href="/"><Home size={17} /> Forsiden <ArrowRight size={16} /></Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
