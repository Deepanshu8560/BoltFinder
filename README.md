# EV Charger Locator

A high-performance web application for locating Electric Vehicle (EV) charging stations, built with Next.js, Leaflet, and GraphQL.

## 🚀 Features

- **Interactive Map**: Real-time visualization of charging stations using Leaflet.js with marker clustering for performance.
- **Advanced Filtering**: Filter stations by brand, speed (Slow, Fast, Supercharger), connector type, and status.
- **Station Details**: Comprehensive information panels for each station, including availability and supported payment methods.
- **Mock GraphQL API**: A robust backend simulation using `graphql-yoga` for realistic data fetching.
- **Responsive Design**: Optimized for both desktop and mobile viewing.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router, TypeScript)
- **Mapping**: [Leaflet.js](https://leafletjs.com/) with `react-leaflet`
- **Data Fetching**: [SWR](https://swr.vercel.app/) & [GraphQL Request](https://github.com/jasonkuhrt/graphql-request)
- **API**: [GraphQL Yoga](https://the-guild.dev/graphql/yoga-server)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)

## 📦 Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (recommended) or Node.js

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/ev-charger-locator.git
   cd ev-charger-locator
   ```

2. Install dependencies:
   ```bash
   bun install
   ```

3. Run the development server:
   ```bash
   bun dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

- `src/app/api/graphql`: GraphQL API implementation.
- `src/components/Map`: Interactive map component logic.
- `src/hooks/use-filters.tsx`: Global state management for filtering.
- `src/lib/mock-data.ts`: Mock station data source.
- `src/graphql/schema.ts`: GraphQL type definitions and resolvers.

## 📜 License

MIT

## 🚀 Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
