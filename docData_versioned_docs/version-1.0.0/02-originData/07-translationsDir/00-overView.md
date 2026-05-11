---
slug: /originData/translations
id: originData-translations-overview
sidebar_position: 1

---

# La cartella delle traduzioni

import TranslationsTree from '/SHARED/codeBlocks/data/origin/translations.tree.md'

## Ruolo della cartella `Data/origin/Translations`

La cartella `Translations` contiene i contenuti testuali localizzati che vengono associati agli oggetti principali del dataset:
- `countries`
- `currencies`
- `geoSets`
- `languages`
- `scripts`

Struttura sintetica di riferimento:

<TranslationsTree />

In fase di build, queste traduzioni non sono opzionali per la lingua di default: sono parte integrante del contratto dati delle app.

## Relazione diretta con `config.json`

Il comportamento della cartella `Translations` è governato dal file di configurazione, in particolare da:
- `settings.languages.inPackage`
- `settings.languages.default`

Riferimento: [Il file `config.json`](../01-config.md).

In pratica:
1. il build legge solo le lingue dichiarate in `inPackage`;
2. per ogni lingua dichiarata, si aspetta la cartella corrispondente in `Data/origin/Translations/<lang>/`;
3. se una cartella lingua non esiste ma la lingua è in `inPackage`, il build fallisce;
4. se una cartella lingua esiste ma la lingua non è in `inPackage`, quella cartella è ignorata.

Questa regola è coerente anche con l’uso nelle app consumer. Nel package PHP, ad esempio, le lingue disponibili sono lette dalla configurazione dati (`src/Data/config.php`) e non dall’enumerazione fisica delle cartelle.

## Struttura generale

Per ogni lingua, la struttura minima è:

- `Data/origin/Translations/<lang>/countries.json`
- `Data/origin/Translations/<lang>/currencies.json`
- `Data/origin/Translations/<lang>/geoSets.json`
- `Data/origin/Translations/<lang>/languages.json`
- `Data/origin/Translations/<lang>/scripts.json`

Inoltre, per i dataset che hanno traduzioni di categorie, è presente:

- `Data/origin/Translations/<lang>/Categories/...`

Le categorie tradotte attualmente riguardano:
- `currencies` (`scope`)
- `geoSets` (`scope`)
- `languages` (`scope`, `type`)
- `scripts` (`writingDirection`)

Per `countries`, invece, non è previsto un file in `Categories`: la gestione è specifica e descritta nel capitolo dedicato.

## Come vengono usate nelle app

Le app non consumano “file di traduzione” come blocchi separati da mostrare direttamente.
Consumano un dataset strutturato dove:
- i dati statici restano nella collezione principale;
- le traduzioni entrano in mappe per lingua;
- i fallback sono pilotati dalla lingua di default.

Il punto chiave è che il sistema è **configuration-driven**: la scelta delle lingue utili è nel `config`, non nella presenza casuale di cartelle.

Ne deriva una regola operativa semplice:
- mantenere allineati `inPackage` e cartelle reali;
- mantenere completa la lingua di default;
- considerare irrilevanti (finché non aggiunte in `inPackage`) eventuali cartelle extra.

## Distinzione importante tra `countries` e altri dataset

Il dataset `countries` applica una pipeline traduzioni più articolata (proprietà multiple e normalizzazioni aggiuntive), mentre gli altri dataset seguono una struttura traduttiva più semplice e lineare.

Dettaglio nei capitoli successivi:
- [I file per gli oggetti "countries"](./01-countries.md)
- [I file per gli altri oggetti](./02-others.md)
