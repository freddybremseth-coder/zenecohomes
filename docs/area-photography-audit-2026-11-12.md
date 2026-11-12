# Kontroll av stedsspesifikke områdebilder – Zen Eco Homes
Dato: 12. november 2026
Omfang: `/omrader`, regionkort, byguider, kartkort og innlandsoversikt.

## Krav
1. Et bilde merket med stedsnavn skal dokumenterbart være tatt i den navngitte byen, kommunen eller lokaliteten. Nærliggende by, boligannonse og generiske Costa Blanca-bilder er ikke gyldige erstatninger.
2. Stedsbilde velges kun fra en eksplisitt godkjent, normalisert stedsnøkkel (inkl. avklarte alternative skrivemåter). Det brukes ikke delstrengssøk.
3. Ukjent/manglende/ødelagt bilde vises som en nøytral og merket flate; aldri som generisk foto med stedsnavn.
4. Foto skal ha klikkbar kilde og fotograf/lisens, og dekorativ utsnitt/crop kan forekomme. Dokumenter lisens/oppdateringer ved endring.
5. Regionkort kan illustreres med et **navngitt representantsted**, ikke et bilde presentert som om det viser hele regionen.

## Bildebeholdning fra nettstedskoden

| Region | Sted | Dokumentert motiv / fil | Merknad |
|---|---|---|---|
| Nord | Albir | Playa del Racó del Albir.JPG | Verifisert sted, separat fra Alfàs del Pi |
| Nord | Alfàs del Pi | L'Alfàs del Pi.jpg | Rettet: brukte tidligere Albir |
| Nord | Altea | Old altea.jpg | Stedsspesifikk gammelby |
| Nord | Benidorm | Benidorm - Playa de Poniente 26.jpg | Poniente |
| Nord | Benissa | Punta Prado in Benissa.jpg | Benissa-kyst |
| Nord | Calpe | Vista sobre Calpe y el Peñón de Ifach.jpg | Calpe/Ifach |
| Nord | Dénia | Dénia castillo 1.jpg | Dénia slott |
| Nord | Finestrat | Puig Campana Puig Campana.JPG | Landskap i Finestrat kommune, bør suppleres med landsbybilde |
| Nord | Jávea / Xàbia | Jávea desde el Montgó.jpg | Javea |
| Nord | La Nucía | Vista de la Nucia des del castell de Polop.JPG | Verifisert bypanorama fotografert fra Polop; Joanbanjo, CC BY-SA 4.0 |
| Nord | Moraira | CastMoraira01.jpg | Moraira |
| Nord | Teulada | Teulada.jpg | Rettet: brukte tidligere Moraira |
| Nord | Polop | Polop i el Panoig.jpg | Polop |
| Nord | Villajoyosa | Playa Centro, Villajoyosa, España, 2014-07-03, DD 28.JPG | Strand, fargede hus |
| Nord | El Campello | El Campello - Playa 2.jpg | Lokal strand |
| Nord | Xaló/Jalón | Xaló, Marina Alta, País Valencià.JPG | Lokalt innlandsmotiv |
| Sør | Torrevieja | Torrevieja - Playas 12.jpg | Nytt, CC0 |
| Sør | Guardamar del Segura | Guardamar del Segura - Playa Babilonia 4.jpg | Nytt, CC0 |
| Sør | Ciudad Quesada, Rojales | Ciudad Quesada 02.jpg | H. Helmlechner, CC BY-SA 4.0; 2 592 × 1 728 piksler, dokumentert stedfoto |
| Sør | Orihuela Costa | Beach in Cala Capitán in Cabo Roig in Orihuela Costa, Orihuela, Alicante, Spain, 2022 January - 2.jpg | Nytt, Cabo Roig; opphav Ximonic |
| Sør | Santa Pola | Santa Pola - panoramio (4).jpg | Nytt, opphav Halina Frederiksen |
| Cálida | San Pedro del Pinatar | Mar Menor desde Villananitos.jpg | Nytt, Villananitos/Lo Pagán, Anidae |
| Cálida | San Javier | Iglesia San Francisco Javier.jpg | Nytt, kirkebilde i San Javier, Nurialsl |
| Cálida | Los Alcázares | Los Alcazares del mar menor.JPG | Nytt, offentlig domene |
| Cálida | La Manga | Playa natural - La Manga - panorama - panoramio.jpg | Nytt, INDALOMANIA |
| Innlandet | Biar | Pueblo y castillo de Biar, Alicante.jpg | Nytt i felleskatalog, finnes også i innlandsdata |

Innlandsdelen har fra før egne navngitte Wikimedia-motiver for Biar, Villena, Sax, Castalla, Banyeres de Mariola, Busot, Pinoso, Jumilla, Monóvar, Hondón de las Nieves, Aspe, Novelda, La Romana og Monforte del Cid.

**Merknad:** Samleprofilen «Hondón-dalene» deler bilde med «Hondón de las Nieves»; dette er et navngitt sted innen dalområdet, men bør merkes som *Hondón de las Nieves – fra Hondón-dalene* eller erstattes med et bredere dalmotiv. Stedsfotografiene i innlandsdata har nå synlig lenke til Commons-filside for opphav og lisens. Fullstendig detaljkontroll av alle innlandslisensene gjenstår.

## Identifiserte feil og reparasjoner
- `src/lib/areaGuideContent.ts`: tidligere dynamisk fallback fra `profile.photo_url`, boligannonse, omslagsbilde og `/assets/areas.jpg`. **Fjernet** for byguider.
- `src/lib/areaVisuals.ts`: tidligere delstrengsmatching muliggjorde bilder fra feil sted. **Erstattet med eksakte aliaskoblinger.**
- `/omrader`: tidligere tilfeldig førstefunn per region. **Erstattet med Altea, Guardamar, Los Alcázares og Biar** som eksplisitt merkede representantsteder.
- By- og regionhero: CSS `.image-hero` satte lik `/assets/areas.jpg` for alle. **Overstyrt:** by bruker eget godkjent foto; regionside bruker nøytral gradient.
- Kart- og områdekort: **Ingen automatisk erstatning med feil foto ved feil/404.**
- Kildefoto: **Synlig attribusjonskomponent** på områdekort og byside.

## Kontroll før sammenslåing / produksjon
- `npm run images:audit` og `npm run build` må passere.
- Sjekk at alle nye Wikimedia-bilder faktisk lastes gjennom Next.js image optimizer (ingen 404/403) og at kildelenkene/lisensene er riktige.
- Gjennomgå både mobil og desktop, spesielt hero-utsnitt, bildekontrast og lesbarhet, og bruk 2× oppløsning når originalen tillater det.
- Verifiser dynamiske RealtyFlow-profiler og suppler eventuelle manglende stedsfoto; ingen generisk bildeerstatning skal brukes.
- Undersøk på lengre sikt hosting av godkjente, lisenskorrekte fotografier i egen mediekatalog, med kreditering og historikk, for mindre avhengighet av eksterne bilder.

Referanse: `src/lib/areaVisuals.ts` er kilde til gyldige koblinger, filenes Commons-sider er kilde til stedsfesting/fotorettigheter.


## Tilleggsrunde 12. november – byområder ved Alicante

Tre nye stedsfestede redaksjonelle bilder er lagt til, slik at områdesidene ikke trenger å bruke nærmeste kyststed som erstatning:

- **Sant Joan d'Alacant:** `Església de sant Joan Baptista de Sant Joan d'Alacant.jpg` – Joanbanjo, CC BY-SA 4.0. Historisk kirke i selve byen, ikke Playa San Juan i Alicante.
- **Mutxamel/Muchamiel:** `Iglesia parroquial de Muchamiel.jpg` – Rodriguillo, public domain. Kommunens historiske kirke, ikke foto fra Alicante sentrum.
- **Alicante/Alacant:** `Alicante City & Beach - Castillo de Santa Bárbara.jpg` – Varondán, CC BY-SA 4.0. Høyt oppløst by- og strandmotiv.

Bildenes Commons-stier er kontrollert mot filnavn og MD5-sharder i `npm run images:audit`. Kontroll av motivutsnitt på faktisk mobilskjerm og samtlige historiske innlandsfotos lisenser gjenstår fortsatt.


## Skarphet og motiv – Altea

Den tidligere kilden `Old altea.jpg` var bare 474 × 640 piksler og egner seg ikke som stort område- eller hero-bilde. Den synlige Altea-profilen bruker nå `Vista de Altea, Alicante, España, 2023-01-21, DD 43.jpg` (7 179 × 3 025), fotograf Diego Delso, CC BY-SA 4.0. Det er et stedsfestet utsiktsfoto av Altea. Den gamle filoppføringen beholdes kun i fotomanifestet og brukes ikke lenger på områdesiden.


## Nettverkskontroll – faktiske Wikimedia-filsvar

En separat GitHub Actions-kontroll bruker HTTP HEAD mot alle godkjente Commons-filbaner. Den første kjøringen 12. november fikk **2 × HTTP OK og 27 × HTTP 429**, uten rapporterte 404/410. **Dette beviser ikke at de 27 øvrige bildene fungerer.** Wikimedia begrenset automatisk forespørselsmengden fra GitHub-serveren. Testskriptet stopper derfor tidlig ved gjentatt 429, markerer gjenværende bilder som **ikke testet**, og varsler dette i GitHub. Nettverksfeil utenom 404/410 rapporteres som uavklart, aldri som bekreftet gyldig.

**Publiseringskrav:** Gå gjennom bildene på en faktisk nettside med vanlig nettleser (mobil og desktop), og kontroller Next.js image optimizer. Hvis Commons-bilder stadig blokkeres, skal godkjente lisenskorrekte originaler vurderes lagret på ZenEcoHomes' eget CDN/lagringsløsning med beholdt kreditering og kilde.


## Første reelle Chromium-test: problemer funnet og tiltak

GitHub Actions-kjøringen [43279956222](https://github.com/freddybremseth-coder/zenecohomes/actions/runs/43279956222) kjørte 7 URL-er × desktop 1440 px og mobil 390 px, produserte skjermbilder og rapport som artifact `area-visual-smoke`.

**Resultat: 14 sidevisninger, 5 med synlige bildefeil.** Alicante-bildet manglet i Costa Blanca Sør (begge bredder), Los Alcázares manglet i Costa Cálida (begge bredder) og Albir-bildet manglet på mobil i Costa Blanca Nord. Flere andre bildeforespørsler fikk **HTTP 429 via Next.js `/_next/image`**, og sidene viste nøytrale paneler. Eksternt eiendomsfoto fra apinmo ga også 404 (utenfor det redaksjonelle stedfotoomfanget). Layout-breddetesten avdekket ikke horisontal oversvømmelse.

**Tiltak på foto:** Redaksjonelle Wikimedia-foto på områdeoversikt, regionkort og byside bruker nå `unoptimized` for direkte nettleserhenting og unngår felles server-IP hos Next.js bildeoptimalisering. Andre eiendomsbilder beholder optimizer. Visuell regresjonstest er utvidet til å rapportere feil i stedfoto eksplisitt; cookie-banner avvises før skjermbilde.

**Viktig:** Siden GitHub-runneren selv også mottar 429 fra Wikimedia, er direkte nettleserhenting et forsøk på å forbedre leveransen for ekte besøkende, **ikke en bekreftet løsning**. Vi bør ikke publisere før en ekstern nettleser med vanlig nettforbindelse har verifisert konkrete foto og redaksjonelle opphavsdata. Dersom direktebilder fortsatt feiler, må godkjente og korrekt lisensierte fotografier lagres i en egen billedbank/CDN og krediteringen bevares.


## Andre runde med ekte stedfoto, og leveranseforbehold

Flere dynamiske områdeprofiler viste nøytrale felt fordi de ikke hadde egne stedsbilder i den kuraterte katalogen. Det er nå lagt til egne, stedfestede Wikimedia Commons-filer for Campoamor, Gran Alacant, La Zenia, Calasparra, La Mata, San Fulgencio, Murcia, Santiago de la Ribera, Playa Honda og Torre-Pacheco. Hver oppføring har fotograf, Commons-filside og korrekt CC-lisens i `src/lib/areaVisuals.ts`. Alicante-bildet er skiftet fra et neon-skilt til et ekte havnepanorama sett fra Castillo de Santa Bárbara (Tamorlan, CC BY 3.0, 3 888 × 2 592 px). Torre-Pacheco viser en stedfestet vindmølle av Werner Wilmes (CC BY 2.0, 5 327 × 3 551 px).

Playwright-testen på commit `8d1ba45f` gav 11/14 beståtte sidevisninger og 3 varierende feil, alle på mobil: Albir, Villajoyosa og Alicante. Tidligere direkte-innlastingskjøring gav 13/14 bestått. Variasjonen tilsier at enkelte Commons-kilder fortsatt ikke leveres stabilt på tvers av kjøringer. **Disse testresultatene kan ikke brukes som endelig publiseringsgodkjenning.** Områder uten autentisk foto (bl.a. enkelte golfurbanisasjoner) får fortsatt nøytral merket flate; det er bedre enn et misvisende bilde fra en annen kommune.
