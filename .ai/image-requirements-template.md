# Project Image Requirements Template

This document specifies all image assets required for the project, their sizes, and usage details.

## How to Use This Template

1. Generate or design all images according to the specifications below
2. Place the generated images in the `.ai/images/` folder
3. Claude will copy the images to their appropriate locations in the project

## Logo Images

### Main Brand Logo

- **File Path**: `/public/images/logo/companyName-logo.[svg/png]`
- **Size**: Approximately 110x110px
- **Description**: Primary brand logo mark displaying "AI" text
- **Usage**: Header component, favicon, marketing materials
- **Style Notes**:
  - Should use primary color (See style-guide.md)
  - Clean, modern design with bold typography
  - Should be recognizable at small sizes

### Brand Text Logo

- **File Path**: `/public/images/logo/companyName-text.[svg/png]`
- **Size**: Approximately 160x50px
- **Description**: Text-based logo showing the full brand name
- **Usage**: Header component, alongside the main logo
- **Style Notes**:
  - Should match the brand colors and typography
  - Clean, modern design with appropriate letter spacing

## Partner/Brand Logos

### Main Brand Logos (Large)

- **File Path**: `/public/images/placeholders/[brand-name]-logo.[svg/png]`
- **Size**: Height 70-80px, width variable (maintain aspect ratio)
- **Description**: Logos of main technology partners or frameworks
- **Usage**: Brands component, prominent display in partner sections
- **Required Logos**:
  - `/public/images/placeholders/react-logo.[svg/png]`
  - `/public/images/placeholders/nextjs-logo.[svg/png]`

### Secondary Brand Logos (Small)

- **File Path**: `/public/images/placeholders/[brand-name]-logo.[svg/png]`
- **Size**: Height ~40px, width variable (maintain aspect ratio)
- **Description**: Logos of secondary technologies or partners
- **Usage**: Brands component, secondary display in partner sections
- **Required Logos**:
  - `/public/images/placeholders/tailwind-logo.[svg/png]`
  - `/public/images/placeholders/typescript-logo.[svg/png]`
  - `/public/images/placeholders/gatsby-logo.[svg/png]`
  - `/public/images/placeholders/remix-logo.[svg/png]`
  - `/public/images/placeholders/astro-logo.[svg/png]`

### Partner/Industry Logos

- **File Path**: `/src/components/ui/logos/[brand-name].[png/jpg]`
- **Size**: Height 50-70px, width variable
- **Description**: Logos of industry partners, suppliers, or clients
- **Usage**: Industry sections, partner showcases
- **Required Logos**:
  - Multiple industry-specific logos (e.g., komatsu-logo.png, zf-logo.png)

## Feature/Step Images

### How We Work Process Steps

- **File Path**: `/src/components/blocks/HowWeWork/step[1-4].png`
- **Size**: Approximately 300x400px
- **Description**: Illustrations showing different steps of the workflow process
- **Usage**: HowWeWork component, process visualization
- **Required Images**:
  - `step1.png` - Write Content in Markdown illustration
  - `step2.png` - AI Analyzes Your Content illustration
  - `step3.png` - Components Are Generated illustration
  - `step4.png` - Review and Refine illustration
- **Style Notes**:
  - Should have consistent illustration style
  - Should visually represent each step of the process
  - Should incorporate brand colors

## Background Images

### Hero/Section Backgrounds

- **File Path**: `/public/images/placeholders/[context]-bg.jpg`
- **Size**: 1920x1080px recommended (16:9 ratio)
- **Description**: Background images for different sections or contexts
- **Usage**: Hero sections, feature backgrounds
- **Required Images**:
  - `code-bg.jpg` - Programming/code background
  - `marketing.jpg` - Marketing concept background
  - `ecommerce.jpg` - E-commerce concept background
  - `office.jpg` - Office/workspace background
- **Style Notes**:
  - Should have areas of low contrast for text overlay
  - Should match the color scheme of the theme
  - Should be relevant to their context

## UI Icons

The project uses SVG icons defined directly in React components. No image files are required for these.

## Image Optimization Tips

- Optimize all images for web (aim for file sizes under 300KB for larger images)
- Use descriptive filenames for better organization
- Include proper alt text in the code when implementing