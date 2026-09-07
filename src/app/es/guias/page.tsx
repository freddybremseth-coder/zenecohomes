import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Home, MapPin } from "lucide-react";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { homeLanguageLinks } from "@/lib/i18n";
import { localSeoLandingPagesES } from "@/lib/localSeoLandingPages.es";
import { seoLandingPagesES } from "@/lib/seoLandingPages.es";

export const metadata: Metadata = {
  title: "Guías para comprar vivienda en España | Zen Eco Homes",
  description:
    "Guías en español sobre compra de vivienda, obra nueva, terrenos, zonas de la Costa Blanca y asesoramiento inmobiliario antes de reservar.",
  alternates: { canonical: "/es/guias" },
};

export default function SpanishGuidesPage() {
  return (
    <main lang="es">
      <SiteHeader locale="es" languageLinks={homeLanguageLinks("es")} />

      <section className="page-hero compact-hero image-hero">
        <p className="eyebrow">Información antes que presión comercial</p>
        <h1>Guías para comprar vivienda en España</h1>
        <p>
          Reunimos aquí las preguntas que conviene resolver antes de una reserva: zona, tipo de vivienda, obra nueva, terrenos, costes, proceso y cómo comparar alternativas.
        </p>
        <div className="hero-actions">
          <Link className="contact-button" href="/es/proceso-de-compra">Ver el proceso de compra <ArrowRight size={18} /></Link>
          <Link className="text-button light" href="/es#contacto">Hacer una pregunta</Link>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow"><BookOpen size={15} /> Guías principales</p>
          <h2>Entender la compra antes de elegir una vivienda</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))", gap: 18 }}>
          {seoLandingPagesES.map((page) => (
            <Link
              key={page.slug}
              href={`/es/${page.slug}`}
              style={{ display: "block", background: "white", border: "1px solid var(--line)", padding: 24, boxShadow: "0 8px 24px rgba(22,34,43,0.05)" }}
            >
              <p className="eyebrow">{page.eyebrow}</p>
              <h2 style={{ color: "var(--dark)", marginTop: 4 }}>{page.title}</h2>
              <p style={{ color: "var(--muted)", lineHeight: 1.7 }}>{page.seoDescription}</p>
              <span className="text-button">Leer guía <ArrowRight size={15} /></span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow"><MapPin size={15} /> Guías de zonas</p>
          <h2>Conoce el lugar antes de enamorarte de la vivienda</h2>
          <p>Estas páginas son un punto de partida. La ubicación exacta dentro de cada municipio sigue siendo decisiva.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
          {localSeoLandingPagesES.map((page) => (
            <Link key={page.slug} href={`/es/${page.slug}`} className="info-card">
              <Home />
              <div>
                <h2>{page.title}</h2>
                <p>{page.seoDescription}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section proof-section">
        <div className="section-heading">
          <p className="eyebrow">Tres recursos para empezar</p>
          <h2>Si todavía estás al principio</h2>
        </div>
        <div className="proof-grid">
          <article>
            <h3>1. Comparar zonas</h3>
            <p>Costa Blanca Norte, Sur, Costa Cálida o interior según tu uso y estilo de vida.</p>
            <Link className="text-button" href="/es/zonas">Comparar zonas <ArrowRight size={15} /></Link>
          </article>
          <article>
            <h3>2. Entender el proceso</h3>
            <p>Desde presupuesto y NIE hasta reserva, abogado, notaría y entrega de llaves.</p>
            <Link className="text-button" href="/es/proceso-de-compra">Proceso de compra <ArrowRight size={15} /></Link>
          </article>
          <article>
            <h3>3. Reducir la búsqueda</h3>
            <p>Busca en la base o pide una selección personal basada en tus criterios reales.</p>
            <Link className="text-button" href="/es/propiedades">Buscar propiedades <ArrowRight size={15} /></Link>
          </article>
        </div>
      </section>

      <section className="section" style={{ textAlign: "center" }}>
        <h2>¿Hay algo que no encuentras en las guías?</h2>
        <p style={{ color: "var(--muted)", maxWidth: 680, margin: "0 auto 20px", lineHeight: 1.7 }}>
          Escríbenos. Las mejores preguntas de compradores también nos ayudan a mejorar las próximas guías.
        </p>
        <Link className="contact-button" href="/es#contacto">Enviar una pregunta</Link>
      </section>

      <Footer locale="es" />
    </main>
  );
}
