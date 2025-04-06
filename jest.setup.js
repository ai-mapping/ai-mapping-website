// Used for __tests__/testing-library.js
// Learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// Import icon mocks
import './src/__tests__/__mocks__/icons';

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt, width, height, className, priority, quality, ...props }) => {
    return (
      <img 
        src={typeof src === 'object' ? src.src : src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        data-testid={`next-image-${alt || 'image'}`}
        {...props}
      />
    );
  }
}));

// Mock next/link
jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ href, children, className, title, ...props }) => {
    return (
      <a 
        href={href} 
        className={className} 
        title={title}
        data-testid="next-link"
        {...props}
      >
        {children}
      </a>
    );
  }
}));

// Mock next/navigation
jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      push: jest.fn(),
      replace: jest.fn(),
      prefetch: jest.fn(),
      back: jest.fn(),
      forward: jest.fn(),
      refresh: jest.fn(),
      pathname: '/',
    };
  },
  usePathname() {
    return '/';
  },
  useSearchParams() {
    return new URLSearchParams();
  },
}));