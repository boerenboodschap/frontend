"use client";
import ButtonPrimary from "@/components/ButtonPrimary";
import Card from "@/components/Card";
import MapComponent from "@/components/MapComponent";
import FarmGallery from "@/components/farms/FarmGallery";
import ProductGallery from "@/components/products/ProductGallery";
import { SessionProvider } from "next-auth/react";
import { useState } from "react";

export default function Home() {
  enum Pages {
    Farms,
    Products,
    Map,
  }

  const [page, setPage] = useState(Pages.Farms);

  return (
    <SessionProvider>
      <div className="flex grow flex-col items-center">
        <div className="relative flex w-full flex-col gap-4 p-3 md:px-20 lg:px-44">
          <nav className="hidden w-fit self-center rounded-full border border-black bg-background-50 text-sm md:flex">
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
    </SessionProvider>
  );
}
