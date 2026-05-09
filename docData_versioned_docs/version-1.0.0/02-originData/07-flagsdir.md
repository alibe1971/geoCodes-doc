---
slug: /originData/flags
sidebar_position: 8
sidebar_label: La cartella `Flags`
---

# La cartella `Flags`

## Struttura

La cartella, che si trova nel percorso `Data/origin`, contiene la sotto cartella `Countries` che ha per ogni paese tre file svg, contenenti tre formati di dimensione per la bandiera del paese in oggetto.

Nel nostro esempio, per l'Irlanda:

import Flags from '/SHARED/codeBlocks/data/globalFileSystem.Data.Origin.Flags.md'

<Flags />

All'interno della cartella `Countries` vi è la lista delle cartelle dei paesi, identificati con standard [ISO 3166-1 alpha-2](https://it.wikipedia.org/wiki/ISO_3166-1_alpha-2), con codifica a due lettere (in minuscolo), e - all'interno di ogni cartella - tre file svg con la raffigurazione della bandiera con diverse proporzioni tra lunghezza ed altezza:
- 1x1.svg;
- 4x3.svg;
- 10x7.svg.

Nella costruzione del dataset finale, viene usato solo un formato, che può essere scelto nel file `buildConfig.json`.


## Qualche esempio

Riportiamo qualche esempio riportando in tabella le bandiera in formato emoji e in svg nei tre diversi formati per:

- Irlanda
- Afganistan
- Antartico


import FlagsExample from '/SHARED/codeBlocks/data/origin/flags.examples.md'

<FlagsExample />


