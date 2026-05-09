---
slug: /il-progetto-geocodes
sidebar_position: 3
sidebar_label: Il progetto GeoCodes
---

# Il progetto GeoCodes

Il progetto GeoCodes consiste nell'elaborazione di script in diversi linguaggi che consentono l'interrogazione su un dataset per estrapolare informazioni relativi agli standard geopolitici. 

Tali script di linguaggio sono concepiti come moduli.

Un programmatore potrà quindi integrare il modulo relativo al proprio linguaggio di codifica nel proprio progetto es eseguire le interrogazioni secondo le proprie finalità.

## I linguaggi di script usati

Al momento il progetto prevede i seguenti moduli di linguaggio.

- php
- go lang
- node.js
- python
- perl

## I dati

Come già detto, il progetto si basa sulla catalogazione di:
- stati
- organizzazioni geopolitiche
- valute
- lingue
- script

I dati di origine sono trattati in un progetto a latere definito **`data-geoCodes`**, scritto in node.js, che raccoglie i dati originali inseriti in strutture json.

Lo script **`data-geoCodes`** provvede a tradurre le strutture primarie nei dataset "ristrutturati" e direttamente utilizzabili dagli script del progetto.

Provvede anche all'esportazione dei dati in diversi formati, come:
- json
- yaml
- xml

L'approfondimento della struttura dei dati è definita nella sezione **`data-geoCodes`** di questo documento.

### Perché non usare un database?

È una semplice scelta.

Si è preferito non usare un database separato per alcuni motivi:
- il dataset integrato nel modulo consente l'utilizzo dello script in modo diretto, senza particolari impostazioni;
- la struttura dei dati non ha molti "record" e le interrogazioni posso essere fatte direttamente, senza dispendio di molte risorse.


## Logica delle versioni (SemVer)

Il progetto è in continua evoluzione.

Si è resa quindi necessaria una logica nella struttura delle versioni.

Si è scelto di usare lo standard della "Semantic Versioning", strutturato su tre livelli numerici (Es. `3.12.1`) che identificano la versione in:
- **MAJOR** – aggiunta di funzionalità che rompono la compatibilità con le versioni precedenti; 
- **MINOR** – aggiunta di funzionalità minori in modo retro-compatibile;
- **PATCH** – correzione di errori o modifiche retro-compatibili minori.

Potrebbero inoltre esistere eccezioni con l'aggiunta di un quarto livello nei casi di pre-realise (Es. `2.4.0-beta.1`)

### Parallelismo tra i linguaggi

Essendo presenti più linguaggi di script per un unico progetto, si è deciso di seguire un certo parallelismo nelle versioni tra la struttura dei dati ed i linguaggi di script.

Questo indica come corollario che se il progetto si trovasse ad un livello di versione avanzato, l'introduzione di un modulo, basato su un "nuovo" linguaggio di script, potrebbe mancare delle versioni precedenti.

In generale la logica di base segue la struttura dei dati nel modulo **`data-geoCodes`** (con l'unica eccezione per il livello **PATCH**).

#### Versione Major

La struttura dei dati cambia in modo sensibile, tale da rendere incompatibili le versioni precedenti.

Le nuove versioni dei moduli di script con la nuova struttura integrata seguono il numero di versione major di **`data-geoCodes`**.

Esempio puramente ipotetico.

**`data-geoCodes`** introduce una struttura nuova, che richiede un avanzamento di versione a "2.0.0".

Nel modulo **`php-geoCodes`** che si trova alla versione "1.3.5" si aggiungono correzioni ed allo stesso tempo si adegua la struttura a **`data-geoCodes`**; la nuova versione sarà comunque "2.0.0".

#### Versione Minor

La struttura dei dati rimane invariata, ma vengono aggiunti nuovi linguaggi di traduzione (ad esempio per il nome degli stati), oppure effettuate modifiche non sostanziali al contenuto dei "record" (ad esempio viene aggiunta o modificata una organizzazione geopolitica).

Esempio puramente ipotetico.

**`data-geoCodes`** introduce una nuova lingua di traduzione, che richiede un avanzamento di versione a "2.1.0".

Nel modulo **`php-geoCodes`** che si trova alla versione "2.0.0", anche se non ci sono cambiamenti nel codice, il dataset integrato è cambiato, quindi la nuova versione sarà "2.1.0" allineata con **`data-geoCodes`**.

#### Versione Patch

Questo livello è indipendente.

Per ogni singolo modulo di script l'avanzamento è autonomo.

Esempio puramente ipotetico.

- **`data-geoCodes`** si trova nella versione "2.1.0".
- **`php-geoCodes`** si trova nella versione "2.1.5" (ci sono state diverse correzioni).
- **`go-geoCodes`** si trova nella versione "2.1.12" (ci sono state diverse correzioni).

In **`data-geoCodes`** si è trovato un errore di battitura.

- **`data-geoCodes`** cambia versione a "2.1.1".
- **`php-geoCodes`**, che integra il nuovo dataset, passerà alla versione "2.1.6".
- **`go-geoCodes`**, che integra il nuovo dataset, passerà alla versione "2.1.13".

### Salti apparentemente immotivati di versione

Poiché si intende tenere il progetto il più unito possibile, anche la logica di versione deve perseguire tale fine.

Potrebbe quindi esistere la possibilità di cambi di versione apparentemente immotivati.

Esempio puramente ipotetico.

- **`data-geoCodes`** si trova nella versione "2.1.1"
- **`php-geoCodes`** si trova nella versione "2.1.6"
- **`go-geoCodes`** si trova nella versione "2.1.13"

Ora ipotiziamo che:

- in **`data-geoCodes`** non ci sono modifiche;
- in **`go-geoCodes`** ci sono modifiche per la correzione di errori;
- in **`php-geoCodes`** ci sono modifiche sostanziali relative al codice, in quanto è stata rilasciata una nuova versione di php che è incompatibile con lo script.

Per preservare l'unità del progetto in tutti i moduli ci sarà una nuova versione major:

- **`php-geoCodes`** passerà alla versione "3.0.0"
- **`data-geoCodes`** passerà alla versione "3.0.0"
- **`go-geoCodes`**: passerà alla versione "3.0.0"


## Postfazione alla redazione del documento

In queste pagine si è introdotta solo una panoramica del progetto.

Navigando nelle diverse sezioni relative alle parti del progetto stesso, verranno analizzate tutte le specifiche necessarie al funzionamento delle applicazioni nei diversi linguaggi di script.

In particolare le analisi vertono sulle proprietà dei singoli oggetti e sulle funzioni di interrogazione del dataset.

Sono presenti esempi ed eventuali eccezioni.

Questo documento è stato redatto con la finalità di spiegare le caratteristiche degli oggetti e delle azioni definite nelle applicazioni del progetto.

Può quindi accadere di avere molte ripetizioni dei concetti, che sono state accettate dal redigente con la priorità di avere una rappresentazione chiara e sempre presente nei parallelismi presenti tra le diverse applicazioni, a scapito di un filo "narrativo" lineare.

Vogliano quindi i pochi lettori del documento accettare, sin da ora, le scuse per eventuali ridondanze e semplicismi presenti in questo scritto.

La speranza è che il risultato di questo lavoro possa essere di utilità in qualche applicazione.


