export async function GET() {
  const fetchres = await fetch(`${process.env.API_GATEWAY_URL}/products`);

  const data = await fetchres.json();

  return Response.json(data);
}

export async function POST(request: Request) {
  const requestData = await request.json();

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
    headers: {
      "Content-Type": "application/json",
    },
  };

  const fetchres = await fetch(
    `${process.env.API_GATEWAY_URL}/products`,
    requestOptions
  );

  const data = await fetchres.json();

  return Response.json({ data });
}
