import CreateProduct from "@/components/products/CreateProduct";
import ProductList from "@/components/products/ProductList";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center gap-10 xl:p-24 pt-12">
      <nav className="top-0 h-12 fixed overflow-auto bg-gray-100 w-full flex p-2 gap-2 justify-between md:justify-center items-center px-5 shadow-md rounded-b-xl">
        <Link href="/" className="">
          Home
        </Link>
        <Link href="/mijn-boerderij" className="">
          Mijn Boerderij
        </Link>
      </nav>
      <div className="w-full px-2 md:px-20 lg:px-44">
        <section className="p-10">
          <h1 className="text-xl">Welkom bij boerenboodschap!</h1>
          <p>
            Zoek naar je favoriete producten hiero en plaats een bestelling bij
            de boer!
          </p>
        </section>
        <ProductList />
        <CreateProduct />
      </div>
    </div>
  );
}
