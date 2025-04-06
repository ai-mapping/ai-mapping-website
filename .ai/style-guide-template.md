# Style Guide Template

This is a template for creating a comprehensive style guide for your project. Replace the placeholder values with your project's specific design tokens and guidelines.

## Project Theme

[DESCRIPTION: Brief description of your project's visual theme and aesthetic. Example: "Modern light theme with blue accents" or "Dark theme with vibrant accents for a tech-focused aesthetic"]

## Color System

### Using Theme Colors

Theme colors are defined in `app/globals.css` and `tailwind.config.ts`. To use these colors:

```tsx
// Example: Using theme colors in a component
<div className="bg-[COLOR_SURFACE] text-[COLOR_TEXT]">
  <h2 className="text-[COLOR_TEXT]">Heading</h2>
  <a className="text-[COLOR_LINK] hover:text-[COLOR_LINK_HOVER]">Link</a>
  <button className="bg-[COLOR_PRIMARY] text-[COLOR_TEXT_ON_PRIMARY] hover:bg-[COLOR_PRIMARY_HOVER]">Button</button>
</div>
```

### Primary Color Palette

- `primary` - [HEX_VALUE] - [DESCRIPTION: Main brand color, used for primary CTAs, buttons, etc.]
- `primary-light` - [HEX_VALUE] - [DESCRIPTION: Lighter variant of primary, used for hover states, highlights, etc.]
- [ADD ADDITIONAL PRIMARY COLORS AS NEEDED]

### Secondary Color Palette

- `secondary` - [HEX_VALUE] - [DESCRIPTION: Secondary brand color, used for accents, interactive elements, etc.]
- `secondary-light` - [HEX_VALUE] - [DESCRIPTION: Lighter variant of secondary, used for hover states, highlights, etc.]
- [ADD ADDITIONAL SECONDARY COLORS AS NEEDED]

### Accent Colors

- `accent` - [HEX_VALUE] - [DESCRIPTION: Special highlight color, used for attention-grabbing elements, etc.]
- [ADD ADDITIONAL ACCENT COLORS AS NEEDED]

### Background and Surface Colors

- `background` - [HEX_VALUE] - [DESCRIPTION: Main page background color]
- `surface` - [HEX_VALUE] - [DESCRIPTION: Color for cards, content containers, etc.]
- [ADD ADDITIONAL BACKGROUND COLORS AS NEEDED]
- `white` - [HEX_VALUE] - [DESCRIPTION: Pure white, used for certain UI elements]
- `black` - [HEX_VALUE] - [DESCRIPTION: Pure black, used for certain UI elements]

### Semantic Colors

- `success` - [HEX_VALUE] - [DESCRIPTION: Used for success states and indicators]
- `warning` - [HEX_VALUE] - [DESCRIPTION: Used for warning states and indicators]
- `error` - [HEX_VALUE] - [DESCRIPTION: Used for error states and indicators]
- `info` - [HEX_VALUE] - [DESCRIPTION: Used for informational states]
- [ADD ADDITIONAL SEMANTIC COLORS AS NEEDED]

### Neutral Colors

- `neutral` - [HEX_VALUE] - [DESCRIPTION: Neutral elements, secondary text]
- `neutral-dark` - [HEX_VALUE] - [DESCRIPTION: Darker neutral, borders, dividers]
- `neutral-light` - [HEX_VALUE] - [DESCRIPTION: Lighter neutral, backgrounds]
- [ADD ADDITIONAL NEUTRAL COLORS AS NEEDED]

### Status Indicator Colors

- `[STATUS_COLOR_NAME]` - [HEX_VALUE] - [DESCRIPTION: Used for specific status indicators]
- [ADD ADDITIONAL STATUS COLORS AS NEEDED]

## Typography

### Font Families

- `sans` - [FONT_NAMES] - [DESCRIPTION: Used for general text]
- `mono` - [FONT_NAMES] - [DESCRIPTION: Used for code blocks, technical content]
- `serif` - [FONT_NAMES] - [DESCRIPTION: Used for specific content types]
- [ADD ADDITIONAL FONT FAMILIES AS NEEDED]

### Text Styles

```tsx
// Heading examples
<h1 className="text-[SIZE] font-[WEIGHT] text-[COLOR]">Main Heading</h1>
<h2 className="text-[SIZE] font-[WEIGHT] text-[COLOR]">Section Heading</h2>
<h3 className="text-[SIZE] font-[WEIGHT] text-[COLOR]">Subsection Heading</h3>

// Text examples
<p className="text-[SIZE] text-[COLOR]">Regular paragraph text</p>
<p className="text-[SIZE] text-[COLOR]">Smaller supporting text</p>

// Highlighted text examples
<span className="text-[HIGHLIGHT_COLOR]">Highlighted text</span>
```

### Font Sizes

- `2xs` - [SIZE/LINE_HEIGHT] - [DESCRIPTION: Extra extra small text]
- `xs` - [SIZE/LINE_HEIGHT] - [DESCRIPTION: Extra small text]
- `sm` - [SIZE/LINE_HEIGHT] - [DESCRIPTION: Small text]
- `base` - [SIZE/LINE_HEIGHT] - [DESCRIPTION: Base text size]
- `lg` - [SIZE/LINE_HEIGHT] - [DESCRIPTION: Large text]
- `xl` - [SIZE/LINE_HEIGHT] - [DESCRIPTION: Extra large text]
- `2xl` - [SIZE/LINE_HEIGHT] - [DESCRIPTION: Heading level 3]
- `3xl` - [SIZE/LINE_HEIGHT] - [DESCRIPTION: Heading level 2]
- `4xl` - [SIZE/LINE_HEIGHT] - [DESCRIPTION: Heading level 1]
- `5xl` - [SIZE/LINE_HEIGHT] - [DESCRIPTION: Largest heading]
- [ADD ADDITIONAL FONT SIZES AS NEEDED]

### Font Weights

- `font-regular` - [WEIGHT_VALUE] - [DESCRIPTION: For normal text]
- `font-medium` - [WEIGHT_VALUE] - [DESCRIPTION: For slightly emphasized text]
- `font-semibold` - [WEIGHT_VALUE] - [DESCRIPTION: For headings and subheadings]
- `font-bold` - [WEIGHT_VALUE] - [DESCRIPTION: For main headings and strong emphasis]
- [ADD ADDITIONAL FONT WEIGHTS AS NEEDED]

### Code Typography

```tsx
<code className="bg-[BG_COLOR] text-[TEXT_COLOR] px-1 py-0.5 rounded font-mono text-sm">code example</code>
<pre className="bg-[BG_COLOR] p-4 rounded-lg overflow-x-auto">
  <code className="text-[TEXT_COLOR] font-mono text-sm">const example = "multiline code";</code>
</pre>
```

## Spacing and Layout

### Container

```tsx
<div className="container mx-auto px-4">
  {/* Content */}
</div>
```

### Spacing Scale

- `0` - [VALUE] - [DESCRIPTION: No spacing]
- `1` - [VALUE] - [DESCRIPTION: Extra small spacing]
- `2` - [VALUE] - [DESCRIPTION: Small spacing]
- `3` - [VALUE] - [DESCRIPTION: Medium-small spacing]
- `4` - [VALUE] - [DESCRIPTION: Medium spacing]
- `5` - [VALUE] - [DESCRIPTION: Medium-large spacing]
- `6` - [VALUE] - [DESCRIPTION: Large spacing]
- `8` - [VALUE] - [DESCRIPTION: Extra large spacing]
- `10` - [VALUE] - [DESCRIPTION: 2x large spacing]
- `12` - [VALUE] - [DESCRIPTION: 3x large spacing]
- [ADD ADDITIONAL SPACING VALUES AS NEEDED]

## Borders

### Border Radius

- `DEFAULT` - [VALUE] - [DESCRIPTION: Default small radius]
- `md` - [VALUE] - [DESCRIPTION: Medium radius]
- `lg` - [VALUE] - [DESCRIPTION: Large radius]
- `xl` - [VALUE] - [DESCRIPTION: Extra large radius]
- [ADD ADDITIONAL BORDER RADIUS VALUES AS NEEDED]

## Shadows

- `sm` - [VALUE] - [DESCRIPTION: Small subtle shadow]
- `DEFAULT` - [VALUE] - [DESCRIPTION: Default medium shadow]
- `md` - [VALUE] - [DESCRIPTION: Medium-pronounced shadow]
- `lg` - [VALUE] - [DESCRIPTION: Large shadow for elevated elements]
- [ADD ADDITIONAL SHADOW VALUES AS NEEDED]

## Special Effects

[DESCRIPTION: Any special effects like glows, gradients, animations]

```tsx
// Example of glow effect
<div className="hover:shadow-[0_0_20px_rgba(R,G,B,0.3)] transition-all duration-300">
  Hover to see the glow effect
</div>
```

## Responsive Design

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Grid items */}
</div>
```

### Breakpoints

- Default (no prefix): Mobile (<640px)
- `sm:`: Small screens (≥640px)
- `md:`: Medium screens (≥768px)
- `lg:`: Large screens (≥1024px)
- `xl:`: Extra large screens (≥1280px)
- `2xl:`: 2x Extra large screens (≥1536px)

## Common UI Patterns

### Cards

```tsx
<div className="bg-[BG_COLOR] rounded-[RADIUS] shadow-[SHADOW] p-[SPACING] border border-[BORDER_COLOR]">
  <h3 className="font-[WEIGHT] text-[SIZE] mb-[SPACING] text-[TEXT_COLOR]">Card Title</h3>
  <p className="text-[TEXT_COLOR] mb-[SPACING]">Card content...</p>
  <button className="bg-[BUTTON_BG] text-[BUTTON_TEXT] [OTHER_STYLES]">Action</button>
</div>
```

### Forms

```tsx
<form className="space-y-[SPACING]">
  <div>
    <label className="block text-[SIZE] font-[WEIGHT] text-[LABEL_COLOR] mb-[SPACING]">Field Label</label>
    <input
      type="text"
      className="w-full px-[PADDING_X] py-[PADDING_Y] bg-[BG_COLOR] border border-[BORDER_COLOR] text-[TEXT_COLOR] rounded 
                 focus:outline-none focus:ring-[RING_WIDTH] focus:ring-[RING_COLOR] focus:border-transparent"
    />
  </div>
  <button type="submit" className="bg-[BUTTON_BG] text-[BUTTON_TEXT] [OTHER_STYLES]">Submit</button>
</form>
```

### Tables

```tsx
<div className="rounded-[RADIUS] overflow-hidden border border-[BORDER_COLOR]">
  <table className="min-w-full bg-[TABLE_BG]">
    <thead>
      <tr className="bg-[HEADER_BG] text-[HEADER_TEXT] border-b border-[BORDER_COLOR]">
        <th className="py-[PADDING_Y] px-[PADDING_X] text-left font-[WEIGHT]">Header 1</th>
        <th className="py-[PADDING_Y] px-[PADDING_X] text-left font-[WEIGHT]">Header 2</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-[DIVIDER_COLOR]">
      <tr className="hover:bg-[HOVER_BG]">
        <td className="py-[PADDING_Y] px-[PADDING_X] text-[CELL_TEXT]">Content 1</td>
        <td className="py-[PADDING_Y] px-[PADDING_X] text-[CELL_TEXT]">Content 2</td>
      </tr>
    </tbody>
  </table>
</div>
```

## Best Practices

1. **Ensure contrast**: Maintain WCAG AA contrast (4.5:1) for text readability
2. **Use appropriate spacing**: Follow the spacing scale consistently
3. **Mobile-first**: Design for mobile first and add responsive variants for larger screens
4. **Document complex components**: Add comments for non-obvious solutions
5. **Maintain consistency**: Use the design tokens defined in this guide consistently
6. [ADD ADDITIONAL BEST PRACTICES]

## How to Use This Template

1. **Project Setup**:
   - Copy this template to `src/theme/style-guide.md` in your project
   - Replace all placeholders (text in [BRACKETS]) with your project's specific values
   - Add or remove sections as needed for your project

2. **Color System Setup**:
   - Define your color palette in `tailwind.config.ts` and `app/globals.css`
   - Update the color values and descriptions in this guide to match

3. **Typography Setup**:
   - Define your typography settings in `tailwind.config.ts`
   - Update the font families, sizes, and weights in this guide

4. **Spacing and Components**:
   - Define your spacing scale and component styles
   - Create example components that follow the guidelines

5. **Review and Refine**:
   - Review the completed style guide with your team
   - Refine and expand as needed based on project requirements

6. **Share with Team**:
   - Ensure all team members have access to the style guide
   - Encourage consistent use of the defined styles and patterns

This template should be populated at the beginning of your project and updated as the design system evolves.