import type { NextApiRequest, NextApiResponse } from "next";

export async function postHandler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const requestData = await req.body;

    const body = JSON.stringify({
      Name: requestData.productName,
      Category: "voertuigen",
      Description: "Echt een heel cool voertuig",
      Price: 2.3,
      Stock: 122,
    });

    const requestOptions: RequestInit = {
      method: "POST",
      body: body,
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const fetchres = await fetch(
        `${process.env.API_GATEWAY_URL}/products`,
        requestOptions
      );
      const responseData = await fetchres.json();

      res.status(fetchres.status).json(responseData);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
