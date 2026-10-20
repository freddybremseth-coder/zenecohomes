"use client";
import {useMemo,useState} from "react";
import {ArrowLeft,ArrowRight} from "lucide-react";
const euro=new Intl.NumberFormat("nb-NO",{style:"currency",currency:"EUR",maximumFractionDigits:0});
const safe=(v:number)=>Number.isFinite(v)?Math.max(0,v):0;
type Stay={id:number;name:string;eventsPerYear:number;people:number;nights:number;pricePerPersonNight:number};
export function CorporateHomeCalculator(){
 const [budget,setBudget]=useState(500000);
 const [users,setUsers]=useState(50);
 const [weeks,setWeeks]=useState(30);
 const [propertyType,setPropertyType]=useState<"used"|"new">("used");
 const [acquisitionPct,setAcquisitionPct]=useState(12);
 const [annualOperating,setAnnualOperating]=useState(12000);
 const [capitalPct,setCapitalPct]=useState(4);
 const [holdingYears,setHoldingYears]=useState(10);
 const [valuePct,setValuePct]=useState(0);
 const [showAdvanced,setShowAdvanced]=useState(false);
 const [showHotel,setShowHotel]=useState(false);
 const [stays,setStays]=useState<Stay[]>([{id:1,name:"Bedriftsopphold",eventsPerYear:0,people:0,nights:0,pricePerPersonNight:0}]);
 const [page,setPage]=useState(1);
 const estimate=useMemo(()=>{
  const price=safe(budget)/(1+safe(acquisitionPct)/100);
  const acquisition=price*safe(acquisitionPct)/100;
  const capitalBase=price+acquisition;
  const capitalCost=capitalBase*safe(capitalPct)/100;
  const annualisedAcquisition=acquisition/Math.max(1,holdingYears);
  const annualCost=safe(annualOperating)+capitalCost+annualisedAcquisition;
  const hotel=showHotel?stays.reduce((s,t)=>s+safe(t.eventsPerYear)*safe(t.people)*safe(t.nights)*safe(t.pricePerPersonNight),0):0;
  const futureValue=price*Math.pow(1+valuePct/100,holdingYears);
  return {price,acquisition,capitalBase,capitalCost,annualisedAcquisition,annualCost,hotel,futureValue,perWeek:weeks>0?annualCost/weeks:null};
 },[budget,acquisitionPct,capitalPct,annualOperating,holdingYears,valuePct,stays,weeks,showHotel]);
 function report(){
  const normalizedStays=showHotel?stays.filter(t=>t.eventsPerYear>0&&t.people>0&&t.nights>0&&t.pricePerPersonNight>0):[];
  const detail={
   propertyPrice:estimate.price,totalBudget:budget,propertyType,users,employeeWeeks:weeks,
   annualOperating,acquisitionPct,capitalPct,valuePct,holdingYears,
   annualCostBeforeValue:estimate.annualCost,employeeCostPerWeek:estimate.perWeek,
   acquisitionCost:estimate.acquisition,annualCapitalCost:estimate.capitalCost,
   estimatedFutureValue:estimate.futureValue,
   businessStayCount:normalizedStays.reduce((s,t)=>s+t.eventsPerYear,0),
   participantNights:normalizedStays.reduce((s,t)=>s+t.eventsPerYear*t.people*t.nights,0),
   hotelAlternativeAnnual:showHotel&&normalizedStays.length?estimate.hotel:null,
   stays:normalizedStays.map(({id,...stay})=>stay),
   assumptions:"Totalbudsjett inkluderer beregnede kjøpskostnader. Kapitalkostnad er en modellert alternativ kapitalkostnad, ikke lånerente eller avdrag. Kjøpskostnader fordeles over eiertid i årskostnadsmodellen. Verdistigning er et scenario utenfor hovedkostnaden; ingen garantert avkastning. Hotellkostnad er kun et valgfritt alternativ for faktiske bedriftsopphold.",
   generatedAt:new Date().toISOString()
  };
  try{sessionStorage.setItem("zeneco-corporate-calculator",JSON.stringify(detail));}catch{}
  window.dispatchEvent(new CustomEvent("zeneco:corporate-calculator",{detail}));
  document.getElementById("bedriftsvurdering")?.scrollIntoView({behavior:"smooth",block:"start"});
 }
 function numberField(label:string,value:number,update:(v:number)=>void,unit="",max?:number){
  return <label><span>{label}</span><div className="corporate-number-field"><input aria-label={label} type="number" min={0} max={max} step="any" value={value} onChange={e=>update(max===undefined?safe(Number(e.target.value)):Math.min(max,safe(Number(e.target.value))))}/>{unit&&<b>{unit}</b>}</div></label>;
 }
 function changeType(type:"used"|"new"){setPropertyType(type);setAcquisitionPct(type==="used"?12:13);}
 function updateStay(id:number,field:keyof Stay,value:number){setStays(current=>current.map(s=>s.id===id?{...s,[field]:safe(value)}:s));}
 return <div className="corporate-calculator">
  {page===1?<div>
   <h3>Opplysninger og beregning</h3>
   <div className="corporate-calculator-inputs">
    {numberField("Totalbudsjett (€)",budget,setBudget,"€")}
    {numberField("Antall ansatte/medlemmer",users,setUsers)}
    {numberField("Antall bruksuker per år",weeks,setWeeks,"uker",52)}
   </div>
   <div className="corporate-calculator-advanced" style={{marginTop:16}}>
    <label><span>Boligtype</span><select value={propertyType} onChange={e=>changeType(e.target.value as "used"|"new")}><option value="used">Bruktbolig</option><option value="new">Nybygg</option></select></label>
   </div>
   <details className="corporate-stays" open={showHotel} onToggle={e=>setShowHotel(e.currentTarget.open)}>
    <summary>Legg til kostnader ved hotellopphold (valgfritt)</summary>
    <p>Hotellalternativet gjelder bare bedriftsopphold dere ellers ville betalt for. Alle felter starter på null.</p>
    {stays.map(stay=><div key={stay.id} className="corporate-calculator-inputs" style={{marginBottom:12}}>
     {numberField("Antall opphold per år",stay.eventsPerYear,v=>updateStay(stay.id,"eventsPerYear",v))}
     {numberField("Personer per opphold",stay.people,v=>updateStay(stay.id,"people",v))}
     {numberField("Netter per opphold",stay.nights,v=>updateStay(stay.id,"nights",v))}
     {numberField("Hotellpris per person/natt",stay.pricePerPersonNight,v=>updateStay(stay.id,"pricePerPersonNight",v),"€")}
    </div>)}
    <button type="button" className="corporate-calculator-toggle" onClick={()=>setStays(current=>[...current,{id:Math.max(...current.map(s=>s.id))+1,name:"Bedriftsopphold "+(current.length+1),eventsPerYear:0,people:0,nights:0,pricePerPersonNight:0}])}>+ Legg til flere typer opphold</button>
   </details>
   <button type="button" className="corporate-calculator-toggle" aria-expanded={showAdvanced} onClick={()=>setShowAdvanced(v=>!v)}>
    {showAdvanced?"Skjul økonomiske forutsetninger":"Juster økonomiske forutsetninger"}
   </button>
   {showAdvanced&&<div className="corporate-calculator-advanced">
    {numberField("Kjøpskostnader",acquisitionPct,v=>setAcquisitionPct(Math.min(30,v)),"%")}
    {numberField("Årlige driftskostnader",annualOperating,setAnnualOperating,"€")}
    {numberField("Alternativ kapitalkostnad per år",capitalPct,v=>setCapitalPct(Math.min(25,v)),"%")}
    {numberField("Eiertid",holdingYears,v=>setHoldingYears(Math.max(1,Math.min(30,Math.round(v)))),"år")}
    <label><span>Scenario for årlig verdiendring</span><select value={valuePct} onChange={e=>setValuePct(Number(e.target.value))}><option value={0}>0 % (nøytralt)</option><option value={2}>2 %</option><option value={3}>3 %</option><option value={5}>5 %</option><option value={-2}>-2 % (prisfall)</option></select></label>
    <small>Bruktbolig bruker 12 % kjøpskostnader som illustrasjon; nybygg 13 %. Begge må kontrolleres individuelt. Finansiering/lånerenter er ikke beregnet separat: kapitalkostnaden representerer en alternativkostnad, og avdrag er ikke en kostnad i denne modellen.</small>
   </div>}
   <button type="button" className="corporate-calculator-cta" onClick={()=>setPage(2)}>Vis resultatet <ArrowRight size={17}/></button>
  </div>:<div>
   <button type="button" className="corporate-calculator-toggle" onClick={()=>setPage(1)}><ArrowLeft size={17}/> Endre opplysninger</button>
   <h3>Resultater – veiledende estimater</h3>
   <div className="corporate-calculator-results" aria-live="polite">
    <article className="corporate-result-primary"><span>Estimert maksimal boligpris</span><strong>{euro.format(estimate.price)}</strong><small>Innenfor kjøpsbudsjettet inklusive estimerte omkostninger.</small></article>
    <article><span>Estimerte kjøpskostnader</span><strong>{euro.format(estimate.acquisition)}</strong><small>{acquisitionPct} % av kjøpesum – {propertyType==="used"?"bruktbolig":"nybygg"}.</small></article>
    <article><span>Estimert årlig drift</span><strong>{euro.format(annualOperating)}</strong><small>Justerbart anslag for tilsyn, avgifter, forsikring, energi og vedlikehold.</small></article>
    <article><span>Årlig modellkostnad</span><strong>{euro.format(estimate.annualCost)}</strong><small>Drift, alternativ kapitalkostnad og fordelt kjøpsomkostning; ikke kontantstrøm eller lånetermin.</small></article>
    <article><span>Kostnad per bruksuke</span><strong>{estimate.perWeek===null?"Ikke beregnbar":euro.format(estimate.perWeek)}</strong><small>Basert på {weeks} bruksuker og {users} potensielle brukere.</small></article>
    <article><span>Alternativ hotellkostnad</span><strong>{showHotel&&estimate.hotel>0?euro.format(estimate.hotel):"Valgfritt"}</strong><small>{showHotel&&estimate.hotel>0?"Kun faktiske bedriftsopphold – ingen garantert besparelse.":"Legg inn hotellopphold dersom dere ønsker sammenligning."}</small></article>
   </div>
   <p className="corporate-calculator-note">Tallene er veiledende. Den utvidede e-postrapporten viser kapitalkostnad, valgt eiertid, verdiutviklingsscenario, fremtidig eiendomsverdi, kostnad per uke, forutsetninger og usikkerhet. Verdiøkning regnes ikke som kontantinntekt eller garantert gevinst.</p>
   <button type="button" className="corporate-calculator-cta" onClick={report}>Få detaljert kostnadsrapport på e-post <ArrowRight size={17}/></button>
  </div>}
 </div>;
}
