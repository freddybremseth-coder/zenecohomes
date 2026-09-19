import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const dynamic = "force-dynamic";

/**
 * Public capability check for the EXACT approved metadata-only publisher.
 * Never exposes service-role keys, OAuth tokens, or private content.
 * Zero rows is a valid ready state; a missing schema or RLS error is not.
 */
export async function GET() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !anonKey) return NextResponse.json({
    service: "zeneco-metadata-v1", databaseReadable: false,
  }, { status: 503, headers: { "Cache-Control": "no-store" } });

  try {
    const dbHost = new URL(url).host;
    const supabase = createClient(url, anonKey, {
      auth: { persistSession: false, autoRefreshToken: false },
    });
    const { error } = await supabase.from("seo_page_overrides")
      .select("page_path").eq("brand_id", "zeneco").eq("active", true).limit(1);
    return NextResponse.json({
      service: "zeneco-metadata-v1",
      databaseReadable: !error,
      dbHost,
    }, {
      status: error ? 503 : 200,
      headers: { "Cache-Control": "no-store" },
    });
  } catch {
    return NextResponse.json({ service: "zeneco-metadata-v1", databaseReadable: false },
      { status: 503, headers: { "Cache-Control": "no-store" } });
  }
}
