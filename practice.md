src/
├── app/                  # Next.js App Router (if using) - keep as is
│   ├── (routes)/
│   ├── page.tsx
│   └── layout.tsx
│
├── components/           # ← Main focus: organize this properly
│   ├── ui/               # Reusable, generic, primitive components (shadcn-style)
│   │   ├── accordion/
│   │   │   ├── Accordion.tsx
│   │   │   └── accordion.stories.tsx (optional)
│   │   ├── button/
│   │   │   └── Button.tsx
│   │   ├── calendar/
│   │   │   └── Calendar.tsx
│   │   ├── card/
│   │   ├── carousel/
│   │   ├── dropdown/
│   │   ├── skeleton/
│   │   ├── slider/
│   │   └── ... (all your shadcn/ui components)
│   │
│   ├── features/         # Page-specific or feature-rich components
│   │   ├── flight-search/
│   │   │   ├── FlightSearchForm.tsx          ← main form
│   │   │   ├── AirportField.tsx
│   │   │   ├── DateField.tsx
│   │   │   ├── TravellerClassField.tsx
│   │   │   ├── TripTypeSwitcher.tsx
│   │   │   └── flight-search.types.ts
│   │   │
│   │   ├── hotels/
│   │   │   ├── HotelsBanner.tsx
│   │   │   └── HotelCard.tsx
│   │   │
│   │   ├── deals/
│   │   │   └── HotDeals.tsx
│   │   │
│   │   └── home/
│   │       ├── Info.tsx
│   │       ├── AirlinesDemo.tsx
│   │       ├── GlopBanner.tsx
│   │       ├── RatingPersons.tsx
│   │       └── Features.tsx
│   │
│   ├── layout/           # Layout components used across pages
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── Loading.tsx
│   │   └── Navigation.tsx
│   │
│   ├── common/           # Shared non-UI things (optional later)
│   │   ├── Loading.tsx
│   │   ├── ErrorBoundary.tsx
│   │   └── EmptyState.tsx
│   │
│   └── icons/            # Custom icons or wrappers (if needed)
│
├── lib/                  # Utilities, helpers, API clients
│   ├── api.ts
│   ├── utils.ts
│   └── constants.ts
│
├── hooks/                # Custom React hooks
│   ├── useMediaQuery.ts
│   ├── useClickOutside.ts
│   └── useDebounce.ts
│
├── types/                # Global TypeScript types
│   └── index.ts
│
└── public/
    └── assets/