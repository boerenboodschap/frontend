import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const Map = () => {
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
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[52.132633, 5.291266]} icon={icon}>
        {/* <Icon iconUrl={"/marker-icon"} /> */}
        <Popup>
          <div className="bg-background-300 p-4">
            A pretty CSS3 popup. <br /> Easily customizable.
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
