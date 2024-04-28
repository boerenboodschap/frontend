"use client";
import Spinner from "@/components/Spinner";
import fetcher from "@/utils/fetcher";
import useSWR from "swr";

export default function Boerderij({ params }: { params: { id: number } }) {
  const { data, error, isLoading } = useSWR<any>(
    `/api/farms/${params.id}`,
    fetcher,
  );

  if (isLoading) return <Spinner />;
  if (error) return <div>Error</div>;

  if (data && data.data.attributes)
    return (
      <div className="m-4 bg-white md:mx-20 xl:mx-44">
        <h1 className="text-2xl">Boer {params.id}</h1>
        <div>{data.data.attributes.name}</div>
        <div>{data.data.attributes.description}</div>
        <div>Producten van deze boer</div>
      </div>
    );
}
