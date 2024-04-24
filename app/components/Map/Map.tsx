"use client";
import L, { latLng } from "leaflet";
import "leaflet/dist/leaflet.css";
import MarkerShadow from "../../../node_modules/leaflet/dist/images/marker-shadow.png";
import MarkerIcon from "@/node_modules/leaflet/dist/images/marker-icon.png";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
const Map = () => {
  const kragujevac = { lat: 44.01, long: 20.91 };
  const srnje = { lat: 43.63, long: 21.28 };
  const cacak = { lat: 43.88, long: 20.34 };
  return (
    <MapContainer
      className="w-full h-full rounded-lg"
      center={latLng(kragujevac.lat, kragujevac.long)}
      zoom={7}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker
        icon={
          new L.Icon({
            iconUrl: MarkerIcon.src,
            iconRetinaUrl: MarkerIcon.src,
            iconSize: [21, 35],
            popupAnchor: [0, -30],
            shadowUrl: MarkerShadow.src,
            shadowSize: [21, 35],
          })
        }
        position={latLng(kragujevac.lat, kragujevac.long)}
      >
        <Popup>Kragujevac</Popup>
      </Marker>
      <Marker
        icon={
          new L.Icon({
            iconUrl: MarkerIcon.src,
            iconRetinaUrl: MarkerIcon.src,
            iconSize: [21, 35],
            popupAnchor: [0, -30],
            shadowUrl: MarkerShadow.src,
            shadowSize: [21, 35],
          })
        }
        position={latLng(srnje.lat, srnje.long)}
      >
        <Popup>Kruševac</Popup>
      </Marker>
      <Marker
        icon={
          new L.Icon({
            iconUrl: MarkerIcon.src,
            iconRetinaUrl: MarkerIcon.src,
            iconSize: [21, 35],
            popupAnchor: [0, -30],
            shadowUrl: MarkerShadow.src,
            shadowSize: [21, 35],
          })
        }
        position={latLng(cacak.lat, cacak.long)}
      >
        <Popup>Čačak</Popup>
      </Marker>
    </MapContainer>
  );
};
export default Map;
