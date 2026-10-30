# nengnanum

Skincare e-commerce for a single brand. Frontend and backend live in separate workspaces;
the Express API will be added under `server/` later.

## Requirements

- Node.js 20+
- npm 10+

## Setup

```bash
npm install
cp .env.example .env
cp client/.env.example client/.env
npm run dev
```

The Vite dev server runs on http://localhost:5173.

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the client dev server |
| `npm run build` | Build the client for production |
| `npm run lint` | Lint client source with Oxlint |
| `npm run preview` | Preview the production build |

## Structure

```
nengnanum/
├── client/
│   ├── public/
│   ├── src/
│   │   ├── app/             # App shell and route table
│   │   ├── assets/
│   │   ├── components/      # Shared UI and layouts
│   │   │   ├── layout/
│   │   │   └── ui/          # shadcn/ui components
│   │   ├── data/            # Storefront copy and static catalog data
│   │   ├── features/        # Feature modules (api, store, hooks)
│   │   │   ├── auth/
│   │   │   ├── cart/
│   │   │   ├── checkout/
│   │   │   ├── orders/
│   │   │   └── products/
│   │   ├── hooks/
│   │   ├── lib/             # API client and utilities
│   │   └── pages/           # Route pages
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
├── .env.example
├── package.json             # npm workspaces root
└── skincare-ecommerce-project-guide.md
```

`server/` is intentionally not scaffolded yet. When it lands it will follow the same
layout as the guide: `src/{config,middleware,modules,routes,services,lib,app.js}` and
`prisma/schema.prisma`.

## Status

- Storefront design from `nengnanum-beauty-source` is integrated into the client:
  - `/` — home, full landing page; product filter/grid without add-to-bag.
  - `/shop` — full catalog with add-to-bag.
  - `/about-us` — heritage/atelier page.
  - `/qna` — searchable, filterable inquiries and FAQ.
  - `/team` — reseller/team page (temporary images until portraits arrive).
  - `/blog` — journal listing driven by `src/data/blogPosts.js`.
  - `/contact`, `/shipping-returns`, `/privacy`, `/terms` — static pages.
- Navigation has an About dropdown (`About us`, `QnA`); `/about` and `/faq` redirect to the new routes.
- Design tokens (navy, ivory, champagne, serif display type) live in `client/src/index.css`.
- Reference SVGs are kept in `client/design-reference/`.
- Cart state (Zustand) and API client are ready for the backend.
- Auth, product data, checkout, payment, and admin data are not connected yet.
- See `skincare-ecommerce-project-guide.md` for the roadmap.
