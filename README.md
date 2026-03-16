# YR Media - Vite React TypeScript Project

This project was created with Vite, React, TypeScript, and Tailwind CSS.

## Project Structure

```
yrmedia/
├── src/
│   ├── components/
│   │   ├── Hero.tsx       # Hero section component
│   │   └── Page1.tsx      # Features page component
│   ├── App.tsx            # Main App component
│   ├── main.tsx           # Application entry point
│   ├── index.css          # Global styles with Tailwind
│   └── vite-env.d.ts      # Vite type definitions
├── index.html             # HTML entry point
├── vite.config.ts         # Vite configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── postcss.config.js      # PostCSS configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Project dependencies
```

## Features

- ⚡ **Vite** - Lightning fast development server
- ⚛️ **React 19** - Latest React version
- 📘 **TypeScript** - Type-safe code
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🎯 **Lucide React** - Beautiful icon library

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

Dependencies are already installed. If you need to reinstall:

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173/`

### Build

Build the project for production:

```bash
npm run build
```

### Preview

Preview the production build:

```bash
npm run preview
```

## Components

### Hero.tsx
The landing page hero section featuring:
- Animated gradient text
- Custom fonts (Syne, Outfit, Covered By Your Grace, Zalando Sans)
- SVG noise/grain overlay
- Responsive navigation header

### Page1.tsx
Features showcase section with:
- 6 feature cards with icons
- Hover animations and effects
- Mobile-friendly carousel layout
- Desktop grid layout

## Customization

- Modify colors in `tailwind.config.js`
- Update components in `src/components/`
- Add new pages by creating components and importing them in `App.tsx`

## Technologies Used

- **Vite 7.3.1** - Build tool
- **React 19.2.4** - UI library
- **TypeScript 5.9.3** - Type safety
- **Tailwind CSS 4.2.1** - Styling
- **Lucide React 0.576.0** - Icons
- **PostCSS & Autoprefixer** - CSS processing

## License

ISC

---

Built with ❤️ for YR Media
