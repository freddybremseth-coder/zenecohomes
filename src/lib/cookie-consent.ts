export const COOKIE_CONSENT_KEY = "zeneco:cookie-consent:v1";
export const COOKIE_CONSENT_EVENT = "zeneco:cookie-consent-changed";

export type CookieConsent = { analytics: boolean; marketing: boolean };

export function readCookieConsent(): CookieConsent | null {
  if (typeof window === "undefined") return null;
  try {
    const value = window.localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!value) return null;
    const parsed: unknown = JSON.parse(value);
    if (typeof parsed !== "object" || parsed === null || !("analytics" in parsed) || !("marketing" in parsed)) return null;
    if (typeof parsed.analytics !== "boolean" || typeof parsed.marketing !== "boolean") return null;
    return { analytics: parsed.analytics, marketing: parsed.marketing };
  } catch { return null; }
}

export function saveCookieConsent(consent: CookieConsent) {
  try { window.localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consent)); } catch { /* Storage may be unavailable. */ }
  window.dispatchEvent(new Event(COOKIE_CONSENT_EVENT));
}
