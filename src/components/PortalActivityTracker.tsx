"use client";

import { useEffect } from "react";
import { supabase } from "@/lib/supabase-browser";

type Props =
  | { signal: "session_active"; propertyId?: never }
  | { signal: "property_view"; propertyId: string };

export function PortalActivityTracker(props: Props) {
  useEffect(() => {
    let cancelled = false;

    async function send() {
      if (!supabase) return;
      const { data } = await supabase.auth.getSession();
      const token = data.session?.access_token;
      if (!token || cancelled) return;

      const payload = props.signal === "property_view"
        ? { signal: props.signal, propertyId: props.propertyId }
        : { signal: props.signal };

      await fetch("/api/portal/activity", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "content-type": "application/json",
        },
        body: JSON.stringify(payload),
        cache: "no-store",
        keepalive: true,
      }).catch(() => undefined);
    }

    void send();
    return () => { cancelled = true; };
  }, [props.signal, props.signal === "property_view" ? props.propertyId : ""]);

  return null;
}
