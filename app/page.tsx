"use client";
import ProductList from "@/components/products/ProductList";
import dynamic from "next/dynamic";

export default function Home() {
  const Map = dynamic(() => import("@/components/Map"), { ssr: false });
  return (
    <div className="bg-background-50 flex flex-col h-full items-center gap-10 xl:p-24">
      <div className="w-full px-2 md:px-20 lg:px-44">
        <section className="py-10 gap-4 flex flex-col">
          <h1 className="text-balance text-4xl xl:text-6xl font-extrabold">
            Welkom bij{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent-500">
              boerenboodschap!
            </span>
          </h1>
          <p>
            Zoek naar je favoriete producten hiero en plaats een bestelling bij
            de boer!
          </p>
        </section>
        <ProductList />
        <div id="map">
          <Map />
        </div>
      </div>
    </div>
  );
}
