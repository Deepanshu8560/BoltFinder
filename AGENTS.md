## Project Summary
A fully functional EV Charger Locator Web App built with Next.js, Leaflet, and GraphQL. The app features an interactive map with marker clustering, advanced filtering for charging stations, and detailed station information panels. It uses a mock GraphQL backend to simulate real-world data retrieval.

## Tech Stack
- **Frontend Framework:** Next.js 15 (App Router, TypeScript)
- **Map Integration:** Leaflet.js with `react-leaflet` and `react-leaflet-cluster`
- **Data Layer:** GraphQL (via `graphql-yoga` for mock API and `graphql-request` for client)
- **State Management:** SWR for data fetching, React Context for UI state (filters)
- **Styling:** Tailwind CSS with Shadcn UI components
- **Icons:** Lucide React

## Architecture
- `src/app/api/graphql`: Mock GraphQL endpoint.
- `src/components/Map`: Dynamically loaded Leaflet map component.
- `src/hooks/use-filters.tsx`: Context provider for global filter and selection state.
- `src/lib/mock-data.ts`: Source of truth for mock station data.
- `src/graphql/schema.ts`: GraphQL type definitions and resolvers.

## User Preferences
- Clean, responsive design.
- Interactive map-based geolocation features.
- Performance-focused with SSR and efficient caching (SWR).

## Project Guidelines
- Use Client Components only where interactivity is required (Map, Filters).
- Maintain modular structure for scalability (e.g., separate components for Map, Sidebar, Detail Panel).
- Follow BEM-like or utility-first (Tailwind) styling conventions.

## Common Patterns
- **Dynamic Imports:** Used for Leaflet to avoid SSR issues with `window`.
- **SWR Fetching:** Standardized via `graphql-request` for type-safe data retrieval.
- **Filtering Logic:** Centralized in `useFilters` context and applied in the Map component.
