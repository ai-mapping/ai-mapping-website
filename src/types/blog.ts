export type Author = {
  id: string;
  name: string;
  avatar?: string;
  title?: string;
};

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content?: string;
  publishedAt: string;
  author: Author;
  coverImage: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  tags?: string[];
  readingTime?: string;
};