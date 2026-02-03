'use client';

import dynamic from 'next/dynamic';

const Map = dynamic(() => import('./Map'), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full bg-gray-100 animate-pulse flex items-center justify-center">
      <p className="text-gray-500 font-medium">Loading Map...</p>
    </div>
  ),
});

export default Map;
