import { Farm } from "@/models/farm";
import Card from "../Card";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

interface Props {
  farm: Farm;
}

export default function FarmCard(props: Props) {
  const [isShown, setIsShown] = useState(false);

  return (
    <Card>
      <div
        className={`${isShown ? "z-20" : null} relative z-10 flex h-full w-full flex-col rounded-xl`}
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
        // href={`/farm/${props.farm.id}`}
      >
        {/* <div className="flex aspect-video items-center justify-center rounded-t-xl bg-gray-400">
          Image
        </div> */}
        <Image
          className="z-10 flex aspect-video items-center justify-center rounded-t-xl bg-gray-400 object-cover"
          src={props.farm.imageSrc}
          alt="farm image"
          width="500"
          height="500"
        ></Image>
        <div
          className={`${isShown ? "z-20" : null} z-10 rounded-xl bg-white p-4`}
        >
          <h1 className="text-lg font-medium">{props.farm.name}</h1>
          <h2 className="text-md font-normal">€{props.farm.description}</h2>
          <h2 className="text-md font-normal">
            {props.farm.posX} {props.farm.posY}
          </h2>
        </div>
        <div className="flex w-full justify-center rounded-b-xl p-2">
          <Link
            href={`/boerderij/${props.farm.id}`}
            className="w-full text-center text-lg rounded-lg border-2 border-gray-300 bg-white p-4 transition-colors hover:bg-gray-100"
          >
            assortiment
          </Link>
        </div>
        {/* {isShown ? ( */}
        {/* <div
          className={`${isShown ? "visible translate-y-14 transition duration-500" : "visible -translate-y-14 opacity-0 transition duration-500"} absolute bottom-0 flex w-full justify-center rounded-b-xl bg-background-50 outline outline-1 outline-gray-400`}
        >
          <button className="my-2 mt-8 flex rounded-full bg-primary-500 px-10 py-2">
            assortiment
          </button>
        </div> */}
        {/* ) : null} */}
      </div>
    </Card>
  );
}
