import React from 'react';
import { render, screen } from '@testing-library/react';
import CTA, { defaultCTAProps } from '@/components/blocks/CTA';

// Create a mock for Next.js Link component since we're using that in our CTA now
jest.mock('next/link', () => {
  return {
    __esModule: true,
    default: ({ children, href, className }) => (
      <a href={href} className={className} data-testid="mock-link">
        {children}
      </a>
    ),
  };
});

describe('CTA Component', () => {
  it('renders with default props correctly', () => {
    const { container } = render(<CTA />);
    
    // Check if heading and subheading are rendered
    expect(screen.getByText(defaultCTAProps.heading)).toBeInTheDocument();
    expect(screen.getByText(defaultCTAProps.subheading)).toBeInTheDocument();
    
    // Check if the button is rendered
    expect(screen.getByText(defaultCTAProps.buttonText)).toBeInTheDocument();
    expect(screen.getByTestId('mock-link')).toHaveAttribute('href', defaultCTAProps.buttonLink);
    
    // Snapshot test
    expect(container).toMatchSnapshot();
  });
  
  it('renders with custom props correctly', () => {
    const customProps = {
      heading: 'Custom CTA Heading',
      subheading: 'Custom CTA Subheading',
      buttonText: 'Custom Button Text',
      buttonLink: '/custom-link'
    };
    
    const { container } = render(<CTA {...customProps} />);
    
    // Check if custom heading and subheading are rendered
    expect(screen.getByText(customProps.heading)).toBeInTheDocument();
    expect(screen.getByText(customProps.subheading)).toBeInTheDocument();
    
    // Check if the button has custom text and link
    expect(screen.getByText(customProps.buttonText)).toBeInTheDocument();
    expect(screen.getByTestId('mock-link')).toHaveAttribute('href', customProps.buttonLink);
    
    // Snapshot test
    expect(container).toMatchSnapshot();
  });
});