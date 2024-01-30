import { NextRequest, NextResponse } from "next/server";
import { getAccessToken, getSession, withApiAuthRequired } from "@auth0/nextjs-auth0";

export async function GET(request: NextRequest) {
  // const searchParams = request.nextUrl.searchParams;
  // const page = searchParams.get("page") ?? 1;

  const fetchres = await fetch(`${process.env.API_GATEWAY_URL}/farms`);

  const data = await fetchres.json();

  return Response.json(data);
}

export const POST = withApiAuthRequired(async function POST(request) {
  const res = new NextResponse();
  const { user }: any = await getSession(request, res);
 
  // console.log(user.sub)

  // export async function POST(request: Request) {
  const accessToken = await getAccessToken();
  const requestData = await request.json();

  // console.log(accessToken);

  const body = JSON.stringify({
    FarmerId: user.sub,
    Name: requestData.Name,
    Description: requestData.Description,
    PosX: requestData.PosX,
    PosY: requestData.PosY,
  });

  // console.log(body)

  const requestOptions: RequestInit = {
    method: "POST",
    body: body,
    credentials: "include",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  };

  // console.log(`${process.env.API_GATEWAY_URL}/farms`)

  const fetchres = await fetch(
    `${process.env.API_GATEWAY_URL}/farms`,
    requestOptions,
  );

  // console.log(fetchres);

  if (!fetchres.ok)
    return new Response(`error: ${fetchres.statusText}`, {
      status: fetchres.status,
    });

  const data = await fetchres.json();

  return Response.json({ data });
});
