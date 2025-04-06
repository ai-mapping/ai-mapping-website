'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import ClockIcon from '@/components/ui/icons/ClockIcon';
import ShieldIcon from '@/components/ui/icons/ShieldIcon';
import SearchIcon from '@/components/ui/icons/SearchIcon';

type FeatureItem = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export type HeroProps = {
  backgroundImage: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  headline: string;
  subheadline: string;
  features: FeatureItem[];
};

// Default props
export const defaultHeroProps: HeroProps = {
  backgroundImage: {
    src: '/images/placeholders/code-bg.jpg',
    alt: 'AI code generation background',
    width: 850,
    height: 566,
  },
  headline:
    'Transform Your Frontend Development with AI-Powered Components',
  subheadline:
    'Write content in markdown, add comments about output styles, and let AI do the rest. Build dynamic marketing websites and landing pages faster than ever.',
  features: [
    {
      icon: <ClockIcon />,
      title: 'Rapid Development',
      description: 'Build pages in minutes, not days or weeks',
    },
    {
      icon: <ShieldIcon />,
      title: 'Design System Consistency',
      description: 'AI respects your design guidelines while adapting to content',
    },
    {
      icon: <SearchIcon />,
      title: 'Content-First Approach',
      description: 'Components adapt to your content, not the other way around',
    },
  ],
};

const Hero = ({
  backgroundImage = defaultHeroProps.backgroundImage,
  headline = defaultHeroProps.headline,
  subheadline = defaultHeroProps.subheadline,
  features = defaultHeroProps.features,
}: Partial<HeroProps>) => {
  const [imageError, setImageError] = useState(false);

  // Handle image error
  const handleImageError = () => {
    console.log(`Background image failed to load: ${backgroundImage.src}`);
    setImageError(true);
  };

  return (
    <section className="bg-background pb-16 md:pb-20 md:pt-[100px] relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 md:opacity-30 z-0">
        {!imageError ? (
          <Image
            src={backgroundImage.src}
            alt={backgroundImage.alt}
            width={backgroundImage.width}
            height={backgroundImage.height}
            className="w-full h-full object-cover"
            onError={handleImageError}
          />
        ) : (
          <div className="w-full h-full bg-neutral-dark"></div>
        )}
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-7/12 mb-10 md:mb-0">
            {/* Add wrapper for title with float */}
            <div className="flow-root">
              {/* Invisible element taking space of logo */}
              <div
                className="float-left invisible md:hidden"
                style={{
                  width: '110px',
                  height: '120px',
                  marginRight: '12px',
                  shapeOutside: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
                }}
              />
              <h1 className="text-[22px] sm:text-3xl mt-1 md:mt-10 md:text-4xl lg:text-5xl font-bold leading-tight text-primary mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                {headline}
              </h1>
            </div>

            <h2 className="text-xl md:text-2xl text-white mb-8">
              {subheadline}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {features.map((feature, index) => (
                <div
                  key={`feature-${index}`}
                  className="bg-surface rounded-lg shadow-lg p-5 border border-neutral-dark hover:shadow-md transition-shadow duration-300"
                >
                  <div className="text-accent mb-3 h-6">{feature.icon}</div>
                  <h3 className="font-semibold text-lg mb-2 text-white">{feature.title}</h3>
                  <p className="text-neutral text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;