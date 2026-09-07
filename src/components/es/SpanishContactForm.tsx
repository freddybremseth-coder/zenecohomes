"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";

type Props = {
  propertyRef?: string;
  propertyTitle?: string;
  requestType?: string;
  source?: string;
};

export function SpanishContactForm({
  propertyRef,
  propertyTitle,
  requestType = "general",
  source = "zenecohomes-es",
}: Props) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          locale: "es",
          source,
          property_ref: propertyRef,
          property_title: propertyTitle,
          request_type: requestType,
        }),
      });
      if (!response.ok) throw new Error("request failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="lead-form" onSubmit={onSubmit}>
      <div className="form-grid">
        <label>
          Nombre
          <input name="name" required placeholder="Tu nombre" />
        </label>
        <label>
          Teléfono
          <input name="phone" placeholder="+34…" />
        </label>
      </div>
      <label>
        Correo electrónico
        <input name="email" type="email" required placeholder="tu@email.com" />
      </label>
      {!propertyRef && (
        <div className="form-grid">
          <label>
            Zona
            <select name="preferred_area" defaultValue="Abierto a recomendaciones">
              <option>Costa Blanca Norte</option>
              <option>Costa Blanca Sur</option>
              <option>Costa Cálida</option>
              <option>Interior</option>
              <option>Abierto a recomendaciones</option>
            </select>
          </label>
          <label>
            Presupuesto
            <input name="budget" placeholder="p. ej. 350.000 €" />
          </label>
        </div>
      )}
      <label>
        ¿Qué estás buscando?
        <textarea
          name="message"
          rows={5}
          placeholder={
            propertyTitle
              ? `Quiero recibir la información completa y actualizada de ${propertyTitle}.`
              : "Cuéntanos brevemente qué tipo de vivienda, zona y estilo de vida buscas."
          }
        />
      </label>
      <button className="submit-button" disabled={status === "sending"} type="submit">
        <Send size={18} />
        {status === "sending" ? "Enviando…" : "Enviar consulta"}
      </button>
      {status === "sent" && (
        <p className="form-success" role="status">
          Gracias. Hemos recibido tu consulta y nos pondremos en contacto contigo.
        </p>
      )}
      {status === "error" && (
        <p className="form-error" role="alert">
          No hemos podido enviar la consulta. Inténtalo de nuevo o contacta directamente con Zen Eco Homes.
        </p>
      )}
    </form>
  );
}
