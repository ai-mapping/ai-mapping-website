'use client';

import React from 'react';
import Image from 'next/image';
import { BlogPost } from '@/types/blog';
import { formatDate } from '@/lib/utils';
import HeroWithButton from '@/components/layout/HeroWithButton';
import Section from '@/components/layout/Section';
import { cn } from '@/lib/utils';

// Blog article components
import WorkflowInfographic from './article/WorkflowInfographic';
import PainPointSelector from './article/PainPointSelector';
import ComponentCapabilityViz from './article/ComponentCapabilityViz';
import TechnicalDiagram from './article/TechnicalDiagram';
import ApproachSelector from './article/ApproachSelector';
import SideBySideComparison from './article/SideBySideComparison';
import ArchitectureDiagram from './article/ArchitectureDiagram';
import DevLifeComparison from './article/DevLifeComparison';
import ROICalculator from './article/ROICalculator';
import CTACard from './article/CTACard';
import FinalCTA from './article/FinalCTA';

// Import markdown content and styling
import MarkdownContent from '@/components/blocks/MarkdownContent';

interface ArticlePageProps {
  slug: string;
  meta?: BlogPost;
}

const ArticlePage: React.FC<ArticlePageProps> = ({ slug, meta }) => {
  // Since we cannot dynamically load markdown content at build time in this setup,
  // we'll use hardcoded sections for the demo
  // In a real implementation, you would fetch this from an API or CMS
  const [processedContent] = React.useState<string[]>([
    `# AI Mapping: From Content to Components\n\n## 1. Introduction: The Content-First Transformation\n\nTraditional web development forces content to fit predefined templates, but AI Mapping reverses this approach by letting content shape the interface.\n\nImagine you're a content creator with a brilliant idea for a marketing page. You write compelling copy, only to hear from developers: "That won't fit our existing components." Or perhaps you're a developer, tired of creating yet another slight variation of a feature card just to accommodate a different content structure.\n\nThis is the fundamental problem with the traditional web development workflow: content is constrained by technical limitations, forcing compromises that dilute messaging and slow development.\n\nAI Mapping creates a paradigm shift by prioritizing content creation without technical constraints. Write content naturally, add minimal guidance when needed, and let AI handle the adaptation of UI components to your content.\n\nWhy is this approach necessary now? We're witnessing the convergence of three key trends:\n\n1. **AI and LLM maturity**: Modern AI systems can now understand content context, structure, and relationships\n2. **Headless CMS adoption**: Content is increasingly separated from presentation in modern architectures\n3. **Rising expectations**: Development teams face pressure to build WordPress-level features from scratch using only headless CMS\n\nThe result is a fundamental shift in web development that puts content creators in the driver's seat while making developers more productive.`,
    `## 2. The Problem with Traditional Component Development\n\nCurrent web development requires developers to create components for every content variation, leading to inefficiencies and compromises that affect the entire team.\n\n### The Traditional Component Cycle\n\nIn traditional frontend development, the workflow typically follows this pattern:\n\n1. Designers create mockups based on specific content examples\n2. Developers implement components to match these designs\n3. Content changes or varies from the initial examples\n4. Components don't adapt well to the variations\n5. Developers create new components or modify existing ones\n6. The cycle of adjustments continues, creating technical debt\n\n### The Content Creator's Dilemma\n\nWhile developers struggle with endless component variations, content creators face the opposite problem:\n\n1. They're locked into the constraints of existing components\n2. They can edit content within CMS fields, but can't adapt how that content is presented\n3. They can't modify component layouts or structures when content needs change\n4. Creative ideas often get rejected if they don't fit existing component patterns\n5. Content must be shoehorned into predefined structures\n6. The result is diluted messaging and frustrated content teams\n\nThis two-sided problem creates a constant tension between development and content teams, with neither side able to work efficiently.\n\nThis approach is fundamentally flawed because it assumes content will conform to predetermined structures. In reality, content is fluid and varied, especially across marketing pages and product descriptions.\n\nLet's look at a typical rigid component:\n\n\`\`\`tsx\n// Traditional rigid Hero component that expects exact data structure\nconst Hero = ({ title, subtitle, cta, image }) => {\n  return (\n    <div className="hero-container">\n      <div className="hero-content">\n        <h1 className="hero-title">{title}</h1>\n        {subtitle && <p className="hero-subtitle">{subtitle}</p>}\n        <button className="hero-cta">{cta}</button>\n      </div>\n      <div className="hero-image">\n        <img src={image} alt={title} />\n      </div>\n    </div>\n  );\n};\n\`\`\`\n\nThis component works perfectly—until marketing wants to add a second CTA, or replace the subtitle with a list of bullet points, or use a video instead of an image. Each variation requires developer intervention, creating bottlenecks and frustration.`,
    `The cost of this rigid approach is substantial:\n\n- Developers spend up to 40% of their time on component adjustments\n- Marketing teams wait an average of 3-5 days for content changes\n- Technical debt accumulates with each new component variation\n- Consistency suffers as component libraries grow unwieldy\n\nAI Mapping offers a fundamentally different approach that addresses these problems at their root.`,
    `## 3. The Core Concept: Content-to-Component Mapping\n\nAI Mapping creates a bidirectional relationship between content and components, letting AI handle the adaptation between them.\n\nAt its core, AI Mapping is built on a simple but powerful idea: components should declare their capabilities and content should express its needs. The AI mapping engine bridges the gap between them.\n\n### How Content Is Analyzed\n\nThe AI Mapping system analyzes content to understand:\n\n- **Structure**: Headings, paragraphs, lists, images, and other elements\n- **Intention**: The purpose of the content (persuasion, information, call-to-action)\n- **Relationships**: How different content pieces relate to each other\n- **Emphasis**: What content should be highlighted or prioritized\n\nContent can be written naturally in markdown with optional light annotations:\n\n\`\`\`markdown\n# Transform Your Web Development Workflow\n{intent: "hero-heading"}\n\nAI Mapping is a revolutionary approach that lets content shape your UI components, not the other way around.\n\n## Key Benefits\n{intent: "feature-list"}\n\n- 5x faster development cycles\n- Content-first workflow\n- Reduced technical debt\n- Happier teams\n\n[Get Started](#) [View Demo](#)\n{intent: "cta-group"}\n\`\`\`\n\n### How Components Declare Capabilities\n\nComponents explicitly define what kinds of content they can present effectively:\n\n\`\`\`tsx\n// Component capability definition\nconst HeroCapability = {\n  name: "Hero",\n  contentTypes: ["heading", "subheading", "cta", "image"],\n  minRequiredContent: ["heading"],\n  optionalContent: ["subheading", "cta", "image"],\n  adaptability: {\n    layout: ["centered", "left-aligned", "right-aligned"],\n    contentLength: {\n      heading: { min: 2, max: 15, ideal: 7 },\n      subheading: { min: 0, max: 100, ideal: 40 }\n    }\n  }\n};\n\`\`\`\n\n### The AI Mapping Bridge\n\nThe AI mapping engine connects content to components by:\n\n1. Analyzing the content structure and intentions\n2. Identifying compatible components from the registry\n3. Scoring components based on their fit for the specific content\n4. Selecting the optimal component\n5. Adapting component properties to best present the content`,
    `This mapping process happens automatically, but with full visibility and developer oversight. The result is a system where content creators can work freely while maintaining the benefits of a structured component library.`,
    `## 4. Implementing the Mapping Process\n\nThe mapping process works through a combination of content analysis, component capability matching, and intelligent adaptation.\n\n### Content Parsing and Structure Analysis\n\nThe first step is parsing the content to understand its structure. In the AI Mapping framework, this process is handled by AI when we add a new page. For example, we're currently using Claude Code in this framework to perform these steps:\n\n1. **Parse content format** - Convert markdown/structured content into analyzable data\n2. **Extract structure** - Identify headings, paragraphs, lists, and other elements\n3. **Identify content intents** - Determine the purpose of each content block (explicit or inferred)\n4. **Analyze relationships** - Understand how different content blocks relate to each other\n5. **Generate content representation** - Create a structured representation of the content\n\nThis automated analysis eliminates the need for manual content tagging or structuring, making the process efficient and accessible to non-technical users.\n\n### Component Capability Registry\n\nComponents register their capabilities in a central registry:\n\n\`\`\`typescript\nconst componentRegistry = {\n  Hero: {\n    name: "Hero",\n    contentTypes: ["heading", "paragraph", "cta", "image"],\n    minRequiredContent: ["heading"],\n    // Additional capability metadata\n  },\n  FeatureGrid: {\n    name: "FeatureGrid",\n    contentTypes: ["heading", "feature-list", "icon"],\n    minRequiredContent: ["feature-list"],\n    // Additional capability metadata\n  },\n  // Other component capabilities\n};\n\`\`\`\n\n### The Mapping Algorithm\n\nThe core mapping algorithm matches content to components through a series of steps that the AI handles automatically. Instead of writing this logic ourselves, we provide clear instructions to the AI in the project. These instructions guide the AI through a systematic process:\n\n1. **Find compatible components** - Identify components that satisfy the minimum content requirements\n2. **Score component matches** - Evaluate how well each component fits the specific content\n3. **Select optimal components** - Choose the best component for each content section\n4. **Adapt components to content** - Customize the selected components for the specific content\n\n### Adaptation and Transformation\n\nOnce components are selected, the AI adapts them to best present the specific content, following our guidance:\n\n1. **Extract relevant content** - Pull the content needed for the selected component\n2. **Determine optimal layout** - Select the best layout based on content structure\n3. **Transform content to props** - Convert content into the component's prop structure\n4. **Apply appropriate styling** - Ensure the component follows design system guidelines\n\nThe AI handles these steps through carefully crafted prompts and instructions in the project. This approach allows non-technical users to benefit from sophisticated mapping logic without having to understand or implement it themselves.`,
    `The result is a powerful system that connects content directly to the most appropriate UI components, with the flexibility to adapt as content changes.`,
    `## 5. Two Implementation Approaches\n\nAI Mapping can work with both predefined component libraries and dynamically generated components, each with distinct advantages.\n\n### Predefined Component Library Approach\n\nWith this approach, you maintain a library of well-designed, tested components. The AI mapping system selects and adapts these components to fit content needs.\n\nThe process works through these steps:\n1. Content is analyzed to understand structure and intent\n2. The AI identifies the best matching components from your library\n3. Components are selected based on compatibility and fit scores\n4. Selected components are adapted to the specific content requirements\n5. The adapted components are assembled into the final page\n\n**Advantages:**\n- Consistent design and behavior\n- Well-tested components\n- Predictable performance\n- Easier for developers to understand and extend\n\n**Limitations:**\n- Less flexible for highly unique content\n- Requires upfront component development\n- May need occasional custom components\n\n### Dynamic Component Generation\n\nThis approach uses AI to generate custom components tailored specifically to content needs.\n\nThe process works through these steps:\n1. Content is analyzed to understand structure and intent\n2. AI determines the optimal component structure needed\n3. Custom components are generated to precisely match content requirements\n4. The generated components implement design system guidelines automatically\n5. Components are compiled and rendered with the content\n\nIn this scenario, the AI typically generates a single large React component with JSX that represents the entire page, rather than multiple smaller components. This monolithic approach ensures the content is presented exactly as needed but may sacrifice modularity.\n\n**Advantages:**\n- Maximum flexibility for unique content\n- No upfront component development needed\n- Highly adaptable to content variations\n\n**Limitations:**\n- Potential inconsistency in design and behavior\n- Quality depends on AI generation capabilities\n- More difficult to test and maintain\n- Less modular due to generating larger, page-specific components\n\n### Hybrid Approach (Recommended)\n\nMost real-world implementations benefit from a hybrid approach that combines the strengths of both methods.\n\nThe process works through these steps:\n1. Content is analyzed to understand structure and intent\n2. The AI first tries to find matches in the predefined component library\n3. For well-matched content, predefined components are adapted and used\n4. For content without good component matches, custom components are generated\n5. The final page combines both predefined and generated components`,
    `The best approach depends on your specific needs, but the hybrid model offers the ideal balance of consistency and flexibility for most projects.`,
    `## 6. Real-World Example: From Markdown to Marketing Page\n\nLet's see how AI Mapping transforms markdown content into a functional marketing page.\n\n### The Source Markdown\n\nHere's a simplified example of markdown content with minimal annotations:\n\n\`\`\`markdown\n# AI Mapping Framework\n{intent: "hero-heading"}\n\nTransform how websites are built by letting content shape your UI.\n{intent: "hero-subheading"}\n\n[Get Started](#) [View Demo](#)\n{intent: "cta-group"}\n\n## Key Features\n{intent: "section-heading"}\n\n### Content-First Development\n...\n\`\`\`\n\n### The Mapping Process\n\nThe AI analyzes this content and:\n1. Identifies the structure and purpose of each section\n2. Selects appropriate components (Hero, FeatureGrid, ProcessSteps, TestimonialSlider)\n3. Maps content to component properties\n4. Adapts layouts based on content length and complexity`,
    `The result is a fully assembled page with appropriate components and properties, all derived directly from the content without manual development work.`,
    `## 7. Integration with Headless CMS\n\nAI Mapping works seamlessly with headless CMS systems, enabling content creators to work independently while maintaining the benefits of the framework.\n\n### Connecting to CMS Platforms\n\nIntegrating with popular headless CMS platforms like Contentful, Sanity, or Strapi is straightforward:\n\n\`\`\`typescript\n// Example integration with a headless CMS\nasync function fetchAndMapContent(pageSlug) {\n  // Fetch content from CMS\n  const content = await cmsClient.getPage(pageSlug);\n\n  // Store fetched content as a file in the content folder\n  // This allows version control and easier editing\n  await storeContentToFile(content, \`content/\${pageSlug}.md\`);\n\n  // At this point, the AI tool begins the mapping process:\n  // 1. The AI reads the content file\n  // 2. Analyzes the structure and intent\n  // 3. Selects appropriate components\n  // 4. Creates the actual page components\n  // 5. Assembles the final page\n\n  return ''; // The actual implementation is handled by the AI\n}\n\`\`\`\n\n### Content Modeling Considerations\n\nWhen using AI Mapping with a headless CMS, consider these content modeling approaches:\n\n1. **Structured Content Model**: Define specific content types with fields that map to component props\n2. **Flexible Content Model**: Use rich text or markdown fields with intent annotations\n3. **Hybrid Model**: Combine structured fields with flexible rich text sections\n\nThe third approach often provides the best balance of structure and flexibility.\n\n### Preview and Publishing Process\n\nA typical workflow with headless CMS integration looks like this:\n\n1. Content creators edit content in the CMS\n2. AI Mapping processes content in a preview environment\n3. Content preview shows the mapped components\n4. Content creators can add annotations or adjust content as needed\n5. Once approved, the content is published\n6. The production site renders using the same mapping process`,
    `This integration creates a powerful workflow where content creators have autonomy while the system maintains consistent presentation through AI Mapping.`,
    `## 8. The Developer's Role in AI Mapping\n\nDevelopers remain essential in the AI Mapping workflow, shifting from component creation to system architecture and oversight.\n\nRather than spending time on repetitive component variations, developers focus on higher-value activities:\n\n- **Component capability definition**: Creating and maintaining the component registry\n- **System architecture**: Building the mapping infrastructure and integrations\n- **Quality assurance**: Ensuring mapping results meet design and performance standards\n- **Continuous improvement**: Enhancing the mapping algorithm and component adaptability\n\nImportantly, developers continue to implement other features and business logic not directly related to content presentation. This includes:\n\n- Application state management\n- API integrations and data handling\n- User authentication and authorization\n- Performance optimization\n- Complex interactive features\n- Backend services and infrastructure\n\nAI Mapping frees developers from tedious component adjustments, allowing them to focus on these more complex and valuable aspects of application development.`,
    `## 9. Benefits and ROI\n\nAI Mapping is expected to deliver significant benefits in development speed, content flexibility, and maintenance costs.\n\nBased on our research and initial testing, we predict:\n\n- **Faster development cycles**: Elimination of repetitive component creation\n- **Reduced waiting time**: Quicker implementation of new features\n- **Less code to maintain**: Fewer component variations leading to reduced technical debt\n- **Immediate content previews**: See how content will render as soon as it's written\n\nThese predictions are based on analysis of current development workflows and the potential improvements from AI-assisted mapping. As more teams adopt this approach, we'll gather actual metrics to quantify these benefits.`,
    `## 10. Comparing Approaches\n\nAI Mapping offers distinct advantages over alternative approaches to web development.\n\n| Approach | Flexibility | Development Speed | Content Creator Freedom | Consistency | Technical Debt |\n|----------|-------------|-------------------|-------------------------|-------------|----------------|\n| Traditional Development | Low | Slow | Limited | High | High |\n| No-Code Builders | Medium | Fast | Medium | Low | Medium |\n| Headless CMS + Templates | Medium | Medium | Medium | Medium | Medium |\n| AI Code Generation | High | Medium | Low | Low | Very High |\n| **AI Mapping** | **High** | **Very Fast** | **High** | **High** | **Low** |\n\n### Key Insights from the Comparison\n\nThis comparison reveals several important advantages of the AI Mapping approach:\n\n1. **Breaking the traditional tradeoffs**: Most approaches force you to choose between flexibility and consistency, or between development speed and content creator freedom. AI Mapping breaks these tradeoffs.\n\n2. **Best-in-class across multiple dimensions**: While other approaches may excel in one or two areas, AI Mapping achieves high ratings across all key metrics.\n\n3. **Lower technical debt despite high flexibility**: Unlike pure AI code generation, which can create maintenance challenges, AI Mapping maintains structure and consistency even with high flexibility.\n\n4. **Developer and content creator alignment**: The approach creates harmony between technical and content teams by serving both of their needs simultaneously.\n\n5. **Superior adaptability to change**: When business requirements or design systems evolve, AI Mapping can adapt existing content without starting from scratch.\n\n6. **Controlled AI power**: This approach harnesses the full capabilities of AI but in a controllable way. Developers can precisely tune where to give AI more freedom and where to restrict it. This provides the benefits of AI assistance without surrendering control over critical aspects of the application.\n\nThis comparative advantage makes AI Mapping particularly well-suited for organizations that need to balance quality, speed, and flexibility in their web development process.`,
    `## 11. Getting Started & Future Vision\n\nThe AI Mapping framework is in its early development stages, and we're looking for contributors to help shape its future.\n\nVisit our GitHub repository to explore the current progress and join the project:\n[https://github.com/ai-mapping/ai-mapping-website](https://github.com/ai-mapping/ai-mapping-website)\n\nAs AI capabilities grow, we envision content-to-component mapping becoming increasingly sophisticated and powerful. The roadmap includes:\n\n- Enhanced content understanding with context awareness\n- More sophisticated component generation and adaptation\n- Design system integration for consistent brand experiences\n- Expanded use cases for e-commerce, documentation, and applications\n\nWe welcome contributions of all kinds - from code and documentation to ideas and feedback. Together, we can build a framework that transforms how content-driven websites are created.`,
    `## 12. Conclusion\n\nAI Mapping represents a fundamental shift in web development, putting content creators in the driver's seat while making developers more productive.\n\nThis isn't about replacing developers—it's about letting them focus on solving interesting problems instead of tedious component adjustments.\n\nThe content-first approach creates better outcomes for everyone:\n- **Content creators** gain autonomy and flexibility\n- **Developers** work on higher-value problems\n- **Businesses** launch faster with better results\n\nThe AI-driven development landscape is evolving rapidly, and early adopters gain significant advantages. Those who embrace this approach now will build crucial expertise while others are still catching up. As AI continues to transform development practices, the gap between those who adapt early and those who delay will only widen. The time to start exploring content-first development isn't later—it's now.`
  ]);
  

  // Function to render a component based on its number in the TODO sequence
  const renderComponent = (index: number) => {
    switch (index) {
      case 1:
        return <WorkflowInfographic />;
      case 2:
        return <PainPointSelector />;
      case 3:
        return <ComponentCapabilityViz />;
      case 4:
        return <TechnicalDiagram />;
      case 5:
        return <ApproachSelector />;
      case 6:
        return <SideBySideComparison />;
      case 7:
        return <ArchitectureDiagram />;
      case 8:
        return <DevLifeComparison />;
      case 9:
        return <ROICalculator />;
      case 10:
        return <CTACard />;
      case 11:
        return <FinalCTA />;
      default:
        return null;
    }
  };

  return (
    <>
      <HeroWithButton
        title={meta?.title || 'AI Mapping: From Content to Components'}
        subtitle={meta?.excerpt || 'A new approach to web development that puts content first'}
        bgImage={meta?.coverImage?.src || '/images/placeholders/code-bg.jpg'}
      />

      <Section background="surface" paddingY="lg" containerWidth="medium">
        <article className="bg-surface p-6 rounded-lg border border-neutral-dark">
          {/* Article meta */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 pb-6 border-b border-neutral-dark">
            <div className="flex items-center mb-4 sm:mb-0">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-black font-bold mr-4">
                  {meta?.author?.name?.substring(0, 1) || 'A'}
                </div>
                <div>
                  <div className="text-white font-medium">{meta?.author?.name || 'Author'}</div>
                  <div className="text-neutral text-sm">{meta?.author?.title || 'AI Mapping Team'}</div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap items-center gap-2">
              <time 
                dateTime={meta?.publishedAt} 
                className="text-xs font-medium bg-primary/20 text-primary px-2 py-1 rounded"
              >
                {meta?.publishedAt ? formatDate(meta.publishedAt) : 'April 19, 2025'}
              </time>
              
              {meta?.readingTime && (
                <span className="text-xs bg-neutral-light text-neutral px-2 py-1 rounded">
                  {meta.readingTime} read
                </span>
              )}
              
              {meta?.tags?.map((tag, index) => (
                <span 
                  key={`tag-${index}`}
                  className="text-xs bg-secondary/20 text-secondary-light px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Article content with custom components interspersed */}
          <div className="prose prose-lg max-w-none text-white">
            {processedContent[0] && (
              <div className="mx-auto mt-8 text-white" dangerouslySetInnerHTML={{ 
                __html: processedContent[0].replace(/```([^`]+)```/g, (_: string, code: string) => 
                  `<pre class="bg-neutral-light text-white p-4 rounded-lg overflow-x-auto my-6 font-mono text-sm">${code.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</pre>`
                ) 
              }} />
            )}
            
            <WorkflowInfographic />
            
            {processedContent[1] && (
              <div className="mx-auto mt-8 text-white" dangerouslySetInnerHTML={{ 
                __html: processedContent[1].replace(/```([^`]+)```/g, (_: string, code: string) => 
                  `<pre class="bg-neutral-light text-white p-4 rounded-lg overflow-x-auto my-6 font-mono text-sm">${code.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</pre>`
                ) 
              }} />
            )}
            
            <PainPointSelector />
            
            {processedContent[2] && (
              <div className="mx-auto mt-8 text-white" dangerouslySetInnerHTML={{ 
                __html: processedContent[2].replace(/```([^`]+)```/g, (_: string, code: string) => 
                  `<pre class="bg-neutral-light text-white p-4 rounded-lg overflow-x-auto my-6 font-mono text-sm">${code.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</pre>`
                ) 
              }} />
            )}
            
            <ComponentCapabilityViz />
            
            {processedContent[3] && (
              <div className="mx-auto mt-8 text-white" dangerouslySetInnerHTML={{ 
                __html: processedContent[3].replace(/```([^`]+)```/g, (_: string, code: string) => 
                  `<pre class="bg-neutral-light text-white p-4 rounded-lg overflow-x-auto my-6 font-mono text-sm">${code.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</pre>`
                ) 
              }} />
            )}
            
            <TechnicalDiagram />
            
            {processedContent[4] && (
              <div className="mx-auto mt-8 text-white" dangerouslySetInnerHTML={{ 
                __html: processedContent[4].replace(/```([^`]+)```/g, (_: string, code: string) => 
                  `<pre class="bg-neutral-light text-white p-4 rounded-lg overflow-x-auto my-6 font-mono text-sm">${code.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</pre>`
                ) 
              }} />
            )}
            
            <ApproachSelector />
            
            {processedContent[5] && (
              <div className="mx-auto mt-8 text-white" dangerouslySetInnerHTML={{ 
                __html: processedContent[5].replace(/```([^`]+)```/g, (_: string, code: string) => 
                  `<pre class="bg-neutral-light text-white p-4 rounded-lg overflow-x-auto my-6 font-mono text-sm">${code.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</pre>`
                ) 
              }} />
            )}
            
            <SideBySideComparison />
            
            {processedContent[6] && (
              <div className="mx-auto mt-8 text-white" dangerouslySetInnerHTML={{ 
                __html: processedContent[6].replace(/```([^`]+)```/g, (_: string, code: string) => 
                  `<pre class="bg-neutral-light text-white p-4 rounded-lg overflow-x-auto my-6 font-mono text-sm">${code.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</pre>`
                ) 
              }} />
            )}
            
            <ArchitectureDiagram />
            
            {processedContent[7] && (
              <div className="mx-auto mt-8 text-white" dangerouslySetInnerHTML={{ 
                __html: processedContent[7].replace(/```([^`]+)```/g, (_: string, code: string) => 
                  `<pre class="bg-neutral-light text-white p-4 rounded-lg overflow-x-auto my-6 font-mono text-sm">${code.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</pre>`
                ) 
              }} />
            )}
            
            <DevLifeComparison />
            
            {processedContent[8] && (
              <div className="mx-auto mt-8 text-white" dangerouslySetInnerHTML={{ 
                __html: processedContent[8].replace(/```([^`]+)```/g, (_: string, code: string) => 
                  `<pre class="bg-neutral-light text-white p-4 rounded-lg overflow-x-auto my-6 font-mono text-sm">${code.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</pre>`
                ) 
              }} />
            )}
            
            <ROICalculator />
            
            {processedContent[9] && (
              <div className="mx-auto mt-8 text-white" dangerouslySetInnerHTML={{ 
                __html: processedContent[9].replace(/```([^`]+)```/g, (_: string, code: string) => 
                  `<pre class="bg-neutral-light text-white p-4 rounded-lg overflow-x-auto my-6 font-mono text-sm">${code.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</pre>`
                ) 
              }} />
            )}
            
            <div className="mx-auto mt-8 mb-12 text-white">
              <table className="min-w-full bg-surface border border-neutral-dark rounded-lg overflow-hidden">
                <thead className="bg-neutral-light">
                  <tr>
                    <th className="px-4 py-3 text-left text-white">Approach</th>
                    <th className="px-4 py-3 text-left text-white">Flexibility</th>
                    <th className="px-4 py-3 text-left text-white">Development Speed</th>
                    <th className="px-4 py-3 text-left text-white">Content Creator Freedom</th>
                    <th className="px-4 py-3 text-left text-white">Consistency</th>
                    <th className="px-4 py-3 text-left text-white">Technical Debt</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-dark">
                  <tr>
                    <td className="px-4 py-3 text-neutral">Traditional Development</td>
                    <td className="px-4 py-3 text-neutral">Low</td>
                    <td className="px-4 py-3 text-neutral">Slow</td>
                    <td className="px-4 py-3 text-neutral">Limited</td>
                    <td className="px-4 py-3 text-neutral">High</td>
                    <td className="px-4 py-3 text-neutral">High</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-neutral">No-Code Builders</td>
                    <td className="px-4 py-3 text-neutral">Medium</td>
                    <td className="px-4 py-3 text-neutral">Fast</td>
                    <td className="px-4 py-3 text-neutral">Medium</td>
                    <td className="px-4 py-3 text-neutral">Low</td>
                    <td className="px-4 py-3 text-neutral">Medium</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-neutral">Headless CMS + Templates</td>
                    <td className="px-4 py-3 text-neutral">Medium</td>
                    <td className="px-4 py-3 text-neutral">Medium</td>
                    <td className="px-4 py-3 text-neutral">Medium</td>
                    <td className="px-4 py-3 text-neutral">Medium</td>
                    <td className="px-4 py-3 text-neutral">Medium</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-neutral">AI Code Generation</td>
                    <td className="px-4 py-3 text-neutral">High</td>
                    <td className="px-4 py-3 text-neutral">Medium</td>
                    <td className="px-4 py-3 text-neutral">Low</td>
                    <td className="px-4 py-3 text-neutral">Low</td>
                    <td className="px-4 py-3 text-neutral">Very High</td>
                  </tr>
                  <tr className="bg-neutral-light bg-opacity-20">
                    <td className="px-4 py-3 text-primary font-bold">AI Mapping</td>
                    <td className="px-4 py-3 text-primary font-bold">High</td>
                    <td className="px-4 py-3 text-primary font-bold">Very Fast</td>
                    <td className="px-4 py-3 text-primary font-bold">High</td>
                    <td className="px-4 py-3 text-primary font-bold">High</td>
                    <td className="px-4 py-3 text-primary font-bold">Low</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            {processedContent[10] && (
              <div className="mx-auto mt-8 text-white" dangerouslySetInnerHTML={{ 
                __html: processedContent[10].replace(/```([^`]+)```/g, (_: string, code: string) => 
                  `<pre class="bg-neutral-light text-white p-4 rounded-lg overflow-x-auto my-6 font-mono text-sm">${code.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</pre>`
                ) 
              }} />
            )}
            
            <CTACard />
            
            {processedContent[11] && (
              <div className="mx-auto mt-8 text-white" dangerouslySetInnerHTML={{ 
                __html: processedContent[11].replace(/```([^`]+)```/g, (_: string, code: string) => 
                  `<pre class="bg-neutral-light text-white p-4 rounded-lg overflow-x-auto my-6 font-mono text-sm">${code.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</pre>`
                ) 
              }} />
            )}
            
            <FinalCTA />
          </div>
        </article>
      </Section>
    </>
  );
};

export default ArticlePage;