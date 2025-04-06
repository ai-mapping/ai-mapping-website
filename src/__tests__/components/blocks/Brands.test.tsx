import React from 'react';
import { render, screen } from '@testing-library/react';
import Brands, { defaultBrandsProps } from '@/components/blocks/Brands';

// Mock images
jest.mock('@/components/ui/logos/caterpillar-logo.png', () => ({
  src: '/caterpillar-logo.png',
  height: 70,
  width: 140
}));

jest.mock('@/components/ui/logos/komatsu-logo.png', () => ({
  src: '/komatsu-logo.png',
  height: 80,
  width: 160
}));

jest.mock('@/components/ui/logos/zf-logo.png', () => ({
  src: '/zf-logo.png',
  height: 40,
  width: 80
}));

jest.mock('@/components/ui/logos/BOMAG-logo.png', () => ({
  src: '/BOMAG-logo.png',
  height: 40,
  width: 80
}));

jest.mock('@/components/ui/logos/Mobil.png', () => ({
  src: '/Mobil.png',
  height: 40,
  width: 80
}));

jest.mock('@/components/ui/logos/hyva-logo.png', () => ({
  src: '/hyva-logo.png',
  height: 40,
  width: 80
}));

jest.mock('@/components/ui/logos/FAG-logo.png', () => ({
  src: '/FAG-logo.png',
  height: 40,
  width: 80
}));

describe('Brands Component', () => {
  it('renders with default props correctly', () => {
    const { container } = render(<Brands />);
    
    // Check if heading is rendered
    expect(screen.getByText(defaultBrandsProps.heading)).toBeInTheDocument();
    
    // Check if all large brands are rendered
    defaultBrandsProps.largeBrands.forEach((brand) => {
      expect(screen.getByTitle(`View details for ${brand.name}`)).toBeInTheDocument();
      expect(screen.getByTestId(`next-image-${brand.logoAlt || `${brand.name} logo`}`)).toBeInTheDocument();
    });
    
    // Check if all small brands are rendered
    defaultBrandsProps.smallBrands.forEach((brand) => {
      expect(screen.getByTitle(`View details for ${brand.name}`)).toBeInTheDocument();
      expect(screen.getByTestId(`next-image-${brand.logoAlt || `${brand.name} logo`}`)).toBeInTheDocument();
    });
    
    // Snapshot test
    expect(container).toMatchSnapshot();
  });
  
  it('renders with custom props correctly', () => {
    const customProps = {
      heading: 'Custom Brands Heading',
      largeBrands: [
        {
          name: 'Custom Brand',
          logoSrc: { src: '/custom-logo.png', height: 60, width: 120 },
          logoAlt: 'Custom brand logo',
          logoHeight: 60,
          href: '/custom-link'
        }
      ],
      smallBrands: [
        {
          name: 'Small Custom Brand',
          logoSrc: { src: '/small-custom-logo.png', height: 30, width: 60 },
          logoAlt: 'Small custom brand logo',
          logoHeight: 30,
          href: '/small-custom-link'
        }
      ]
    };
    
    const { container } = render(<Brands {...customProps} />);
    
    // Check if custom heading is rendered
    expect(screen.getByText(customProps.heading)).toBeInTheDocument();
    
    // Check if custom large brand is rendered
    expect(screen.getByTitle(`View details for ${customProps.largeBrands[0].name}`)).toBeInTheDocument();
    expect(screen.getByTestId(`next-image-${customProps.largeBrands[0].logoAlt}`)).toBeInTheDocument();
    
    // Check if custom small brand is rendered
    expect(screen.getByTitle(`View details for ${customProps.smallBrands[0].name}`)).toBeInTheDocument();
    expect(screen.getByTestId(`next-image-${customProps.smallBrands[0].logoAlt}`)).toBeInTheDocument();
    
    // Snapshot test
    expect(container).toMatchSnapshot();
  });
});