import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ANDREA_PORTRAIT_DATA_URI } from "@/lib/andreaPortrait";

export function HomeAdvisors() {
  return (
    <section className="section home-advisors">
      <div className="section-heading"><p className="eyebrow">Menneskene bak</p><h2>Møt rådgiverne</h2></div>
      <div className="home-advisor-grid">
        <article>
          <Image className="home-advisor-photo" src="/assets/freddy-bremseth.jpg" alt="Freddy Bremseth" width={480} height={482} sizes="(max-width: 640px) 90vw, 40vw" />
          <div className="home-advisor-body">
            <h3>Freddy Bremseth</h3>
            <p>Norsk eiendomsrådgiver bosatt på Costa Blanca. Freddy hjelper deg med områdevalg, boligjakt, visninger og kjøpsprosessen.</p>
            <Link className="text-button" href="/om-oss/freddy">Bli kjent med Freddy <ArrowRight size={16} /></Link>
          </div>
        </article>
        <article>
          <img
            className="home-advisor-photo home-advisor-photo-andrea"
            src={ANDREA_PORTRAIT_DATA_URI}
            alt="Andrea Thorsnes Karlsen"
            width={533}
            height={800}
          />
          <div className="home-advisor-body">
            <h3>Andrea Thorsnes Karlsen</h3>
            <p>Andrea jobber med kundeoppfølging, markedsføring og tydelig informasjon, slik at veien fra research til rådgivning blir enklere.</p>
            <Link className="text-button" href="/om-oss/andrea">Bli kjent med Andrea <ArrowRight size={16} /></Link>
          </div>
        </article>
      </div>
      <div className="center-action"><Link className="contact-button" href="/om-oss">Les mer om oss <ArrowRight size={18} /></Link></div>
    </section>
  );
}
