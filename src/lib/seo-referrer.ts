/**
 * Classify ONLY an observed search/AI referrer hostname.
 * Return a normalized origin to the first-party discovery collector, never
 * the visitor's full referrer (which may contain searches or personal data).
 * This mirrors the collector's exact allowlist in realtyflow-pro.
 */
const SEARCH_HOSTS: ReadonlyArray<readonly [RegExp, string]> = [
  [/(^|\\.)google\\.(?:com|[a-z]{2}|com\\.[a-z]{2}|co\\.[a-z]{2})$/i, "google_search"],
  [/(^|\\.)bing\\.com$/i, "bing_search"],
  [/(^|\\.)chatgpt\\.com$/i, "chatgpt"],
  [/^copilot\\.microsoft\\.com$/i, "microsoft_copilot"],
  [/(^|\\.)perplexity\\.ai$/i, "perplexity"],
  [/^gemini\\.google\\.com$/i, "google_gemini"],
  [/^search\\.brave\\.com$/i, "brave_search"],
  [/(^|\\.)duckduckgo\\.com$/i, "duckduckgo"],
];

export function safeDiscoveryReferrer(input: string): { source: string; host: string; url: string } | null {
  if (typeof input !== "string" || input.length > 4096) return null;
  try {
    const url = new URL(input);
    if (url.protocol !== "https:" || url.username || url.password || url.port) return null;
    const host = url.hostname.toLowerCase();
    const source = SEARCH_HOSTS.find(([pattern]) => pattern.test(host))?.[1];
    if (!source) return null;
    return { source, host, url: "https://" + host + "/" };
  } catch {
    return null;
  }
}
