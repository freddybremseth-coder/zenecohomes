import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import ts from "typescript";

// Compile the actual source with its only alias resolved to the real consent
// module. No network calls, real customer submissions, or analytics services.
const toModule = source => "data:text/javascript;base64," + Buffer.from(ts.transpileModule(source,{compilerOptions:{module:ts.ModuleKind.ESNext,target:ts.ScriptTarget.ES2022}}).outputText).toString("base64");
const consent = toModule(fs.readFileSync(new URL("../src/lib/cookie-consent.ts",import.meta.url),"utf8"));
const source = fs.readFileSync(new URL("../src/lib/form-conversion.ts",import.meta.url),"utf8");
assert.ok(source.includes('"@/lib/cookie-consent"'));
const {trackConfirmedFormSubmission: track} = await import(toModule(source.replace('"@/lib/cookie-consent"',JSON.stringify(consent))));
function browser(analytics=true, mode="gtag") {
 const events=[], store=new Map();
 globalThis.window={localStorage:{getItem:()=>JSON.stringify({analytics,marketing:false})},sessionStorage:{getItem:k=>store.get(k),setItem:(k,v)=>store.set(k,v)},setTimeout,clearTimeout};
 if(mode==="gtag")window.gtag=(...args)=>{events.push(args);args[2].event_callback()};
 if(mode==="queue")window.dataLayer=events;
 return {events,store};
}
test("consent declined, absent browser or absent submission ID sends nothing",async()=>{
 const x=browser(false);try{await track("boligprat","test-1","buying_guide");assert.equal(x.events.length,0);browser(true);await track("boligprat","","buying_guide");assert.equal(window.sessionStorage.getItem("zeneco-ga4-conversion:"),undefined);delete globalThis.window;await track("boligprat","test-1","buying_guide");}finally{delete globalThis.window}
});
test("confirmed booking sends one event with exact fixed marker and no duplicate",async()=>{
 const x=browser();try{await track("boligprat","test-2","buying_guide");await track("boligprat","test-2","buying_guide");assert.equal(x.events.length,1);assert.equal(x.events[0][1],"form_submission_unique");assert.equal(x.events[0][2].guide_origin,"buying_guide");assert.equal(x.events[0][2].form_type,"boligprat");}finally{delete globalThis.window}
});
test("other forms and arbitrary marker values never receive guide attribution",async()=>{
 const x=browser();try{await track("kontakt","test-3","buying_guide");await track("boligprat","test-4","private@example.com");await track("boligprat","test-5");assert.equal(x.events.length,3);for(const event of x.events)assert.equal(Object.hasOwn(event[2],"guide_origin"),false);}finally{delete globalThis.window}
});
test("queued fallback deduplicates when gtag becomes available",async()=>{
 const x=browser(true,"queue");try{await track("boligprat","test-6","buying_guide");await track("boligprat","test-6","buying_guide");assert.deepEqual(x.events,[{event:"form_submission_unique",form_type:"boligprat",submission_id:"test-6",guide_origin:"buying_guide"}]);window.gtag=()=>assert.fail("duplicate sent");await track("boligprat","test-6","buying_guide");}finally{delete globalThis.window}
});
test("missing or failed queue does not falsely mark submission as tracked",async()=>{
 const x=browser(true,"none");try{await track("boligprat","test-7","buying_guide");assert.equal(x.store.size,0);window.dataLayer={push(){throw Error("test failure")}};await track("boligprat","test-7","buying_guide");assert.equal(x.store.size,0);window.dataLayer=x.events;await track("boligprat","test-7","buying_guide");assert.equal(x.events.length,1);}finally{delete globalThis.window}
});
