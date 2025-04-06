import React from 'react';

const HomepageGPT = () => {
  return (
    <div className="bg-background text-white font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary via-secondary to-accent text-black py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">
            AI-Mapping: будущее создания сайтов
          </h1>
          <p className="text-lg mb-6">
            Автоматизируй разработку маркетинговых сайтов с помощью мощного AI.
          </p>
          <button className="bg-primary hover:bg-primary-light text-black font-semibold py-3 px-6 rounded-lg">
            Попробовать бесплатно
          </button>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 container mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-4xl font-semibold text-center mb-10">
          Почему AI-Mapping?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            'Content-First',
            'Автоматизация',
            'Без кода',
            'Гибкость дизайна',
          ].map((title) => (
            <div
              key={title}
              className="bg-surface rounded-lg shadow-md p-6 border border-neutral-dark hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-primary mb-2">
                {title}
              </h3>
              <p className="text-neutral">
                {`С помощью подхода "${title}" вы получаете максимум скорости и простоты в работе.`}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* How We Work Section */}
      <section className="bg-surface py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-4xl font-semibold text-center mb-12">
            Как это работает?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Создание контента в Markdown',
              'AI анализирует ваш контент',
              'Генерация компонентов',
              'Ревью и улучшение',
            ].map((step, index) => (
              <div key={step} className="text-center">
                <div className="bg-neutral-light rounded-lg p-4 mb-4 shadow-md">
                  <span className="text-5xl font-bold text-accent">
                    {index + 1}
                  </span>
                </div>
                <h4 className="text-lg font-semibold text-primary mb-2">
                  {step}
                </h4>
                <p className="text-neutral">
                  Этап процесса, подробно описанный и проиллюстрированный.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 container mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-4xl font-semibold text-center mb-10">
          Успешные кейсы
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              company: 'Enterprise',
              result: 'Сократили время разработки лендингов с 12 до 3 недель.',
            },
            {
              company: 'Agency',
              result: 'Увеличили количество клиентов на 40%.',
            },
            {
              company: 'E-commerce',
              result:
                'Повысили конверсию на 23% за счет быстрого A/B тестирования.',
            },
          ].map(({ company, result }) => (
            <div
              key={company}
              className="bg-surface rounded-lg shadow-md p-6 border border-neutral-dark hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-secondary mb-2">
                {company}
              </h3>
              <p className="text-neutral">{result}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-secondary via-primary to-accent py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-black mb-4">
            Готовы попробовать?
          </h2>
          <button className="bg-black hover:bg-neutral-dark text-white font-semibold py-3 px-6 rounded-lg">
            Получить доступ
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-neutral py-8">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
          <p>&copy; 2024 AI-Mapping. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomepageGPT;
