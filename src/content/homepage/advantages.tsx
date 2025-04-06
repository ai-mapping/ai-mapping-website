import React from 'react';
import {
  FastDeliveryIcon,
  QualityIcon,
  PriceIcon,
  SearchIcon,
} from '@/components/ui/icons';
import { AdvantagesProps } from '@/components/blocks/Advantages';

const advantagesProps: AdvantagesProps = {
  title: 'Our Advantages',
  subtitle: 'Why Developers Choose AI-Mapping',
  advantages: [
    {
      icon: <FastDeliveryIcon />,
      title: 'Accelerated Development',
      description:
        'AI-Mapping drastically reduces development time by automating component creation, allowing developers to focus on logic and user experience rather than repetitive coding tasks.',
      features: [
        'Up to 80% reduction in development time',
        'Automatic component generation from markdown content',
        'Intelligent content-to-component mapping',
      ],
    },
    {
      icon: <QualityIcon />,
      title: 'Design System Consistency',
      description: 'Our framework maintains design system integrity while adapting to content needs, ensuring brand consistency across all generated components.',
      features: [
        'Respects existing design guidelines',
        'Consistent component styling across the entire site',
        'Automatic theme integration with your design tokens'
      ]
    },
    {
      icon: <SearchIcon />,
      title: 'Content-First Development',
      description:
        'AI-Mapping flips the traditional development model by adapting components to content rather than forcing content to fit rigid component structures.',
      features: [
        'Components adapt to content instead of the reverse',
        'Freedom for content creators to express ideas fully',
        'No more "content doesn\'t fit our template" problems',
      ],
    },
    {
      icon: <PriceIcon />,
      title: 'Developer-Friendly Workflow',
      description:
        'Our approach seamlessly integrates with existing development workflows and empowers both technical and non-technical team members.',
      features: [
        'Collaborative framework that respects developers\' expertise',
        'Simple text-based content entry with powerful styling capabilities',
        'Transparent component generation you can inspect and refine',
      ],
    },
  ],
};

export default advantagesProps;