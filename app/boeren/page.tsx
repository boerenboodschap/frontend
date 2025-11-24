import FarmCard from "@/components/farms/FarmCard";
import { Farms } from "@/farms";
import { Farm } from "@/models/farm";

export default function Boeren() {
  const farms: Farm[] = Farms;

  return (
    <div className="flex grow flex-col items-center pb-14">
      <div className="relative flex w-full flex-col gap-4 p-3 md:px-20 lg:px-44">
        <section className="grid gap-4 self-center pb-12 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8 2xl:grid-cols-4">
          {farms.map((Farm: Farm) => (
            <FarmCard key={Farm.name} farm={Farm} />
          ))}
        </section>
      </div>
    </div>
  );
}
