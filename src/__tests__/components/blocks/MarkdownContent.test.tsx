import React from 'react';
import { render } from '@testing-library/react';
import MarkdownContent, { defaultMarkdownContentProps } from '@/components/blocks/MarkdownContent';

// Mock the react-markdown component
jest.mock('react-markdown', () => {
  return ({ children }: { children: string }) => <div data-testid="markdown">{children}</div>;
});

describe('MarkdownContent Component', () => {
  it('renders with default props correctly', () => {
    const { container, getByTestId } = render(<MarkdownContent content="Test content" />);
    
    // Check if markdown content is passed to the component
    const markdownElement = getByTestId('markdown');
    expect(markdownElement.textContent).toBe("Test content");
    
    // Snapshot test
    expect(container).toMatchSnapshot();
  });
  
  it('renders with custom content correctly', () => {
    const customProps = {
      content: '### Custom Markdown Content\n\nThis is a test.',
      background: 'white' as const,
      paddingY: 'sm' as const
    };
    
    const { container, getByTestId } = render(<MarkdownContent {...customProps} />);
    
    // Check if custom markdown content is passed to the component
    const markdownElement = getByTestId('markdown');
    expect(markdownElement.textContent).toBe(customProps.content);
    
    // Snapshot test
    expect(container).toMatchSnapshot();
  });
});