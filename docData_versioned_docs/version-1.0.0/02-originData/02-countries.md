---
slug: /originData/countries
sidebar_position: 3
sidebar_label: Il file `countries.json`
---

# Il file `countries.json`

## Struttura

Questo è il file che contiene le proprietà **statiche** degli oggetti rappresentanti gli stati e si trova nel percorso `Data/origin/countries.json`.

È una lista (array), i cui elementi sono oggetti contenenti le proprietà di un singolo stato, che - per convenzione - definiremo `country`.

import CountriesJson from '/SHARED/codeBlocks/data/origin/countries.md'

<CountriesJson />


## Le proprietà dell'oggetto `country`

### La proprietà `LABEL`

Questa è una proprietà di supporto nella redazione del file e non viene considerata nella costruzione del dataset finale.

Contiene il nome comune (in inglese) dello stato e serve al redattore per una facile ricerca all'interno del file.

Nel nostro esempio

import LabelExample from '/SHARED/codeBlocks/data/origin/countries.label.md'

<LabelExample />

Nessun controllo è inserito nella validazione della proprietà.

### La proprietà `officialName`

Contiene il nome ufficiale dello stato.

A seconda delle lingue ufficiali dello stesso, il nome ufficiale può essere espresso in più lingue.

Ogni stato deve forzatamente avere un nome officiale, ma nel dataset è incluso anche il continente antartico, che rappresenta per alcune proprietà (tra cui il nome ufficiale) un anomalia.

:::note Requisiti

| Regola | Definizione | Livello di controllo |
|-----------|-----------|-----------|
| Tipo | Oggetto (anche vuoto) | Build |
| Presenza obbligatoria | No | Build |

**Il programma di build:**
- se la proprietà non è presente la crea come oggetto vuoto.
:::


#### Le proprietà interne a `officialName`

Il contenuto di `officialName` è definito in coppia (o coppie) `chiave`-`valore`, dove la chiave è il codice della lingua ed il valore il nome ufficiale dello stato nella relativa lingua.

Nel nostro esempio

import OfficialName from '/SHARED/codeBlocks/data/origin/countries.officialName.md'

<OfficialName />

Alcuni linguaggi hanno diversi sistema di scrittura.

Ad esempio 

import OfficialName2 from '/SHARED/codeBlocks/data/origin/countries.officialName2.md'

<OfficialName2 />

In questo caso sono presenti diverse lingue con il sistema di scrittura latino e cirillico.


import StandardForLanguages from '../../integrations/standardForLanguages.md'

:::note Requisiti per la chiave

<StandardForLanguages icu="No" icuCtrl="" />

:::


:::note Requisiti per il valore

| Regola | Definizione | Livello di controllo |
|-----------|-----------|-----------|
| Tipo | Stringa non vuota | Build |
| Sensibilità delle maiuscole/minuscole | No |  |
| Unicità | Sì | Test [TODO] |

La stringa del nome ufficiale del paese, ovviamente, non può essere vuota.

Per "unicità" si intende che due paesi differenti non possono avere lo stesso nome ufficiale.

Nel nostro esempio della Bosnia-Erzegovina il nome ufficiale nelle lingue bosniaco, erzegovino e croato (sia nel sistema di scrittura latino, che cirillico) sono identici.

In questo caso il test passa.

Ma non può esistere un altro paese con lo stesso nome ufficiale. [TODO]

:::

### La proprietà `alpha2`

È la definizione contenente il codice [ISO 3166-1 alpha-2](https://it.wikipedia.org/wiki/ISO_3166-1_alpha-2), con codifica a due lettere, che identifica lo stato in oggetto.

Nel nostro esempio

import Alpha2 from '/SHARED/codeBlocks/data/origin/countries.alpha2.md'

<Alpha2 />

:::info Chiave primaria
Questa proprietà è considerata nelle applicazioni come chiave primaria.

Viene utilizzata quindi come chiave per le traduzioni e per i collegamenti con le altre collezioni del dataset.

:::

:::note Requisiti

| Regola | Definizione | Livello di controllo |
|-----------|-----------|-----------|
| Presenza obbligatoria | Sì | Build |
| Tipo | Stringa di due caratteri alfabetici | Build |
| Sensibilità delle maiuscole/minuscole | No |  |
| Unicità | Sì | Test [TODO] |

**Il programma di build:**
- trasforma il valore in lettere maiuscole.

:::

### La proprietà `alpha3`
È la definizione contenente il codice [ISO 3166-1 alpha-3](https://it.wikipedia.org/wiki/ISO_3166-1_alpha-3), con codifica a tre lettere, che identifica lo stato in oggetto.

Nel nostro esempio

import Alpha3 from '/SHARED/codeBlocks/data/origin/countries.alpha3.md'

<Alpha3 />

:::note Requisiti

| Regola | Definizione | Livello di controllo |
|-----------|-----------|-----------|
| Presenza obbligatoria | Sì | Build |
| Tipo | Stringa di tre caratteri alfabetici | Build |
| Sensibilità delle maiuscole/minuscole | No |  |
| Unicità | Sì | Test [TODO] |

**Il programma di build:**
- trasforma il valore in lettere maiuscole.

:::

### La proprietà `unM49`

È la definizione contenente il codice [ISO 3166-1 numeric](https://it.wikipedia.org/wiki/ISO_3166-1_numerico), con codifica a tre cifre numeriche, che identifica lo stato in oggetto.

Lo standard è mantenuto dalla [United Nations Statistics Division](https://unstats.un.org/UNSDWebsite/).

Nel nostro esempio

import UnM49 from '/SHARED/codeBlocks/data/origin/countries.unm49.md'

<UnM49 />

:::note Requisiti

| Regola | Definizione | Livello di controllo |
|-----------|-----------|-----------|
| Presenza obbligatoria | Sì | Build |
| Tipo | Stringa di tre caratteri numerici o numero intero positivo con un massimo di tre cifre | Build |
| Unicità | Sì<br />Il controllo di unicità viene effettuato anche sulla proprietà `unM49` dei raggruppamenti di tipo geografico, presenti nel file `geoSets.conf` | Test [TODO] |

**Il programma di build:**
- trasforma il valore in stringa (se già non lo è) preponendo tanti `0` quanti necessari a raggiungere la lunghezza complessiva di tre cifre.

:::

### La proprietà `flags`

È la proprietà contenitore della bandiera ufficiale.

Nel nostro esempio

import FlagsEmoji from '/SHARED/codeBlocks/data/origin/countries.flags.md'

<FlagsEmoji />

:::note Requisiti

| Regola | Definizione | Livello di controllo |
|-----------|-----------|-----------|
| Tipo | Oggetto | Build |
| Presenza obbligatoria | Sì | Build |
:::

Nel dataset finale, all'interno del contenitore saranno presenti due proprietà
- `emoji`, dichiarata anche nel json di origine
- `svg`, aggiunta in automatico dal programma di build

#### La proprietà `emoji`

La proprietà `flags.emoji` contiene la bandiera dello stato nel formato emoji con stringa Grapheme a cluster singolo, secondo il formato [Unicode Technical Standard #51 (“Unicode Emoji”)](https://www.unicode.org/reports/tr51/)  

:::note Requisiti

| Regola | Definizione | Livello di controllo |
|-----------|-----------|-----------|
| Tipo | Oggetto | Build |
| Presenza obbligatoria | Sì | Build |
| Formato | Stringa Emoji Flag (Regional Indicator) | Build |
| Congruità | Con il relativo paese (codice ISO 3166-1 alpha2) | Test [TODO] |
| Unicità | Sì | Test [TODO] |

:::

:::caution Il caso dell'Afghanistan
Nel caso dell'Afghanistan è presente una mancata equivalenza tra il formato `emoji` e quello `svg`.

Questo è dovuto al fatto che la situazione politica nello stato non è universalmente riconosciuta (anche se questo accade anche per altri stati), ma al momento lo standard unicode per le emoji non ha aggiornato il codice.

Nella fattispecie, avendo voluto avere entrambi i formati, si è deciso di inserire nei sorgenti svg, la bandiera ufficiale corrente definita dallo stesso stato.

Si avvisa quindi della presenza di questa anomalia.


import FlagAfghanistan from '/SHARED/codeBlocks/data/origin/flags.af.case.md'

<FlagAfghanistan />


:::

#### La proprietà `svg`
La proprietà `flags.svg` contiene la bandiera dello stato nel formato svg.

La proprietà è costruita in modo automatico dal programma di build, seguendo le specifiche presenti lella proprietà `flagsSvgFormat` nel file globale di configurazione `buildConfig.json`.

Il programma prenderà dalla relativa cartella del paese in `Data/origin/Flags/Countries` il formato presente nel file globale di configurazione, ridurrà il contenuto ad una stringa minimizzata e lo inserirà come valore della proprietà.  

:::danger Attenzione!!!

Se dovesse essere inserita manualmente nel file di origine la proprietà `svg`, qualsiasi sia il valore di tale proprietà, esso verrà sostituito dal programma di build.

:::

### La proprietà `dependency`

Indica - se presente e non nulla - l'eventuale dipendenza politica da un altro oggetto del dataset `countries`.

Nel nostro esempio non esistono dipendenze.

import DepExample1 from '/SHARED/codeBlocks/data/origin/countries.dependency.md'

<DepExample1 />


Casi di dipendenza possono verificarsi in presenza di amministrazioni extraterritoriali, come ad esempio l'isola di Bouvet, dipendente dalla Norvegia.


import DepExample2 from '/SHARED/codeBlocks/data/origin/countries.dependency2.md'

<DepExample2 />


:::note Requisiti

| Regola | Definizione | Livello di controllo |
|-----------|-----------|-----------|
| Presenza obbligatoria | No |  |
| Tipo | Null o stringa con due caratteri alfabetici | Build |
| Sensibilità delle maiuscole/minuscole | No |  |
| Congruità | Se non nullo, il valore deve far riferimento ad un codice ISO 3166-1 alpha2 di un paese esistente nel dataset  | Test [TODO] |

**Il programma di build:**
- se la proprietà non è presente, la inserisce con valore nullo;
- se presente e con valore non nullo, trasforma il valore in lettere maiuscole.

:::

### La proprietà `mottos`

Il contenitore `mottos` contiene i motti relativi al paese suddivisi per categorie.

:::note Requisiti

| Regola | Definizione | Livello di controllo |
|-----------|-----------|-----------|
| Presenza obbligatoria | No |  |
| Tipo | Oggetto (anche vuoto) | Build |

**Il programma di build:**
- se la proprietà non è presente, la inserisce come oggetto contenente le chiavi delle categorie dei motti (a loro volta oggetti) come vuote.

:::


#### Le proprietà definenti le categorie di  `mottos`

Le categorie dei motti sono così definite:
- la proprietà `mottos.official` contiene il motto ufficiale del `country`;
- la proprietà `mottos.popular` contiene il motto popolare o territoriale del `country`;
- la proprietà `mottos.presidential` contiene il motto presidenziale (se - ovviamente - la forma di governo prevede un presidente) del `country`;
- la proprietà `mottos.royal` contiene il motto reale (se - ovviamente - la forma di governo prevede un monarca) del `country`;


:::note Requisiti

| Regola | Definizione | Livello di controllo |
|-----------|-----------|-----------|
| Presenza obbligatoria | No |  |
| Tipo | Oggetto (anche vuoto) | Build |

**Il programma di build:**
- se la proprietà non è presente, la inserisce come oggetto vuoto.

:::

La struttura per ogni singola categoria prevede **un solo motto** (anche se esplicitato in più di una lingua).

##### Le proprietà interne alle categorie di `mottos`

Il contenuto dei motti per ogni singola categoria (ove presenti) è definito in coppia (o coppie) `chiave`-`valore`, dove la chiave è il codice della lingua, su base standard ISO-639 ad due o tre caratteri ed eventualmente la codifica del sistema di scrittura (standard BCP47), ed il valore è il motto nella relativa lingua.

Nel nostro esempio la proprietà è vuota 

import Mottos1 from '/SHARED/codeBlocks/data/origin/countries.mottos.md'

<Mottos1 />

Possiamo comunque prendere un altro stato (ad esempio il Belgio) per avere un altro esempio.

import Mottos2 from '/SHARED/codeBlocks/data/origin/countries.mottos2.md'

<Mottos2 />

In alcuni casi le lingue definiscono anche un particolare sistema di scrittura, come ad esempio il Montenegro 

import Mottos3 from '/SHARED/codeBlocks/data/origin/countries.mottos3.md'

<Mottos3 />

In questo caso sono presenti diverse lingue con il sistema di scrittura latino e cirillico.

:::note Requisiti per la chiave

<StandardForLanguages icu="No" icuCtrl="" />

:::

:::note Requisiti per il valore

| Regola | Definizione | Livello di controllo |
|-----------|-----------|-----------|
| Tipo | Stringa non vuota | Build |
| Sensibilità delle maiuscole/minuscole | No |  |
| Unicità | No | |

Per il valore, quindi vale la regola generale del buon senso.

:::

### La proprietà `currencies`

Il contenitore `currencies` contiene le valute monetarie relative al paese suddivisi per categorie.

:::note Requisiti

| Regola | Definizione | Livello di controllo |
|-----------|-----------|-----------|
| Presenza obbligatoria | No |  |
| Tipo | Oggetto (anche vuoto) | Build |

**Il programma di build:**
- se la proprietà non è presente, la inserisce come oggetto contenente le chiavi delle categorie delle valute ed i relativi valori come un array vuoto.

:::

#### Le proprietà definenti le categorie di `currencies`

Le categorie delle valute sono così definite:
- la proprietà `currencies.legalTenders` contiene la lista delle valute monetarie aventi corso legale nel paese;
- la proprietà `currencies.widelyAccepted` contiene la lista delle valute monetarie, che (pur non avendo riconoscimento legale), sono comunque ampiamente accettate nel paese;

:::note Requisiti

| Regola | Definizione | Livello di controllo |
|-----------|-----------|-----------|
| Presenza obbligatoria | No |  |
| Tipo | Array (anche vuoto) | Build |

**Il programma di build:**
- se la proprietà non è presente, la inserisce come array vuoto.

:::

##### Le proprietà interne alle categorie di `currencies`

Le categorie delle valute sono definite come array.

Gli elementi di queste liste identificano la chiave primaria (la proprietà `isoAlpha`) degli oggetti presenti nel file `Data/origin/currencies.json`.

:::note Requisiti per gli elementi

| Regola | Definizione | Livello di controllo |
|-----------|-----------|-----------|
| Tipo | Stringa di tre caratteri alfabetici ([ISO 4217](https://www.iso.org/iso-4217-currency-codes.html)) | Build |
| Sensibilità delle maiuscole/minuscole | No |  |
| Unicità | All'interno dell'oggetto `currencies`.<br />In altre parole, non è possibile avere la stessa valuta (né ha senso) in `legalTenders` ed in `widelyAccepted`  | Test [TODO] |
| Congruenza con il dataset delle valute | Sì | Test [TODO] |

**Il programma di build:**
- trasforma la stringa dell'elemento in maiuscolo;
- all'interno della stessa categoria rimuove eventuali duplicati.

:::

### La proprietà `dialCodes`

Il contenitore `dialCodes` contiene i prefissi telefonici del paese suddivisi per categorie.

:::note Requisiti

| Regola | Definizione | Livello di controllo |
|-----------|-----------|-----------|
| Presenza obbligatoria | No |  |
| Tipo | Oggetto (anche vuoto) | Build |

**Il programma di build:**
- se la proprietà non è presente, la inserisce come oggetto contenente le chiavi delle categorie dei prefissi ed i relativi valori come un array vuoto.

:::

#### Le proprietà definenti le categorie di `dialCodes`

Le categorie dei prefissi sono così definite:
- la proprietà `dialCodes.main` contiene la lista dei prefissi (sì, alcuni paesi hanno più di un prefisso) primari del paese;
- la proprietà `dialCodes.exception` [TODO];

:::note Requisiti

| Regola | Definizione | Livello di controllo |
|-----------|-----------|-----------|
| Presenza obbligatoria | No |  |
| Tipo | Array (anche vuoto) | Build |

**Il programma di build:**
- se la proprietà non è presente, la inserisce come array vuoto.

:::

##### Le proprietà interne alle categorie di `dialCodes`

Le categorie dei prefissi sono definite come array.

Gli elementi di queste liste identificano il prefisso numerico.

:::note Requisiti per gli elementi

| Regola | Definizione | Livello di controllo |
|-----------|-----------|-----------|
| Tipo | Intero o stringa numerica.<br />Se stringa, può iniziare con `+` oppure con `00` nel rispetto dello standard [ITU-T E.164](https://www.itu.int/rec/T-REC-E.164) | Build |
| Unicità | Sì  | Test [TODO] |


**Il programma di build:**
- nel caso di intero, prepone il prefisso `+`;
- nel caso di stringa:
    - se è presente il prefisso `00`, questo viene sostituito da `+`
    - se non è presente il prefisso `00`, viene aggiunto il prefisso `+`
- all'interno della stessa categoria rimuove eventuali duplicati.

:::

### La proprietà `ccTld`

Un oggetto `country` può includere (ma non necessariamente lo ha) il **dominio Internet nazionale di primo livello (ccTLD)**, cioè il Country Code Top-Level Domain assegnato al paese secondo il codice ISO 3166‑1.

Nel nostro esempio:

import CcTld from '/SHARED/codeBlocks/data/origin/countries.cctld.md'

<CcTld />

Il dataset considera **solo i ccTLD di primo livello**, direttamente registrati presso [IANA (Internet Assigned Numbers Authority)](https://www.iana.org/domains/root/db).

Non vengono quindi considerati domini di differente livello come ad esempio: 
- co.uk: Country Code Second-Level Domain (ccSLD), dominio country code di secondo livello (usato in ambito commerciale);
- in.co.uk, terzo livello relativo ad attività commerciali dell'India;
- au.co.uk, relativo ad attività commerciali dell'Australia;
- ecc.

:::note Requisiti

| Regola | Definizione | Livello di controllo |
|-----------|-----------|-----------|
| Tipo | Stringa non vuota o null | Build |
| Presenza obbligatoria | No |  |
| Standard di riferimento | [RFC 1591](https://www.rfc-editor.org/rfc/rfc1591.html)  | Build |
| Validazione IANA | Sì (match diretto con [Root Zone Database](https://www.iana.org/domains/root/db)) | Build |
| Sensibilità alle maiuscole/minuscole | No |  |
| Unicità | Sì | Test |

**Il programma di build:**
- se il valore è stringa, trasforma la stringa del valore in minuscolo;
- se il valore è stringa e non è presente il punto (`.`) iniziale, prepone il punto (`.`);
:::

### La proprietà `ccIdn` 

Il country code IDN (Internationalized Domain Name) è uno standard, che consente la risoluzione di domini internet a livello paese (country code) utilizzando caratteri fuori dallo standard ASCII e presenti in alfabeti come il russo, il cinese, l'arabo, ecc.

Ad esempio:

- `.рф` (Federazione Russa, in caratteri cirillici)
- `.中国` (Cina, in caratteri cinesi semplificati)
- `.台灣` (Taiwan, in caratteri tradizionali)
- `.السعودية`
  (Arabia Saudita, in arabo) 

Gli **IDN ccTLD** (domini internazionalizzati di primo livello con codice paese) sono **approvati da [ICANN (Internet Corporation for Assigned Names and Numbers)](https://www.icann.org/)** nell’ambito del *IDN ccTLD Fast Track Process*, e vengono **gestiti e pubblicati dalla [IANA (Internet Assigned Numbers Authority)](https://www.iana.org/)** all’interno del Root Zone Database.

L’assegnazione avviene in base a richieste formali presentate dai governi o dalle autorità competenti di ciascun paese.

Devono rispettare regole tecniche e linguistiche ben precise (come evitare ambiguità visive fra caratteri di alfabeti diversi).

import CcIdn from '/SHARED/codeBlocks/data/origin/countries.ccidn.md'
import CcIdn2 from '/SHARED/codeBlocks/data/origin/countries.ccidn2.md'

Ovviamente non tutti i paesi hanno il proprio country code; infatti, nel nostro esempio, non abbiamo valori.

<CcIdn />

Nel caso della Cina invece, la proprietà è popolata.

<CcIdn2 />

:::note Requisiti

| Regola | Definizione | Livello di controllo |
|-----------|-----------|-----------|
| Presenza obbligatoria | No | Build |
| Tipo | Array di oggetti o vuoto | Build |

**Il programma di build:**
- se non presente, aggiunge il valore di array vuoto.

:::

#### Le proprietà degli oggetti interni a `ccIdn`

##### La proprietà `unicode`
Rappresenta il nome di dominio country code di primo livello (TLD) in forma **Unicode**, come definito dallo [Unicode Consortium](https://unicode.org/) e registrato presso lo [IANA Root Zone Database](https://www.iana.org/domains/root/db), in conformità con le specifiche per i nomi di dominio internazionalizzati (IDN).

:::note Requisiti

| Regola | Definizione | Livello di controllo |
|-----------|-----------|-----------|
| Presenza obbligatoria | Sì | Build |
| Tipo | Stringa non vuota | Build |
| Standard di riferimento | [RFC 5890](https://datatracker.ietf.org/doc/html/rfc5890) (IDNA)  | Build |
| Validazione IANA | Sì (match diretto con [Root Zone Database](https://www.iana.org/domains/root/db)) | Build |
| Sensibilità alle maiuscole/minuscole | No |  |
| Unicità | Sì | Test |

**Il programma di build:**
- trasforma la stringa del valore in minuscolo (dove applicabile);
- se non è presente il punto (`.`) iniziale, prepone il punto (`.`);

:::

##### La proprietà `punycode`

Rappresenta la versione codificata in **Punycode (ASCII Compatible Encoding)** del dominio Unicode specificato nella proprietà `unicode`.  
È il formato utilizzato internamente dal **Domain Name System (DNS)** per garantire la compatibilità con le infrastrutture che supportano solo caratteri ASCII.

Il valore in `punycode` deve corrispondere esattamente alla conversione della stringa `unicode` secondo lo standard [IDNA](https://datatracker.ietf.org/doc/html/rfc5890) (*Internationalized Domain Names in Applications*).

:::note Requisiti

| Regola | Definizione | Livello di controllo |
|-----------|-----------|-----------|
| Tipo | Stringa non vuota | Build |
| Presenza obbligatoria | Sì | Build |
| Standard di riferimento |- [RFC 3492](https://www.rfc-editor.org/rfc/rfc3492) (Punycode)<br />- [RFC 5890](https://www.rfc-editor.org/rfc/rfc5890) (IDNA) | Build |
| Validazione di coerenza con `unicode` | Sì (tramite conversione inversa) | Build |
| Sensibilità maiuscole/minuscole | No | |
| Unicità nel dataset | Sì | Test |

**Il programma di build:**
- esegue la conversione della proprietà `unicode` in Punycode;
- confronta il risultato con il valore `punycode`;
- se non è presente il punto (`.`) iniziale, lo aggiunge.

:::

##### La proprietà `language`

Rappresenta il codice della lingua (eventualmente con estensione di script e/o regione) utilizzato per il dominio, in conformità agli standard internazionali di localizzazione.

:::note Requisiti

<StandardForLanguages icu="Si" icuCtrl="Build" />

:::


##### La proprietà `regionsOfUse`

Rappresenta l’elenco delle **regioni o paesi** in cui il dominio è **utilizzato o ufficialmente adottato**, secondo il contesto geopolitico attuale. Ogni regione è rappresentata da un codice **ISO 3166-1 alpha-2** (es. `HK` per Honk Kong, `CN` per Cina).

Le proprietà è di tipo **array di stringhe**, e può contenere uno o più codici, nei casi in cui un dominio venga condiviso, utilizzato storicamente o delegato da più autorità.

:::note Requisiti

| Regola | Definizione | Livello di controllo |
|-----------|-----------|-----------|
| Presenza obbligatoria | Si | Build |
| Tipo | Array non vuoto | Build |

:::

###### I valori di `regionsOfUse`

All'interno dell'array, ogni valore deve rispettare dei requisiti.

:::note Requisiti

| Regola | Definizione | Livello di controllo |
|-----------|-----------|-----------|
| Presenza obbligatoria | Sì | Build |
| Tipo | Stringa di due caratteri alfabetici | Build |
| Sensibilità delle maiuscole/minuscole | No |  |
| Unicità | No |  |
| Presenza nel dataset dei `countries` | Sì | Test [TODO] |

**Il programma di build:**
- trasforma il valore in lettere maiuscole.

:::

### La proprietà `timeZones`

In questa proprietà sono specificate i fusi orari esplicitati secondo le notazioni `Area/Località` definite nello [IANA Time Zone Database](https://www.iana.org/time-zones) (noto anche come "tz" o "Olson" database).

Nel nostro esempio:

import TimeZones from '/SHARED/codeBlocks/data/origin/countries.timezones.md'

<TimeZones />


:::note Requisiti

| Regola | Definizione | Livello di controllo |
|-----------|-----------|-----------|
| Presenza obbligatoria | Si | Build |
| Tipo | Array non vuoto | Build |

:::

#### I valori di `timeZones`

All'interno dell'array, ogni valore deve rispettare dei requisiti.

:::note Requisiti

| Regola | Definizione | Livello di controllo |
|-----------|-----------|-----------|
| Tipo | Stringa | Build |
| Standard di riferimento | [IANA Time Zone Database](https://www.iana.org/time-zones) | Build |

**Il programma di build:**
- per la validazione usa il modulo `moment-timezone`;

:::

### La proprietà `languages`  

[TODO]


### La proprietà `localesIcu`

Definisce tutte le lingue, eventuali sistemi di scrittura e regionalizzazioni comunemente utilizzate nel paese e supportate dallo standard [International Components for Unicode (ICU)](https://icu.unicode.org/).

Nel nostro esempio:

import LocalesExample from '/SHARED/codeBlocks/data/origin/countries.locales.md'

<LocalesExample />


:::note Requisiti

| Regola | Definizione | Livello di controllo |
|-----------|-----------|-----------|
| Presenza obbligatoria | Si | Build |
| Tipo | Array non vuoto | Build |

:::




#### I valori di `localesIcu`

All'interno dell'array, ogni valore deve rispettare dei requisiti.

:::note Requisiti

<StandardForLanguages icu="Si" icuCtrl="Build" />

:::

### La proprietà `otherAppsIds`

È il contenitore riportante le chiavi primarie che identificano lo stato in altre applicazioni esterne.

:::note Requisiti

| Regola | Definizione | Livello di controllo |
|-----------|-----------|-----------|
| Tipo | Oggetto non vuoto | Build |
| Presenza obbligatoria | Sì | Build |

:::

Nel nostro esempio:

import OtherAppIds from '/SHARED/codeBlocks/data/origin/countries.otherappsids.md'

<OtherAppIds />

In questa versione sono presenti solo gli identificativi per l'applicazione [geonames.org](https://www.geonames.org/)

#### La proprietà `geoNamesOrg`

La proprietà riporta l'identificativo univoco relativo all'applicazione esterna [geonames.org](https://www.geonames.org/).

:::note Requisiti

| Regola | Definizione | Livello di controllo |
|-----------|-----------|-----------|
| Tipo | Intero positivo | Build |
| Presenza obbligatoria | Sì | Build |

:::


### La proprietà `NOTES`

Questa è una proprietà di supporto nella redazione del file e non viene considerata nella costruzione del dataset finale.

Contiene i commenti che possono essere inseriti come ausilio alla redazione dell'oggetto `country`.

Ad esempio

import NotesExample from '/SHARED/codeBlocks/data/origin/countries.notes.md'

<NotesExample />

I commenti posso essere inseriti come stringhe all'interno dell'array.

Poiché l'oggetto `country` ha molteplici proprietà, se il commento riguarda una specifica proprietà, è buona pratica preporre il nome della proprietà, all'interno di parentesi quadre.

È considerata buona pratica usare l'inglese per i commenti.