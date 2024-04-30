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
        <h1 className="text-2xl">{data.data.attributes.name}</h1>
        <div id="boer-info" className="flex-col gap-4 xl:flex-row">
          <div>
            <div>{data.data.attributes.description}</div>
          </div>
          <div className="p-4">
            <div>Locatie</div>
            <button className="pill bg-primary-400 hover:bg-primary-300 active:bg-primary-400">
              Bekijk op kaart
            </button>
          </div>
          <div>Producten van deze boer</div>
        </div>
      </div>
    );
}
