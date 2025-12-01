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
    imageSrc: "/farms/kempenlust.webp", // Fictieve padnaam
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
];
