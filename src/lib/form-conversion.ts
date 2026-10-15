/** Only call this after the server explicitly confirms a stored lead. Never on page view. */
export function trackConfirmedFormSubmission(formType: string, submissionId: string) {
  if (typeof window === "undefined" || !submissionId) return;
  const key = "zeneco-ga4-conversion:" + submissionId;
  try {
    if (window.sessionStorage.getItem(key)) return;
    window.sessionStorage.setItem(key, "1");
  } catch { /* Storage may be unavailable; submission ID remains unique in GA4. */ }
  const w = window as typeof window & { dataLayer?: Record<string, unknown>[]; gtag?: (...args: unknown[]) => void };
  const event = { event: "form_submission_unique", form_type: formType, submission_id: submissionId };
  if (w.dataLayer) w.dataLayer.push(event);
  else if (typeof w.gtag === "function") w.gtag("event", "form_submission_unique", { form_type: formType, submission_id: submissionId });
}
