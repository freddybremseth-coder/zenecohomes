import { NextResponse } from "next/server";

const REALTYFLOW_BASE = process.env.REALTYFLOW_BASE_URL || "https://realtyflow.chatgenius.pro";

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));

  const res = await fetch(`${REALTYFLOW_BASE}/api/public/portal-magic-link`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
    cache: "no-store",
  });

  const data = await res.json().catch(() => ({ success: true }));
  return NextResponse.json(data, { status: res.ok ? 200 : res.status });
}
