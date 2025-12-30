# Pawly Vet - Pet Services Landing Page

## Overview

Pawly Vet is a modern, responsive landing page for a pet services business offering veterinary care, grooming, pet hotel, and retail shop services. The application is built as a full-stack TypeScript project with a React frontend and Express backend, designed primarily as a static content showcase with API endpoints serving pre-defined data.

The site targets Spanish-speaking customers and features a warm, playful pink-themed design with smooth animations, service cards, product listings, testimonials, and team member profiles.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state caching
- **Styling**: Tailwind CSS with CSS custom properties for theming
- **UI Components**: shadcn/ui component library (New York style variant)
- **Animations**: Framer Motion for page transitions and interactions
- **Icons**: Lucide React icon library
- **Fonts**: Nunito (body) and Quicksand (display headings) from Google Fonts

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript with ESM modules
- **Build Tool**: esbuild for production server bundling, Vite for frontend
- **Development**: tsx for TypeScript execution without compilation step

### Data Layer
- **Current Implementation**: In-memory static data storage (MemStorage class)
- **Database Ready**: Drizzle ORM configured with PostgreSQL dialect
- **Schema Location**: `shared/schema.ts` contains TypeScript interfaces and Zod validation schemas
- **API Routes**: Defined in `shared/routes.ts` with Zod response type validation

### Build System
- **Frontend Build**: Vite outputs to `dist/public`
- **Backend Build**: esbuild bundles server with selective dependency bundling for cold start optimization
- **Development**: Vite dev server with HMR proxied through Express

### Project Structure
```
client/           # React frontend application
  src/
    components/   # Reusable UI components
    components/ui/# shadcn/ui primitives
    hooks/        # Custom React hooks
    pages/        # Route page components
    lib/          # Utilities and query client
server/           # Express backend
  routes.ts       # API endpoint definitions
  storage.ts      # Data access layer
  db.ts           # Database connection (Drizzle + pg)
shared/           # Shared types and schemas
  schema.ts       # Data models and Zod schemas
  routes.ts       # API contract definitions
```

### Design Patterns
- **Shared Types**: Schema definitions in `shared/` are used by both frontend and backend
- **API Contract**: Routes defined with method, path, and Zod response schemas
- **Component Composition**: shadcn/ui primitives composed into feature components
- **Custom Hooks**: Domain-specific hooks (`use-pawly.ts`) wrap React Query for data fetching

## External Dependencies

### Database
- **PostgreSQL**: Configured via `DATABASE_URL` environment variable
- **ORM**: Drizzle ORM with `drizzle-kit` for schema migrations
- **Session Store**: connect-pg-simple for Express sessions (available but not currently used)

### Frontend Libraries
- **@tanstack/react-query**: Server state management and caching
- **framer-motion**: Animation library
- **react-day-picker**: Calendar component
- **embla-carousel-react**: Carousel functionality
- **vaul**: Drawer component primitive
- **cmdk**: Command palette component
- **react-hook-form** + **@hookform/resolvers**: Form handling with Zod validation

### Backend Libraries
- **express**: HTTP server framework
- **pg**: PostgreSQL client
- **zod**: Runtime type validation
- **drizzle-zod**: Zod schema generation from Drizzle schemas

### Development Tools
- **Vite**: Frontend dev server and bundler
- **esbuild**: Production server bundler
- **tsx**: TypeScript execution for development
- **tailwindcss**: Utility-first CSS framework
- **@replit/vite-plugin-***: Replit-specific development enhancements