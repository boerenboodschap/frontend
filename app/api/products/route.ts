import { NextRequest } from "next/server";
// import { getAccessToken, withApiAuthRequired } from "@auth0/nextjs-auth0";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const page = searchParams.get("page") ?? 1;

  const fetchres = await fetch(
    `${process.env.API_GATEWAY_URL}/products?page=${page}`,
  );

  const data = await fetchres.json();

  return Response.json(data);
}

export const POST = withApiAuthRequired(async function POST(request: Request) {
  // export async function POST(request: Request) {
  const accessToken = await getAccessToken();
  const requestData = await request.json();

  console.log(accessToken);

  const body = JSON.stringify({
    Name: requestData.Name,
    Category: requestData.Category,
    Description: requestData.Description,
    Price: requestData.Price,
    Stock: requestData.Stock,
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
    `${process.env.API_GATEWAY_URL}/products`,
    requestOptions,
  );

  // console.log(fetchres);

  if (fetchres.status === 500) return Response.error();

  const data = await fetchres.json();

  return Response.json({ data });
});
