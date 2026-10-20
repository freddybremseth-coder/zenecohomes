# GA4 form submissions — implementation and reporting contract

## Key event
- Event name: `form_submission_unique`
- Trigger: one server-confirmed accepted lead with a nonempty server-issued submission ID, not a click, page view, failed request, or a thank-you page view.
- Event parameters: `form_type` (categorical form intention), `submission_id` (technical duplicate-control identifier; do **not** register as a GA4 custom dimension).
- Implemented by `src/lib/form-conversion.ts`. Uses gtag where present or pushes to dataLayer otherwise. If GTM is used, it must have an explicit Custom Event trigger and GA4 event tag; don't also emit a second event from a separate form listener.

## Proposed/reportable form_type dictionary
| Value | Meaning | Origin |
| --- | --- | --- |
| `boligmatch` | Homepage buyer-match quiz | BuyerMatchQuiz |
| `booking` | "Få rådgivning" / advisor conversation request | Booking page |
| `booking_request` | EN/DE/ES booking requests | Translated booking pages |
| `infomote` | Information-session interest | Booking with type=infomote |
| `general` | General contact requests without a more specific intent | ContactForm and SpanishContactForm default |
| `corporate-home-decision-note` | Business housing decision-note enquiry | CorporateLeadForm |
| `corporate-partner` | Corporate partner enquiries | CorporatePartnerLeadForm |

Other requestType strings may currently be used by property, Care or other forms, including translated property detail labels. These are **not yet fully standardized**. Do not relabel historical events retroactively. Review them before changing values used by CRM workflows.

## GA4 configuration steps (manual, GA4 Admin)
1. Keep `form_submission_unique` marked as a key event.
2. Admin → Custom definitions → Create custom dimension: Dimension name **Skjematype**, Scope **Event**, Event parameter **form_type**. Exact spelling/case is important.
3. Use Reports or Explore to view `form_submission_unique` broken down by **Skjematype**; allow GA4 normal processing latency. Custom dimensions are typically not retroactive.
4. Use DebugView and the network tag inspector to verify one event per successful test for `boligmatch`, `booking` and the translated booking form. Test with appropriate analytics consent.
5. Confirm GTM and direct gtag aren't both configured to record the same conversion; do not count /takk or /takk-for-henvendelsen page views as an additional submission conversion.

## Optional future additions
- `form_location` as a stable low-cardinality placement label (e.g. homepage, booking_page, property_detail); `form_language` (no, en, de, es); `form_brand` (zeneco). Do **not** add arbitrary page URLs, customer names, emails, phone numbers, property IDs or submission IDs as GA4 custom dimensions.
- Marketing traffic attribution relies on GA4 session acquisition plus correctly tagged ads/Facebook links. Ordinary Instagram captions should not contain pasted URLs.
