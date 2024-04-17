import { NextRequest, NextResponse } from "next/server";
// import {
//   getAccessToken,
//   getSession,
//   withApiAuthRequired,
// } from "@auth0/nextjs-auth0";

export async function GET(request: NextRequest) {
  const fetchres = await fetch(`${process.env.API_GATEWAY_URL}/farms`);

  const data = await fetchres.json();

  return Response.json(data);
}

export const POST = withApiAuthRequired(async function POST(request) {
  const res = new NextResponse();

  const { user }: any = await getSession(request, res);
  const accessToken = await getAccessToken();
  const requestData = await request.json();

  const body = JSON.stringify({
    FarmerId: user.sub,
    Name: requestData.Name,
    Description: requestData.Description,
    PosX: requestData.PosX,
    PosY: requestData.PosY,
  });

  const requestOptions: RequestInit = {
    method: "POST",
    body: body,
    credentials: "include",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  };

  const fetchres = await fetch(
    `${process.env.API_GATEWAY_URL}/farms`,
    requestOptions,
  );

  if (!fetchres.ok)
    return new Response(`error: ${fetchres.statusText}`, {
      status: fetchres.status,
    });

  const data = await fetchres.json();

  return Response.json({ data });
});
