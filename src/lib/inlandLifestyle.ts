export type InlandLifestyleStory = {
  title: string;
  lead: string;
  paragraphs: string[];
  suits: string;
};

export const inlandLifestyleStories: Record<string, InlandLifestyleStory> = {
  biar: {
    title: "Et roligere hverdagsliv med fjell, historie og egen plass",
    lead:
      "Biar passer for deg som ikke bare vil kjøpe et hus i Spania, men bygge en hverdag rundt natur, landsbyliv og mer plass enn du normalt får ved kysten.",
    paragraphs: [
      "Tenk deg en vanlig tirsdag der du handler i landsbyen, tar en kaffe på torget og er hjemme igjen på få minutter – med fjell, olivenlunder og åpne landskap rundt deg. Her er ikke livet organisert rundt turistsesongen. Landsbyen fungerer hele året, og nettopp det er en stor del av tiltrekningen.",
      "Utenfor sentrum endrer følelsen seg raskt. Her kan du få større tomt, mer privatliv, utsikt og mulighet til å ha hage, oliventrær, verksted eller gjester uten at alt ligger tett. Samtidig er du nær nok Villena og hovedveiene til at hverdagen ikke føles isolert.",
      "Biar er særlig interessant for kjøpere som liker et mer lokalt spansk miljø og som setter pris på tydelige årstider, friskere netter og en roligere rytme. Det er mindre strandliv – men langt mer rom for å skape ditt eget sted.",
    ],
    suits: "Passer særlig for helårsboende, naturelskere, familier og kjøpere som ønsker finca, gård eller landsbyhus med karakter.",
  },
  villena: {
    title: "Innlandsliv med byens tilbud tett på",
    lead:
      "Villena er et godt valg for deg som ønsker mer plass, men fortsatt vil ha butikker, restauranter, helsetjenester, skoler og transport innen rekkevidde.",
    paragraphs: [
      "Hverdagen her er mer urban enn i de små landsbyene rundt. Du kan bo sentralt og gå til det meste, eller velge en eiendom i utkanten og fortsatt ha byen få minutter unna. Det gir en fleksibilitet mange innlandskjøpere først oppdager når de faktisk besøker området.",
      "Rundt byen åpner landskapet seg med vinmarker, jordbruk og større eiendommer. Det betyr at du kan kombinere byservice med finca-følelse i samme område – uten å måtte kjøre lange avstander for hver eneste praktiske ting.",
      "Villena passer derfor godt for kjøpere som vil ha et mer selvstendig spansk liv, men som ikke ønsker å føle at de har flyttet langt ut på landet. Det er en base du kan bruke som fast bosted, deler av året eller som utgangspunkt for et større område mellom Alicante og innlandet.",
    ],
    suits: "Passer særlig for helårsboende, familier og kjøpere som vil kombinere byservice med større bolig eller tomt.",
  },
  sax: {
    title: "Småbyfølelse, karakter og kort vei til det meste",
    lead:
      "Sax passer for deg som vil ha en kompakt spansk småby med identitet, samtidig som du kan bo landlig bare noen minutter utenfor sentrum.",
    paragraphs: [
      "Borgen over byen gir Sax en tydelig identitet, men det viktigste i hverdagen er at stedet er oversiktlig. Du får lokale butikker, barer og daglige tjenester uten storbyfølelse, og du kommer raskt videre mot Elda, Petrer og Villena når du trenger et større tilbud.",
      "Utenfor sentrum finnes casas de campo og større tomter som gir en helt annen livsstil enn en leilighet ved sjøen. Her er det plass til hage, basseng, hunder, hobbyer og gjester – og ofte mer privatliv mellom naboene.",
      "Sax er et godt kompromiss for deg som ikke trenger strandpromenaden utenfor døren, men som fortsatt vil ha enkel logistikk. Du får roligere omgivelser uten at hverdagen blir tungvint.",
    ],
    suits: "Passer særlig for kjøpere som ønsker småbyliv, god logistikk og muligheten til å bo landlig like utenfor sentrum.",
  },
  castalla: {
    title: "Fjell, natur og en enklere hverdag nær Alicante",
    lead:
      "Castalla gir en tydelig følelse av å være i innlandet, men uten at avstanden til Alicante og kysten blir stor nok til å dominere hverdagen.",
    paragraphs: [
      "Dette er et område der naturen faktisk blir en del av hverdagen. Fjellene ligger rundt dalen, turmulighetene er nærme, og klimaet oppleves annerledes enn helt nede ved kysten. For mange er nettopp det en fordel gjennom de varmeste månedene.",
      "Boligmarkedet er variert: landsbyhus, villaer i etablerte områder og fincaer med større tomter. Det gjør Castalla interessant både for deg som vil ha et enkelt, praktisk hjem og for deg som drømmer om mer plass og et prosjekt over tid.",
      "Det sterke kortet er balansen. Du kan ha rolige omgivelser og fjell rett utenfor døren, samtidig som Alicante fortsatt er en realistisk del av livet ditt – for flyplass, shopping, restaurantbesøk eller stranddager.",
    ],
    suits: "Passer særlig for aktive kjøpere, familier og dem som ønsker natur og plass uten å bo for langt fra Alicante.",
  },
  "banyeres-de-mariola": {
    title: "Et annet klima – og et helt annet Spania",
    lead:
      "Banyeres de Mariola passer for deg som faktisk liker årstider, fjelluft og natur – ikke bare sol og strand.",
    paragraphs: [
      "Her merker du høyden. Nettene er friskere, vinteren tydeligere og sommeren annerledes enn ved kysten. Det gir et mer klassisk fjelliv med peis, turer, skog og en ro mange ikke forbinder med Alicante-provinsen.",
      "Landsbyen har sitt eget liv, sine tradisjoner og et lokalsamfunn som ikke er bygget rundt ferieboliger. Det gjør området særlig interessant for deg som ønsker å bli en del av et sted – ikke bare eie en bolig der.",
      "Dette er ikke området for alle. Hvis målet er daglige strandturer, finnes bedre valg. Men hvis du vil ha natur, karakter, ro og et hjem som fungerer som base for et mer aktivt og lokalt liv, er Banyeres noe helt annet enn kysten.",
    ],
    suits: "Passer særlig for naturelskere, aktive kjøpere og helårsboende som ønsker kjøligere klima og tydelig landsbyidentitet.",
  },
  busot: {
    title: "Fjellfølelse uten å gi slipp på kysten",
    lead:
      "Busot passer for deg som liker tanken på en roligere landsbyhverdag, men som fortsatt vil kunne bruke El Campello, Alicante og strendene som en naturlig del av livet.",
    paragraphs: [
      "Du våkner med fjellene nærmere enn strandpromenaden, men trenger ikke velge bort sjøen. Busot ligger i overgangssonen der Cabeçó d'Or, småveier og åpent landskap møter kysten bare noen kilometer unna. Det gir en helt annen romfølelse enn i de tetteste ferieområdene.",
      "Hverdagen kan være enkel: lokale ærender i landsbyen, tur eller sykkel i fjellet, og middag eller strandtur ved kysten senere på dagen. Det er nettopp denne fleksibiliteten som gjør Busot interessant – du får mer stillhet rundt boligen uten at avstandene blir et eget prosjekt.",
      "For boligkjøpere betyr det ofte at uteområdet blir viktigere. Hage, terrasse, basseng og utsikt kan få større plass i beslutningen, samtidig som du beholder nærheten til flyplass, Alicante og kystservice.",
    ],
    suits: "Passer særlig for kjøpere som ønsker villa eller landsted med mer ro og plass, men fortsatt vil ha kort vei til kysten.",
  },
  pinoso: {
    title: "Plass til å leve – ikke bare plass til å bo",
    lead:
      "Pinoso gjør det lett å se for seg et nytt liv i innlandet: større tomter, moderne villaer, vinlandskap og en by som fungerer hele året.",
    paragraphs: [
      "Mange kommer hit fordi de ønsker mer enn selve huset. De vil ha basseng uten innsyn, utekjøkken, plass til familie på besøk, hunder, hage eller bare følelsen av å kunne åpne døren og se landskap i stedet for nabobalkongen.",
      "Pinoso har samtidig nok service til at hverdagen fungerer. Du kan handle lokalt, spise godt, bruke håndverkere som kjenner denne typen eiendommer og bo i et område der utenlandske kjøpere allerede er en naturlig del av markedet – uten at byen mister sin spanske karakter.",
      "For mange er dette selve forskjellen fra kysten: du bytter strand utenfor døren mot plass, privatliv og frihet rundt boligen. Hvis du faktisk bruker uteområdet hver dag, kan det være et bedre bytte enn det høres ut som på papiret.",
    ],
    suits: "Passer særlig for kjøpere som ønsker moderne villa på stor tomt, finca, privatliv og et etablert helårsmarked.",
  },
  jumilla: {
    title: "Vinland, plass og en by som fungerer hele året",
    lead:
      "Jumilla passer for deg som vil lenger inn i Spania og ønsker et sted med sterk lokal identitet, et bredt servicetilbud og et landskap der vinmarkene faktisk preger hverdagen.",
    paragraphs: [
      "Her er vin ikke pynt i markedsføringen, men en del av områdets økonomi, mattradisjoner og rytme gjennom året. Bodegas, Monastrell og Ruta del Vino gjør det lett å bruke området aktivt – enten du er interessert i vin eller bare liker den kulturen som vokser rundt den.",
      "Byen er stor nok til at du ikke er avhengig av en annen by for alt. Samtidig åpner landskapet seg raskt utenfor sentrum, med større avstander, mer himmel og en tydelig følelse av å bo på landet når du velger en eiendom utenfor byen.",
      "Jumilla er et tydeligere innlandsvalg enn Busot eller Aspe. Du er lenger fra kystlivet, men får til gjengjeld et område der plass, vinland, natur og lokal identitet er en naturlig del av hverdagen.",
    ],
    suits: "Passer særlig for vin- og matinteresserte, helårsboende og kjøpere som ønsker finca, større tomt eller et tydelig innlandsliv i Murcia.",
  },
  monovar: {
    title: "Vinby, hverdagsliv og landlig frihet",
    lead:
      "Monóvar passer for deg som vil bo i et lokalt spansk bymiljø, men ha finca-landskap og større eiendommer rett utenfor byen.",
    paragraphs: [
      "I sentrum får du den typen hverdag mange flytter til Spania for: lokale butikker, kaféer, restauranter og et byliv som ikke forsvinner når sommersesongen er over. Byen er mindre preget av internasjonal turisme enn mange kyststeder – og for mange er nettopp det en del av tiltrekningen.",
      "Kjører du noen minutter ut, endrer alt seg. Vinmarker, mandeltrær og landsteder gir muligheten til å bo med langt mer plass uten å miste nærheten til service. Det passer godt for deg som vil ha en eiendom som også rommer hobbyer, dyr, verksted eller gjester.",
      "Monóvar fungerer særlig godt for kjøpere som vil ha det landlige uten å bli avhengig av lange kjøreturer. Du får ro hjemme og fortsatt et levende sentrum i nærheten.",
    ],
    suits: "Passer særlig for helårsboende som ønsker spansk byliv kombinert med finca, tomt og mer privatliv.",
  },
  "hondon-dalene": {
    title: "Innlandsro med en mykere overgang fra kystlivet",
    lead:
      "Hondón-dalene er et godt valg for deg som vil ha mer natur, større bolig og roligere omgivelser, men som fortsatt ønsker et område vant til internasjonale eiere.",
    paragraphs: [
      "Dalene har en åpen, grønnere følelse med vinmarker, åser og boligområder spredt mellom landsbyene. Mange eiendommer er utformet for et liv med terrasse, basseng, gjesterom, parkering og god uteplass.",
      "Det etablerte internasjonale miljøet gjør overgangen enklere. Du kan leve mer landlig uten å føle at du må forstå alt alene fra første dag, samtidig som landsbyene fortsatt har sitt lokale spanske preg.",
      "Dette kan være et godt kompromiss for deg som liker tanken på innlandet, men som ikke vil for langt bort fra kysten. Du får større rom rundt deg og en roligere hverdag, samtidig som strand og flyplass fortsatt kan være en naturlig del av livet.",
    ],
    suits: "Passer særlig for kjøpere som ønsker villa med basseng, landlig utsikt og et etablert internasjonalt miljø.",
  },
  "hondon-de-las-nieves": {
    title: "Landsbyliv midt i vinmarkene",
    lead:
      "Hondón de las Nieves, eller El Fondó de les Neus, passer for deg som vil ha den landlige Hondón-følelsen og samtidig et område som allerede er kjent blant internasjonale boligeiere.",
    paragraphs: [
      "Her er vinmarker, mandeltrær og oliven det visuelle bakteppet i hverdagen. Sentrum er lite nok til å være oversiktlig, men stort nok til at du har kommunale tjenester og et lokalt liv å forholde deg til gjennom året.",
      "Utenfor sentrum blir eiendommene mer spredt, og uteplassen får en annen rolle enn på kysten. Terrasse, basseng, utsikt, gjester og hage kan bli viktigere enn gangavstand til strand – fordi det er nettopp roen og plassen du kjøper deg inn i.",
      "Området passer også godt for dem som vil ha en mykere overgang til innlandet. Du får tydelig landsby- og landliv, men er fortsatt i Medio Vinalopó med praktisk forbindelse mot Aspe, Elche-området og videre mot kysten.",
    ],
    suits: "Passer særlig for kjøpere som ønsker villa eller finca i vinlandskap, roligere helårsliv og et område som allerede er kjent blant utenlandske eiere.",
  },
  aspe: {
    title: "Innlandsfølelse med svært praktisk beliggenhet",
    lead:
      "Aspe passer for deg som ønsker mer plass og ro, men som samtidig vil ha Alicante, Elche og flyplassen så nær at de fortsatt føles som en del av hverdagen.",
    paragraphs: [
      "Byen lever hele året og har den praktiske infrastrukturen som gjør det enkelt å bo fast. Samtidig ligger jordbruksområdene tett på, så du trenger ikke langt ut før du får utsikt, større tomter og et helt annet tempo.",
      "Det er nettopp denne kombinasjonen som gjør Aspe interessant for moderne nybygg. Du kan kombinere moderne arkitektur med større utearealer og en mer åpen beliggenhet enn i mange tettbygde kystområder.",
      "For kjøpere som reiser ofte til Norge eller ønsker enkel tilgang til Alicante-området, kan Aspe være et av de mest praktiske innlandsvalgene. Du får mye av roen – uten å gi avkall på tilgjengeligheten.",
    ],
    suits: "Passer særlig for moderne nybygg, helårsboende og kjøpere som prioriterer kort vei til flyplass og byservice.",
  },
  novelda: {
    title: "En ordentlig by med kultur, handel og landskap rundt",
    lead:
      "Novelda passer for deg som vil ha mer enn en rolig landsby – her får du byliv, arkitektur og service, samtidig som vinmarker og landlige eiendommer ligger like utenfor.",
    paragraphs: [
      "Hverdagen føles mer komplett enn i mange mindre innlandssteder. Du har handel, restauranter, tjenester og kultur i byen, og kan samtidig bo i utkanten eller på landet med langt mer plass rundt deg.",
      "Det gir flere måter å bo på. Noen vil ha et byhus og gå til sentrum. Andre vil ha finca eller nybygg utenfor byen og bruke Novelda som sitt daglige servicested. Begge deler fungerer innenfor samme område.",
      "Novelda passer derfor godt for kjøpere som ikke vil velge mellom by og land. Du kan få begge deler, og samtidig beholde relativt enkel forbindelse mot Alicante, flyplassen og resten av Vinalopó-dalen.",
    ],
    suits: "Passer særlig for helårsboende og kjøpere som ønsker full byservice kombinert med større eiendom eller tomt i utkanten.",
  },
  "la-romana": {
    title: "Stillheten mange egentlig mener når de sier «Spania på landet»",
    lead:
      "La Romana passer for deg som ønsker fred, natur og rom rundt boligen – men fortsatt vil ha landsbyen og større byer innen praktisk rekkevidde.",
    paragraphs: [
      "Her er tempoet lavere. Landskapet med vinmarker, mandeltrær og småveier gjør at hverdagen oppleves mer landlig allerede få minutter utenfor sentrum. Det er et sted der uteplassen og tomten ofte blir like viktig som selve huset.",
      "For mange handler kjøpet her om frihet: færre naboer tett på, plass til gjester, dyr, hage eller et lite prosjekt – og muligheten til å bruke dagen mer ute enn inne. Samtidig har du Novelda, Monóvar og Pinoso nær nok til større innkjøp og tjenester.",
      "La Romana er ikke for deg som vil ha et stort internasjonalt miljø rundt hjørnet. Det er nettopp roen og den mindre turistpregede hverdagen som gjør området interessant.",
    ],
    suits: "Passer særlig for kjøpere som prioriterer ro, tomt, privatliv og et autentisk landlig miljø.",
  },
  "monforte-del-cid": {
    title: "Landlig preg, golf og kort vei til flyplassen",
    lead:
      "Monforte del Cid er et sterkt valg for deg som vil bo roligere og mer åpent, men som ikke ønsker å bruke mye tid på transport til flyplass, Alicante eller Elche.",
    paragraphs: [
      "Området gir flere livsstiler i samme marked. Du kan velge moderne bolig nær golf, et mer tradisjonelt hjem i byen eller større eiendom i utkanten. Det gjør Monforte interessant for både helårsbruk og for deg som kommer og går gjennom året.",
      "Nærheten til flyplassen endrer faktisk hvordan en bolig kan brukes. Helgeturer, familie på besøk og hyppige reiser blir enklere når du ikke starter og avslutter hver tur med en lang kjøretur.",
      "Samtidig beholder området vinmarker, åpent landskap og en langt roligere følelse enn kystens mest utbygde soner. Det er en sjelden kombinasjon av tilgjengelighet og plass.",
    ],
    suits: "Passer særlig for kjøpere som prioriterer enkel reise, golf, moderne bolig og mer plass enn på kysten.",
  },
};

export function getInlandLifestyleStory(slug: string) {
  return inlandLifestyleStories[slug] || null;
}
