---
slug: /originData/config
sidebar_position: 2
sidebar_label: Il file `config.json`
---

# Il file `config.json`

## Struttura

Questo è il file per la configurazione e si trova nel percorso `Data/origin/config.json`.

import ConfigJson from '/SHARED/codeBlocks/data/origin/config.md'

<ConfigJson />


## Le proprietà del file di configurazione

### La proprietà contenitore `settings`

È un semplice contenitore che contiene le impostazioni per le applicazioni del progetto.

:::note Requisiti

| Regola | Definizione | Livello di controllo |
|-----------|-----------|-----------|
| Tipo | Oggetto non vuoto | Build |
| Presenza obbligatoria | Sì | Build |

:::


La sola configurazione presente riguarda le lingue dell'applicazione.

#### La proprietà contenitore `languages`

La proprietà `settings.languages` contiene le definizioni per le lingue usate nelle app. 

:::note Requisiti

| Regola | Definizione | Livello di controllo |
|-----------|-----------|-----------|
| Tipo | Oggetto non vuoto | Build |
| Presenza obbligatoria | Sì | Build |
:::

##### La proprietà `inPackage`

La proprietà `settings.languages.inPackage` contiene la lista delle lingue che si intendono utilizzare nell'applicazione.

Abbiamo detto che nei dataset utilizzati nelle app alcune proprietà sono relative alla lingua scelta nell'applicazione stessa.

Questa proprietà di configurazione lista tutte le lingue disponibili all'uso e supportate dallo standard [International Components for Unicode (ICU)](https://icu.unicode.org/).


:::note Requisiti

| Regola | Definizione | Livello di controllo |
|-----------|-----------|-----------|
| Tipo | Array non vuoto | Build |
| Presenza obbligatoria | Sì | Build |

:::

###### I valori di `inPackage`

import StandardForLanguages from '../../integrations/standardForLanguages.md'

All'interno dell'array, ogni valore deve rispettare dei requisiti.

::::::note Requisiti

<StandardForLanguages icu="Si" icuCtrl="Build"/>


:::caution[La presenza delle cartelle della lingua in `Data/origin/Translations`]

È un corollario ai requisiti.

Il programma di build trasforma il dataset di origine prendendo anche le proprietà delle traduzioni dalle relative cartelle in `Data/origin/Translations`.

Se quindi la cartella non è presente il programma di build restituisce un errore.

:::

::::::

:::warning[Attenzione!]
Le lingue presenti nella lista `inPackage` definiscono anche il dataset delle traduzioni finale.

Se anche la cartella delle traduzioni è presente, ma la lingua non è definita in questa lista, al momento della costruzione del dataset, le cartelle di traduzione relative a lingue non presenti nella lista verranno semplicemente ignorate e non saranno inserite nelle cartelle di destinazione del `built`.
:::

##### La proprietà `default`

La proprietà `settings.languages.default` definisce la lingua di default, che ha due principali funzioni nelle applicazioni del progetto:

- qualora non venga definita una lingua, verrà presa quella di default;
- qualora la lingua non di default non abbia presente una proprietà, l'applicazione prenderà il valore della proprietà mancante dal default.

:::note Requisiti

È ovvio che la proprietà segue le stesse regole di quelle definite per i valori di `inPackage`, alle quali si aggiungono altre condizioni.

| Regola | Definizione | Livello di controllo |
|-----------|-----------|-----------|
| Corrispondenza del valore con le chiavi presenti in `inPackage` | La lingua di default deve essere definita anche nella sezione `inPackage`. | Build |
| Completezza nelle traduzioni | Le traduzioni delle proprietà della lingua di default devono essere complete.<br />Vedremo in particolare nel capitolo delle traduzioni le specifiche caratteristiche, ma - in generale per la lingua di default:<br />- tutte le chiavi primarie devono essere presenti e strutturate secondo il tipo di dati definito;<br />- alcune proprietà devono avere obbligatoriamente un valore. | Build |

:::

## Alcuni avvisi e suggerimenti

:::warning[Fallimento dei test]
Le applicazioni del progetto sono state disegnate sul dataset di questo script.

Anche se il dataset viene costruito, ma i test falliscono è necessario provvedere alla soluzione del problema, al fine di evitare malfunzionamenti sulle applicazioni che utilizzano questi dati.
:::

:::tip[Mantenere le proprietà delle traduzioni complete]
Poiché nelle applicazioni del progetto è possibile cambiare anche la lingua di default, è consigliabile avere sempre le traduzioni allineate.
:::

:::tip[Il super default]
Anche se nelle applicazioni del progetto è possibile cambiare la lingua di default, il valore della proprietà `default` definita nel file di configurazione, verrà assunta come una sorta di `super default`.

Ciò significa che nel meccanismo di sostituzione in caso di traduzione non presente, viene utilizzato questo percorso:
- lingua scelta;
- lingua di default definita dinamicamente nell'applicazione;
- lingua di default definita nel file `config.json`.

Per questo motivo le regole sulla lingua di default sono molto stringenti.
:::

:::tip[La lingua inglese]
Il dataset delle traduzioni è stato costruito prendendo come modello le proprietà presenti nella cartella `en`.

A meno di non essere sicuri della completezza dei dati presenti nelle altre cartelle, si consiglia di lasciare sempre `en` come lingua definita di default in `config.json`.

In tal modo si avrà sempre la certezza di avere un valore sempre presente.
:::