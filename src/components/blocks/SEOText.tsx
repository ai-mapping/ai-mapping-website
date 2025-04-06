import Link from 'next/link';
import React from 'react';
import Section from '@/components/layout/Section';

// Define types for model links
type ModelLink = {
  href: string;
  label: string;
};

// Define types for brand sections
type BrandSection = {
  title: string;
  models: ModelLink[];
};

// Main props interface
export type SEOTextProps = {
  heading: string;
  paragraphs: string[];
  brandSections: BrandSection[];
  footerText: string;
};

// Default props
export const defaultSEOTextProps: SEOTextProps = {
  heading: 'Запчасти для техники Caterpillar и KOMATSU',
  paragraphs: [
    'В условиях санкций и ухода официальных дилеров с российского рынка, поиск качественных запчастей для спецтехники Caterpillar и KOMATSU стал серьезной проблемой для многих компаний. Простой дорогостоящей техники приводит к значительным финансовым потерям и срывам сроков выполнения работ.',
    'Наша компания предлагает эффективное решение этой проблемы – экспресс-доставку запчастей из Китая в сжатые сроки. Мы специализируемся на поставках качественных аналогов для всех моделей техники Caterpillar и KOMATSU, а также других ведущих производителей.',
    'Благодаря налаженным связям с производителями в Китае и собственной логистической сети, мы обеспечиваем поставку запчастей в Москву и Московскую область в течение 7-14 дней, что в разы быстрее, чем у большинства конкурентов.'
  ],
  brandSections: [
    {
      title: 'Популярные модели техники Caterpillar:',
      models: [
        { href: '#', label: 'CAT 320D' },
        { href: '#', label: 'CAT 330D' },
        { href: '#', label: 'CAT 336D' },
        { href: '#', label: 'CAT 345D' },
        { href: '#', label: 'CAT D6R' },
        { href: '#', label: 'CAT D9R' },
        { href: '#', label: 'CAT 950H' },
        { href: '#', label: 'CAT 966H' }
      ]
    },
    {
      title: 'Популярные модели техники KOMATSU:',
      models: [
        { href: '#', label: 'KOMATSU PC200' },
        { href: '#', label: 'KOMATSU PC300' },
        { href: '#', label: 'KOMATSU PC400' },
        { href: '#', label: 'KOMATSU D65' },
        { href: '#', label: 'KOMATSU D155' },
        { href: '#', label: 'KOMATSU WA470' },
        { href: '#', label: 'KOMATSU WA500' },
        { href: '#', label: 'KOMATSU HD785' }
      ]
    }
  ],
  footerText: 'Мы работаем как с частными компаниями, так и с крупными строительными корпорациями в Москве и Московской области. При необходимости организуем доставку в другие регионы России.'
};

const SEOText = ({
  heading = defaultSEOTextProps.heading,
  paragraphs = defaultSEOTextProps.paragraphs,
  brandSections = defaultSEOTextProps.brandSections,
  footerText = defaultSEOTextProps.footerText
}: Partial<SEOTextProps>) => {
  return (
    <Section background="background" paddingY="lg" containerWidth="medium">
          <h2 className="text-2xl font-semibold mb-4">
            {heading}
          </h2>

          <div className="prose prose-lg max-w-none text-dark mb-6">
            {paragraphs.map((paragraph, index) => (
              <p key={`paragraph-${index}`}>{paragraph}</p>
            ))}
          </div>

          {brandSections.map((section, sectionIndex) => (
            <React.Fragment key={`section-${sectionIndex}`}>
              <h3 className="text-xl font-semibold mb-3">
                {section.title}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6">
                {section.models.map((model, modelIndex) => (
                  <Link 
                    key={`model-${sectionIndex}-${modelIndex}`} 
                    href={model.href} 
                    className="text-accent hover:underline"
                  >
                    {model.label}
                  </Link>
                ))}
              </div>
            </React.Fragment>
          ))}

          <p className="text-dark">
            {footerText}
          </p>
    </Section>
  );
};

export default SEOText;
