"use client";
import { Farm } from "@/models/farm";
import fetcher from "@/utils/fetcher";
import useSWRImmutable from "swr/immutable";
import dynamic from "next/dynamic";

export default function MapPage() {
  const { data } = useSWRImmutable<any>(
    "http://0.0.0.0:8056/items/farms/",
    fetcher,
  );

  const Map = dynamic(() => import("@/components/Map"), { ssr: false });

  const markers = [
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
      <Map farms={data ? data.data : markers} />
    </div>
  );
}
