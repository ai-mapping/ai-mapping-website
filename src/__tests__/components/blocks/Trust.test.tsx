import React from 'react';
import { render, screen } from '@testing-library/react';
import Trust, { defaultTrustProps } from '@/components/blocks/Trust';

describe('Trust Component', () => {
  it('renders with default props correctly', () => {
    const { container } = render(<Trust />);
    
    // Check if heading is rendered
    expect(screen.getByText(defaultTrustProps.heading)).toBeInTheDocument();
    
    // Check if all statistics are rendered
    defaultTrustProps.statistics.forEach((stat) => {
      expect(screen.getByText(stat.value)).toBeInTheDocument();
      expect(screen.getByText(stat.description)).toBeInTheDocument();
    });
    
    // Check if partners title is rendered
    expect(screen.getByText(defaultTrustProps.partnersTitle)).toBeInTheDocument();
    
    // Check if all partners are rendered
    defaultTrustProps.partners.forEach((partner) => {
      expect(screen.getByText(partner.name)).toBeInTheDocument();
    });
    
    // Snapshot test
    expect(container).toMatchSnapshot();
  });
  
  it('renders with custom props correctly', () => {
    const customProps = {
      heading: 'Custom Trust Heading',
      statistics: [
        {
          value: 'Custom Value',
          description: 'Custom Description'
        }
      ],
      partnersTitle: 'Custom Partners Title',
      partners: [
        { id: 'custom-1', name: 'Custom Partner' }
      ]
    };
    
    const { container } = render(<Trust {...customProps} />);
    
    // Check if custom heading is rendered
    expect(screen.getByText(customProps.heading)).toBeInTheDocument();
    
    // Check if custom statistic is rendered
    expect(screen.getByText(customProps.statistics[0].value)).toBeInTheDocument();
    expect(screen.getByText(customProps.statistics[0].description)).toBeInTheDocument();
    
    // Check if custom partners title is rendered
    expect(screen.getByText(customProps.partnersTitle)).toBeInTheDocument();
    
    // Check if custom partner is rendered
    expect(screen.getByText(customProps.partners[0].name)).toBeInTheDocument();
    
    // Snapshot test
    expect(container).toMatchSnapshot();
  });
  
  it('renders partners with logos correctly', () => {
    const customProps = {
      partners: [
        { id: '1', name: 'Partner With Logo', logo: '/logo.png' }
      ]
    };
    
    render(<Trust {...customProps} />);
    
    // Check if partner logo is rendered
    const logo = screen.getByAltText(customProps.partners[0].name);
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', customProps.partners[0].logo);
  });
});