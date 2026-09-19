"use client";

import { useEffect } from "react";

const DISCOVERY_ENDPOINT = "https://realtyflow.chatgenius.pro/api/public/search-discovery";

function knownDiscoveryReferrer(value: string) {
  try {
    const host = new URL(value).hostname.toLowerCase();
    return (
      host.includes("google.") ||
      host === "bing.com" ||
      host.endsWith(".bing.com") ||
      host === "chatgpt.com" ||
      host.endsWith(".chatgpt.com") ||
      host === "copilot.microsoft.com" ||
      host === "perplexity.ai" ||
      host.endsWith(".perplexity.ai") ||
      host === "gemini.google.com" ||
      host === "search.brave.com" ||
      host === "duckduckgo.com" ||
      host.endsWith(".duckduckgo.com")
    );
  } catch {
    return false;
  }
}

export function SearchDiscoveryTracker() {
  useEffect(() => {
    const referrer = document.referrer;
    if (!referrer || !knownDiscoveryReferrer(referrer)) return;

    const path = window.location.pathname;
    const storageKey = `zeneco:search-discovery:${path}:${referrer}`;
    try {
      if (window.sessionStorage.getItem(storageKey)) return;
      window.sessionStorage.setItem(storageKey, "1");
    } catch {}

    void fetch(DISCOVERY_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path, referrer }),
      keepalive: true,
    }).catch(() => undefined);
  }, []);

  return null;
}
