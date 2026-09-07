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
          «Jeg sier like ofte nei til et prosjekt som ja. Holder ikke beliggenheten eller papirene mål,
          skal du få vite det.»
        </blockquote>
        <p>
          Norsk, uavhengig boligrådgiver bosatt på Costa Blanca, med base i Biar. Freddy hjelper nordmenn
          med å kjøpe bolig i Spania – trygt og på norsk – fra første samtale til utlevert nøkkel. Med
          lokalkunnskap om både kysten og innlandet er målet alltid det samme: at du tar en informert
          beslutning du blir stående i. Snakker norsk, engelsk og spansk.
        </p>
        <Link className="text-button" href="/om-freddy">
          Bli bedre kjent med Freddy <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
