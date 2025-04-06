'use client';

import React from 'react';
import Section from '@/components/layout/Section';
import { cn } from '@/lib/cn';

// Define types for code example content
export type CodeFile = {
  fileName: string;
  language: 'markdown' | 'typescript' | 'javascript' | 'jsx' | 'tsx' | 'css' | 'html' | 'json';
  content: string;
};

// Main props interface
export type CodeExampleProps = {
  heading: string;
  description: string;
  codeFiles: CodeFile[];
  ctaText?: string;
  onCtaClick?: () => void;
};

// Default props with content
export const defaultCodeExampleProps: CodeExampleProps = {
  heading: 'See It In Action',
  description: 'AI-Mapping makes it simple to transform content into dynamic, responsive components.',
  codeFiles: [
    {
      fileName: 'content.md',
      language: 'markdown',
      content: `# Enterprise Technology Case Study

XYZ Corp reduced development time from **12 weeks to just 3 weeks** using AI-Mapping, while maintaining strict brand consistency across 47 landing pages.

## Key Results:
- 75% reduction in development time
- 98% brand consistency score
- 32% improvement in conversion rates

The marketing team was able to launch new campaigns quickly without relying on developer resources for every content update.`,
    },
    {
      fileName: 'component-mapping.tsx',
      language: 'typescript',
      content: `// AI automatically maps content to appropriate components
const contentToComponentMap = {
  "# Enterprise Technology Case Study": {
    component: "CaseStudyHeader",
    props: {
      industry: "Enterprise Technology",
      featured: true
    }
  },

  "XYZ Corp reduced...": {
    component: "CaseStudyIntro",
    props: {
      highlights: ["12 weeks to 3 weeks", "brand consistency"]
    }
  },

  "## Key Results:": {
    component: "MetricsDisplay",
    props: {
      metrics: [
        { value: "75%", label: "reduction in development time" },
        { value: "98%", label: "brand consistency score" },
        { value: "32%", label: "improvement in conversion rates" }
      ]
    }
  }
};

// Components adapt to content automatically
export default function CaseStudy({ content }) {
  return (
    <AIComponentMapper
      content={content}
      mappingRules={defaultRules}
      designSystem={companyTheme}
    />
  );
}`,
    },
  ],
  ctaText: 'Try the interactive demo',
};

// Helper function to determine text color based on language
const getLanguageTextColor = (language: CodeFile['language']): string => {
  switch (language) {
    case 'typescript':
    case 'tsx':
      return 'text-accent';
    case 'markdown':
      return 'text-white';
    default:
      return 'text-white';
  }
};

const CodeExample: React.FC<Partial<CodeExampleProps>> = ({
  heading = defaultCodeExampleProps.heading,
  description = defaultCodeExampleProps.description,
  codeFiles = defaultCodeExampleProps.codeFiles,
  ctaText = defaultCodeExampleProps.ctaText,
  onCtaClick,
}) => {
  return (
    <Section paddingY="lg" background="none" className="w-full overflow-hidden">
      <div className="max-w-3xl mx-auto text-center mb-16 w-full px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{heading}</h2>
        <p className="text-neutral text-lg">{description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-5xl mx-auto w-full px-4">
        {codeFiles.map((file, index) => (
          <div
            key={`code-file-${index}`}
            className={cn("bg-neutral-light p-4 md:p-6 rounded-lg border border-neutral-dark w-full max-w-full")}
          >
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 rounded-full bg-error mr-2"></div>
              <div className="w-3 h-3 rounded-full bg-warning mr-2"></div>
              <div className="w-3 h-3 rounded-full bg-success mr-2"></div>
              <div className="text-neutral text-sm font-mono ml-2">
                {file.fileName}
              </div>
            </div>
            <div
              className={cn(`font-mono text-sm ${getLanguageTextColor(file.language)} w-full`)}
              style={{ maxHeight: '400px', overflow: 'auto' }}
            >
              <pre 
                className={file.language === 'markdown' ? "whitespace-pre-wrap" : "whitespace-pre"}
                style={{ 
                  overflowWrap: 'break-word',
                  wordBreak: 'break-word',
                  maxWidth: '100%'
                }}
              >
                {file.content}
              </pre>
            </div>
          </div>
        ))}
      </div>

      {ctaText && (
        <div className="mt-12 text-center w-full px-4">
          <button 
            className={cn("bg-primary text-black font-semibold px-6 py-2.5 rounded-lg hover:bg-primary-light transition-all duration-300 max-w-full break-words")}
            onClick={onCtaClick}
          >
            {ctaText}
          </button>
        </div>
      )}
    </Section>
  );
};

export default CodeExample;