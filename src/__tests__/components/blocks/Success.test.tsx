import React from 'react';
import { render, screen } from '@testing-library/react';
import Success, { defaultSuccessProps } from '@/components/blocks/Success';

// Mock the SuccessCard component
jest.mock('@/components/blocks/SuccessCard', () => {
  return {
    __esModule: true,
    default: ({ caseStudy, buttonText }) => (
      <div data-testid={`success-card-${caseStudy.id}`}>
        <h3>{caseStudy.title}</h3>
        <div>{caseStudy.deliveryTime}</div>
        <p>{caseStudy.description}</p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src={caseStudy.image.src} 
          alt={caseStudy.image.alt} 
          width={caseStudy.image.width} 
          height={caseStudy.image.height} 
        />
        <button>{buttonText}</button>
      </div>
    )
  };
});

describe('Success Component', () => {
  it('renders with default props correctly', () => {
    const { container } = render(<Success />);
    
    // Check if heading and subheading are rendered
    expect(screen.getByText(defaultSuccessProps.heading)).toBeInTheDocument();
    expect(screen.getByText(defaultSuccessProps.subheading)).toBeInTheDocument();
    
    // Check if all case studies are rendered as cards
    defaultSuccessProps.cases.forEach((caseStudy) => {
      const card = screen.getByTestId(`success-card-${caseStudy.id}`);
      expect(card).toBeInTheDocument();
      expect(screen.getByText(caseStudy.title)).toBeInTheDocument();
      expect(screen.getByText(caseStudy.deliveryTime)).toBeInTheDocument();
      expect(screen.getByText(caseStudy.description)).toBeInTheDocument();
    });
    
    // Check if button text is rendered
    const buttons = screen.getAllByText(defaultSuccessProps.buttonText);
    expect(buttons.length).toBe(defaultSuccessProps.cases.length);
    
    // Snapshot test
    expect(container).toMatchSnapshot();
  });
  
  it('renders with custom props correctly', () => {
    const customProps = {
      heading: 'Custom Success Heading',
      subheading: 'Custom Success Subheading',
      cases: [
        {
          id: 'custom-1',
          title: 'Custom Case Study',
          deliveryTime: 'Custom Delivery Time',
          description: 'Custom Description',
          image: {
            src: '/custom-image.jpg',
            alt: 'Custom Image Alt',
            width: 300,
            height: 150
          }
        }
      ],
      buttonText: 'Custom Button Text'
    };
    
    const { container } = render(<Success {...customProps} />);
    
    // Check if custom heading and subheading are rendered
    expect(screen.getByText(customProps.heading)).toBeInTheDocument();
    expect(screen.getByText(customProps.subheading)).toBeInTheDocument();
    
    // Check if custom case study is rendered
    const card = screen.getByTestId(`success-card-${customProps.cases[0].id}`);
    expect(card).toBeInTheDocument();
    expect(screen.getByText(customProps.cases[0].title)).toBeInTheDocument();
    expect(screen.getByText(customProps.cases[0].deliveryTime)).toBeInTheDocument();
    expect(screen.getByText(customProps.cases[0].description)).toBeInTheDocument();
    
    // Check if custom button text is rendered
    expect(screen.getByText(customProps.buttonText)).toBeInTheDocument();
    
    // Snapshot test
    expect(container).toMatchSnapshot();
  });
});