"use client";
import { Farm } from "@/models/farm";
import fetcher from "@/utils/fetcher";
import { MockFarms } from "@/utils/mock-farms";
import dynamic from "next/dynamic";
import useSWRImmutable from "swr/immutable";

// This is mock map, the map with real data can 
// be found in the /kaart directory
export default function MapCompnent() {
  // const { data } = useSWRImmutable<Farm[]>("/api/farms", fetcher);

  const { data } = useSWRImmutable<any>(
    "/api/farms",
    fetcher,
  );

  const Map = dynamic(() => import("@/components/Map"), { ssr: false });

  return (
    <div id="map" className="h-full w-full">
      <Map farms={data !== undefined && data.data ? data : MockFarms} />
    </div>
  );
}
