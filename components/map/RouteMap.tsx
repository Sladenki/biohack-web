"use client";

import { useMemo } from "react";
import { MapContainer, Marker, Polyline, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import type { RoutePoint } from "@/data/routes";
import { MapBoundsUpdater } from "./MapBoundsUpdater";

interface RouteMapProps {
  points: RoutePoint[];
}

function createNumberedIcon(index: number) {
  return L.divIcon({
    className: "custom-marker",
    html: `<div style="
      background: #1FA98C;
      color: white;
      width: 28px;
      height: 28px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      font-size: 13px;
      border: 2px solid white;
      box-shadow: 0 2px 6px rgba(0,0,0,0.3);
    ">${index + 1}</div>`,
    iconSize: [28, 28],
    iconAnchor: [14, 14],
  });
}

export default function RouteMap({ points }: RouteMapProps) {
  const polylinePositions = useMemo(
    () => points.map((p) => [p.lat, p.lng] as [number, number]),
    [points],
  );

  return (
    <MapContainer
      center={[64.5, 40.5]}
      zoom={8}
      className="h-[400px] w-full lg:h-[500px]"
      scrollWheelZoom={false}
      attributionControl={false}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <MapBoundsUpdater points={points} />
      {polylinePositions.length > 1 && (
        <Polyline
          positions={polylinePositions}
          pathOptions={{ color: "#1FA98C", weight: 3, opacity: 0.8 }}
        />
      )}
      {points.map((point, index) => (
        <Marker
          key={point.id}
          position={[point.lat, point.lng]}
          icon={createNumberedIcon(index)}
        >
          <Popup>
            <strong>{point.name}</strong>
            <p className="mt-1 text-sm">{point.description}</p>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
