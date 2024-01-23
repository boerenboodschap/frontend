"use client";
import { Product } from "@/models/product";
import fetcher from "@/utils/fetcher";
import { useState } from "react";
import useSWR from "swr";
import Spinner from "../Spinner";
import Info from "../Info";

export default function ProductList() {
  const [page, setPage] = useState(1);

  // const { data, error, isLoading } = useSWR<Product[]>(
  //   () => `/api/products/?page=${page}`,
  //   fetcher
  // );

  const data = [
    { id: page, name: "test", price: 10, stock: 112 },
    { id: page, name: "test", price: 10, stock: 112 },
    { id: page, name: "test", price: 10, stock: 112 },
  ];

  function handlePageChange(e: any) {
    setPage(e.target.value);
  }

  console.log(data);

  return (
    <div className="flex flex-col w-full bg-primary-100 p-2 lg:p-5 rounded-lg my-2 gap-2">
      <div className="flex w-full justify-between">
        <h1 className="text-xl">Producten</h1>
        <div className="flex flex-row  gap-2">
          <p>pagina: </p>
        <input
          className="w-14 bg-transparent text-right"
          type="number"
          value={page}
          onChange={handlePageChange}
        />
        </div>
      </div>
      <table className="w-full table-auto">
        <thead>
          <tr className="text-left border-b-2 border-black">
            <th>Id</th>
            <th>Naam</th>
            <th>Prijs (€)</th>
            <th>Voorraad</th>
          </tr>
        </thead>
        <tbody>
          {data
            ? data.map((product) => (
                <tr
                  className="h-14 hover:bg-primary-300 odd:bg-primary-300/50"
                  key={product.id}
                >
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.stock}</td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
      {/* {(error) ? <Info type="error" message={error.message ? error.message : 'error'} /> : null}
      {isLoading ? (
        <div className="text-center">
          <Spinner />
        </div>
      ) : null} */}
    </div>
  );
}
