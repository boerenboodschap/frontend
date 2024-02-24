"use client";
import ButtonPrimary from "@/components/ButtonPrimary";
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
    <div className="flex grow flex-col items-center">
      <div className="relative flex w-full flex-col gap-4 p-3 md:px-20 lg:px-44">
        <div className="flex w-full flex-col items-center justify-center gap-4 md:flex-row-reverse md:items-start md:justify-between md:gap-0">
          <div className="flex justify-end md:w-1/3">
            <button className="flex h-fit w-fit rounded-full bg-primary-300 px-4 py-2 hover:bg-primary-300/75">
              Gebruik Locatie
            </button>
          </div>
          <div className="flex justify-center md:w-1/3">
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
          </div>
          <div className="flex justify-center md:w-1/3"></div>
        </div>
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
