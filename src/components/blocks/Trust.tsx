import React from 'react';
import Image from 'next/image';
import Section from '@/components/layout/Section';

// Define types for statistics
type Statistic = {
  value: string;
  description: string;
};

// Define types for partners
type Partner = {
  id: string;
  name: string;
  logo?: string;
};

// Main props interface
export type TrustProps = {
  heading: string;
  statistics: Statistic[];
  partnersTitle: string;
  partners: Partner[];
};

// Default props
export const defaultTrustProps: TrustProps = {
  heading: 'Нам доверяют',
  statistics: [
    {
      value: '5+ лет',
      description: 'опыта поставок запчастей из Китая'
    },
    {
      value: '500+',
      description: 'успешных поставок запчастей'
    },
    {
      value: '98%',
      description: 'довольных клиентов'
    }
  ],
  partnersTitle: 'Наши партнеры в Китае',
  partners: [
    { id: '1', name: 'Партнер 1' },
    { id: '2', name: 'Партнер 2' },
    { id: '3', name: 'Партнер 3' },
    { id: '4', name: 'Партнер 4' }
  ]
};

const Trust = ({
  heading = defaultTrustProps.heading,
  statistics = defaultTrustProps.statistics,
  partnersTitle = defaultTrustProps.partnersTitle,
  partners = defaultTrustProps.partners
}: Partial<TrustProps>) => {
  return (
    <Section background="surface" paddingY="lg" containerWidth="container">
        <div className="bg-background rounded-lg p-8 md:p-12 border border-neutral-dark shadow-lg">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10 text-white">
            {heading}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {statistics.map((stat, index) => (
              <div key={`stat-${index}`} className="bg-surface p-6 rounded-lg shadow-md border border-neutral-dark hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl font-bold text-primary mb-3">
                  {stat.value}
                </div>
                <p className="text-neutral">{stat.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-semibold text-center mb-6 text-primary">
              {partnersTitle}
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {partners.map((partner) => (
                <div 
                  key={`partner-${partner.id}`}
                  className="w-28 h-20 bg-surface rounded-lg border border-neutral-dark shadow-md flex items-center justify-center hover:shadow-md transition-shadow duration-300"
                >
                  {partner.logo ? (
                    <Image 
                      src={partner.logo} 
                      alt={partner.name} 
                      className="max-w-full max-h-full"
                      width={96}
                      height={64} 
                    />
                  ) : (
                    <span className="font-medium text-sm text-neutral">{partner.name}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
    </Section>
  );
};

export default Trust;
