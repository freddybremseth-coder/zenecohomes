import type { Locale } from "@/lib/i18n";
import {
  formatPriceForLocale,
  getLocalizedPropertyTitle,
  getPrimaryImage,
  getPropertyArea,
  getPropertyRef,
  getPropertyTown,
  type Property,
} from "@/lib/realtyflow";
import { getPropertyDetailPath } from "@/lib/propertyRouting";
import { buildSearchUrl, describeFilters, SITE_URL, unsubscribeUrl, type SavedSearchRow } from "@/lib/savedSearch";

const BRAND = "#c5a059";
const INK = "#263846";
const MUTED = "#667583";

const COPY = {
  no: {
    confirmSubject: "Ditt lagrede søk hos Zen Eco Homes",
    confirmTitle: "Søket ditt er lagret",
    confirmIntro: "Vi varsler deg på e-post når nye boliger som matcher dette søket dukker opp:",
    alertSubjectOne: "1 ny bolig som matcher søket ditt",
    alertSubjectMany: (n: number) => `${n} nye boliger som matcher søket ditt`,
    alertTitle: "Nye boliger til deg",
    alertIntro: "Vi fant nye boliger som passer det lagrede søket ditt:",
    seeAll: "Se alle treff",
    viewProperty: "Se boligen",
    footer: "Du får denne e-posten fordi du lagret et søk på zenecohomes.com.",
    unsubscribe: "Meld av dette varselet",
    from: "Zen Eco Homes – norsk boligrådgivning i Spania",
  },
  de: {
    confirmSubject: "Ihre gespeicherte Suche bei Zen Eco Homes",
    confirmTitle: "Ihre Suche wurde gespeichert",
    confirmIntro: "Wir benachrichtigen Sie per E-Mail, sobald neue passende Immobilien erscheinen:",
    alertSubjectOne: "1 neue Immobilie passend zu Ihrer Suche",
    alertSubjectMany: (n: number) => `${n} neue Immobilien passend zu Ihrer Suche`,
    alertTitle: "Neue Immobilien für Sie",
    alertIntro: "Wir haben neue Immobilien gefunden, die zu Ihrer gespeicherten Suche passen:",
    seeAll: "Alle Treffer ansehen",
    viewProperty: "Immobilie ansehen",
    footer: "Sie erhalten diese E-Mail, weil Sie auf zenecohomes.com eine Suche gespeichert haben.",
    unsubscribe: "Diese Benachrichtigung abbestellen",
    from: "Zen Eco Homes – Immobilienberatung in Spanien",
  },
  en: {
    confirmSubject: "Your saved search at Zen Eco Homes",
    confirmTitle: "Your search is saved",
    confirmIntro: "We'll email you when new properties matching this search appear:",
    alertSubjectOne: "1 new property matching your search",
    alertSubjectMany: (n: number) => `${n} new properties matching your search`,
    alertTitle: "New properties for you",
    alertIntro: "We found new properties that match your saved search:",
    seeAll: "See all matches",
    viewProperty: "View property",
    footer: "You're receiving this email because you saved a search on zenecohomes.com.",
    unsubscribe: "Unsubscribe from this alert",
    from: "Zen Eco Homes – property advice in Spain",
  },
} as const;

function shell(locale: Locale, token: string, title: string, inner: string): string {
  const c = COPY[locale];
  return `<!doctype html><html lang="${locale}"><body style="margin:0;background:#f7f7f4;font-family:Arial,Helvetica,sans-serif;color:${INK};">
  <div style="max-width:600px;margin:0 auto;padding:28px 20px;">
    <div style="font-weight:900;font-size:20px;letter-spacing:0.02em;margin-bottom:6px;">ZEN<span style="color:${BRAND};">ECO</span>HOMES</div>
    <div style="background:#fff;border:1px solid rgba(22,34,43,0.1);border-radius:16px;padding:26px 24px;">
      <h1 style="margin:0 0 12px;font-size:22px;color:${INK};">${title}</h1>
      ${inner}
    </div>
    <p style="color:${MUTED};font-size:12px;line-height:1.6;margin:18px 4px 0;">
      ${c.footer}<br>
      <a href="${unsubscribeUrl(token)}" style="color:${MUTED};">${c.unsubscribe}</a> ·
      <a href="${SITE_URL}" style="color:${MUTED};">zenecohomes.com</a>
    </p>
  </div></body></html>`;
}

function button(href: string, label: string): string {
  return `<a href="${href}" style="display:inline-block;background:${BRAND};color:#fff;text-decoration:none;font-weight:700;padding:12px 22px;border-radius:999px;">${label}</a>`;
}

export function confirmationEmail(row: SavedSearchRow): { subject: string; html: string } {
  const locale = row.locale;
  const c = COPY[locale];
  const summary = describeFilters(row.filters, locale);
  const searchUrl = buildSearchUrl(row.filters, locale);
  const inner = `
    <p style="color:${MUTED};font-size:15px;line-height:1.6;margin:0 0 16px;">${c.confirmIntro}</p>
    <p style="font-weight:700;font-size:16px;margin:0 0 22px;padding:12px 14px;background:#f7f7f4;border-radius:10px;">${summary}</p>
    <p style="margin:0;">${button(searchUrl, c.seeAll)}</p>`;
  return { subject: c.confirmSubject, html: shell(locale, row.token, c.confirmTitle, inner) };
}

function propertyCard(property: Property, locale: Locale): string {
  const ref = getPropertyRef(property);
  const title = getLocalizedPropertyTitle(property, locale);
  const town = getPropertyTown(property) || "";
  const price = property.price ? formatPriceForLocale(property.price, locale) : "";
  const area = getPropertyArea(property);
  const image = getPrimaryImage(property);
  const href = `${SITE_URL}${getPropertyDetailPath(ref, locale)}`;
  const meta = [town, area ? `${area} m²` : ""].filter(Boolean).join(" · ");
  const c = COPY[locale];
  return `
    <table role="presentation" width="100%" style="border-collapse:collapse;margin:0 0 14px;border:1px solid rgba(22,34,43,0.1);border-radius:12px;overflow:hidden;">
      <tr>
        ${image ? `<td width="140" style="padding:0;"><a href="${href}"><img src="${image}" alt="" width="140" style="display:block;width:140px;height:110px;object-fit:cover;"></a></td>` : ""}
        <td style="padding:12px 14px;vertical-align:top;">
          <a href="${href}" style="color:${INK};text-decoration:none;font-weight:700;font-size:15px;">${title}</a>
          <div style="color:${MUTED};font-size:13px;margin:4px 0 6px;">${meta}</div>
          <div style="color:${BRAND};font-weight:900;font-size:15px;">${price}</div>
          <a href="${href}" style="color:${BRAND};font-size:13px;font-weight:700;text-decoration:none;">${c.viewProperty} →</a>
        </td>
      </tr>
    </table>`;
}

export function alertEmail(
  row: SavedSearchRow,
  newProperties: Property[],
): { subject: string; html: string } {
  const locale = row.locale;
  const c = COPY[locale];
  const n = newProperties.length;
  const subject = n === 1 ? c.alertSubjectOne : c.alertSubjectMany(n);
  const searchUrl = buildSearchUrl(row.filters, locale);
  const summary = describeFilters(row.filters, locale);
  const cards = newProperties.slice(0, 8).map((p) => propertyCard(p, locale)).join("");
  const inner = `
    <p style="color:${MUTED};font-size:15px;line-height:1.6;margin:0 0 6px;">${c.alertIntro}</p>
    <p style="color:${MUTED};font-size:13px;margin:0 0 20px;">${summary}</p>
    ${cards}
    <p style="margin:18px 0 0;">${button(searchUrl, c.seeAll)}</p>`;
  return { subject, html: shell(locale, row.token, c.alertTitle, inner) };
}
