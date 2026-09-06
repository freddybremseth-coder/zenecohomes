"use client";

import { useState } from "react";
import { Bell, Check, Loader2 } from "lucide-react";
import type { Locale } from "@/lib/i18n";

type Filters = {
  region?: string;
  type?: string;
  minPrice?: number;
  maxPrice?: number;
  minSize?: number;
};

const T: Record<Locale, {
  open: string;
  title: string;
  lead: string;
  placeholder: string;
  submit: string;
  sending: string;
  success: string;
  error: string;
  invalid: string;
  privacy: string;
}> = {
  no: {
    open: "Lagre søk og få varsel",
    title: "Få varsel på nye boliger",
    lead: "Vi sender deg en e-post når nye boliger som matcher dette søket dukker opp.",
    placeholder: "Din e-postadresse",
    submit: "Aktiver varsel",
    sending: "Lagrer …",
    success: "Varsel aktivert! Sjekk innboksen din.",
    error: "Kunne ikke lagre søket. Prøv igjen.",
    invalid: "Skriv inn en gyldig e-postadresse.",
    privacy: "Kun for boligvarsler. Meld av når som helst.",
  },
  de: {
    open: "Suche speichern & benachrichtigt werden",
    title: "Benachrichtigung bei neuen Immobilien",
    lead: "Wir senden Ihnen eine E-Mail, sobald neue passende Immobilien erscheinen.",
    placeholder: "Ihre E-Mail-Adresse",
    submit: "Benachrichtigung aktivieren",
    sending: "Speichern …",
    success: "Aktiviert! Bitte prüfen Sie Ihren Posteingang.",
    error: "Suche konnte nicht gespeichert werden. Bitte erneut versuchen.",
    invalid: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
    privacy: "Nur für Immobilien-Benachrichtigungen. Jederzeit abbestellbar.",
  },
  en: {
    open: "Save search & get alerts",
    title: "Get alerts for new properties",
    lead: "We'll email you when new properties matching this search appear.",
    placeholder: "Your email address",
    submit: "Activate alert",
    sending: "Saving …",
    success: "Alert activated! Check your inbox.",
    error: "Couldn't save the search. Please try again.",
    invalid: "Please enter a valid email address.",
    privacy: "Only for property alerts. Unsubscribe anytime.",
  },
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function SaveSearchButton({ filters, locale = "no" }: { filters: Filters; locale?: Locale }) {
  const t = T[locale];
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error" | "invalid">("idle");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!isValidEmail(email)) {
      setStatus("invalid");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/saved-search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, locale, filters }),
      });
      setStatus(res.ok ? "done" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="save-search done">
        <Check size={17} /> {t.success}
      </div>
    );
  }

  if (!open) {
    return (
      <button type="button" className="save-search-trigger" onClick={() => setOpen(true)}>
        <Bell size={16} /> {t.open}
      </button>
    );
  }

  return (
    <form className="save-search" onSubmit={submit}>
      <div className="save-search-head">
        <Bell size={16} />
        <div>
          <strong>{t.title}</strong>
          <span>{t.lead}</span>
        </div>
      </div>
      <div className="save-search-row">
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === "invalid" || status === "error") setStatus("idle");
          }}
          placeholder={t.placeholder}
          aria-label={t.placeholder}
        />
        <button type="submit" disabled={status === "sending"}>
          {status === "sending" ? <Loader2 size={16} className="spin" /> : null}
          {status === "sending" ? t.sending : t.submit}
        </button>
      </div>
      {status === "invalid" && <p className="save-search-msg error">{t.invalid}</p>}
      {status === "error" && <p className="save-search-msg error">{t.error}</p>}
      <p className="save-search-privacy">{t.privacy}</p>
    </form>
  );
}
