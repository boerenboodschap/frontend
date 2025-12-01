import { Farm } from "@/models/farm";
import Card from "../Card";
import Image from "next/image";
import Link from "next/link";

export default function FarmCard(props: { farm: Farm }) {
  return (
    <Card>
      <div className="flex h-full w-full flex-col overflow-hidden rounded-xl">
        {props.farm.imageSrc ? (
          <Image
            className="flex aspect-video w-full bg-gray-400 object-cover"
            src={props.farm.imageSrc ?? ""}
            alt="farm image"
            width={500}
            height={100}
            quality={60}
          ></Image>
        ) : null}
        <div className="flex h-full flex-col justify-between p-4">
          <div>
            <h2>{props.farm.name}</h2>
            <p>{props.farm.description}</p>
          </div>
          {props.farm.url ? (
            <Link
              href={"/boeren/" + props.farm.id}
              className="rounded-full bg-accent-500 px-5 py-2.5 text-center
                        hover:bg-accent-600 focus:outline-none focus:ring-2
                       focus:ring-accent-300 dark:focus:ring-accent-800"
            >
              <span className="text-sm font-medium text-white">details</span>
            </Link>
          ) : null}
        </div>
      </div>
    </Card>
  );
}
