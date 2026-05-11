---
slug: /originData/geosets
sidebar_position: 4
sidebar_label: Il file `geoSets.json`
---

# Il file `geoSets.json`

## Struttura

Questo è il file che contiene le proprietà **statiche** degli oggetti rappresentanti le aggragazioni degli stati e si trova nel percorso `Data/origin/geoSets.json`.

È una lista (array), i cui elementi sono oggetti contenenti le proprietà di un singolo raggruppamento, che - per convenzione - definiremo `geoSet`.

import GeoSetsJson from '/SHARED/codeBlocks/data/origin/geosets.md'

<GeoSetsJson />


## Le proprietà dell'oggetto `geoSet`

### La proprietà `LABEL`

Questa è una proprietà di supporto nella redazione del file e non viene considerata nella costruzione del dataset finale.

Contiene il nome (in inglese) del raggruppamento e serve al redattore per una facile ricerca all'interno del file.

Nel nostro esempio

import LabelExample from '/SHARED/codeBlocks/data/origin/geosets.label.md'

<LabelExample />

Nessun controllo è inserito nella validazione della proprietà.

### La proprietà `internalCode`

Le rappresentazioni per le aggregazioni tra gli stati non sono codificate con uno standard; per questo motivo come chiave primaria si è definito un codice interno, che possa avere i valori di unicità e strutturazione "simile" ad uno standard.

Quindi tale proprietà ha l'esclusivo compito di favorire le funzionalità delle applicazioni che usano il dataset.

Nel nostro esempio

import InternalCode from '/SHARED/codeBlocks/data/origin/geosets.internalcode.md'

<InternalCode />

Un esempio geografico può essere l'Europa (inteso come continente geografico)

import InternalCode1 from '/SHARED/codeBlocks/data/origin/geosets.internalcode1.md'

<InternalCode1 />

oppure il raggruppamento sottoregionale dell'Europa del Nord

import InternalCode2 from '/SHARED/codeBlocks/data/origin/geosets.internalcode2.md'

<InternalCode2 />

ed in particolare le isole del Canale della Manica

import InternalCode3 from '/SHARED/codeBlocks/data/origin/geosets.internalcode3.md'

<InternalCode3 />

:::info Chiave primaria
Questa proprietà è considerata nelle applicazioni come chiave primaria.

Viene utilizzata quindi come chiave per le traduzioni e per i collegamenti con le altre collezioni del dataset.

:::

:::note Requisiti

| Regola | Definizione | Livello di controllo |
|-----------|-----------|-----------|
| Presenza obbligatoria | Sì | Build |
| Tipo | Stringa con sequenze alfanumeriche (minimo 2 e fino a 4) delimitate dal trattino (`-`) | Build |
| Sensibilità delle maiuscole/minuscole | No |  |
| Unicità | Sì | Test [TODO] |

**Il programma di build:**
- trasforma il valore in lettere maiuscole.


**Le sequenze alfanumeriche**

Sono concepite in modo da definire dei gruppi e dei sottogruppi.
La prima sequenza definisce il macrogruppo e dve contenere uno dei seguenti valori:
- `GEOG-`: identifica i raggruppamenti geografici:
  - è l'unico macrogruppo che ha una certa ufficialità di standard;
  - la lista è definita e mantenuta dalla [United Nations Statistics Division](https://unstats.un.org/UNSDWebsite/);
  - è il solo macrogruppo ad avere una proprietà `unM49` (vedi sotto) non nulla;
  - nel nostro esempio, per le isole del canale della Manica, possiamo vedere i sotto raggruppamenti così organizzati:
    - `GEOG-`: il macro raggruppamento geografico;
    - `EU-`: l'Europa;
    - `NO-`: la zona nord;
    - `CH`: il canale della Manica (channel);
- `CONV-`: identifica le convenzioni di raggruppamento (ad esempio il gruppo dei sette `CONV-G7`);
- `ORGS-`: indentifica le organizzazioni geopolitiche (ad esempio le Nazioni Unite `ORGS-UN`).
:::

### La proprietà `unM49`

È la definizione contenente il codice con codifica a tre cifre numeriche, che identifica lo il raggruppamento in oggetto.

**È presente solo e soltanto per i raggruppamenti di tipo geografico (aventi chiave interna che inizia con `GEOG-`)**

Lo standard è mantenuto dalla [United Nations Statistics Division](https://unstats.un.org/UNSDWebsite/).

Nel nostro esempio, che riguarda un'organizzazione geopolitica, quindi del macrogruppo `ORGS-` (`ORGS-EU`), la proprietà è nulla.

import UnM49 from '/SHARED/codeBlocks/data/origin/geosets.unm49.md'

<UnM49 />

Un esempio geografico può essere l'Europa (inteso come continente geografico)

import UnM49eu from '/SHARED/codeBlocks/data/origin/geosets.unm49geogeu.md'

<UnM49eu />

oppure il raggruppamento sottoregionale dell'Europa del Nord

import UnM49euN from '/SHARED/codeBlocks/data/origin/geosets.unm49geogeuno.md'

<UnM49euN />


:::note Requisiti

| Regola | Definizione | Livello di controllo |
|-----------|-----------|-----------|
| Presenza obbligatoria | Sì (solo nel caso di macro raggruppamenti di tipo geografico, `GEOG-`) | Build |
| Tipo | **Nel caso di macro raggruppamenti geografici (`GEOG-`)**: stringa di tre caratteri numerici o numero intero positivo con un massimo di tre cifre.<br />**Negli altri casi**: valore nullo. | Build |
| Unicità | Sì<br />Il controllo di unicità viene effettuato anche sulla proprietà `unM49` dei paesi, presenti nel file `countries.json` | Test [TODO] |

**Il programma di build:**
- per i macro raggruppamenti di tipo geografico (`GEOG-`), trasforma il valore in stringa (se già non lo è) preponendo tanti `0` quanti necessari a raggiungere la lunghezza complessiva di tre cifre.

:::

### La proprietà `scope`

La proprietà `scope` identifica la tipologia del raggruppamento in forma esplicita.

Nel nostro esempio:

import Scope from '/SHARED/codeBlocks/data/origin/geosets.scope.md'

<Scope />

I valori ammessi sono:
- `GEOG`: raggruppamenti geografici;
- `CONV`: raggruppamenti convenzionali;
- `ORGS`: organizzazioni geopolitiche.

Il valore deve sempre essere coerente con il prefisso di `internalCode`.

Esempi:
- `internalCode: GEOG-EU` -> `scope: GEOG`
- `internalCode: CONV-G7` -> `scope: CONV`
- `internalCode: ORGS-UN` -> `scope: ORGS`

:::note Requisiti

| Regola | Definizione | Livello di controllo |
|-----------|-----------|-----------|
| Presenza obbligatoria | Sì | Build |
| Tipo | Stringa (`GEOG`, `CONV`, `ORGS`) | Build |
| Coerenza con `internalCode` | Sì (deve coincidere col primo segmento prima del `-`) | Build |
| Sensibilità delle maiuscole/minuscole | No |  |

**Il programma di build:**
- trasforma il valore in lettere maiuscole;
- valida il valore rispetto all'insieme ammesso;
- verifica la corrispondenza con il prefisso di `internalCode`.

:::


### La proprietà `tags`

La proprietà `tags` contiene la nuvola delle etichette che possono identificare il raggruppamento degli stati.

Si presenta come una lista (array) di elementi fatti da un unica sequenza alfanumerica (senza spazi).

Nel nostro esempio:

import Tags from '/SHARED/codeBlocks/data/origin/geosets.tags.md'

<Tags />

:::note Requisiti

| Regola | Definizione | Livello di controllo |
|-----------|-----------|-----------|
| Presenza obbligatoria | Sì | Build |
| Tipo | Array non vuoto | Build |

:::

#### I valori interni a `tags`

:::note Requisiti

| Regola | Definizione | Livello di controllo |
|-----------|-----------|-----------|
| Tipo | Stringhe composte ad un'unica sequenza alfanumerica (una sola parola) | Build |
| Sensibilità delle maiuscole/minuscole negli elementi | No |  |
| Unicità | No |  |

**Il programma di build:**
- trasforma gli elementi con caratteri minuscoli;
- elimina eventuali doppioni all'interno della lista.

:::


### La proprietà `countryCodes`

La proprietà contiene la lista degli stati (definiti con standard [ISO 3166-1 alpha-2](https://it.wikipedia.org/wiki/ISO_3166-1_alpha-2) a due caratteri alfabetici) che sono inclusi nel raggruppamento.

Nel nostro esempio:

import CountryCodes from '/SHARED/codeBlocks/data/origin/geosets.countrycodes.md'

<CountryCodes />

:::note Requisiti

| Regola | Definizione | Livello di controllo |
|-----------|-----------|-----------|
| Presenza obbligatoria | Sì | Build |
| Tipo | Array non vuoto | Build |

:::

#### I valori interni a `countryCodes`

:::note Requisiti

| Regola | Definizione | Livello di controllo |
|-----------|-----------|-----------|
| Tipo | Stringa di due caratteri alfabetici | Build |
| Sensibilità delle maiuscole/minuscole negli elementi | No |  |
| Unicità | No |  |
| Presenza dei valori nel dataset degli Stati | Sì | Test [TODO] |

**Il programma di build:**
- trasforma gli elementi con caratteri maiuscoli;
- elimina eventuali doppioni all'interno della lista.

**Per quanto concerne i raggruppamenti di tipo geografico (`GEOG-`)**

| Regola | Definizione | Livello di controllo |
|-----------|-----------|-----------|
| Presenza molteplice | **Consentita (necessaria)**: nello stesso percorso, a livelli diversi; Esempio:<br />il Jersey (JE) si trova nel seguente percorso geografico:<br />- `GEOG-EU` Europa;<br />- `GEOG-EU-NO` Europa del nord:<br />- `GEOG-EU-NO-CH` Canale della Manica.<br /><br />**Non consentita**: in percorsi geografici diversi. | Test [TODO]  |
| Sensibilità delle maiuscole/minuscole negli elementi | No |  |
| Tutti gli stati del dataset devono avere un collocazione in un raggruppamento geografico. | Sì | Test [TODO] |

:::

### La proprietà `NOTES`

Questa è una proprietà di supporto nella redazione del file e non viene considerata nella costruzione del dataset finale.

Contiene i commenti che possono essere inseriti come ausilio alla redazione dell'oggetto `geoSet`.

Ad esempio (per L'Organizzazione Mondiale delle Dogane)

import NotesExample from '/SHARED/codeBlocks/data/origin/geosets.notes.md'

<NotesExample />

I commenti posso essere inseriti come stringhe all'interno dell'array.

Poiché l'oggetto `geoSet` ha diverse proprietà, se il commento riguarda una specifica proprietà, è buona pratica preporre il nome della proprietà, all'interno di parentesi quadre.

È considerata buona pratica usare l'inglese per i commenti.
