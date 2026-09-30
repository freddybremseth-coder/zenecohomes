import { NextResponse } from "next/server";

const REALTYFLOW_BASE = process.env.REALTYFLOW_BASE_URL || "https://realtyflow.chatgenius.pro";

async function proxy(request: Request, method: "GET" | "POST") {
  const authorization = request.headers.get("authorization") || "";
  const body = method === "GET" ? undefined : await request.text();

  const res = await fetch(`${REALTYFLOW_BASE}/api/portal/saved-search`, {
    method,
    headers: {
      Authorization: authorization,
      ...(body ? { "Content-Type": "application/json" } : {}),
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

export async function GET(request: Request) {
  return proxy(request, "GET");
}

export async function POST(request: Request) {
  return proxy(request, "POST");
}
