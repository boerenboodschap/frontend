export async function GET(
  request: Request,
  { params }: { params: { id: string } },
) {
  const fetchres = await fetch(
    `${process.env.BACKEND_URL}/api/farms/${params.id}`,
    { cache: "no-store" },
  );

  const data = await fetchres.json();

  // console.log(data)

  return Response.json(data);
}
