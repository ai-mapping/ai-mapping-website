# Testing Guide

This directory contains tests for the application. We use Jest as our test runner and React Testing Library for testing React components.

## Directory Structure

The test directory structure mirrors the source code structure:

```
src/
└── __tests__/
    ├── components/
    │   ├── blocks/
    │   ├── forms/
    │   ├── layout/
    │   └── ui/
    └── __mocks__/
        ├── iconMock.tsx
        └── icons.ts
```

## Running Tests

- `pnpm test`: Run all tests once
- `pnpm test:watch`: Run tests in watch mode (re-runs tests on file changes)
- `pnpm test:coverage`: Run tests and generate coverage report
- `pnpm test:update`: Update snapshots

## Writing Tests

### Component Tests

When writing tests for components:

1. Create a file with the same name as the component file, but with `.test.tsx` extension
2. Import the component and render it with React Testing Library
3. Test that it renders the expected content
4. Create a snapshot test

Example:

```tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import MyComponent from '@/components/path/to/MyComponent';

describe('MyComponent', () => {
  it('renders correctly', () => {
    const { container } = render(<MyComponent />);
    
    // Test specific elements
    expect(screen.getByText('Expected Text')).toBeInTheDocument();
    
    // Snapshot test
    expect(container).toMatchSnapshot();
  });
});
```

### Mock Dependencies

For external dependencies and icons, create mocks in the `__mocks__` directory. Icons are automatically mocked using the pattern in `iconMock.tsx`.

## Best Practices

1. Test component behavior, not implementation details
2. Focus on user interactions and visible content
3. Use data-testid for elements that are hard to select otherwise
4. Keep tests simple and focused
5. Use snapshot tests to catch unintended UI changes
6. Run tests before submitting pull requests