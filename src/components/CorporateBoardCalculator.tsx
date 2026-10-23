"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
const eur = new Intl.NumberFormat("nb-NO", {style:"currency",currency:"EUR",maximumFractionDigits:0});
const n=(v:number)=>Number.isFinite(v)?Math.max(0,v):0;
export function CorporateBoardCalculator(){
 const [price,P]=useState(450000),[purchasePct,PC]=useState(12),[owners,O]=useState(1),[share,S]=useState(100);
 const [equity,E]=useState(40),[interest,I]=useState(4),[years,Y]=useState(20),[holding,H]=useState(10);
 const [operations,D]=useState(9000),[weeks,W]=useState(30),[appreciation,A]=useState(2);
 const [trips,T]=useState(4),[people,PE]=useState(6),[nights,N]=useState(3),[hotel,HT]=useState(150);
 const [sellingCosts,SC]=useState(3);
 const calc=useMemo(()=>{
  const total=price*(1+purchasePct/100),fraction=owners===1?1:share/100;
  const invested=total*fraction,down=invested*equity/100,loan=invested-down;
  const rate=interest/1200,months=Math.max(1,years*12),payment=rate===0?loan/months:loan*rate/(1-Math.pow(1+rate,-months));
  const after=Math.min(months,holding*12),balance=rate===0?loan-payment*after:loan*Math.pow(1+rate,after)-payment*(Math.pow(1+rate,after)-1)/rate;
  const finalValue=price*Math.pow(1+appreciation/100,holding)*fraction;
  const proceeds=finalValue*(1-sellingCosts/100)-Math.max(0,balance);
  const cashflow=operations*fraction+payment*12;
  const hotelAlt=trips*people*nights*hotel;
  return {total,invested,down,loan,payment,cashflow,perWeek:weeks?cashflow/weeks:null,hotelAlt,finalValue,proceeds,netCash:proceeds-down-cashflow*holding};
 },[price,purchasePct,owners,share,equity,interest,years,holding,operations,weeks,appreciation,trips,people,nights,hotel,sellingCosts]);
 function field(label:string,value:number,setter:(n:number)=>void,max=1e9,step=1){return <label><span>{label}</span><div className="corporate-number-field"><input aria-label={label} type="number" min="0" max={max} step={step} value={value} onChange={e=>setter(Math.min(max,n(Number(e.target.value))))}/></div></label>;}
 function report(){
  const detail={propertyPrice:price,totalBudget:calc.total,users:people,employeeWeeks:weeks,annualOperating:operations*(owners===1?1:share/100),acquisitionPct:purchasePct,acquisitionCost:calc.total-price,capitalPct:interest,holdingYears:holding,valuePct:appreciation,annualCostBeforeValue:calc.cashflow,employeeCostPerWeek:calc.perWeek,hotelAlternativeAnnual:calc.hotelAlt,estimatedFutureValue:calc.finalValue,ownershipCount:owners,ownershipShare:owners===1?100:share,loan:calc.loan,equityAmount:calc.down,annualLoanPayment:calc.payment*12,saleProceedsScenario:calc.proceeds,assumptions:"Styrescenario: lånebetaling inkluderer renter og avdrag, ikke alternativ kapitalkostnad. Driftskostnader og boligverdi fordeles etter eierandel. Fremtidig verdi er usikker. Skatt, valutakurs og salgsskatt ikke beregnet; kontantstrøm er forenklet.",generatedAt:new Date().toISOString()};
  try{sessionStorage.setItem("zeneco-corporate-calculator",JSON.stringify(detail));}catch{}
  window.dispatchEvent(new CustomEvent("zeneco:corporate-calculator",{detail}));
  window.location.href="/bedriftshytte-spania#bedriftsvurdering";
 }
 return <section className="article-section" id="styrekalkulator"><p className="eyebrow">Beslutningsverktøy</p><h2>Utvidet kalkulator for styret</h2>
 <p>Test finansiering, delt eierskap, drift, bruk, hotellalternativ og mulig verdiutvikling. Alle tall er justerbare og veiledende.</p>
 <div className="corporate-calculator">
  <h3>Investering og eierskap</h3><div className="corporate-calculator-inputs">
  {field("Kjøpesum (€)",price,P)}{field("Kjøpskostnader (%)",purchasePct,PC,30,0.5)}
  {field("Antall eiervirksomheter",owners,v=>{O(Math.max(1,Math.round(v)));if(v<=1)S(100);else S(Math.min(share,100));},20)}
  {owners>1&&field("Deres eierandel (%)",share,S,100,1)}
  </div><small>Eierandelen brukes på investering, driftskostnader og salgsverdi. Antall medeiere bestemmer ikke automatisk eierandelen.</small>
  <h3>Finansiering og drift</h3><div className="corporate-calculator-inputs">
  {field("Egenkapital (%)",equity,E,100)}{field("Lånerente (%)",interest,I,25,0.25)}{field("Nedbetalingstid (år)",years,v=>Y(Math.max(1,v)),40)}
  {field("Eiertid (år)",holding,v=>H(Math.max(1,v)),30)}
  {field("Årlig drift for hele boligen (€)",operations,D)}{field("Deres disponible bruksuker",weeks,W,52)}
  </div><h3>Alternativ overnatting og salgsscenario</h3><div className="corporate-calculator-inputs">
  {field("Bedriftsopphold per år",trips,T)}{field("Personer per bedriftsopphold",people,PE)}
  {field("Netter per opphold",nights,N)}{field("Hotellpris per person/natt (€)",hotel,HT)}
  {field("Årlig verdiendring (%)",appreciation,A,15,0.5)}{field("Salgskostnader (%)",sellingCosts,SC,20,0.5)}
  </div>
  <div className="corporate-calculator-results" aria-live="polite">
   <article><span>Deres samlede investering</span><strong>{eur.format(calc.invested)}</strong><small>Inkludert fordelte kjøpskostnader</small></article>
   <article><span>Deres egenkapital / lånebeløp</span><strong>{eur.format(calc.down)} / {eur.format(calc.loan)}</strong></article>
   <article><span>Estimert månedlig lånebetaling</span><strong>{eur.format(calc.payment)}</strong><small>Renter og avdrag etter annuitetsmodell</small></article>
   <article><span>Årlig kontantutbetaling til drift og lån</span><strong>{eur.format(calc.cashflow)}</strong></article>
   <article><span>Kontantutbetaling per bruksuke</span><strong>{calc.perWeek==null?"–":eur.format(calc.perWeek)}</strong></article>
   <article><span>Alternativ hotellkostnad per år</span><strong>{eur.format(calc.hotelAlt)}</strong><small>Kun de spesifiserte bedriftsoppholdene, ikke ansattes ferieuker.</small></article>
   <article><span>Deres scenarioverdi ved salg</span><strong>{eur.format(calc.finalValue)}</strong></article>
   <article><span>Scenario: netto salg etter kostnader og restlån</span><strong>{eur.format(calc.proceeds)}</strong></article>
  </div>
  <p className="corporate-calculator-note">Kontantutbetalinger er ikke lik regnskapsmessige kostnader. Hotellalternativet er ikke en garantert besparelse. Verdiutvikling er scenario, ikke prognose. Skatt, valuta, inflasjon, ekstra vedlikehold og salgsbeskatning krever egen analyse.</p>
  <button type="button" className="corporate-calculator-cta" onClick={report}>Få beregningen som utvidet PDF på e-post <ArrowRight size={17}/></button>
  <p style={{marginTop:16}}><Link href="/bedriftshytte-spania#bedriftsvurdering">Eller kontakt Zen Eco Homes direkte →</Link></p>
 </div></section>;
}
