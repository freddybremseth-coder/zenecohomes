"use client";

import { FormEvent, useEffect, useState } from "react";
import { ArrowRight, KeyRound, Loader2, Mail, ShieldCheck } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import { supabase } from "@/lib/supabase-browser";

const copy = {
  no: {
    eyebrow: "Sikker innlogging",
    title: "Åpne Min side uten passord",
    intro: "Har du allerede fått tilgang? Skriv inn e-postadressen din, så sender vi en personlig og sikker innloggingslenke.",
    placeholder: "din@epost.no",
    send: "Send meg innloggingslenke",
    sending: "Sender…",
    sent: "Sjekk e-posten din. Hvis adressen har tilgang til Min side, får du en innloggingslenke.",
    error: "Vi kunne ikke sende lenken akkurat nå. Kontakt rådgiveren din hvis du trenger hjelp med tilgang.",
    missing: "Innlogging er midlertidig utilgjengelig. Kontakt rådgiveren din for tilgang.",
    path: "/min-side",
  },
  en: {
    eyebrow: "Secure sign-in",
    title: "Open My account without a password",
    intro: "Already invited? Enter your email address and we will send you a personal and secure sign-in link.",
    placeholder: "you@email.com",
    send: "Send my sign-in link",
    sending: "Sending…",
    sent: "Check your email. If this address has portal access, you will receive a sign-in link.",
    error: "We could not send the link right now. Contact your adviser if you need help with access.",
    missing: "Sign-in is temporarily unavailable. Contact your adviser for access.",
    path: "/en/min-side",
  },
  de: {
    eyebrow: "Sicherer Login",
    title: "Mein Bereich ohne Passwort öffnen",
    intro: "Bereits eingeladen? Geben Sie Ihre E-Mail-Adresse ein und wir senden Ihnen einen persönlichen und sicheren Login-Link.",
    placeholder: "ihre@email.de",
    send: "Login-Link senden",
    sending: "Wird gesendet…",
    sent: "Prüfen Sie Ihre E-Mails. Wenn diese Adresse Zugang hat, erhalten Sie einen Login-Link.",
    error: "Der Link konnte gerade nicht gesendet werden. Kontaktieren Sie Ihren Berater, wenn Sie Hilfe beim Zugang benötigen.",
    missing: "Der Login ist vorübergehend nicht verfügbar. Kontaktieren Sie Ihren Berater.",
    path: "/de/min-side",
  },
} as const;

export function PortalMagicLinkLogin({ locale = "no" }: { locale?: Locale }) {
  const t = copy[locale];
  const [email, setEmail] = useState("");
  const [signedIn, setSignedIn] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error" | "missing-config">("idle");

  useEffect(() => {
    if (!supabase) return;

    supabase.auth.getSession().then(({ data }) => {
      setSignedIn(Boolean(data.session));
    });

    const { data } = supabase.auth.onAuthStateChange((_event, session) => {
      setSignedIn(Boolean(session));
    });

    return () => data.subscription.unsubscribe();
  }, []);

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

  if (signedIn) return null;

  return (
    <section className="portal-login-card" aria-labelledby="magic-link-title">
      <div className="portal-card-heading">
        <div className="portal-card-icon" aria-hidden="true">
          <KeyRound size={22} />
        </div>
        <div>
          <p className="eyebrow">{t.eyebrow}</p>
          <h2 id="magic-link-title">{t.title}</h2>
          <p className="portal-card-intro">{t.intro}</p>
        </div>
      </div>

      <form onSubmit={sendMagicLink} className="portal-login-form">
        <label>
          E-post
          <div className="portal-input-wrap">
            <Mail size={18} />
            <input
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder={t.placeholder}
            />
          </div>
        </label>
        <button className="portal-login-button" type="submit" disabled={status === "sending"}>
          {status === "sending" ? <Loader2 size={18} className="spin" /> : <ShieldCheck size={18} />}
          <span>{status === "sending" ? t.sending : t.send}</span>
          {status !== "sending" && <ArrowRight size={18} />}
        </button>
      </form>

      {status === "sent" && <p className="portal-status-message" role="status">{t.sent}</p>}
      {status === "error" && <p className="portal-status-message error" role="alert">{t.error}</p>}
      {status === "missing-config" && <p className="portal-status-message error" role="alert">{t.missing}</p>}
    </section>
  );
}
