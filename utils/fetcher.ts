import { type HTTP_METHOD } from "next/dist/server/web/http";

const fetcher = <T>(
  url: string,
  method: HTTP_METHOD = "GET",
  body?: Record<string, unknown>,
): Promise<T> => {
  const requestConfig: RequestInit = {
    method,
  };

  if (body) {
    requestConfig.body = JSON.stringify(body);
  }

  return fetch(url, requestConfig).then(async (r) => {
    if (!r.ok) throw new Error(await r.text());

    return await r.json();
  }) as Promise<T>;
};

export default fetcher;
