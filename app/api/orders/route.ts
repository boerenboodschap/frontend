import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  // const searchParams = request.nextUrl.searchParams;
  // const page = searchParams.get("page") ?? 1;

  // const fetchres = await fetch(
  //   `${process.env.API_GATEWAY_URL}/orders?page=${page}`
  // );

  const fetchres = await fetch(`${process.env.API_GATEWAY_URL}/orders`);

  const data = await fetchres.json();

  return Response.json(data);
}

export async function POST(request: Request) {
  const requestData = await request.json();

  const body = JSON.stringify({
    Name: requestData.Name,
    Price: requestData.Price,
    Category: requestData.Category,
    Author: requestData.Author,
    Products: requestData.Products,
    Status: requestData.Status,
  });

  console.log(body);

  const requestOptions: RequestInit = {
    method: "POST",
    body: body,
    headers: {
      "Content-Type": "application/json",
    },
  };

  const fetchres = await fetch(
    `${process.env.API_GATEWAY_URL}/orders`,
    requestOptions
  );

  console.log(fetchres);

  if (fetchres.status === 500) return Response.error();

  const data = await fetchres.json();

  return Response.json({ data });
}
