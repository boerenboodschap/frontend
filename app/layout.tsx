import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import BottomNavLink from "@/components/BottomNavLink";
import NavLink from "@/components/NavLink";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BoerenBoodschap",
  description: "Koop producten direct bij een boer.",
};

interface Props {
  children: React.ReactNode;
}

export default function RootLayout(props: Props) {
  return (
    <html lang="en" className="h-screen w-screen">
      <body
        className={`${inter.className} absolute h-screen w-full bg-background-100/40 bg-repeat`}
      >
        <header className="border-b-1 fixed top-0 z-50 flex h-14 w-full items-center justify-between gap-12 overflow-auto border bg-background-50 px-2 font-semibold md:px-20 lg:px-64">
          <nav className="flex items-center gap-4">
            <Link href="/boeren">
              <Image
                alt="boerenboodschap mascotte"
                src="/boerboodschap_mascot.webp"
                width={43}
                height={43}
              />
            </Link>
            <Link
              href="/over"
              className="text-sm font-normal text-indigo-800 underline"
            >
              help
            </Link>
          </nav>
          <nav className="hidden h-full items-center justify-between gap-10 md:flex">
            <NavLink href="/boeren" text="Boeren" />
            <NavLink href="/producten" text="Producten" />
            <NavLink href="/kaart" text="Kaart" />
          </nav>
        </header>
        <div className="absolute top-0 h-screen w-screen md:mb-0">
          <div className="relative top-14 h-[calc(100vh-56px)]">
            {props.children}
          </div>
        </div>
        <footer
          className={`fixed bottom-0 z-50 h-14 w-full border-t-2 border-t-gray-200 bg-background-50 md:hidden`}
        >
          <nav className="flex h-full w-screen text-sm">
            <BottomNavLink href="/boeren" icon="👨‍🌾" text="Boeren" />
            <BottomNavLink href="/producten" icon="🥕" text="Producten" />
            <BottomNavLink href="/kaart" icon="🗺" text="Kaart" />
          </nav>
        </footer>
      </body>
    </html>
  );
}
