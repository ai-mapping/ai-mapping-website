import React from 'react';
import { cn } from '@/lib/cn';

export type SectionProps = {
  children: React.ReactNode;
  background?: 'surface' | 'background' | 'primary' | 'secondary' | 'accent' | 'none';
  paddingY?: 'sm' | 'md' | 'lg' | 'none';
  containerWidth?: 'full' | 'container' | 'narrow' | 'medium';
  className?: string;
  containerClassName?: string;
  id?: string;
};

const Section: React.FC<SectionProps> = ({
  children,
  background = 'surface',
  paddingY = 'lg',
  containerWidth = 'container',
  className = '',
  containerClassName = '',
  id,
}) => {
  // Background color mapping
  const bgColorMap = {
    surface: 'bg-surface',
    background: 'bg-background',
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    accent: 'bg-accent',
    none: '',
  };

  // Padding mapping
  const paddingYMap = {
    sm: 'py-6',
    md: 'py-10',
    lg: 'py-12',
    none: '',
  };

  // Container width mapping
  const containerWidthMap = {
    full: 'w-full px-4',
    container: 'container mx-auto px-4 md:px-6 lg:px-8',
    narrow: 'container mx-auto px-4 md:px-6 lg:px-8 max-w-3xl',
    medium: 'container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl',
  };

  return (
    <section
      id={id}
      className={cn(
        bgColorMap[background],
        paddingYMap[paddingY],
        className
      )}
    >
      <div className={cn(containerWidthMap[containerWidth], containerClassName)}>
        {children}
      </div>
    </section>
  );
};

export default Section;