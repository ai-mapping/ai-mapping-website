# Image Placeholders

These placeholders files allow the template to work without requiring external image hosting or configuration. In a real application, you would:

1. Replace these with actual image files
2. Use a CDN or image hosting service for better performance

## Implementation Note

These placeholder files are intentionally not valid image files. In a real application, you would need to provide proper image files with the dimensions specified in the code.

## Remote Image Configuration

If you prefer to use remote images (from services like Unsplash, Wikimedia, etc.), you'll need to configure the `remotePatterns` in your `next.config.ts` file to include those domains.

Example:

```typescript
// In next.config.ts
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'images.unsplash.com',
      },
      {
        hostname: 'upload.wikimedia.org',
      },
      // Add other domains as needed
    ],
  },
};
```

## Placeholder Images Used in this Template

### Hero and Background Images
- code-bg.jpg (850x566) - AI code generation background
- ecommerce.jpg (400x192) - E-commerce website on a laptop
- marketing.jpg (400x192) - Marketing team planning
- office.jpg (400x192) - Modern office space

### Logo Images
- react-logo.svg - React logo
- nextjs-logo.png - Next.js logo
- tailwind-logo.svg - Tailwind CSS logo
- typescript-logo.svg - TypeScript logo
- gatsby-logo.svg - Gatsby logo
- remix-logo.svg - Remix logo
- astro-logo.svg - Astro logo