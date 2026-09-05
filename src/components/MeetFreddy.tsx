import Image from "next/image";
import { ArrowRight } from "lucide-react";

/** Diskré "Møt rådgiveren"-kort som viser hvem Freddy er og lenker til freddybremseth.com. */
export function MeetFreddy() {
  return (
    <section className="section meet-freddy">
      <div className="meet-freddy-photo">
        <Image src="/assets/freddy-bremseth.jpg" alt="Freddy Bremseth" width={480} height={482} sizes="(max-width: 760px) 40vw, 220px" />
      </div>
      <div className="meet-freddy-body">
        <p className="eyebrow">Møt rådgiveren</p>
        <h2>Freddy Bremseth</h2>
        <p>
          Norsk eiendomsrådgiver som selv bor i Spania og kjenner Costa Blanca fra innsiden – fra kysten til
          landsbyene i innlandet. Ved siden av eiendom skriver Freddy bøker om områdene, livet og kjøpsprosessen,
          slik at du kan ta trygge valg.
        </p>
        <a className="text-button" href="https://www.freddybremseth.com" target="_blank" rel="noopener noreferrer">
          Bli bedre kjent med Freddy <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
}
