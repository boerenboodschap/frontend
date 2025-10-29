import { Farm } from "@/models/farm"

export default function Boerderij({ params }: { params: { id: number } }) {
  const farm: Farm = {
    id: "1",
    name: "huts"
  }

  return (
    <div className="m-4 bg-white md:mx-20 xl:mx-44">
      <h1 className="text-2xl">{farm.name}</h1>
      <div id="boer-info" className="flex-col gap-4 xl:flex-row">
        <div>
          <div>{farm.description}</div>
        </div>
        <div className="p-4">
          <div>Locatie</div>
          <button className="pill bg-primary-400 hover:bg-primary-300 active:bg-primary-400">
            Bekijk op kaart
          </button>
        </div>
        <div>Producten van deze boer</div>
      </div>
    </div>
  );
}
