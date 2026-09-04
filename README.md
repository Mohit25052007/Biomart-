# BioMart — Eco-Commerce & Wholesale Marketplace Prototype

**Choose Better. Choose Bio.**

A fully working React + Vite + Tailwind prototype for BioMart, an eco-friendly e-commerce and wholesale
marketplace. No backend, no API keys — everything runs on local state and `localStorage`, seeded with
realistic demo data so it works the moment you run it.

## Getting Started

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Demo Login

- Email: `demo@biomart.com`
- Password: `demo123`

(Or create a new account via Sign Up — no email verification required.)

## What's included

- **30 realistic products** across 9 categories (tableware, food packaging, bags, kitchen, personal care,
  stationery, cleaning, paper products, eco gifts), each with images, eco-benefits, specs, and bulk pricing tiers.
- **Full B2C shopping flow**: browse -> search -> filter/sort -> product details -> cart -> wishlist -> checkout
  (address -> delivery -> payment) -> order confirmation -> order tracking, all persisted in `localStorage`.
- **B2B / Bulk Orders**: dedicated page with a live bulk-pricing calculator, a bulk order request form, and a
  "Become a Business Customer" section.
- **BioMart Private Label**: a section under About plus a dedicated Brands page showcasing BioMart-branded products.
- **User account**: profile, orders, wishlist, saved addresses, payment methods (mock), notifications.
- **Admin dashboard** at `/admin`: stats overview, product management (add/edit stock/delete), order list, and
  bulk request list — all backed by local state.
- **Reviews**: sample reviews per product, plus the ability to submit a review from a product page or after a
  delivered order (persisted to `localStorage`).
- **Responsive design**: desktop header/nav, mobile bottom navigation bar, mobile filter drawer, responsive
  grids throughout.
- **Empty & error states**: empty cart, empty wishlist, no search results, invalid login, no orders, out of
  stock — all polished with clear next steps.

## Tech Stack

- React 19 + Vite
- React Router v7
- Tailwind CSS
- lucide-react icons
- No external APIs, no API keys required — product images are pulled from Unsplash's public CDN via URL only.

## Project Structure

```
src/
  components/   Header, Footer, MobileBottomNav, ProductCard, FilterSidebar, Rating, Price, etc.
  context/      AuthContext, CartContext, WishlistContext, OrderContext (all localStorage-backed)
  data/         products.js, categories.js, reviews.js - the mock catalog & content
  pages/        One file per route (Home, ProductListing, ProductDetails, Cart, Checkout, Admin, etc.)
  utils/        storage helpers, product filter/sort hook
```

## Notes for extending to a real backend

The context providers (`AuthContext`, `CartContext`, `WishlistContext`, `OrderContext`) are the seams where a
real API would plug in - each exposes the same shape of data and actions a REST or GraphQL backend would, so
swapping `localStorage` calls for `fetch`/API calls is a contained change per file.
