"use client";

import { FormEvent, useState } from "react";
import { KeyRound, Loader2, Mail, ShieldCheck } from "lucide-react";
import { supabase } from "@/lib/supabase-browser";

export function SpanishPortalLogin() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error" | "missing-config">("idle");

  async function sendMagicLink(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!supabase) {
      setStatus("missing-config");
      return;
    }

    const normalizedEmail = email.trim().toLowerCase();
    if (!normalizedEmail) return;

    setStatus("sending");
    const { error } = await supabase.auth.signInWithOtp({
      email: normalizedEmail,
      options: {
        shouldCreateUser: false,
        emailRedirectTo: `${window.location.origin}/es/mi-area`,
      },
    });

    setStatus(error ? "error" : "sent");
  }

  return (
    <section
      aria-labelledby="spanish-magic-link-title"
      style={{
        maxWidth: 760,
        margin: "0 auto",
        padding: "1.4rem",
        border: "1px solid rgba(15, 23, 42, 0.12)",
        borderRadius: 22,
        background: "rgba(255,255,255,0.96)",
        boxShadow: "0 18px 50px rgba(15,23,42,0.08)",
      }}
    >
      <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
        <div
          aria-hidden="true"
          style={{
            width: 42,
            height: 42,
            borderRadius: 14,
            display: "grid",
            placeItems: "center",
            background: "#eef6f4",
            flexShrink: 0,
          }}
        >
          <KeyRound size={21} />
        </div>
        <div style={{ flex: 1 }}>
          <p className="eyebrow" style={{ marginTop: 0 }}>Acceso rápido</p>
          <h2 id="spanish-magic-link-title" style={{ marginBottom: 8 }}>Abre Mi área sin contraseña</h2>
          <p style={{ marginTop: 0, opacity: 0.78 }}>
            Si ya tienes acceso, introduce tu correo electrónico y te enviaremos un enlace personal y seguro para iniciar sesión.
          </p>

          <form onSubmit={sendMagicLink} style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 18 }}>
            <label style={{ flex: "1 1 280px" }}>
              <span className="sr-only">Correo electrónico</span>
              <div style={{ position: "relative" }}>
                <Mail size={18} style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", opacity: 0.55 }} />
                <input
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="tu@email.com"
                  style={{ width: "100%", minHeight: 48, borderRadius: 14, border: "1px solid rgba(15,23,42,0.18)", padding: "0 14px 0 44px", font: "inherit" }}
                />
              </div>
            </label>
            <button className="contact-button" type="submit" disabled={status === "sending"} style={{ minHeight: 48, border: 0, cursor: "pointer" }}>
              {status === "sending" ? <Loader2 size={18} className="spin" /> : <ShieldCheck size={18} />}
              {status === "sending" ? "Enviando…" : "Enviarme el enlace de acceso"}
            </button>
          </form>

          {status === "sent" && (
            <p role="status" style={{ marginBottom: 0, marginTop: 14 }}>
              Revisa tu correo. Si esta dirección tiene acceso a Mi área, recibirás un enlace para iniciar sesión.
            </p>
          )}
          {status === "error" && (
            <p role="alert" style={{ marginBottom: 0, marginTop: 14 }}>
              No hemos podido enviar el enlace ahora mismo. Si aún no tienes acceso, contacta con tu asesor.
            </p>
          )}
          {status === "missing-config" && (
            <p role="alert" style={{ marginBottom: 0, marginTop: 14 }}>
              El acceso está temporalmente no disponible. Contacta con tu asesor para obtener ayuda.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
