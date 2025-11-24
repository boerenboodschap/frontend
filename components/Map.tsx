import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { Farm } from "@/models/farm";
import Link from "next/link";

interface Props {
  farms: Farm[];
}

export default function Map(props: Props) {
  const icon = new L.Icon({
    iconUrl: "/marker-icon.png",
    iconSize: [25, 35],
    iconAnchor: [12.5, 35],
    popupAnchor: [0, -35],
  });

  return (
    <MapContainer
      center={[52.132633, 5.291266]}
      zoom={8}
      scrollWheelZoom={true}
      attributionControl={true}
      style={{ color: "white", height: "100%", width: "100%", zIndex: 10 }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {props.farms
        ? props.farms.map((marker: Farm) =>
            marker.posX && marker.posY ? (
              <Marker
                position={[marker.posX, marker.posY]}
                icon={icon}
                key={marker.posY}
              >
                <Popup>
                  <div className="flex h-full w-full flex-col">
                    <h2 className="my-2">{marker.name}</h2>
                    {marker.description ? (
                      <p className="m-0">{marker.description}</p>
                    ) : null}
                    <Link
                      href={"/boeren/" + marker.id}
                      className="rounded-full bg-accent-500 px-5 py-2.5 text-center
                              hover:bg-accent-600 focus:outline-none focus:ring-2
                             focus:ring-accent-300 dark:focus:ring-accent-800"
                    >
                      <span className="text-sm font-medium text-white">
                        details
                      </span>
                    </Link>
                  </div>
                </Popup>
              </Marker>
            ) : null,
          )
        : null}
    </MapContainer>
  );
}
