---
slug: /originData/translations/othersprops
sidebar_position: 3
sidebar_label: I file per gli altri oggetti
---

# I file per gli altri oggetti

import OthersTranslationsExample from '/SHARED/codeBlocks/data/origin/translations.others.sample.md'
import CategoriesTranslationsExample from '/SHARED/codeBlocks/data/origin/translations.categories.sample.md'

Per `currencies`, `geoSets`, `languages` e `scripts` la logica traduttiva è volutamente più semplice rispetto a `countries`.

## Traduzioni principali (regola semplice)

Per ogni lingua in `settings.languages.inPackage`, ogni dataset usa un file traduzioni con struttura lineare:
- chiave primaria dell’oggetto
- proprietà `name` tradotta

Mappa esplicita delle chiavi primarie usate per il collegamento con i dataset statici:
- `currencies` -> `isoAlpha`
- `geoSets` -> `internalCode`
- `languages` -> `isoCode`
- `scripts` -> `code`

Esempio:

<OthersTranslationsExample />

La regola è:
1. `name` è obbligatoria nella lingua di default;
2. nelle altre lingue può mancare (con fallback lato app/default chain);
3. nessuna costruzione di keyword o merge lessicale avanzato come avviene in `countries`.

## Traduzioni delle categorie

Per questi dataset esiste anche la componente `Categories`, quando prevista:
- `currencies`: categorie `scope`
- `geoSets`: categorie `scope`
- `languages`: categorie `scope` e `type`
- `scripts`: categorie `writingDirection`

Qui il comportamento resta lineare:
- mappa categoria -> label tradotta;
- vincoli forti sulla lingua di default;
- controllo di coerenza con il set categorie definito nei dati principali.

Esempio categorie:

<CategoriesTranslationsExample />

## Comportamento build: lingua default vs altre lingue

Per `currencies`, `geoSets`, `languages` e `scripts` la regola è uniforme:

- **Lingua di default**:
  - `name` è obbligatorio per tutte le chiavi principali;
  - nelle `Categories`, tutte le chiavi categoria previste devono essere presenti e valorizzate.
- **Lingue non default**:
  - `name` può mancare/null (fallback gestito a livello applicativo);
  - nelle `Categories`, i valori mancanti sono ammessi secondo le regole di fallback.
- **In entrambi i casi**:
  - la lingua deve essere in `settings.languages.inPackage`;
  - se la cartella lingua manca, il build fallisce.

## Relazione con `config` e cartelle lingue

Anche qui vale lo stesso contratto già visto:
- solo le lingue presenti in `inPackage` entrano nel dataset built;
- cartelle lingua non referenziate in `inPackage` non vengono incluse;
- cartelle mancanti per lingue dichiarate causano errore di build.

Riferimento: [Il file `config.json`](../01-config.md).

## Differenza sostanziale rispetto a `countries`

In sintesi:
- `countries`: pipeline traduttiva composita e arricchita (campi multipli + keywords derivate);
- altri dataset: pipeline traduttiva essenziale (`name` + eventuali label categorie).

Questa distinzione è intenzionale: semplifica la manutenzione dove la semantica applicativa non richiede un arricchimento lessicale complesso.
