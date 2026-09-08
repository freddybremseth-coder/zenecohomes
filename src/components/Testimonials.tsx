import { Quote, Star } from "lucide-react";
import type { SiteLocale } from "@/lib/i18n";

type Testimonial = {
  quote: string;
  name: string;
  context?: string;
  source?: "customer" | "google";
  rating?: number;
};

type TestimonialCopy = {
  eyebrow: string;
  heading: string;
  intro: string;
  ratingLabel: (rating: number) => string;
  testimonials: Testimonial[];
};

const COPY: Record<SiteLocale, TestimonialCopy> = {
  no: {
    eyebrow: "Tilbakemeldinger",
    heading: "Hva kundene sier",
    intro:
      "Ekte tilbakemeldinger fra mennesker Freddy har hjulpet. Kundesitatene er gjengitt med samtykke; offentlig publiserte anmeldelser er tydelig merket med kilde og kontekst.",
    ratingLabel: (rating) => `${rating} av 5 stjerner`,
    testimonials: [
      {
        quote:
          "Vi vil spesielt takke Freddy for hans vennlighet, tålmodighet og engasjement. Han passet alltid på oss og gjorde alt så mye enklere.",
        name: "Sonia & Alberto",
        context: "Offentlig Google-anmeldelse · boligkjøp gjennom Soleada Eiendom · juli 2026",
        source: "google",
        rating: 5,
      },
      {
        quote: "Dette var veldig bra og ga oss svar på det meste.",
        name: "Jørn",
        context: "I kjøpsprosess på Costa Blanca",
        source: "customer",
      },
      {
        quote: "Takk for oppdateringen og for omtanken – det setter vi pris på! Vi ser virkelig frem til veien videre.",
        name: "Erlend & Andrea",
        context: "I kjøpsprosess",
        source: "customer",
      },
      {
        quote: "Takk for veldig detaljert og god beskrivelse.",
        name: "Ståle",
        context: "Etter rådgivning",
        source: "customer",
      },
    ],
  },
  en: {
    eyebrow: "Client feedback",
    heading: "What clients say",
    intro:
      "Genuine feedback from people Freddy has helped. The wording below is translated for this English page; public reviews remain clearly labelled with source and context.",
    ratingLabel: (rating) => `${rating} out of 5 stars`,
    testimonials: [
      {
        quote:
          "We especially want to thank Freddy for his kindness, patience and commitment. He always looked after us and made everything so much easier.",
        name: "Sonia & Alberto",
        context: "Translated from a public Google review · purchase through Soleada Eiendom · July 2026",
        source: "google",
        rating: 5,
      },
      {
        quote: "This was very useful and answered most of our questions.",
        name: "Jørn",
        context: "Translated from Norwegian feedback · during a Costa Blanca buying process",
        source: "customer",
      },
      {
        quote: "Thank you for the update and for your thoughtfulness — we really appreciate it. We are genuinely looking forward to the next steps.",
        name: "Erlend & Andrea",
        context: "Translated from Norwegian feedback · during the buying process",
        source: "customer",
      },
      {
        quote: "Thank you for the very detailed and helpful description.",
        name: "Ståle",
        context: "Translated from Norwegian feedback · after property advice",
        source: "customer",
      },
    ],
  },
  de: {
    eyebrow: "Kundenstimmen",
    heading: "Was Kunden sagen",
    intro:
      "Echte Rückmeldungen von Menschen, die Freddy begleitet hat. Die Texte sind für diese deutsche Seite übersetzt; öffentliche Bewertungen bleiben klar mit Quelle und Kontext gekennzeichnet.",
    ratingLabel: (rating) => `${rating} von 5 Sternen`,
    testimonials: [
      {
        quote:
          "Wir möchten Freddy besonders für seine Freundlichkeit, Geduld und sein Engagement danken. Er hat sich immer um uns gekümmert und alles deutlich einfacher gemacht.",
        name: "Sonia & Alberto",
        context: "Übersetzung einer öffentlichen Google-Bewertung · Kauf über Soleada Eiendom · Juli 2026",
        source: "google",
        rating: 5,
      },
      {
        quote: "Das war sehr hilfreich und hat die meisten unserer Fragen beantwortet.",
        name: "Jørn",
        context: "Übersetzung einer norwegischen Rückmeldung · während des Kaufprozesses an der Costa Blanca",
        source: "customer",
      },
      {
        quote: "Vielen Dank für das Update und die Aufmerksamkeit — das wissen wir sehr zu schätzen. Wir freuen uns wirklich auf die nächsten Schritte.",
        name: "Erlend & Andrea",
        context: "Übersetzung einer norwegischen Rückmeldung · während des Kaufprozesses",
        source: "customer",
      },
      {
        quote: "Vielen Dank für die sehr detaillierte und hilfreiche Beschreibung.",
        name: "Ståle",
        context: "Übersetzung einer norwegischen Rückmeldung · nach der Beratung",
        source: "customer",
      },
    ],
  },
  es: {
    eyebrow: "Opiniones de clientes",
    heading: "Lo que dicen los clientes",
    intro:
      "Comentarios reales de personas a las que Freddy ha ayudado. Los textos están traducidos para esta página; las reseñas públicas mantienen claramente indicada su fuente y contexto.",
    ratingLabel: (rating) => `${rating} de 5 estrellas`,
    testimonials: [
      {
        quote:
          "Queremos agradecer especialmente a Freddy su amabilidad, paciencia y dedicación. Siempre estuvo pendiente de nosotros e hizo que todo fuera mucho más fácil.",
        name: "Sonia & Alberto",
        context: "Traducción de una reseña pública de Google · compra a través de Soleada Eiendom · julio de 2026",
        source: "google",
        rating: 5,
      },
      {
        quote: "Fue muy útil y respondió a la mayoría de nuestras preguntas.",
        name: "Jørn",
        context: "Traducción de un comentario en noruego · durante un proceso de compra en la Costa Blanca",
        source: "customer",
      },
      {
        quote: "Gracias por la actualización y por la atención — lo valoramos mucho. Tenemos muchas ganas de seguir avanzando.",
        name: "Erlend & Andrea",
        context: "Traducción de un comentario en noruego · durante el proceso de compra",
        source: "customer",
      },
      {
        quote: "Gracias por la descripción tan detallada y útil.",
        name: "Ståle",
        context: "Traducción de un comentario en noruego · después del asesoramiento",
        source: "customer",
      },
    ],
  },
};

export function Testimonials({
  heading,
  locale = "no",
}: {
  heading?: string;
  locale?: SiteLocale;
}) {
  const copy = COPY[locale];

  return (
    <section className="section testimonials">
      <div className="section-heading">
        <p className="eyebrow">{copy.eyebrow}</p>
        <h2>{heading ?? copy.heading}</h2>
        <p>{copy.intro}</p>
      </div>
      <div className="testimonial-grid">
        {copy.testimonials.map((t) => (
          <figure className="testimonial-card" key={`${t.name}-${t.source ?? "customer"}`}>
            <Quote className="testimonial-mark" size={26} />
            {t.source === "google" && t.rating ? (
              <div className="testimonial-rating" aria-label={copy.ratingLabel(t.rating)}>
                {Array.from({ length: t.rating }).map((_, index) => (
                  <Star key={index} size={15} aria-hidden="true" />
                ))}
                <span>Google</span>
              </div>
            ) : null}
            <blockquote>«{t.quote}»</blockquote>
            <figcaption>
              <strong>{t.name}</strong>
              {t.context ? <span>{t.context}</span> : null}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
