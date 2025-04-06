import React from 'react';

// Mock default props
export const defaultCTAFormProps = {
  buttonText: 'Get Started',
  buttonLink: '/documentation'
};

// Mock CTAForm component - replaced with a button
const MockCTAForm = ({ 
  buttonText = defaultCTAFormProps.buttonText,
  buttonLink = defaultCTAFormProps.buttonLink,
}) => {
  return (
    <div className="mock-cta-form" data-testid="cta-form">
      <a href={buttonLink}>{buttonText}</a>
    </div>
  );
};

export default MockCTAForm;