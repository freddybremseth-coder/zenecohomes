"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Loader2 } from "lucide-react";
import { supabase } from "@/lib/supabase-browser";

export function PortalAuthCallback() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [error, setError] = useState("");

  useEffect(() => {
    const tokenHash = searchParams.get("token_hash") || "";
    const next = searchParams.get("next") || "/min-side";

    if (!supabase || !tokenHash) {
      setError("Innloggingslenken er ugyldig eller utløpt.");
      return;
    }

    supabase.auth.verifyOtp({
      token_hash: tokenHash,
      type: "magiclink",
    }).then(({ error: verifyError }) => {
      if (verifyError) {
        setError("Innloggingslenken er ugyldig eller utløpt. Be om en ny lenke.");
        return;
      }

      const safeNext = next.startsWith("/") && !next.startsWith("//") ? next : "/min-side";
      router.replace(safeNext);
      router.refresh();
    });
  }, [router, searchParams]);

  return (
    <main className="portal-auth-callback">
      <div className="portal-auth-callback-card">
        {error ? (
          <>
            <h1>Kunne ikke logge inn</h1>
            <p>{error}</p>
            <a className="contact-button" href="/min-side">Tilbake til Min side</a>
          </>
        ) : (
          <>
            <Loader2 className="spin" size={28} />
            <h1>Åpner Min side</h1>
            <p>Vi bekrefter den sikre innloggingslenken din.</p>
          </>
        )}
      </div>
    </main>
  );
}
