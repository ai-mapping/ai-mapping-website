import React from 'react';
import { render, screen } from '@testing-library/react';
import Advantages, { defaultAdvantagesProps } from '@/components/blocks/Advantages';

describe('Advantages Component', () => {
  it('renders with default props correctly', () => {
    const { container } = render(<Advantages />);
    
    // Check if title and subtitle are rendered
    expect(screen.getByText(defaultAdvantagesProps.title)).toBeInTheDocument();
    expect(screen.getByText(defaultAdvantagesProps.subtitle)).toBeInTheDocument();
    
    // Check if all advantages are rendered
    defaultAdvantagesProps.advantages.forEach((advantage) => {
      expect(screen.getByText(advantage.title)).toBeInTheDocument();
      expect(screen.getByText(advantage.description)).toBeInTheDocument();
      
      // Check if all features are rendered
      advantage.features.forEach((feature) => {
        expect(screen.getByText(feature)).toBeInTheDocument();
      });
    });
    
    // Snapshot test
    expect(container).toMatchSnapshot();
  });
  
  it('renders with custom props correctly', () => {
    const customProps = {
      title: 'Custom Title',
      subtitle: 'Custom Subtitle',
      advantages: [
        {
          icon: <div data-testid="custom-icon" />,
          title: 'Custom Advantage',
          description: 'Custom description text',
          features: ['Feature 1', 'Feature 2']
        }
      ]
    };
    
    const { container } = render(<Advantages {...customProps} />);
    
    expect(screen.getByText(customProps.title)).toBeInTheDocument();
    expect(screen.getByText(customProps.subtitle)).toBeInTheDocument();
    expect(screen.getByText(customProps.advantages[0].title)).toBeInTheDocument();
    expect(screen.getByText(customProps.advantages[0].description)).toBeInTheDocument();
    customProps.advantages[0].features.forEach(feature => {
      expect(screen.getByText(feature)).toBeInTheDocument();
    });
    
    // Snapshot test
    expect(container).toMatchSnapshot();
  });
});