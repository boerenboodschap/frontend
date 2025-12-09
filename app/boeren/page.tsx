import FarmCard from "@/components/farms/FarmCard";
import { Farms } from "@/farms";
import { Farm } from "@/models/farm";

export default function Boeren() {
  const farms: Farm[] = Farms;

  return (
    <section className="grid h-max w-full grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {farms.map((Farm: Farm) => (
        <FarmCard key={Farm.id} farm={Farm} />
      ))}
    </section>
  );
}
