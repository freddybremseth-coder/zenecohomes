import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";

const preferences = [
  ["Mest bolig for pengene", "Innlandet, Murcia / Costa Cálida"],
  ["Varm vinter", "Kanariøyene, Sør-Spania"],
  ["Norsk miljø", "Costa Blanca, Costa del Sol"],
  ["By og strand", "Alicante, Málaga, Valencia"],
  ["Ro og større tomt", "Innlandet"],
  ["Eksklusive boliger", "Marbella, Costa Blanca Nord"],
];
const budget = [
  ["Lavest mulig kjøpesum", "Extremadura, Castilla-La Mancha og deler av Castilla y León"],
  ["Mye bolig for pengene nær Middelhavet", "Murcia, Almería og deler av Costa Cálida"],
  ["Mer plass og større tomt", "Innlandsområdene i Alicante og andre deler av Sørøst-Spania"],
  ["Et etablert internasjonalt boligmarked", "Costa Blanca og Costa del Sol"],
  ["Premiumområder", "Marbella, Mallorca og deler av Costa Blanca Nord"],
];
const airportTables = [
  { title:"Populære områder rundt Alicante–Elche lufthavn", rows:[["Alicante","ca. 13 min"],["Aspe","ca. 20 min"],["Ciudad Quesada","ca. 40 min"],["Benidorm","ca. 40 min"],["Torrevieja","ca. 40 min"],["San Pedro del Pinatar","ca. 60 min"],["Altea","ca. 60 min"],["Calpe","ca. 60 min"],["La Manga del Mar Menor","ca. 90 min"]] },
  { title:"Populære områder rundt Málaga lufthavn", rows:[["Fuengirola","ca. 20 min"],["Marbella","ca. 35 min"],["Estepona","ca. 60 min"]] },
  { title:"Populære områder rundt Barcelona og Madrid", rows:[["Madrid sentrum","ca. 30 min fra Madrid–Barajas"],["Toledo","ca. 60 min fra Madrid–Barajas"],["Segovia","ca. 90 min fra Madrid–Barajas"],["Barcelona sentrum","ca. 25 min fra Barcelona–El Prat"],["Sitges","ca. 25 min fra Barcelona–El Prat"]] },
  { title:"Populære områder rundt flyplassene på Balearene og Kanariøyene", rows:[["Palma","ca. 15 min fra Palma de Mallorca"],["Alcúdia","ca. 40 min fra Palma de Mallorca"],["Playa del Inglés","ca. 25 min fra Gran Canaria"],["Maspalomas","ca. 25 min fra Gran Canaria"],["Los Cristianos","ca. 20 min fra Tenerife Sør"],["Los Gigantes","ca. 40 min fra Tenerife Sør"]] },
];
const faq = [
 ["Hvor i Spania er det billigst å bo?","Innlandsregioner som Extremadura og Castilla-La Mancha har gjennomgående lavere boligpriser enn de mest etterspurte kystområdene. Levekostnader varierer med bolig, bilbruk, energiforbruk og lokale tjenester."],
 ["Hvilken by i Spania bor det flest nordmenn i?","Det kommer an på om man teller registrerte norske statsborgere i kommunen, norske boligeiere eller sesongbeboere. L'Alfàs del Pi, som omfatter Albir, har et særlig stort registrert norsk miljø. Torrevieja, Fuengirola og Mogán har også etablerte norske miljøer."],
 ["Hvilke områder i Spania er varmest om vinteren?","Sør på Kanariøyene, særlig Sør-Tenerife og sørlige Gran Canaria, er normalt varmest og jevnest gjennom vinteren. På fastlandet er Costa del Sol og deler av Costa Blanca blant alternativene med milde vinterdager."],
 ["Hvor i Spania er det best å bo?","Det avhenger av din hverdag: Costa Blanca og Costa del Sol passer ofte dem som ønsker kystliv og internasjonale miljøer, storbyene passer dem som vil gå til det meste, og innlandet passer dem som prioriterer ro og plass. Test området utenfor feriesesongen før du bestemmer deg."]
];
function Comparison({rows}:{rows:string[][]}) { return <div className="grid gap-2 my-6">{rows.map(([a,b])=><div key={a} className="grid gap-1 rounded-xl border border-slate-200 bg-white p-4 sm:grid-cols-2"><span className="font-semibold text-slate-900">{a}</span><span>{b}</span></div>)}</div>; }
function Airport({title,rows}:{title:string;rows:string[][]}) { return <section className="my-7"><h4 className="font-semibold text-xl mb-3">{title}</h4><div className="grid gap-2">{rows.map(([name,time])=><div key={name} className="flex flex-wrap justify-between gap-2 border-b border-slate-200 py-2"><span className="font-medium">{name}</span><span>{time}</span></div>)}</div></section>; }
function RegionMap() { const regions=[{id:"middelhavskysten",name:"Middelhavskysten",x:252,y:225,w:225,h:65},{id:"nord-spania",name:"Nord-Spania / Atlanterhavet",x:96,y:65,w:270,h:60},{id:"innlandet",name:"Innlandet",x:115,y:150,w:225,h:60},{id:"oyene",name:"Balearene / Kanariøyene",x:35,y:325,w:320,h:58}];return <div className="my-8 rounded-2xl border border-slate-200 bg-slate-50 p-4"><p className="mb-3 text-sm text-slate-600">Klikk på et område for å gå til omtalen. Skjematisk kart, ikke geografisk målestokk.</p><svg viewBox="0 0 520 410" role="img" aria-label="Klikkbart skjematisk kart over spanske områdetyper" className="w-full h-auto max-h-[430px]"><path d="M84 86 L195 43 L310 57 L390 115 L381 184 L455 222 L434 300 L337 338 L236 300 L172 326 L99 248 L62 168 Z" fill="#dce9dd" stroke="#76938a" strokeWidth="3"/><path d="M35 365 L56 356 M73 372 L93 359 M103 382 L129 367" stroke="#88a9bb" strokeWidth="12" strokeLinecap="round"/>{regions.map(r=><a key={r.id} href={"#"+r.id} aria-label={"Les om "+r.name}><rect x={r.x} y={r.y} width={r.w} height={r.h} rx="13" fill="#fff" stroke="#738d91" strokeWidth="2"/><text x={r.x+r.w/2} y={r.y+r.h/2+5} fontSize="15" fill="#183c42" textAnchor="middle" fontWeight="600">{r.name}</text></a>)}</svg><nav aria-label="Hopp til region" className="flex flex-wrap gap-3 text-sm">{regions.map(r=><a className="underline underline-offset-4" key={r.id} href={"#"+r.id}>{r.name}</a>)}</nav></div>; }
export function SpainAreaGuide(){
 return <section className="section article-shell"><div className="article-layout"><article className="article-main prose max-w-none">
 <p>Hvor i Spania du bør kjøpe eiendom avhenger av både prisnivå, klima og hvordan du ønsker å bruke boligen i hverdagen. Jeg har sett mange boligkjøpere starte med en klar idé om hvor de skal bo, for så å endre mening over tid når de besøker områdene.</p>
 <p>I denne guiden ser vi ikke bare nærmere på de ulike stedene i Spania, men vi skal også prøve å finne ut hvilke områder som passer best til det livet du ser for deg.</p>
 <Comparison rows={preferences}/><p><Link href="/omrader" className="underline">Se områdene ZenEcoHomes jobber i →</Link></p>
 <h2 id="oversikt">Oversikt over de ulike områdene i Spania</h2>
 <p>Spania består av 17 autonome regioner, og det er store geografiske forskjeller mellom Middelhavskysten, Atlanterhavskysten, innlandet og øygruppene. For boligkjøpere merkes dette blant annet på klima, boligpriser, reisevei og hvor turistpreget et område egentlig er.</p>
 <p>Mange nordmenn ser først mot kjente kystområder som Costa Blanca, Costa del Sol og Costa Cálida, men det finnes også mange spennende områder lenger nord, i innlandet og utenfor fastlandet.</p><RegionMap/>
 <h3 id="middelhavskysten">Middelhavskysten</h3>
 <p>Middelhavskysten i Spania strekker seg fra Catalonia i nordøst, gjennom Valencia-regionen og Murcia, og videre sørover langs Andalucía. Det betyr at mange av de mest populære kystområdene i Spania ligger her.</p>
 <p>Costa Brava ligger lengst nord mot Frankrike, etterfulgt av blant annet Costa Daurada og Costa del Azahar. Lenger sør ligger Costa Blanca Nord og Costa Blanca Sør i Alicante-provinsen, deretter Costa Cálida i Murcia-regionen, før kysten fortsetter mot Costa de Almería, Costa Tropical og Costa del Sol.</p>
 <p>Forskjellene er større enn navnene kan gi inntrykk av. Nord på Middelhavskysten er klimaet generelt kjøligere og landskapet grønnere, mens sørøstlige deler av Spania har tørrere klima og milde vintre.</p>
 <p>Boligmarkedet varierer også betydelig, fra eksklusive markeder rundt Marbella og deler av Costa Blanca Nord til rimeligere alternativer i Murcia, Almería og enkelte steder lenger inn fra kysten.</p>
 <p>Blant norske boligkjøpere er Costa Blanca Nord og Sør, Costa Cálida og Costa del Sol populære områder. Det skyldes mildt klima, store internasjonale miljøer og gode flyforbindelser.</p>
 <h3 id="nord-spania">Nord-Spania og Atlanterhavskysten</h3>
 <p>Nord-Spania og Atlanterhavskysten skiller seg markant fra områdene langs Middelhavet, og byr på en helt annen hverdag. Her er det store grøntområder, mer nedbør og et kjøligere klima gjennom året.</p>
 <p>De mest kjente områdene er Galicia, Asturias, Cantabria og Baskerland, og de består av mange mindre byer og landsbyer, samt noen storbyer som Bilbao og San Sebastián.</p>
 <p>Det er ikke veldig mange norske boligkjøpere i Nord-Spania og langs Atlanterhavskysten. Dette kan blant annet henge sammen med kjøligere vintre, men til gjengjeld byr Nord-Spania ofte på lavere turistpress. Boligprisene er også mange steder lavere enn i de mest populære kystmarkedene ved Middelhavet.</p>
 <h3 id="innlandet">Innlandet</h3>
 <p>Innlandet i Spania dekker store og svært ulike områder, fra regionene rundt Madrid til Castilla-La Mancha, Castilla y León, Aragón og innlandsområdene i blant annet Alicante og Andalucía. Felles for mange av disse områdene er at de er mindre preget av internasjonal turisme enn langs kysten, med unntak av storbyer som Madrid.</p>
 <p>Klimaet skiller seg også vesentlig fra kysten. Somrene kan være svært varme, mens vintrene ofte er kjøligere, særlig om natten. Avstandene er også større, og bil er helt nødvendig i mange områder.</p>
 <p>Det som derimot er en klar fordel med innlandet i Spania, er at du får mye plass for pengene. Her har du også mulighet til å velge tomt selv og bygge det huset du ønsker, forutsatt at tomten og reguleringsplanen tillater det.</p>
 <h3 id="oyene">Balearene og Kanariøyene</h3>
 <p>Balearene og Kanariøyene er to helt forskjellige øymarkeder, men begge byr på andre boligpriser og reiseforhold enn fastlandet. Når du bosetter deg på øyene, må du også ta høyde for andre reiseveier.</p>
 <p>Balearene består blant annet av Mallorca, Ibiza og Menorca. Her er boligmarkedet sterkt preget av internasjonal etterspørsel, og prisnivået er svært høyt i mange populære områder. Klimaet er middelhavspreget, med varme somre og milde vintre.</p>
 <p>Kanariøyene ligger langt sørvest for fastlandet og har et jevnere klima gjennom året. Øyene er derfor populære blant nordmenn som ønsker varme vintre og vil bruke boligen mye utenfor sommersesongen. Tenerife og Gran Canaria har også store og etablerte internasjonale miljøer.</p>
 <h2>Slik velger du riktig område i Spania</h2>
 <p>Start med å finne ut hva som betyr mest for deg. Budsjett, klima, reisevei og hvordan du vil bruke boligen, vil raskt snevre inn hvilke områder som passer.</p><p>Her er de viktigste tingene jeg ville vurdert først.</p>
 <h3>Hvor mye vil du kjøpe for?</h3>
 <p>Budsjettet ditt vil raskt snevre inn de ulike områdene i Spania. Forskjellene i boligpris er store, både mellom regioner og mellom kyst og innland.</p>
 <p>De billigste boligene i Spania finnes i hovedsak i innlandet. I september 2026 lå gjennomsnittlig annonsert prisnivå for bruktboliger på rundt 1 049 euro per kvadratmeter i Extremadura, 1 157 euro i Castilla-La Mancha og 1 386 euro i Castilla y León.</p>
 <p>Til sammenligning lå Murcia-regionen på rundt 1 689 euro per kvadratmeter, Alicante-provinsen på 2 767 euro og Málaga-provinsen på 4 317 euro. Tallene er et historisk prisøyeblikksbilde basert på annonserte priser, ikke gjennomførte salgspriser, pristilbud eller takst.</p>
 <p>Forskjellen er stor nok til at samme budsjett kan gi helt ulike typer boliger. Et beløp som rekker til en mindre leilighet i et dyrt kystområde, kan gi en langt større bolig eller tomt i innlandet.</p>
 <p>Det betyr likevel ikke at det billigste området nødvendigvis er det beste valget. Prisnivået henger ofte sammen med avstand til kysten, tilgjengelighet, servicetilbud og etterspørsel fra både lokale og utenlandske kjøpere.</p>
 <p className="text-sm">Kilde: <a href="https://www.idealista.com/sala-de-prensa/informes-precio-vivienda/venta/report/" target="_blank" rel="noopener noreferrer" className="underline">Idealista, rapport over annonserte boligpriser i september 2026</a>. Statistikken bruker en endret metode fra juli 2026.</p><Comparison rows={budget}/>
 <h3>Hvor varmt skal det være om vinteren?</h3>
 <p>Hvis du ønsker milde temperaturer også om vinteren, er Kanariøyene normalt det beste valget. Sør på Tenerife ligger normaltemperaturen i januar rundt 18,4 °C, mens Gran Canaria ligger rundt 17,9 °C. Til sammenligning ligger Málaga og Alicante rundt 12 °C. Dette er døgnmiddel, ikke dagtemperatur, og ingen av stedene garanterer sommervarme hver dag.</p>
 <p>Her er områdene i Spania med varmest vintre:</p>
 <ul><li><strong>Sør-Tenerife:</strong> rundt 18–19 °C i gjennomsnitt i januar, med vanlige dagtemperaturer over 20 °C.</li><li><strong>Gran Canaria:</strong> rundt 18 °C i januar og milde netter.</li><li><strong>Costa del Sol / Málaga:</strong> rundt 12 °C som januarmiddel og dagtemperaturer rundt 17 °C.</li><li><strong>Costa Blanca / Alicante:</strong> rundt 11,7 °C i januar og dagtemperaturer rundt 17 °C.</li><li><strong>Murcia / Costa Cálida:</strong> mildt, men større forskjell mellom dag og natt; Murcia by ligger rundt 10,6 °C i januar, med dagtemperaturer rundt 16,6 °C.</li></ul>
 <h3>Hvor ofte skal du reise til og fra Spania?</h3>
 <p>Skal du reise mye mellom Norge og Spania, ville jeg definitivt valgt et sted i nærheten av en flyplass. En time eller mer i taxi kan være ganske seigt etter en lang flytur.</p>
 <p>En tidligere kollega sluttet nesten å bruke den spanske ferieboligen sin fordi reisen til og fra flyplassen ble for lang. Med små barn, mye bagasje og halvannen time i drosje ble terskelen for hyppige reiser for høy.</p>
 <p>Det er nok også derfor mange nordmenn velger områder i nærheten av Alicante og Málaga. Begge flyplassene har direkteforbindelser til Norge på utvalgte ruter og sesonger, samtidig som mange populære boligområder ligger innenfor omtrent én times kjøring.</p>
 <p>Områdene rundt Barcelona og Madrid er også gode valg hvis nærhet til flyplass og direkteavganger er viktig for deg.</p>
 <p><em>Kjøretidene nedenfor er omtrentlige, uten garanti for trafikk, tidspunkt, terminal eller konkret adresse.</em></p>
 {airportTables.map(t=><Airport key={t.title} {...t}/>)}
 <h3>Er nærhet til andre nordmenn viktig?</h3>
 <p>Albir på Costa Blanca Nord er et særlig aktuelt område hvis du vil bo i nærheten av mange andre nordmenn. Albir ligger i kommunen l'Alfàs del Pi, hvor 2 626 norske statsborgere var registrert bosatt i starten av 2026. Det reelle antallet som oppholder seg der i løpet av året kan være høyere fordi ikke alle sesongbeboere er registrert.</p>
 <p>Her finner du også en norsk skole, Sjømannskirken og en rekke norske foreninger. Men Albir er langt fra det eneste alternativet:</p>
 <ul><li><strong>Torrevieja og Ciudad Quesada:</strong> I Torrevieja var 737 norske statsborgere registrert i mai 2026, mens Rojales kommune, som Ciudad Quesada tilhører, hadde 646 i 2025. I Ciudad Quesada ligger også en norsk skole.</li><li><strong>Costa del Sol:</strong> Fuengirola hadde 682 registrerte norske statsborgere i 2025, Marbella 266 og Málaga by 95. Det finnes også norsk skole i Málaga-området.</li><li><strong>Gran Canaria:</strong> Mogán kommune, med blant annet Arguineguín og Puerto Rico, hadde 625 registrerte norske statsborgere i 2025. Her finnes Den norske skolen Gran Canaria.</li><li><strong>Andre deler av Costa Blanca:</strong> Benidorm og Villajoyosa har også norsk tilknytning. I 2025 var henholdsvis 80 og 76 norske statsborgere registrert der.</li></ul>
 <p>Kommunetallene gjelder registrerte statsborgere på ulike telletidspunkter, ikke alle norske eiere, besøkende eller personer med norsk bakgrunn. Tallene bør kontrolleres mot de enkelte kommunenes register eller INEs kommunefordelte befolkningsstatistikk før de brukes som en oppdatert rangering.</p>
 <h3>Hvilken hverdag ser du for deg?</h3>
 <p>Det beste området er ikke nødvendigvis det med finest strand, lavest pris eller best utsikt. Det viktigste er hvordan du faktisk ønsker å bruke dagene når du er i Spania.</p>
 <p>Vil du kunne gå til stranden, restauranter og butikker uten å bruke bil, bør du se etter en bolig i eller tett på et etablert sentrum. Alicante, Albir, Torrevieja, Fuengirola og flere feriebyer på Kanariøyene kan passe godt.</p>
 <p>Hvis du heller ønsker ro, større uteområder og mer plass rundt boligen, vil du ofte få mer igjen for pengene litt lenger fra kysten eller i mindre byer og innlandsområder. Da må du samtidig regne med at bilen blir en viktigere del av hverdagen.</p>
 <p>Jeg har selv prøvd begge deler, men bor i dag i Benidorm. For meg ble nærhet til strand og storbyliv avgjørende. Er du fortsatt usikker på hvilket område som passer deg? Da kan du ta en uforpliktende prat med oss.</p>
 <div className="rounded-2xl bg-slate-50 border border-slate-200 p-6 my-8"><h2 className="mt-0">La oss finne området som passer deg</h2><p>Fortell oss hva du ønsker, så hjelper vi deg videre.</p><ContactForm source="guide/omradeguide-eiendomskjop-i-spania" variant="simple" /></div>
 <p>Les også <Link href="/guide/kjope-bolig-i-spania" className="underline">hele guiden til å kjøpe bolig i Spania</Link> eller <Link href="/eiendommer" className="underline">se tilgjengelige eiendommer</Link>.</p>
 <h2>Ofte stilte spørsmål</h2><div className="grid gap-3">{faq.map(([q,a])=><details key={q} className="border rounded-xl p-4"><summary className="font-semibold cursor-pointer">{q}</summary><p>{a}</p></details>)}</div>
 </article></div></section>;
}
