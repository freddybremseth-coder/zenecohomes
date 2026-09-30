"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase-browser";

export function AuthCallbackClient() {
  const [message, setMessage] = useState("Fullfører innlogging...");

  useEffect(() => {
    let mounted = true;

    async function finishLogin() {
      if (!supabase) {
        setMessage("Innlogging er midlertidig utilgjengelig.");
        return;
      }

      const params = new URLSearchParams(window.location.search);
      const tokenHash = params.get("token_hash");
      const code = params.get("code");
      const next = params.get("next") || "/min-side";
      const safeNext = next.startsWith("/") && !next.startsWith("//") ? next : "/min-side";

      if (tokenHash) {
        const { error } = await supabase.auth.verifyOtp({
          token_hash: tokenHash,
          type: "magiclink",
        });
        if (error) {
          setMessage("Innloggingslenken kunne ikke brukes eller er utløpt. Be om en ny lenke fra Min side.");
          return;
        }
      } else if (code) {
        const { error } = await supabase.auth.exchangeCodeForSession(code);
        if (error) {
          setMessage("Innloggingslenken kunne ikke brukes. Be om en ny lenke fra Min side.");
          return;
        }
      }

      const { data } = await supabase.auth.getSession();
      if (!mounted) return;

      if (data.session) {
        setMessage("Du er logget inn. Sender deg videre...");
        window.location.replace(safeNext);
      } else {
        setMessage("Fant ingen aktiv sesjon. Be om en ny innloggingslenke.");
      }
    }

    finishLogin();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="auth-callback-card">
      <p>{message}</p>
      <Link className="text-button" href="/min-side">
        Gå til Min side
      </Link>
    </div>
  );
}
