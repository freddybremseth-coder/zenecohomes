import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, Home, Leaf, MapPin, ShieldCheck, Sparkles } from "lucide-react";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { SpanishContactForm } from "@/components/es/SpanishContactForm";
import { SpanishPropertyCard } from "@/components/es/SpanishPropertyCard";
import { CARE_URL, homeHreflang, homeLanguageLinks, ogLocale } from "@/lib/i18n";
import { localSeoLandingPagesES } from "@/lib/localSeoLandingPages.es";
import { getProperties } from "@/lib/realtyflow";
import { seoLandingPagesES } from "@/lib/seoLandingPages.es";

const BASE = "https://www.zenecohomes.com";

export const metadata: Metadata = {
  title: "Comprar vivienda en España | Asesor Costa Blanca",
  description:
    "Zen Eco Homes ayuda a compradores en la Costa Blanca a comparar zonas, obra nueva, villas, apartamentos y terrenos con asesoramiento antes de reservar.",
  alternates: { canonical: "/es", languages: homeHreflang() },
  openGraph: {
    title: "Comprar vivienda en España | Zen Eco Homes",
    description: "Asesoramiento inmobiliario y propiedades en la Costa Blanca. Primero la decisión; después, la vivienda.",
    url: `${BASE}/es`,
    locale: ogLocale.es,
    type: "website",
  },
};

const matchOptions = [
  { icon: "🌊", title: "Costa", text: "Playa, paseo marítimo y servicios cerca.", href: "/es/propiedades?region=costa-blanca-nord" },
  { icon: "🏡", title: "Zona residencial tranquila", text: "Más calma sin alejarte demasiado de la costa.", href: "/es/propiedades?area=Polop" },
  { icon: "🌿", title: "Interior", text: "Más terreno, naturaleza y tranquilidad.", href: "/es/interior" },
  { icon: "💰", title: "Inversión", text: "Empezar por demanda, costes y uso real.", href: "/es/propiedades" },
  { icon: "❓", title: "No estoy seguro", text: "Comparamos zonas antes de mirar viviendas.", href: "/es#contacto" },
];

export default async function SpanishHome() {
  const properties = (await getProperties()).slice(0, 6);

  return (
    <main lang="es">
      <SiteHeader locale="es" languageLinks={homeLanguageLinks("es")} />

      <section id="top" className="hero">
        <video className="hero-video" autoPlay muted loop playsInline poster="/assets/areas.jpg">
          <source src="/assets/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow">Asesoramiento inmobiliario · Costa Blanca</p>
          <h1>Compra vivienda en España con más claridad</h1>
          <p className="hero-copy">
            Primero entendemos cómo quieres vivir, qué presupuesto tienes y qué zonas encajan. Después reducimos el mercado a las propiedades que realmente merece la pena valorar.
          </p>
          <form className="search-card" action="/es/propiedades">
            <input name="q" placeholder="¿Dónde quieres vivir? Altea, Finestrat, Polop…" />
            <select name="type" defaultValue="">
              <option value="">Tipo de vivienda</option>
              <option>Villa</option>
              <option value="Leilighet">Apartamento</option>
              <option value="Rekkehus">Adosado</option>
            </select>
            <button type="submit">Buscar propiedades <ArrowRight size={18} /></button>
          </form>
          <div className="hero-secondary">
            <a href="#vivienda-match">Descubre qué zona encaja contigo</a>
            <span>o</span>
            <a href="#contacto">Habla con Freddy</a>
          </div>
        </div>
      </section>

      <section className="trust-band">
        <div><strong>Asesoramiento antes que venta</strong><span>Comparamos zonas, propiedades y proyectos antes de decidir.</span></div>
        <div><strong>Vive y trabaja en España</strong><span>Freddy está en Benidorm y conoce tanto la costa como el interior.</span></div>
        <div><strong>Propiedades de toda la Costa Blanca</strong><span>La base de viviendas se actualiza continuamente.</span></div>
      </section>

      <section className="section proof-section" id="vivienda-match">
        <div className="section-heading">
          <p className="eyebrow">Tu punto de partida</p>
          <h2>¿Qué tipo de España imaginas para ti?</h2>
          <p>No necesitas saber todavía qué ciudad elegir. Empieza por el estilo de vida y afinaremos la búsqueda después.</p>
        </div>
        <div className="proof-grid">
          {matchOptions.map((option) => (
            <article key={option.title}>
              <strong aria-hidden="true">{option.icon}</strong>
              <h3>{option.title}</h3>
              <p>{option.text}</p>
              <Link className="text-button" href={option.href}>Explorar <ArrowRight size={16} /></Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section proof-section">
        <div className="section-heading">
          <p className="eyebrow">Por qué Zen Eco Homes</p>
          <h2>No necesitas 1.500 anuncios. Necesitas las opciones correctas.</h2>
          <p>
            Los portales sirven para descubrir propiedades. Nuestro trabajo empieza cuando hay que comparar ubicación, precio, costes, promotor, documentación y alternativas antes de entregar una reserva.
          </p>
        </div>
        <div className="proof-grid">
          <article><strong>01</strong><h3>Primero tus necesidades</h3><p>Uso de la vivienda, presupuesto, estilo de vida, zona y horizonte temporal.</p></article>
          <article><strong>02</strong><h3>Después comparamos</h3><p>Descartamos lo que no encaja y contrastamos opciones similares antes de una visita.</p></article>
          <article><strong>03</strong><h3>Proceso ordenado</h3><p>Precio, disponibilidad, planos, costes, abogado, pagos y siguientes pasos.</p></article>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Propiedades seleccionadas</p>
          <h2>Viviendas y proyectos disponibles</h2>
          <p>Una muestra de la base de propiedades. Puedes filtrar por zona, presupuesto, dormitorios y estilo de vida.</p>
        </div>
        <div className="property-grid">
          {properties.map((property, index) => (
            <SpanishPropertyCard key={property.id || property.ref || index} property={property} priority={index < 3} />
          ))}
        </div>
        <div className="center-action">
          <Link className="text-button" href="/es/propiedades">Ver todas las propiedades <ArrowRight size={18} /></Link>
        </div>
      </section>

      <section className="section split">
        <div>
          <p className="eyebrow">Sobre Freddy</p>
          <h2>Un asesor que vive aquí y conoce más que la franja costera</h2>
          <p>
            Freddy Bremseth vive en Benidorm y trabaja con compradores en la Costa Blanca. Su familia también tiene una finca de olivos en Biar, lo que le ha dado una relación cotidiana con el interior de Alicante, además de las zonas costeras.
          </p>
          <p>
            Su enfoque parte de una pregunta sencilla: ¿qué intentas encontrar y por qué? La vivienda adecuada viene después.
          </p>
          <Link className="text-button" href="/es/sobre-freddy">Conoce a Freddy <ArrowRight size={16} /></Link>
        </div>
        <div className="feature-panel">
          <div><MapPin /> Benidorm · Costa Blanca</div>
          <div><ShieldCheck /> Asesoramiento antes que venta</div>
          <div><Sparkles /> Selección según tus necesidades</div>
          <div><Building2 /> Obra nueva, vivienda y terrenos</div>
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">Guías para comprar mejor</p>
        <h2 style={{ fontFamily: '"Playfair Display", serif', color: "var(--dark)", marginTop: 0 }}>Antes de reservar, entiende el mercado</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 18, marginTop: 18 }}>
          {seoLandingPagesES.map((page) => (
            <Link key={page.slug} href={`/es/${page.slug}`} style={{ display: "block", background: "white", border: "1px solid var(--line)", padding: 22, boxShadow: "0 8px 24px rgba(22,34,43,0.05)" }}>
              <strong style={{ color: "var(--dark)", fontSize: "1.15rem" }}>{page.title}</strong>
              <p style={{ color: "var(--muted)", lineHeight: 1.6, margin: "10px 0 0" }}>{page.seoDescription}</p>
              <span style={{ color: "var(--gold)", fontWeight: 800, display: "inline-flex", alignItems: "center", gap: 6, marginTop: 12 }}>Leer más <ArrowRight size={15} /></span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">Zonas</p>
        <h2 style={{ fontFamily: '"Playfair Display", serif', color: "var(--dark)", marginTop: 0 }}>Conoce mejor dónde quieres vivir</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 16 }}>
          {localSeoLandingPagesES.map((page) => (
            <Link key={page.slug} href={`/es/${page.slug}`} style={{ border: "1px solid var(--line)", padding: "10px 16px", color: "var(--dark)", fontWeight: 700, background: "white" }}>
              {page.title}
            </Link>
          ))}
        </div>
      </section>

      <section className="section proof-section">
        <div className="section-heading">
          <p className="eyebrow">Más que la compra</p>
          <h2>Interior y cuidado de tu vivienda</h2>
          <p>También te ayudamos a valorar una vida con más espacio en el interior y a organizar el cuidado de la vivienda cuando no estás en España.</p>
        </div>
        <div className="proof-grid">
          <article>
            <strong><Leaf size={22} /></strong><h3>Vivir en el interior</h3><p>Terrenos, fincas y viviendas con más espacio en Biar, Villena, Pinoso y otras zonas del interior.</p>
            <Link className="text-button" href="/es/interior">Descubrir el interior <ArrowRight size={16} /></Link>
          </article>
          <article>
            <strong><Home size={22} /></strong><h3>Keyholding y seguimiento</h3><p>Custodia de llaves, inspecciones y servicios prácticos para propietarios que pasan parte del año fuera.</p>
            <a className="text-button" href={CARE_URL} target="_blank" rel="noopener noreferrer">Ver Property Care <ArrowRight size={16} /></a>
          </article>
        </div>
      </section>

      <section className="section" id="contacto">
        <p className="eyebrow">Contacto</p>
        <h2 style={{ fontFamily: '"Playfair Display", serif', color: "var(--dark)", marginTop: 0 }}>Cuéntanos qué estás buscando</h2>
        <p style={{ color: "var(--muted)", maxWidth: 680, lineHeight: 1.7 }}>
          Puedes escribir en español, noruego o inglés. Cuanto mejor entendamos tu uso, presupuesto y prioridades, menos viviendas tendrás que revisar.
        </p>
        <div style={{ maxWidth: 760, marginTop: 18 }}><SpanishContactForm /></div>
      </section>

      <Footer locale="es" />
    </main>
  );
}
