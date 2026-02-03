'use client';

import { useFilters } from '@/hooks/use-filters';
import { ChargingStation } from '@/lib/mock-data';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { X, Zap, MapPin, CreditCard, Layers } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

interface StationDetailPanelProps {
  stations: ChargingStation[];
}

export function StationDetailPanel({ stations }: StationDetailPanelProps) {
  const { selectedStationId, setSelectedStationId } = useFilters();

  const station = stations.find((s) => s.id === selectedStationId);

  if (!station) return null;

  return (
    <div className="absolute right-6 top-6 bottom-6 w-96 bg-white shadow-2xl rounded-2xl border z-[1000] overflow-hidden flex flex-col animate-in slide-in-from-right duration-300">
      <div className="relative h-48 bg-gray-100 flex items-center justify-center">
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 bg-white/80 backdrop-blur hover:bg-white"
          onClick={() => setSelectedStationId(null)}
        >
          <X className="h-4 w-4" />
        </Button>
        <div className="text-gray-400 flex flex-col items-center">
          <MapPin className="h-12 w-12 mb-2" />
          <span className="text-xs font-medium uppercase tracking-wider">Station Photo Mockup</span>
        </div>
      </div>

      <div className="p-6 flex-1 overflow-y-auto">
        <div className="flex items-start justify-between mb-2">
          <h2 className="text-2xl font-bold leading-tight">{station.name}</h2>
          <Badge variant={station.status === 'available' ? 'default' : 'secondary'}>
            {station.status}
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground mb-6 flex items-center gap-1">
          <MapPin className="h-3 w-3" /> Los Angeles, CA
        </p>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="p-3 bg-blue-50 rounded-xl">
            <div className="flex items-center gap-2 text-blue-600 mb-1">
              <Zap className="h-4 w-4" />
              <span className="text-xs font-bold uppercase">Speed</span>
            </div>
            <p className="text-lg font-bold">{station.speed} kW</p>
          </div>
          <div className="p-3 bg-green-50 rounded-xl">
            <div className="flex items-center gap-2 text-green-600 mb-1">
              <Layers className="h-4 w-4" />
              <span className="text-xs font-bold uppercase">Outlets</span>
            </div>
            <p className="text-lg font-bold">{station.outlets} units</p>
          </div>
        </div>

        <Separator className="my-6" />

        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
              <Zap className="h-4 w-4 text-gray-600" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground font-medium uppercase">Connector Type</p>
              <p className="text-sm font-semibold">{station.connectorType}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
              <CreditCard className="h-4 w-4 text-gray-600" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground font-medium uppercase">Payment</p>
              <p className="text-sm font-semibold">{station.paymentMethod}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 bg-gray-50 border-t">
        <Button className="w-full h-12 text-md font-bold" size="lg">
          Start Charging
        </Button>
      </div>
    </div>
  );
}
