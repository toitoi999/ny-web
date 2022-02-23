---
slug: blokkjede
title: Hvorfor skal jeg bry meg om blokkjede?   
authors: [toitoi]
tags: [greetings]
---


Velkommen til første utgave av «Hva er crypto og hvorfor skal jeg bry meg (om hva det er)?»

Crypto (eller Krypto) er det navnet man ofte hører når det snakkes om blockchain, bitcoin og alt annet i det tilhørende universet. For å forstå hvorfor det kalles for Krypto, utover at det har noe med kryptografi å gjøre, er det greit å først sette seg inn i hva blockchain (eller blokkjedeteknologi) er for noe. Som navnet avslører så har det noe med blokker og kjede å gjøre.

Litt bakgrunn:
I 2008 ble det utgitt en `white paper` (en rapport) av en anonym person/gruppe personer som kalte seg Satoshi Nakamoto. Denne rapporten detaljerte hvordan en digital valuta kunne skapes ved hjelp av blokkjedeteknologi. Problemet med digitale penger eller andre digitale gode var alltid hvordan man kunne unngå at disse ble kopiert og hacket av andre. Nakamoto presenterte en løsning på dette problemet ved hjelp av blokkjedeteknologi med visse restriksjoner på mengden «penger» som kunne produseres. 

Normalt sett så vil man sende en transaksjon via en mellommann (banken). Pengene man har i digital form har man i en bankkonto som er hos en bank. Når man betaler for noe så sendes pengene fra min konto til din konto, begge to er i en bank. Altså er alle de digitale pengene, med tilhørende transaksjoner, tall i en database hos en bank. Tanken bak Bitcoin var å lage en digital valuta (valuta er ikke helt presist, noe vi kan gå inn på ved en senere anledning) som ikke var avhengig av en mellommann. Problemet man får når man ikke har en mellommann er dobbel bokføring. Altså hvordan er jeg sikker på at du ikke beholder pengene du sender meg hvis jeg er avhengig av at du «sletter» disse hos deg etter du har sendt de til meg? 

## Først, hva er blokkjedeteknologi?

La oss begynne med det første – en blokk. En blokk kan ses på som et ark. På dette arket kan det registreres transaksjoner. Et ark kan inneholde et visst antall transaksjoner. Når arket er «fullt» sendes det gjennom en Hash-funksjon. Dette er en kryptografifunksjon som gir arket en unik ID. Når det første arket er fullt begynner man å registrere transaksjoner på et nytt ark. Dette arket blir stemplet med den unike IDen til arket før og når det er fullt går det gjennom en tilsvarende hash-funksjon som gir arket sin egen unike ID. Det samme skjer med arket som kommer etter. Hvert ark har to IDer, sin egen unike og den unike IDen til arket før. Som et resultat blir arkene knyttet sammen i en rekke og man får en kjede. 

Det er skritt en, forstå hva en blokk er og hvordan de kobles sammen til en kjede. Skritt to er å forstå hvordan en blokk blir sjekket og hvorfor den er så vanskelig å endre eller hacke. Vi tar utgangspunkt i strukturen til en Bitcoin blokkjede – forskjellige blokkkjeder har forskjellige varianter av elementene som følger. Det krever flere litt mindre skritt og vi må innom:
-	Mining
-	Hvor blokkjeden befinner seg 
-	og hva som skjer hvis man prøver å endre noe i en blokk

Mining er noe de fleste har hørt om, men det kan være greit å friske litt opp i hva det er. Mining, eller Proof of Work (PoW), er en måte å validere at en blokk inneholder korrekte transaksjoner. Hver blokk i kjeden har i tillegg til en unik ID også en tallrekke som kalles for «nonce». Denne tallrekken er svaret på et matematisk problem som man må gjette seg frem til. Riktig tallrekke (Nonce) for en gitt blokk gir korrekt unik ID. La oss ta et eksempel. Blokken med transaksjoner er full. Vi kjører det gjennom kryptografifunksjonen (hash-funksjonen). På andre siden får det tildelt ID# 99 og Nonce 78. De som skal sjekke at blokken har riktige transaksjoner må gjette seg frem til Nonce 78, som vil matche med unik ID# 99. De som klarer å gjette seg frem til Nonce 78 først, får betaling i form av en kryptovaluta for den blokkjeden de har minet for. Tiden det skal ta å mine en blokk er satt til å være en konstant. Som et resultat blir det matematiske problemet vanskeligere/enklere når det blir flere/færre som miner en blokk. Mer om mining kommer under, men først litt om hvor blokkjeden er.

Når noen ønsker å mine f.eks Bitcoin må de laste ned hele blokkjeden til sin data. Det vil dermed si at blokkjeden befinner seg veldig mange steder samtidig, men er helt identisk alle steder. Altså er blokkjeden desentralisert og ikke avhengig av en sentral database, slik som tradisjonelle selskaper er. Det vil si at så lenge en datamaskin i verden har blokkjeden vil den bestå. Dette løser et kjent problem som omhandler redundans, som vi ikke skal gå innpå her. Det løser også utfordringen med dobbel bokføring.  

Tilbake til mining med å bygge videre på eksempelet. Vi benytter igjen blokken omtalt tidligere. Den som minet blokken gjettet seg frem til at Nonce var 78. Alle de som miner må som sagt ha en kopi av kjeden og «laster» ned siste blokken. Da validerer de at Nonce 78 stemmer med den unike ID’en ved å skrive 78 i Nonce feltet for å se at det stemmer med den unik ID’en. Hvis det ikke gjør det vil ID’en være en annen enn det som er forventet og forslaget vil blir forkastet og det må gjettes på Nonce igjen til den stemmer. Blokken blir så logget (hektet på kjeden) og man begynner å gjette hva som er riktig Nonce for neste blokk. Alle gjetter på samme Nonce på samme tid. Den som løser den matematiske gjetteleken først vil bli tildelt en bitcoin som belønning for å ha gjettet svaret. Siden vanskeligheten på gjettteleken varierer vil belønningen være konstant, som betyr at tilført mengde bitcoin er konstant. Alle som gjetter på svaret vil være tilkoblet blokkjeden og vil kjøre det som heter en node. En node er tilkoblingspunktet til blokkjeden og er et begrep som det kan være greit å huske.

Et lite skritt til, longest chain. Det er en del her i verden som er helt bokstavelig og longest chain er det. Den lengste kjeden. Det det vil si, er at det er den lengste kjeden som er sannheten for blokkjeden. Naturlig nok så vil den lengste blokkjeden inneholde den første blokken (denne kalles for Genesis). Dette gjør det sånn at hvis man ønsker å endre på en blokkjede så må man ha den lengste kjeden som igjen betyr at endring i en transaksjon i kjeden krever endring av hele kjeden fra den blokken og frem til siste blokk. For å mine en blokk trenger man 51% av nettverket på sin side. Grunnen til det er at når man laster ned blokkjeden så er det flertallet som bestemmer og flertallet er 51% eller mer. For å mine en hvilken som helst blokk i kjeden trenger man 51% eller mer av nettverket. Som vi var inne på tidligere så henger blokkene sammen i en kjede fordi de har sin unike ID og den unike ID’en til blokken før. Når en blokk får endret informasjon må denne mines på nytt og ID’en blir endret. Den vil dermed ikke passe med den blokken som kommer etter. Denne må så mines på nytt, som vil si at den som kommer etter ikke stemmer og må mines, osv. Det fører dermed til at alle blokkene i kjeden etter må mines igjen. Med behov for 51% av nettverket for å mine alle disse blokkene vil det ikke bare være tilnærmet umulig, det vil også koste veldig mye å gjøre det. 

Så for å oppsummere:
-	En blokkjede er en kjede bestående av blokker, hvor en blokk inneholder transaksjoner
-	Kryptografi brukes til å validere blokkene ved bruk av genererte tall og ID’er
-	Blokkjeden er desentralisert og alle som skal mine må ha en kopi
-	Mining = matematisk gjettelek
-	Bitcoin er en belønning for å gjette riktig og tilhører en bestemt blokkjede (det finnes en god del andre)
-	Man må ha mer enn 51% av nettverket for å validere transaksjoner

