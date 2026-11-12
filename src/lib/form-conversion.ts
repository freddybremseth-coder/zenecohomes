/** Call only after the server confirms a stored lead; never on page view. */
import { readCookieConsent } from "@/lib/cookie-consent";

/**
 * Resolve when gtag has invoked its callback, or after a short timeout.
 * Await this on flows that navigate immediately after submitting.
 * A callback means the tag processed the event, not that GA4 accepted it.
 */
export function trackConfirmedFormSubmission(formType: string, submissionId: string): Promise<void> {
  if (typeof window === "undefined" || !submissionId || !readCookieConsent()?.analytics) return Promise.resolve();

  const key = "zeneco-ga4-conversion:" + submissionId;
  try {
    if (window.sessionStorage.getItem(key)) return Promise.resolve();
  } catch { /* Analytics can still proceed when storage is unavailable. */ }

  const w = window as typeof window & { gtag?: (...args: unknown[]) => void };
  // Do not mark the event sent when Google Tag has not initialized.
  if (typeof w.gtag !== "function") return Promise.resolve();

  return new Promise<void>((resolve) => {
    let finished = false;
    const finish = () => {
      if (finished) return;
      finished = true;
      window.clearTimeout(timer);
      resolve();
    };
    const timer = window.setTimeout(finish, 1600);
    try {
      w.gtag?.("event", "form_submission_unique", {
        form_type: formType,
        submission_id: submissionId,
        event_callback: finish,
        event_timeout: 1200,
      });
      // Dedupe once the command has been queued, never before attempting it.
      try { window.sessionStorage.setItem(key, "1"); } catch {}
    } catch {
      finish();
    }
  });
}
