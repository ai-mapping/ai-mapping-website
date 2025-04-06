'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { BlogPost } from '@/types/blog';
import { formatDate } from '@/lib/utils';

type BlogCardProps = {
  post: BlogPost;
};

const BlogCard = ({ post }: BlogCardProps) => {
  const [imageError, setImageError] = useState(false);

  // Handle image error
  const handleImageError = () => {
    console.log(`Image failed to load for blog post: ${post.slug}`);
    setImageError(true);
  };
  
  // Force error state for placeholder images that are too small
  React.useEffect(() => {
    // Check if the image is just a placeholder
    if (post.coverImage.src.includes('placeholders/')) {
      setImageError(true);
    }
  }, [post.coverImage.src]);

  return (
    <article className="bg-surface rounded-lg shadow-lg overflow-hidden border border-neutral-dark hover:shadow-[0_0_20px_rgba(0,191,255,0.2)] transition-all duration-300 h-full flex flex-col">
      <div className="block h-48 bg-neutral-dark relative">
        {!imageError ? (
          <Image
            src={post.coverImage.src}
            alt={post.coverImage.alt}
            width={post.coverImage.width}
            height={post.coverImage.height}
            className="w-full h-full object-cover"
            onError={handleImageError}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-neutral-light text-neutral p-4 text-center">
            <div className="text-primary text-3xl mb-2">
              {post.title.substring(0, 2).toUpperCase()}
            </div>
            <div className="text-xs text-neutral-light">
              {post.coverImage.alt || 'Blog post image'}
            </div>
          </div>
        )}
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <div className="mb-2 flex items-center">
          <time 
            dateTime={post.publishedAt} 
            className="text-xs font-medium bg-primary/20 text-primary px-2 py-1 rounded"
          >
            {formatDate(post.publishedAt)}
          </time>
          {post.readingTime && (
            <span className="text-xs text-neutral ml-2">{post.readingTime} read</span>
          )}
        </div>
        
        <div className="block group cursor-pointer">
          <h3 className="font-semibold text-xl mb-3 text-white group-hover:text-primary transition-colors duration-200">
            {post.title}
          </h3>
        </div>
        
        <p className="text-neutral text-sm mb-4 flex-grow">
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center">
            <span className="text-sm text-neutral-light">By {post.author.name}</span>
          </div>
          
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {post.tags.slice(0, 1).map((tag) => (
                <span 
                  key={tag} 
                  className="text-xs bg-secondary/20 text-secondary-light px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
              {post.tags.length > 1 && (
                <span className="text-xs text-neutral">+{post.tags.length - 1}</span>
              )}
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default BlogCard;