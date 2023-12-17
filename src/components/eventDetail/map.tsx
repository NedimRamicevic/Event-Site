import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function Map({cities}: {cities: {name: string, location: [number, number]}[]}) {
  return (
    <div style={{ height: "300px", width: "400px", border:'10px #FFA559 solid ', borderRadius: '15px', overflow: 'hidden' }}>
      <MapContainer center={cities[0].location} zoom={13} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {cities.map((city, index) => (
          <Marker key={index} position={city.location}>
            <Popup>{city.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default Map;
