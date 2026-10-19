import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { homeLanguageLinks } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Markedsoppdatering Costa Blanca | Zen Eco Homes",
  description: "Månedlige, kildebaserte markedsoppdateringer om boligpriser, kjøpertrender, lover og nybygg på Costa Blanca.",
  alternates: { canonical: "/magasin/markedsoppdatering-costa-blanca" },
  openGraph: { title: "Markedsoppdatering Costa Blanca | Zen Eco Homes", description: "Månedlige analyser av boligmarkedet på Costa Blanca.", url: "https://www.zenecohomes.com/magasin/markedsoppdatering-costa-blanca", images: [{url:"https://www.zenecohomes.com/assets/areas.jpg",alt:"Kystlandskap på Costa Blanca"}] }
};

export default function MarketSeriesPage() {
  return (
    <main>
      <SiteHeader languageLinks={homeLanguageLinks("no")} />
      <section className="section" style={{background:"#17232a",color:"#fff",paddingBlock:"clamp(3rem,6vw,5rem)"}}>
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <p className="eyebrow" style={{marginBottom:16}}>FAST MÅNEDLIG SERIE</p>
          <h1 style={{fontSize:"clamp(2.2rem,5vw,4rem)",lineHeight:1.12,maxWidth:"18ch",overflowWrap:"break-word",marginBottom:20}}>Markedsoppdatering Costa Blanca</h1>
          <p style={{maxWidth:"65ch",fontSize:"clamp(1rem,1.6vw,1.2rem)",lineHeight:1.65,color:"#dee3e2"}}>Hva endrer seg i boligmarkedet på Costa Blanca – og hva betyr det for deg som vurderer å kjøpe bolig i Spania?</p>
        </div>
      </section>
      <section className="section">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <h2 style={{fontSize:"clamp(1.9rem,3vw,2.8rem)",lineHeight:1.18,marginBottom:28}}>Siste markedsoppdateringer</h2>
          <article style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,280px),1fr))",overflow:"hidden",border:"1px solid #d9d5c9",borderRadius:20,background:"#fff"}}>
            <Link href="/magasin/markedsoppdatering-costa-blanca-oktober-2026" aria-label="Les markedsoppdateringen for oktober 2026" style={{display:"block",position:"relative",minHeight:260}}>
              <Image src="/assets/areas.jpg" alt="Panoramautsikt over Costa Blanca og Middelhavet" fill sizes="(max-width: 768px) 100vw, 45vw" style={{objectFit:"cover"}} />
            </Link>
            <div style={{padding:"clamp(1.25rem,3vw,2rem)",display:"flex",flexDirection:"column",justifyContent:"center",gap:14}}>
              <p className="eyebrow">OKTOBER 2026 · 8 MIN LESING</p>
              <h3 style={{fontSize:"clamp(1.5rem,2.6vw,2rem)",lineHeight:1.25}}>Boligpriser, turistutleie og råd til kjøpere</h3>
              <p>Benidorm, Finestrat, Villajoyosa og resten av Costa Blanca – med markedsdata, kilder og tydelige juridiske forbehold.</p>
              <Link href="/magasin/markedsoppdatering-costa-blanca-oktober-2026" style={{fontWeight:700,textDecoration:"underline"}}>Les oktoberutgaven →</Link>
            </div>
          </article>
          <div style={{maxWidth:"72ch",marginTop:32,display:"grid",gap:18,lineHeight:1.7}}>
            <p>Nye utgaver publiseres når månedens tall og vesentlige endringer kan dokumenteres. Les også <Link href="/magasin/boligmarkedet-costa-blanca-hosten-2026" style={{textDecoration:"underline"}}>markedsgjennomgangen fra september</Link> eller <Link href="/guide" style={{textDecoration:"underline"}}>våre kjøperguider</Link>.</p>
            <p>Trenger du hjelp til å sammenligne konkrete boliger? <Link href="/booking" style={{fontWeight:700,textDecoration:"underline"}}>Kontakt Zen Eco Homes og avtal en boligprat →</Link></p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
