import { Quote } from "lucide-react";

/**
 * Ekte kundesitater, publisert med kundenes samtykke (fornavn-attribusjon).
 * Sitatene gjengis ordrett – bevisst hverdagslige og autentiske, ikke «pyntede».
 */
type Testimonial = { quote: string; name: string; context?: string };

const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Dette var veldig bra og ga oss svar på det meste.",
    name: "Jørn",
    context: "I kjøpsprosess på Costa Blanca",
  },
  {
    quote: "Takk for oppdateringen og for omtanken – det setter vi pris på! Vi ser virkelig frem til veien videre.",
    name: "Erlend & Andrea",
    context: "I kjøpsprosess",
  },
  {
    quote: "Takk for veldig detaljert og god beskrivelse.",
    name: "Ståle",
    context: "Etter rådgivning",
  },
];

export function Testimonials({ heading = "Hva kundene sier" }: { heading?: string }) {
  return (
    <section className="section testimonials">
      <div className="section-heading">
        <p className="eyebrow">Tilbakemeldinger</p>
        <h2>{heading}</h2>
        <p>Ekte tilbakemeldinger fra mennesker vi har hjulpet – gjengitt med deres samtykke.</p>
      </div>
      <div className="testimonial-grid">
        {TESTIMONIALS.map((t) => (
          <figure className="testimonial-card" key={t.name}>
            <Quote className="testimonial-mark" size={26} />
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
