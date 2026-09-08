import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { SpanishContactForm } from "@/components/es/SpanishContactForm";
import { homeLanguageLinks } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Habla con Freddy | Asesoramiento inmobiliario en España",
  description:
    "Solicita una breve conversación sobre zona, presupuesto, obra nueva moderna y proceso de compra en la Costa Blanca.",
  alternates: { canonical: "/es/cita" },
};

export default function SpanishBookingPage() {
  return (
    <main lang="es">
      <SiteHeader locale="es" languageLinks={homeLanguageLinks("es")} />
      <section className="page-hero compact-hero image-hero">
        <p className="eyebrow">Conversación de orientación</p>
        <h1>Cuéntale a Freddy qué estás buscando</h1>
        <p>
          Empezamos por la zona, el uso de la vivienda y el presupuesto. La idea es reducir el mercado antes de dedicar tiempo a propiedades concretas.
        </p>
      </section>

      <section className="section split">
        <div>
          <p className="eyebrow">Antes de hablar</p>
          <h2>Una conversación breve debería darte claridad</h2>
          <div className="check-list">
            {[
              "Cómo quieres utilizar la vivienda",
              "Qué zona o estilo de vida imaginas",
              "Presupuesto y plazo aproximado",
              "Obra nueva, villa, apartamento o terreno",
              "Dudas sobre visitas, reserva y proceso de compra",
            ].map((item) => (
              <span key={item}><CheckCircle2 size={18} /> {item}</span>
            ))}
          </div>
          <p>
            No necesitas tener clara la ciudad. Si todavía dudas entre costa, interior, norte o sur, empezamos por ahí.
          </p>
          <Link className="text-button" href="/es/zonas">Comparar zonas primero <ArrowRight size={16} /></Link>
        </div>
        <div>
          <SpanishContactForm source="zenecohomes-es-booking" requestType="booking_request" />
        </div>
      </section>
      <Footer locale="es" />
    </main>
  );
}
