import CreateProduct from "@/components/products/CreateProduct";
import ProductList from "@/components/products/ProductList";

export default function ProductManagement() {
  return (
    <div>
      <div>Beheer hier je producten</div>
      <CreateProduct />
      <ProductList />
    </div>
  );
}
