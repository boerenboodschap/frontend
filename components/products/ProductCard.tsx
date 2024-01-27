import { Product } from "@/models/product";

interface Props {
  product: Product;
}

export default function ProductCard(props: Props) {
  return (
    <div className="flex h-full w-full flex-col rounded-xl bg-secondary-400/50">
      <div className="flex aspect-video items-center justify-center rounded-t-xl bg-accent-500">
        Image
      </div>
      <div className="p-2">
        <h1 className="text-lg font-medium">{props.product.name}</h1>
        <h2 className="text-md font-normal">€{props.product.price}</h2>
        <h2 className="text-md font-normal">
          {props.product.stock} op voorraad
        </h2>
      </div>
    </div>
  );
}
