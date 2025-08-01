# Restaurant Layout Template

A modern, responsive restaurant website template built with React 19, TypeScript, and Vite. This project follows Feature-Sliced Design (FSD) architecture principles and demonstrates best practices for scalable React applications.

## Features

- **Modern Tech Stack**: React 19.1, TypeScript, Vite 7.0
- **Feature-Sliced Design**: Clean, scalable architecture
- **CSS Modules**: Component-scoped styling with SCSS
- **Custom Typography**: Rational TW Text font family
- **Responsive Design**: Mobile-first approach
- **Motion Animations**: Smooth interactions with Motion library
- **Clean Code**: ESLint + Prettier configuration

## Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd restaurant-layout-template

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

```bash
npm run dev      # Start development server (localhost:5173)
npm run build    # Build for production
npm run lint     # Run ESLint
npm run preview  # Preview production build locally
```

## Project Structure

This project follows **Feature-Sliced Design (FSD)** architecture:

```
src/
├── app/                    # Application initialization
│   ├── App.tsx            # Main app component
│   └── App.module.scss    # Global app styles
│
├── pages/                  # Page-level components
│   └── PageHome/          # Home page
│
├── widgets/                # Complex UI blocks
│   ├── layout/
│   │   └── Header/        # Site header
│   └── sections/
│       ├── SectionHero/           # Hero section
│       ├── SectionAboutUs/        # About us section
│       └── SectionOpeningHours/   # Opening hours section
│
├── shared/                 # Reusable resources
│   ├── assets/
│   │   └── fonts/         # Custom fonts
│   ├── data/              # Static data
│   ├── lib/
│   │   └── hooks/         # Custom React hooks
│   ├── styles/            # Global styles and utilities
│   └── ui/
│       └── buttons/       # Reusable UI components
│
└── main.tsx               # Application entry point
```

## Styling System

### CSS Modules + SCSS

All components use CSS Modules for scoped styling:

```scss
// Component.module.scss
.container {
  background-color: var(--primary-color);

  &:hover {
    background-color: var(--primary-hover);
  }
}
```

```tsx
// Component.tsx
import styles from "./Component.module.scss";

export const Component = () => <div className={styles.container}>Content</div>;
```

### Typography

The project uses **Rational TW Text** font family with all weights (100-800) available:

```scss
.text {
  font-family: "Rational TW Text", sans-serif;
  font-weight: 400; // Available: 100, 200, 300, 400, 500, 600, 700, 800
}
```

### Global Styles

- **Modern Normalize**: Browser normalization
- **CSS Custom Properties**: Design tokens for colors, spacing, etc.
- **SCSS Mixins**: Reusable style patterns
- **Responsive Utilities**: Mobile-first breakpoints

## Import System

### Path Mapping

Clean imports using TypeScript path mapping:

```tsx
// Instead of relative imports
import { ButtonForm } from "../../../shared/ui/buttons";

// Use clean barrel exports
import { ButtonForm } from "@shared";
import { SectionHero } from "@widgets";
```

### Barrel Exports

The project uses a hierarchical barrel export system:

```ts
// shared/ui/buttons/index.ts
export { default as ButtonForm } from "./ButtonForm";

// shared/ui/index.ts
export * from "./buttons";

// shared/index.ts
export * from "./ui";
```

## Development Guidelines

### Component Creation

1. **Location**: Place components in appropriate FSD layers
2. **Structure**: Use the established folder structure:
   ```
   ComponentName/
   ├── ComponentName.tsx
   ├── ComponentName.module.scss
   └── index.ts
   ```
3. **Exports**: Add barrel exports for clean imports
4. **Styling**: Use CSS Modules with meaningful class names

### Code Style

- **TypeScript**: Strict mode enabled
- **ESLint**: React and TypeScript rules
- **Prettier**: Consistent code formatting
- **CSS Modules**: Scoped styling only
- **BEM-like**: Descriptive CSS class names

### Best Practices

- Follow Feature-Sliced Design principles
- Use semantic HTML elements
- Implement responsive design patterns
- Optimize images and assets
- Write meaningful commit messages

## Key Dependencies

### Production

- **React 19.1**: Latest React with concurrent features
- **Motion 12.23**: Animation library
- **Classnames**: Conditional CSS classes utility
- **Modern Normalize**: CSS reset

### Development

- **Vite 7.0**: Fast build tool with HMR
- **TypeScript 5.8**: Type safety
- **SCSS**: CSS preprocessing
- **ESLint + Prettier**: Code quality tools

## Responsive Design

The template is built with a mobile-first approach:

- **Breakpoints**: Defined in SCSS variables
- **Flexible Grid**: CSS Grid and Flexbox
- **Scalable Typography**: Relative units
- **Touch-Friendly**: Appropriate tap targets

## Contributing

1. Follow the established project structure
2. Use the existing code style and conventions
3. Write meaningful commit messages
4. Test your changes across different screen sizes

## License

This project is open source and available under the [MIT License](LICENSE).

