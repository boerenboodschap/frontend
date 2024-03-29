import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import Link from "next/link";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BoerenBoodschap",
  description: "Koop producten direct bij een boer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <UserProvider>
      <html lang="en" className="h-screen w-screen">
        <body
          className={`${inter.className} static h-full w-full bg-background-100/40 bg-repeat pt-14`}
        >
          <header className="border-b-1 fixed top-0 flex h-14 w-full items-center justify-between gap-12 overflow-auto border bg-background-50 px-2 font-semibold md:px-20 lg:px-64">
            <nav className="flex items-center gap-4">
              <Link href="/">
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
                help en info
              </Link>
            </nav>
            <nav className="flex items-center justify-between gap-10">
              <Link href="/kaart" className="hover:text-primary-700">
                Kaart
              </Link>
              <Link href="/mijn-boerderij" className="nav-link">
                Mijn Boerderij
              </Link>
            </nav>
          </header>
          {children}
        </body>
      </html>
    </UserProvider>
  );
}
