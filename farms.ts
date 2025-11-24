import { Farm } from "./models/farm";
import { Tag } from "./models/tag";

export const Farms: Farm[] = [
  {
    name: "Duis",
    posX: 51.35365286578953,
    posY: 5.235730706550755,
    imageSrc: "/farms/duis.webp",
    url: "https://www.duisbladel.nl/eierautomaat.html",
    description: `
      eierautomaat in bladel
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
];
