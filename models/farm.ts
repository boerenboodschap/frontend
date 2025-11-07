import { Product } from "./product";
import { Tag } from "./tag";

export type Farm = {
  name: string;
  description?: string;
  posX?: number;
  posY?: number;
  url?: string;
  imageSrc?: string;
  coverUrl?: string;
  tags: Tag[];
  products: Product[];
};
