---
slug: /originData/scripts
sidebar_position: 7
sidebar_label: Il file `scripts.json`
---

# Il file `scripts.json`

## Struttura

Questo è il file che contiene le proprietà **statiche** degli oggetti rappresentanti i sistemi di scrittura e si trova nel percorso `Data/origin/scripts.json`.

È una lista (array), i cui elementi sono oggetti contenenti le proprietà di un singolo sistema di scrittura, che - per convenzione - definiremo `script`.

import ScriptsJson from '/SHARED/codeBlocks/data/origin/scripts.md'

<ScriptsJson />

## Standard di riferimento

Per questa collezione i riferimenti principali sono:
- [ISO 15924 - Codes for the representation of names of scripts](https://www.iso.org/standard/81905.html)
- [Unicode Standard](https://www.unicode.org/standard/standard.html)
- [Unicode Character Database (UCD)](https://www.unicode.org/ucd/)
- [IANA Language Subtag Registry](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry) (subtag `Script` usati nelle locale/tag BCP 47)

## Le proprietà dell'oggetto `script`

### La proprietà `LABEL`

Questa è una proprietà di supporto nella redazione del file e non viene considerata nella costruzione del dataset finale.

Contiene il nome (in inglese) dello script e serve al redattore per una facile ricerca all'interno del file.

Nel nostro esempio

import LabelExample from '/SHARED/codeBlocks/data/origin/scripts.label.md'

<LabelExample />

Nessun controllo è inserito nella validazione della proprietà.

### La proprietà `code`

È la chiave primaria della collezione `scripts` e rappresenta il codice script a 4 caratteri.

Nel nostro esempio

import CodeExample from '/SHARED/codeBlocks/data/origin/scripts.code.md'

<CodeExample />

:::info Chiave primaria
Questa proprietà è considerata nelle applicazioni come chiave primaria.
:::

:::note Requisiti

| Regola | Definizione | Livello di controllo |
|-----------|-----------|-----------|
| Presenza obbligatoria | Sì | Build |
| Tipo | Stringa alfabetica di 4 caratteri | Build |
| Sensibilità delle maiuscole/minuscole | No |  |
| Unicità | Sì | Test [TODO] |

**Il programma di build:**
- normalizza il valore nel formato `Xxxx`.

:::

### La proprietà `numeric`

Codice numerico ISO 15924 a 3 cifre.

Nel nostro esempio

import NumericExample from '/SHARED/codeBlocks/data/origin/scripts.numeric.md'

<NumericExample />

:::note Requisiti

| Regola | Definizione | Livello di controllo |
|-----------|-----------|-----------|
| Presenza obbligatoria | Sì | Build |
| Tipo | Stringa numerica di 3 caratteri o intero positivo con massimo 3 cifre | Build |
| Unicità | Sì | Test [TODO] |

**Il programma di build:**
- trasforma il valore in stringa;
- applica padding a sinistra con `0` fino a 3 cifre.

:::

### La proprietà `writingDirection`

Direzione di scrittura principale associata allo script.

Nel nostro esempio

import WritingDirectionExample from '/SHARED/codeBlocks/data/origin/scripts.writingdirection.md'

<WritingDirectionExample />

Valori ammessi:
- `ltr`: left-to-right
- `rtl`: right-to-left
- `nla`: not listed/available

:::note Requisiti

| Regola | Definizione | Livello di controllo |
|-----------|-----------|-----------|
| Presenza obbligatoria | No | Build |
| Tipo | Null oppure stringa (`ltr`, `rtl`, `nla`) | Build |
| Sensibilità delle maiuscole/minuscole | No |  |

**Il programma di build:**
- se la proprietà non è presente o è `null`, la imposta a `nla`;
- normalizza in minuscolo;
- valida il valore rispetto all'insieme ammesso.

:::

### La proprietà `unicode`

Contiene i metadati Unicode dello script.

Nel nostro esempio

import UnicodeExample from '/SHARED/codeBlocks/data/origin/scripts.unicode.md'

<UnicodeExample />

:::note Requisiti del contenitore

| Regola | Definizione | Livello di controllo |
|-----------|-----------|-----------|
| Presenza obbligatoria | Sì | Build |
| Tipo | Oggetto non vuoto | Build |

:::

#### Le proprietà interne a `unicode`

Le proprietà sono:
- `version`: versione Unicode (es. `1.1`) oppure `null`;
- `ranges`: lista dei range esadecimali Unicode;
- `totalCodePoints`: totale dei code point coperti dai range.

##### La proprietà `unicode.version`

:::note Requisiti

| Regola | Definizione | Livello di controllo |
|-----------|-----------|-----------|
| Presenza obbligatoria | No | Build |
| Tipo | Null oppure stringa con formato `n.n` (es. `7.0`) | Build |

**Il programma di build:**
- se il valore è numerico, lo converte in stringa con un decimale.

:::

##### La proprietà `unicode.ranges`

Ogni elemento di `ranges` è un array di 1 o 2 valori esadecimali:
- `[start]` per singolo code point
- `[start, end]` per intervallo

:::note Requisiti

| Regola | Definizione | Livello di controllo |
|-----------|-----------|-----------|
| Presenza obbligatoria | Sì | Build |
| Tipo | Array | Build |
| Elementi | Array non vuoti da 1 o 2 elementi esadecimali Unicode validi | Build |
| Ordinamento | `start <= end` | Build |
| Sovrapposizioni tra range | Non ammesse | Build |

**Il programma di build:**
- normalizza i valori in maiuscolo esadecimale;
- verifica ordinamento e sovrapposizioni.

:::

##### La proprietà `unicode.totalCodePoints`

:::note Requisiti

| Regola | Definizione | Livello di controllo |
|-----------|-----------|-----------|
| Presenza obbligatoria | Sì | Build |
| Tipo | Intero positivo o zero | Build |
| Coerenza | Deve corrispondere al totale calcolato da `unicode.ranges` | Build |

:::

### La proprietà `NOTES`

Questa è una proprietà di supporto nella redazione del file e non viene considerata nella costruzione del dataset finale.

Contiene i commenti che possono essere inseriti come ausilio alla redazione dell'oggetto `script`.

Ad esempio

import NotesExample from '/SHARED/codeBlocks/data/origin/scripts.notes.md'

<NotesExample />

I commenti possono essere inseriti come stringhe all'interno dell'array.

Poiché l'oggetto `script` ha diverse proprietà, se il commento riguarda una specifica proprietà, è buona pratica preporre il nome della proprietà tra parentesi quadre.

È considerata buona pratica usare l'inglese per i commenti.
