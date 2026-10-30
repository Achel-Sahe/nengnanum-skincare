
# Skincare E-Commerce — Project Guide

## 1. Project Overview
Build a modern e-commerce website for a single skincare brand, not a marketplace.

Customers can:
- Browse and search skincare products.
- Filter products by category and skin concerns.
- View product details, ingredients, and usage instructions.
- Manage cart and shipping addresses.
- Checkout and pay online.
- Track orders and payment status.

Admins can manage products, inventory, orders, and sales.

The backend must also support a future mobile application.

## 2. Technology Stack

| Layer | Technology |
|---|---|
| Frontend | React + JavaScript + Vite |
| Routing | React Router |
| Styling | Tailwind CSS + shadcn/ui |
| Backend | Node.js + Express |
| Database | PostgreSQL |
| ORM | Prisma |
| Authentication | Better Auth or suitable Express auth solution |
| Validation | Zod + React Hook Form |
| Client State | Zustand |
| API State | TanStack Query |
| Payment | Midtrans or Xendit |
| Shipping | Biteship or RajaOngkir |
| Image Storage | Cloudinary or Cloudflare R2 |
| Email | Resend |
| Deployment | Vercel + Node-compatible API hosting |

Choose one provider for each integration before implementation.

## 3. System Architecture

React Website
    ↓
Express REST API (/api/v1)
    ↓
Middleware & Business Logic
    ↓
Prisma ORM
    ↓
PostgreSQL

Future Mobile Application
    ↓
Same Express REST API

Keep frontend and backend separate.

Express handles:
- Authentication and authorization.
- Product and category APIs.
- Cart and checkout operations.
- Order management.
- Payment and shipping integrations.
- Database operations.
- Admin operations.

React handles:
- User interface.
- Navigation and interactions.
- Forms and client-side validation.
- API requests and UI state.

Never put database credentials, payment secrets, or trusted business logic in React.

## 4. Main Features

### Customer
- Homepage and featured products.
- Product catalog.
- Search, filtering, and sorting.
- Product detail pages.
- Shopping cart.
- Customer registration and login.
- Address management.
- Checkout.
- Online payment.
- Order history and tracking.
- Product reviews (future feature).

### Admin
- Dashboard overview.
- Product CRUD.
- Category management.
- Product variants and stock.
- Order management.
- Payment status.
- Sales summary.

Admin authorization must be enforced by the backend.

## 5. Frontend Routes

- /
- /shop
- /products/:slug
- /cart
- /checkout
- /checkout/success
- /login
- /register
- /account
- /account/addresses
- /account/orders
- /account/orders/:id
- /admin
- /admin/products
- /admin/categories
- /admin/orders
- /about
- /contact
- /faq
- /shipping-returns
- /privacy
- /terms

## 6. Database Models

Initial Prisma models:

- User
- Address
- Category
- Product
- ProductVariant
- ProductImage
- Cart
- CartItem
- Order
- OrderItem
- Payment
- Review

Important rules:
- Use proper foreign keys and indexes.
- Use decimal-safe money types.
- Store product name and price snapshots in OrderItem.
- Store shipping address snapshots in Order.
- Never store payment card details.
- Use transactions for order and inventory operations.

## 7. Checkout and Payment Flow

1. Customer submits checkout details.
2. React sends the request to Express.
3. Express validates customer data.
4. Express retrieves actual product prices and stock.
5. Express calculates the order total.
6. Express creates a pending order.
7. Express requests payment from Midtrans/Xendit.
8. Customer completes payment.
9. Payment provider sends a webhook.
10. Express verifies the webhook signature.
11. Express updates payment and order status.
12. React fetches the latest order status.

Never trust prices or payment status submitted by the frontend.

Webhook processing must be idempotent.
Prevent duplicate payments and stock overselling.

## 8. Suggested Repository Structure

skincare-store/
├── client/
│   ├── src/
│   │   ├── app/
│   │   ├── components/
│   │   ├── features/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── lib/
│   │   └── assets/
│   └── package.json
│
├── server/
│   ├── src/
│   │   ├── config/
│   │   ├── middleware/
│   │   ├── modules/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── lib/
│   │   └── app.js
│   ├── prisma/
│   │   └── schema.prisma
│   └── package.json
│
├── .env.example
└── README.md

## 9. Development Roadmap

Phase 1 — Foundation
- Setup React + Vite.
- Setup Express.
- Configure PostgreSQL and Prisma.
- Establish API structure.
- Configure CORS and environment variables.

Phase 2 — Storefront
- Homepage.
- Product catalog.
- Product details.
- Search and filters.
- Responsive UI.

Phase 3 — Customer System
- Authentication.
- Customer profile.
- Address management.
- Shopping cart.
- Order history.

Phase 4 — Checkout
- Shipping integration.
- Order creation.
- Payment gateway.
- Webhook handling.
- Inventory management.

Phase 5 — Admin
- Dashboard.
- Product management.
- Category management.
- Stock management.
- Order management.

Phase 6 — Production
- Testing.
- Security review.
- SEO basics.
- Performance optimization.
- Deployment.

## 10. Instructions for AI CLI

Before making changes:

1. Read this entire project guide.
2. Inspect the existing repository.
3. Understand its current structure and dependencies.
4. Report the existing implementation.
5. Propose an implementation plan before editing files.

Development rules:
- Work incrementally.
- Do not implement all phases at once.
- Preserve existing working features.
- Use readable and maintainable JavaScript.
- Keep frontend and backend responsibilities separate.
- Validate every API request on the server.
- Never expose secrets.
- Never fake successful payment transactions.
- Follow official documentation for external integrations.
- Run available tests and build checks after changes.

At the end of each task, summarize:
- What changed.
- Files created or modified.
- Tests and commands executed.
- Remaining issues.
- Recommended next step.

The long-term goal is a reusable e-commerce backend that supports both the React website and a future mobile application.
