import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Code,
  FileText,
  Layers,
  LayoutGrid,
  Rocket,
  Users,
  Zap,
} from 'lucide-react';
import { cn } from '@/lib/cn';
import HowWeWork from '@/components/blocks/HowWeWork';
import CodeExample from '@/components/blocks/CodeExample';
import FAQ from '@/components/blocks/FAQ';
import HeroAI from '@/components/layout/HeroAI';

const HomepageClaude: React.FC = () => {
  return (
    <div className={cn("bg-background text-white min-h-screen")}>
      {/* Hero Section */}
      <HeroAI 
        badge="New Framework"
        title="Content-First Frontend Development with AI"
        description="AI-Mapping revolutionizes how websites are built by letting your content shape the interface, not the other way around."
        primaryButtonText="Get Started"
        secondaryButtonText="View on GitHub"
        backgroundImage="/images/hero/hero-image.png"
        overlayOpacity={85}
        overlayColor="background"
      />

      {/* Problem Statement Block */}
      <section className="py-16 bg-surface w-full">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 w-full">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The Traditional Problem
            </h2>
            <p className="text-neutral text-lg">
              For too long, we&apos;ve been forcing content to fit predefined
              templates, compromising on messaging and user experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center w-full">
            <div className={cn("bg-neutral-light p-6 rounded-lg border border-neutral-dark w-full")}>
              <h3 className="text-xl font-semibold mb-4 text-error">
                Traditional Approach
              </h3>
              <ul className="space-y-3 text-neutral">
                <li className="flex items-start">
                  <span className="text-error mr-2">✖</span>
                  <span>Rigid templates limit content possibilities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-error mr-2">✖</span>
                  <span>
                    Content must be adapted to fit existing components
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-error mr-2">✖</span>
                  <span>Developers needed for every content update</span>
                </li>
                <li className="flex items-start">
                  <span className="text-error mr-2">✖</span>
                  <span>Longer development cycles for simple changes</span>
                </li>
              </ul>
              <div className={cn("mt-6 p-4 bg-background rounded border border-neutral-dark")}>
                <code className="text-sm text-neutral font-mono">
                  <br />
                  &lt;Hero
                  <br />
                  &nbsp;&nbsp;title=&ldquo;Limited to 50 chars&rdquo;
                  <br />
                  &nbsp;&nbsp;description=&ldquo;Must fit this exact layout&rdquo;
                  <br />
                  /&gt;
                </code>
              </div>
            </div>

            <div className={cn("bg-neutral-light p-6 rounded-lg border border-primary w-full")}>
              <h3 className="text-xl font-semibold mb-4 text-accent">
                AI-Mapping Approach
              </h3>
              <ul className="space-y-3 text-neutral">
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <span>Write content naturally without constraints</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <span>Components adapt to best present your content</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <span>Non-technical team members can update content</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <span>5x faster development and iteration cycles</span>
                </li>
              </ul>
              <div className={cn("mt-6 p-4 bg-background rounded border border-primary")}>
                <code className="text-sm text-accent font-mono">
                  {/* Content shapes the interface */}
                  <br />
                  content = markdown(`
                  <br />
                  &nbsp;&nbsp;# Your natural headline here
                  <br />
                  &nbsp;&nbsp;Write as much or little as you need...
                  <br />
                  `);
                </code>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section (with Images) */}
      <HowWeWork />

      {/* Multi-Audience Benefits Grid */}
      <section className="py-20 bg-surface w-full">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 w-full">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Who Benefits from AI-Mapping?
            </h2>
            <p className="text-neutral text-lg">
              AI-Mapping is designed to improve workflow and results for
              everyone involved in the website creation process.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 w-full">
            {/* Marketing Teams */}
            <div className={cn("bg-background rounded-lg p-6 border border-neutral-dark w-full")}>
              <div className="w-16 h-16 mx-auto mb-6">
                <div className="w-full h-full bg-primary/20 rounded-full flex items-center justify-center">
                  <Users className="text-primary h-8 w-8" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">
                Marketing Teams
              </h3>
              <ul className="space-y-3 text-neutral">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Content creators</strong> focus on messaging without
                    technical limitations
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Marketers</strong> launch campaigns quickly without
                    sacrificing quality
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Non-technical stakeholders</strong> gain more
                    control over final output
                  </span>
                </li>
              </ul>
              <div className="mt-6 text-center">
                <Link
                  href="#"
                  className={cn("text-primary hover:text-primary-light font-medium inline-flex items-center")}
                >
                  Marketing case study <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Development Teams */}
            <div className={cn("bg-background rounded-lg p-6 border border-neutral-dark w-full")}>
              <div className="w-16 h-16 mx-auto mb-6">
                <div className="w-full h-full bg-secondary/20 rounded-full flex items-center justify-center">
                  <Code className="text-secondary h-8 w-8" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">
                Development Teams
              </h3>
              <ul className="space-y-3 text-neutral">
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span>
                    <strong>Frontend developers</strong> reduce repetitive
                    component creation
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span>
                    <strong>Design system maintainers</strong> ensure consistent
                    implementation
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span>
                    <strong>Development managers</strong> improve productivity
                    and time to market
                  </span>
                </li>
              </ul>
              <div className="mt-6 text-center">
                <Link
                  href="#"
                  className={cn("text-secondary hover:text-secondary-light font-medium inline-flex items-center")}
                >
                  Developer guide <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Agencies */}
            <div className={cn("bg-background rounded-lg p-6 border border-neutral-dark w-full")}>
              <div className="w-16 h-16 mx-auto mb-6">
                <div className="w-full h-full bg-accent/20 rounded-full flex items-center justify-center">
                  <Rocket className="text-accent h-8 w-8" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">
                Agencies
              </h3>
              <ul className="space-y-3 text-neutral">
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>
                    <strong>Web design agencies</strong> build multiple
                    marketing sites faster
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>
                    <strong>Multi-client teams</strong> maintain consistent
                    quality with unique designs
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>
                    <strong>Small shops</strong> scale output with limited
                    resources
                  </span>
                </li>
              </ul>
              <div className="mt-6 text-center">
                <Link
                  href="#"
                  className={cn("text-accent hover:text-accent-light font-medium inline-flex items-center")}
                >
                  Agency success stories <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Highlights */}
      <section className="py-20 w-full">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 w-full">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Key Features and Benefits
            </h2>
            <p className="text-neutral text-lg">
              AI-Mapping provides a suite of powerful features that transform
              how marketing websites and landing pages are built.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 w-full">
            {/* Speed and Efficiency */}
            <div className={cn("bg-surface rounded-lg p-6 border border-neutral-dark hover:border-primary transition-all duration-300 w-full")}>
              <div className="flex items-start mb-4">
                <div className="w-10 h-10 mr-4 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Zap className="text-primary h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold">Speed and Efficiency</h3>
              </div>
              <ul className="space-y-3 text-neutral pl-14">
                <li className="list-disc">
                  <span>
                    <strong>5x faster development cycles</strong> - Eliminate
                    repetitive component creation
                  </span>
                </li>
                <li className="list-disc">
                  <span>
                    <strong>Dynamic component adaptation</strong> - Components
                    auto-adjust to content needs
                  </span>
                </li>
                <li className="list-disc">
                  <span>
                    <strong>Streamlined review process</strong> - Focus feedback
                    on key areas, not implementation details
                  </span>
                </li>
              </ul>
            </div>

            {/* Design Flexibility */}
            <div className={cn("bg-surface rounded-lg p-6 border border-neutral-dark hover:border-primary transition-all duration-300 w-full")}>
              <div className="flex items-start mb-4">
                <div className="w-10 h-10 mr-4 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <LayoutGrid className="text-secondary h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold">
                  Design Flexibility with Consistency
                </h3>
              </div>
              <ul className="space-y-3 text-neutral pl-14">
                <li className="list-disc">
                  <span>
                    <strong>Design system adherence</strong> - AI respects your
                    established design guidelines
                  </span>
                </li>
                <li className="list-disc">
                  <span>
                    <strong>Component consistency</strong> - Maintain visual
                    coherence across your entire site
                  </span>
                </li>
                <li className="list-disc">
                  <span>
                    <strong>Edge case handling</strong> - Automatically adapt to
                    content variations
                  </span>
                </li>
              </ul>
            </div>

            {/* Seamless Content Updates */}
            <div className={cn("bg-surface rounded-lg p-6 border border-neutral-dark hover:border-primary transition-all duration-300 w-full")}>
              <div className="flex items-start mb-4">
                <div className="w-10 h-10 mr-4 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <FileText className="text-accent h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold">
                  Seamless Content Updates
                </h3>
              </div>
              <ul className="space-y-3 text-neutral pl-14">
                <li className="list-disc">
                  <span>
                    <strong>Live preview</strong> - See content changes
                    reflected in components instantly
                  </span>
                </li>
                <li className="list-disc">
                  <span>
                    <strong>Content migration</strong> - Easily move content
                    between design systems
                  </span>
                </li>
                <li className="list-disc">
                  <span>
                    <strong>Independent content editing</strong> - Non-technical
                    team members can update content
                  </span>
                </li>
              </ul>
            </div>

            {/* Responsive by Default */}
            <div className={cn("bg-surface rounded-lg p-6 border border-neutral-dark hover:border-primary transition-all duration-300 w-full")}>
              <div className="flex items-start mb-4">
                <div className="w-10 h-10 mr-4 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Layers className="text-primary h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold">Responsive by Default</h3>
              </div>
              <ul className="space-y-3 text-neutral pl-14">
                <li className="list-disc">
                  <span>
                    <strong>Device-aware layouts</strong> - Components adapt
                    intelligently to different screen sizes
                  </span>
                </li>
                <li className="list-disc">
                  <span>
                    <strong>Performance optimization</strong> - Lazy loading and
                    code splitting built into the framework
                  </span>
                </li>
                <li className="list-disc">
                  <span>
                    <strong>Accessibility compliance</strong> - Components
                    follow WCAG guidelines automatically
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Foundation */}
      <section className="py-20 bg-surface w-full">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 w-full">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Technical Foundation
            </h2>
            <p className="text-neutral text-lg">
              AI-Mapping is built on a robust stack of modern, proven
              technologies.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-4xl mx-auto w-full">
            {/* Next.js */}
            <div className={cn("bg-background rounded-lg p-4 flex flex-col items-center text-center border border-neutral-dark w-full")}>
              <div className="w-16 h-16 mb-4 flex items-center justify-center">
                <svg viewBox="0 0 180 180" fill="none" className="w-12 h-12">
                  <mask
                    id="mask0_408_134"
                    style={{ maskType: 'alpha' }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="180"
                    height="180"
                  >
                    <circle cx="90" cy="90" r="90" fill="black" />
                  </mask>
                  <g mask="url(#mask0_408_134)">
                    <circle cx="90" cy="90" r="90" fill="black" />
                    <path
                      d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
                      fill="url(#paint0_linear_408_134)"
                    />
                    <rect
                      x="115"
                      y="54"
                      width="12"
                      height="72"
                      fill="url(#paint1_linear_408_134)"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_408_134"
                      x1="109"
                      y1="116.5"
                      x2="144.5"
                      y2="160.5"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="white" />
                      <stop offset="1" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_408_134"
                      x1="121"
                      y1="54"
                      x2="120.799"
                      y2="106.875"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="white" />
                      <stop offset="1" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <h3 className="font-semibold mb-1">Next.js</h3>
              <p className="text-neutral text-sm">
                React framework with server-side rendering
              </p>
            </div>

            {/* TypeScript */}
            <div className={cn("bg-background rounded-lg p-4 flex flex-col items-center text-center border border-neutral-dark w-full")}>
              <div className="w-16 h-16 mb-4 flex items-center justify-center">
                <svg viewBox="0 0 400 400" fill="none" className="w-12 h-12">
                  <path fill="#007acc" d="M0 200V0h400v400H0" />
                  <path
                    fill="#fff"
                    d="M87.7 200.7V217h52v148h36.9V217h52v-16c0-9 0-16.3-.4-16.5 0-.3-31.7-.4-70.2-.4l-70 .3v16.4l-.3-.1zM321.4 184c10.2 2.4 18 7 25 14.3 3.7 4 9.2 11 9.6 12.8 0 .6-17.3 12.3-27.8 18.8-.4.3-2-1.4-3.6-4-5.2-7.4-10.5-10.6-18.8-11.2-12-.8-20 5.5-20 16 0 3.2.6 5 1.8 7.6 2.7 5.5 7.7 8.8 23.2 15.6 28.6 12.3 41 20.4 48.5 32 8.5 13 10.4 33.4 4.7 48.7-6.4 16.7-22 28-44.3 31.7-7 1.2-23 1-30.5-.3-16-3-31.3-11-40.7-21.3-3.7-4-10.8-14.7-10.4-15.4l3.8-2.4 15-8.7 11.3-6.6 2.6 3.5c3.3 5.2 10.7 12.2 15 14.6 13 6.7 30.4 5.8 39-2 3.7-3.4 5.3-7 5.3-12 0-4.6-.7-6.7-3-10.2-3.2-4.4-9.6-8-27.6-16-20.7-8.8-29.5-14.4-37.7-23-4.7-5.2-9-13.3-11-20-1.5-5.8-2-20-.6-25.7 4.3-20 19.4-34 41-38 7-1.4 23.5-.8 30.4 1l-.2.2z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold mb-1">TypeScript</h3>
              <p className="text-neutral text-sm">
                Type safety and improved DX
              </p>
            </div>

            {/* Tailwind CSS */}
            <div className={cn("bg-background rounded-lg p-4 flex flex-col items-center text-center border border-neutral-dark w-full")}>
              <div className="w-16 h-16 mb-4 flex items-center justify-center">
                <svg viewBox="0 0 248 31" className="w-12 h-12">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M25.517 0C18.712 0 14.46 3.382 12.758 10.146c2.552-3.382 5.529-4.65 8.931-3.805 1.941.482 3.329 1.882 4.864 3.432 2.502 2.524 5.398 5.445 11.722 5.445 6.324 0 9.22-2.921 11.722-5.445 1.535-1.55 2.923-2.95 4.864-3.432 3.402-.845 6.379.423 8.931 3.805-1.702-6.764-5.954-10.146-12.759-10.146"
                    fill="#38b2ac"
                  />
                </svg>
              </div>
              <h3 className="font-semibold mb-1">Tailwind CSS</h3>
              <p className="text-neutral text-sm">
                Utility-first styling for rapid UI development
              </p>
            </div>

            {/* Jest & RTL */}
            <div className={cn("bg-background rounded-lg p-4 flex flex-col items-center text-center border border-neutral-dark w-full")}>
              <div className="w-16 h-16 mb-4 flex items-center justify-center">
                <svg viewBox="0 0 32 32" className="w-12 h-12">
                  <path
                    d="M27.089 13.784a13.41 13.41 0 0 0-.84-3.924c.536-1.487.641-2.974.308-4.429-.323-1.393-1.095-2.616-2.206-3.398-2.118-1.536-4.736-1.193-7.198.344a14.622 14.622 0 0 0-3.156 0C11.923 0.595 9.305 0.252 7.187 1.788c-1.111.782-1.883 2.005-2.197 3.398-.333 1.455-.228 2.942.308 4.429a13.358 13.358 0 0 0-.84 3.924c-.193 1.683-.125 3.392.194 5.021-.577 1.498-.683 2.975-.333 4.421.323 1.354 1.065 2.56 2.197 3.389.944.689 2.069 1.049 3.307 1.049 1.269 0 2.614-.384 3.933-1.12.262-.132.523-.284.785-.436l.166-.092c.262.153.523.304.785.436.866.502 1.741.836 2.597 1.012a6.526 6.526 0 0 0 1.336.108c.989 0 1.913-.301 2.691-.857 1.132-.83 1.874-2.035 2.197-3.389.35-1.446.244-2.924-.323-4.421.308-1.63.376-3.339.194-5.021v-.054l-.061.054zM13.656 2.874a12.97 12.97 0 0 1 2.282-.203c.775 0 1.55.071 2.291.203 1.992.438 3.654 1.365 4.498 2.494-1.83.456-3.956 1.403-6.141 2.76a.495.495 0 0 1-.193.079.38.38 0 0 1-.176-.079c-2.186-1.357-4.311-2.304-6.141-2.76.844-1.129 2.505-2.056 4.498-2.494h-.918zm-8.364 5.948c.193-.847.551-1.647 1.015-2.352 2.148.689 4.419 1.764 6.733 3.202-1.025 1.021-1.922 2.118-2.641 3.242-1.353.193-2.634.481-3.8.83-.367-1.587-.493-3.225-.385-4.842.008-.017.053-.053.079-.079h-.001zm-.56 9.843c-.42-.918-.603-1.889-.56-2.893 1.358-.473 2.847-.847 4.419-1.138.141 1.365.499 2.723.989 4.038-.49 1.314-.847 2.672-.989 4.037-1.572-.29-3.061-.664-4.419-1.137-.043-1.004.141-1.975.56-2.884v-.024zm4.048 8.017c-1.145-.837-1.778-2.244-1.785-3.827.999.254 2.069.464 3.192.62.499.839 1.068 1.662 1.68 2.417-.734.48-1.487.877-2.23 1.12-.289.088-.579.123-.857.123v-.454zm6.229.641a7.691 7.691 0 0 1-1.024.07c-.393 0-.777-.035-1.171-.088-1.138-.184-2.26-.621-3.323-1.268a18.04 18.04 0 0 0 2.459-2.95 22.722 22.722 0 0 0 4.058 0 18.042 18.042 0 0 0 2.459 2.95c-1.063.647-2.186 1.084-3.323 1.268h-.134v.017zm2.47-4.206c1.354-.202 2.582-.472 3.654-.812.551 1.583-.083 3.347-1.513 4.206-.723.526-1.617.664-2.538.419-.918-.245-1.883-.795-2.81-1.556a16.425 16.425 0 0 0 1.662-2.406c.499.044 1.007.096 1.513.149h.033zm7.26-4.67c.043 1.004-.141 1.975-.56 2.893-1.358.472-2.846.847-4.419 1.137-.141-1.365-.499-2.723-.989-4.037.49-1.315.847-2.673.989-4.038 1.572.29 3.061.665 4.419 1.138.043 1.004-.131 1.975-.56 2.893l.12.015zm-.736-5.948c-.999-.254-2.069-.464-3.192-.62-.499-.839-1.068-1.662-1.68-2.418.734-.481 1.487-.877 2.23-1.12.895-.25 1.731-.123 2.425.376 1.145.838 1.778 2.244 1.785 3.827l-1.567-.044z"
                    fill="#99425B"
                  />
                </svg>
              </div>
              <h3 className="font-semibold mb-1">Jest & Testing Library</h3>
              <p className="text-neutral text-sm">
                Comprehensive testing framework
              </p>
            </div>

            {/* AI Mapping */}
            <div className={cn("bg-background rounded-lg p-4 flex flex-col items-center text-center border border-neutral-dark w-full")}>
              <div className="w-16 h-16 mb-4 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <div className="text-primary font-bold text-lg">AI</div>
                </div>
              </div>
              <h3 className="font-semibold mb-1">AI Component Mapping</h3>
              <p className="text-neutral text-sm">
                Open source intelligent component selection
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="#"
              className={cn("text-primary hover:text-primary-light inline-flex items-center font-medium")}
            >
              Learn more about our architecture{' '}
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Code Example Block */}
      <CodeExample />

      {/* Case Studies Preview */}
      <section className="py-20 bg-surface w-full">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 w-full">
          <div className="max-w-3xl mx-auto text-center mb-16 w-full">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Success Stories
            </h2>
            <p className="text-neutral text-lg">
              See how organizations use AI-Mapping to transform their web
              development workflow.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto w-full">
            {/* Case Study 1 */}
            <div className={cn("bg-background rounded-lg overflow-hidden border border-neutral-dark w-full")}>
              <div className="h-40 bg-gradient-to-r from-primary/30 to-secondary/30 relative w-full">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-2xl font-bold text-white">Tech Co.</div>
                </div>
              </div>
              <div className="p-6 w-full">
                <h3 className="text-xl font-semibold mb-2">
                  Enterprise Technology
                </h3>
                <p className="text-neutral mb-4">
                  Reduced development time from 12 weeks to just 3 weeks while
                  maintaining strict brand consistency.
                </p>
                <div className="flex items-center justify-between text-sm text-primary font-medium mb-4 w-full">
                  <div className="flex items-center">
                    <span className="text-3xl font-bold">75%</span>
                    <span className="ml-2">
                      Faster
                      <br />
                      Development
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-3xl font-bold">47</span>
                    <span className="ml-2">
                      Landing
                      <br />
                      Pages
                    </span>
                  </div>
                </div>
                <Link
                  href="#"
                  className={cn("text-primary hover:text-primary-light inline-flex items-center font-medium")}
                >
                  Read case study <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className={cn("bg-background rounded-lg overflow-hidden border border-neutral-dark w-full")}>
              <div className="h-40 bg-gradient-to-r from-secondary/30 to-accent/30 relative w-full">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-2xl font-bold text-white">Agency X</div>
                </div>
              </div>
              <div className="p-6 w-full">
                <h3 className="text-xl font-semibold mb-2">
                  Digital Marketing Agency
                </h3>
                <p className="text-neutral mb-4">
                  Took on 40% more client work with the same team size after
                  implementing AI-Mapping.
                </p>
                <div className="flex items-center justify-between text-sm text-secondary font-medium mb-4 w-full">
                  <div className="flex items-center">
                    <span className="text-3xl font-bold">40%</span>
                    <span className="ml-2">
                      More
                      <br />
                      Clients
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-3xl font-bold">0%</span>
                    <span className="ml-2">
                      Team Size
                      <br />
                      Increase
                    </span>
                  </div>
                </div>
                <Link
                  href="#"
                  className={cn("text-secondary hover:text-secondary-light inline-flex items-center font-medium")}
                >
                  Read case study <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Case Study 3 */}
            <div className={cn("bg-background rounded-lg overflow-hidden border border-neutral-dark w-full")}>
              <div className="h-40 bg-gradient-to-r from-accent/30 to-primary/30 relative w-full">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-2xl font-bold text-white">Shop Now</div>
                </div>
              </div>
              <div className="p-6 w-full">
                <h3 className="text-xl font-semibold mb-2">E-commerce Brand</h3>
                <p className="text-neutral mb-4">
                  Tested 12 different product page variations in a single
                  sprint, leading to a 23% conversion increase.
                </p>
                <div className="flex items-center justify-between text-sm text-accent font-medium mb-4 w-full">
                  <div className="flex items-center">
                    <span className="text-3xl font-bold">12</span>
                    <span className="ml-2">
                      Page
                      <br />
                      Variations
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-3xl font-bold">23%</span>
                    <span className="ml-2">
                      Conversion
                      <br />
                      Increase
                    </span>
                  </div>
                </div>
                <Link
                  href="#"
                  className={cn("text-accent hover:text-accent inline-flex items-center font-medium")}
                >
                  Read case study <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started CTA */}
      <section className="py-20 bg-gradient-to-r from-background via-surface to-background w-full">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 w-full">
          <div className="max-w-4xl mx-auto w-full">
            <div className={cn("bg-surface rounded-lg p-8 md:p-12 border border-primary shadow-[0_0_30px_rgba(0,191,255,0.2)] w-full")}>
              <div className="grid md:grid-cols-2 gap-8 items-center w-full">
                <div className="w-full">
                  <h2 className="text-3xl font-bold mb-4">
                    Ready to Get Started?
                  </h2>
                  <p className="text-neutral mb-6">
                    Start building content-first websites in minutes with our
                    simple setup process.
                  </p>
                  <div className="space-y-4 w-full">
                    <button className={cn("w-full bg-primary text-black font-bold px-6 py-3 rounded-lg hover:bg-primary-light transition-all duration-300 flex items-center justify-center")}>
                      Start your first project{' '}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </button>
                    <button className={cn("w-full bg-transparent border border-primary text-primary font-bold px-6 py-3 rounded-lg hover:bg-primary/10 transition-all duration-300")}>
                      View documentation
                    </button>
                  </div>
                </div>
                <div className={cn("bg-background rounded-md p-4 border border-neutral-dark w-full")}>
                  <div className="flex items-center mb-4">
                    <div className="w-3 h-3 rounded-full bg-error mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-warning mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-success mr-2"></div>
                    <div className="text-neutral text-sm font-mono ml-2">
                      terminal
                    </div>
                  </div>
                  <div className="font-mono text-sm text-neutral w-full">
                    <p className="mb-2 text-white">
                      ${' '}
                      <span className="text-accent">
                        npx create-ai-mapping-app my-project
                      </span>
                    </p>
                    <p className="mb-2">Creating a new AI-Mapping project...</p>
                    <p className="mb-2">Installing dependencies...</p>
                    <p className="mb-2 text-success">
                      ✓ Dependencies installed
                    </p>
                    <p className="mb-2 text-success">
                      ✓ Project structure created
                    </p>
                    <p className="mb-2 text-success">
                      ✓ AI-Mapping initialized
                    </p>
                    <p className="mb-2 text-white">
                      $ <span className="text-accent">cd my-project</span>
                    </p>
                    <p className="mb-2 text-white">
                      $ <span className="text-accent">npm run dev</span>
                    </p>
                    <p className="text-primary">
                      Ready at http://localhost:3000
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 w-full">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 w-full">
          <div className="max-w-3xl mx-auto text-center mb-16 w-full">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join Our Community
            </h2>
            <p className="text-neutral text-lg">
              AI-Mapping is an open-source project built by developers for
              developers. Get involved and help shape the future.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto w-full">
            <div className={cn("bg-surface rounded-lg p-6 border border-neutral-dark hover:border-primary transition-all duration-300 w-full")}>
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="h-6 w-6 text-primary"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">GitHub</h3>
              <p className="text-neutral mb-4">
                Star the repo, report issues, and contribute to the codebase. We
                welcome pull requests!
              </p>
              <div className="flex items-center justify-between mb-4 w-full">
                <div className="flex items-center">
                  <svg
                    className="h-5 w-5 text-accent mr-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
                  </svg>
                  <span className="text-white">2.4k stars</span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="h-5 w-5 text-secondary mr-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span className="text-white">143 contributors</span>
                </div>
              </div>
              <Link
                href="#"
                className={cn("text-primary hover:text-primary-light inline-flex items-center font-medium")}
              >
                View on GitHub <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className={cn("bg-surface rounded-lg p-6 border border-neutral-dark hover:border-secondary transition-all duration-300 w-full")}>
              <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="h-6 w-6 text-secondary"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Discord Community</h3>
              <p className="text-neutral mb-4">
                Join our Discord server to connect with other developers, get
                help, and share your projects.
              </p>
              <div className="flex items-center justify-between mb-4 w-full">
                <div className="flex items-center">
                  <svg
                    className="h-5 w-5 text-secondary mr-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z" />
                  </svg>
                  <span className="text-white">1,200+ members</span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="h-5 w-5 text-secondary mr-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                  </svg>
                  <span className="text-white">24/7 support</span>
                </div>
              </div>
              <Link
                href="#"
                className={cn("text-secondary hover:text-secondary-light inline-flex items-center font-medium")}
              >
                Join Discord <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className={cn("bg-surface rounded-lg p-6 border border-neutral-dark hover:border-accent transition-all duration-300 w-full")}>
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="h-6 w-6 text-accent"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Twitter/X</h3>
              <p className="text-neutral mb-4">
                Follow us for the latest updates, tips, and announcements about
                AI-Mapping framework.
              </p>
              <div className="flex items-center justify-between mb-4 w-full">
                <div className="flex items-center">
                  <svg
                    className="h-5 w-5 text-accent mr-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                  </svg>
                  <span className="text-white">3.5k followers</span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="h-5 w-5 text-accent mr-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13 2.05v3.03c3.39.49 6 3.39 6 6.92 0 .9-.18 1.75-.5 2.54l2.6 1.53c.56-1.24.9-2.62.9-4.07 0-5.18-3.95-9.45-9-9.95zM12 19c-3.87 0-7-3.13-7-7 0-3.53 2.61-6.43 6-6.92V2.05c-5.06.5-9 4.76-9 9.95 0 5.52 4.47 10 9.99 10 3.31 0 6.24-1.61 8.06-4.09l-2.6-1.53C16.17 17.9 14.21 19 12 19z" />
                  </svg>
                  <span className="text-white">Weekly updates</span>
                </div>
              </div>
              <Link
                href="#"
                className={cn("text-accent hover:text-accent inline-flex items-center font-medium")}
              >
                Follow us <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="mt-16 max-w-3xl mx-auto text-center w-full">
            <h3 className="text-xl font-semibold mb-4">Stay Updated</h3>
            <p className="text-neutral mb-6">
              Subscribe to our newsletter for the latest updates, tutorials, and
              early access to new features.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 w-full">
              <input
                type="email"
                placeholder="Enter your email"
                className={cn("w-full sm:flex-1 bg-neutral-light border border-neutral-dark text-white rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary")}
              />
              <button className={cn("bg-primary text-black font-bold px-6 py-2 rounded hover:bg-primary-light transition-all duration-300")}>
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ 
        heading="Frequently Asked Questions"
        askButtonText="View all FAQs"
        faqItems={[
          {
            question: "What makes AI-Mapping different from other frameworks?",
            answer: "Unlike traditional frameworks that force content into rigid templates, AI-Mapping prioritizes content first and adapts the UI to best present your specific content. It leverages AI to intelligently map content to appropriate components while maintaining design system consistency."
          },
          {
            question: "Do I need to know AI to use this framework?",
            answer: "No, you don't need any AI expertise. The AI mapping happens behind the scenes. You work with familiar technologies like React, Next.js, and Tailwind CSS. The framework handles the intelligent component selection and adaptation based on your content."
          },
          {
            question: "Can I use my existing design system with AI-Mapping?",
            answer: "Yes, AI-Mapping is designed to work with your existing design system. You can configure the framework to follow your established design guidelines, ensuring all generated components maintain visual coherence with your brand."
          },
          {
            question: "Is AI-Mapping suitable for e-commerce sites?",
            answer: "Absolutely. AI-Mapping works particularly well for e-commerce product pages, category listings, and promotional landing pages. The framework can adapt to dynamic product data and help create consistent shopping experiences across your entire catalog."
          },
          {
            question: "How does licensing work for AI-Mapping?",
            answer: "AI-Mapping is an open-source framework licensed under the MIT license. You can use it freely for both personal and commercial projects. We welcome contributions from the community to enhance the framework further."
          }
        ]}
      />
    </div>
  );
};

export default HomepageClaude;