# Lumière — Premium Restaurant App

A luxurious fine-dining restaurant web application built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

## Features

- **Homepage** — Hero section, featured dishes, reviews snippet, reservation CTA
- **Menu** (`/menu`) — Filterable by category (Starters, Mains, Desserts, Drinks), searchable, add-to-cart
- **Cart / Order** (`/cart`) — Manage quantities, order summary with tax & service charge, place order
- **Reservations** (`/reservations`) — 3-step form: date/time → contact details → preferences
- **Reviews** (`/reviews`) — Rating breakdown, guest testimonials, write-a-review form

## Design

- Dark luxury aesthetic with gold accents and Cormorant Garamond / Playfair Display typography
- Fully responsive (mobile-first)
- Smooth animations and micro-interactions

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
restaurant-app/
├── app/
│   ├── layout.tsx          # Root layout with Navbar + Footer
│   ├── globals.css         # Global styles + custom utilities
│   ├── page.tsx            # Homepage
│   ├── menu/page.tsx       # Menu with filters
│   ├── cart/page.tsx       # Cart & order placement
│   ├── reservations/page.tsx # 3-step reservation form
│   └── reviews/page.tsx    # Reviews & testimonials
├── components/
│   ├── Navbar.tsx          # Fixed navbar with cart count badge
│   ├── Footer.tsx          # Footer with links & info
│   ├── MenuCard.tsx        # Individual dish card
│   └── StarRating.tsx      # Reusable star rating
└── lib/
    ├── data.ts             # Menu items, reviews, TypeScript types
    └── cart-context.tsx    # Global cart state (React Context)
```

## Customisation

- **Menu items**: Edit `lib/data.ts` to add/change dishes, prices, images
- **Colors**: Adjust `tailwind.config.ts` — `gold` and `charcoal` palettes
- **Restaurant info**: Update Footer and Reservations page with real details
- **Images**: Replace Unsplash URLs with your own photos

## Built With

- [Next.js 14](https://nextjs.org/) — App Router
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [next/image](https://nextjs.org/docs/api-reference/next/image) — Optimised images
- Google Fonts — Cormorant Garamond, Playfair Display, Jost
