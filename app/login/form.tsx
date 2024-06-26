"use client";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

import AuthForm from "@/components/AuthForm";
import { useState } from "react";

interface Data {
  email?: string;
  password?: string;
}

export default function LoginForm() {
  const router = useRouter();
  const [error, setError] = useState("");
  const handleFormSubmit = async (data: Data) => {
    const response = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });
    if (!response?.error) {
      router.push("/mijn-boerderij");
      router.refresh();
    } else {
      response.status === 401
        ? setError("Your email or password is incorrect")
        : null;
    }
  };

  return (
    <>
      {error && <p>{error}</p>}
      <AuthForm
        title="Login"
        onSubmit={handleFormSubmit}
        buttonText="Login"
        linkDescription="Nieuw bij boerenboodschap?"
        linkText="Maak een account"
        linkHref="/register"
        isFullForm={false}
      />
      {/* <div>
        <Link href="/request-reset-password">Wachtwoord vergeten?</Link>
      </div> */}
    </>
  );
}
