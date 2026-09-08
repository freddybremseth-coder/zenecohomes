import { NextResponse } from "next/server";

const REALTYFLOW_BASE = process.env.REALTYFLOW_BASE_URL || "https://realtyflow.chatgenius.pro";

export async function POST(request: Request) {
  const authorization = request.headers.get("authorization") || "";
  const body = await request.text();
  const res = await fetch(`${REALTYFLOW_BASE}/api/portal/messages/activity`, {
    method: "POST",
    headers: {
      Authorization: authorization,
      "content-type": "application/json",
    },
    body,
    cache: "no-store",
  });
  const data = await res.json().catch(() => ({}));
  return NextResponse.json(data, {
    status: res.status,
    headers: { "cache-control": "private, no-store" },
  });
}
