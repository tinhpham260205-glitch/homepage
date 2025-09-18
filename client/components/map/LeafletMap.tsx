import { useEffect, useRef } from "react";
import L, { Map as LeafletMap, Marker } from "leaflet";

// Use CDN assets to avoid dev-server fs allow issues
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

export interface MapPoint {
  name: string;
  position: [number, number]; // [lat, lng]
}

export default function LeafletMap({
  center = [21.028511, 105.804817],
  zoom = 12,
  points = [],
  className,
}: {
  center?: [number, number];
  zoom?: number;
  points?: MapPoint[];
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<LeafletMap | null>(null);
  const markersRef = useRef<Marker[]>([]);

  useEffect(() => {
    if (!ref.current || mapRef.current) return;
    const map = L.map(ref.current, { zoomControl: true }).setView(center, zoom);
    L.tileLayer("https://{s}.basemaps.cartocdn.com/voyager/{z}/{x}/{y}{r}.png", {
      subdomains: ["a", "b", "c", "d"],
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, © <a href="https://carto.com/attributions">CARTO</a>',
      maxZoom: 20,
      noWrap: true,
      detectRetina: true,
    }).addTo(map);
    mapRef.current = map;
    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;
    markersRef.current.forEach((m) => m.remove());
    markersRef.current = points.map((p) =>
      L.marker(p.position).addTo(map).bindPopup(`<b>${p.name}</b>`),
    );
    if (points.length) {
      const group = L.featureGroup(markersRef.current);
      map.fitBounds(group.getBounds().pad(0.2));
    } else {
      map.setView(center, zoom);
    }
  }, [points, center.toString(), zoom]);

  return <div ref={ref} className={className ?? "h-full w-full"} />;
}
