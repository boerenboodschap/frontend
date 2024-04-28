"use client";
import { Product } from "@/models/product";
import fetcher from "@/utils/fetcher";
import { useState } from "react";
import useSWR from "swr";
import Spinner from "../Spinner";
import Info from "../Info";

export default function ProductList() {
  const [page, setPage] = useState(1);

  const { data, error, isLoading } = useSWR<Product[]>(
    () => `/api/products/?page=${page}`,
    fetcher,
  );

  // const data = [
  //   { id: page, name: "test", price: 10, stock: 112 },
  //   { id: page, name: "test", price: 10, stock: 112 },
  //   { id: page, name: "test", price: 10, stock: 112 },
  // ];

  function handlePageChange(e: any) {
    setPage(e.target.value);
  }

  // console.log(data);

  return (
    <div className="my-2 flex w-full flex-col gap-2 rounded-lg bg-primary-100 p-2 lg:p-5">
      <div className="flex w-full justify-between">
        <h1 className="text-xl">Producten</h1>
        <div className="flex flex-row  gap-2">
          <label htmlFor="product-page-input">labelagina: </label>
          <input
            className="w-14 bg-transparent text-right"
            type="number"
            id="product-page-input"
            value={page}
            onChange={handlePageChange}
          />
        </div>
      </div>
      <table className="w-full table-auto">
        <thead>
          <tr className="border-b-2 border-black text-left">
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
                  className="h-14 odd:bg-primary-300/50 hover:bg-primary-300"
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
