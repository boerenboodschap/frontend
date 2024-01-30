import { getSession } from '@auth0/nextjs-auth0';
import { NextResponse } from "next/server";

export async function GET(request: any) {

  const res = new NextResponse();
  const { user }: any = await getSession(request, res);

  console.log(`${process.env.API_GATEWAY_URL}/farms/my-farm/${user.sub}`)

  const fetchres = await fetch(`${process.env.API_GATEWAY_URL}/farms/my-farm/${user.sub}`);

//   console.log(fetchres)

  if (!fetchres.ok)
    return new Response(`error: ${fetchres.statusText}`, {
      status: fetchres.status,
    });

  const data = await fetchres.json();

  return Response.json(data);
}
