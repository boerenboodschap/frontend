"use client";
import dynamic from "next/dynamic";

export default function MapPage() {
  const Map = dynamic(() => import("@/components/Map"), { ssr: false });
  return (
    <div id="map" className="w-full h-96">
      <Map />
    </div>
  );
}
