import Link from "next/link";
import { FormEvent, useState } from "react";

interface Data {
  username?: string;
  email: string;
  password: string;
}

interface AuthFormProps {
  title: string;
  buttonText: string;
  onSubmit: (data: Data) => void;
  linkText: string;
  linkDescription: string;
  linkHref: string;
  isFullForm?: boolean;
}

export default function AuthForm({
  title,
  buttonText,
  onSubmit,
  linkText,
  linkHref,
  linkDescription,
  isFullForm = true,
}: AuthFormProps) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleFormSubmit} className="flex flex-col gap-2">
      <h1>{title}</h1>
      {isFullForm && (
        <>
          <input
            type="text"
            placeholder="Gebruikersnaam"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
        </>
      )}
      <input
        type="email"
        placeholder="Email Adres"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        required
      />
      <input
        type="password"
        placeholder="Wachtwoord"
        name="password"
        value={formData.password}
        required
        onChange={handleInputChange}
      />
      <button className="button">{buttonText}</button>
      <p>
        {linkDescription}
        <Link href={linkHref} className="button">{linkText}</Link>
      </p>
    </form>
  );
}
