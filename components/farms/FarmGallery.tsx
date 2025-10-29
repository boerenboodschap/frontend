import { Farm } from "@/models/farm";
import FarmCard from "./FarmCard";

export default function FarmGallery() {
  const farms: Array<Farm> = [];
  let i = 0;
  while (i < 5) {
    let Farm: Farm = {
      id: i.toString(),
      name: `test boerderij ${i.toString()}`,
      description: `test omschrijving ${i.toString()}`,
      posX: i + 10,
      posY: i + 10 * i,
      imageSrc: '',
      coverUrl: ''
    };
    farms.push(Farm);
    i++;
  }

  return (
    <div className="grid gap-4 self-center sm:grid-cols-2 md:grid-cols-3 xl:gap-8 2xl:grid-cols-4">
      {farms.map((Farm: Farm) =>
        <FarmCard key={Farm.id} farm={Farm} />
      )}
    </div>
  );
}
