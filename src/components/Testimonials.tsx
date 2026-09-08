import { Quote, Star } from "lucide-react";

type Testimonial = {
  quote: string;
  name: string;
  context?: string;
  source?: "customer" | "google";
  rating?: number;
};

const TESTIMONIALS: Testimonial[] = [
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
];

export function Testimonials({ heading = "Hva kundene sier" }: { heading?: string }) {
  return (
    <section className="section testimonials">
      <div className="section-heading">
        <p className="eyebrow">Tilbakemeldinger</p>
        <h2>{heading}</h2>
        <p>
          Ekte tilbakemeldinger fra mennesker Freddy har hjulpet. Kundesitatene er gjengitt med samtykke; offentlig
          publiserte anmeldelser er tydelig merket med kilde og kontekst.
        </p>
      </div>
      <div className="testimonial-grid">
        {TESTIMONIALS.map((t) => (
          <figure className="testimonial-card" key={`${t.name}-${t.source ?? "customer"}`}>
            <Quote className="testimonial-mark" size={26} />
            {t.source === "google" && t.rating ? (
              <div className="testimonial-rating" aria-label={`${t.rating} av 5 stjerner`}>
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
