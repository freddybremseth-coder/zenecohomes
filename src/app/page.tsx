import { ArrowRight, Building2, Check, Leaf, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";

type Property = {
  id?: string;
  ref?: string;
  title?: string;
  title_no?: string;
  location?: string;
  price?: number;
  bedrooms?: number;
  bathrooms?: number;
  built_area?: number;
  area?: number;
  primary_image?: string;
  image_path?: string;
  property_type?: string;
  type?: string;
};

async function getProperties(): Promise<Property[]> {
  try {
    const res = await fetch("https://realtyflow.chatgenius.pro/api/properties", {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    const data = await res.json();
    return Array.isArray(data) ? data.slice(0, 6) : [];
  } catch {
    return [];
  }
}

function formatPrice(price?: number) {
  if (!price) return "Pris på forespørsel";
  return new Intl.NumberFormat("nb-NO", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(price);
}

export default async function Home() {
  const properties = await getProperties();

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Zen Eco Homes">
          Zen<span>Eco</span>Homes
        </a>
        <nav className="nav">
          <a href="#boliger">Boliger</a>
          <a href="#prosess">Kjøpsprosess</a>
          <a href="#kontakt">Kontakt</a>
          <a className="nav-cta" href="https://zenecohomes.com/client-login.php">
            Min side
          </a>
        </nav>
      </header>

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
          <form className="search-card" action="#kontakt">
            <input name="area" placeholder="Hvor vil du bo? Altea, Finestrat, Polop..." />
            <select name="type" defaultValue="">
              <option value="">Type bolig</option>
              <option>Villa</option>
              <option>Leilighet</option>
              <option>Rekkehus</option>
            </select>
            <button type="submit">
              Start søk <ArrowRight size={18} />
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

      <section className="section" id="boliger">
        <div className="section-heading">
          <p className="eyebrow">Utvalgte boliger</p>
          <h2>Aktuelle nybygg og prosjekter</h2>
          <p>Et kuratert utvalg hentes fra RealtyFlow. Når databasen oppdateres der, kan nettsiden følge etter.</p>
        </div>
        <div className="property-grid">
          {(properties.length ? properties : fallbackProperties).map((property, index) => {
            const title = property.title_no || property.title || "Nybygg i Spania";
            const image = property.primary_image || property.image_path || fallbackProperties[index % fallbackProperties.length].primary_image;
            return (
              <article className="property-card" key={property.id || property.ref || title}>
                <div className="property-image" style={{ backgroundImage: `url(${image})` }}>
                  <span>{property.property_type || property.type || "Nybygg"}</span>
                </div>
                <div className="property-body">
                  <p>{property.location || "Costa Blanca"}</p>
                  <h3>{title}</h3>
                  <strong>{formatPrice(property.price)}</strong>
                  <div className="facts">
                    <span>{property.bedrooms || 3} sov</span>
                    <span>{property.bathrooms || 2} bad</span>
                    <span>{property.built_area || property.area || 120} m²</span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section split" id="prosess">
        <div>
          <p className="eyebrow">Trygg kjøpsreise</p>
          <h2>Bygget for nordmenn som vil kjøpe nybygg i Spania</h2>
          <p>
            Siden kombinerer et stilrent førsteinntrykk med en praktisk kundereise: boligsøk, match, kundeportal og oppfølging via RealtyFlow.
          </p>
          <div className="check-list">
            {["Prosjektutvalg og rådgivning", "Dokumenter og meldinger på Min Side", "Automatisert leadflyt til CRM"].map((item) => (
              <span key={item}>
                <Check size={18} /> {item}
              </span>
            ))}
          </div>
        </div>
        <div className="feature-panel">
          <div><ShieldCheck /> Norsk trygghet</div>
          <div><Leaf /> Energieffektive boliger</div>
          <div><Sparkles /> AI-støttet boligmatch</div>
          <div><Building2 /> Nybygg og prosjekter</div>
        </div>
      </section>

      <section className="contact" id="kontakt">
        <div>
          <p className="eyebrow">Klar for en prat?</p>
          <h2>Fortell oss hva du ser etter</h2>
          <p>Vi hjelper deg med område, budsjett, prosjekter og neste steg i kjøpsprosessen.</p>
        </div>
        <a className="contact-button" href="mailto:freddy@zenecohomes.com">
          <MessageCircle size={20} /> Kontakt Freddy
        </a>
      </section>

      <footer>
        <span>© {new Date().getFullYear()} Zen Eco Homes</span>
        <span>Nybygg · Costa Blanca · Costa Calida</span>
      </footer>
    </main>
  );
}

const fallbackProperties: Property[] = [
  {
    title: "Moderne villa med basseng",
    location: "Finestrat",
    price: 545000,
    bedrooms: 3,
    bathrooms: 3,
    built_area: 156,
    primary_image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=82",
  },
  {
    title: "Ny leilighet nær strand og sentrum",
    location: "Altea",
    price: 349000,
    bedrooms: 2,
    bathrooms: 2,
    built_area: 98,
    primary_image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=82",
  },
  {
    title: "Energieffektivt rekkehus med takterrasse",
    location: "Polop",
    price: 289000,
    bedrooms: 3,
    bathrooms: 2,
    built_area: 112,
    primary_image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=82",
  },
];
