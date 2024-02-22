import { Farm } from "@/models/farm";
import Card from "../Card";
import Image from "next/image";

interface Props {
  farm: Farm;
}

export default function FarmCard(props: Props) {
  return (
    <Card>
      <div className="flex h-full w-full flex-col rounded-xl">
        {/* <div className="flex aspect-video items-center justify-center rounded-t-xl bg-gray-400">
          Image
        </div> */}
        <Image
          className="flex aspect-video items-center justify-center rounded-t-xl bg-gray-400 object-cover"
          src={props.farm.imageSrc}
          alt="random unsplash image"
          width="500"
          height="500"
        ></Image>
        <div className="p-4">
          <h1 className="text-lg font-medium">{props.farm.name}</h1>
          <h2 className="text-md font-normal">€{props.farm.description}</h2>
          <h2 className="text-md font-normal">
            {props.farm.posX} {props.farm.posY}
          </h2>
        </div>
      </div>
    </Card>
  );
}
