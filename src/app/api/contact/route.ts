import { NextResponse } from "next/server";
import { getInlandTown } from "@/lib/inland";
import { sendLead } from "@/lib/realtyflow";
import { getSupabaseAdmin } from "@/lib/supabase-admin";

const CARE_ORIGIN = "https://care.zenecohomes.com";

function careCorsHeaders(request: Request): HeadersInit {
  const origin = request.headers.get("origin");
  if (origin !== CARE_ORIGIN) return {};
  return {
    "Access-Control-Allow-Origin": CARE_ORIGIN,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Vary": "Origin",
  };
}

function contactJson(request: Request, body: unknown, init?: ResponseInit) {
  return NextResponse.json(body, {
    ...init,
    headers: {
      ...careCorsHeaders(request),
      ...(init?.headers || {}),
    },
  });
}


type ContactRateBucket = { count: number; resetAt: number };

const CONTACT_RATE_WINDOW_MS = 15 * 60 * 1000;
const CONTACT_RATE_MAX = 8;
const contactRateBuckets = new Map<string, ContactRateBucket>();

function contactClientIp(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  return forwarded || request.headers.get("cf-connecting-ip")?.trim() || "";
}

function isContactRateLimited(request: Request) {
  const ip = contactClientIp(request);
  if (!ip) return false;

  const now = Date.now();
  const current = contactRateBuckets.get(ip);
  if (!current || current.resetAt <= now) {
    contactRateBuckets.set(ip, { count: 1, resetAt: now + CONTACT_RATE_WINDOW_MS });
    return false;
  }

  current.count += 1;
  if (contactRateBuckets.size > 5000) {
    for (const [key, bucket] of contactRateBuckets) {
      if (bucket.resetAt <= now) contactRateBuckets.delete(key);
    }
  }
  return current.count > CONTACT_RATE_MAX;
}

function contactString(body: Record<string, unknown>, key: string) {
  const value = body[key];
  return typeof value === "string" ? value.trim() : "";
}

function isValidContactEmail(value: string) {
  return value.length <= 320 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

const TEXT_ONLY_BUDGET_TERMS = [
  "ikke avklart",
  "ikke bestemt",
  "åpen",
  "open",
  "not decided",
  "not sure",
  "undecided",
  "a definir",
  "por definir",
  "sin definir",
  "offen",
  "noch offen",
];

function looksLikeGeneratedBudget(value: string) {
  if (!value || /\d/.test(value)) return false;

  const normalized = value.toLocaleLowerCase();
  if (TEXT_ONLY_BUDGET_TERMS.some((term) => normalized.includes(term))) return false;

  const compact = value.replace(/[^A-Za-zÀ-ÖØ-öø-ÿ]/g, "");
  if (compact.length < 14 || /\s/.test(value)) return false;

  const upper = (compact.match(/[A-ZÀ-ÖØ-Þ]/g) || []).length;
  const lower = (compact.match(/[a-zà-öø-ÿ]/g) || []).length;
  return upper >= 4 && lower >= 4;
}

function contactSpamReason(body: Record<string, unknown>) {
  const honeypot = contactString(body, "contact_website");
  if (honeypot) return "honeypot";

  const startedAt = Number(body.form_started_at || 0);
  if (startedAt > 0 && Date.now() - startedAt >= 0 && Date.now() - startedAt < 500) {
    return "too-fast";
  }

  const name = contactString(body, "name");
  const email = contactString(body, "email");
  const phone = contactString(body, "phone");
  const budget = contactString(body, "budget");
  const message = contactString(body, "message");

  if (name.length > 180 || email.length > 320 || phone.length > 80 || budget.length > 160 || message.length > 6000) {
    return "field-length";
  }
  if (name && /^https?:\/\//i.test(name)) return "name-url";
  if (looksLikeGeneratedBudget(budget)) return "generated-budget";

  return null;
}

export async function OPTIONS(request: Request) {
  return new Response(null, {
    status: 204,
    headers: careCorsHeaders(request),
  });
}

function publicLeadSourcePage(value: unknown): string | undefined {
  if (typeof value !== "string" || value.length > 700) return undefined;
  try {
    const url = new URL(value);
    if (url.protocol !== "https:" && url.protocol !== "http:") return undefined;
    const hostname = url.hostname.toLowerCase();
    if (!["www.zenecohomes.com", "zenecohomes.com", "care.zenecohomes.com"].includes(hostname)) return undefined;
    if (url.pathname.length > 300) return undefined;
    const origin = hostname === "care.zenecohomes.com" ? CARE_ORIGIN : "https://www.zenecohomes.com";
    return origin + url.pathname;
  } catch { return undefined; }
}

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

async function recordCorporateLead(body: Record<string, unknown>) {
  const requestType = body.request_type ? String(body.request_type).trim() : "";
  const source = body.source ? String(body.source).trim() : "";
  const isCorporate = requestType === "corporate-home" || source.includes("corporate");
  if (!isCorporate) return;

  const supabase = getSupabaseAdmin();
  if (!supabase) return;

  const occurredAt = new Date().toISOString();
  const { error } = await supabase.from("marketing_events").insert({
    event_type: "corporate_lead_submit",
    brand_id: "zeneco",
    content_id: "corporate-homes",
    channel: "website",
    genome: { copy_version: "corporate-v1" },
    metrics: { count: 1 },
    correlation_id: `zeneco:corporate_lead_submit:${Date.now()}`,
    occurred_at: occurredAt,
    metadata: {
      copy_version: "corporate-v1",
      source: source || "zeneco-corporate-homes",
      request_type: requestType || "corporate-home",
      page_url: publicLeadSourcePage(body.page_url) || null,
      utm_source: body.utm_source ? String(body.utm_source).slice(0, 80) : null,
      utm_medium: body.utm_medium ? String(body.utm_medium).slice(0, 80) : null,
      utm_campaign: body.utm_campaign ? String(body.utm_campaign).slice(0, 120) : null,
      utm_content: body.utm_content ? String(body.utm_content).slice(0, 160) : null,
      measurement: "corporate_conversion_funnel",
    },
  });
  if (error) console.warn("[contact] corporate lead metric skipped:", error.message);
}

const CARE_DISCOVERY_SOURCES = new Set([
  "google_search",
  "bing_search",
  "chatgpt",
  "google_gemini",
  "microsoft_copilot",
  "perplexity",
  "brave_search",
  "duckduckgo",
]);

function careDiscoverySource(body: Record<string, unknown>) {
  const value = body.discovery_source ? String(body.discovery_source).trim() : "";
  return CARE_DISCOVERY_SOURCES.has(value) ? value : null;
}

async function recordCareLead(body: Record<string, unknown>) {
  const requestType = body.request_type ? String(body.request_type).trim() : "";
  const source = body.source ? String(body.source).trim() : "";
  const allowedIntents = new Set([
    "care-keyholding",
    "care-boligtilsyn",
    "care-nokkeloppbevaring",
    "care-klargjoring",
    "care-uvaer",
  ]);
  if (!source.startsWith("zeneco-care-") || !allowedIntents.has(requestType)) return;

  const supabase = getSupabaseAdmin();
  if (!supabase) return;

  const intent = requestType.replace(/^care-/, "");
  const occurredAt = new Date().toISOString();
  const { error } = await supabase.from("marketing_events").insert({
    event_type: "care_lead_submit",
    brand_id: "zeneco",
    content_id: `care:${intent}`,
    channel: "website",
    genome: { copy_version: "care-v1" },
    metrics: { count: 1 },
    correlation_id: `zeneco:care_lead_submit:${intent}:${Date.now()}`,
    occurred_at: occurredAt,
    metadata: {
      copy_version: "care-v1",
      service_intent: intent,
      source,
      request_type: requestType,
      page_url: publicLeadSourcePage(body.page_url) || null,
      utm_source: body.utm_source ? String(body.utm_source).slice(0, 80) : null,
      utm_medium: body.utm_medium ? String(body.utm_medium).slice(0, 80) : null,
      utm_campaign: body.utm_campaign ? String(body.utm_campaign).slice(0, 120) : null,
      utm_content: body.utm_content ? String(body.utm_content).slice(0, 160) : null,
      measurement: "care_conversion_funnel",
      discovery_source: careDiscoverySource(body),
    },
  });
  if (error) console.warn("[contact] care lead metric skipped:", error.message);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, unknown>;

    const spamReason = contactSpamReason(body);
    if (spamReason) {
      console.warn("[contact] blocked suspected spam:", spamReason);
      return contactJson(request, { ok: true });
    }

    if (isContactRateLimited(request)) {
      return contactJson(request, { error: "For mange forespørsler. Prøv igjen senere." }, { status: 429 });
    }

    const email = contactString(body, "email");
    if (email && !isValidContactEmail(email)) {
      return contactJson(request, { error: "Ugyldig e-postadresse" }, { status: 400 });
    }

    const isBuyerMatch = body.source === "zenecohomes-buyer-match";
    if (!body.email || (!body.name && !isBuyerMatch)) {
      return contactJson(request, { error: isBuyerMatch ? "E-post er påkrevd" : "Navn og e-post er påkrevd" }, { status: 400 });
    }

    const inlandContext = getInlandLeadContext(body);
    const preferredArea = inlandContext?.preferredArea || (body.preferred_area ? String(body.preferred_area) : undefined);
    const requestType = inlandContext?.requestType || (body.request_type ? String(body.request_type) : undefined);

    await sendLead({
      name: body.name ? String(body.name) : "Boligmatch",
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
      dream: body.dream ? String(body.dream) : undefined,
      goal: body.goal ? String(body.goal) : undefined,
      priority: body.priority ? String(body.priority) : undefined,
      lifestyle: body.lifestyle ? String(body.lifestyle) : undefined,
      airport: body.airport ? String(body.airport) : undefined,
      rental: body.rental ? String(body.rental) : undefined,
      message: body.message ? String(body.message) : undefined,
      source: body.source ? String(body.source) : "zenecohomes-next",
      property_ref: body.property_ref ? String(body.property_ref) : undefined,
      property_title: body.property_title ? String(body.property_title) : undefined,
      request_type: requestType,
      organization_name: body.organization_name ? String(body.organization_name).slice(0, 240) : undefined,
      organization_type: body.organization_type ? String(body.organization_type).slice(0, 120) : undefined,
      contact_role: body.contact_role ? String(body.contact_role).slice(0, 160) : undefined,
      user_count: body.user_count ? String(body.user_count).slice(0, 40) : undefined,
      corporate_model: body.corporate_model ? String(body.corporate_model).slice(0, 180) : undefined,
      partner_type: body.partner_type ? String(body.partner_type).slice(0, 80) : undefined,
      partnership_interest: body.partnership_interest ? String(body.partnership_interest).slice(0, 240) : undefined,
      page_url: publicLeadSourcePage(body.page_url),
      utm_source: body.utm_source ? String(body.utm_source).slice(0, 80) : undefined,
      utm_medium: body.utm_medium ? String(body.utm_medium).slice(0, 80) : undefined,
      utm_campaign: body.utm_campaign ? String(body.utm_campaign).slice(0, 120) : undefined,
      utm_content: body.utm_content ? String(body.utm_content).slice(0, 160) : undefined,
    });

    await Promise.all([
      recordPropertyLead(body).catch(() => undefined),
      recordCorporateLead(body).catch(() => undefined),
      recordCareLead(body).catch(() => undefined),
    ]);
    return contactJson(request, { ok: true });
  } catch (error) {
    return contactJson(
      request,
      { error: error instanceof Error ? error.message : "Kunne ikke sende forespørsel" },
      { status: 500 },
    );
  }
}
