import { NextResponse } from "next/server";
import { sendLead } from "@/lib/realtyflow";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body.name || !body.email) {
      return NextResponse.json({ error: "Navn og e-post er påkrevd" }, { status: 400 });
    }

    await sendLead({
      name: String(body.name),
      email: String(body.email),
      phone: body.phone ? String(body.phone) : undefined,
      preferred_area: body.preferred_area ? String(body.preferred_area) : undefined,
      budget: body.budget ? String(body.budget) : undefined,
      property_type: body.property_type ? String(body.property_type) : undefined,
      bedrooms: body.bedrooms ? String(body.bedrooms) : undefined,
      timeline: body.timeline ? String(body.timeline) : undefined,
      message: body.message ? String(body.message) : undefined,
      source: body.source ? String(body.source) : "zenecohomes-next",
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Kunne ikke sende forespørsel" },
      { status: 500 },
    );
  }
}
