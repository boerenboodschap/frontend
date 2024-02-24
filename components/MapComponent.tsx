"use client";
import { Farm } from "@/models/farm";
import fetcher from "@/utils/fetcher";
import dynamic from "next/dynamic";
import useSWRImmutable from "swr/immutable";

export default function MapCompnent() {
  const { data } = useSWRImmutable<Farm[]>("/api/farms", fetcher);

  const Map = dynamic(() => import("@/components/Map"), { ssr: false });

  const markers: Farm[] = [
    {
      id: "dsahgjvdsa",
      name: "hard coded farm",
      posX: 51.42942599903818,
      posY: 5.457214455372421,
      imageSrc: "",
    },
  ];

  return (
    <div id="map" className="h-full w-full">
      <Map farms={data ? data : markers} />
    </div>
  );
}
