import BlogPage from '@/components/pages/BlogPage';
import { Metadata } from 'next';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: `Blog | ${siteConfig.companyName}`,
  description: 'Explore insights, tutorials, and case studies on using AI to accelerate web development.',
  openGraph: {
    title: `Blog | ${siteConfig.companyName}`,
    description: 'Explore insights, tutorials, and case studies on using AI to accelerate web development.',
    type: 'website',
  },
};

export default function Blog() {
  return <BlogPage />;
}