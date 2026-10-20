"use client";
import { useEffect, useRef } from "react";
const spots = [
  {id:"middelhavskysten",label:"Middelhavskysten",lat:38.5,lng:-0.5},
  {id:"nord-spania",label:"Nord-Spania og Atlanterhavskysten",lat:43.1,lng:-5.0},
  {id:"innlandet",label:"Innlandet",lat:39.6,lng:-4.0},
  {id:"oyene",label:"Balearene",lat:39.7,lng:2.7},
  {id:"oyene",label:"Kanariøyene",lat:28.3,lng:-16.5},
];
export function SpainRegionsMap(){
 const node=useRef<HTMLDivElement>(null);
 useEffect(()=>{
   let map:any;
   let disposed=false;
   void import("leaflet").then(({default:L})=>{
     if(disposed||!node.current)return;
     map=L.map(node.current,{scrollWheelZoom:false,worldCopyJump:false});
     L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:18,attribution:"&copy; OpenStreetMap contributors"}).addTo(map);
     spots.forEach(p=>{
       const marker=L.marker([p.lat,p.lng]).addTo(map);
       marker.bindTooltip(p.label);
       marker.on("click",()=>{document.getElementById(p.id)?.scrollIntoView({behavior:"smooth",block:"start"});history.replaceState(null,"","#"+p.id)});
     });
     map.fitBounds([[27,-18],[44,5]],{padding:[18,18]});
   });
   return()=>{disposed=true;map?.remove()};
 },[]);
 return <div className="my-8 rounded-xl border border-slate-200 p-3">
   <p className="mb-3 text-sm">Velg en markør på kartet for å gå til avsnittet. Markørene representerer større landsdeler, ikke eksakte regiongrenser.</p>
   <div ref={node} style={{height:390,width:"100%",zIndex:0}} role="region" aria-label="Kart over Spania med klikkbare områdevalg"/>
   <nav aria-label="Velg område fra kartet" className="flex flex-wrap gap-3 py-3">{spots.map(p=><a key={p.label} href={"#"+p.id} className="underline underline-offset-4">{p.label}</a>)}</nav>
 </div>;
}
