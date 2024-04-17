import directus from "@/utils/directus";
import { readItems, withToken } from "@directus/sdk";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
// import {
//   getAccessToken,
//   getSession,
//   withApiAuthRequired,
// } from "@auth0/nextjs-auth0";

export async function GET(request: NextRequest) {
  const session = await getServerSession();
  const fetchres = await fetch(`${process.env.API_GATEWAY_URL}/farms`, {
    credentials: "include",
  });

  const data = await fetchres.json();

  console.log(fetchres)

  return Response.json(data);

  // try {
  //   const data = await directus.request(
  //     withToken(
  //       session?.user. as string,
  //       readItems("farms")
  //     )
  //   );
  //   return data;
  // } catch (e: any) {
  //   console.log(e);
  //   const code = e.errors[0].extensions.code;
  //   if (code === "RECORD_NOT_UNIQUE") {
  //     return NextResponse.json(
  //       { message: "This user already exist" },
  //       { status: 409 },
  //     );
  //   }

  //   return NextResponse.json(
  //     { message: "An unexpected error occurred, please try again" },
  //     { status: 500 },
  //   );
  // }
}

// export const POST = withApiAuthRequired(async function POST(request) {
//   const res = new NextResponse();

//   const { user }: any = await getSession(request, res);
//   const accessToken = await getAccessToken();
//   const requestData = await request.json();

//   const body = JSON.stringify({
//     FarmerId: user.sub,
//     Name: requestData.Name,
//     Description: requestData.Description,
//     PosX: requestData.PosX,
//     PosY: requestData.PosY,
//   });

//   const requestOptions: RequestInit = {
//     method: "POST",
//     body: body,
//     credentials: "include",
//     headers: {
//       Authorization: `Bearer ${accessToken}`,
//       "Content-Type": "application/json",
//     },
//   };

//   const fetchres = await fetch(
//     `${process.env.API_GATEWAY_URL}/farms`,
//     requestOptions,
//   );

//   if (!fetchres.ok)
//     return new Response(`error: ${fetchres.statusText}`, {
//       status: fetchres.status,
//     });

//   const data = await fetchres.json();

//   return Response.json({ data });
// });
