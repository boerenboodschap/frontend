import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

interface Props {
  farms: any;
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
      attributionControl={false}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {props.farms
        ? props.farms.map((marker: any) => (
            <Marker
              position={[
                marker.location.coordinates[1],
                marker.location.coordinates[0],
              ]}
              icon={icon}
              key={marker.location.coordinates[1]}
            >
              <Popup>
                <div className="">
                  <h1>{marker.name}</h1>
                  <div>
                    {marker.location.coordinates[1]}{" "}
                    {marker.location.coordinates[0]}
                  </div>
                </div>
              </Popup>
            </Marker>
          ))
        : null}
    </MapContainer>
  );
}
