'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/cn';

export type HeroAIProps = {
  badge?: string;
  title: string;
  description: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryButtonClick?: () => void;
  onSecondaryButtonClick?: () => void;
  backgroundImage?: string;
  overlayOpacity?: number; // 0-100
  overlayColor?: 'primary' | 'secondary' | 'accent' | 'background' | 'dark';
};

export const defaultHeroAIProps: HeroAIProps = {
  badge: 'New Framework',
  title: 'Content-First Frontend Development with AI',
  description: 'AI-Mapping revolutionizes how websites are built by letting your content shape the interface, not the other way around.',
  primaryButtonText: 'Get Started',
  secondaryButtonText: 'View on GitHub',
  backgroundImage: '/images/hero/hero-image.png',
  overlayOpacity: 85,
  overlayColor: 'background',
};

const HeroAI: React.FC<Partial<HeroAIProps>> = ({
  badge = defaultHeroAIProps.badge,
  title = defaultHeroAIProps.title,
  description = defaultHeroAIProps.description,
  primaryButtonText = defaultHeroAIProps.primaryButtonText,
  secondaryButtonText = defaultHeroAIProps.secondaryButtonText,
  onPrimaryButtonClick,
  onSecondaryButtonClick,
  backgroundImage = defaultHeroAIProps.backgroundImage,
  overlayOpacity = defaultHeroAIProps.overlayOpacity,
  overlayColor = defaultHeroAIProps.overlayColor,
}) => {
  // Function to determine the overlay color class based on the overlayColor prop
  const getOverlayColorClass = () => {
    switch (overlayColor) {
      case 'primary':
        return 'from-primary-dark via-primary to-primary-dark';
      case 'secondary':
        return 'from-secondary via-secondary to-secondary';
      case 'accent':
        return 'from-accent via-accent to-accent';
      case 'dark':
        return 'from-black via-black to-black';
      case 'background':
      default:
        return 'from-black via-background to-black';
    }
  };

  return (
    <section className="relative py-28 overflow-hidden w-full">
      {/* Background Image */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImage}
            alt="Hero background"
            fill
            priority
            style={{ objectFit: 'cover' }}
            className="w-full h-full"
          />
        </div>
      )}
      
      {/* Overlay with gradient */}
      <div 
        className={`absolute inset-0 bg-gradient-to-r ${getOverlayColorClass()} z-0`}
        style={{ opacity: (overlayOpacity ?? 85) / 100 }}
        data-testid="hero-overlay"
      ></div>
      
      {/* Content Container */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          {badge && (
            <div className="mb-6 animate-pulse">
              <div className="bg-primary px-5 py-2 rounded-full text-base font-semibold text-black inline-flex items-center shadow-glow">
                <span>{badge}</span>
              </div>
            </div>
          )}
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold my-10 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight tracking-tight">
            {title}
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl text-neutral mb-14 max-w-4xl font-light leading-relaxed">
            {description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 mt-4">
            {primaryButtonText && (
              <button 
                className={cn("bg-primary text-black font-bold text-lg px-8 py-4 rounded-lg hover:bg-primary-light transition-all duration-300 flex items-center shadow-md hover:shadow-lg")}
                onClick={onPrimaryButtonClick}
              >
                {primaryButtonText} <ArrowRight className="ml-3 h-6 w-6" />
              </button>
            )}
            
            {secondaryButtonText && (
              <button 
                className={cn("bg-transparent border-2 border-neutral-dark text-white font-bold text-lg px-8 py-4 rounded-lg hover:border-primary hover:text-primary transition-all duration-300 hover:shadow-glow")}
                onClick={onSecondaryButtonClick}
              >
                {secondaryButtonText}
              </button>
            )}
          </div>
        </div>
      </div>
      
      {/* Background glow effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-2 bg-primary blur-xl"></div>
    </section>
  );
};

export default HeroAI;