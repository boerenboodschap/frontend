import CreateProduct from "@/components/products/CreateProduct";
import ProductList from "@/components/products/ProductList";

export default function ProductManagement() {
  return (
    <div className="flex flex-col gap-6">
      <div className="text-xl">Beheer hier je producten</div>
      <CreateProduct />
      <ProductList />
    </div>
  );
}
