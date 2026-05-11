---
slug: /originData/currencies
sidebar_position: 5
sidebar_label: Il file `currencies.json`
---

# Il file `currencies.json`

## Struttura

Questo è il file che contiene le proprietà **statiche** degli oggetti rappresentanti le valute monetarie e si trova nel percorso `Data/origin/currencies.json`.

È una lista (array), i cui elementi sono oggetti contenenti le proprietà di una singola valuta, che - per convenzione - definiremo `currency`.

import CurrenciesJson from '/SHARED/codeBlocks/data/origin/currencies.md'

<CurrenciesJson />


## Le proprietà dell'oggetto `currency`

### La proprietà `LABEL`

Questa è una proprietà di supporto nella redazione del file e non viene considerata nella costruzione del dataset finale.

Contiene il nome (in inglese) della moneta e serve al redattore per una facile ricerca all'interno del file.

Nel nostro esempio

import LabelExample from '/SHARED/codeBlocks/data/origin/currencies.label.md'

<LabelExample />

Nessun controllo è inserito nella validazione della proprietà.

### La proprietà `isoAlpha`

È la definizione contenente il codice [ISO 4217](https://www.iso.org/iso-4217-currency-codes.html) alfabetico, con codifica a tre lettere, che identifica la valuta in oggetto.

Nel nostro esempio

import IsoAlpha from '/SHARED/codeBlocks/data/origin/currencies.isoalpha.md'

<IsoAlpha />

:::info Chiave primaria
Questa proprietà è considerata nelle applicazioni come chiave primaria.

Viene utilizzata quindi come chiave per le traduzioni e per i collegamenti con le altre collezioni del dataset.

:::

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

### La proprietà `isoNumber`

È la definizione contenente il codice [ISO 4217](https://www.iso.org/iso-4217-currency-codes.html) numerico, con codifica a tre cifre, che identifica la valuta in oggetto.

Nel nostro esempio

import IsoNumber from '/SHARED/codeBlocks/data/origin/currencies.isonumber.md'

<IsoNumber />

:::note Requisiti

| Regola | Definizione | Livello di controllo |
|-----------|-----------|-----------|
| Presenza obbligatoria | Sì | Build |
| Tipo | Stringa di tre caratteri numerici o numero intero positivo con un massimo di tre cifre | Build |
| Unicità | Sì | Test [TODO] |

**Il programma di build:**
- trasforma il valore in stringa (se già non lo è) preponendo tanti `0` quanti necessari a raggiungere la lunghezza complessiva di tre cifre.

:::

### La proprietà `symbol`

La proprietà indica l'eventuale simbolo (se esiste) per rappresentare la valuta.

Nel nostro esempio

import Symbol from '/SHARED/codeBlocks/data/origin/currencies.symbol.md'

<Symbol />

:::note Requisiti

| Regola | Definizione | Livello di controllo |
|-----------|-----------|-----------|
| Presenza obbligatoria | No | Build |
| Tipo | Stringa o valore nullo | Build |
| Unicità | No | |

**Il programma di build:**
- se la proprietà non è presente viene inserita con valore nullo.

:::

### La proprietà `decimal`

La proprietà indica il numero di decimali presenti nelle rappresentazioni valoriali della valuta.

Nel nostro esempio

import Decimal from '/SHARED/codeBlocks/data/origin/currencies.decimal.md'

<Decimal />

:::note Requisiti

| Regola | Definizione | Livello di controllo |
|-----------|-----------|-----------|
| Presenza obbligatoria | No | Build |
| Tipo | Intero positivo o valore nullo | Build |
| Unicità | No | |

**Il programma di build:**
- se la proprietà non è presente viene inserita con valore nullo.

:::

### La proprietà `scope`

La proprietà `scope` identifica il tipo di valuta nel dataset.

Nel nostro esempio

import Scope from '/SHARED/codeBlocks/data/origin/currencies.scope.md'

<Scope />

I valori ammessi sono:
- `M`: valuta monetaria corrente;
- `F`: unità monetaria usata in ambito finanziario;
- `P`: metallo prezioso codificato come valuta;
- `S`: unità monetaria sovranazionale/speciale.

:::note Requisiti

| Regola | Definizione | Livello di controllo |
|-----------|-----------|-----------|
| Presenza obbligatoria | Sì | Build |
| Tipo | Stringa (`M`, `F`, `P`, `S`) | Build |
| Sensibilità delle maiuscole/minuscole | No |  |

**Il programma di build:**
- trasforma il valore in lettere maiuscole;
- valida il valore rispetto all'insieme ammesso.

:::

### La proprietà `NOTES`

Questa è una proprietà di supporto nella redazione del file e non viene considerata nella costruzione del dataset finale.

Contiene i commenti che possono essere inseriti come ausilio alla redazione dell'oggetto `currency`.

Ad esempio (per il Dollaro Statunitense del giorno successivo, usato solo a livello finanziario e non una valuta corrente presso gli stati)

import NotesExample from '/SHARED/codeBlocks/data/origin/currencies.notes.md'

<NotesExample />

I commenti posso essere inseriti come stringhe all'interno dell'array.

Poiché l'oggetto `currency` ha diverse proprietà, se il commento riguarda una specifica proprietà, è buona pratica preporre il nome della proprietà, all'interno di parentesi quadre.

È considerata buona pratica usare l'inglese per i commenti.
