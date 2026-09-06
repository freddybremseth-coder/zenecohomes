import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/**
 * Server-side Supabase-klient med service-role-nøkkel. Kun for API-ruter / cron
 * (aldri sendt til nettleseren). Returnerer null hvis miljøvariablene mangler,
 * slik at bygg og øvrige sider fungerer uten varsel-oppsettet.
 */
const url = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL || "";
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || "";

export function hasSupabaseAdmin() {
  return Boolean(url && serviceKey);
}

export function getSupabaseAdmin(): SupabaseClient | null {
  if (!url || !serviceKey) return null;
  return createClient(url, serviceKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}
