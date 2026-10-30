# GA4 form submissions — implementation and reporting contract

## Key event
- Event name: `form_submission_unique`
- Trigger: one server-confirmed accepted lead with a nonempty server-issued submission ID, not a click, page view, failed request, or a thank-you page view.
- Event parameters: `form_type` (categorical form intention), `submission_id` (technical duplicate-control identifier; do **not** register as a GA4 custom dimension).
- Implemented by `src/lib/form-conversion.ts`. Uses gtag where present or pushes to dataLayer otherwise. If GTM is used, it must have an explicit Custom Event trigger and GA4 event tag; don't also emit a second event from a separate form listener.

## Agreed consumer-facing form_type dictionary (30 October 2026)
| Value | Form | Placement / tracking |
| --- | --- | --- |
| `boligmatch` | Buyer match | BuyerMatchQuiz (homepage or property listing placement) |
| `boligprat` | Advisor conversation booking | BookingTimeRequest on /booking; translated booking forms also report boligprat |
| `kontakt` | General contact | GeneralContactForm on /kontakt-oss; generic ContactForm on other pages |
| `visningstur` | Viewing trip | Dedicated ViewingTripForm on /visningstur |
| `salgsoppgave` | Property details / brochure | Shared ContactForm on individual property pages, across locales |
| `infomote` | Information meeting | ContactForm on /booking?type=infomote |

CRM `request_type` is deliberately separate from reporting `form_type`. Existing lead-routing values (including `booking`, `booking_request` and translated property brochure labels) are preserved. Do not mutate historical GA4 events.

Other forms exist and are **not** represented by these six categories: corporate decision note and partner enquiries, inland profile forms, guide download, portal signup, chatbot qualified leads and account/login controls. Corporate form categories await Andrea's decision. A form component may appear on multiple pages; its intention is identified by `form_type`, not automatically by the pathname.

`form_name` can be added later as a stable, low-cardinality placement label when measuring the same form on distinct pages. Do not send user-entered data or dynamic URLs as analytics dimensions.

## GA4 configuration steps (manual, GA4 Admin)
1. Keep `form_submission_unique` marked as a key event.
2. Admin → Custom definitions → Create custom dimension: Dimension name **Skjematype**, Scope **Event**, Event parameter **form_type**. Exact spelling/case is important.
3. Use Reports or Explore to view `form_submission_unique` broken down by **Skjematype**; allow GA4 normal processing latency. Custom dimensions are typically not retroactive.
4. Use DebugView and the network tag inspector to verify one event per successful test for `boligmatch`, `boligprat`, `kontakt`, `visningstur`, `salgsoppgave` and `infomote`. Test with appropriate analytics consent.
5. Confirm GTM and direct gtag aren't both configured to record the same conversion; do not count /takk or /takk-for-henvendelsen page views as an additional submission conversion.

## Optional future additions
- `form_location` as a stable low-cardinality placement label (e.g. homepage, booking_page, property_detail); `form_language` (no, en, de, es); `form_brand` (zeneco). Do **not** add arbitrary page URLs, customer names, emails, phone numbers, property IDs or submission IDs as GA4 custom dimensions.
- Marketing traffic attribution relies on GA4 session acquisition plus correctly tagged ads/Facebook links. Ordinary Instagram captions should not contain pasted URLs.
