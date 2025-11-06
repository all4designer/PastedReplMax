# Sportpath - Sports Field Booking Application

## Overview

Sportpath is a mobile-first web application for finding and booking sports facilities. The application features an interactive map interface showing available sports fields, weather information, booking management, and user profiles. Built with React and TypeScript, it emphasizes a native iOS aesthetic using the MAX UI design system for a consistent, polished mobile experience.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Core Technology Stack:**
- React 18+ with TypeScript for type safety
- Vite for fast development and optimized production builds
- Mobile-first responsive design (320px-414px viewport priority)

**UI Framework Decision:**
The application uses MAX UI (@maxhub/max-ui) as its primary component library, complemented by shadcn/ui components. This hybrid approach was chosen because:
- MAX UI provides iOS-native aesthetic and mobile-optimized components
- shadcn/ui fills gaps with additional UI primitives (dialogs, forms, etc.)
- Both libraries integrate seamlessly with Tailwind CSS
- Provides flexibility while maintaining consistent design language

**Component Architecture:**
- Screen-based navigation system (map, profile, filter screens)
- Stateful components manage UI state locally (selected fields, booking dates)
- Reusable UI components for bookings, weather widgets, field cards
- Mock data layer for development without backend dependency

**Styling Approach:**
- Tailwind CSS with custom theme configuration
- CSS custom properties for dynamic theming
- Light theme throughout (per design guidelines)
- Custom utility classes for hover/active states (hover-elevate, active-elevate-2)

**State Management:**
- React Query (@tanstack/react-query) for server state management
- Local component state with useState for UI interactions
- Currently using mock data, prepared for API integration

### Backend Architecture

**Server Framework:**
- Express.js with TypeScript
- ESM modules for modern JavaScript features
- Development/production mode separation

**Current Implementation:**
The backend is minimal scaffolding prepared for future expansion:
- Route registration system ready for API endpoints
- Storage interface defined but using in-memory implementation
- Vite middleware integration for development
- Production static file serving

**Design Decision - Storage Interface:**
An abstract storage interface (`IStorage`) is defined to allow easy swapping between in-memory development storage and production database implementations. This enables rapid prototyping while maintaining clean architecture for production deployment.

### Data Layer

**Schema Definitions:**
All data types are defined in `shared/schema.ts` using Zod for runtime validation:
- Sport fields with location, ratings, time slots
- User profiles with bookings and history
- Weather information
- Time slot availability

**Why Zod:**
Zod provides both TypeScript types and runtime validation, ensuring data integrity across the full stack. This prevents type mismatches between frontend and backend.

**Database Configuration:**
Drizzle ORM is configured with PostgreSQL dialect, ready for database integration:
- Schema-first approach with migrations support
- Type-safe database queries when backend is implemented
- Currently using mock data in frontend

### External Dependencies

**Maps Integration:**
- Yandex Maps (placeholder implementation)
- Custom marker system for field locations
- Prepared for production map API integration

**UI Component Libraries:**
- @maxhub/max-ui (v0.1.12) - Primary design system
- @radix-ui/* packages - Headless UI primitives for accessibility
- lucide-react - Icon system
- Tailwind CSS - Utility-first styling

**Development Tools:**
- Vite plugins for Replit integration (@replit/vite-plugin-*)
- TypeScript for type safety
- PostCSS with Autoprefixer for CSS processing

**Form & Validation:**
- react-hook-form with @hookform/resolvers
- Zod for schema validation
- Integration ready for booking forms

**Database (Configured, Not Yet Active):**
- @neondatabase/serverless - Serverless PostgreSQL driver
- Drizzle ORM for type-safe database operations
- connect-pg-simple for session storage (when authentication is added)

**Design Decision - Serverless Database:**
Neon serverless PostgreSQL was chosen for:
- Zero-maintenance database infrastructure
- Automatic scaling for variable loads
- Connection pooling handled by the driver
- Cost-effective for development and production

**Utility Libraries:**
- date-fns for date manipulation
- clsx + tailwind-merge for className management
- class-variance-authority for component variants

### Architectural Patterns

**Mobile-First Design:**
All components are designed for mobile viewports first, with the assumption that this will primarily be used on phones. The vertical weather widget, floating buttons, and bottom sheets reflect mobile interaction patterns.

**Screen-Based Navigation:**
Rather than traditional routing, the app uses a state-based screen system (`'map' | 'profile' | 'filter'`). This was chosen for:
- Simpler state management for mobile flows
- Easier transition animations
- Better suited for mobile app-like experience

**Mock Data Development:**
The application includes comprehensive mock data (`lib/mockData.ts`) allowing frontend development without backend dependency. This accelerates UI iteration and provides realistic data for testing.

**Separation of Concerns:**
- `shared/` - Common types and schemas used by both frontend and backend
- `client/` - All frontend code, assets, and components
- `server/` - Backend API and server configuration
- Clear boundaries enable independent development and deployment