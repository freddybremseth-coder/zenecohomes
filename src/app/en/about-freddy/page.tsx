import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { Testimonials } from "@/components/Testimonials";
import { homeLanguageLinks } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "About Freddy Bremseth | Property advisor on the Costa Blanca",
  description:
    "Meet Freddy Bremseth, Norwegian property advisor based in Benidorm. Practical experience with Costa Blanca property, rentals, buyer guidance and viewing planning.",
  alternates: {
    canonical: "/en/about-freddy",
    languages: {
      "nb-NO": "https://www.zenecohomes.com/om-freddy",
      en: "https://www.zenecohomes.com/en/about-freddy",
      "de-DE": "https://www.zenecohomes.com/de/ueber-freddy",
      "es-ES": "https://www.zenecohomes.com/es/sobre-freddy",
      "x-default": "https://www.zenecohomes.com/om-freddy",
    },
  },
};

export default function EnglishAboutFreddyPage() {
  return (
    <main lang="en">
      <SiteHeader locale="en" languageLinks={homeLanguageLinks("en")} />
      <section className="section meet-freddy" style={{ paddingTop: 90 }}>
        <div className="meet-freddy-photo">
          <Image src="/assets/freddy-bremseth.jpg" alt="Freddy Bremseth" width={480} height={482} sizes="(max-width: 760px) 60vw, 320px" priority />
        </div>
        <div className="meet-freddy-body">
          <p className="eyebrow">About Freddy</p>
          <h1>Property advice with the buyer's needs at the centre</h1>
          <blockquote className="meet-freddy-quote">“The goal is not the highest number of viewings. The goal is the right viewings.”</blockquote>
          <p>I am Freddy Bremseth, a Norwegian property advisor living in Benidorm. I help buyers understand areas, modern new-build projects, pricing, costs, viewing plans and the practical buying process before they make a decision.</p>
        </div>
      </section>
      <section className="section">
        <article className="om-freddy-bio">
          <h2>Property experience from both sides of the table</h2>
          <p>I first lived for around three and a half years in Ciudad Quesada, Rojales, on the southern Costa Blanca. During that period I built data and CRM systems for a real-estate agent and was responsible for the rental of around ten units. That gave me practical experience with local pricing, demand, seasonality and the factors that influence rental potential.</p>
          <h2>More than two years of buyer information meetings in Norway</h2>
          <p>After moving back to Norway I continued working with Spain. For more than two years I held weekly information meetings at Høvik outside Oslo for people considering a property purchase in Spain. The meetings were about areas, the buying process, costs, risks and what buyers should clarify before travelling. When participants wanted to proceed, I helped identify suitable options and organise viewing trips with local agents.</p>
          <h2>I have also been the frustrated buyer</h2>
          <p>When my family later searched for our own property in Spain, I experienced the same practical problems many buyers face: slow replies, incomplete information and wasted travel time. We eventually chose an olive property in Biar, while our permanent home is in Benidorm. That experience strongly shapes how I prepare viewing days today.</p>
          <h2>Modern new build is the main focus</h2>
          <p>Zen Eco Homes primarily focuses on modern new-build villas, apartments and developments on the Costa Blanca and nearby areas, as well as plots and selected inland opportunities. If a resale property is clearly the right answer for a client, I would rather help assess it than force someone into the wrong new-build project.</p>
          <h2>Advice first. Property second.</h2>
          <p>My starting point is not “what can I sell you?” but “where will you actually be happy, and what kind of property fits the way you want to live?” That means comparing areas, total costs, specifications, access, rental considerations and practical use before narrowing the market to a short list.</p>
          <div className="hero-actions" style={{ marginTop: 24 }}>
            <Link className="contact-button" href="/en/booking"><MessageCircle size={18} /> Talk to Freddy</Link>
            <Link className="text-button" href="/en/areas">Compare areas <ArrowRight size={16} /></Link>
          </div>
        </article>
      </section>
      <Testimonials />
      <Footer locale="en" />
    </main>
  );
}
