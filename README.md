# ⚡ BoltFinder

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![GraphQL](https://img.shields.io/badge/GraphQL-Yoga-E10098?style=for-the-badge&logo=graphql&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**The Ultimate Real-Time EV Charging Station Locator**

[Features](#-features) • [Tech Stack](#-tech-stack) • [Getting Started](#-getting-started) • [Deployment](#-deployment)

</div>

---

## 📖 Overview

**BoltFinder** is a cutting-edge web application designed to help electric vehicle owners find the perfect charging station in seconds. Built with performance and user experience in mind, it combines specific filtering capabilities with an interactive, responsive map interface.

Whether you're looking for a Supercharger, a specific connector type, or just the nearest available spot, BoltFinder powers your journey.

## 🚀 Features

### 🗺️ Interactive Mapping
- **High-Performance Map**: Powered by **Leaflet.js** for smooth panning and zooming.
- **Smart Clustering**: Efficiently handles thousands of markers using `react-leaflet-cluster`.
- **Live Status Indicators**: Instantly see if a station is Available, Busy, or Offline.

### 🔍 Advanced Filtering
- **Brand Selection**: Filter by Tesla, ChargePoint, EVgo, and more.
- **Charging Speed**: Find exactly what you need—Slow (AC), Fast (DC), or Superchargers.
- **Connector Types**: Filter for J1772, CCS, CHAdeMO, or Tesla plugs.
- **Real-time Availability**: Show only stations that are currently open.

### ⚡ Modern Tech & Architecture
- **GraphQL API**: robust simulation using `graphql-yoga` for flexible data querying.
- **Responsive Design**: Flawless experience on desktop, tablet, and mobile.
- **Beautiful UI**: Crafted with **shadcn/ui** and **Tailwind CSS** for a premium feel.

## 🛠️ Tech Stack

| Category | Technologies |
|----------|--------------|
| **Framework** | [Next.js 15](https://nextjs.org/) (App Router) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/), [shadcn/ui](https://ui.shadcn.com/) |
| **Maps** | [Leaflet](https://leafletjs.com/), [React Leaflet](https://react-leaflet.js.org/) |
| **Data Fetching** | [GraphQL Yoga](https://the-guild.dev/graphql/yoga-server), [SWR](https://swr.vercel.app/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Validation** | [Zod](https://zod.dev/), [React Hook Form](https://react-hook-form.com/) |

## 📦 Getting Started

Follow these steps to get your local environment up and running.

### Prerequisites
- **Node.js** (v18+) or **Bun** (recommended)
- **Git**

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/Deepanshu8560/BoltFinder.git
    cd BoltFinder
    ```

2.  **Install dependencies**
    ```bash
    bun install
    # or
    npm install
    ```

3.  **Run the development server**
    ```bash
    bun dev
    # or
    npm run dev
    ```

4.  **Explore**
    Open [http://localhost:3000](http://localhost:3000) in your browser to see the app in action.

## 📁 Project Structure

```bash
├── src
│   ├── app            # Next.js App Router pages & API routes
│   ├── components     # Reusable UI components (Map, Sidebar, etc.)
│   ├── graphql        # Schema definitions and resolvers
│   ├── hooks          # Custom React hooks (useFilters, etc.)
│   └── lib            # Utilities and mock data
├── public             # Static assets
└── ...config files
```

## 🚀 Deployment

The easiest way to deploy is using **Vercel**, the creators of Next.js.

1.  Push your code to a Git repository (GitHub, GitLab, BitBucket).
2.  Import your project into Vercel.
3.  Vercel will automatically detect Next.js and deploy your site!

Check out the [Next.js Deployment Documentation](https://nextjs.org/docs/deployment) for more details.

## 📄 License

This project is licensed under the **MIT License**.

---

<div align="center">
  <sub>Built with ❤️ by Deepanshu</sub>
</div>
