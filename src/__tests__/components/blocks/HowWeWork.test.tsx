import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import HowWeWork, { defaultHowWeWorkProps } from '@/components/blocks/HowWeWork';
import { StaticImageData } from 'next/image';

// Mock the step images
jest.mock('@/components/blocks/HowWeWork/step1.png', () => ({
  src: '/step1.png',
  height: 400,
  width: 300
}));

jest.mock('@/components/blocks/HowWeWork/step2.png', () => ({
  src: '/step2.png',
  height: 400,
  width: 300
}));

jest.mock('@/components/blocks/HowWeWork/step3.png', () => ({
  src: '/step3.png',
  height: 400,
  width: 300
}));

jest.mock('@/components/blocks/HowWeWork/step4.png', () => ({
  src: '/step4.png',
  height: 400,
  width: 300
}));

describe('HowWeWork Component', () => {
  it('renders with default props correctly', () => {
    const { container } = render(<HowWeWork />);
    
    // Check if heading is rendered
    expect(screen.getByText(defaultHowWeWorkProps.heading)).toBeInTheDocument();
    
    // Check if all steps are rendered with specific queries
    defaultHowWeWorkProps.steps.forEach((step) => {
      const stepElements = screen.getAllByText(step.title);
      expect(stepElements.length).toBeGreaterThan(0);
    });
    
    // Check if step 1 is selected by default (as per the useState(1) in the component)
    const stepButtons = screen.getAllByRole('button');
    const step1 = stepButtons.find(button => button.getAttribute('aria-pressed') === 'true');
    expect(step1).toBeInTheDocument();
    expect(step1).toHaveAttribute('aria-pressed', 'true');
    
    // Check if step 1 description is shown
    expect(screen.getByText(defaultHowWeWorkProps.steps[0].description)).toBeInTheDocument();
    
    // Check if step counter is shown - we need to use a regex for the updated text
    expect(screen.getByText(/Step 1 of/)).toBeInTheDocument();
    
    // Snapshot test
    expect(container).toMatchSnapshot();
  });
  
  it('changes selected step when clicking on a step', () => {
    render(<HowWeWork />);
    
    // Initially step 1 is selected
    expect(screen.getByText(/Step 1 of/)).toBeInTheDocument();
    
    // Get all buttons and find step 4
    const buttons = screen.getAllByRole('button');
    // Find the button that contains step 4 title text
    const step4 = buttons.find(button => 
      button.textContent.includes(defaultHowWeWorkProps.steps[3].title)
    );
    
    // Click on step 4
    fireEvent.click(step4);
    
    // Check if step 4 is now selected
    expect(step4).toHaveAttribute('aria-pressed', 'true');
    
    // Check if step 4 description is shown
    expect(screen.getByText(defaultHowWeWorkProps.steps[3].description)).toBeInTheDocument();
    
    // Check if step counter is updated
    expect(screen.getByText(/Step 4 of/)).toBeInTheDocument();
  });
  
  it('renders with custom props correctly', () => {
    const customProps = {
      heading: 'Custom How We Work Heading',
      steps: [
        {
          id: 1,
          title: 'Custom Step 1',
          description: 'Custom Step 1 Description',
          image: { src: '/custom-step1.png', height: 300, width: 200 } as StaticImageData
        },
        {
          id: 2,
          title: 'Custom Step 2',
          description: 'Custom Step 2 Description',
          image: { src: '/custom-step2.png', height: 300, width: 200 } as StaticImageData
        }
      ]
    };
    
    const { container } = render(<HowWeWork {...customProps} />);
    
    // Check if custom heading is rendered
    expect(screen.getByText(customProps.heading)).toBeInTheDocument();
    
    // Check if custom steps are rendered
    customProps.steps.forEach((step) => {
      const stepElements = screen.getAllByText(step.title);
      expect(stepElements.length).toBeGreaterThan(0);
    });
    
    // Step 1 should be selected by default (as per the useState(1) in the component)
    const stepButtons = screen.getAllByRole('button');
    const step1 = stepButtons.find(button => button.getAttribute('aria-pressed') === 'true');
    expect(step1).toBeInTheDocument();
    expect(step1).toHaveAttribute('aria-pressed', 'true');
    
    // Check if step 1 description is shown
    expect(screen.getByText(customProps.steps[0].description)).toBeInTheDocument();
    
    // Check if step counter is shown
    expect(screen.getByText(/Step 1 of/)).toBeInTheDocument();
    
    // Snapshot test
    expect(container).toMatchSnapshot();
  });
});