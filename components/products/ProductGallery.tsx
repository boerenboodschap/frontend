import { Product } from "@/models/product";
import ProductCard from "./ProductCard";

export default function ProductGallery() {

  const data = [];
  let i = 0;
  while (i < 50) {
    let product: Product = {
      id: i.toString(),
      name: `test product ${i.toString()}`,
      price: i + 10,
      stock: i + 10 * i,
      imageSrc: "",
    };
    data.push(product);
    i++;
  }

  return (
    <div className="grid gap-4 self-center sm:grid-cols-2 md:grid-cols-3 xl:gap-8 2xl:grid-cols-4">
      {data
        ? data.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        : null}
    </div>
  );
}
