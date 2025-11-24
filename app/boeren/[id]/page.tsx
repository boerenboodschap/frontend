import { Farms } from "@/farms";
import { Farm } from "@/models/farm";
import Image from "next/image";
import Link from "next/link";

export default function Boerderij({ params }: { params: { id: string } }) {
  const farm: Farm | undefined = Farms.find((x: Farm) => x.id === params.id);

  if (!farm) return "404";

  return (
    <div className="flex h-max w-full flex-col pb-16">
      {farm.imageSrc ? (
        <Image
          className="flex aspect-video max-h-96 w-full bg-gray-400 object-cover"
          src={farm.imageSrc ?? ""}
          alt="farm image"
          width="2000"
          height="500"
        ></Image>
      ) : null}
      <div className="flex h-max max-w-[40rem] flex-col p-4 lg:px-20">
        <h2>{farm.name}</h2>
        <p>{farm.description}</p>

        {farm.url ? (
          <Link
            href={farm.url}
            className="rounded-full bg-accent-500 px-5 py-2.5 text-center text-sm font-medium
                   text-white hover:bg-accent-600 focus:outline-none focus:ring-2
                   focus:ring-accent-300 dark:focus:ring-accent-800"
          >
            website <span className="px-1">🡢</span>
          </Link>
        ) : null}
      </div>
    </div>
  );
}
