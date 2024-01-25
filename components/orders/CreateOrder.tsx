"use client";
import { useState } from "react";
import Info from "../Info";
import Spinner from "../Spinner";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function CreateOrder() {
  const [productName, setProductName] = useState("");
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const { user, isLoading } = useUser();
  if (isLoading) return <Spinner />;
  if (!user) return "login required";

  function handleProductNameChange(e: any) {
    setProductName(e.target.value);
  }

  async function handleCreate() {
    setLoading(true);
    setError("");
    setOutput("");

    const body: BodyInit = JSON.stringify({
      Name: productName,
      Price: 23,
      Category: "categorie",
      Author: user?.sub ?? "userId",
      Products: { "productid-duisagibw24334": 10 },
      Status: "PENDING",
    });

    var requestOptions: RequestInit = {
      method: "POST",
      body: body,
      redirect: "follow",
    };

    const response = await fetch(`/api/orders`, requestOptions);

    if (response.ok) {
      setOutput("success");
    } else {
      const code = response.status;
      setError(`${code}`);
    }

    setLoading(false);
  }

  return (
    <div className="flex flex-col gap-2 rounded-lg border-2 border-gray-400 p-2 shadow-md lg:p-5">
      <h1 className="text-xl">Nieuwe bestelling</h1>
      <label htmlFor="product-name-input">Naam</label>
      <input
        id="product-name-input"
        data-testid="product-name-input"
        type="text"
        placeholder="boerenkool"
        value={productName}
        onChange={handleProductNameChange}
        className="border-2 border-gray-400 p-1"
      ></input>
      <button onClick={handleCreate} className="button">
        {loading ? <Spinner /> : "versturen"}
      </button>
      {output ? (
        <Info type="success" message="product succesvol aangemaakt" />
      ) : null}
      {error ? <Info type="error" message={error} /> : null}
    </div>
  );
}
