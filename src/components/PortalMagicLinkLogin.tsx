"use client";

import { FormEvent, useState } from "react";
import { KeyRound, Loader2, Mail, ShieldCheck } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import { supabase } from "@/lib/supabase-browser";

const copy = {
  no: {
    eyebrow: "Rask innlogging",
    title: "Åpne Min side uten passord",
    intro: "Har du allerede fått tilgang? Skriv inn e-postadressen din, så sender vi en personlig innloggingslenke.",
    placeholder: "din@epost.no",
    send: "Send meg innloggingslenke",
    sending: "Sender…",
    sent: "Sjekk e-posten din. Hvis adressen har tilgang til Min side, får du en innloggingslenke.",
    error: "Vi kunne ikke sende lenken akkurat nå. Har du ikke fått tilgang ennå, bruk skjemaet under for å be om Min side.",
    missing: "Innlogging er midlertidig utilgjengelig. Kontakt rådgiveren din for tilgang.",
    path: "/min-side",
  },
  en: {
    eyebrow: "Quick login",
    title: "Open My account without a password",
    intro: "Already invited? Enter your email address and we will send you a personal sign-in link.",
    placeholder: "you@email.com",
    send: "Send my sign-in link",
    sending: "Sending…",
    sent: "Check your email. If this address has portal access, you will receive a sign-in link.",
    error: "We could not send the link right now. If you have not been invited yet, use the access request form below.",
    missing: "Sign-in is temporarily unavailable. Contact your adviser for access.",
    path: "/en/min-side",
  },
  de: {
    eyebrow: "Schneller Login",
    title: "Mein Bereich ohne Passwort öffnen",
    intro: "Bereits eingeladen? Geben Sie Ihre E-Mail-Adresse ein und wir senden Ihnen einen persönlichen Login-Link.",
    placeholder: "ihre@email.de",
    send: "Login-Link senden",
    sending: "Wird gesendet…",
    sent: "Prüfen Sie Ihre E-Mails. Wenn diese Adresse Zugang hat, erhalten Sie einen Login-Link.",
    error: "Der Link konnte gerade nicht gesendet werden. Falls Sie noch nicht eingeladen wurden, nutzen Sie bitte das Zugangsformular unten.",
    missing: "Der Login ist vorübergehend nicht verfügbar. Kontaktieren Sie Ihren Berater.",
    path: "/de/min-side",
  },
} as const;

export function PortalMagicLinkLogin({ locale = "no" }: { locale?: Locale }) {
  const t = copy[locale];
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
        emailRedirectTo: `${window.location.origin}${t.path}`,
      },
    });

    setStatus(error ? "error" : "sent");
  }

  return (
    <section
      aria-labelledby="magic-link-title"
      style={{
        maxWidth: 760,
        margin: "0 auto 1.5rem",
        padding: "1.4rem",
        border: "1px solid rgba(15, 23, 42, 0.12)",
        borderRadius: 22,
        background: "rgba(255,255,255,0.96)",
        boxShadow: "0 18px 50px rgba(15,23,42,0.08)",
      }}
    >
      <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
        <div aria-hidden="true" style={{ width: 42, height: 42, borderRadius: 14, display: "grid", placeItems: "center", background: "#eef6f4", flexShrink: 0 }}>
          <KeyRound size={21} />
        </div>
        <div style={{ flex: 1 }}>
          <p className="eyebrow" style={{ marginTop: 0 }}>{t.eyebrow}</p>
          <h2 id="magic-link-title" style={{ marginBottom: 8 }}>{t.title}</h2>
          <p style={{ marginTop: 0, opacity: 0.78 }}>{t.intro}</p>

          <form onSubmit={sendMagicLink} style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 18 }}>
            <label style={{ flex: "1 1 280px" }}>
              <span className="sr-only">E-mail</span>
              <div style={{ position: "relative" }}>
                <Mail size={18} style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", opacity: 0.55 }} />
                <input
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder={t.placeholder}
                  style={{ width: "100%", minHeight: 48, borderRadius: 14, border: "1px solid rgba(15,23,42,0.18)", padding: "0 14px 0 44px", font: "inherit" }}
                />
              </div>
            </label>
            <button className="contact-button" type="submit" disabled={status === "sending"} style={{ minHeight: 48, border: 0, cursor: "pointer" }}>
              {status === "sending" ? <Loader2 size={18} className="spin" /> : <ShieldCheck size={18} />}
              {status === "sending" ? t.sending : t.send}
            </button>
          </form>

          {status === "sent" && <p role="status" style={{ marginBottom: 0, marginTop: 14 }}>{t.sent}</p>}
          {status === "error" && <p role="alert" style={{ marginBottom: 0, marginTop: 14 }}>{t.error}</p>}
          {status === "missing-config" && <p role="alert" style={{ marginBottom: 0, marginTop: 14 }}>{t.missing}</p>}
        </div>
      </div>
    </section>
  );
}
