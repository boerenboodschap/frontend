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
        {/* <div className="flex aspect-video items-center justify-center rounded-t-xl bg-gray-400">
          Image
        </div> */}
        <Image
          className="flex aspect-video items-center justify-center rounded-t-xl bg-gray-400 object-cover"
          src={props.product.imageSrc}
          alt="random unsplash image"
          width="500"
          height="500"
        ></Image>
        <div className="p-4">
          <h1 className="text-lg font-medium">{props.product.name}</h1>
          <h2 className="text-md font-normal">€{props.product.price}</h2>
          <h2 className="text-md font-normal">
            {props.product.stock} op voorraad
          </h2>
        </div>
      </div>
    </Card>
  );
}
