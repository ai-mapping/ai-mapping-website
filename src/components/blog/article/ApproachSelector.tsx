'use client';

import React, { useState } from 'react';

const ApproachSelector = () => {
  const [answers, setAnswers] = useState({
    componentLibrary: null,
    contentUniqueness: null,
    consistency: null
  });
  
  const handleSelect = (question: string, answer: string) => {
    setAnswers(prev => ({
      ...prev,
      [question]: answer
    }));
  };
  
  // Determine recommendation based on answers
  const getRecommendation = () => {
    if (!answers.componentLibrary || !answers.contentUniqueness || !answers.consistency) {
      return null;
    }
    
    if (answers.componentLibrary === 'yes' && answers.consistency === 'very') {
      if (answers.contentUniqueness === 'very') {
        return 'hybrid';
      } else {
        return 'predefined';
      }
    } else if (answers.contentUniqueness === 'very' && answers.consistency === 'somewhat') {
      return 'dynamic';
    } else {
      return 'hybrid';
    }
  };
  
  const recommendation = getRecommendation();
  
  const recommendationContent = {
    predefined: {
      title: 'Predefined Component Library',
      description: 'Your need for consistency and existing component library make the predefined approach ideal. Use AI to map content to your existing components.',
      benefits: [
        'Maintains your design system consistency',
        'Leverages your investment in existing components',
        'Predictable performance and behavior',
        'Easier testing and quality assurance'
      ]
    },
    dynamic: {
      title: 'Dynamic Component Generation',
      description: 'Your unique content needs and flexibility requirements make dynamic generation the best approach.',
      benefits: [
        'Maximum flexibility for unique content',
        'No need for upfront component development',
        'Faster implementation time',
        'Better handling of edge cases'
      ]
    },
    hybrid: {
      title: 'Hybrid Approach (Recommended)',
      description: 'Balance consistency with flexibility by using both predefined components and dynamic generation as needed.',
      benefits: [
        'Use existing components when appropriate',
        'Generate custom components for unique needs',
        'Best of both worlds approach',
        'Most adaptable to changing requirements'
      ]
    }
  };

  return (
    <div className="my-10 bg-surface rounded-lg border border-neutral-dark shadow-lg overflow-hidden">
      <div className="bg-neutral-light p-4 border-b border-neutral-dark">
        <h3 className="text-xl font-semibold text-primary">Approach Selection Tool</h3>
        <p className="text-neutral mt-1">Find the best AI Mapping implementation for your needs</p>
      </div>
      
      <div className="p-6">
        {/* Question 1 */}
        <div className="mb-6">
          <h4 className="text-white font-medium mb-3">Do you have an existing component library?</h4>
          <div className="flex space-x-4">
            <button
              className={`px-4 py-2 rounded-lg border transition-colors ${
                answers.componentLibrary === 'yes'
                  ? 'bg-primary text-black border-primary'
                  : 'bg-transparent text-neutral border-neutral-dark hover:border-primary hover:text-primary'
              }`}
              onClick={() => handleSelect('componentLibrary', 'yes')}
            >
              Yes, extensive
            </button>
            <button
              className={`px-4 py-2 rounded-lg border transition-colors ${
                answers.componentLibrary === 'some'
                  ? 'bg-primary text-black border-primary'
                  : 'bg-transparent text-neutral border-neutral-dark hover:border-primary hover:text-primary'
              }`}
              onClick={() => handleSelect('componentLibrary', 'some')}
            >
              Some components
            </button>
            <button
              className={`px-4 py-2 rounded-lg border transition-colors ${
                answers.componentLibrary === 'no'
                  ? 'bg-primary text-black border-primary'
                  : 'bg-transparent text-neutral border-neutral-dark hover:border-primary hover:text-primary'
              }`}
              onClick={() => handleSelect('componentLibrary', 'no')}
            >
              No / Very limited
            </button>
          </div>
        </div>
        
        {/* Question 2 */}
        <div className="mb-6">
          <h4 className="text-white font-medium mb-3">How unique is your content?</h4>
          <div className="flex space-x-4">
            <button
              className={`px-4 py-2 rounded-lg border transition-colors ${
                answers.contentUniqueness === 'very'
                  ? 'bg-primary text-black border-primary'
                  : 'bg-transparent text-neutral border-neutral-dark hover:border-primary hover:text-primary'
              }`}
              onClick={() => handleSelect('contentUniqueness', 'very')}
            >
              Very unique
            </button>
            <button
              className={`px-4 py-2 rounded-lg border transition-colors ${
                answers.contentUniqueness === 'somewhat'
                  ? 'bg-primary text-black border-primary'
                  : 'bg-transparent text-neutral border-neutral-dark hover:border-primary hover:text-primary'
              }`}
              onClick={() => handleSelect('contentUniqueness', 'somewhat')}
            >
              Somewhat unique
            </button>
            <button
              className={`px-4 py-2 rounded-lg border transition-colors ${
                answers.contentUniqueness === 'standard'
                  ? 'bg-primary text-black border-primary'
                  : 'bg-transparent text-neutral border-neutral-dark hover:border-primary hover:text-primary'
              }`}
              onClick={() => handleSelect('contentUniqueness', 'standard')}
            >
              Fairly standard
            </button>
          </div>
        </div>
        
        {/* Question 3 */}
        <div className="mb-8">
          <h4 className="text-white font-medium mb-3">How important is design consistency?</h4>
          <div className="flex space-x-4">
            <button
              className={`px-4 py-2 rounded-lg border transition-colors ${
                answers.consistency === 'very'
                  ? 'bg-primary text-black border-primary'
                  : 'bg-transparent text-neutral border-neutral-dark hover:border-primary hover:text-primary'
              }`}
              onClick={() => handleSelect('consistency', 'very')}
            >
              Very important
            </button>
            <button
              className={`px-4 py-2 rounded-lg border transition-colors ${
                answers.consistency === 'somewhat'
                  ? 'bg-primary text-black border-primary'
                  : 'bg-transparent text-neutral border-neutral-dark hover:border-primary hover:text-primary'
              }`}
              onClick={() => handleSelect('consistency', 'somewhat')}
            >
              Somewhat important
            </button>
            <button
              className={`px-4 py-2 rounded-lg border transition-colors ${
                answers.consistency === 'not'
                  ? 'bg-primary text-black border-primary'
                  : 'bg-transparent text-neutral border-neutral-dark hover:border-primary hover:text-primary'
              }`}
              onClick={() => handleSelect('consistency', 'not')}
            >
              Not very important
            </button>
          </div>
        </div>
        
        {/* Recommendation */}
        {recommendation && (
          <div className="bg-primary bg-opacity-10 border border-primary rounded-lg p-6">
            <h4 className="text-primary text-xl font-semibold mb-3">
              Recommendation: {recommendationContent[recommendation].title}
            </h4>
            <p className="text-white mb-4">
              {recommendationContent[recommendation].description}
            </p>
            <div>
              <h5 className="text-white font-medium mb-2">Key Benefits:</h5>
              <ul className="space-y-2">
                {recommendationContent[recommendation].benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-neutral">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ApproachSelector;