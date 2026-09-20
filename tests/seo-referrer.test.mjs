import test from "node:test";
import assert from "node:assert/strict";
import { safeDiscoveryReferrer } from "../src/lib/seo-referrer.ts";

test("Search and AI arrivals retain only the source hostname, never referrer queries or visitor identifiers", () => {
  const cases = [
    ["https://www.google.com/search?q=private+words&email=person@example.com", "google_search", "www.google.com"],
    ["https://www.google.es/search?q=secret", "google_search", "www.google.es"],
    ["https://www.google.co.uk/search?q=secret", "google_search", "www.google.co.uk"],
    ["https://www.bing.com/search?q=secret", "bing_search", "www.bing.com"],
    ["https://chatgpt.com/c/visitor-identifier?text=private", "chatgpt", "chatgpt.com"],
    ["https://copilot.microsoft.com/chat?thread=private", "microsoft_copilot", "copilot.microsoft.com"],
    ["https://www.perplexity.ai/search/secret", "perplexity", "www.perplexity.ai"],
    ["https://gemini.google.com/app/secret", "google_gemini", "gemini.google.com"],
    ["https://search.brave.com/search?q=secret", "brave_search", "search.brave.com"],
    ["https://duckduckgo.com/?q=secret", "duckduckgo", "duckduckgo.com"],
  ];
  for (const [url, source, host] of cases) {
    const actual = safeDiscoveryReferrer(url);
    assert.deepEqual(actual, { source, host, url: "https://" + host + "/" });
    assert.ok(!JSON.stringify(actual).includes("secret"));
    assert.ok(!JSON.stringify(actual).includes("private"));
  }
});

test("Search source identification rejects lookalikes, insecure schemes, credentials and unrelated domains", () => {
  for (const url of [
    "", "not a url", "https://notgoogle.com/", "https://google.com.evil.invalid/",
    "https://fakegoogle.com/search", "https://evil-google.com/",
    "https://bing.com.evil.invalid/", "https://fakechatgpt.com/",
    "https://unknown.example/", "http://google.com/search?q=secret",
    "https://name:password@google.com/", "https://google.com:8443/",
    "javascript:alert(1)", "https://google.com/".padEnd(5000, "x"),
  ]) {
    assert.equal(safeDiscoveryReferrer(url), null, url);
  }
});
