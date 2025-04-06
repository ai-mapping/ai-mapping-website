import React from 'react';
import Link from 'next/link';

const FinalCTA = () => {
  return (
    <div className="my-10 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-lg border border-primary shadow-lg overflow-hidden">
      <div className="p-8">
        <div className="flex flex-col items-center text-center">
          <h3 className="text-3xl font-bold mb-4 text-gradient bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Join the Content-First Revolution
          </h3>
          
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            AI Mapping is more than a framework—it's a fundamental shift in how we approach web development. 
            Be part of shaping the future where content creators and developers work together harmoniously.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
            <a
              href="https://github.com/ai-mapping/ai-mapping-website"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary-light text-black font-bold px-8 py-4 rounded-lg transition-colors duration-200 flex items-center w-full sm:w-auto justify-center"
            >
              <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
              </svg>
              Contribute on GitHub
            </a>
            
            <Link
              href="/documentation"
              className="bg-secondary hover:bg-secondary-light text-white font-bold px-8 py-4 rounded-lg transition-colors duration-200 flex items-center w-full sm:w-auto justify-center"
            >
              <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 4L6 8H9L9 15C9 16.6569 10.3431 18 12 18C13.6569 18 15 16.6569 15 15V8H18L15 4H9Z" />
                <path d="M12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4V6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18C15.3137 18 18 15.3137 18 12C18 10.4363 17.4289 9.01086 16.4722 7.93542L17.886 6.52197C19.2099 8.00259 20 9.90062 20 12C20 16.4183 16.4183 20 12 20Z" />
              </svg>
              Read Documentation
            </Link>
          </div>
          
          <div className="flex items-center gap-6 mb-8">
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-primary">250+</div>
              <div className="text-sm text-neutral">Commits</div>
            </div>
            
            <div className="h-10 border-r border-neutral-dark"></div>
            
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-secondary-light">32</div>
              <div className="text-sm text-neutral">Contributors</div>
            </div>
            
            <div className="h-10 border-r border-neutral-dark"></div>
            
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-accent">15</div>
              <div className="text-sm text-neutral">Demo Pages</div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="flex -space-x-2">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-primary/20 border border-primary flex items-center justify-center overflow-hidden">
                  <span className="text-xs text-primary font-bold">{String.fromCharCode(65 + i)}</span>
                </div>
              ))}
              <div className="w-8 h-8 rounded-full bg-neutral-dark border border-neutral flex items-center justify-center overflow-hidden">
                <span className="text-xs text-neutral font-bold">+26</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalCTA;