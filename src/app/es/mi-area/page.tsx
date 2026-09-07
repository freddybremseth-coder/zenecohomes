import type { Metadata } from "next";
import Link from "next/link";
import { FileText, Heart, MessageSquareText, ShieldCheck } from "lucide-react";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { SpanishPortalLogin } from "@/components/es/SpanishPortalLogin";
import { homeLanguageLinks } from "@/lib/i18n";

const BASE = "https://www.zenecohomes.com";

export const metadata: Metadata = {
  title: "Mi área | Zen Eco Homes",
  description:
    "Acceso personal a tu proceso de compra con Zen Eco Homes: viviendas, documentos, mensajes y próximos pasos en un solo lugar.",
  alternates: {
    canonical: "/es/mi-area",
    languages: {
      "nb-NO": `${BASE}/min-side`,
      "x-default": `${BASE}/min-side`,
      "de-DE": `${BASE}/de/min-side`,
      en: `${BASE}/en/min-side`,
      "es-ES": `${BASE}/es/mi-area`,
    },
  },
};

const features = [
  { icon: Heart, title: "Viviendas y selección personal", text: "Tus opciones relevantes y las viviendas que estamos valorando contigo." },
  { icon: FileText, title: "Documentos y cálculos", text: "Información del proceso, documentos y datos importantes reunidos en un mismo lugar." },
  { icon: MessageSquareText, title: "Mensajes y próximos pasos", text: "Mantén la conversación y el seguimiento de tu compra de vivienda de forma ordenada." },
];

export default function SpanishPortalPage() {
  return (
    <main lang="es">
      <SiteHeader locale="es" languageLinks={homeLanguageLinks("es")} />

      <section className="page-hero compact-hero">
        <p className="eyebrow">Mi área</p>
        <h1>Tu proceso de compra, reunido en un solo lugar</h1>
        <p>
          Accede de forma segura a la información que compartimos contigo durante la búsqueda y compra de tu vivienda en España.
        </p>
      </section>

      <section className="section">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 18, marginBottom: 30 }}>
          {features.map((item) => (
            <article className="info-card" key={item.title}>
              <item.icon />
              <div>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>

        <SpanishPortalLogin />

        <div style={{ maxWidth: 760, margin: "24px auto 0", textAlign: "center" }}>
          <p style={{ color: "var(--muted)", lineHeight: 1.7 }}>
            El acceso se habilita personalmente para clientes de Zen Eco Homes. No creamos cuentas públicas automáticamente.
          </p>
          <Link className="text-button" href="/es#contacto">
            <ShieldCheck size={17} /> ¿Necesitas acceso? Contacta con nosotros
          </Link>
        </div>
      </section>

      <Footer locale="es" />
    </main>
  );
}
