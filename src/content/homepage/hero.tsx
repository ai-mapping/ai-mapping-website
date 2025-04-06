import React from 'react';
import { ClockIcon, ShieldIcon, SearchIcon } from '@/components/ui/icons';
import type { HeroProps } from '@/components/layout/Hero';

const heroProps: HeroProps = {
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

export default heroProps;