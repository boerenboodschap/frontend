"use client";
import Card from "@/components/Card";
import MapComponent from "@/components/MapComponent";
import FarmGallery from "@/components/farms/FarmGallery";
import ProductGallery from "@/components/products/ProductGallery";
import { useState } from "react";

export default function Home() {
  enum Pages {
    Farms,
    Products,
    Map,
  }

  const [page, setPage] = useState(Pages.Farms);

  return (
    <div className="flex grow flex-col items-center xl:p-24">
      <div className=" flex w-full flex-col gap-4 p-3 md:px-20 lg:px-44">
        <section className="flex flex-col gap-2">
          <h1 className="text-balance text-4xl font-extrabold xl:text-6xl">
            Welkom bij{" "}
            <span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
              boerenboodschap!
            </span>
          </h1>
          <p>
            Zoek naar je favoriete producten hiero en plaats een bestelling bij
            de boer!
          </p>
        </section>
        <nav className="flex w-fit self-center rounded-full border border-black bg-background-50 text-sm">
          <button
            className={`h-full w-full rounded-l-full px-4 py-1 ${page === Pages.Farms ? "bg-primary-200" : ""}`}
            onClick={() => setPage(Pages.Farms)}
          >
            Boeren
          </button>
          <button
            className={`border-x border-black px-4 py-1 ${page === Pages.Products ? "bg-primary-200" : ""}`}
            onClick={() => setPage(Pages.Products)}
          >
            Producten
          </button>
          <button
            className={`rounded-r-full px-4 py-1 ${page === Pages.Map ? "bg-primary-200" : ""}`}
            onClick={() => setPage(Pages.Map)}
          >
            Kaart
          </button>
        </nav>
        <section className="flex flex-col gap-4">
          {page === Pages.Farms ? <FarmGallery /> : null}
          {page === Pages.Products ? <ProductGallery /> : null}
          {page === Pages.Map ? (
            <div className="aspect-square w-full">
              <MapComponent />
            </div>
          ) : null}
        </section>
      </div>
    </div>
  );
}
