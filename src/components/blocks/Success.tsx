import React from 'react';
import SuccessCard from './SuccessCard';
import Section from '@/components/layout/Section';

// Define types for case studies
export type CaseStudy = {
  id: string;
  title: string;
  deliveryTime: string;
  description: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};

// Main props interface
export type SuccessProps = {
  heading: string;
  subheading: string;
  cases: CaseStudy[];
  buttonText: string;
};

// Default props
export const defaultSuccessProps: SuccessProps = {
  heading: 'Примеры успешных поставок',
  subheading: 'Реальные кейсы доставки запчастей нашим клиентам',
  cases: [
    {
      id: '1',
      title: 'Гидроцилиндр для CAT 320D',
      deliveryTime: 'Доставлено за 9 дней',
      description: 'Клиент из Подмосковья искал гидроцилиндр для экскаватора CAT 320D. Официальные дилеры называли срок от 2-х месяцев.',
      image: {
        src: 'https://via.placeholder.com/600x400',
        alt: 'Гидроцилиндр CAT 320D',
        width: 400,
        height: 192
      }
    },
    {
      id: '2',
      title: 'Турбина для KOMATSU PC300',
      deliveryTime: 'Доставлено за 12 дней',
      description: 'Строительная компания из Москвы срочно нуждалась в турбине для экскаватора, который простаивал более месяца.',
      image: {
        src: 'https://via.placeholder.com/600x400',
        alt: 'Турбина KOMATSU PC300',
        width: 400,
        height: 192
      }
    },
    {
      id: '3',
      title: 'Блок управления CAT D6R',
      deliveryTime: 'Доставлено за 11 дней',
      description: 'Редкий электронный блок управления для бульдозера CAT D6R. Клиент не мог найти его у других поставщиков.',
      image: {
        src: 'https://via.placeholder.com/600x400',
        alt: 'Блок управления CAT D6R',
        width: 400,
        height: 192
      }
    }
  ],
  buttonText: 'Заказать такой же'
};

const Success = ({
  heading = defaultSuccessProps.heading,
  subheading = defaultSuccessProps.subheading,
  cases = defaultSuccessProps.cases,
  buttonText = defaultSuccessProps.buttonText
}: Partial<SuccessProps>) => {
  return (
    <Section background="background" paddingY="lg" containerWidth="container">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-3 text-white">
          {heading}
        </h2>
        <p className="text-neutral text-center mb-10 max-w-2xl mx-auto">
          {subheading}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((caseStudy) => (
            <SuccessCard
              key={caseStudy.id}
              caseStudy={caseStudy}
              buttonText={buttonText}
            />
          ))}
        </div>
    </Section>
  );
};

export default Success;
