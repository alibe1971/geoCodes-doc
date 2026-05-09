
| Regola | Definizione | Livello di controllo |
|-----------|-----------|-----------|
| Formato | Stringa basata sugli standard di riferimento | Build |
| Sensibilità alle maiuscole/minuscole | No |  |
| Standard di riferimento | - [IETF BCP 47](https://www.rfc-editor.org/info/bcp47)<br />- [ISO 639](https://www.iso.org/iso-639-language-code)<br />- [ISO 3166](https://www.iso.org/iso-3166-country-codes.html) | Build |
| Validazione Supporto [ICU](https://icu.unicode.org/) | {props.icu} | {props.icuCtrl} |
| Presenza della codifica in `languages.json` | Si | Test [TODO] |

Nella definizione della lingua (e degli eventuali script o regioni), è ammesso l’uso sia del **trattino (`-`)** — conforme allo standard [IETF BCP 47](https://www.rfc-editor.org/info/bcp47) — sia del **trattino basso (`_`)**, utilizzato in ambienti POSIX o sistemi legacy ([POSIX locale identifiers](https://pubs.opengroup.org/onlinepubs/9699919799/basedefs/V1_chap04.html#tag_04_06)).  
**Entrambi i formati sono accettati come input, ma verranno normalizzati internamente.**

Ad esempio:
- en
- en-GB
- zh_TW
- zh-CN
- sr-Cyrl
- sr_Latn
- uz-Arab_AF

**Il programma di build:**
- converte la stringa secondo lo standard BCP 47 (con il trattino `-`)
- normalizza:
    - la **lingua** in minuscolo (es: `uz`);
    - lo **script** in PascalCase (prima lettera maiuscola, es: `Arab`);
    - la **regione** in maiuscolo (es: `AF`).

