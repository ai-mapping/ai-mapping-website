import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import ClockIcon from '@/components/ui/icons/ClockIcon';
import ShieldIcon from '@/components/ui/icons/ShieldIcon';
import SearchIcon from '@/components/ui/icons/SearchIcon';

// Define types for feature items
type FeatureItem = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

// Main props interface
export type HeroWithButtonProps = {
  backgroundImage?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  headline?: string;
  subheadline?: string;
  features?: FeatureItem[];
  buttonText?: string;
  buttonLink?: string;
  // Additional props for simplified usage
  bgImage?: string;
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
};

// Default props
export const defaultHeroWithButtonProps: HeroWithButtonProps = {
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
  buttonText: 'Get Started',
  buttonLink: '/documentation',
};

const HeroWithButton = (props: Partial<HeroWithButtonProps>) => {
  // Determine if we're using the simplified mode
  const isSimplifiedMode = !!(props.title || props.subtitle);
  
  // Set defaults based on the mode
  const {
    backgroundImage = defaultHeroWithButtonProps.backgroundImage,
    headline = defaultHeroWithButtonProps.headline,
    subheadline = defaultHeroWithButtonProps.subheadline,
    features = defaultHeroWithButtonProps.features,
    buttonText = defaultHeroWithButtonProps.buttonText,
    buttonLink = defaultHeroWithButtonProps.buttonLink,
    // Simplified mode props
    bgImage,
    title,
    subtitle,
    ctaText,
    ctaHref,
  } = props;

  // Render the simplified version if in simplified mode
  if (isSimplifiedMode) {
    return (
      <section className="bg-background pb-12 md:pb-16 md:pt-[100px] relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 md:opacity-40 z-0">
          <Image
            src={bgImage || '/images/placeholders/code-bg.jpg'}
            alt={title || 'Hero background'}
            width={1200}
            height={630}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10 text-center py-16 md:py-24">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            {title}
          </h1>
          
          <h2 className="text-xl md:text-2xl text-white mb-10 max-w-3xl mx-auto">
            {subtitle}
          </h2>
          
          {ctaText && (
            <Link 
              href={ctaHref || '#'}
              className="inline-block bg-primary text-black font-bold py-3 px-8 rounded-lg hover:bg-primary-light transition-colors duration-300 hover:shadow-[0_0_20px_rgba(0,191,255,0.4)]"
            >
              {ctaText}
            </Link>
          )}
        </div>
      </section>
    );
  }
  
  // Ensure we have the required data for the detailed version
  const bgImageData = backgroundImage ?? defaultHeroWithButtonProps.backgroundImage!;
  const featuresData = features ?? defaultHeroWithButtonProps.features!;
  const btnLink = buttonLink ?? defaultHeroWithButtonProps.buttonLink!;
  const btnText = buttonText ?? defaultHeroWithButtonProps.buttonText!;
  
  // Render the original detailed version
  return (
    <section className="bg-background pb-16 md:pb-20 md:pt-[100px] relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 md:opacity-30 z-0">
        <Image
          src={bgImageData.src}
          alt={bgImageData.alt}
          width={bgImageData.width}
          height={bgImageData.height}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-7/12 mb-10 md:mb-0">
            {/* Add wrapper for title */}
            <div className="flow-root">
              <div
                className="float-left invisible md:hidden"
                style={{
                  width: '110px',
                  height: '120px',
                  marginRight: '12px',
                  shapeOutside: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
                }}
              />
              <h1 className="text-[22px] sm:text-3xl mt-1 md:mt-0 md:text-4xl lg:text-5xl font-bold leading-tight mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                {headline}
              </h1>
            </div>

            <h2 className="text-xl md:text-2xl text-white mb-8">
              {subheadline}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {featuresData.map((feature, index) => (
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

          <div className="md:w-5/12 md:pl-8 flex flex-col items-center justify-center">
            <div className="bg-surface p-8 rounded-lg shadow-lg w-full border border-neutral-dark hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-primary mb-4 text-center">
                Start Building Today
              </h3>
              <p className="text-white mb-6 text-center">
                Join thousands of developers using AI-Mapping to transform their frontend workflow.
              </p>
              <Link 
                href={btnLink}
                className="block w-full bg-primary text-black font-bold py-3 px-6 rounded-lg hover:bg-primary-light transition-colors duration-300"
              >
                {btnText}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroWithButton;