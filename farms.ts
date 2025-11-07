import { Farm } from "./models/farm";
import { Tag } from "./models/tag";

export const Farms: Farm[] = [
  {
    name: "Stipkip",
    posX: 51.66558529829427,
    posY: 5.65086231762777,
    imageSrc: "/farms/stipkip.webp",
    url: "https://www.stipkip.nl/",
    description: `
      Eierautomaat in Uden
    `,
    tags: [Tag.poultry],
    products: [],
  },
];
