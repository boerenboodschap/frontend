"use client";
import { Order } from "@/models/order";
import fetcher from "@/utils/fetcher";
import { useState } from "react";
import useSWR from "swr";
import Spinner from "../Spinner";
import Info from "../Info";

export default function OrderList() {
  const [page, setPage] = useState(1);

  const { data, error, isLoading } = useSWR<Order[]>(
    () => `/api/orders/?page=${page}`,
    fetcher
  );

  // const data = [{ id: page, name: "test" }];

  function handlePageChange(e: any) {
    setPage(e.target.value);
  }

  return (
    <div className="flex flex-col w-full bg-gray-200 p-2 lg:p-5 border-2 border-gray-400 rounded-lg my-2 gap-2 shadow-md">
      <div className="flex w-full justify-between">
        <h1 className="text-xl">Bestellingen</h1>
        <input
          className="w-14 bg-transparent border-2 border-gray-400 rounded-lg p-1"
          type="number"
          value={page}
          onChange={handlePageChange}
        />
      </div>
      <table className=" border-gray-400 w-full table-auto">
        <thead>
          <tr className="text-left border-b-2 border-black">
            <th>Id</th>
            <th>Naam</th>
          </tr>
        </thead>
        <tbody>
          {data
            ? data.map((product) => (
                <tr
                  className=" hover:bg-gray-300 even:bg-gray-200 odd:bg-gray-300/50"
                  key={product.id}
                >
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
      {(error) ? <Info type="error" message={error.message ? error.message : 'error'} /> : null}
      {isLoading ? (
        <div className="text-center">
          <Spinner />
        </div>
      ) : null}
    </div>
  );
}
