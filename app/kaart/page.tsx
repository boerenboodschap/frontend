"use client"
import dynamic from "next/dynamic";
import { MockFarms } from "@/mock-farms";

export default function MapPage() {
  const Map = dynamic(() => import("@/components/Map"), { ssr: false });

  return (
    <div id="map" className="static flex h-full w-full md:pb-0">
      <Map farms={MockFarms} />
    </div>
  );
}
