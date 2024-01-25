"use client";
import Spinner from "@/components/Spinner";
import fetcher from "@/utils/fetcher";
import useSWR from "swr";

export default function Profile() {
  const { data, error, isLoading } = useSWR<any>(() => `/api/auth/me`, fetcher);

  if (!data) return <Spinner />;

  return <div>email: {data.email}</div>;
}
