# Style Guide

## Project Theme

Dark theme with vibrant neon highlights to emphasize innovation and intelligence. The aesthetic is futuristic, minimal, and high-contrast. Inspired by AI systems, holographic interfaces, and precision tooling. Matches the logo's dominant colors: deep black, electric blue, bright cyan, and soft violet.

---

## Color System

### Primary Color Palette

- `primary` - `#00BFFF` - Core electric blue, used for CTAs and key actions
- `primary-light` - `#33CCFF` - Hover state for primary buttons
- `primary-dark` - `#0080BF` - Used in gradients and shadows for depth

### Secondary Color Palette

- `secondary` - `#8A2BE2` - Soft violet accent for highlights and tags
- `secondary-light` - `#B76EFF` - Used for hover/focus or decorative accents

### Accent Colors

- `accent` - `#38FFB7` - Fluorescent mint green for interactive elements, progress, or glow effects
- `accent-2` - `#FFD700` - Gold for recognition, badges, or status highlights

### Background and Surface Colors

- `background` - `#0C0C0C` - Main site background, ultra-dark gray
- `surface` - `#1A1A1A` - Containers, cards, and modal backgrounds
- `white` - `#FFFFFF`
- `black` - `#000000`

### Semantic Colors

- `success` - `#3FB950`
- `warning` - `#F7C948`
- `error` - `#EF4444`
- `info` - `#00BFFF`

### Neutral Colors

- `neutral` - `#CCCCCC` - For secondary text
- `neutral-dark` - `#666666` - Borders, UI outlines
- `neutral-light` - `#2A2A2A` - Light surface variant

---

## Typography

### Font Families

- `sans` - `Inter, system-ui, sans-serif` – Primary UI font
- `mono` - `JetBrains Mono, monospace` – For code snippets or developer-facing content

### Font Sizes

- `2xs` - `0.625rem/0.75rem`
- `xs` - `0.75rem/1rem`
- `sm` - `0.875rem/1.25rem`
- `base` - `1rem/1.5rem`
- `lg` - `1.125rem/1.75rem`
- `xl` - `1.25rem/1.75rem`
- `2xl` - `1.5rem/2rem`
- `3xl` - `1.875rem/2.25rem`
- `4xl` - `2.25rem/2.5rem`
- `5xl` - `3rem/1`

### Font Weights

- `font-regular` - `400`
- `font-medium` - `500`
- `font-semibold` - `600`
- `font-bold` - `700`

### Code Typography

```tsx
<code className="bg-neutral-light text-accent px-1 py-0.5 rounded font-mono text-sm">
  code
</code>
```

---

## Spacing and Layout

### Container

```tsx
<div className="container mx-auto px-4 md:px-6 lg:px-8">{/* content */}</div>
```

### Spacing Scale (Tailwind default + custom)

- `0` - `0rem`
- `1` - `0.25rem`
- `2` - `0.5rem`
- `3` - `0.75rem`
- `4` - `1rem`
- `5` - `1.25rem`
- `6` - `1.5rem`
- `8` - `2rem`
- `10` - `2.5rem`
- `12` - `3rem`
- `16` - `4rem`
- `20` - `5rem`

---

## Borders & Radii

- `DEFAULT` - `0.375rem` (6px)
- `md` - `0.5rem`
- `lg` - `0.75rem`
- `xl` - `1rem`

---

## Shadows

- `sm` - `0 1px 2px rgba(0,0,0,0.05)`
- `DEFAULT` - `0 2px 4px rgba(0,0,0,0.15)`
- `md` - `0 4px 12px rgba(0,0,0,0.2)`
- `lg` - `0 10px 20px rgba(0,191,255,0.3)` // glow effect

---

## Special Effects

### Glow

```tsx
<div className="hover:shadow-[0_0_20px_rgba(0,191,255,0.4)] transition-all duration-300">
  Glow on hover
</div>
```

### Gradient

```tsx
bg-gradient-to-r from-primary via-secondary to-accent
```

---

## Responsive Design

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

---

## Common UI Patterns

### Card

```tsx
<div className="bg-surface rounded-lg shadow-lg p-6 border border-neutral-dark">
  <h3 className="text-xl font-semibold text-white mb-2">Card Title</h3>
  <p className="text-neutral mb-4">Description</p>
</div>
```

### CTA Button

```tsx
<button className="bg-primary text-black font-bold px-6 py-3 rounded-lg hover:bg-primary-light">
  Call to Action
</button>
```

### Input Field

```tsx
<input className="w-full bg-neutral-light border border-neutral-dark text-white rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary" />
```

---

## Best Practices

1. Follow color contrast guidelines (WCAG AA)
2. Prioritize mobile-first responsive design
3. Use `cn()` utility for conditional class merging
4. Apply consistent spacing for layout rhythm
5. Use Tailwind tokens and avoid hardcoded values
6. Adhere to accessibility standards
7. Document visual changes and add tests

---

_This file defines the visual language of the AI-Mapping project. All components and pages must conform to this guide._
