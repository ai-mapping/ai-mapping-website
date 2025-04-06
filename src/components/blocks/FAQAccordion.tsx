'use client';

import React, { useState } from 'react';
import { FAQItem } from './FAQ';
import ChevronIcon from '@/components/ui/icons/ChevronIcon';

// Props interface
type FAQAccordionProps = {
  faqItems: FAQItem[];
  askButtonText: string;
};

const FAQAccordion = ({ faqItems, askButtonText }: FAQAccordionProps) => {
  // State to track which FAQ item is expanded
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  // Toggle expanded item
  const toggleItem = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  // Handle "Ask a question" button click
  const handleAskQuestion = () => {
    console.log('Ask question button clicked');
    // Placeholder for actual implementation
    // This would typically open a modal form or navigate to a contact page
  };

  return (
    <>
      <div className="space-y-4">
        {faqItems.map((item, index) => (
          <div
            key={`faq-item-${index}`}
            className="border border-neutral-dark rounded-lg overflow-hidden bg-surface hover:shadow-md transition-shadow duration-300"
          >
            <button
              className="flex justify-between items-center w-full px-6 py-4 text-left font-medium text-white"
              onClick={() => toggleItem(index)}
              aria-expanded={expandedIndex === index}
              aria-controls={`faq-answer-${index}`}
            >
              <span>{item.question}</span>
              <div
                className={`transform transition-transform duration-300 text-primary ${
                  expandedIndex === index ? 'rotate-180' : ''
                }`}
              >
                <ChevronIcon />
              </div>
            </button>

            <div
              id={`faq-answer-${index}`}
              className={`px-6 py-4 bg-neutral-light transition-all duration-300 ${
                expandedIndex === index ? 'block' : 'hidden'
              }`}
            >
              <p className="text-neutral">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <button
          className="bg-primary text-black font-bold px-6 py-3 rounded-lg hover:bg-primary-light hover:shadow-lg transition-all duration-300"
          onClick={handleAskQuestion}
        >
          {askButtonText}
        </button>
      </div>
    </>
  );
};

export default FAQAccordion;
