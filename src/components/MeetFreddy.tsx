import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

/** Diskré "Møt rådgiveren"-kort som viser hvem Freddy er og lenker til Om Freddy-siden. */
export function MeetFreddy() {
  return (
    <section className="section meet-freddy">
      <div className="meet-freddy-photo">
        <Image src="/assets/freddy-bremseth.jpg" alt="Freddy Bremseth" width={480} height={482} sizes="(max-width: 760px) 40vw, 220px" />
      </div>
      <div className="meet-freddy-body">
        <p className="eyebrow">Møt rådgiveren</p>
        <h2>Freddy Bremseth</h2>
        <blockquote className="meet-freddy-quote">
          «Rådgivning først. Boligen etterpå.»
        </blockquote>
        <p>
          Norsk eiendomsrådgiver bosatt på Costa Blanca. Freddy bodde først 3,5 år i Ciudad Quesada – der han
          jobbet med CRM-systemer for megler og driftet utleie – og holdt siden ukentlige informasjonsmøter på
          Høvik for nordmenn som vurderte bolig i Spania. I 2025 flyttet han permanent tilbake, bor i Benidorm
          og driver familiens olivengård i Biar. Han kjenner markedet fra Valencia til La Manga og hjelper deg
          med områdevalg, boligjakt, effektive visninger, kjøpsprosess og utleievurdering.
        </p>
        <Link className="text-button" href="/om-freddy">
          Bli bedre kjent med Freddy <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
