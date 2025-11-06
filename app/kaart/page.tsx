"use client";
import dynamic from "next/dynamic";
import { MockFarms } from "@/mock-farms";

export default function MapPage() {
  const Map = dynamic(() => import("@/components/Map"), { ssr: false });
  return <Map farms={MockFarms} />;
}
