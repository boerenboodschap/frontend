import { Farm } from "@/models/farm";

interface Props {
  farm: Farm;
}

export default function FarmCard(props: Props) {
  return (
    <div className="flex h-full w-full flex-col rounded-xl bg-secondary-400/50">
      <div className="flex aspect-video items-center justify-center rounded-t-xl bg-accent-500">
        Image
      </div>
      <div className="p-2">
        <h1 className="text-lg font-medium">{props.farm.name}</h1>
        <h2 className="text-md font-normal">€{props.farm.description}</h2>
        <h2 className="text-md font-normal">
          {props.farm.posX} {props.farm.posY}
        </h2>
      </div>
    </div>
  );
}
