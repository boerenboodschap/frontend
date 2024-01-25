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
        <nav className="border-b-1 fixed top-14 flex h-12 w-full items-center justify-between gap-2 overflow-auto border-b bg-background-50 px-5 font-semibold md:justify-center md:gap-4">
          <Link href="/mijn-boerderij" className="">
            Boerderij
          </Link>
          <Link href="/mijn-boerderij/producten" className="">
            Producten
          </Link>
          <Link href="/mijn-boerderij/bestellingen" className="">
            Bestellingen
          </Link>
          <div className="flex flex-row items-center gap-2 md:absolute md:right-4">
            <Link href="/mijn-boerderij/profiel">profiel</Link>
            <Link className="button" href="/api/auth/logout">
              Uitloggen
            </Link>
          </div>
        </nav>
        <div className="px-2 pt-14 md:px-10 lg:px-60">{children}</div>
      </UserProvider>
    );

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="flex flex-col gap-2 rounded-3xl p-12 text-center shadow-xl">
        <h1>Log in om naar je boerderij te gaan.</h1>
        <Link
          className="button"
          href="/api/auth/login?returnTo=/mijn-boerderij"
        >
          Login
        </Link>
      </div>
    </div>
  );
}
