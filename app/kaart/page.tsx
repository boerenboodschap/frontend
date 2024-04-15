"use client";
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
      location: { coordinates: [5.457214455372421, 51.42942599903818] },
      imageSrc: "",
    },
  ];

  return (
    <div id="map" className="h-full w-full">
      <Map farms={data ? data.data : markers} />
    </div>
  );
}
