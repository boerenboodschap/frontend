"use client";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function MijnBoerderijLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user)
    return (
      <UserProvider>
        <nav className="top-0 h-12 fixed overflow-auto bg-gray-100 w-full flex p-2 gap-2 md:gap-4 justify-between md:justify-center items-center px-5 shadow-md rounded-b-xl">
          <Link href="/" className="">
            Home
          </Link>
          <Link href="/mijn-boerderij" className="">
            Boerderij
          </Link>
          <Link href="/mijn-boerderij/producten" className="">
            Producten
          </Link>
          <Link href="/mijn-boerderij/bestellingen" className="">
            Bestellingen
          </Link>
          <Link href="/api/auth/logout">Uitloggen</Link>
        </nav>
        <div className="pt-14 px-2 md:px-10 lg:px-60">{children}</div>
      </UserProvider>
    );

  return <a href="/api/auth/login">Login</a>;
}
