---
slug: /originData/languages
sidebar_position: 6
sidebar_label: Il file `languages.json`
---

# Il file `languages.json`

## Struttura

Questo è il file che contiene le proprietà **statiche** degli oggetti rappresentanti le lingue e si trova nel percorso `Data/origin/languages.json`.

È una lista (array), i cui elementi sono oggetti contenenti le proprietà di una singola lingua, che - per convenzione - definiremo `language`.

import LanguagesJson from '/SHARED/codeBlocks/data/origin/languages.md'

<LanguagesJson />

## Standard di riferimento

La collezione usa come riferimenti principali:
- [ISO 639-3 (SIL) - Download tables](https://iso639-3.sil.org/code_tables/download_tables)
- [ISO 639 - panoramica codici](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes)
- [ISO 639-2 code list (LoC)](https://www.loc.gov/standards/iso639-2/php/code_list.php)
- [IANA Language Subtag Registry](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry)

## Le proprietà dell'oggetto `language`

### La proprietà `LABEL`

Questa è una proprietà di supporto nella redazione del file e non viene considerata nella costruzione del dataset finale.

Contiene il nome (in inglese) della lingua e serve al redattore per una facile ricerca all'interno del file.

Nel nostro esempio

import LabelExample from '/SHARED/codeBlocks/data/origin/languages.label.md'

<LabelExample />

Nessun controllo è inserito nella validazione della proprietà.

### La proprietà `isoCode`

È la chiave primaria della collezione `languages` e rappresenta il codice lingua a 3 caratteri.

Nel nostro esempio

import IsoCode from '/SHARED/codeBlocks/data/origin/languages.isocode.md'

<IsoCode />

:::info Chiave primaria
Questa proprietà è considerata nelle applicazioni come chiave primaria.
:::

:::note Requisiti

| Regola | Definizione | Livello di controllo |
|-----------|-----------|-----------|
| Presenza obbligatoria | Sì | Build |
| Tipo | Stringa alfabetica di 3 caratteri | Build |
| Sensibilità delle maiuscole/minuscole | No |  |
| Unicità | Sì | Test [TODO] |

**Il programma di build:**
- normalizza il valore in minuscolo.

:::

### La proprietà `part2b`

Codice ISO 639-2/B (bibliographic), se disponibile.

Nel nostro esempio

import Part2b from '/SHARED/codeBlocks/data/origin/languages.part2b.md'

<Part2b />

:::note Requisiti

| Regola | Definizione | Livello di controllo |
|-----------|-----------|-----------|
| Presenza obbligatoria | No | Build |
| Tipo | Null oppure stringa alfabetica di 3 caratteri | Build |
| Sensibilità delle maiuscole/minuscole | No |  |

**Il programma di build:**
- se la proprietà non è presente, la inserisce con valore nullo;
- se presente e non nulla, normalizza il valore in minuscolo.

:::

### La proprietà `part2t`

Codice ISO 639-2/T (terminologic), se disponibile.

Nel nostro esempio

import Part2t from '/SHARED/codeBlocks/data/origin/languages.part2t.md'

<Part2t />

:::note Requisiti

| Regola | Definizione | Livello di controllo |
|-----------|-----------|-----------|
| Presenza obbligatoria | No | Build |
| Tipo | Null oppure stringa alfabetica di 3 caratteri | Build |
| Sensibilità delle maiuscole/minuscole | No |  |

**Il programma di build:**
- se la proprietà non è presente, la inserisce con valore nullo;
- se presente e non nulla, normalizza il valore in minuscolo.

:::

### La proprietà `part1`

Codice ISO 639-1 a 2 caratteri, se disponibile.

Nel nostro esempio

import Part1 from '/SHARED/codeBlocks/data/origin/languages.part1.md'

<Part1 />

:::note Requisiti

| Regola | Definizione | Livello di controllo |
|-----------|-----------|-----------|
| Presenza obbligatoria | No | Build |
| Tipo | Null oppure stringa alfabetica di 2 caratteri | Build |
| Sensibilità delle maiuscole/minuscole | No |  |

**Il programma di build:**
- se la proprietà non è presente, la inserisce con valore nullo;
- se presente e non nulla, normalizza il valore in minuscolo.

:::

### La proprietà `glottoCode`

Codice Glottolog della lingua (se disponibile).

Nel nostro esempio

import GlottoCode from '/SHARED/codeBlocks/data/origin/languages.glottocode.md'

<GlottoCode />

:::note Requisiti

| Regola | Definizione | Livello di controllo |
|-----------|-----------|-----------|
| Presenza obbligatoria | No | Build |
| Tipo | Null oppure stringa nel formato `aaaa1234` | Build |
| Sensibilità delle maiuscole/minuscole | No |  |

**Il programma di build:**
- se la proprietà non è presente, la inserisce con valore nullo;
- se presente e non nulla, normalizza il valore in minuscolo.

:::

### La proprietà `scope`

La proprietà `scope` identifica l'ambito linguistico ISO.

Nel nostro esempio

import Scope from '/SHARED/codeBlocks/data/origin/languages.scope.md'

<Scope />

Valori ammessi:
- `I`: Individual
- `M`: Macrolanguage
- `S`: Special

:::note Requisiti

| Regola | Definizione | Livello di controllo |
|-----------|-----------|-----------|
| Presenza obbligatoria | Sì | Build |
| Tipo | Stringa (`I`, `M`, `S`) | Build |
| Sensibilità delle maiuscole/minuscole | No |  |

**Il programma di build:**
- trasforma il valore in maiuscolo;
- valida il valore rispetto all'insieme ammesso.

:::

### La proprietà `type`

La proprietà `type` identifica la tipologia linguistica.

Nel nostro esempio

import Type from '/SHARED/codeBlocks/data/origin/languages.type.md'

<Type />

Valori ammessi:
- `A`: Ancient
- `C`: Constructed
- `E`: Extinct
- `H`: Historical
- `L`: Living
- `S`: Special

:::note Requisiti

| Regola | Definizione | Livello di controllo |
|-----------|-----------|-----------|
| Presenza obbligatoria | Sì | Build |
| Tipo | Stringa (`A`, `C`, `E`, `H`, `L`, `S`) | Build |
| Sensibilità delle maiuscole/minuscole | No |  |

**Il programma di build:**
- trasforma il valore in maiuscolo;
- valida il valore rispetto all'insieme ammesso.

:::

### La proprietà `macroLanguageRef`

Se valorizzata, indica il riferimento ad una macrolingua tramite codice lingua a 3 caratteri.

Nel nostro esempio standard il valore è nullo:

import MacroLangRefNull from '/SHARED/codeBlocks/data/origin/languages.macrolang.null.md'

<MacroLangRefNull />

Esempio esplicativo con valore valorizzato:

import MacroLangRef from '/SHARED/codeBlocks/data/origin/languages.macrolang.md'

<MacroLangRef />

:::note Requisiti

| Regola | Definizione | Livello di controllo |
|-----------|-----------|-----------|
| Presenza obbligatoria | No | Build |
| Tipo | Null oppure stringa alfabetica di 3 caratteri | Build |
| Sensibilità delle maiuscole/minuscole | No |  |

**Il programma di build:**
- se la proprietà non è presente, la inserisce con valore nullo;
- se presente e non nulla, normalizza il valore in minuscolo.

:::

### La proprietà `scripts`

La proprietà contiene la lista dei sistemi di scrittura associati alla lingua (codici script a 4 caratteri, tipicamente conformi a ISO 15924).

Nel nostro esempio

import Scripts from '/SHARED/codeBlocks/data/origin/languages.scripts.md'

<Scripts />

:::note Requisiti

| Regola | Definizione | Livello di controllo |
|-----------|-----------|-----------|
| Presenza obbligatoria | No | Build |
| Tipo | Array (anche vuoto) | Build |

**Il programma di build:**
- se la proprietà non è presente, la inserisce come array vuoto;
- normalizza ogni elemento nel formato `Xxxx` (iniziale maiuscola, resto minuscolo).

:::

### La proprietà `NOTES`

Questa è una proprietà di supporto nella redazione del file e non viene considerata nella costruzione del dataset finale.

Contiene i commenti che possono essere inseriti come ausilio alla redazione dell'oggetto `language`.

Ad esempio

import NotesExample from '/SHARED/codeBlocks/data/origin/languages.notes.md'

<NotesExample />

I commenti possono essere inseriti come stringhe all'interno dell'array.

Poiché l'oggetto `language` ha diverse proprietà, se il commento riguarda una specifica proprietà, è buona pratica preporre il nome della proprietà tra parentesi quadre.

È considerata buona pratica usare l'inglese per i commenti.
