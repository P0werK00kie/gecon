export interface ArticleFrontmatter {
  title: string;
  summary: string;
  author: string;
  publishedAt: string; // YYYY-MM-DD format
  tag: string;
  slug?: string;
}

export interface Article {
  frontmatter: ArticleFrontmatter;
  Component: React.ComponentType;
  slug: string;
}

export interface ArticleModule {
  frontmatter: ArticleFrontmatter;
  default: React.ComponentType;
}