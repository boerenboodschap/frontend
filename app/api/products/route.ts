import { NextRequest } from "next/server";
import { getAccessToken, withApiAuthRequired } from "@auth0/nextjs-auth0";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const page = searchParams.get("page") ?? 1;

  const fetchres = await fetch(
    `${process.env.API_GATEWAY_URL}/products?page=${page}`
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
      "Authorization": `Bearer ${accessToken}`,
      // "Authorization": `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImxTeXpDMFBJZFNIc251RmxnSmJieiJ9.eyJpc3MiOiJodHRwczovL3R1aW4uZXUuYXV0aDAuY29tLyIsInN1YiI6IkdCc1pBNXhhd2NlV29mc2JmZGZ2TGpERzZIMUdka1lrQGNsaWVudHMiLCJhdWQiOiJodHRwczovL3Byb2R1Y3RzLmJvZXJlbmJvb2RzY2hhcC5ubCIsImlhdCI6MTcwNTMxMDEzMSwiZXhwIjoxNzA1Mzk2NTMxLCJhenAiOiJHQnNaQTV4YXdjZVdvZnNiZmRmdkxqREc2SDFHZGtZayIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyIsInBlcm1pc3Npb25zIjpbXX0.BRbdUtlp1fVxN-i2m7bgHfjEoUHKQWZj4zMbzFMypZa6n2WbO7SMu0YieIwqnXyqBZzWhDrBVmcbmgqgpwwuLy0shdJO-oFHMJzzzLdeZpFM8jjiXWyky24JYT6OLrpOFag8lW9O5eeD_-zxF1_VCsWpbCBrHVt1JAboMw6SZVHNR6wZXdJ6k7y6Ncl4GdmSqMjBO3P-95xe9cobeOEZagaYh4FjzfjeHdu-heCk_9vZeUsmT1_X3IsGbEVhw7WU6zXhJv9WZnni0YWLkOX10f8hgvYyqv9h6MuZt0mE54X4au2XSGAf3R1QXS61q2kD2E-yRIITd-IAmrJ4SRHbhQ`,

      "Content-Type": "application/json",
    },
  };

  const fetchres = await fetch(
    `${process.env.API_GATEWAY_URL}/products`,
    requestOptions
  );

  // console.log(fetchres);

  if (fetchres.status === 500) return Response.error();

  const data = await fetchres.json();

  return Response.json({ data });
});
