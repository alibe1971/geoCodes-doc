---
slug: /definition
sidebar_position: 1
sidebar_label: Definizione del Pacchetto
---

# Pacchetto per la creazione del dataset per il progetto geoCodes


<img src="/sysImg/banners/data-geocodes.png" />


Scritto in **Node.js**, il pacchetto consente l'elaborazione dei dati di origine ricostruendo la struttura finale del dataset in diversi modelli che possono essere usati sia per i pacchetti di questo progetto, che, esternamente, per applicazioni completamente autonome.

In altre parole questa non è una vera e propria applicazione del progetto, ma lo strumento che serve per definire il dataset utilizzato dalle applicazioni.

## Codice sorgente del pacchetto

**<i class="fa-brands fa-github"></i> GitHub: https://github.com/alibe1971/data-geocodes**

import GetPackageSource from '/SHARED/codeBlocks/getPackageSource.mdx'
import PackageInitialization from '/SHARED/codeBlocks/data/packageInitialization.md'

<GetPackageSource title="RECUPERO DEL CODICE SORGENTE" root="data"/>

Una volta entrati nella relativa cartella, occorre inizializzare

:::info[Inizializzazione]
<PackageInitialization title="Inizializzazione del pacchetto node"/>
:::

A questo punto, possiamo iniziare a lavorare.

A seguito, verranno illustrati i principali comandi e le modalità delle operazioni.

## La struttura globale del file system

Il sistema dei file del pacchetto è così strutturato

import GlobalFileSystem from '/SHARED/codeBlocks/data/globalFileSystem.md'

<GlobalFileSystem />

Fondamentalmente è interessante vedere le seguenti parti.

### Parte relativa all'esecuzione del programma

È costituita dal file `build.js` e dalla cartella `Lib`

In essa sono contenuti i file con le istruzioni relative alla costruzione del dataset finale.

### La cartella `Tests`

In essa sono contenuti i test che (opzionalmente) potranno essere eseguiti per controllare la congruità del dataset con le operazioni definite nei vari pacchetti del progetto.

In generale tale congruità è definita da alcune regole di base per le proprietà del dataset:

- alcune proprietà devono essere obbligatoriamente presenti
- ogni proprietà è definita con tipi di valore definiti (stringa, intero, lista, ...)
- il formato delle proprietà (lunghezza, caratteri consentiti, ...) deve essere congruo alle norme definite per il dataset.

I test garantiscono il controllo del dataset finale per l'aderenza a tali norme.


### La cartella `Data`

È costituita da due sottocartelle.

#### La sottocartella `built`

È la cartella che contiene i file del dataset finale elaborato e **viene riscritta ogniqualvolta il programma viene lanciato**.

In essa sono definiti i file pronti per essere utilizzati nei pacchetti del progetto, strutturati secondo le cartelle:

- go
- json (contiene anche versioni minimizzate)
- node
- php
- xml (contiene anche versioni minimizzate ed i relativi schemi XSD)
- yaml

#### La sottocartella `origin`

Contiene i dati primari (che analizzeremo in un apposito capitolo), che possono essere modificati e - qualora esista un errore - corretti.

Una volta effettuate le modifiche, sarà sufficiente lanciare il comando di compilazione per avere la cartella `built` aggiornata.


## Il file `buildConfig.json`

Particolare attenzione richiede il file `buildConfig.json`, la cui utilità è data dal fatto che in esso sono contenute le istruzioni per l'esecuzione del programma `build` (vedi il paragrafo relativo ai comandi) ed in particolare:
- il formato della bandiera per l'oggetto country (`flagsSvgFormat`);
- i percorsi per esportare i dati della cartella `built` anche in un percorso locale manualmente definito (`exportDataDirs`).

La struttura del file è la seguente.

import BuildConfigEmpty from '/SHARED/codeBlocks/data/buildConfigJsonEmpty.md'
import BuildConfigExample from '/SHARED/codeBlocks/data/buildConfigJsonExample.md'

<BuildConfigEmpty />

### La proprietà `flagsSvgFormat`

Definisce il formato delle bandiere nella costruzione degli oggetti `countries`.
È possibile definire tre formati.
- 1x1
- 4x3
- 10x7 (predefinito)

Qualsiasi altro valore nella stringa, verrà ignorato e verrà considerato il valore predefinito.

:::caution Importante!!! Caso di lavoro per un pull request.
Nel caso stiate operando delle modifiche da sottoporre ad un pull request per il miglioramento delle applicazioni del progetto, è importante che la proprietà resti quella predefinita.

Questo perché il cambio di formato potrebbe creare problemi agli utenti che già utilizzano le applicazioni con il dataset predefinito.

Se, invece, state semplicemente creando un vs. dataset personale, potete scegliere il formato che più vi aggrada. 
:::

### La proprietà `exportDataDirs`

Definisce i percorsi di esportazione.

Per ogni tipologia di formato è contenuta una lista (array) ovviamente vuota.

Per definire i percorsi di esportazione è sufficiente inserire il percorso (anche più di uno) nelle relative proprietà che identificano il tipo del pacchetto. 

Ad esempio.

<BuildConfigExample />

In questo caso ho
- due cartelle per il pacchetto `json`
- una cartella per i pacchetti `php`, `go`, `xml`
- nessuna cartella per il pacchetto `yaml` e `node`

Lanciando il comando per costruire il dataset il programma esporterà i dati nelle cartelle definite.

Non è importante se al termine del percorso è presente il `/`.

**La sola cosa importante è che la cartella deve esistere**

Se essa non esiste, il percorso viene semplicemente ignorato.

Come corollario all'affermazione precedente, nel nostro esempio, le proprietà per `yaml` e `node` potrebbero essere anche non presenti.

Resta altresì ovvio, che se vi fosse una proprietà non inclusa nel built del programma (ad esempio `myProperty`), anche questa verrebbe ignorata.



:::danger[Attenzione!!!]
La cartella di destinazione verrà completamente sovrascritta.

Tutti i file verranno cancellati e riscritti di nuovo.
:::


## I comandi per la compilazione del dataset{#commands}

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


Questi sono i comandi definiti nel `package.json`

import ScriptsInPackage from '/SHARED/codeBlocks/data/scriptsInPackage.md'
import Commands from '/SHARED/codeBlocks/data/commands.mdx'

<ScriptsInPackage />

È quindi possibile lanciare i seguenti programmi.




::::::info Comandi npm per il pacchetto
<Tabs>
    <TabItem value="start" label="START" style="min-heigth:200px">
    <Commands cmd="START" titleTerminal="Comando" />
    Il comando **`start`** lancia tutti gli altri comandi in sequenza
    - lint
    - build
    - test
    </TabItem>
    <TabItem value="lint" label="LINT">
    <Commands cmd="LINT" titleTerminal="Comando" />
    Il comando **`lint`** controlla tutte le librerie per l'esecuzione del programma.

    È utile qualora vi siano modifiche sugli script di esecuzione.
    </TabItem>
    <TabItem value="build" label="BUILD">
    <Commands cmd="BUILD" titleTerminal="Comando" />
    Il comando **`build`** è il comando principale che costruisce il dataset per gli altri pacchetti.

    Una volta lanciato la cartella `built` e le cartelle di esportazione definite in `buildConfig.json` sono sostituite con i nuovi contenuti.
:::danger[Attenzione!!!]
Tutti i dati nelle cartelle di esportazione verranno cancellati e sostituiti da quelli nuovi.
:::

    </TabItem>
    <TabItem value="test" label="TEST">
    <Commands cmd="TEST" titleTerminal="Comando" />
    Il comando **`test`** effettua i controlli sulle proprietà del dataset.
:::caution[Attenzione!!!]
Il controllo viene effettuato sul dataset corrente.
Se il `test` viene lanciato prima di effettuare il `build`, il controllo non sarà valido per il dataset modificato.

In generale si consiglia di utilizzare sempre il comando `npm start`, al fine di effettuare un processo completo su tutta la struttura.
:::
    </TabItem>
</Tabs>
::::::









