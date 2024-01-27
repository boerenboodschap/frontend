"use client";
import ProductGallery from "@/components/products/ProductGallery";
import ProductList from "@/components/products/ProductList";
import dynamic from "next/dynamic";

export default function Home() {
  const Map = dynamic(() => import("@/components/Map"), { ssr: false });
  return (
    <div className="flex grow flex-col items-center gap-10 xl:p-24">
      <div className="w-full px-2 md:px-20 lg:px-44">
        <section className="flex flex-col gap-4 py-10">
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
        <ProductGallery />
      </div>
    </div>
  );
}
