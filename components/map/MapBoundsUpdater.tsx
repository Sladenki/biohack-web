"use client";

import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import type { RoutePoint } from "@/data/routes";

interface MapBoundsUpdaterProps {
  points: RoutePoint[];
}

export function MapBoundsUpdater({ points }: MapBoundsUpdaterProps) {
  const map = useMap();

  useEffect(() => {
    if (points.length === 0) return;

    const bounds = L.latLngBounds(points.map((p) => [p.lat, p.lng]));
    map.flyToBounds(bounds, { padding: [40, 40], duration: 1.2 });
  }, [map, points]);

  return null;
}
