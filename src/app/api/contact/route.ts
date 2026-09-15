import { NextResponse } from "next/server";
import { getInlandTown } from "@/lib/inland";
import { sendLead } from "@/lib/realtyflow";
import { getSupabaseAdmin } from "@/lib/supabase-admin";

function getInlandLeadContext(body: Record<string, unknown>) {
  const source = body.source ? String(body.source).trim() : "";
  const prefix = "zeneco-inland-";
  if (!source.startsWith(prefix)) return null;

  const slug = source.slice(prefix.length);
  if (!slug) return null;

  const town = getInlandTown(slug);
  if (!town) return null;

  return {
    town,
    preferredArea: town.name,
    requestType: body.request_type ? String(body.request_type) : "inland-town",
  };
}

async function recordPropertyLead(body: Record<string, unknown>) {
  const propertyRef = body.property_ref ? String(body.property_ref).trim() : "";
  if (!propertyRef) return;
  const supabase = getSupabaseAdmin();
  if (!supabase) return;

  const occurredAt = new Date().toISOString();
  const { error } = await supabase.from("marketing_events").insert({
    event_type: "property_lead_submit",
    brand_id: "zeneco",
    content_id: `property:${propertyRef}`,
    channel: "website",
    genome: { copy_version: "conversion-v1" },
    metrics: { count: 1 },
    correlation_id: `zeneco:property_lead_submit:${propertyRef}:${Date.now()}`,
    occurred_at: occurredAt,
    metadata: {
      property_ref: propertyRef,
      copy_version: "conversion-v1",
      source: body.source ? String(body.source) : "zenecohomes-next",
      request_type: body.request_type ? String(body.request_type) : null,
      measurement: "property_conversion_funnel",
    },
  });
  if (error) console.warn("[contact] property lead metric skipped:", error.message);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, unknown>;

    if (!body.name || !body.email) {
      return NextResponse.json({ error: "Navn og e-post er påkrevd" }, { status: 400 });
    }

    const inlandContext = getInlandLeadContext(body);
    const preferredArea = inlandContext?.preferredArea || (body.preferred_area ? String(body.preferred_area) : undefined);
    const requestType = inlandContext?.requestType || (body.request_type ? String(body.request_type) : undefined);

    await sendLead({
      name: String(body.name),
      email: String(body.email),
      phone: body.phone ? String(body.phone) : undefined,
      preferred_area: preferredArea,
      budget: body.budget ? String(body.budget) : undefined,
      property_type: body.property_type ? String(body.property_type) : undefined,
      bedrooms: body.bedrooms ? String(body.bedrooms) : undefined,
      timeline: body.timeline ? String(body.timeline) : undefined,
      purchase_goal: body.purchase_goal ? String(body.purchase_goal) : undefined,
      financing_status: body.financing_status ? String(body.financing_status) : undefined,
      spain_experience: body.spain_experience ? String(body.spain_experience) : undefined,
      next_step: body.next_step ? String(body.next_step) : undefined,
      message: body.message ? String(body.message) : undefined,
      source: body.source ? String(body.source) : "zenecohomes-next",
      property_ref: body.property_ref ? String(body.property_ref) : undefined,
      property_title: body.property_title ? String(body.property_title) : undefined,
      request_type: requestType,
    });

    await recordPropertyLead(body).catch(() => undefined);
    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Kunne ikke sende forespørsel" },
      { status: 500 },
    );
  }
}
