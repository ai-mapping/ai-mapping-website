import React from 'react';
import Section from '@/components/layout/Section';
import Link from 'next/link';

// Main props interface (without form props)
export type CTAProps = {
  heading: string;
  subheading: string;
  buttonText: string;
  buttonLink: string;
};

// Default props
export const defaultCTAProps: CTAProps = {
  heading: 'Ready to Transform Your Development Process?',
  subheading: 'Start using AI-Mapping today and experience the power of AI-driven frontend development.',
  buttonText: 'Get Started',
  buttonLink: '/documentation'
};

const CTA = ({
  heading = defaultCTAProps.heading,
  subheading = defaultCTAProps.subheading,
  buttonText = defaultCTAProps.buttonText,
  buttonLink = defaultCTAProps.buttonLink
}: Partial<CTAProps>) => {
  return (
    <Section background="primary" paddingY="lg" containerWidth="narrow" containerClassName="text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
        {heading}
      </h2>
      <p className="text-black text-lg mb-8">
        {subheading}
      </p>

      <Link 
        href={buttonLink}
        className="inline-block bg-secondary text-white font-bold px-6 py-3 rounded-lg hover:bg-secondary-light transition-colors duration-300 hover:shadow-lg"
      >
        {buttonText}
      </Link>
    </Section>
  );
};

export default CTA;