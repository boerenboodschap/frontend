import Card from "../Card";
import Image from "next/image";

export default function FarmCard(props: any) {
  return (
    <Card>
      <div
        className={`relative z-10 flex h-full w-full flex-col rounded-xl`}
      >
        <Image
          className="z-10 flex aspect-video items-center justify-center rounded-t-xl bg-gray-400 object-cover"
          src=""
          alt="farm image"
          width="500"
          height="500"
        ></Image>
        <div className={`z-10 h-full p-4`}>
          <h3>{props.farm.name}</h3>
          <p>{props.farm.description}</p>
        </div>
      </div>
    </Card>
  );
}
