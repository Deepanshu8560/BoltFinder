export const fetcher = async (query: string) => {
  if (typeof window === 'undefined') {
    return { chargingStations: [] };
  }

  const response = await fetch('/api/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`HTTP error! status: ${response.status}, body: ${text}`);
  }

  const json = await response.json();

  if (json.errors) {
    console.error('GraphQL Errors:', json.errors);
    throw new Error(json.errors[0].message);
  }

  return json.data;
};
