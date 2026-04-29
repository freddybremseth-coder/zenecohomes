import Link from "next/link";
import { ArrowRight, Building2, Check, Leaf, ShieldCheck, Sparkles } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { PropertyCard } from "@/components/PropertyCard";
import { SiteHeader } from "@/components/SiteHeader";
import { getProperties } from "@/lib/realtyflow";

export default async function Home() {
  const properties = await getProperties(6);

  return (
    <main>
      <SiteHeader />

      <section id="top" className="hero">
        <video className="hero-video" autoPlay muted loop playsInline poster="/assets/areas.jpg">
          <source src="/assets/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow">Norsk rådgivning · Nybygg i Spania</p>
          <h1>Ditt moderne hjem i solen</h1>
          <p className="hero-copy">
            Zen Eco Homes hjelper deg å finne energieffektive nybygg og trygge prosjekter på Costa Blanca og Costa Calida.
          </p>
          <form className="search-card" action="/eiendommer">
            <input name="q" placeholder="Hvor vil du bo? Altea, Finestrat, Polop..." />
            <select name="type" defaultValue="">
              <option value="">Type bolig</option>
              <option>Villa</option>
              <option>Leilighet</option>
              <option>Rekkehus</option>
            </select>
            <button type="submit">
              Søk boliger <ArrowRight size={18} />
            </button>
          </form>
        </div>
      </section>

      <section className="trust-band">
        <div>
          <strong>Nybygg først</strong>
          <span>Moderne prosjekter med lavere vedlikehold</span>
        </div>
        <div>
          <strong>Norsk trygghet</strong>
          <span>Rådgivning fra første samtale til overtakelse</span>
        </div>
        <div>
          <strong>RealtyFlow CRM</strong>
          <span>Boliger, leads og oppfølging samlet i system</span>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Utvalgte boliger</p>
          <h2>Aktuelle nybygg og prosjekter</h2>
          <p>Et kuratert utvalg hentes fra RealtyFlow. Når databasen oppdateres der, følger nettsiden etter.</p>
        </div>
        <div className="property-grid">
          {properties.map((property, index) => (
            <PropertyCard key={property.id || property.ref || index} property={property} priority={index < 3} />
          ))}
        </div>
        <div className="center-action">
          <Link className="text-button" href="/eiendommer">
            Se alle boliger <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <section className="section split">
        <div>
          <p className="eyebrow">Trygg kjøpsreise</p>
          <h2>Bygget for nordmenn som vil kjøpe nybygg i Spania</h2>
          <p>
            Siden kombinerer et stilrent førsteinntrykk med en praktisk kundereise: boligsøk, match, kundeportal og
            oppfølging via RealtyFlow.
          </p>
          <div className="check-list">
            {["Prosjektutvalg og rådgivning", "Dokumenter og meldinger på Min Side", "Automatisert leadflyt til CRM"].map(
              (item) => (
                <span key={item}>
                  <Check size={18} /> {item}
                </span>
              ),
            )}
          </div>
        </div>
        <div className="feature-panel">
          <div>
            <ShieldCheck /> Norsk trygghet
          </div>
          <div>
            <Leaf /> Energieffektive boliger
          </div>
          <div>
            <Sparkles /> AI-støttet boligmatch
          </div>
          <div>
            <Building2 /> Nybygg og prosjekter
          </div>
        </div>
      </section>

      <section className="contact-section" id="kontakt">
        <div>
          <p className="eyebrow">Klar for en prat?</p>
          <h2>Fortell oss hva du ser etter</h2>
          <p>Vi hjelper deg med område, budsjett, prosjekter og neste steg i kjøpsprosessen.</p>
        </div>
        <ContactForm source="zenecohomes-home" />
      </section>

      <Footer />
    </main>
  );
}
