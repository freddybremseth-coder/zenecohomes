"use client";
import { useMemo, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
const euro = new Intl.NumberFormat("nb-NO",{style:"currency",currency:"EUR",maximumFractionDigits:0});
function nonnegative(value:number){return Number.isFinite(value)?Math.max(0,value):0;}
export function CorporateHomeCalculator() {
  const [budget,setBudget] = useState(500000);
  const [users,setUsers] = useState(50);
  const [weeks,setWeeks] = useState(30);
  const [hotelOpen,setHotelOpen] = useState(false);
  const [trips,setTrips] = useState(0);
  const [people,setPeople] = useState(0);
  const [nights,setNights] = useState(0);
  const [nightly,setNightly] = useState(0);
  const [step,setStep] = useState(1);
  // Used-property acquisition scenario: 9% transfer tax plus 3% other purchase costs.
  // Operating costs are a transparent initial planning assumption, not a quote.
  const purchaseRate=0.12;
  const annualRate=0.025;
  const result=useMemo(()=>{
    const total=nonnegative(budget);
    const price=total/(1+purchaseRate);
    const buying=total-price;
    const operating=price*annualRate;
    const hotel=nonnegative(trips)*nonnegative(people)*nonnegative(nights)*nonnegative(nightly);
    return {price,buying,operating,hotel};
  },[budget,trips,people,nights,nightly]);
  function requestReport(){
    const detail={
      propertyPrice:result.price,totalBudget:nonnegative(budget),users:nonnegative(users),
      employeeWeeks:nonnegative(weeks),annualOperating:result.operating,
      acquisitionPct:12,estimatedAcquisitionCosts:result.buying,
      hotelAlternativeAnnual:hotelOpen?result.hotel:null,
      businessStayCount:hotelOpen?nonnegative(trips):0,
      participantNights:hotelOpen?nonnegative(trips)*nonnegative(people)*nonnegative(nights):0,
      stays:hotelOpen?[{name:"Hotellalternativ",eventsPerYear:nonnegative(trips),people:nonnegative(people),nights:nonnegative(nights),pricePerPersonNight:nonnegative(nightly)}]:[],
      assumptions:"Totalbudsjett er kjøpesum pluss anslåtte kjøpskostnader (12 %). Årlig drift anslått til 2,5 % av kjøpesum. Hotellalternativ er kun sammenligningsgrunnlag.",generatedAt:new Date().toISOString()
    };
    try {window.sessionStorage.setItem("zeneco-corporate-calculator",JSON.stringify(detail));}catch{}
    window.dispatchEvent(new CustomEvent("zeneco:corporate-calculator",{detail}));
    document.getElementById("bedriftsvurdering")?.scrollIntoView({behavior:"smooth",block:"start"});
  }
  const numberField=(label:string,value:number,setter:(value:number)=>void,unit:string,min=0,max?:number)=>(
    <label style={{display:"grid",gap:8}}><span>{label}</span><div className="corporate-number-field"><input type="number" min={min} max={max} step={1} value={value} onChange={e=>setter(nonnegative(Number(e.target.value)))} /><b>{unit}</b></div></label>
  );
  return <div className="corporate-calculator">
    {step===1?<div>
      <h3>Opplysninger og beregning</h3>
      <div className="corporate-calculator-inputs">
        {numberField("Totalbudsjett (€)",budget,setBudget,"€")}
        {numberField("Antall ansatte/medlemmer",users,setUsers,"",0)}
        {numberField("Antall bruksuker per år",weeks,v=>setWeeks(Math.min(52,v)),"uker",0,52)}
      </div>
      <details className="corporate-stays" open={hotelOpen} onToggle={e=>setHotelOpen(e.currentTarget.open)}>
        <summary style={{cursor:"pointer",fontWeight:600}}>Legg til kostnader ved hotellopphold</summary>
        <p>Valgfritt: Oppgi bare overnattinger virksomheten ellers ville ha betalt for. Alle felt starter på 0.</p>
        <div className="corporate-calculator-inputs">
          {numberField("Antall opphold per år",trips,setTrips,"")}
          {numberField("Antall personer per opphold",people,setPeople,"")}
          {numberField("Antall netter per opphold",nights,setNights,"")}
          {numberField("Hotellpris per person per natt (€)",nightly,setNightly,"€")}
        </div>
      </details>
      <button type="button" className="corporate-calculator-cta" onClick={()=>setStep(2)}>Vis resultatet <ArrowRight size={17}/></button>
    </div>:<div>
      <button type="button" className="corporate-calculator-toggle" onClick={()=>setStep(1)}><ArrowLeft size={17}/> Endre opplysningene</button>
      <h3>Resultater – veiledende estimater</h3>
      <div className="corporate-calculator-results" aria-live="polite">
        <article className="corporate-result-primary"><span>Estimert maksimal boligpris</span><strong>{euro.format(result.price)}</strong><small>Innenfor oppgitt totalbudsjett, inkludert beregnede kjøpskostnader.</small></article>
        <article><span>Estimert kjøpesum for bolig</span><strong>{euro.format(result.price)}</strong><small>Veiledende prisramme før eventuelle individuelle tilpasninger.</small></article>
        <article><span>Estimerte kjøpskostnader</span><strong>{euro.format(result.buying)}</strong><small>12 % av kjøpesum: eksempel for bruktbolig med anslått 9 % ITP og 3 % øvrige kostnader.</small></article>
        <article><span>Estimerte årlige driftskostnader</span><strong>{euro.format(result.operating)}</strong><small>Planleggingsanslag 2,5 % av boligpris per år; faktiske fellesutgifter, IBI, forsikring, energi, vedlikehold og Care varierer.</small></article>
        <article className="corporate-result-hotel"><span>Alternativ hotellkostnad</span>{hotelOpen && trips>0 && people>0 && nights>0 && nightly>0 ? <><strong>{euro.format(result.hotel)} / år</strong><small>{trips} opphold × {people} personer × {nights} netter × {euro.format(nightly)}. Ikke en garantert besparelse.</small></>:<><strong>Valgfritt sammenligningsgrunnlag</strong><small>Legg inn hotellopplysninger på forrige side dersom dere ønsker en sammenligning.</small></>}</article>
      </div>
      <p className="corporate-calculator-note">Forutsetninger: Budsjettet dekker kjøpesum og beregnede kjøpskostnader, men ikke årlige eierkostnader. Nybygg og andre kjøpsformer har andre avgifter. Kostnadsprosentene er sjablonger, ikke pristilbud. Antall {weeks} bruksuker og {users} potensielle brukere påvirker planleggingen, men ikke boligprisen direkte. Finansiering, renter, inflasjon, skatt, valutaendringer og gevinst/tap ved salg er ikke inkludert. Få en individuell vurdering før kjøpsbeslutning.</p>
      <button type="button" className="corporate-calculator-cta" onClick={requestReport}>Få en detaljert kostnadsoversikt på e-post <ArrowRight size={17}/></button>
    </div>}
  </div>;
}
