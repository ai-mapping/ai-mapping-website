import React from 'react';
import { render, screen } from '@testing-library/react';
import SEOText, { defaultSEOTextProps } from '@/components/blocks/SEOText';

describe('SEOText Component', () => {
  it('renders with default props correctly', () => {
    const { container } = render(<SEOText />);
    
    // Check if heading is rendered
    expect(screen.getByText(defaultSEOTextProps.heading)).toBeInTheDocument();
    
    // Check if paragraphs are rendered
    defaultSEOTextProps.paragraphs.forEach((paragraph) => {
      expect(screen.getByText(paragraph)).toBeInTheDocument();
    });
    
    // Check if brand sections are rendered
    defaultSEOTextProps.brandSections.forEach((section) => {
      expect(screen.getByText(section.title)).toBeInTheDocument();
      
      // Check if model links are rendered
      section.models.forEach((model) => {
        const link = screen.getByText(model.label);
        expect(link).toBeInTheDocument();
        expect(link.closest('a')).toHaveAttribute('href', model.href);
      });
    });
    
    // Check if footer text is rendered
    expect(screen.getByText(defaultSEOTextProps.footerText)).toBeInTheDocument();
    
    // Snapshot test
    expect(container).toMatchSnapshot();
  });
  
  it('renders with custom props correctly', () => {
    const customProps = {
      heading: 'Custom SEO Heading',
      paragraphs: [
        'Custom paragraph 1',
        'Custom paragraph 2'
      ],
      brandSections: [
        {
          title: 'Custom Brand Section',
          models: [
            { href: '/custom-link', label: 'Custom Model 1' },
            { href: '/custom-link-2', label: 'Custom Model 2' }
          ]
        }
      ],
      footerText: 'Custom footer text'
    };
    
    const { container } = render(<SEOText {...customProps} />);
    
    // Check if custom heading is rendered
    expect(screen.getByText(customProps.heading)).toBeInTheDocument();
    
    // Check if custom paragraphs are rendered
    customProps.paragraphs.forEach((paragraph) => {
      expect(screen.getByText(paragraph)).toBeInTheDocument();
    });
    
    // Check if custom brand section is rendered
    expect(screen.getByText(customProps.brandSections[0].title)).toBeInTheDocument();
    
    // Check if custom model links are rendered
    customProps.brandSections[0].models.forEach((model) => {
      const link = screen.getByText(model.label);
      expect(link).toBeInTheDocument();
      expect(link.closest('a')).toHaveAttribute('href', model.href);
    });
    
    // Check if custom footer text is rendered
    expect(screen.getByText(customProps.footerText)).toBeInTheDocument();
    
    // Snapshot test
    expect(container).toMatchSnapshot();
  });
});