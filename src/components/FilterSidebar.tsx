'use client';

import { useFilters } from '@/hooks/use-filters';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export function FilterSidebar() {
  const { filters, setFilters } = useFilters();

  const handleReset = () => {
    setFilters({
      speed: null,
      brand: null,
      status: null,
    });
  };

  return (
    <div className="w-80 h-full bg-white border-r p-6 flex flex-col gap-6 overflow-y-auto">
      <div>
        <h2 className="text-xl font-bold mb-1">Filters</h2>
        <p className="text-sm text-muted-foreground">Narrow down your search</p>
      </div>

      <Separator />

      <div className="space-y-4">
        <div className="space-y-2">
          <Label className="text-sm font-semibold">Minimum Charging Speed ({filters.speed || 0} kW)</Label>
          <Slider
            value={[filters.speed || 0]}
            max={350}
            step={50}
            onValueChange={([val]) => setFilters((f) => ({ ...f, speed: val === 0 ? null : val }))}
          />
        </div>

        <div className="space-y-2">
          <Label className="text-sm font-semibold">Brand</Label>
          <Select
            value={filters.brand || 'all'}
            onValueChange={(val) => setFilters((f) => ({ ...f, brand: val === 'all' ? null : val }))}
          >
            <SelectTrigger>
              <SelectValue placeholder="All Brands" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Brands</SelectItem>
              <SelectItem value="Tesla">Tesla</SelectItem>
              <SelectItem value="Electrify America">Electrify America</SelectItem>
              <SelectItem value="ChargePoint">ChargePoint</SelectItem>
              <SelectItem value="EVgo">EVgo</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label className="text-sm font-semibold">Status</Label>
          <Select
            value={filters.status || 'all'}
            onValueChange={(val) => setFilters((f) => ({ ...f, status: val === 'all' ? null : val }))}
          >
            <SelectTrigger>
              <SelectValue placeholder="Any Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Any Status</SelectItem>
              <SelectItem value="available">Available</SelectItem>
              <SelectItem value="busy">Busy</SelectItem>
              <SelectItem value="offline">Offline</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Button variant="outline" className="mt-auto" onClick={handleReset}>
        Reset Filters
      </Button>
    </div>
  );
}
