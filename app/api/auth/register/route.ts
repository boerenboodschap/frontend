export async function POST(request: Request) {
  const { username, email, password } = await request.json();

  const raw = JSON.stringify({
    username: username,
    email: email,
    password: password,
  });

  const requestOptions: RequestInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: raw,
    redirect: "follow",
  };

  const fetchres: any = await fetch(
    `${process.env.BACKEND_URL}/api/auth/local/register`,
    requestOptions,
  );

  if (!fetchres.ok)
    return new Response(`error: ${fetchres.statusText}`, {
      status: fetchres.status,
    });

  const data = await fetchres.json();

  return Response.json({ data });
}
