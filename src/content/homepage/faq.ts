const faqContent = {
  heading: 'Frequently Asked Questions',
  faqItems: [
    {
      question: 'How does AI-Mapping actually work?',
      answer: 'AI-Mapping uses advanced natural language processing to understand content in markdown files and map it to appropriate components. The system analyzes content structure, style annotations, and semantic meaning to select or generate the best components for each content block. Developers maintain control through design system guidelines and can approve or modify the AI-generated components as needed.'
    },
    {
      question: 'Does AI-Mapping replace frontend developers?',
      answer: 'Absolutely not. AI-Mapping is designed to enhance developer productivity by automating repetitive tasks, not replace developers. It works as a collaborative tool that respects developer expertise while freeing them to focus on more complex and creative aspects of frontend development. Developers remain essential for defining design systems, reviewing generated components, and handling complex interactions.'
    },
    {
      question: 'What technologies does AI-Mapping support?',
      answer: 'AI-Mapping is framework-agnostic but works best with React-based technologies like Next.js, Gatsby, and Remix. It integrates with popular styling approaches including Tailwind CSS, CSS Modules, styled-components, and Emotion. The system can also connect with design tools like Figma and content management systems such as Contentful, Sanity, and Strapi.'
    },
    {
      question: 'How does AI-Mapping maintain design consistency?',
      answer: 'AI-Mapping enforces design consistency by working within the constraints of your design system. It references your design tokens, component library, and style guidelines when generating or selecting components. Each component adheres to predefined spacing, typography, color, and layout rules while adapting to the specific content needs. This ensures that all pages maintain a cohesive look and feel regardless of the content variation.'
    }
  ],
  askButtonText: 'Ask Your Question'
};

export default faqContent;