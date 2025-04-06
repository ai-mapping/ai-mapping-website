import React from 'react';
import FastDeliveryIcon from '@/components/ui/icons/FastDeliveryIcon';
import QualityIcon from '@/components/ui/icons/QualityIcon';
import SearchIcon from '@/components/ui/icons/SearchIcon';
import PriceIcon from '@/components/ui/icons/PriceIcon';
import CheckmarkIcon from '@/components/ui/icons/CheckmarkIcon';
import Section from '@/components/layout/Section';

type AdvantageItem = {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
};

export type AdvantagesProps = {
  title: string;
  subtitle: string;
  advantages: AdvantageItem[];
};

// Default values
export const defaultAdvantagesProps: AdvantagesProps = {
  title: 'Наши преимущества',
  subtitle: 'Почему клиенты выбирают нас',
  advantages: [
    {
      icon: <FastDeliveryIcon />,
      title: 'Экспресс-доставка в условиях санкций',
      description: 'В то время как официальные дилеры ушли с рынка, мы создали эффективные каналы доставки запчастей из Китая в короткие сроки.',
      features: [
        '7-14 дней на доставку вместо 1-3 месяцев',
        'Собственная сеть представителей в Китае',
        'Прямые контакты с производителями'
      ]
    },
    {
      icon: <QualityIcon />,
      title: 'Высокое качество неоригинальных запчастей',
      description: 'Мы поставляем только качественные аналоги, которые сравнимы с оригинальными запчастями по надежности и долговечности.',
      features: [
        'Строгий контроль качества на производстве',
        'Соответствие техническим спецификациям',
        'Экономия до 30-40% от стоимости оригинала'
      ]
    },
    {
      icon: <SearchIcon />,
      title: 'Поиск и доставка редких запчастей',
      description: 'Мы специализируемся на поиске редких и труднодоступных деталей, которые невозможно найти у других поставщиков.',
      features: [
        'Доступ к широкой сети производителей в Китае',
        'Возможность изготовления под заказ',
        'Решение нестандартных задач по поиску запчастей'
      ]
    },
    {
      icon: <PriceIcon />,
      title: 'Ценовое преимущество',
      description: 'Мы предлагаем конкурентные рыночные цены и оптимальное соотношение цена/качество для представленных запчастей.',
      features: [
        'Экономия от 20% до 40% по сравнению с оригиналом',
        'Скидки для постоянных клиентов и при крупных заказах',
        'Прозрачное ценообразование'
      ]
    }
  ]
};

const Advantages = ({
  title = defaultAdvantagesProps.title,
  subtitle = defaultAdvantagesProps.subtitle,
  advantages = defaultAdvantagesProps.advantages
}: Partial<AdvantagesProps>) => {
  // Split advantages into two rows
  const firstRow = advantages.slice(0, 2);
  const secondRow = advantages.slice(2, 4);

  return (
    <Section background="background" paddingY="lg" containerWidth="container">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-2">
          {title}
        </h2>
        <p className="text-dark text-center mb-8">
          {subtitle}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {firstRow.map((advantage, index) => (
            <div key={`advantage-1-${index}`} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start">
                <div className="text-primary mr-4 mt-1">
                  {advantage.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">
                    {advantage.title}
                  </h3>
                  <p className="text-dark mb-4">
                    {advantage.description}
                  </p>
                  <ul className="text-dark space-y-2">
                    {advantage.features.map((feature, featureIndex) => (
                      <li key={`feature-1-${index}-${featureIndex}`} className="flex items-start">
                        <CheckmarkIcon />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {secondRow.map((advantage, index) => (
            <div key={`advantage-2-${index}`} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start">
                <div className="text-primary mr-4 mt-1">
                  {advantage.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">
                    {advantage.title}
                  </h3>
                  <p className="text-dark mb-4">
                    {advantage.description}
                  </p>
                  <ul className="text-dark space-y-2">
                    {advantage.features.map((feature, featureIndex) => (
                      <li key={`feature-2-${index}-${featureIndex}`} className="flex items-start">
                        <CheckmarkIcon />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
    </Section>
  );
};

export default Advantages;
