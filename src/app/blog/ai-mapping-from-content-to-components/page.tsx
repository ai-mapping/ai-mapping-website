import React from 'react';
import { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import ArticlePage from '@/components/blog/ArticlePage';
import { blogPosts } from '@/content/blog/posts';

export const metadata: Metadata = {
  title: `AI Mapping: From Content to Components | ${siteConfig.companyName}`,
  description: 'Discover a paradigm shift in web development that prioritizes content creation without technical constraints, enabling faster and more flexible website building.',
  openGraph: {
    title: `AI Mapping: From Content to Components | ${siteConfig.companyName}`,
    description: 'Discover a paradigm shift in web development that prioritizes content creation without technical constraints, enabling faster and more flexible website building.',
    type: 'article',
    publishedTime: '2025-04-19',
    authors: ['Alex Chen'],
    tags: ['AI Mapping', 'Content-First', 'Web Development'],
  },
};

export default function Page() {
  // Find the article in our posts
  const slug = 'ai-mapping-from-content-to-components';
  const articleData = blogPosts.find(post => post.slug === slug);

  return <ArticlePage slug={slug} meta={articleData} />;
}