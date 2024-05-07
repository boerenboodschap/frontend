"use client";
import fetcher from "@/utils/fetcher";
import useSWRImmutable from "swr/immutable";
import dynamic from "next/dynamic";
import { MockFarms } from "@/utils/mock-farms";

export default function MapPage() {
  const { data } = useSWRImmutable<any>("/api/farms", fetcher);

  const Map = dynamic(() => import("@/components/Map"), { ssr: false });

  // const markers = [
  //   {
  //     id: "dsahgjvdsa",
  //     name: "hard coded farm",
  //     location: { coordinates: [5.457214455372421, 51.42942599903818] },
  //     imageSrc: "",
  //   },
  // ];

  // if (data === undefined || !data.data) return <div>Loading...</div>

  // console.log(data.data)

  return (
    <div id="map" className="static flex h-full w-full md:pb-0">
      <Map farms={data !== undefined && data.data ? data.data : MockFarms} />
      {/* <Map farms={MockFarms} /> */}
    </div>
  );
}
