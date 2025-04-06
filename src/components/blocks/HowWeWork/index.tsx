'use client';

import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import Section from '@/components/layout/Section';

// Add custom CSS for animations
const fadeInStyle = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

// Import images
import step1Image from './step1.png';
import step2Image from './step2.png';
import step3Image from './step3.png';
import step4Image from './step4.png';

// Define types for workflow steps
type WorkflowStep = {
  id: number;
  title: string;
  description: string;
  image: StaticImageData;
};

// Main props interface
export type HowWeWorkProps = {
  heading: string;
  description: string;
  steps: WorkflowStep[];
};

// Default props with content
export const defaultHowWeWorkProps: HowWeWorkProps = {
  heading: 'How AI-Mapping Works',
  description:
    'A simple four-step process that transforms your content into fully-functional components.',
  steps: [
    {
      id: 1,
      title: 'Step 1: Write Content in Markdown',
      description:
        'Create your content in markdown files with simple style annotations. No need to worry about component structure or technical implementation details - just focus on your message.',
      image: step1Image,
    },
    {
      id: 2,
      title: 'Step 2: AI Analyzes Your Content',
      description:
        'AI-Mapping analyzes your content structure, intent, and styling annotations to determine the optimal component structure for presenting your information.',
      image: step2Image,
    },
    {
      id: 3,
      title: 'Step 3: Components Are Generated',
      description:
        'The system automatically maps content to existing components or generates new ones as needed, all while respecting your design system and guidelines.',
      image: step3Image,
    },
    {
      id: 4,
      title: 'Step 4: Review and Refine',
      description:
        'Developers can review, adjust, and refine the generated components to ensure they meet technical requirements and best practices before finalizing the implementation.',
      image: step4Image,
    },
  ],
};

const HowWeWork = ({
  heading = defaultHowWeWorkProps.heading,
  steps = defaultHowWeWorkProps.steps,
}: Partial<HowWeWorkProps>) => {
  // State to track which step is selected
  const [selectedStepId, setSelectedStepId] = useState<number>(1);

  // Handle step click
  const handleStepClick = (id: number) => {
    console.log('Clicked step:', id, 'Previous step:', selectedStepId);
    setSelectedStepId(id);
  };

  // Get the selected step
  const selectedStep =
    steps.find((step) => step.id === selectedStepId) || steps[0];

  return (
    <Section id="how-we-work" background="surface" paddingY="lg" containerWidth="container">
      <style dangerouslySetInnerHTML={{ __html: fadeInStyle }} />
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10 text-white">
        {heading}
      </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          {steps.map((step) => (
            <div
              key={`step-${step.id}`}
              className={`cursor-pointer transition-all duration-300 ${
                selectedStepId === step.id
                  ? 'border-2 border-primary scale-105 shadow-lg bg-primary/10'
                  : 'border border-neutral-dark hover:border-primary hover:shadow-md bg-neutral-light/20'
              } overflow-hidden rounded-lg`}
              role="button"
              aria-pressed={selectedStepId === step.id}
              tabIndex={0}
              // onKeyDown={(e) => e.key === 'Enter' && handleStepClick(step.id)}
              onClick={() => handleStepClick(step.id)}
            >
              <div className="p-0">
                <Image
                  src={step.image}
                  alt={step.title}
                  className="w-full h-auto"
                  width={300}
                  height={400}
                  priority={step.id === 1}
                />
              </div>
              <div className="p-4 bg-neutral-light h-24 border-t border-neutral-dark">
                <h3 className="font-medium text-center text-white">{step.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div
          key={`description-${selectedStepId}`}
          className="bg-neutral-light rounded-lg p-8 transition-all duration-300 border-2 border-primary shadow-lg"
          style={{ animation: 'fadeIn 0.5s ease-in-out' }}
        >
          <h3 className="text-xl font-semibold mb-4 text-primary">
            {selectedStep.title}
          </h3>
          <p className="text-neutral">{selectedStep.description}</p>
          <div className="text-right mt-4 text-sm text-primary">
            Step {selectedStepId} of {steps.length}
          </div>
        </div>
    </Section>
  );
};

export default HowWeWork;