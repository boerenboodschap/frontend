export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const fetchres = await fetch(
    `${process.env.API_GATEWAY_URL}/products/${params.id}`
  );

  const data = await fetchres.json();

  return Response.json(data);
}
