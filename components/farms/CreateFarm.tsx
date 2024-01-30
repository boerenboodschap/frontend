"use client";
import { useState } from "react";
import Info from "../Info";
import Spinner from "../Spinner";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function CreateFarm() {
  const [farmName, setFarmName] = useState("");
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const { user, isLoading } = useUser();
  if (isLoading) return <Spinner />;
  if (!user) return "login required";

  function handleProductNameChange(e: any) {
    setFarmName(e.target.value);
  }

  async function handleCreate() {
    setLoading(true);
    setError("");
    setOutput("");

    const body: BodyInit = JSON.stringify({
    UserId: user?.sub ?? "UserID",
      Name: farmName,
      Description: "Super gave boerderij",
      PosX: 2.3,
      PosY: 122,
    });

    var requestOptions: RequestInit = {
      method: "POST",
      credentials: "include",
      body: body,
      redirect: "follow",
    };

    const response = await fetch(`/api/farms`, requestOptions);

    if (response.ok) {
      setOutput("success");
    } else {
      const code = response.status;
      const statusText = response.statusText;
      setError(`${code} ${statusText}`);
    }

    setLoading(false);
  }

  return (
    <div className="flex flex-col gap-2 rounded-lg bg-primary-100 p-2 lg:p-5">
      <h1 className="text-xl">Nieuwe boerderij</h1>
      <label htmlFor="product-name-input">Naam</label>
      <input
        id="product-name-input"
        data-testid="product-name-input"
        type="text"
        placeholder="mijn boerderij"
        value={farmName}
        onChange={handleProductNameChange}
        className="rounded-md border border-primary-400 p-1"
      ></input>
      <button onClick={handleCreate} className="button">
        {loading ? <Spinner /> : "versturen"}
      </button>
      {output ? (
        <Info type="success" message="boerderij succesvol aangemaakt" />
      ) : null}
      {error ? <Info type="error" message={error} /> : null}
    </div>
  );
}
