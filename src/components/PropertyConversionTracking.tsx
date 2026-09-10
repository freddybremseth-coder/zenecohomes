"use client";

import { ArrowRight } from "lucide-react";
import { useEffect } from "react";

const SESSION_KEY = "ze-property-conversion-session-v1";

function sessionId() {
  try {
    const existing = window.localStorage.getItem(SESSION_KEY);
    if (existing) return existing;
    const id = typeof crypto !== "undefined" && "randomUUID" in crypto
      ? crypto.randomUUID().replace(/-/g, "")
      : `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 18)}`;
    window.localStorage.setItem(SESSION_KEY, id);
    return id;
  } catch {
    return `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 18)}`;
  }
}

function sendEvent(
  eventType: "property_conversion_view" | "property_conversion_cta_click",
  propertyRef: string,
  copySource: "realtyflow" | "fallback",
) {
  const body = JSON.stringify({ eventType, propertyRef, copySource, sessionId: sessionId() });
  if (typeof navigator !== "undefined" && typeof navigator.sendBeacon === "function") {
    try {
      const blob = new Blob([body], { type: "application/json" });
      if (navigator.sendBeacon("/api/property-engagement", blob)) return;
    } catch {
      // Fall through to fetch.
    }
  }
  void fetch("/api/property-engagement", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body,
    keepalive: true,
  }).catch(() => undefined);
}

export function PropertyConversionViewTracker({
  propertyRef,
  copySource,
}: {
  propertyRef: string;
  copySource: "realtyflow" | "fallback";
}) {
  useEffect(() => {
    if (!propertyRef) return;
    const key = `ze-property-conversion-view-v1:${propertyRef}`;
    try {
      if (window.sessionStorage.getItem(key)) return;
      window.sessionStorage.setItem(key, "1");
    } catch {
      // Server-side dedupe still protects normal repeated requests.
    }
    sendEvent("property_conversion_view", propertyRef, copySource);
  }, [propertyRef, copySource]);

  return null;
}

export function PropertyConversionCta({
  propertyRef,
  copySource,
  label,
  className,
}: {
  propertyRef: string;
  copySource: "realtyflow" | "fallback";
  label: string;
  className?: string;
}) {
  return (
    <a
      className={className}
      href="#kontakt"
      data-property-conversion-cta="conversion-v1"
      onClick={() => sendEvent("property_conversion_cta_click", propertyRef, copySource)}
    >
      {label} <ArrowRight size={17} aria-hidden="true" />
    </a>
  );
}
