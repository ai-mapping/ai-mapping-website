# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands
- Development: `pnpm dev` (uses Next.js with Turbopack)
- Build: `pnpm build`
- Start: `pnpm start`
- Lint: `pnpm lint`
- Type checking: `pnpm typecheck`
- Test: `pnpm test`
- Test watch mode: `pnpm test:watch`
- Update snapshots: `pnpm test:update`
- Test coverage: `pnpm test:coverage`
- Validate all: `pnpm validate` (runs typecheck, lint, test, and build)

## Code Style Guidelines
- TypeScript: Use strict mode, explicit types for function parameters and returns
- React: Use functional components with proper typing
- Imports: React/Next.js first, third-party libraries, internal modules, types, assets
- Naming: PascalCase for components, camelCase for functions/variables/hooks
- CSS: Use Tailwind with cn utility for combining classes
- Path Aliases: Use @/* for src/* imports
- Error Handling: Try/catch blocks with typed errors, explicit error propagation

## Style Guide
- **CRITICAL: ALL UI/UX work MUST follow the style guide in `src/theme/style-guide.md`**
- This style guide is the source of truth for all visual aspects of the application
- You MUST consult this guide before creating or modifying any component with visual elements
- **IMPORTANT: If `src/theme/style-guide.md` does not exist, you MUST create it using the template in `.ai/style-guide-template.md` and customize it based on the project's purpose and design requirements**

### When to Use the Style Guide
- When creating new UI components
- When modifying existing components with visual changes
- When implementing responsive design
- When defining colors, typography, spacing, or other visual properties
- When implementing layout structures
- When implementing forms, tables, or other common UI patterns
- When extending the design system

### How to Apply Style Guidelines
1. **Read the entire style guide** before making UI changes
2. **Check existing components** for reference implementations first
3. **Use the defined color system** from `tailwind.config.ts` and avoid custom color values
4. **Use the spacing scale** consistently to maintain visual rhythm
5. **Follow typography guidelines** for headings, text, and interactive elements
6. **Use responsive design patterns** starting with mobile-first approach
7. **Use the `cn()` utility** from `src/lib/cn.ts` to combine class names and resolve conflicts
8. **Test on multiple viewport sizes** to ensure responsive behavior

### Where Styles Are Applied
- **Components (`src/components/**`):** Primary location for component-specific styling using Tailwind classes
- **Layout files (`src/components/layout/`):** Define page structure and basic layout patterns
- **Globals CSS (`src/app/globals.css`):** Contains:
  - Base styles and CSS resets
  - Theme variables (colors, typography, spacing)
  - Global utility classes
  - Base component styles
- **Tailwind Config (`tailwind.config.ts`):** Defines:
  - Color palette
  - Font sizes and line heights
  - Spacing scale
  - Border radius values
  - Shadow definitions  
- **Block Components (`src/components/blocks/`):** Page sections with detailed styling
- **UI Components (`src/components/ui/`):** Reusable UI elements with consistent styling

### Guidelines for Extending Styles
- Use existing variables before creating new ones
- Document any new styles created
- Update tests when visual changes could affect snapshots
- Ensure accessibility compliance with color contrast and text sizes

## Image Requirements

- **IMPORTANT: If project images are missing or you need to add new images, refer to the template in `.ai/image-requirements-template.md`**
- This template describes all required images, their sizes, and usage contexts
- When working with images, follow this workflow:
  1. User generates or designs images following the specifications
  2. User places images in the `.ai/images/` directory
  3. Only then should you copy images to their final project locations
- When suggesting image changes:
  1. Explain what images are needed with basic requirements
  2. Reference the image template
  3. Wait for the user to provide the images before making file changes

## Content Blocks and Page Creation

- **IMPORTANT: When creating new pages or components, always consult `src/components/blocks/content-blocks.md`**
- This guide catalogs all available content blocks with their purposes and usage
- When building a new page:
  1. Review the guide to identify which blocks best represent your content needs
  2. Import appropriate blocks from `@/components/blocks`
  3. Pass content-specific props to customize each block
- When creating a new content block:
  1. Follow the guidelines in the content blocks guide
  2. Add the new component to the document with a description of its purpose and usage
  3. Create tests following the established patterns
- Always keep the content blocks guide updated when modifying existing blocks

## Project Structure
- Components organized by feature and purpose
- Follow existing patterns for new code
- Use explicit typing with interface/type exports

## Components Organization
- blocks/: Page sections (Advantages, FAQ, HowWeWork) for content blocks
- forms/: Form components and utilities for data submission and validation
- layout/: Structural components (Header, Footer, Hero) defining page architecture
- stubs/: Static HTML templates used for development reference
- ui/: Reusable UI elements and icons for consistent styling

### Shared Components
The project follows a shared component pattern for reusable UI elements:

1. Create generic, reusable components with descriptive names that indicate function (e.g., `MarkdownContent` rather than content-specific names)
2. Keep content files specific to where/how they are used (e.g., `regional.md` for regional section content)
3. Component mapping is done in the high-level components (like `Homepage.tsx`) to connect content with appropriate rendering components
4. This allows us to:
   - Reuse UI components across different content contexts
   - Separate content from presentation
   - Use appropriate content formats (e.g., markdown, structured data) as needed

## Development Guidelines

After completing tasks:
1. Run `pnpm test` to ensure all tests pass
2. Update snapshots if needed with `pnpm test:update`
3. Run `pnpm typecheck` to verify type correctness
4. Run `pnpm lint` to check for style issues
5. Run `pnpm build` to validate the build process

The CI workflow will automatically run these checks on pull requests and pushes to main.

Always consult these files when working on related tasks:

- `src/theme/style-guide.md`: **MANDATORY REFERENCE for ALL UI/UX work**. This style guide defines the visual language of the application, including colors, typography, spacing, component patterns, and best practices. Every component with visual elements MUST follow these guidelines consistently.

- `src/components/blocks/content-blocks.md`: Reference when creating, modifying, or using block components for pages. This guide catalogs all available content blocks with descriptions of their purpose, appearance, and usage. When building new pages, consult this guide to select the appropriate blocks for your content. When creating new blocks, follow the guidelines and update this document with details about your new component.

- `src/server/email/guide.md`: Reference when working with form submissions. The project uses Brevo email service with a specific client/server implementation pattern. Form components should use the `useFormSubmission` hook and follow the established data structure.

## Testing Guidelines

- Write tests for all new components and features
- Use Jest and React Testing Library for all tests
- Create snapshot tests for all UI components
- Mock dependencies like icons and Next.js features
- Place tests in `src/__tests__` directory following same structure as source
- Name test files with `.test.tsx` extension
- Run tests before submitting any code changes (`pnpm test`)
- Update snapshots when components intentionally change (`pnpm test:update`)
- Check test coverage to ensure good coverage (`pnpm test:coverage`)
- Refer to `src/__tests__/README.md` for detailed testing guidance and examples
- Run `pnpm build` before commits to verify no build issues

## CI Integration

- GitHub Actions runs tests, type checking, linting and build on every PR
- For image imports, ensure types are defined in `src/types/images.d.ts`
- If CI fails but local tests pass, use `pnpm ci:typecheck` for verbose errors