"use client";

import { useCallback, useEffect, useState } from "react";
import { CheckCircle2, Loader2, Mail } from "lucide-react";
import { supabase } from "@/lib/supabase-browser";

export function PortalNewsletterCard() {
  const [ready, setReady] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [status, setStatus] = useState<"idle" | "saving" | "error">("idle");

  const load = useCallback(async () => {
    if (!supabase) return;
    const { data } = await supabase.auth.getSession();
    const token = data.session?.access_token;
    if (!token) return;
    const res = await fetch("/api/portal/newsletter", {
      headers: { Authorization: `Bearer ${token}` },
      cache: "no-store",
    });
    const body = await res.json().catch(() => ({}));
    if (res.ok) setSubscribed(Boolean(body.subscribed));
    setReady(true);
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  async function subscribe() {
    if (!supabase) return;
    setStatus("saving");
    const { data } = await supabase.auth.getSession();
    const token = data.session?.access_token;
    if (!token) return setStatus("error");

    const res = await fetch("/api/portal/newsletter", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ consent: true }),
    });
    if (!res.ok) return setStatus("error");
    setSubscribed(true);
    setStatus("idle");
  }

  async function unsubscribe() {
    if (!supabase) return;
    setStatus("saving");
    const { data } = await supabase.auth.getSession();
    const token = data.session?.access_token;
    if (!token) return setStatus("error");

    const res = await fetch("/api/portal/newsletter", {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!res.ok) return setStatus("error");
    setSubscribed(false);
    setStatus("idle");
  }

  if (!ready) return null;

  return (
    <article className="portal-panel portal-newsletter-card">
      <div className="panel-title">
        <Mail size={20} />
        <h3>Nyhetsbrev fra Zen Eco Homes</h3>
      </div>
      {subscribed ? (
        <>
          <p className="portal-newsletter-status"><CheckCircle2 size={17} /> Du er påmeldt.</p>
          <p>Du får relevante markedsoppdateringer, guider og utvalgte bolignyheter. Du kan melde deg av når som helst.</p>
          <button className="text-button" type="button" onClick={() => void unsubscribe()} disabled={status === "saving"}>
            {status === "saving" ? "Oppdaterer…" : "Meld av nyhetsbrev"}
          </button>
        </>
      ) : (
        <>
          <p>Få nyttige markedsoppdateringer, kjøperguider og utvalgte bolignyheter på e-post.</p>
          <button className="contact-button" type="button" onClick={() => void subscribe()} disabled={status === "saving"}>
            {status === "saving" ? <Loader2 size={17} className="spin" /> : <Mail size={17} />}
            {status === "saving" ? "Melder på…" : "Meld meg på nyhetsbrevet"}
          </button>
          <small>Ved å trykke på knappen samtykker du til nyhetsbrev fra Zen Eco Homes. Du kan melde deg av når som helst.</small>
        </>
      )}
      {status === "error" && <p className="form-error">Kunne ikke oppdatere nyhetsbrevstatus akkurat nå.</p>}
    </article>
  );
}
