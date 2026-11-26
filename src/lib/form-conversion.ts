/** Call only after the server confirms a stored lead; never on page view. */
import { readCookieConsent } from "@/lib/cookie-consent";

/**
 * Resolve when gtag confirms the event was processed, or after a short timeout.
 * Await on flows that navigate immediately after submission.
 * Callback is not proof that the analytics provider accepted the event.
 */
export function trackConfirmedFormSubmission(formType: string, submissionId: string, guideOrigin?: "buying_guide"): Promise<void> {
  if (typeof window === "undefined" || !submissionId || !readCookieConsent()?.analytics) return Promise.resolve();
  const guideContext = formType === "boligprat" && guideOrigin === "buying_guide" ? { guide_origin: "buying_guide" } : {};
  const key = "zeneco-ga4-conversion:" + submissionId;
  try {
    if (window.sessionStorage.getItem(key)) return Promise.resolve();
  } catch { /* Storage can be unavailable. */ }
  const w = window as typeof window & { dataLayer?: Record<string, unknown>[]; gtag?: (...args: unknown[]) => void };
  if (typeof w.gtag !== "function") {
    // Preserve the existing dataLayer fallback when Google Tag is still loading.
    try {
      if (w.dataLayer) {
        w.dataLayer.push({ event: "form_submission_unique", form_type: formType, submission_id: submissionId, ...guideContext });
        // A successfully queued event must not be queued again when gtag loads.
        // This is local duplicate control, not a GA4 delivery receipt.
        try { window.sessionStorage.setItem(key, "1"); } catch {}
      }
    } catch { /* Analytics must not change the result of an accepted booking. */ }
    return Promise.resolve();
  }
  return new Promise<void>((resolve) => {
    let completed = false;
    const finish = () => {
      if (completed) return;
      completed = true;
      window.clearTimeout(timer);
      resolve();
    };
    const timer = window.setTimeout(finish, 1600);
    try {
      w.gtag?.("event", "form_submission_unique", {
        form_type: formType,
        submission_id: submissionId,
        ...guideContext,
        event_callback: finish,
        event_timeout: 1200,
      });
      try { window.sessionStorage.setItem(key, "1"); } catch {}
    } catch { finish(); }
  });
}
