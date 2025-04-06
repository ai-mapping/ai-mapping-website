import { render, screen } from '@testing-library/react';
import CodeExample, { defaultCodeExampleProps } from '@/components/blocks/CodeExample';
import userEvent from '@testing-library/user-event';

describe('CodeExample Block', () => {
  it('renders the component with default props', () => {
    const { container } = render(<CodeExample />);
    
    // Check heading and description
    expect(screen.getByText('See It In Action')).toBeInTheDocument();
    expect(screen.getByText('AI-Mapping makes it simple to transform content into dynamic, responsive components.')).toBeInTheDocument();
    
    // Check file names
    expect(screen.getByText('content.md')).toBeInTheDocument();
    expect(screen.getByText('component-mapping.tsx')).toBeInTheDocument();
    
    // Check CTA button
    expect(screen.getByText('Try the interactive demo')).toBeInTheDocument();
    
    expect(container).toMatchSnapshot();
  });

  it('renders with custom props', () => {
    const customProps = {
      heading: 'Custom Heading',
      description: 'Custom description text',
      codeFiles: [
        {
          fileName: 'custom.js',
          language: 'javascript' as const,
          content: 'console.log("Hello, World!");',
        },
      ],
      ctaText: 'Custom CTA',
    };

    render(<CodeExample {...customProps} />);
    
    // Check custom heading and description
    expect(screen.getByText('Custom Heading')).toBeInTheDocument();
    expect(screen.getByText('Custom description text')).toBeInTheDocument();
    
    // Check custom file name
    expect(screen.getByText('custom.js')).toBeInTheDocument();
    
    // Check custom code content
    expect(screen.getByText('console.log("Hello, World!");')).toBeInTheDocument();
    
    // Check custom CTA text
    expect(screen.getByText('Custom CTA')).toBeInTheDocument();
  });

  it('calls onCtaClick when the button is clicked', async () => {
    const mockOnCtaClick = jest.fn();
    const user = userEvent.setup();
    
    render(<CodeExample onCtaClick={mockOnCtaClick} />);
    
    const ctaButton = screen.getByText('Try the interactive demo');
    await user.click(ctaButton);
    
    expect(mockOnCtaClick).toHaveBeenCalledTimes(1);
  });
});