import { createYoga } from 'graphql-yoga';
import { schema } from '@/graphql/schema';

const { handleRequest } = createYoga({
  schema,
  graphqlEndpoint: '/api/graphql',
  fetchAPI: {
    Request,
    Response,
  },
});

export const POST = async (request: Request) => {
  return handleRequest(request, {});
};

export const GET = async (request: Request) => {
  return handleRequest(request, {});
};

export const OPTIONS = async (request: Request) => {
  return handleRequest(request, {});
};
