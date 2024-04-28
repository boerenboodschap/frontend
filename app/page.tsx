"use client";
import FarmGallery from "@/components/farms/FarmGallery";
import { SessionProvider } from "next-auth/react";

export default function Home() {
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
