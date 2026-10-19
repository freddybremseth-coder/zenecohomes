import Link from "next/link";
import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { homeLanguageLinks } from "@/lib/i18n";

export const metadata: Metadata = {
 title: "Markedsoppdatering Costa Blanca | Zen Eco Homes",
 description: "Månedlige, kildebaserte markedsoppdateringer om boligpriser, kjøpertrender, lover og nybygg på Costa Blanca.",
 alternates: {canonical:"/magasin/markedsoppdatering-costa-blanca"},
 openGraph:{title:"Markedsoppdatering Costa Blanca | Zen Eco Homes",description:"Månedlige analyser av boligmarkedet på Costa Blanca.",url:"https://www.zenecohomes.com/magasin/markedsoppdatering-costa-blanca"}
};
export default function MarketSeriesPage(){
 return <main><SiteHeader languageLinks={homeLanguageLinks("no")}/><section className="page-hero compact-hero"><p className="eyebrow">Fast månedlig serie</p><h1>Markedsoppdatering Costa Blanca</h1><p>Hva endrer seg i boligmarkedet på Costa Blanca – og hva betyr det for deg som vurderer å kjøpe bolig i Spania?</p></section><section className="section"><div className="mx-auto max-w-4xl px-5 md:px-8"><h2>Siste markedsoppdateringer</h2><article className="rounded-2xl border p-6"><p className="eyebrow">Oktober 2026</p><h3>Boligpriser, turistutleie og råd til kjøpere</h3><p>Benidorm, Finestrat, Villajoyosa og resten av Costa Blanca – med kildebelagte data og tydelige juridiske forbehold.</p><Link href="/magasin/markedsoppdatering-costa-blanca-oktober-2026">Les oktoberutgaven →</Link></article><p className="mt-6">Vi publiserer nye utgaver når månedens tall og vesentlige endringer kan dokumenteres. Les også <Link href="/magasin/boligmarkedet-costa-blanca-hosten-2026">markedsgjennomgangen fra september</Link> eller <Link href="/guide">våre kjøperguider</Link>.</p><p>Trenger du hjelp til å sammenligne konkrete boliger? <Link href="/kontakt">Kontakt Zen Eco Homes.</Link></p></div></section><Footer/></main>;
}