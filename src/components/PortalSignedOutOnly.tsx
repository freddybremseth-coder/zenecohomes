"use client";

import { ReactNode, useEffect, useState } from "react";
import { supabase } from "@/lib/supabase-browser";

export function PortalSignedOutOnly({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);
  const [signedIn, setSignedIn] = useState(false);

  useEffect(() => {
    if (!supabase) {
      setReady(true);
      return;
    }

    supabase.auth.getSession().then(({ data }) => {
      setSignedIn(Boolean(data.session));
      setReady(true);
    });

    const { data } = supabase.auth.onAuthStateChange((_event, session) => {
      setSignedIn(Boolean(session));
      setReady(true);
    });

    return () => data.subscription.unsubscribe();
  }, []);

  if (!ready || signedIn) return null;
  return <>{children}</>;
}
