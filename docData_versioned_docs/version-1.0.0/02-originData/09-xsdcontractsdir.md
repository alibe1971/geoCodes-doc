---
slug: /originData/XsdContracts
sidebar_position: 10
sidebar_label: La cartella `XsdContracts`
---

# La cartella `XsdContracts`

## Struttura

La cartella si trova nel percorso `Data/origin/XsdContracts` e contiene i contratti XSD per gli oggetti di output:

- `countries.xsd`, `country.xsd`
- `currencies.xsd`, `currency.xsd`
- `geoSets.xsd`, `geoSet.xsd`
- `languages.xsd`, `language.xsd`
- `scripts.xsd`, `script.xsd`

## Funzione della cartella

La funzione di `XsdContracts` è definire il **contratto applicativo** dei dati serializzati (soprattutto XML) lato consumer.

Questi file non sono il controllo “grezzo” dei sorgenti `Data/origin/*.json`:
- per i sorgenti e le traduzioni vengono generati schemi separati in `xsd/origin`;
- `XsdContracts` invece rappresenta il contratto finale atteso dalle applicazioni.

In altre parole:
- `xsd/origin` = schemi tecnici di validazione dei dataset sorgente e traduzioni;
- `xsd/contracts` = schemi contrattuali degli oggetti che le app usano a runtime.

## Come viene usata nel build

Durante la build del package `geoCodes-data`, in particolare nella pipeline XML:

1. vengono generati gli XSD `origin` (`build/xsd/origin/...`);
2. i file presenti in `Data/origin/XsdContracts` vengono copiati in `build/xsd/contracts/...`.

Questa separazione consente di mantenere distinto:
- il controllo di integrità del sorgente;
- il contratto pubblico degli oggetti consumati dalle app.

## Come viene usata nelle app

Nelle app consumer, i contratti `contracts` sono usati per:
- esporre lo schema associato ad una collezione;
- validare XML generati dalle API/metodi di serializzazione.

Nel package PHP, ad esempio:
- gli XSD sono in `src/Xsd/contracts/`;
- i metodi `getXsd()` / `getXsdSingle()` restituiscono il relativo schema;
- la validazione XML usa questi contratti (`schemaValidate`).

Quindi il collegamento è diretto:
- `XsdContracts` nel data package -> `xsd/contracts` nel built -> `src/Xsd/contracts` nel package applicativo.

## Implicazioni operative

- Una modifica in `XsdContracts` è una modifica di contratto applicativo.
- Va trattata come cambiamento potenzialmente breaking per i consumer.
- Se si cambia uno schema, va verificata la coerenza con:
  - serializzazione runtime delle app;
  - test di validazione XML nelle app consumer.
