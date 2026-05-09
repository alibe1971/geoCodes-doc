---
slug: /originData
id: originData-overview
sidebar_position: 1

---

# La struttura dei dati di origine

I dati di origine sono presenti nella struttura dei file nella cartella `Data/origin`.

Tale cartella è sinteticamente così strutturata

import DataOrigin from '/SHARED/codeBlocks/data/globalFileSystem.Data.Origin.md'

<DataOrigin />

Ovviamente esistono anche le cartelle per le altre bandiere e le altre lingue, ma in generale ed esclusivamente come esempio, terremo in considerazione lo stato "Irlanda" e la lingua "inglese".

Le proprietà che abbiamo definito "statiche" nel precedente capitolo si trovano nei file presenti direttamente nella cartella `Data/origin`:
- config.json
- countries.json
- currencies.json
- geoSets.json
- languages.json
- scripts.json

Anche le bandiere SVG in `Data/origin/Flags/Countries` possono considerarsi parte delle proprietà statiche, in quanto verranno inserite in una proprietà dell'oggetto finale **countries**.

Le sottocartelle (ed i relativi file in esse) nel percorso `Data/origin/Translations/` definiscono le lingue per le proprietà **dinamiche**.


Vediamo ora nel dettaglio tutte le proprietà, file per file.


