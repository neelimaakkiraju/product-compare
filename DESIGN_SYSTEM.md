# 🎨 Product Compare Design System

> **Complete design system documentation for consistent, scalable UI development**  
> Version 1.0 • Last Updated: January 30, 2026

---

## 📑 Table of Contents

1. [Introduction](#introduction)
2. [Design Principles](#design-principles)
3. [Color System](#color-system)
4. [Typography](#typography)
5. [Spacing & Layout](#spacing--layout)
6. [Components](#components)
7. [Iconography](#iconography)
8. [Motion & Animation](#motion--animation)
9. [Accessibility](#accessibility)
10. [Dark Mode](#dark-mode)
11. [Usage Guidelines](#usage-guidelines)

---

## Introduction

### What is a Design System?

A design system is a collection of reusable components, guided by clear standards, that can be assembled together to build any number of applications. This document serves as the single source of truth for all design decisions in the Product Compare application.

### Goals

- **Consistency**: Ensure a cohesive user experience across all pages
- **Efficiency**: Speed up development with pre-defined patterns
- **Quality**: Maintain high standards of accessibility and usability
- **Scalability**: Support growth and feature additions

### How to Use This Guide

1. **Designers**: Reference this for UI mockups and prototypes
2. **Developers**: Implement components following these specifications
3. **Product Managers**: Understand design constraints and possibilities
4. **QA**: Use as criteria for visual regression testing

---

## Design Principles

### 1. **Clarity First** 🎯

Users should instantly understand what they can do and what information is presented.

- Use clear, concise labels
- Maintain visual hierarchy
- Avoid unnecessary decoration
- Provide immediate feedback

### 2. **Performance Matters** ⚡

Every design decision should consider its impact on performance.

- Optimize images and assets
- Use CSS transforms over position changes
- Lazy load non-critical content
- Minimize re-renders

### 3. **Accessible by Default** ♿

Design with all users in mind from the start.

- Meet WCAG 2.1 AA standards
- Support keyboard navigation
- Ensure screen reader compatibility
- Respect user preferences (reduced motion, high contrast)

### 4. **Mobile-First** 📱

Design for mobile devices first, then enhance for larger screens.

- Touch-friendly targets (min 44×44px)
- Responsive typography
- Adaptive layouts
- Consider one-handed use

### 5. **Delightful Details** ✨

Small interactions make the experience memorable.

- Smooth animations
- Helpful micro-interactions
- Thoughtful empty states
- Celebratory moments

---

## Color System

### Brand Colors

<table>
  <tr>
    <th>Color</th>
    <th>Hex</th>
    <th>RGB</th>
    <th>Usage</th>
  </tr>
  <tr>
    <td style="background: #3B82F6; color: white;">Blue 500</td>
    <td><code>#3B82F6</code></td>
    <td><code>59, 130, 246</code></td>
    <td>Primary actions, links, focus states</td>
  </tr>
  <tr>
    <td style="background: #8B5CF6; color: white;">Purple 500</td>
    <td><code>#8B5CF6</code></td>
    <td><code>139, 92, 246</code></td>
    <td>Secondary actions, gradients</td>
  </tr>
  <tr>
    <td style="background: #EC4899; color: white;">Pink 500</td>
    <td><code>#EC4899</code></td>
    <td><code>236, 72, 153</code></td>
    <td>Accent, highlights, gradients</td>
  </tr>
</table>

### Full Color Palette

#### Blue (Primary)

```javascript
blue: {
  50:  '#eff6ff',  // Lightest - backgrounds
  100: '#dbeafe',  // Light backgrounds
  200: '#bfdbfe',  // Hover states
  300: '#93c5fd',  // Borders, dividers
  400: '#60a5fa',  // Disabled states
  500: '#3b82f6',  // ✨ Primary brand color
  600: '#2563eb',  // Hover (buttons, links)
  700: '#1d4ed8',  // Active states
  800: '#1e40af',  // Dark mode primary
  900: '#1e3a8a',  // Darkest - text
}
```

#### Gray (Neutral)

```javascript
gray: {
  50:  '#f9fafb',  // Page background (light)
  100: '#f3f4f6',  // Card background (light)
  200: '#e5e7eb',  // Borders (light)
  300: '#d1d5db',  // Dividers
  400: '#9ca3af',  // Disabled text
  500: '#6b7280',  // Secondary text
  600: '#4b5563',  // Body text
  700: '#374151',  // Headings
  800: '#1f2937',  // Card background (dark)
  900: '#111827',  // Page background (dark)
  950: '#030712',  // Darkest (custom)
}
```

#### Success (Green)

```javascript
success: {
  50:  '#f0fdf4',  // Success background
  100: '#dcfce7',  // Success light
  500: '#10b981',  // ✅ Success state
  700: '#047857',  // Success dark
  900: '#064e3b',  // Success darkest
}
```

#### Warning (Amber/Yellow)

```javascript
warning: {
  50:  '#fffbeb',  // Warning background
  100: '#fef3c7',  // Highlight background
  200: '#fde68a',  // Highlight border
  500: '#f59e0b',  // ⚠️ Warning state
  700: '#d97706',  // Warning dark
  900: '#78350f',  // Warning darkest
}
```

#### Error (Red)

```javascript
error: {
  50:  '#fef2f2',  // Error background
  100: '#fee2e2',  // Error light
  500: '#ef4444',  // ❌ Error state
  700: '#dc2626',  // Error dark
  900: '#7f1d1d',  // Error darkest
}
```

### Gradients

```css
/* Primary Gradient */
.gradient-primary {
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
}

/* Rainbow Gradient (Headers) */
.gradient-rainbow {
  background: linear-gradient(90deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%);
}

/* Subtle Background */
.gradient-bg-light {
  background: linear-gradient(135deg, #f9fafb 0%, #eff6ff 50%, #faf5ff 100%);
}

.gradient-bg-dark {
  background: linear-gradient(135deg, #030712 0%, #111827 50%, #1a1625 100%);
}
```

### Color Usage Guidelines

| Element          | Light Mode | Dark Mode  |
| ---------------- | ---------- | ---------- |
| Page Background  | `gray-50`  | `gray-900` |
| Card Background  | `white`    | `gray-800` |
| Primary Text     | `gray-900` | `gray-100` |
| Secondary Text   | `gray-600` | `gray-400` |
| Border           | `gray-200` | `gray-700` |
| Hover Background | `gray-100` | `gray-700` |
| Focus Ring       | `blue-500` | `blue-400` |

### Contrast Requirements

All color combinations must meet **WCAG 2.1 AA** standards:

- **Normal text (16px+)**: Minimum 4.5:1 contrast ratio
- **Large text (24px+)**: Minimum 3:1 contrast ratio
- **UI components**: Minimum 3:1 contrast ratio

**Testing Tools:**

- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- Chrome DevTools Accessibility Panel
- [Coolors Contrast Checker](https://coolors.co/contrast-checker)

---

## Typography

### Font Stack

```css
font-family:
  system-ui,
  -apple-system,
  BlinkMacSystemFont,
  "Segoe UI",
  Roboto,
  "Helvetica Neue",
  Arial,
  sans-serif,
  "Apple Color Emoji",
  "Segoe UI Emoji",
  "Segoe UI Symbol";
```

**Why system fonts?**

- ✅ No download required (instant rendering)
- ✅ Native to each platform (familiar to users)
- ✅ Optimized for screen reading
- ✅ Smaller bundle size

### Type Scale

| Class       | Size            | Line Height | Weight  | Use Case                    |
| ----------- | --------------- | ----------- | ------- | --------------------------- |
| `text-xs`   | 12px (0.75rem)  | 16px        | 400-500 | Captions, labels, badges    |
| `text-sm`   | 14px (0.875rem) | 20px        | 400     | Supporting text, table data |
| `text-base` | 16px (1rem)     | 24px        | 400     | Body text, paragraphs       |
| `text-lg`   | 18px (1.125rem) | 28px        | 400-500 | Large body, card titles     |
| `text-xl`   | 20px (1.25rem)  | 28px        | 600     | Small headings, buttons     |
| `text-2xl`  | 24px (1.5rem)   | 32px        | 700     | Section headings            |
| `text-3xl`  | 30px (1.875rem) | 36px        | 700     | Page headings               |
| `text-4xl`  | 36px (2.25rem)  | 40px        | 700-800 | Hero headings               |
| `text-5xl`  | 48px (3rem)     | 48px        | 800     | Display text                |
| `text-6xl`  | 60px (3.75rem)  | 60px        | 800     | Marketing displays          |

### Font Weights

```css
.font-normal {
  font-weight: 400;
} /* Body text */
.font-medium {
  font-weight: 500;
} /* Emphasized text */
.font-semibold {
  font-weight: 600;
} /* Subheadings */
.font-bold {
  font-weight: 700;
} /* Headings */
.font-extrabold {
  font-weight: 800;
} /* Hero text */
```

### Typography Components

#### Heading Hierarchy

```jsx
// Page Title
<h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-gray-100 mb-4">
  Product Compare
</h1>

// Section Heading
<h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-3">
  Featured Products
</h2>

// Subsection Heading
<h3 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
  Comparison Details
</h3>

// Card Title
<h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
  iPhone 14
</h4>
```

#### Body Text

```jsx
// Primary Body
<p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
  This is primary body text with comfortable line height.
</p>

// Secondary Body
<p className="text-sm text-gray-600 dark:text-gray-400">
  This is secondary, smaller text for supporting information.
</p>

// Caption
<span className="text-xs text-gray-500 dark:text-gray-500 uppercase tracking-wide">
  Caption Text
</span>
```

#### Links

```jsx
// Inline Link
<a href="#" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 underline underline-offset-2 transition-colors">
  Learn more
</a>

// Navigation Link
<a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">
  Home
</a>
```

### Responsive Typography

```css
/* Mobile (default) */
h1 {
  font-size: 2.25rem;
} /* 36px */

/* Tablet (640px+) */
@media (min-width: 640px) {
  h1 {
    font-size: 3rem;
  } /* 48px */
}

/* Desktop (1024px+) */
@media (min-width: 1024px) {
  h1 {
    font-size: 3.75rem;
  } /* 60px */
}
```

### Line Length

For optimal readability:

- **Ideal**: 45-75 characters per line
- **Maximum**: 90 characters per line
- **Implementation**: Use `max-w-prose` or `max-w-2xl` classes

```jsx
<p className="max-w-prose text-base">
  This paragraph will never exceed readable width.
</p>
```

---

## Spacing & Layout

### Spacing Scale

Product Compare uses an 8px base unit for consistent spacing:

| Class      | Value | Usage               |
| ---------- | ----- | ------------------- |
| `space-0`  | 0px   | Reset spacing       |
| `space-1`  | 4px   | Tight spacing       |
| `space-2`  | 8px   | Close elements      |
| `space-3`  | 12px  | Related items       |
| `space-4`  | 16px  | **Default spacing** |
| `space-5`  | 20px  | Card padding        |
| `space-6`  | 24px  | Section spacing     |
| `space-8`  | 32px  | Large sections      |
| `space-10` | 40px  | Extra large         |
| `space-12` | 48px  | Page sections       |
| `space-16` | 64px  | Hero sections       |
| `space-20` | 80px  | Major divisions     |

### Layout Containers

```css
/* Page Container */
.container {
  max-width: 1280px; /* 80rem */
  margin: 0 auto;
  padding: 0 1rem; /* 16px */
}

/* Content Width */
.content-narrow {
  max-width: 640px; /* Narrow content */
}

.content-medium {
  max-width: 768px; /* Medium content */
}

.content-wide {
  max-width: 1024px; /* Wide content */
}

.content-full {
  max-width: 1280px; /* Full width */
}
```

### Grid System

#### Product Grid

```jsx
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
  {products.map((product) => (
    <ProductCard key={product.id} product={product} />
  ))}
</div>
```

**Breakpoints:**

- **Mobile (0-639px)**: 1 column
- **Tablet (640-767px)**: 2 columns
- **Desktop (768-1279px)**: 3 columns
- **Large (1280px+)**: 4 columns

#### Feature Grid

```jsx
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
  {/* 2 columns on mobile, 4 on desktop */}
</div>
```

### Component Spacing

#### Card Internal Spacing

```css
/* Standard Card */
padding: 1.25rem; /* 20px - p-5 */

/* Compact Card */
padding: 1rem; /* 16px - p-4 */

/* Spacious Card */
padding: 2rem; /* 32px - p-8 */
```

#### Vertical Rhythm

```css
/* Section Margins */
margin-bottom: 1.5rem; /* 24px - mb-6 */

/* Element Margins */
margin-bottom: 1rem; /* 16px - mb-4 */

/* Tight Margins */
margin-bottom: 0.5rem; /* 8px - mb-2 */
```

### Border Radius

| Class          | Value  | Usage               |
| -------------- | ------ | ------------------- |
| `rounded-sm`   | 2px    | Subtle rounding     |
| `rounded`      | 4px    | Default             |
| `rounded-md`   | 6px    | Medium rounding     |
| `rounded-lg`   | 8px    | Large rounding      |
| `rounded-xl`   | 12px   | Extra large (cards) |
| `rounded-2xl`  | 16px   | **Primary cards**   |
| `rounded-full` | 9999px | Pills, avatars      |

---

## Components

### Buttons

#### Primary Button

```jsx
<button className="px-4 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
  Primary Action
</button>
```

**Specs:**

- Height: 44px minimum (touch-friendly)
- Padding: 16px horizontal, 10px vertical
- Border radius: 12px (`rounded-xl`)
- Font: 600 weight, 16px size
- Shadow: Medium on rest, large on hover

#### Secondary Button

```jsx
<button className="px-4 py-2.5 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-100 font-semibold rounded-xl shadow-sm hover:shadow-md transition-all duration-200 active:scale-95">
  Secondary Action
</button>
```

#### Destructive Button

```jsx
<button className="px-4 py-2.5 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-200 active:scale-95">
  Delete
</button>
```

#### Button Sizes

```jsx
// Small
<button className="px-3 py-1.5 text-sm">Small</button>

// Medium (Default)
<button className="px-4 py-2.5 text-base">Medium</button>

// Large
<button className="px-6 py-3.5 text-lg">Large</button>
```

#### Button States

- **Hover**: Darken color, increase shadow
- **Active**: Scale down (95%)
- **Focus**: Ring outline (accessibility)
- **Disabled**: Opacity 50%, cursor not-allowed

```jsx
<button
  disabled
  className="px-4 py-2.5 bg-gray-300 text-gray-500 rounded-xl opacity-50 cursor-not-allowed"
>
  Disabled
</button>
```

### Cards

#### Standard Product Card

```jsx
<div className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-xl p-5 border-2 border-transparent hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:-translate-y-2">
  {/* Card Content */}
</div>
```

**Specs:**

- Background: White with 80% opacity + blur
- Border radius: 16px (`rounded-2xl`)
- Padding: 20px (`p-5`)
- Border: 2px transparent, blue on hover
- Shadow: Medium on rest, large on hover
- Hover effect: Lift 8px up

#### Glassmorphism Card

```jsx
<div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg rounded-2xl shadow-glass dark:shadow-glass-dark border border-white/20 dark:border-gray-700/50">
  {/* Card Content */}
</div>
```

### Inputs

#### Text Input

```jsx
<input
  type="text"
  className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 transition-colors"
  placeholder="Search products..."
/>
```

**Specs:**

- Height: 48px minimum
- Padding: 16px horizontal, 12px vertical
- Border: 2px solid, color changes on focus
- Focus ring: 2px blue, 2px offset
- Placeholder: 50% opacity

#### Search Input (with icon)

```jsx
<div className="relative">
  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
    <svg className="w-5 h-5 text-gray-400" {...iconProps} />
  </div>
  <input
    type="search"
    className="w-full pl-10 pr-4 py-3 ..."
    placeholder="Search..."
  />
</div>
```

### Badges

```jsx
// Status Badge
<span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200">
  Selected
</span>

// Count Badge
<span className="inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 rounded-full">
  3
</span>
```

### Tables

```jsx
<table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
  <thead className="bg-gray-50 dark:bg-gray-800">
    <tr>
      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
        Feature
      </th>
    </tr>
  </thead>
  <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
      <td className="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">
        Value
      </td>
    </tr>
  </tbody>
</table>
```

---

## Iconography

### Icon System

Product Compare uses **Heroicons** (by Tailwind Labs) for consistency.

#### Icon Sizes

| Size | Dimensions | Class       | Usage             |
| ---- | ---------- | ----------- | ----------------- |
| XS   | 12×12px    | `w-3 h-3`   | Inline indicators |
| SM   | 16×16px    | `w-4 h-4`   | Buttons, badges   |
| MD   | 20×20px    | `w-5 h-5`   | Standard UI       |
| LG   | 24×24px    | `w-6 h-6`   | Headers, emphasis |
| XL   | 32×32px    | `w-8 h-8`   | Feature icons     |
| 2XL  | 48×48px    | `w-12 h-12` | Empty states      |

#### Icon Usage

```jsx
// Outline (default)
<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M..." />
</svg>

// Solid (emphasis)
<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
  <path fillRule="evenodd" d="M..." clipRule="evenodd" />
</svg>
```

#### Common Icons

- **Search**: Magnifying glass
- **Close**: X mark
- **Success**: Checkmark circle
- **Error**: X circle
- **Warning**: Exclamation triangle
- **Info**: Information circle
- **Add**: Plus
- **Remove**: Minus
- **Compare**: Clipboard
- **Share**: Share icon
- **Print**: Printer

### Emoji Usage

Emojis can be used sparingly for personality:

```jsx
<span className="text-2xl mr-2">🎯</span>
<span>Comparing</span>
```

**Guidelines:**

- Use native emojis (no images)
- Ensure proper spacing
- Always provide text alternative
- Test across platforms

---

## Motion & Animation

### Animation Principles

1. **Purposeful**: Every animation should have a reason
2. **Performant**: Use transforms and opacity only
3. **Consistent**: Same duration for similar actions
4. **Respectful**: Honor `prefers-reduced-motion`

### Duration Standards

| Duration | Usage                   | Class          |
| -------- | ----------------------- | -------------- |
| 75ms     | Micro-interactions      | `duration-75`  |
| 150ms    | Hover states, toggles   | `duration-150` |
| 200ms    | **Default transitions** | `duration-200` |
| 300ms    | Smooth state changes    | `duration-300` |
| 500ms    | Page transitions        | `duration-500` |
| 700ms    | Attention-grabbing      | `duration-700` |

### Easing Functions

```css
/* Quick snap */
transition-timing-function: cubic-bezier(0.4, 0, 1, 1); /* ease-in */

/* Smooth start */
transition-timing-function: cubic-bezier(0, 0, 0.2, 1); /* ease-out */

/* Balanced (default) */
transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); /* ease-in-out */

/* Bouncy */
transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55); /* custom */
```

### Animations

#### Fade In Up

```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.4s ease-out;
}
```

**Usage:** Page load, card entrance

#### Scale In

```css
@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-scale-in {
  animation: scaleIn 0.3s ease-out;
}
```

**Usage:** Modals, badges, tooltips

#### Shimmer (Loading)

```css
@keyframes shimmer {
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
}

.animate-shimmer {
  background: linear-gradient(90deg, #f0f0f0 0%, #e0e0e0 50%, #f0f0f0 100%);
  background-size: 1000px 100%;
  animation: shimmer 2s infinite linear;
}
```

**Usage:** Skeleton loaders

### Hover Effects

```css
/* Lift */
.hover-lift {
  transition: transform 200ms ease-out;
}
.hover-lift:hover {
  transform: translateY(-8px);
}

/* Scale */
.hover-scale {
  transition: transform 200ms ease-out;
}
.hover-scale:hover {
  transform: scale(1.05);
}

/* Glow */
.hover-glow {
  transition: box-shadow 200ms ease-out;
}
.hover-glow:hover {
  box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
}
```

### Reduced Motion

**Always respect user preferences:**

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

## Accessibility

### WCAG 2.1 AA Compliance

Product Compare is designed to meet WCAG 2.1 Level AA standards.

### Checklist

- [x] **1.4.3 Contrast**: Minimum 4.5:1 for normal text
- [x] **1.4.11 Non-text Contrast**: 3:1 for UI components
- [x] **2.1.1 Keyboard**: All functionality via keyboard
- [x] **2.4.7 Focus Visible**: Clear focus indicators
- [x] **4.1.2 Name, Role, Value**: Proper ARIA labels

### Keyboard Navigation

| Key           | Action                         |
| ------------- | ------------------------------ |
| `Tab`         | Move to next focusable element |
| `Shift + Tab` | Move to previous element       |
| `Enter`       | Activate button/link           |
| `Space`       | Toggle checkbox/button         |
| `Esc`         | Close modal/dropdown           |
| `Arrow keys`  | Navigate lists/menus           |

### Focus Management

```jsx
// Visible focus indicator
<button className="focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-xl">
  Click me
</button>
```

### Screen Reader Support

```jsx
// ARIA labels
<button aria-label="Add iPhone 14 to comparison">
  Add to Compare
</button>

// ARIA roles
<div role="region" aria-label="Product comparison">
  {/* Content */}
</div>

// ARIA live regions
<div role="status" aria-live="polite" aria-atomic="true">
  3 products selected
</div>

// Hidden from screen readers
<span aria-hidden="true">🎯</span>
```

### Alternative Text

```jsx
// Decorative images
<img src="..." alt="" aria-hidden="true" />

// Informative images
<img src="..." alt="iPhone 14 in midnight blue color" />

// Complex images
<img src="chart.png" alt="Sales chart showing 30% growth" />
<div className="sr-only">
  Detailed description: Sales increased from...
</div>
```

### Color Blindness

Never rely on color alone:

```jsx
// ❌ Bad: Color only
<span className="text-red-500">Error</span>

// ✅ Good: Color + icon + text
<span className="text-red-500">
  <svg className="inline w-4 h-4">...</svg>
  Error: Invalid input
</span>
```

---

## Dark Mode

### Implementation Strategy

Product Compare uses **class-based dark mode** with `localStorage` persistence.

### Color Mapping

| Element        | Light      | Dark       |
| -------------- | ---------- | ---------- |
| Background     | `gray-50`  | `gray-900` |
| Surface        | `white`    | `gray-800` |
| Primary Text   | `gray-900` | `gray-100` |
| Secondary Text | `gray-600` | `gray-400` |
| Border         | `gray-200` | `gray-700` |
| Primary Button | `blue-500` | `blue-600` |
| Hover          | `gray-100` | `gray-700` |

### Usage

```jsx
// Basic usage
<div className="bg-white dark:bg-gray-800">
  <h1 className="text-gray-900 dark:text-gray-100">Title</h1>
  <p className="text-gray-600 dark:text-gray-400">Description</p>
</div>

// Gradients in dark mode
<div className="bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-600 dark:to-purple-700">
  Gradient Text
</div>
```

### Toggle Implementation

```jsx
const [dark, setDark] = useState(() => {
  const saved = localStorage.getItem("theme");
  return (
    saved === "dark" ||
    (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches)
  );
});

useEffect(() => {
  document.documentElement.classList.toggle("dark", dark);
  localStorage.setItem("theme", dark ? "dark" : "light");
}, [dark]);
```

### System Preference Detection

```javascript
// Detect system theme
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

// Listen for changes
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (e) => {
    const newColorScheme = e.matches ? "dark" : "light";
    // Update theme
  });
```

---

## Usage Guidelines

### When to Use What

#### Buttons vs. Links

- **Button**: Triggers an action (submit, add, delete)
- **Link**: Navigates to a new page/section

```jsx
// ✅ Correct
<button onClick={handleAdd}>Add to Compare</button>
<a href="/about">Learn More</a>

// ❌ Incorrect
<a onClick={handleAdd}>Add to Compare</a>
<button onClick={() => navigate('/about')}>Learn More</button>
```

#### Cards vs. Containers

- **Card**: Distinct piece of content (product, article)
- **Container**: Groups related elements

#### Modals vs. Popovers

- **Modal**: Requires user attention (confirmations)
- **Popover**: Supplementary information (tooltips)

### Responsive Design

#### Mobile-First Approach

```jsx
// ✅ Good: Start with mobile, enhance for larger screens
<div className="p-4 sm:p-6 md:p-8">
  <h1 className="text-2xl sm:text-3xl md:text-4xl">Title</h1>
</div>

// ❌ Bad: Desktop-first requires more overrides
<div className="p-8 md:p-6 sm:p-4">
  <h1 className="text-4xl md:text-3xl sm:text-2xl">Title</h1>
</div>
```

#### Touch Targets

Minimum size: **44×44px** (WCAG guideline)

```jsx
// ✅ Large enough
<button className="px-4 py-3">Tap me</button>

// ❌ Too small
<button className="px-2 py-1 text-xs">Tap me</button>
```

### Performance

#### Optimize Images

```jsx
<img src="product.jpg" alt="Product" loading="lazy" width="300" height="300" />
```

#### Minimize Re-renders

```jsx
// Use React.memo for expensive components
const ProductCard = React.memo(({ product }) => {
  // ...
});

// Memoize callbacks
const handleClick = useCallback(() => {
  // ...
}, [dependencies]);
```

---

## Component Library

### Quick Reference

```jsx
// Primary Button
<button className="px-4 py-2.5 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all active:scale-95">
  Button
</button>

// Card
<div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-5 border border-gray-200 dark:border-gray-700">
  Card Content
</div>

// Input
<input className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800" />

// Badge
<span className="inline-flex px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-xs font-medium rounded-full">
  Badge
</span>
```

---

## Changelog

### Version 1.0 (January 30, 2026)

- Initial design system documentation
- Defined color palette with dark mode support
- Established typography scale
- Created spacing system
- Documented component patterns
- Added accessibility guidelines
- Defined animation standards

---

## Resources

### Tools

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Heroicons](https://heroicons.com/)
- [WCAG Quick Reference](https://www.w3.org/WAI/WCAG21/quickref/)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Can I Use](https://caniuse.com/)

### Inspiration

- [Stripe Design System](https://stripe.com/docs/design)
- [Shopify Polaris](https://polaris.shopify.com/)
- [Material Design](https://material.io/design)
- [Apple Human Interface Guidelines](https://developer.apple.com/design/)

---

<div align="center">

**Product Compare Design System v1.0**

_Building beautiful, accessible experiences_

Made with ❤️ and ⚛️ React

</div>
