'use client';

import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import { useFilters } from '@/hooks/use-filters';
import { ChargingStation } from '@/lib/mock-data';

// Fix for default Leaflet icons
const DefaultIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

interface MapProps {
  stations: ChargingStation[];
}

function ChangeView({ center }: { center: [number, number] }) {
  const map = useMap();
  map.setView(center);
  return null;
}

export default function Map({ stations }: MapProps) {
  const { filters, setSelectedStationId } = useFilters();

  const filteredStations = stations.filter((s) => {
    if (filters.speed && s.speed < filters.speed) return false;
    if (filters.brand && s.brand !== filters.brand) return false;
    if (filters.status && s.status !== filters.status) return false;
    return true;
  });

  const center: [number, number] = [34.0522, -118.2437]; // Los Angeles

  return (
    <div className="h-full w-full relative">
      <MapContainer
        center={center}
        zoom={10}
        scrollWheelZoom={true}
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MarkerClusterGroup chunkedLoading>
          {filteredStations.map((station) => (
            <Marker
              key={station.id}
              position={[station.latitude, station.longitude]}
              eventHandlers={{
                click: () => setSelectedStationId(station.id),
              }}
            >
              <Popup>
                <div className="p-2">
                  <h3 className="font-bold">{station.name}</h3>
                  <p className="text-sm">{station.brand}</p>
                  <p className="text-xs text-gray-500">{station.speed} kW • {station.status}</p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>
      </MapContainer>
    </div>
  );
}
