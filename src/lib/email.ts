/**
 * Enkel e-postsending via Resend REST-API (ingen SDK-avhengighet).
 * Krever RESEND_API_KEY og RESEND_FROM i miljøet. Feiler mykt hvis de mangler.
 */
const RESEND_ENDPOINT = "https://api.resend.com/emails";

export function hasEmailConfig() {
  return Boolean(process.env.RESEND_API_KEY && process.env.RESEND_FROM);
}

export type EmailMessage = {
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
};

export async function sendEmail(message: EmailMessage): Promise<{ ok: boolean; error?: string }> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM;
  if (!apiKey || !from) {
    return { ok: false, error: "E-post er ikke konfigurert (mangler RESEND_API_KEY/RESEND_FROM)." };
  }

  try {
    const res = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: message.to,
        subject: message.subject,
        html: message.html,
        ...(message.replyTo ? { reply_to: message.replyTo } : {}),
      }),
    });

    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      return { ok: false, error: `Resend ${res.status}: ${detail.slice(0, 300)}` };
    }
    return { ok: true };
  } catch (error) {
    return { ok: false, error: error instanceof Error ? error.message : "Ukjent feil ved e-postsending" };
  }
}
