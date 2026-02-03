'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Filters {
  speed: number | null;
  brand: string | null;
  status: string | null;
}

interface FilterContextType {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
  selectedStationId: string | null;
  setSelectedStationId: (id: string | null) => void;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export function FilterProvider({ children }: { children: ReactNode }) {
  const [filters, setFilters] = useState<Filters>({
    speed: null,
    brand: null,
    status: null,
  });
  const [selectedStationId, setSelectedStationId] = useState<string | null>(null);

  return (
    <FilterContext.Provider value={{ filters, setFilters, selectedStationId, setSelectedStationId }}>
      {children}
    </FilterContext.Provider>
  );
}

export function useFilters() {
  const context = useContext(FilterContext);
  if (context === undefined) {
    throw new Error('useFilters must be used within a FilterProvider');
  }
  return context;
}
