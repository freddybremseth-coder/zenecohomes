import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase-admin";
import { getProperties, propertyMatchesFilters, getPropertyRef, type Property } from "@/lib/realtyflow";
import { type SavedSearchRow } from "@/lib/savedSearch";
import { alertEmail } from "@/lib/savedSearchEmails";
import { hasEmailConfig, sendEmail } from "@/lib/email";

export const dynamic = "force-dynamic";
export const maxDuration = 60;

function authorized(request: Request): boolean {
  const secret = process.env.CRON_SECRET;
  if (!secret) return false; // Uten hemmelighet er cronen deaktivert (fail-safe).
  const header = request.headers.get("authorization") || "";
  return header === `Bearer ${secret}`;
}

export async function GET(request: Request) {
  if (!authorized(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const supabase = getSupabaseAdmin();
  if (!supabase) {
    return NextResponse.json({ error: "Supabase ikke konfigurert" }, { status: 503 });
  }
  if (!hasEmailConfig()) {
    return NextResponse.json({ error: "E-post ikke konfigurert" }, { status: 503 });
  }

  const { data: searches, error } = await supabase
    .from("saved_searches")
    .select("*")
    .eq("active", true);

  if (error) {
    return NextResponse.json({ error: "Kunne ikke lese lagrede søk" }, { status: 500 });
  }

  const properties = await getProperties();
  const byRef = new Map<string, Property>();
  for (const p of properties) {
    const ref = getPropertyRef(p);
    if (ref) byRef.set(ref, p);
  }

  let notified = 0;
  let newMatchesTotal = 0;
  const rows = (searches || []) as SavedSearchRow[];

  for (const row of rows) {
    const matchRefs = properties
      .filter((p) => propertyMatchesFilters(p, row.filters))
      .map((p) => getPropertyRef(p))
      .filter(Boolean);

    const known = new Set(row.known_refs || []);
    const newRefs = matchRefs.filter((ref) => !known.has(ref));

    if (newRefs.length > 0) {
      const newProperties = newRefs
        .map((ref) => byRef.get(ref))
        .filter((p): p is Property => Boolean(p));

      const { subject, html } = alertEmail(row, newProperties);
      const result = await sendEmail({ to: row.email, subject, html });

      if (result.ok) {
        notified += 1;
        newMatchesTotal += newRefs.length;
        // Oppdater kjente treff til hele dagens matchsett + tidsstempel.
        await supabase
          .from("saved_searches")
          .update({ known_refs: matchRefs, last_notified_at: new Date().toISOString() })
          .eq("id", row.id);
      }
    } else if ((row.known_refs || []).length !== matchRefs.length) {
      // Hold known_refs synkronisert (f.eks. når boliger forsvinner), uten e-post.
      await supabase.from("saved_searches").update({ known_refs: matchRefs }).eq("id", row.id);
    }
  }

  return NextResponse.json({
    ok: true,
    searches: rows.length,
    notified,
    newMatchesTotal,
  });
}
