"use client";
import AuthForm from "@/components/AuthForm";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface Data {
  username?: string;
  email?: string;
  password?: string;
}

export default function RegistrationForm() {
  const router = useRouter();
  const [error, setError] = useState("");
  const handleFormSubmit = async (data: Data) => {
    const response = await fetch(`/api/auth/register`, {
      method: "POST",
      body: JSON.stringify({
        ...data,
      }),
    });
    if (response.status === 201) {
      router.push("/login");
      router.refresh();
    } else {
      response.status === 409
        ? setError("Er bestaat al een gebruiker met dit email adres!")
        : null;
    }
  };

  return (
    <>
      {error && <p>{error}</p>}
      <AuthForm
        title="Registreren"
        onSubmit={handleFormSubmit}
        buttonText="Registreer"
        linkDescription="Heb je al een account?"
        linkText="Login"
        linkHref="/login"
      />
    </>
  );
}
