import React from 'react';

const CTACard = () => {
  return (
    <div className="my-10 bg-surface rounded-lg border border-neutral-dark shadow-lg overflow-hidden">
      <div className="p-6">
        <div className="flex flex-col items-center text-center">
          <h3 className="text-white text-xl font-bold mb-3">
            Join the AI Mapping Project
          </h3>
          
          <p className="text-neutral mb-6 max-w-2xl mx-auto">
            We're building an open-source framework to transform content-to-component mapping.
            Contribute your expertise, ideas, and feedback.
          </p>
          
          <div className="flex items-center space-x-4 mb-6">
            <a
              href="https://github.com/ai-mapping/ai-mapping-website"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary-light text-black font-bold px-6 py-3 rounded-lg transition-colors duration-200 flex items-center"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
              </svg>
              GitHub Repository
            </a>
            
            <div className="flex items-center space-x-2">
              <div className="bg-neutral-light px-3 py-1 rounded text-neutral text-sm flex items-center">
                <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                <span>Star</span>
              </div>
              <div className="bg-neutral-light px-3 py-1 rounded text-neutral text-sm flex items-center">
                <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6 3C4.35 3 3 4.35 3 6v12c0 1.65 1.35 3 3 3h12c1.65 0 3-1.35 3-3V6c0-1.65-1.35-3-3-3H6zm6 7.72L7.41 15.3l1.18 1.18L12 13.06l3.41 3.42 1.18-1.18L12 10.72z" />
                </svg>
                <span>Fork</span>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center space-x-2 text-sm text-neutral">
            <span className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-accent mr-1"></span>
              Open Source
            </span>
            <span>•</span>
            <span className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-primary mr-1"></span>
              MIT License
            </span>
            <span>•</span>
            <span className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-secondary-light mr-1"></span>
              React / Next.js
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTACard;