---
slug: /dataCategories
sidebar_position: 2
sidebar_label: Categorie dei dati
---

# Categorie dei dati 

Le categorie dei dati si dividono in due macroclassi:
- le classi di catalogazione
- le lingue usate
  - la descrizione delle proprietà che usano codici per indicare delle categorie


## La classe di catalogazione

Abbiamo già visto nella presentazione generale del progetto che le classi di catalogazione sono:

- stati
- organizzazioni geopolitiche
- valute
- lingue
- scripts

Tali classi sono ovviamente interrelate tra loro.

Uno stato conterrà proprietà per le valute e per le lingue; una organizzazione geopolitica avrà una proprietà lista nella quale vengono indicati gli stati che aderiscono ad essan una lingua usa scripts per la rappresentazione grafica dei fonemi.

La struttura del dataset finale è quindi disegnata in modo tale che le singole applicazioni in determinati linguaggi di script potranno effettuare le interrogazioni nel dataset in modo completo ed elastico.


## Le lingue usate

Ogni elemento di qualsiasi classe di catalogazione ha diverse proprietà.

Alcune di esse sono - per così dire - "statiche", ossia che non sono relative alla lingua usata dall'utente finale.

Ad esempio, prendiamo il codice `alpha2` per due stati come Irlanda ed Italia; le relative proprietà saranno 

import ExampleAlpha2 from '/SHARED/codeBlocks/data/exampleUsedLanguageAlpha2.md'
import ExampleFullName from '/SHARED/codeBlocks/data/exampleUsedLanguageFullName.md'
import ExampleCategory from '/SHARED/codeBlocks/data/exampleUsedLanguageCategory.md'

<ExampleAlpha2 
    title="Esempio per `alpha2` in `Country`"
    tab0="Irlanda"
    tab1="Italia"
/>

Per altre proprietà, come ad esempio `name` o `fullName`, queste saranno legate alla lingua definita nella chiamata allo script dell'applicazione.  

<ExampleFullName
    title="Esempio per `name` e `fullName`  in `Country`"
    tab0="Irlanda"
    tab1="Italia"
    lang0="Inglese"
    lang1="Italiano"
/>


La struttura del dataset prevede, dunque, anche la possibilità di definire una lingua per avere, al termine di una interrogazione un oggetto utilizzabile nell'applicazione come "tradotto".

### Le descrizioni per le proprietà che indicano delle categorie rappresentate con un codice.

Alcune proprietà relative a una catalogazione, possono usare dei codici standardizzati.
Per ogni lingua è prevista una descrizione specifica per quel codice.

Riportiamo come esempio un risultato dopo la costruzione del dataset nelle applicazioni.

<ExampleCategory
    title="Esempio per `scope` in `Currencies`"
    tab0="EUR"
    tab1="CHE"
    lang0="Inglese"
    lang1="Italiano"
/>

<br /><br /><br /><br /><br /><br /><br /><br /><br />