# Content Blocks Reference Guide

This document provides guidance on how to use, create, and extend content blocks in this project. Content blocks are reusable components that represent distinct sections of a page.

## What are Content Blocks?

Content blocks are self-contained, reusable components that:
- Display specific types of content (features, testimonials, FAQs, etc.)
- Can be assembled in various orders to build complete pages
- Have consistent structure and styling
- Can be reused across multiple pages

## Guidelines for Using Blocks

When building pages:
1. Review this guide to find the most appropriate blocks for your content
2. Import the needed blocks from `@/components/blocks`
3. Pass appropriate props to customize the blocks for the page
4. Ensure blocks are arranged in a logical and visually pleasing order

## Guidelines for Creating Blocks

When creating new blocks:

1. **Use the Section Component**
   - Always wrap your block in the `Section` component from `@/components/layout/Section`
   - This ensures consistent spacing, background, and container behavior
   - Example: `<Section background="white" paddingY="lg" containerWidth="container">`

2. **Provide Default Props**
   - Export a `defaultProps` object with realistic content for testing and preview
   - This should include all required props with sensible default values
   - Example:
     ```tsx
     export const defaultXYZProps = {
       title: 'Default Title',
       items: [...sample items...],
     };
     ```

3. **Use Partial Props Pattern**
   - Make all props optional using `Partial<Props>` in component parameters
   - Provide defaults using assignment in the function parameters
   - Example: 
     ```tsx
     const MyBlock = ({
       title = defaultProps.title,
       items = defaultProps.items
     }: Partial<MyBlockProps>) => {
       // Component logic
     };
     ```

4. **Create Tests**
   - Add tests in the corresponding location in `src/__tests__/components/blocks/`
   - Test with both default props and custom props
   - Include snapshot tests
   - Example: See `Advantages.test.tsx`

5. **Follow Style Guidelines**
   - Adhere to the style guide in `src/theme/style-guide.md`
   - Use Tailwind classes consistently
   - Use the `cn()` utility for conditional classes

6. **Update This Document**
   - Add your new block to the list below with a clear description
   - Explain what the block is used for and when to use it

## Available Content Blocks

### Hero (Layout Component)
- **Type**: `Hero`
- **Purpose**: Main landing section at the top of the page
- **Appearance**: Full-width hero with headline, description, and optional CTA
- **Use When**: You need a strong, attention-grabbing page introduction
- **Key Props**: `heading`, `subheading`, `buttonText`, `buttonLink`
- **Notes**: Though technically in `/layout`, it functions as a content block

### Advantages
- **Type**: `Advantages`
- **Purpose**: Showcase the key benefits or advantages of your product/service
- **Appearance**: Grid of cards with icons, titles, descriptions, and bulleted features
- **Use When**: You need to highlight multiple selling points with supporting details
- **Key Props**: `title`, `subtitle`, `advantages` (array of items with icon, title, description, features)
- **Notes**: Works well for 4 items in a 2x2 grid

### Brands
- **Type**: `Brands`
- **Purpose**: Display partner logos, supported technologies, or client brands
- **Appearance**: Grid of logos with optional links, divided into major and minor brands
- **Use When**: You want to showcase partnerships, integrations, or client relationships
- **Key Props**: `heading`, `largeBrands`, `smallBrands`
- **Notes**: Handles image loading failures gracefully with text fallbacks

### Success
- **Type**: `Success`
- **Purpose**: Showcase success stories, case studies, or testimonials
- **Appearance**: Grid of cards with customer stories and metrics
- **Use When**: You want to build credibility through social proof
- **Key Props**: `heading`, `description`, `successStories`
- **Notes**: Uses `SuccessCard` subcomponent for individual stories

### InStock
- **Type**: `InStock`
- **Purpose**: Display inventory or product availability information
- **Appearance**: Interactive table showing products with availability indicators
- **Use When**: You need to display current inventory status
- **Key Props**: `heading`, `description`, `tableColumns`, `items`
- **Notes**: Uses `InStockTable` for the tabular display

### Trust
- **Type**: `Trust`
- **Purpose**: Build trust through showing credentials, certifications, or guarantees
- **Appearance**: Cards with icons and text describing trust factors
- **Use When**: You need to address concerns about reliability or credibility
- **Key Props**: `heading`, `description`, `trustFactors`
- **Notes**: Good for highlighting quality assurance or security features

### SEOText
- **Type**: `SEOText`
- **Purpose**: Add SEO-optimized text content to pages
- **Appearance**: Clean text section with headings and paragraphs
- **Use When**: You need to add keyword-rich content for SEO purposes
- **Key Props**: `heading`, `content` (array of paragraph strings)
- **Notes**: Can be placed near the bottom of the page for SEO without disrupting UX

### FAQ
- **Type**: `FAQ`
- **Purpose**: Display frequently asked questions and answers
- **Appearance**: Expandable accordion with questions and answers
- **Use When**: You need to address common questions about your product/service
- **Key Props**: `heading`, `description`, `faqs` (array of question/answer pairs)
- **Notes**: Uses `FAQAccordion` component for the interactive elements

### CTA (Call to Action)
- **Type**: `CTA`
- **Purpose**: Prompt users to take a specific action
- **Appearance**: Prominent section with heading, description, and button
- **Use When**: You want to drive conversions or guide users to the next step
- **Key Props**: `heading`, `subheading`, `buttonText`, `buttonLink`
- **Notes**: Can be used multiple times on a page for different conversion points

### MarkdownContent (Regional)
- **Type**: `Regional` or `MarkdownContent`
- **Purpose**: Display rich text content from markdown
- **Appearance**: Formatted text with headings, paragraphs, lists, and other markdown elements
- **Use When**: You have complex content that benefits from markdown formatting
- **Key Props**: `content` (markdown string), `background`, `paddingY`, `containerWidth`
- **Notes**: Offers customized styling for various markdown elements

### HowWeWork
- **Type**: `HowWeWork`
- **Purpose**: Explain a process or workflow
- **Appearance**: Interactive grid showing steps with illustrations
- **Use When**: You need to explain how your service works or a multistep process
- **Key Props**: `heading`, `description`, `steps` (array of process steps with images)
- **Notes**: Features an interactive selection of steps for detailed explanation

### CodeExample
- **Type**: `CodeExample`
- **Purpose**: Showcase code examples or content-to-code transformations
- **Appearance**: Side-by-side code editors with syntax highlighting and file tabs
- **Use When**: You need to demonstrate code, transformations, or technical concepts
- **Key Props**: `heading`, `description`, `codeFiles` (array of file objects with fileName, language, and content), `ctaText`, `onCtaClick`
- **Notes**: Supports multiple programming languages with appropriate syntax highlighting

## Using Blocks for Page Composition

In this project, pages are composed by mapping content data to appropriate block components. See `Homepage.tsx` for an example of how this is implemented:

```tsx
// Component mapping
const ComponentMap = {
  Hero,
  Advantages,
  Brands,
  // ...other components
};

// Mapping content to components
{contentData.map((section) => {
  const Component = ComponentMap[section._type];
  return <Component key={section._id} {...section.props} />;
})}
```

This pattern allows:
- Clean separation of content and presentation
- Reuse of blocks across multiple pages
- Easy rearrangement of page sections
- Consistent styling across the site

## Best Practices

1. **Content First**: Select blocks based on content needs, not visual preferences
2. **Consistency**: Use the same block types for similar content across pages
3. **Customization**: Use props to customize blocks for specific contexts
4. **Performance**: Be mindful of image usage and component complexity
5. **Accessibility**: Ensure all blocks meet accessibility standards
6. **Testing**: Test blocks both individually and in combination with others