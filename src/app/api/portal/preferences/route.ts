import { NextResponse } from "next/server";

const REALTYFLOW_BASE = process.env.REALTYFLOW_BASE_URL || "https://realtyflow.chatgenius.pro";

export async function GET(request: Request) {
  const authorization = request.headers.get("authorization") || "";
  const res = await fetch(`${REALTYFLOW_BASE}/api/portal/preferences`, {
    method: "GET",
    headers: { Authorization: authorization },
    cache: "no-store",
  });
  const data = await res.json().catch(() => ({}));
  return NextResponse.json(data, { status: res.status });
}

export async function POST(request: Request) {
  const authorization = request.headers.get("authorization") || "";
  const body = await request.json();

  const res = await fetch(`${REALTYFLOW_BASE}/api/portal/preferences`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: authorization,
    },
    body: JSON.stringify(body),
  });

  const data = await res.json().catch(() => ({}));
  return NextResponse.json(data, { status: res.status });
}
