import { useEffect, useRef } from "react";
import L, { Map as LeafletMap, Marker } from "leaflet";

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
    const map = L.map(ref.current, {
      zoomControl: true,
      worldCopyJump: false,
      preferCanvas: true,
    }).setView(center, zoom);
    // CARTO Light style (clean, Google-like, no disputed overlays)
    L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
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

    // custom green marker as inline SVG (no external assets)
    const icon = L.divIcon({
      className: "",
      html: `
        <svg width="28" height="40" viewBox="0 0 28 40" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="s" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="rgba(0,0,0,0.25)"/>
            </filter>
          </defs>
          <path d="M14 0c7.18 0 13 5.67 13 12.67C27 22 14 40 14 40S1 22 1 12.67C1 5.67 6.82 0 14 0Z" fill="#10b981" filter="url(#s)"/>
          <circle cx="14" cy="13" r="5" fill="white"/>
        </svg>`,
      iconSize: [28, 40],
      iconAnchor: [14, 40],
      popupAnchor: [0, -36],
    });

    markersRef.current.forEach((m) => m.remove());
    markersRef.current = points.map((p) =>
      L.marker(p.position, { icon }).addTo(map).bindPopup(`<b>${p.name}</b>`),
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
