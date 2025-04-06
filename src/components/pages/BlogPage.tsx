import React from 'react';
import BlogGrid from '@/components/blocks/blog/BlogGrid';
import HeroWithButton from '@/components/layout/HeroWithButton';
import { blogPosts } from '@/content/blog/posts';

const BlogPage = () => {
  return (
    <>
      <HeroWithButton
        title="AI Mapping Blog"
        subtitle="Insights, tutorials, and case studies on using AI to accelerate web development"
        ctaText="Subscribe to Updates"
        ctaHref="#subscribe"
        bgImage="/images/placeholders/code-bg.jpg"
      />
      <BlogGrid
        heading="Latest Articles"
        subheading="Explore our latest thoughts on AI-powered development, best practices, and success stories"
        posts={blogPosts}
      />
    </>
  );
};

export default BlogPage;