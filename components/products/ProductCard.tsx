import { Product } from "@/models/product";
import Card from "../Card";
import Image from "next/image";

interface Props {
  product: Product;
}

export default function ProductCard(props: Props) {
  return (
    <Card>
      <div className="flex h-full w-full flex-col rounded-xl ">
        <Image
          className="flex aspect-video items-center justify-center rounded-t-xl bg-gray-400 object-cover"
          src={props.product.imageSrc}
          alt="random unsplash image"
          width="500"
          height="500"
        ></Image>
        <div className="p-4">
          <h3>{props.product.name}</h3>
          <p>€{props.product.price}</p>
          <p>
            {props.product.stock} op voorraad
          </p>
        </div>
      </div>
    </Card>
  );
}
