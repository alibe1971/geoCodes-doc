---
slug: /originData/translations/countriesprops
sidebar_position: 2
sidebar_label: I file per gli oggetti "countries"
---

# I file per gli oggetti "countries"

import CountriesTranslationsExample from '/SHARED/codeBlocks/data/origin/translations.countries.sample.md'

## Perché `countries` è diverso dagli altri

Tra tutte le collezioni, `countries` è quella con la semantica traduttiva più ricca.
Non si limita ad una proprietà `name`, ma combina più elementi che poi vengono usati dalle app per ricerca e presentazione.

In ogni lingua (`Data/origin/Translations/<lang>/countries.json`) le traduzioni sono indicizzate per codice paese (`alpha2`) e includono, in sintesi:
- `name` (obbligatorio, in particolare per la lingua di default)
- `fullName` (obbligatorio, in particolare per la lingua di default)
- liste opzionali come `demonyms`, `acronymsAliasFormer`, `adjectives`, `others`, `typos`

In altre parole, la chiave del file traduzioni deve corrispondere alla chiave primaria del dataset statico `countries` (`alpha2`).

Esempio sintetico:

<CountriesTranslationsExample />

## Meccanismo di costruzione

Durante il build, per ogni lingua in `settings.languages.inPackage`, il parser `countries`:
1. valida i campi obbligatori (`name`, `fullName`) con regole più stringenti per la lingua di default;
2. carica gli array opzionali se presenti;
3. costruisce una proprietà derivata `keywords` aggregando i termini degli array opzionali;
4. applica normalizzazioni (slug/lowercase, deduplica, esclusione dei termini già presenti in `name`, `fullName`, `demonyms`).

Quindi il “merge” non è un merge strutturale tra file diversi, ma una composizione semantica di campi sorgente in un output traduttivo unico e più utile alle query applicative.

## Comportamento build: lingua default vs altre lingue

Per `countries` il comportamento è esplicito:

- **Lingua di default** (`settings.languages.default`):
  - `name` e `fullName` sono obbligatori e non possono essere null/vuoti;
  - se mancano, il build termina con errore.
- **Lingue non default**:
  - `name` e `fullName` possono mancare/null;
  - il build valorizza stringa vuota e delega il fallback alle regole applicative.
- **Array opzionali** (`demonyms`, `acronymsAliasFormer`, `adjectives`, `others`, `typos`):
  - se mancanti, diventano array vuoti;
  - contribuiscono alla costruzione di `keywords` solo se presenti e validi.

## Impatto applicativo

Questo approccio rende `countries` adatto a:
- ricerca testuale robusta (sinonimi, varianti, typo note);
- visualizzazione con fallback coerente (`name`/`fullName`);
- consistenza tra lingua attiva e lingua di default.

Per questo dataset, una traduzione incompleta non è solo un difetto editoriale: può produrre impatti evidenti su lookup e UX.

## Relazione con `config.languages`

Anche per `countries` valgono le regole generali:
- la lingua deve essere presente in `inPackage` per essere inclusa nel built;
- una cartella lingua non referenziata in `inPackage` viene ignorata;
- la lingua di default deve essere completa sui campi obbligatori.

Riferimento: [Il file `config.json`](../01-config.md).

## Nota operativa

Poiché `countries` usa più campi come sorgente lessicale, conviene mantenere allineate le proprietà opzionali tra lingue principali.
Non è obbligatorio avere la stessa ricchezza lessicale in tutte le lingue, ma una forte asimmetria riduce l’efficacia di ricerca locale.
