'use client';

import useSWR from 'swr';
import { fetcher } from '@/lib/graphql-client';
import Map from '@/components/Map';
import { FilterSidebar } from '@/components/FilterSidebar';
import { StationDetailPanel } from '@/components/StationDetailPanel';
import { FilterProvider } from '@/hooks/use-filters';
import { ChargingStation } from '@/lib/mock-data';

const GET_STATIONS = `
  query {
    chargingStations {
      id
      name
      latitude
      longitude
      speed
      connectorType
      brand
      paymentMethod
      status
      outlets
    }
  }
`;

function AppContent() {
  const { data, error, isLoading } = useSWR<{ chargingStations: ChargingStation[] }>(
    GET_STATIONS,
    fetcher
  );

  if (error) return (
    <div className="h-screen flex flex-col items-center justify-center text-red-500">
      <p>Failed to load stations</p>
      <pre className="mt-2 text-xs">{error.message || JSON.stringify(error)}</pre>
    </div>
  );
  if (isLoading) return <div className="h-screen flex items-center justify-center">Loading...</div>;

  const stations = data?.chargingStations || [];

  return (
    <main className="flex h-screen overflow-hidden">
      <FilterSidebar />
      <div className="flex-1 relative">
        <Map stations={stations} />
        <StationDetailPanel stations={stations} />
      </div>
    </main>
  );
}

export default function Home() {
  return (
    <FilterProvider>
      <AppContent />
    </FilterProvider>
  );
}
