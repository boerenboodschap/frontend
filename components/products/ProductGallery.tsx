"use client";
import { Product } from "@/models/product";
import fetcher from "@/utils/fetcher";
import { useState } from "react";
import useSWR from "swr";
import Spinner from "../Spinner";
import Info from "../Info";
import ProductCard from "./ProductCard";

export default function ProductList() {
  const [page, setPage] = useState(1);

  //   const { data, error, isLoading } = useSWR<Product[]>(
  //     () => `/api/products/?page=${page}`,
  //     fetcher,
  //   );

  const data = [];
  let i = 0;
  while (i < 50) {
    let product: Product = {
      id: i.toString(),
      name: `test product ${i.toString()}`,
      price: i + 10,
      stock: i + 10 * i,
      imageSrc: `https://source.unsplash.com/random/1000x700/?${i}`,
    };
    data.push(product);
    i++;
  }

  function handlePageChange(e: any) {
    setPage(e.target.value);
  }

  console.log(data);

  return (
    <div className="grid gap-4 self-center sm:grid-cols-2 md:grid-cols-3 xl:gap-8 2xl:grid-cols-4">
      {data
        ? data.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        : null}
      {/* {error ? (
        <Info type="error" message={error.message ? error.message : "error"} />
      ) : null}
      {isLoading ? (
        <div className="text-center">
          <Spinner />
        </div>
      ) : null} */}
    </div>
  );
}
