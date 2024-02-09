"use client";

import { Farm } from "@/models/farm";
import fetcher from "@/utils/fetcher";
import useSWRImmutable from "swr/immutable";
import Info from "../Info";
import Spinner from "../Spinner";
import CreateFarm from "./CreateFarm";

export default function MyFarm() {
  const { data, error, isLoading } = useSWRImmutable<Farm>(
    "/api/farms/my-farm",
    fetcher,
  );

  if (isLoading) return <Spinner />;

  if (error) return <Info type="error" message={error.message} />;

  if (!data) return <CreateFarm />;

  console.log(data);

  return <div>{data.name}</div>;
}
