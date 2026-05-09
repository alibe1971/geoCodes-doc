---
slug: /standard-usati-nel-progetto
sidebar_position: 2
sidebar_label: Gli standard usati nel progetto
---

# I codici in geopolitica

In ambito geopolitico, e soprattutto nelle definizioni internazionali, gli elementi che sono soggetti a catalogazione sono gli stati, intesi come entità che hanno autorità su un territorio (più o meno, ahime!) definito.

La rappresentazione di queste entità (ad esempio negli elenchi) avviene tramite una codifica standard.

Ad esempio la rappresentazione in codice per un paese come gli Stati Uniti d'America o come la Repubblica d'Irlanda può avvenire secondo standard diversi:

- Stati Uniti d'America: `US`, oppure `USA`, oppure `840`;
- Repubblica d'Irlanda: `IE`, oppure `IRL`, oppure `372`.

Sono questi diversi codici standard per poter identificare lo stesso concetto.

Questo vale anche per le lingue, le associazioni tra stati, le valute, ecc.


## Gli standard usati nel progetto.

Il progetto geoCodes si basa sulla catalogazione di:
- stati,
- organizzazioni geopolitiche,
- valute,
- lingue,
- script della rappresentazione dei caratteri (ad esempio per una lingua).

Per tale operazione vengono usati diversi standard.

### Codici per l'identificazione degli stati

Vengono usati i codici [**ISO 3166**](https://www.iso.org/iso-3166-country-codes.html)

#### Codice ISO 3166-1 alpha-2

È un codice alfabetico che identifica gli stati tramite due caratteri.

Nell'esempio sopra riportato i relativi codici per Stati Uniti ed Irlanda sono:

- Stati Uniti d'America: `US`;
- Repubblica d'Irlanda: `IE`.


#### Codice ISO 3166-1 alpha-3

È un codice alfabetico che identifica gli stati tramite tre caratteri.

Nell'esempio sopra riportato i relativi codici per Stati Uniti ed Irlanda sono:

- Stati Uniti d'America: `USA`;
- Repubblica d'Irlanda: `IRL`.

#### Codice numerico

Un codice della lungezza di tre caratteri numerici, che viene mantenuto dalla [**Divisione Statistica delle Nazioni Unite**](https://unstats.un.org/UNSDWebsite/) e che provvede alla suddivisione di diverse aree geografiche, inclusi gli stati.

Tale catalogo metodologico ha la denominazione [**M49**](https://unstats.un.org/unsd/methodology/m49/).

Nell'esempio sopra riportato i relativi codici per Stati Uniti ed Irlanda sono:

- Stati Uniti d'America: `840`;
- Repubblica d'Irlanda: `372`.


### Codici per l'identificazione dei raggruppamenti geopolitici

La catalogazione usata nel progetto prevede anche una lista di raggruppamenti di stati come aree e sottoaree geografiche, organizzazioni finanziarie, militari, politiche, ecc.

Tale identificazione pone dei problemi nell'uso degli standard come fatto per l'identificazione dei singoli stati.

Ad esempio il codice standard `alpha-2` esiste solo per entità come l'_Unione Europea_ (EU) o l'_Eurozona_ (EZ), ma non per altre entità come ad esempio l'_Organizzazione Mondiale del Commercio_ o l'_Organizzazione per la Cooperazione e lo Sviluppo Economico_.

Altresì per le aree geografiche come i continenti e i raggruppamenti geografici di macro zone (come ad esempio _Europa meridionale_ oppure _Polinesia_, e così via) è possibile avere il codice numerico M49 definito dalle Nazioni Unite, ma non un codice ISO.

In tal caso non essendo possibile utilizzare uno degli standard universalmente riconosciuti, si è provveduto a definire un codice interno come chiave primaria.

La struttura degli elementi per i raggruppamenti geopolitici viene trattata nella specifica sezione.

In questo paragrafo, ciò che è importante sapere è che questo è un esempio di limiti di rappresentazione e di falsificazione degli standard già codificati, che al momento non prevedono questa sezione così variegata.


### Codici per l'identificazione delle valute

Vengono usati i codici [**ISO 4217**](https://www.iso.org/iso-4217-currency-codes.html) nelle notazioni alfabetica e numerica.

Ad esempio ...

#### Codice alfabetico (tre caratteri)

- Euro: `EUR`;
- Dollaro statunitense: `USD`.

#### Codice numerico

- Euro: `978`;
- Dollaro statunitense: `840`.

### Codici per l'identificazione delle lingue

La codifica delle lingue è decisamente molto complessa, essendo essa costituita da macrocategorie, dialetti, sottolinguaggi, diverse forme scritte.

Il catalogo di riferimento di questo progetto è la catalogazione [**ISO 639**](https://www.iso.org/iso-639-language-code).


### Codici per l'identificazione dei fusi orari

Il catalogo di riferimento di questo progetto è la catalogazione dei fusi orari definiti dalla _Internet Assigned Numbers Authority_ ([**IANA**](https://www.iana.org/time-zones)).


### Codici per l'identificazione degli script di rappresentazione grafica dei caratteri.

Come per le lingue, anche in questo caso la catalogazione è alquanto complessa.

Il catalogo di riferimento di questo progetto è la catalogazione [**ISO 15924**](https://www.unicode.org/iso15924/iso15924-codes.html) secondo codici [**UNICODE**](https://www.unicode.org).





