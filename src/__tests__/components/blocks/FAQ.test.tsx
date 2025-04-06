import React from 'react';
import { render, screen } from '@testing-library/react';
import FAQ, { defaultFAQProps } from '@/components/blocks/FAQ';

// Mock the FAQAccordion component
jest.mock('@/components/blocks/FAQAccordion', () => {
  return {
    __esModule: true,
    default: ({ faqItems, askButtonText }) => (
      <div data-testid="faq-accordion">
        <div>FAQ Items: {faqItems.length}</div>
        <div>
          {faqItems.map((item, index) => (
            <div key={index} data-testid={`faq-item-${index}`}>
              <div>Question: {item.question}</div>
              <div>Answer: {item.answer}</div>
            </div>
          ))}
        </div>
        <button data-testid="ask-button">{askButtonText}</button>
      </div>
    )
  };
});

describe('FAQ Component', () => {
  it('renders with default props correctly', () => {
    const { container } = render(<FAQ />);
    
    // Check if heading is rendered
    expect(screen.getByText(defaultFAQProps.heading)).toBeInTheDocument();
    
    // Check if the FAQAccordion is rendered
    expect(screen.getByTestId('faq-accordion')).toBeInTheDocument();
    expect(screen.getByText(`FAQ Items: ${defaultFAQProps.faqItems.length}`)).toBeInTheDocument();
    
    // Check if all FAQ items are rendered
    defaultFAQProps.faqItems.forEach((item, index) => {
      expect(screen.getByTestId(`faq-item-${index}`)).toBeInTheDocument();
      expect(screen.getByText(`Question: ${item.question}`)).toBeInTheDocument();
      expect(screen.getByText(`Answer: ${item.answer}`)).toBeInTheDocument();
    });
    
    // Check if the ask button is rendered with correct text
    expect(screen.getByTestId('ask-button')).toBeInTheDocument();
    expect(screen.getByText(defaultFAQProps.askButtonText)).toBeInTheDocument();
    
    // Snapshot test
    expect(container).toMatchSnapshot();
  });
  
  it('renders with custom props correctly', () => {
    const customProps = {
      heading: 'Custom FAQ Heading',
      faqItems: [
        {
          question: 'Custom question?',
          answer: 'Custom answer.'
        }
      ],
      askButtonText: 'Custom Ask Button'
    };
    
    const { container } = render(<FAQ {...customProps} />);
    
    // Check if custom heading is rendered
    expect(screen.getByText(customProps.heading)).toBeInTheDocument();
    
    // Check if FAQ items count is correct
    expect(screen.getByText(`FAQ Items: ${customProps.faqItems.length}`)).toBeInTheDocument();
    
    // Check if the custom FAQ item is rendered
    expect(screen.getByTestId('faq-item-0')).toBeInTheDocument();
    expect(screen.getByText(`Question: ${customProps.faqItems[0].question}`)).toBeInTheDocument();
    expect(screen.getByText(`Answer: ${customProps.faqItems[0].answer}`)).toBeInTheDocument();
    
    // Check if the ask button has custom text
    expect(screen.getByText(customProps.askButtonText)).toBeInTheDocument();
    
    // Snapshot test
    expect(container).toMatchSnapshot();
  });
});