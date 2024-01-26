"use client";
import { MapMarker } from "@/models/marker";
import dynamic from "next/dynamic";

export default function MapPage() {
  const Map = dynamic(() => import("@/components/Map"), { ssr: false });

  const markers: MapMarker[] = [
    { posX: 51.42942599903818, posY: 5.457214455372421 },
  ];

  return (
    <div id="map" className="h-full w-full">
      <Map markers={markers} />
    </div>
  );
}
