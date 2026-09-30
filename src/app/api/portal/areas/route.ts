import { NextResponse } from "next/server";

const REALTYFLOW_BASE = process.env.REALTYFLOW_BASE_URL || "https://realtyflow.chatgenius.pro";

export async function GET() {
  const res = await fetch(`${REALTYFLOW_BASE}/api/area-profiles?brandId=zeneco&public=1`, {
    headers: { Accept: "application/json" },
    next: { revalidate: 3600 },
  });

  const data = await res.json().catch(() => ({ profiles: [] }));
  return NextResponse.json(data, {
    status: res.status,
    headers: { "cache-control": "public, s-maxage=3600, stale-while-revalidate=86400" },
  });
}
