import { Farm } from "./models/farm";
import { Tag } from "./models/tag";

export const Farms: Farm[] = [
  {
    id: "duis",
    name: "Duis",
    posX: 51.35365286578953,
    posY: 5.235730706550755,
    imageSrc: "/farms/duis.webp",
    url: "https://www.duisbladel.nl/eierautomaat.html",
    description: `
      Eierautomaat in bladel.
    `,
    longDescription: ``,
    tags: [Tag.poultry],
    hours: [
      {
        index: 0,
        hours: [
          {
            open: true,
            start: "07:30",
            end: "21:30",
          },
        ],
      },
    ],
    products: [
      {
        id: "duis-eieren",
        name: "eieren",
        description: "1 ster scharreleieren",
      },
    ],
  },
  {
    id: "kaasboerderij-de-ruurhoeve",
    name: "Kaasboerderij De Ruurhoeve",
    posX: 51.38051760028651,
    posY: 5.279575149292528,
    imageSrc: "/farms/ruurhoeve.webp",
    url: "http://www.ruurhoeve.nl/",
    description: `
      Kaasboerderij in Hoogeloon
    `,
    longDescription: ``,
    tags: [Tag.dairy],
    hours: [],
    products: [
      {
        id: "ruurhoeve-kaas",
        name: "kaas",
      },
    ],
  },
  {
    id: "genneper-hoeve",
    name: "Genneper Hoeve",
    posX: 51.417277,
    posY: 5.485186,
    imageSrc: "/farms/genneper-hoeve.webp",
    url: "https://www.genneperhoeve.nl/",
    description: `
        Biologische boerderijwinkel en melktap in Eindhoven.
      `,
    longDescription: `Biologische boerderij met boerderijwinkel, melktap, en kaasmakerij. Veel producten van eigen bedrijf, zoals eieren, vlees, kaas en groenten.`,
    tags: [Tag.dairy, Tag.meat, Tag.vegetables, Tag.poultry, Tag.organic],
    hours: [
      {
        index: 0, // Maandag
        hours: [
          {
            open: true,
            start: "10:00",
            end: "17:00",
          },
        ],
      },
      {
        index: 1, // Dinsdag t/m Zaterdag
        hours: [
          {
            open: true,
            start: "10:00",
            end: "17:00",
          },
        ],
      },
      {
        index: 6, // Zondag
        hours: [
          {
            open: true,
            start: "10:00",
            end: "17:00",
          },
        ],
      },
    ],
    products: [
      { id: "genneper-hoeve-kaas", name: "kaas" },
      { id: "genneper-hoeve-groenten", name: "groenten" },
      { id: "genneper-hoeve-melk", name: "melk (melktap)" },
    ],
  },
  {
    id: "de-stoerderij",
    name: "De Stoerderij",
    posX: 51.52047,
    posY: 5.46731,
    imageSrc: "/farms/de-stoerderij.webp",
    url: "https://www.destoerderij.nl/",
    description: `
        Waterbuffelboerderij met winkel in Son en Breugel.
      `,
    longDescription: `Boerderij met waterbuffels die het hele jaar buiten lopen. Verkoop van buffelvlees, buffelmelkproducten zoals yoghurt en kaas, en ijs.`,
    tags: [Tag.dairy, Tag.meat],
    hours: [], // Controleer de actuele openingstijden via de URL
    products: [
      { id: "stoerderij-buffelkaas", name: "buffelkaas" },
      { id: "stoerderij-buffelvlees", name: "buffelvlees" },
      { id: "stoerderij-buffelyoghurt", name: "buffelyoghurt" },
    ],
  },
  {
    id: "philips-fruittuin",
    name: "Philips Fruittuin",
    posX: 51.46468,
    posY: 5.44186,
    imageSrc: "/farms/philips-fruittuin.webp",
    url: "https://www.philipsfruittuin.nl/",
    description: `
        Landwinkel en fruitteeltbedrijf in Eindhoven.
      `,
    longDescription: `Landwinkel op het terrein van de Philips Fruittuin. Verkoop van vers fruit van eigen boomgaard (appels, peren), sappen en diverse streekproducten.`,
    tags: [Tag.fruit, Tag.processed],
    hours: [
      {
        index: 1, // Dinsdag t/m Zaterdag
        hours: [
          {
            open: true,
            start: "09:00",
            end: "17:00",
          },
        ],
      },
      // Maandag en Zondag gesloten/variabel - check de website
    ],
    products: [
      { id: "fruittuin-appels", name: "appels" },
      { id: "fruittuin-peren", name: "peren" },
      { id: "fruittuin-sap", name: "appelsap/perensap" },
    ],
  },
  {
    id: "kempenlust",
    name: "KempenLust",
    posX: 51.39006, // Knegsel
    posY: 5.35249,
    imageSrc: "/farms/kempenlust.webp",
    url: "",
    description: `
        Vleesveehouderij en boerderijwinkel in Knegsel.
      `,
    longDescription: `Verkoop van rundvlees- en varkensvleespakketten van eigen vee, Brabantse Worstenbroodjes en streekproducten.`,
    tags: [Tag.meat, Tag.processed, Tag.worstenbrood],
    hours: [
      {
        index: 1, // Dinsdag
        hours: [
          {
            open: true,
            start: "00:00", // Op afspraak - vul dit in naar gelang de daadwerkelijke uren
            end: "00:00",
          },
        ],
      },
      // Openingstijden vaak op afspraak, zie website voor actuele uren.
    ],
    products: [
      { id: "kempenlust-rundvlees", name: "rundvlees" },
      { id: "kempenlust-varkensvlees", name: "varkensvlees" },
      { id: "kempenlust-worstenbroodjes", name: "worstenbroodjes" },
    ],
  },
  {
    id: "brabantse-hei",
    name: "Brabantse Hei",
    posX: 51.34151, // Hooge Mierde
    posY: 5.17647,
    imageSrc: "/farms/brabantse-hei.webp", // Fictieve padnaam
    url: "https://www.brabantsehei.nl/boerderijwinkel/",
    description: `
        Boerderijwinkel met uitgebreid assortiment in Hooge Mierde.
      `,
    longDescription: `Verkoop van vlees van eigen dikbil-koeien (KempenVlees), zuivelproducten, ambachtelijk ijs, eieren, kaas, worstenbrood en streekproducten.`,
    tags: [Tag.meat, Tag.dairy, Tag.poultry, Tag.processed],
    hours: [
      {
        index: 0, // Alle dagen, maar op afspraak (bellen)
        hours: [
          {
            open: true,
            start: "00:00",
            end: "00:00",
          },
        ],
      },
    ],
    products: [
      { id: "brabantse-hei-vlees", name: "rundvlees (KempenVlees)" },
      { id: "brabantse-hei-ijs", name: "ambachtelijk ijs" },
      { id: "brabantse-hei-kaas", name: "kaas en zuivel" },
    ],
  },
  {
    id: "t-schop",
    name: "'t Schop",
    posX: 51.48839, // Hilvarenbeek
    posY: 5.10986,
    imageSrc: "/farms/t-schop.webp", // Fictieve padnaam
    url: "https://www.t-schop.nl/",
    description: `
        Biologische boerderijwinkel in Hilvarenbeek.
      `,
    longDescription: `Uitgebreid assortiment biologische producten, waaronder zuivel, groenten, fruit, vlees en andere levensmiddelen om een complete maaltijd samen te stellen.`,
    tags: [Tag.organic, Tag.dairy, Tag.vegetables, Tag.meat],
    hours: [
      {
        index: 2, // Woensdag
        hours: [
          {
            open: true,
            start: "09:00",
            end: "18:00",
          },
        ],
      },
      // Check de website voor alle openingstijden (vaak Woensdag t/m Zaterdag)
    ],
    products: [
      { id: "schop-bio-groenten", name: "biologische groenten/fruit" },
      { id: "schop-bio-zuivel", name: "biologische zuivel" },
      { id: "schop-bio-vlees", name: "biologisch vlees" },
    ],
  },
  {
    id: "de-walhoeve",
    name: "De Walhoeve",
    posX: 51.52047, // Goirle
    posY: 5.03975,
    imageSrc: "/farms/de-walhoeve.webp", // Fictieve padnaam
    url: "https://www.walhoeve.nl/",
    description: `
        Boerderijwinkel in Goirle met vlees uit eigen stal.
      `,
    longDescription: `Naast varkensvlees uit eigen stal, verkopen ze ook kip, broodbeleg, kaas, zuivel, groente, fruit, honing, jam, sappen en streekbieren.`,
    tags: [Tag.meat, Tag.dairy, Tag.vegetables, Tag.fruit, Tag.processed],
    hours: [
      {
        index: 3, // Donderdag
        hours: [
          {
            open: true,
            start: "09:00",
            end: "17:00",
          },
        ],
      },
      // Check de website voor alle openingstijden (Donderdag t/m Zaterdag)
    ],
    products: [
      { id: "walhoeve-varkensvlees", name: "varkensvlees" },
      { id: "walhoeve-kaas", name: "kaas en zuivel" },
      {
        id: "walhoeve-streekproducten",
        name: "streekproducten (groente, fruit, etc.)",
      },
    ],
  },

  // Nieuwe toevoegingen uit de Kempen
  {
    id: "polsdonk",
    name: "Vleesboerderij Polsdonk",
    posX: 51.50369, // Oirschot
    posY: 5.30514,
    imageSrc: "/farms/polsdonk.webp", // Fictieve padnaam
    url: "https://www.polsdonk.nl/",
    description: `
        Vleesboerderij in Oirschot met winkel en webshop.
      `,
    longDescription: `Gespecialiseerd in puur en eerlijk vlees van eigen boerderij: rund-, varkens-, en lamsvlees. Ook belegde broodjes en soep.`,
    tags: [Tag.meat, Tag.processed],
    hours: [
      {
        index: 4, // Vrijdag
        hours: [
          {
            open: true,
            start: "10:00",
            end: "17:00",
          },
        ],
      },
      {
        index: 5, // Zaterdag
        hours: [
          {
            open: true,
            start: "10:00",
            end: "15:00",
          },
        ],
      },
    ],
    products: [
      { id: "polsdonk-rundvlees", name: "rundvlees" },
      { id: "polsdonk-varkensvlees", name: "varkensvlees" },
      { id: "polsdonk-lamsvlees", name: "lamsvlees" },
    ],
  },
  {
    id: "onze-boerderij-reusel",
    name: "Onze Boerderij Reusel",
    posX: 51.36531, // Reusel
    posY: 5.13251,
    imageSrc: "/farms/onze-boerderij-reusel.webp", // Fictieve padnaam
    url: "",
    description: `
        Boerderijautomaat in Reusel. Dagelijks geopend.
      `,
    longDescription: `Automaat gevuld met producten van eigen teelt en verwerking, zoals aardappelen, krieltjes, en verse friet. Ideaal voor 24/7 shoppen.`,
    tags: [Tag.vegetables, Tag.processed, Tag.vending_machine],
    hours: [
      {
        index: 0, // Alle dagen
        hours: [
          {
            open: true,
            start: "06:00",
            end: "22:00",
          },
        ],
      },
    ],
    products: [
      { id: "boerderij-reusel-aardappelen", name: "aardappelen" },
      { id: "boerderij-reusel-friet", name: "verse friet" },
    ],
  },
  {
    id: "de-wessenhoeve",
    name: "De Wessenhoeve",
    posX: 51.57948, // Liempde
    posY: 5.37198,
    imageSrc: "/farms/de-wessenhoeve.webp", // Fictieve padnaam
    url: "https://www.dewessenhoeve.nl/",
    description: `
        Boerderijwinkel met vleesautomaat (24/7) in Liempde.
      `,
    longDescription: `Verkoop van Hereford rundvlees, varkensvlees en kip in de winkel en via de 24/7 automaat. Ook kaas, zuivel, en streekproducten.`,
    tags: [Tag.meat, Tag.dairy, Tag.processed, Tag.vending_machine],
    hours: [],
    products: [
      { id: "wessenhoeve-hereford-vlees", name: "Hereford rundvlees" },
      { id: "wessenhoeve-varkensvlees", name: "varkensvlees" },
      { id: "wessenhoeve-kaas", name: "kaas" },
    ],
  },
  {
    id: "doortjeshoeve",
    name: "Doortjeshoeve",
    posX: 51.35372, // Lage Mierde
    posY: 5.14819,
    imageSrc: "/farms/doortjeshoeve.webp", // Fictieve padnaam
    url: "https://www.doortjeshoeve.nl/",
    description: `
        Biologische Melkveehouderij met verkoop van zuivel.
      `,
    longDescription: `Verkoop van Biologische zuivelproducten zoals melk, yoghurt, en kwark, direct van de koe.`,
    tags: [Tag.dairy, Tag.organic],
    hours: [], // Openingstijden op de website checken
    products: [
      { id: "doortjeshoeve-melk", name: "biologische melk" },
      { id: "doortjeshoeve-yoghurt", name: "biologische yoghurt" },
    ],
  },

  // 28/01/2026

  {
    id: "onb-022",
    name: "Melktap Vinkel",
    posX: 51.71454,
    posY: 5.45231,
    imageSrc: "/farms/onb-022.webp",
    url: "https://www.melktapvinkel.nl/",
    address: "Van Rijckevorselweg 13, 5381 GX Vinkel",
    description:
      "Een moderne melktap waar je zelf verse rauwe melk kunt tappen, aangevuld met diverse streekproducten.",
    longDescription: "",
    tags: [Tag.dairy, Tag.eggs],
    hours: [],
    products: [],
  },
  {
    id: "onb-023",
    name: "MaMa's Streekproducten",
    posX: 51.72973,
    posY: 5.43582,
    imageSrc: "/farms/onb-023.webp",
    url: "https://mamasstreekproducten.nl/",
    address: "Kerkstraat 23, 5392 CA Nuland",
    description:
      "Een sfeervolle landwinkel met een passie voor lokale producten en op maat gemaakte cadeaupakketten.",
    longDescription: "",
    tags: [Tag.meat, Tag.dairy],
    hours: [],
    products: [],
  },
  {
    id: "onb-024",
    name: "Boerderijwinkel Smits",
    posX: 51.30312,
    posY: 5.57245,
    imageSrc: "/farms/onb-024.webp",
    url: "https://boerderijwinkelsmits.nl/",
    address: "t Winkel 3A, 6027 NT Soerendonk",
    description:
      "Gespecialiseerd in verse groenten en fruit, met een eigen keuken voor huisgemaakte salades.",
    longDescription: "",
    tags: [Tag.vegetables, Tag.fruit, Tag.eggs],
    hours: [],
    products: [],
  },
  {
    id: "onb-025",
    name: "Derks Boerderijwinkel",
    posX: 51.64152,
    posY: 5.96123,
    imageSrc: "/farms/onb-025.webp",
    url: "https://www.derksboerderijwinkel.nl/",
    address: "Oude Waranda 2, 5836 BC Sambeek",
    description:
      "Bekend om de eigen teelt van asperges, aardbeien en aardappelen direct van het zand van Sambeek.",
    longDescription: "",
    tags: [Tag.vegetables, Tag.fruit],
    hours: [],
    products: [],
  },
  {
    id: "onb-026",
    name: "Op het Erf",
    posX: 51.64834,
    posY: 5.47461,
    imageSrc: "/farms/onb-026.webp",
    url: "",
    address: "Aa-brugstraat 4a, 5473 GG Heeswijk-Dinther",
    description:
      "Een kleinschalige boerderij met een passie voor MRIJ-koeien en eerlijke voedselproductie.",
    longDescription: "",
    tags: [Tag.meat, Tag.dairy],
    hours: [],
    products: [],
  },
  {
    id: "onb-027",
    name: "Genneper Hoeve",
    posX: 51.42151,
    posY: 5.48065,
    imageSrc: "/farms/onb-027.webp",
    url: "https://www.genneperhoeve.nl/",
    address: "Tongelreeppad 1, 5644 RZ Eindhoven",
    description:
      "Biologische stadsboerderij in Eindhoven waar natuur, landbouw en zorg samenkomen.",
    longDescription: "",
    tags: [Tag.cheese, Tag.dairy, Tag.bio, Tag.bread],
    hours: [],
    products: [],
  },
  {
    id: "onb-028",
    name: "Philips Fruittuin",
    posX: 51.46473,
    posY: 5.42842,
    imageSrc: "/farms/onb-028.webp",
    url: "https://philipsfruittuin.nl/",
    address: "Oirschotsedijk 14a, 5651 GC Eindhoven",
    description:
      "Een historische boomgaard van 12 hectare voor de teelt van appels, peren en pruimen.",
    longDescription: "",
    tags: [Tag.fruit],
    hours: [],
    products: [],
  },
  {
    id: "onb-029",
    name: "Landwinkel Valenkamp",
    posX: 51.72145,
    posY: 5.37891,
    imageSrc: "/farms/onb-029.webp",
    url: "https://www.het-groene-erf.nl/",
    address: "Kruisstraat 58, 5249 PA Rosmalen",
    description:
      "Onderdeel van 'Het Groene Erf', gespecialiseerd in eigen lamsvlees en streekproducten.",
    longDescription: "",
    tags: [Tag.meat, Tag.vegetables],
    hours: [],
    products: [],
  },
  {
    id: "onb-030",
    name: "Vermeulen Melkvee",
    posX: 51.68541,
    posY: 5.80554,
    imageSrc: "/farms/onb-030.webp",
    url: "https://boerderijvermeulen.wordpress.com/",
    address: "Noordelijke Hoefseweg 10, 5454 NK Sint Hubert",
    description:
      "Een educatieve melkveehouderij waar je terecht kunt voor verse melk en workshops.",
    longDescription: "Educatieboerderij, Klasseboeren, Op afspraak",
    tags: [Tag.dairy],
    hours: [],
    products: [],
  },
  {
    id: "onb-031",
    name: "Farmshop Berlicum",
    posX: 51.67052,
    posY: 5.40853,
    imageSrc: "/farms/onb-031.webp",
    url: "https://farmshopberlicum.nl/",
    address: "Werststeeg 17, 5258 TA Berlicum",
    description:
      "Een moderne boerderijwinkel met een focus op aardappelen en seizoensgroenten.",
    longDescription: "",
    tags: [Tag.vegetables, Tag.fruit, Tag.eggs],
    hours: [],
    products: [],
  },
  {
    id: "onb-032",
    name: "Hof Eyghentijds",
    posX: 51.71025,
    posY: 5.37241,
    imageSrc: "/farms/onb-032.webp",
    url: "https://hofeyghentijds.nl/",
    address: "Lunerkampweg 5, 5245 NB Rosmalen",
    description:
      "Een unieke locatie voor inspiratie, rust en eerlijke producten uit de eigen streek.",
    longDescription: "Op reservering, Inspiratiecentrum, Natuurlijke omgeving",
    tags: [],
    hours: [],
    products: [],
  },

  // 28/01/2026 stuk limburg
  //

  {
    id: "NB-NUE-001",
    name: "Kwekerij Jansen",
    posX: 51.46512,
    posY: 5.54921,
    imageSrc: "/farms/nb-nue-001.webp",
    url: "https://www.kwekerij-jansen.nl",
    address: "Boord 14, 5674 ND Nuenen",
    description: "Focus op eigen teelt van asperges en seizoensproducten.",
    longDescription:
      "Verkoopkanaal: Winkel. Gespecialiseerd in asperges en seizoensgebonden groenten.",
    tags: [Tag.asperges, Tag.seizoensproducten],
    hours: [],
    products: [],
  },
  {
    id: "NB-SOM-001",
    name: "Boerderijwinkel van de Plak",
    posX: 51.41123,
    posY: 5.71215,
    imageSrc: "/farms/nb-som-001.webp",
    url: "https://www.boerderijwinkelvandeplak.nl",
    address: "Boerenkamplaan 54, 5712 AG Someren",
    description: "Historisch bedrijf met sterke focus op kringlooplandbouw.",
    longDescription:
      "Verkoopkanaal: Winkel. Een breed assortiment aan verse producten direct van het land.",
    tags: [],
    hours: [],
    products: [],
  },
  {
    id: "LI-OSP-001",
    name: "Bo-Vers beej Chantalle",
    posX: 51.29641,
    posY: 5.78652,
    imageSrc: "/farms/li-osp-001.webp",
    url: "https://www.boversbeejchantalle.nl",
    address: "Bochtstraat 8, 6035 SH Ospel",
    description: "Combineert eigen varkensvlees met een breed versassortiment.",
    longDescription:
      "Verkoopkanaal: Winkel. Bekend om kwaliteitsvlees en lokale streekproducten.",
    tags: [Tag.varkensvlees],
    hours: [],
    products: [],
  },
  {
    id: "NB-HEL-001",
    name: "'t Melkhuisje",
    posX: 51.46428,
    posY: 5.64539,
    imageSrc: "/farms/nb-hel-001.webp",
    url: "https://www.facebook.com/tmelkhuisjehelmond",
    address: "Goorsebaan 15, 5706 LG Helmond",
    description: "Bekend om de melktapautomaat (sinds 2008).",
    longDescription:
      "Verkoopkanaal: Automaat. Verse melk direct van de koe via de automaat.",
    tags: [Tag.dairy, Tag.vierentwintiguur],
    hours: [],
    products: [],
  },
  {
    id: "LI-ROE-001",
    name: "Familie Schreurs - Oet Remunj",
    posX: 51.20315,
    posY: 6.02741,
    imageSrc: "/farms/li-roe-001.webp",
    url: "https://www.schreursroermond.nl",
    address: "t Spik 181, 6042 KV Roermond",
    description: "Gevestigde versboerderij met focus op vakmanschap en passie.",
    longDescription:
      "Verkoopkanaal: Winkel. Specialist in groenten, fruit en ambachtelijke producten.",
    tags: [],
    hours: [],
    products: [],
  },
  {
    id: "NB-VAL-001",
    name: "Gijsbers Tuinbouw",
    posX: 51.34182,
    posY: 5.45228,
    imageSrc: "/farms/nb-val-001.webp",
    url: "https://www.gijsberstuinbouw.nl",
    address: "Kromstraat 1, 5554 AA Valkenswaard",
    description:
      "24/7 vers-automaat en fysieke winkel voor asperges en aardbeien.",
    longDescription:
      "Verkoopkanaal: Beide. Veelzijdige tuinbouw met focus op zachtfruit en asperges.",
    tags: [Tag.asperges],
    hours: [],
    products: [],
  },
  {
    id: "NB-SOM-002",
    name: "Boerderijwinkel Smits",
    posX: 51.30456,
    posY: 5.57891,
    imageSrc: "/farms/nb-som-002.webp",
    url: "https://www.boerderijwinkelsmits.nl",
    address: "t Winkel 3A, 6027 NT Soerendonk",
    description: "Biedt ook fruitbezorging aan bedrijven.",
    longDescription:
      "Verkoopkanaal: Winkel. Verse groenten en fruit voor zowel particulieren als zakelijke klanten.",
    tags: [Tag.business, Tag.fruit],
    hours: [],
    products: [],
  },
  {
    id: "NB-GEM-001",
    name: "Puur Brabant",
    posX: 51.57914,
    posY: 5.51347,
    imageSrc: "/farms/nb-gem-001.webp",
    url: "https://www.puurbrabant.nl",
    address: "Lieshoutseweg 26, 5491 RR Nijnsel",
    description: "Familiebedrijf met focus op duurzame regionale producten.",
    longDescription:
      "Verkoopkanaal: Winkel. Eerlijke producten uit de streek met een duurzaam karakter.",
    tags: [],
    hours: [],
    products: [],
  },
  {
    id: "NB-AST-001",
    name: "Sumiran Biologische Boerderij",
    posX: 51.38521,
    posY: 5.78612,
    imageSrc: "/farms/nb-ast-001.webp",
    url: "https://www.sumiran.nl",
    address: "Broekstraat 3, 5725 TL Heusden (Asten)",
    description: "Gespecialiseerd in biologische dynamische landbouw.",
    longDescription:
      "Verkoopkanaal: Winkel. Biologisch-dynamische producten met respect voor mens en dier.",
    tags: [],
    hours: [],
    products: [],
  },
  {
    id: "LI-WEE-001",
    name: "Stadsboerderij Hushoven",
    posX: 51.26839,
    posY: 5.69874,
    imageSrc: "/farms/li-wee-001.webp",
    url: "https://www.hushoven.nl",
    address: "Hushovenerstraat 1, 6003 NT Weert",
    description: "Lokaal verankerd bedrijf met focus op stadsnabije landbouw.",
    longDescription:
      "Verkoopkanaal: Winkel. Verse producten direct aan de rand van de stad Weert.",
    tags: [],
    hours: [],
    products: [],
  },
  {
    id: "LI-HOR-001",
    name: "Landgoed de Gortmeule",
    posX: 51.45821,
    posY: 6.03814,
    imageSrc: "/farms/li-hor-001.webp",
    url: "https://www.gortmeule.nl",
    address: "Gortmeuleweg 1, 5961 PE Horst",
    description:
      "Historische locatie met een breed assortiment lokale verswaren.",
    longDescription:
      "Verkoopkanaal: Winkel. Geniet van verse streekproducten op een prachtig landgoed.",
    tags: [],
    hours: [],
    products: [],
  },
  {
    id: "NB-UDE-001",
    name: "Pluimveebedrijf Stipkip",
    posX: 51.65082,
    posY: 5.63219,
    imageSrc: "/farms/nb-ude-001.webp",
    url: "https://www.stipkip.nl",
    address: "Vloetstraat 1, 5406 VP Uden",
    description: "Eierautomaat verkoop direct bij de producent.",
    longDescription:
      "Verkoopkanaal: Automaat. Altijd verse eieren direct uit de stal via de automaat.",
    tags: [Tag.eggs],
    hours: [],
    products: [],
  },
  {
    id: "NB-OSS-001",
    name: "De Vrije Kip",
    posX: 51.76541,
    posY: 5.55827,
    imageSrc: "/farms/nb-oss-001.webp",
    url: "https://www.devrijekip.nl",
    address: "Zevenbergseweg 1, 5351 PE Berghem",
    description: "Focus op transparante pluimveehouderij en directe afzet.",
    longDescription:
      "Verkoopkanaal: Automaat. Transparantie en dierenwelzijn staan centraal bij deze eierautomaat.",
    tags: [Tag.poultry, Tag.eggs],
    hours: [],
    products: [],
  },
  {
    id: "NB-GEL-001",
    name: "Wasven",
    posX: 51.44219,
    posY: 5.51234,
    imageSrc: "/farms/nb-gel-001.webp",
    url: "https://www.wasven.nl",
    address: "Celebeslaan 30, 5641 AG Eindhoven",
    description: "Groen domein met eigen bakkerij en moestuin.",
    longDescription:
      "Verkoopkanaal: Winkel. Een sociale onderneming met eigen bakkerij, gasterij en landgoedwinkel.",
    tags: [],
    hours: [],
    products: [],
  },
  {
    id: "LI-NED-001",
    name: "Happy-Ei",
    posX: 51.27254,
    posY: 5.73641,
    imageSrc: "/farms/li-ned-001.webp",
    url: "https://www.happy-ei.nl",
    address: "Winnerstraat 13, 6031 NK Nederweert",
    description: "Professionele automatenverkoop van eieren.",
    longDescription:
      "Verkoopkanaal: Automaat. Eenvoudig en snel verse scharreleieren halen bij de automaat.",
    tags: [Tag.eggs],
    hours: [],
    products: [],
  },
];
