import React from 'react';
import FAQAccordion from './FAQAccordion';
import Section from '@/components/layout/Section';

// Define types for FAQ items
export type FAQItem = {
  question: string;
  answer: string;
};

// Main props interface
export type FAQProps = {
  heading: string;
  faqItems: FAQItem[];
  askButtonText: string;
};

// Default props
export const defaultFAQProps: FAQProps = {
  heading: 'Часто задаваемые вопросы',
  faqItems: [
    {
      question: 'Каковы сроки доставки запчастей из Китая?',
      answer:
        'Стандартный срок доставки запчастей составляет 7-14 дней. Точный срок зависит от наличия детали у наших партнеров в Китае, сложности ее поиска и логистических особенностей. В экстренных случаях возможна ускоренная доставка за дополнительную плату.',
    },
    {
      question: 'Насколько качественны аналоги запчастей?',
      answer:
        'Мы поставляем только качественные аналоги, произведенные на сертифицированных заводах в Китае. По своим техническим характеристикам и надежности они сопоставимы с оригинальными запчастями, при этом стоят значительно дешевле. На все запчасти предоставляется гарантия.',
    },
    {
      question: 'Какие способы оплаты вы принимаете?',
      answer:
        'Мы работаем как с наличным, так и с безналичным расчетом. Для юридических лиц доступна оплата по счету с НДС. Обычно мы работаем по предоплате 50%, остаток – перед отгрузкой товара. Для постоянных клиентов возможны индивидуальные условия оплаты.',
    },
    {
      question: 'Что делать, если нужна очень редкая запчасть?',
      answer:
        'Мы специализируемся на поиске редких и труднодоступных деталей. Наши партнеры в Китае имеют доступ к широкой сети производителей и складов. Даже если запчасть отсутствует в наличии, во многих случаях возможно её изготовление под заказ. Для таких случаев мы рекомендуем предоставить нам максимум информации о детали, включая фото, артикул и модель техники.',
    },
  ],
  askButtonText: 'Задать свой вопрос',
};

const FAQ = ({
  heading = defaultFAQProps.heading,
  faqItems = defaultFAQProps.faqItems,
  askButtonText = defaultFAQProps.askButtonText,
}: Partial<FAQProps>) => {
  return (
    <Section background="background" paddingY="lg" containerWidth="narrow">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8 text-white">
        {heading}
      </h2>

      <FAQAccordion faqItems={faqItems} askButtonText={askButtonText} />
    </Section>
  );
};

export default FAQ;
