"use client";

import { useCallback, useEffect, useState } from "react";
import { FileText, Heart, Home, Loader2, MessageSquareText, Sparkles } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import { supabase } from "@/lib/supabase-browser";

type Summary = {
  firstVisit?: boolean;
  since?: string;
  counts?: {
    newProperties?: number;
    newMessages?: number;
    newDocuments?: number;
    favorites?: number;
  };
};

const copy = {
  no: {
    first: "Nytt for deg",
    returning: "Nytt siden sist",
    introFirst: "Her får du rask oversikt over boligene og oppfølgingen som er relevant for deg.",
    introReturning: "Dette har skjedd siden forrige gang du var inne på Min side.",
    properties: "Nye boliger",
    messages: "Nye meldinger",
    documents: "Nye dokumenter",
    favorites: "Favoritter",
    loading: "Henter siste nytt…",
  },
  en: {
    first: "New for you",
    returning: "New since your last visit",
    introFirst: "A quick overview of the properties and follow-up most relevant to you.",
    introReturning: "This has changed since your previous visit to My account.",
    properties: "New properties",
    messages: "New messages",
    documents: "New documents",
    favorites: "Favourites",
    loading: "Loading updates…",
  },
  de: {
    first: "Neu für Sie",
    returning: "Neu seit Ihrem letzten Besuch",
    introFirst: "Ein schneller Überblick über passende Immobilien und Ihre Betreuung.",
    introReturning: "Das hat sich seit Ihrem letzten Besuch geändert.",
    properties: "Neue Immobilien",
    messages: "Neue Nachrichten",
    documents: "Neue Dokumente",
    favorites: "Favoriten",
    loading: "Aktualisierungen werden geladen…",
  },
} as const;

export function PortalSinceLast({ locale = "no" }: { locale?: Locale }) {
  const t = copy[locale];
  const [ready, setReady] = useState(false);
  const [signedIn, setSignedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [summary, setSummary] = useState<Summary | null>(null);

  const load = useCallback(async () => {
    if (!supabase) {
      setReady(true);
      setSignedIn(false);
      return;
    }

    const { data } = await supabase.auth.getSession();
    const token = data.session?.access_token;
    setReady(true);
    setSignedIn(Boolean(token));
    if (!token) {
      setSummary(null);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/portal/since-last", {
        headers: { Authorization: `Bearer ${token}` },
        cache: "no-store",
      });
      const body = await res.json().catch(() => ({}));
      if (res.ok) setSummary(body);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void load();
    if (!supabase) return;
    const { data } = supabase.auth.onAuthStateChange(() => void load());
    return () => data.subscription.unsubscribe();
  }, [load]);

  if (!ready || !signedIn) return null;

  if (loading && !summary) {
    return (
      <article className="portal-since-last portal-since-last-loading">
        <Loader2 className="spin" size={18} /> {t.loading}
      </article>
    );
  }

  const counts = summary?.counts || {};
  const cards = [
    { icon: Home, value: counts.newProperties || 0, label: t.properties, href: "#portal-properties" },
    { icon: Heart, value: counts.favorites || 0, label: t.favorites, href: "#portal-favorites" },
    { icon: MessageSquareText, value: counts.newMessages || 0, label: t.messages, href: "#portal-messages" },
    { icon: FileText, value: counts.newDocuments || 0, label: t.documents, href: "#portal-documents" },
  ];

  return (
    <article className="portal-since-last">
      <div className="portal-since-last-heading">
        <span className="portal-since-last-icon"><Sparkles size={20} /></span>
        <div>
          <p className="eyebrow">{summary?.firstVisit ? t.first : t.returning}</p>
          <h2>{summary?.firstVisit ? t.first : t.returning}</h2>
          <p>{summary?.firstVisit ? t.introFirst : t.introReturning}</p>
        </div>
      </div>
      <div className="portal-since-last-grid">
        {cards.map((card) => (
          <a href={card.href} className="portal-since-last-card" key={card.label}>
            <card.icon size={20} />
            <strong>{card.value}</strong>
            <span>{card.label}</span>
          </a>
        ))}
      </div>
    </article>
  );
}
