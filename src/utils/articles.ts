import { Article, ArticleModule, ArticleFrontmatter } from '../types/articles';

// Get all MDX files from the articles directory
const articleModules = import.meta.glob('../articles/*.mdx', { eager: true }) as Record<string, ArticleModule>;

export const getAllArticles = (): Article[] => {
  const articles: Article[] = [];

  for (const path in articleModules) {
    const module = articleModules[path];
    const slug = path.replace('../articles/', '').replace('.mdx', '');
    
    articles.push({
      frontmatter: {
        ...module.frontmatter,
        slug
      },
      Component: module.default,
      slug
    });
  }

  // Sort by publishedAt date (newest first)
  return articles.sort((a, b) => 
    new Date(b.frontmatter.publishedAt).getTime() - new Date(a.frontmatter.publishedAt).getTime()
  );
};

export const getArticleBySlug = async (slug: string): Promise<Article | null> => {
  try {
    const module = await import(`../articles/${slug}.mdx`) as ArticleModule;
    return {
      frontmatter: {
        ...module.frontmatter,
        slug
      },
      Component: module.default,
      slug
    };
  } catch (error) {
    console.error(`Article not found: ${slug}`, error);
    return null;
  }
};

export const getArticlesByTag = (tag: string): Article[] => {
  const allArticles = getAllArticles();
  return allArticles.filter(article => 
    article.frontmatter.tag.toLowerCase() === tag.toLowerCase()
  );
};

export const getAllTags = (): string[] => {
  const allArticles = getAllArticles();
  const tags = allArticles.map(article => article.frontmatter.tag);
  return [...new Set(tags)].sort();
};

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};