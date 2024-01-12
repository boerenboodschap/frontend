"use client";
import { useState } from "react";
import Info from "../Info";
import Spinner from "../Spinner";

export default function CreateProduct() {
  const [productName, setProductName] = useState("");
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  function handleProductNameChange(e: any) {
    setProductName(e.target.value);
  }

  async function handleCreate() {
    setLoading(true);
    setError("");
    setOutput("");

    const body: BodyInit = JSON.stringify({
      Name: productName,
      Category: "voertuigen",
      Description: "Echt een heel cool voertuig",
      Price: 2.3,
      Stock: 122,
    });

    var requestOptions: RequestInit = {
      method: "POST",
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
    <div className="flex flex-col border-2 border-gray-400 rounded-lg p-2 lg:p-5 gap-2 shadow-md">
      <h1 className="text-xl">Create product</h1>
      <label htmlFor="product-name-input">Name</label>
      <input
        id="product-name-input"
        data-testid="product-name-input"
        type="text"
        placeholder="boerenkool"
        value={productName}
        onChange={handleProductNameChange}
      ></input>
      <button
        onClick={handleCreate}
        className="border-gray-400 border-2 rounded-lg content-center flex justify-center"
      >
        {loading ? <Spinner /> : "Submit"}
      </button>
      {output ? (
        <Info type="success" message="product created successfully" />
      ) : null}
      {error ? <Info type="error" message={error} /> : null}
    </div>
  );
}