"use client";
import { Product } from "@/models/product";
import fetcher from "@/utils/fetcher";
import { useState } from "react";
import useSWR from "swr";

export default function ProductList() {
  const [page, setPage] = useState(1);

  const { data, error, isLoading } = useSWR<Product[]>(
    () => `/api/products/?page=${page}`,
    fetcher
  );

  // const data = [{ id: page, name: "test" }];

  function handlePageChange(e: any) {
    setPage(e.target.value);
  }

  return (
    <div className="flex flex-col w-full bg-gray-200 p-2 lg:p-5 border-2 border-gray-400 rounded-lg my-2 gap-2 shadow-md">
      <div className="flex w-full justify-between">
        <h1 className="text-xl">Products</h1>
        <input
          className="w-14 bg-transparent border-2 border-gray-400 rounded-lg p-1"
          type="number"
          value={page}
          onChange={handlePageChange}
        />
      </div>
      <table className=" border-gray-400 w-full table-auto">
        <tr className="text-left border-b-2 border-black">
          <th>Id</th>
          <th>Name</th>
        </tr>
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
      </table>
    </div>
  );
}
