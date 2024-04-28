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
          <div className="flex grow flex-col items-center">
            <div className="relative flex w-full flex-col gap-4 p-3 md:px-20 lg:px-44">
              <section className="flex flex-col gap-4">
                <FarmGallery />
              </section>
            </div>
          </div>
        </div>
      </div>
    </SessionProvider>
  );
}
