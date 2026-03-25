# Poom Portfolio

A personal portfolio built with Next.js, React, TypeScript, Tailwind CSS, and Framer Motion.

This project showcases selected frontend work, design direction, technical skills, and contact details in a clean single-page experience with animated sections and a custom intro loader.

## Overview

The site is structured as a modern landing-page style portfolio with dedicated sections for:

- Hero
- About
- Expertise
- Selected projects
- Contact

The visual direction focuses on:

- bold typography
- dark editorial-style layouts
- motion-driven transitions
- responsive behavior across desktop and mobile

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Lucide React
- Vercel Analytics

## Features

- Responsive single-page portfolio layout
- Animated hero section and intro loader
- Project showcase with interactive cards
- Contact section with quick access links
- Smooth section-based navigation
- Mobile-aware animation tuning for better performance

## Project Structure

```text
app/
  ClientLayout.tsx
  layout.tsx
  page.tsx

components/
  About.tsx
  AnimatedBg.tsx
  Contact.tsx
  Expertise.tsx
  Hero.tsx
  Loader.tsx
  NavBar.tsx
  Projects.tsx
```

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## Available Scripts

```bash
npm run dev
```

Runs the app in development mode.

```bash
npm run build
```

Builds the app for production.

```bash
npm run start
```

Starts the production server.

```bash
npm run lint
```

Runs ESLint.

## Notes

- The portfolio uses Framer Motion for animated UI transitions.
- Mobile performance has been tuned by reducing heavier background motion on smaller screens.
- The intro loader is intentionally lightweight to avoid slowing down page startup.
