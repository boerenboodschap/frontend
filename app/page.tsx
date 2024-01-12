import CreateProduct from "@/components/products/CreateProduct";
import ProductList from "@/components/products/ProductList";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-10 lg:p-24 pt-12">
      <nav className="top-0 h-12 fixed overflow-auto bg-gray-100 w-full flex p-2 gap-2 justify-between px-5 shadow-md rounded-b-xl">
        <Link href="/" className="">
          Home
        </Link>
        <Link href="/" className="">
          Products
        </Link>
        <Link href="/" className="">
          Orders
        </Link>
      </nav>
      <div className="w-full px-2 md:px-20 lg:px-44">
        <ProductList />
        <CreateProduct />
      </div>
    </main>
  );
}
