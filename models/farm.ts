import { Product } from "./product";
import { Tag } from "./tag";

export type Farm = {
  id: string;
  name: string;
  address?: string;
  description?: string;
  longDescription?: string;
  posX?: number;
  posY?: number;
  url?: string;
  imageSrc?: string;
  coverUrl?: string;
  tags: Tag[];
  hours: Day[];
  products: Product[];
};

type Day = {
  index: number;
  hours: Hour[];
};

type Hour = {
  open: boolean;
  start: string;
  end: string;
};
