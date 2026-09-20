"use client";

import { useEffect } from "react";
import { safeDiscoveryReferrer } from "@/lib/seo-referrer";

const DISCOVERY_ENDPOINT = "https://realtyflow.chatgenius.pro/api/public/search-discovery";

/** Privacy-minimal first-party arrival measurement, not a page-view counter.
 * Never transmit the visitor's full referrer, query text, user identifiers,
 * browser fingerprint, cookies or URL query parameters. Absence of an
 * observable referrer stays "unknown traffic", not "zero traffic".
 */
export function SearchDiscoveryTracker() {
  useEffect(() => {
    const safeReferrer = safeDiscoveryReferrer(document.referrer);
    if (!safeReferrer) return;

    const path = window.location.pathname;
    // Avoid analytics on private pages or accidental personal-data URL paths.
    if (path.length > 220 || /[@\\x00-\\x1f]/.test(path) ||
        /^\\/(?:api|admin|auth|login|account|konto|dashboard|portal|checkout)(?:\\/|$)/i.test(path)) return;

    const storageKey = `zeneco:search-discovery:${path}:${safeReferrer.source}`;
    try {
      if (window.sessionStorage.getItem(storageKey)) return;
    } catch {
      // Storage disabled; sending at most one event on this component mount is still safe.
    }

    // Only mark an event captured after the collector actually accepts it.
    // A blocked CORS request must not permanently suppress later arrivals.
    void fetch(DISCOVERY_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path, referrer: safeReferrer.url }),
      keepalive: true,
    }).then((response) => {
      if (response.status === 204) {
        try { window.sessionStorage.setItem(storageKey, "1"); } catch {}
      }
    }).catch(() => undefined);
  }, []);

  return null;
}
