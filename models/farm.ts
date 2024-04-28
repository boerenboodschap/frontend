export type Farm = {
  id: string;
  attributes: {
    id?: string;
    name: string;
    description?: string;
    posX: number;
    posY: number;
    imageSrc: string;
    coverUrl: string;
  };
};
