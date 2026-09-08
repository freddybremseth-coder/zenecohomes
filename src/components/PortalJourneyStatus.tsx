"use client";

import { useCallback, useEffect, useState } from "react";
import { CalendarClock, CheckCircle2, Loader2, PauseCircle, Route } from "lucide-react";
import { supabase } from "@/lib/supabase-browser";

type JourneyStatus = {
  stage: string;
  title: string;
  description: string;
  nextStep: string;
  progress: number;
  completed: boolean;
  paused?: boolean;
  nextFollowup?: string | null;
  waitingUntil?: string | null;
};

function formatDate(value?: string | null) {
  if (!value) return null;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return null;
  return new Intl.DateTimeFormat("nb-NO", { day: "numeric", month: "long", year: "numeric" }).format(date);
}

export function PortalJourneyStatus() {
  const [ready, setReady] = useState(false);
  const [signedIn, setSignedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<JourneyStatus | null>(null);
  const [error, setError] = useState(false);

  const load = useCallback(async () => {
    if (!supabase) {
      setReady(true);
      setSignedIn(false);
      return;
    }

    const { data } = await supabase.auth.getSession();
    const token = data.session?.access_token;
    setSignedIn(Boolean(token));
    setReady(true);
    if (!token) {
      setStatus(null);
      return;
    }

    setLoading(true);
    setError(false);
    try {
      const res = await fetch("/api/portal/journey-status", {
        headers: { Authorization: `Bearer ${token}` },
        cache: "no-store",
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus((await res.json()) as JourneyStatus);
    } catch {
      setError(true);
      setStatus(null);
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

  if (loading) {
    return (
      <article className="portal-panel wide-panel" style={{ marginBottom: 24 }}>
        <p><Loader2 size={16} className="spin" /> Henter status for kjøpsreisen…</p>
      </article>
    );
  }

  if (error || !status) return null;

  const followupDate = formatDate(status.waitingUntil || status.nextFollowup);
  const StatusIcon = status.completed ? CheckCircle2 : status.paused ? PauseCircle : Route;

  return (
    <article className="portal-panel wide-panel" style={{ marginBottom: 24 }}>
      <div className="panel-title">
        <StatusIcon size={20} />
        <div>
          <p className="eyebrow" style={{ marginBottom: 4 }}>Din kjøpsreise</p>
          <h3>{status.title}</h3>
        </div>
      </div>

      <p>{status.description}</p>

      <div aria-label={`Fremdrift ${status.progress} prosent`} style={{ margin: "18px 0" }}>
        <div style={{ display: "flex", justifyContent: "space-between", gap: 12, marginBottom: 7 }}>
          <small>Fremdrift</small>
          <strong>{status.progress}%</strong>
        </div>
        <div style={{ height: 9, borderRadius: 999, overflow: "hidden", background: "rgba(16,42,50,.10)" }}>
          <div style={{ width: `${Math.max(0, Math.min(100, status.progress))}%`, height: "100%", background: "currentColor", opacity: 0.75 }} />
        </div>
      </div>

      <div style={{ borderTop: "1px solid rgba(16,42,50,.12)", paddingTop: 14 }}>
        <strong>Neste steg</strong>
        <p style={{ marginBottom: followupDate ? 10 : 0 }}>{status.nextStep}</p>
        {followupDate && (
          <p style={{ display: "flex", gap: 8, alignItems: "center", margin: 0 }}>
            <CalendarClock size={16} /> Planlagt oppfølging: {followupDate}
          </p>
        )}
      </div>
    </article>
  );
}
