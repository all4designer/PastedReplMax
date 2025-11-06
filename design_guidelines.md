# Sportpath Mobile App Design Guidelines

## Design Approach
**Platform**: iOS-native mobile application aesthetic using MAX UI design system
**Viewport**: Mobile-first (320px-414px)
**Color Scheme**: Light theme throughout

## Core Design Principles
- Native iOS application feel with MAX UI component library
- Clean, minimal interface prioritizing usability
- Smooth transitions and animations between screens
- Consistent spacing and typography from MAX UI design system

## Layout System
**Spacing**: Use MAX UI's built-in spacing scale
- Consistent padding for cards and panels
- Standard margins for list items and sections
- Tight spacing for related elements (booking details, user info)

## Typography
Use MAX UI Typography components:
- **Typography.Title** for screen headers and card titles
- **Typography.Text** for descriptions and body content
- Maintain iOS-style font hierarchy throughout

## Component Architecture

### Main Map Screen
- **Header Panel** (mode="secondary"): User avatar (32px) left, filter button right
- **Weather Carousel**: Horizontal scroll with 5 cards showing day, temperature, weather icon
- **Map Container**: Full-screen Yandex Maps placeholder with custom markers
- **Bottom Sheet Panel**: Slides up on marker click with field details

### Field Detail Bottom Sheet
- Large field photo (Avatar.Image expanded)
- Title with Typography.Title
- 5-star rating display
- Description text
- Booking status: "Сегодня 16:00, 5 человек"
- Two-button layout: Primary "Записаться" + Secondary "Построить маршрут"

### Profile Screen
- **Header Section**: Large avatar (72px) + user name (Typography.Title)
- **Active Bookings List**: 
  - Weather icon indicator per booking
  - Date, time, venue name
  - "Построить маршрут" button
- **History Section**: Similar list format without action buttons

### Filter Screen
- Modal/separate screen with sports type selection
- Grid or list of filter options (football, basketball, etc.)
- Standard iOS-style selections

## Navigation
- Single-screen app with conditional rendering
- Bottom sheet interactions for content overlays
- Smooth screen transitions using React state

## Images
**Profile Avatars**: Circular, 32px (header), 72px (profile screen)
**Field Photos**: Large format in bottom sheet, showcasing venue quality
**Weather Icons**: Small icons in carousel and booking lists
**Map Markers**: Custom icons for different sports field types

## Interactive Elements
**Buttons**: 
- Primary mode for main actions (booking)
- Secondary mode for supplementary actions (directions)
- Icon buttons for filters and navigation

**Cards**: Display weather data and field information
**Panels**: Used for headers and bottom sheets
**Lists**: Booking history and active reservations

## Animations
- Bottom sheet slide-up on marker click
- Screen transitions between main/profile/filter views
- Smooth scroll for weather carousel

## Accessibility
- Clear touch targets (minimum 44px)
- Readable contrast ratios
- Semantic HTML structure through MAX UI components