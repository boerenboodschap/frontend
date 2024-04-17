"use client"

import CreateFarm from "@/components/farms/CreateFarm";
import MyFarm from "@/components/farms/MyFarm";

export default function MijnBoerderij() {
  return (
    <>
      <div>dit is een mooi overzicht van de boerderij</div>
      <MyFarm />
      <CreateFarm />
    </>
  );
}
