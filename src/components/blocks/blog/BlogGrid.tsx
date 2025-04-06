import React from 'react';
import BlogCard from './BlogCard';
import { BlogPost } from '@/types/blog';
import Section from '@/components/layout/Section';

type BlogGridProps = {
  heading: string;
  subheading: string;
  posts: BlogPost[];
};

const BlogGrid = ({
  heading,
  subheading,
  posts
}: BlogGridProps) => {
  return (
    <Section background="background" paddingY="lg" containerWidth="container">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-3 text-white">
        {heading}
      </h1>
      <p className="text-neutral text-center mb-4 max-w-2xl mx-auto">
        {subheading}
      </p>
      <div className="text-center mb-12">
        <span className="text-primary text-sm bg-surface px-4 py-2 rounded-lg inline-block">
          Only the &quot;AI Mapping: From Content to Components&quot; article is currently available
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </Section>
  );
};

export default BlogGrid;