"use client";

import { useState } from "react";

export default function CreateProduct() {
  const [productName, setProductName] = useState("");

  function handleProductNameChange(e: any) {
    setProductName(e.target.value);
  }

  function handleCreate() {
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

    fetch(`/api/products`, requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }

  return (
    <div className="flex flex-col border-2 border-black p-2">
      <h1 className="text-xl p-1">Create a new product</h1>
      <label htmlFor="product-name-input">Name</label>
      <input
        id="product-name-input"
        type="text"
        placeholder="boerenkool"
        value={productName}
        onChange={handleProductNameChange}
      ></input>
      <button
        onClick={handleCreate}
        className="border-black border-2 rounded-md"
      >
        Submit
      </button>
    </div>
  );
}
