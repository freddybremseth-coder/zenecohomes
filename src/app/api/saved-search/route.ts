import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase-admin";
import { getProperties, propertyMatchesFilters, getPropertyRef } from "@/lib/realtyflow";
import { isValidEmail, sanitizeFilters, type SavedSearchRow } from "@/lib/savedSearch";
import { confirmationEmail } from "@/lib/savedSearchEmails";
import { hasEmailConfig, sendEmail } from "@/lib/email";
import type { Locale } from "@/lib/i18n";

export async function POST(request: Request) {
  const supabase = getSupabaseAdmin();
  if (!supabase) {
    return NextResponse.json(
      { error: "Varsel-tjenesten er ikke konfigurert ennå." },
      { status: 503 },
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Ugyldig forespørsel" }, { status: 400 });
  }

  const email = String(body.email || "").trim().toLowerCase();
  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Ugyldig e-postadresse" }, { status: 400 });
  }

  const localeInput = String(body.locale || "no");
  const locale: Locale = localeInput === "de" || localeInput === "en" ? localeInput : "no";
  const filters = sanitizeFilters(body.filters);
  const label = typeof body.label === "string" ? body.label.slice(0, 120) : null;

  // Snapshot dagens treff, slik at brukeren kun varsles om nye boliger etterpå.
  let knownRefs: string[] = [];
  try {
    const properties = await getProperties();
    knownRefs = properties
      .filter((p) => propertyMatchesFilters(p, filters))
      .map((p) => getPropertyRef(p))
      .filter(Boolean);
  } catch {
    knownRefs = [];
  }

  const { data, error } = await supabase
    .from("saved_searches")
    .insert({
      email,
      locale,
      filters,
      label,
      known_refs: knownRefs,
      active: true,
    })
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: "Kunne ikke lagre søket akkurat nå." }, { status: 500 });
  }

  if (hasEmailConfig()) {
    const { subject, html } = confirmationEmail(data as SavedSearchRow);
    // Ikke la e-postfeil velte lagringen – søket er allerede lagret.
    await sendEmail({ to: email, subject, html }).catch(() => null);
  }

  return NextResponse.json({ ok: true, matchesNow: knownRefs.length });
}
