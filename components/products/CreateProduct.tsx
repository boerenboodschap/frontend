"use client";
import { useState } from "react";
import Info from "../Info";
import Spinner from "../Spinner";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function CreateProduct() {
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
      UserId: user?.sub ?? "UserID",
      Category: "voertuigen",
      Description: "Echt een heel cool voertuig",
      Price: 2.3,
      Stock: 122,
    });

    var requestOptions: RequestInit = {
      method: "POST",
      credentials: "include",
      body: body,
      redirect: "follow",
    };

    const response = await fetch(`/api/products`, requestOptions);

    if (response.ok) {
      setOutput("success");
    } else {
      const code = response.status;
      setError(`${code}`);
    }

    setLoading(false);
  }

  return (
    <div className="flex flex-col bg-primary-100 rounded-lg p-2 lg:p-5 gap-2">
      <h1 className="text-xl">Nieuw product</h1>
      <label htmlFor="product-name-input">Naam</label>
      <input
        id="product-name-input"
        data-testid="product-name-input"
        type="text"
        placeholder="boerenkool"
        value={productName}
        onChange={handleProductNameChange}
        className="border border-primary-400 p-1 rounded-md"
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
