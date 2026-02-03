export interface ChargingStation {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  speed: number; // in kW
  connectorType: string;
  brand: string;
  paymentMethod: string;
  status: 'available' | 'busy' | 'offline';
  outlets: number;
}

export const chargingStations: ChargingStation[] = [
  {
    id: '1',
    name: 'Downtown Supercharger',
    latitude: 34.0522,
    longitude: -118.2437,
    speed: 250,
    connectorType: 'CCS',
    brand: 'Tesla',
    paymentMethod: 'Plug & Charge',
    status: 'available',
    outlets: 12,
  },
  {
    id: '2',
    name: 'Santa Monica Hub',
    latitude: 34.0195,
    longitude: -118.4912,
    speed: 150,
    connectorType: 'CCS',
    brand: 'Electrify America',
    paymentMethod: 'Credit Card',
    status: 'busy',
    outlets: 8,
  },
  {
    id: '3',
    name: 'Pasadena Fast Charge',
    latitude: 34.1478,
    longitude: -118.1445,
    speed: 50,
    connectorType: 'Type 2',
    brand: 'ChargePoint',
    paymentMethod: 'App',
    status: 'available',
    outlets: 4,
  },
  {
    id: '4',
    name: 'Long Beach Pier Chargers',
    latitude: 33.7701,
    longitude: -118.1937,
    speed: 350,
    connectorType: 'CCS',
    brand: 'EVgo',
    paymentMethod: 'RFID',
    status: 'offline',
    outlets: 6,
  },
  {
    id: '5',
    name: 'Burbank Media Center',
    latitude: 34.1808,
    longitude: -118.309,
    speed: 120,
    connectorType: 'CHAdeMO',
    brand: 'Tesla',
    paymentMethod: 'Plug & Charge',
    status: 'available',
    outlets: 10,
  },
];
