// "use client";
import Spinner from "@/components/Spinner";
import fetcher from "@/utils/fetcher";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { getServerSession } from "next-auth";

export default async function Profile() {
  // const { data, error, isLoading } = useSWR<any>(() => `/api/auth/me`, fetcher);

  const session = await getServerSession();

  // console.log(session);
  // const { data: session } = useSession();

  if (!session || session.user?.email === undefined) return <Spinner />;

  return <div>email: {session.user.email}</div>;
}
