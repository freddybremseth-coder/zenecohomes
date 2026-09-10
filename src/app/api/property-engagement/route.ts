import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase-admin";

const ALLOWED_EVENTS = new Set(["property_conversion_view", "property_conversion_cta_click"]);
const REF_PATTERN = /^[A-Za-z0-9._/-]{1,96}$/;
const SESSION_PATTERN = /^[A-Za-z0-9_-]{8,96}$/;

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));
    const eventType = String(body.eventType || "").trim();
    const propertyRef = String(body.propertyRef || "").trim();
    const copySource = String(body.copySource || "fallback").trim() === "realtyflow" ? "realtyflow" : "fallback";
    const sessionId = String(body.sessionId || "").trim();

    if (!ALLOWED_EVENTS.has(eventType) || !REF_PATTERN.test(propertyRef) || !SESSION_PATTERN.test(sessionId)) {
      return NextResponse.json({ error: "Invalid engagement event" }, { status: 400 });
    }

    const supabase = getSupabaseAdmin();
    if (!supabase) return NextResponse.json({ ok: true, recorded: false });

    const day = new Date().toISOString().slice(0, 10);
    const correlationId = `zeneco:${eventType}:${propertyRef}:${sessionId}:${day}`;
    const { data: existing } = await supabase
      .from("marketing_events")
      .select("id")
      .eq("correlation_id", correlationId)
      .limit(1)
      .maybeSingle();

    if (existing?.id) return NextResponse.json({ ok: true, recorded: false, duplicate: true });

    const { error } = await supabase.from("marketing_events").insert({
      event_type: eventType,
      brand_id: "zeneco",
      content_id: `property:${propertyRef}`,
      channel: "website",
      genome: { copy_version: "conversion-v1", copy_source: copySource },
      metrics: { count: 1 },
      correlation_id: correlationId,
      occurred_at: new Date().toISOString(),
      metadata: {
        property_ref: propertyRef,
        copy_version: "conversion-v1",
        copy_source: copySource,
        measurement: "property_conversion_funnel",
      },
    });

    if (error) throw error;
    return NextResponse.json({ ok: true, recorded: true });
  } catch (error) {
    console.warn("[property-engagement] event was not recorded:", error instanceof Error ? error.message : error);
    // Measurement must never interrupt the buying journey.
    return NextResponse.json({ ok: true, recorded: false });
  }
}
