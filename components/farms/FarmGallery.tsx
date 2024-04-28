"use client";
import { Farm } from "@/models/farm";
import fetcher from "@/utils/fetcher";
import { useState } from "react";
import useSWR from "swr";
import Spinner from "../Spinner";
import Info from "../Info";
import FarmCard from "./FarmCard";
import useSWRInfinite from "swr";

export default function FarmGallery() {
  const [page, setPage] = useState(1);

  // const { data, error, isLoading } = useSWR<any>(
  //   "http://0.0.0.0:8056/items/farms/",
  //   fetcher,
  // );

  const { data, error, isLoading } = useSWRInfinite<any>(`/api/farms`, fetcher);

  // const { data, error, isLoading } = useSWR<any>(
  //   "/api/farms",
  //   fetcher,
  // );

  const testfarms = [];
  let i = 0;
  while (i < 5) {
    let Farm: Farm = {
      id: i.toString(),
      attributes: {
        id: i.toString(),
        name: `test boerderij ${i.toString()}`,
        description: `test omschrijving ${i.toString()}`,
        posX: i + 10,
        posY: i + 10 * i,
        imageSrc: `https://source.unsplash.com/random/1000x700/?${i}`,
      },
    };
    testfarms.push(Farm);
    i++;
  }

  function handlePageChange(e: any) {
    setPage(e.target.value);
  }

  // console.log(data);

  return (
    <div className="grid gap-4 self-center sm:grid-cols-2 md:grid-cols-3 xl:gap-8 2xl:grid-cols-4">
      {data
        ? data.data.map((Farm: any) => (
            <FarmCard key={Farm.id} farm={Farm.attributes} id={Farm.id} />
          ))
        : null}
      {!data
        ? testfarms.map((Farm) => (
            <FarmCard key={Farm.id} farm={Farm.attributes} id={Farm.id} />
          ))
        : null}
      {error ? (
        <Info type="error" message={error.message ? error.message : "error"} />
      ) : null}
      {isLoading ? (
        <div className="text-center">
          <Spinner />
        </div>
      ) : null}
    </div>
  );
}
