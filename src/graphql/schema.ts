import { createSchema } from 'graphql-yoga';
import { chargingStations } from '../lib/mock-data';

export const schema = createSchema({
  typeDefs: /* GraphQL */ `
    type ChargingStation {
      id: ID!
      name: String!
      latitude: Float!
      longitude: Float!
      speed: Int!
      connectorType: String!
      brand: String!
      paymentMethod: String!
      status: String!
      outlets: Int!
    }

    type Query {
      chargingStations: [ChargingStation!]!
      chargingStation(id: ID!): ChargingStation
    }
  `,
    resolvers: {
      Query: {
        chargingStations: () => {
          console.log('Fetching charging stations...');
          return chargingStations;
        },
        chargingStation: (_: any, { id }: { id: string }) => {
          console.log(`Fetching station with id: ${id}`);
          return chargingStations.find((s) => s.id === id);
        },
      },
    },

});
