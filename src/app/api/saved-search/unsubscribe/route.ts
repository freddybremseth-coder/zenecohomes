import { getSupabaseAdmin } from "@/lib/supabase-admin";

function page(title: string, body: string): Response {
  const html = `<!doctype html><html lang="no"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${title}</title></head>
  <body style="margin:0;background:#f7f7f4;font-family:Arial,Helvetica,sans-serif;color:#263846;display:flex;min-height:100vh;align-items:center;justify-content:center;">
    <div style="max-width:460px;padding:40px 28px;text-align:center;">
      <div style="font-weight:900;font-size:20px;margin-bottom:20px;">ZEN<span style="color:#c5a059;">ECO</span>HOMES</div>
      <h1 style="font-size:22px;margin:0 0 10px;">${title}</h1>
      <p style="color:#667583;line-height:1.6;margin:0 0 22px;">${body}</p>
      <a href="https://www.zenecohomes.com" style="display:inline-block;background:#c5a059;color:#fff;text-decoration:none;font-weight:700;padding:12px 24px;border-radius:999px;">zenecohomes.com</a>
    </div>
  </body></html>`;
  return new Response(html, { headers: { "content-type": "text/html; charset=utf-8" } });
}

export async function GET(request: Request) {
  const token = new URL(request.url).searchParams.get("token");
  if (!token) {
    return page("Ugyldig lenke", "Lenken mangler en gyldig kode.");
  }

  const supabase = getSupabaseAdmin();
  if (!supabase) {
    return page("Ikke tilgjengelig", "Varsel-tjenesten er ikke tilgjengelig akkurat nå.");
  }

  const { error } = await supabase
    .from("saved_searches")
    .update({ active: false })
    .eq("token", token);

  if (error) {
    return page("Noe gikk galt", "Vi klarte ikke å melde deg av akkurat nå. Prøv igjen senere.");
  }

  return page(
    "Du er meldt av",
    "Du vil ikke lenger motta varsler for dette lagrede søket. Du kan når som helst lagre et nytt søk på nettsiden.",
  );
}
