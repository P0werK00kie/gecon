import React, { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, Tag, ArrowLeft, Share2 } from 'lucide-react';
import { MDXProvider } from '@mdx-js/react';
import SEO from '../components/SEO';
import { getArticleBySlug, formatDate, getAllArticles } from '../utils/articles';
import { Article } from '../types/articles';

const ArticleDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [article, setArticle] = useState<Article | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadArticle = async () => {
      if (!slug) {
        setError('Article not found');
        setIsLoading(false);
        return;
      }

      try {
        const articleData = await getArticleBySlug(slug);
        if (articleData) {
          setArticle(articleData);
        } else {
          setError('Article not found');
        }
      } catch (err) {
        console.error('Error loading article:', err);
        setError('Failed to load article');
      } finally {
        setIsLoading(false);
      }
    };

    loadArticle();
  }, [slug]);

  const handleShare = async () => {
    if (navigator.share && article) {
      try {
        await navigator.share({
          title: article.frontmatter.title,
          text: article.frontmatter.summary,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback to copying URL to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Article URL copied to clipboard!');
    }
  };

  // MDX components for styling - hide the first h1 since we show title in hero
  const mdxComponents = {
    h1: (props: any) => {
      // Hide the first h1 (article title) since we display it in the hero
      const isFirstH1 = props.children === article?.frontmatter.title;
      if (isFirstH1) {
        return null;
      }
      return <h1 className="text-3xl md:text-4xl font-bold text-[#0A122A] mb-8 mt-12 leading-tight" {...props} />;
    },
    h2: (props: any) => <h2 className="text-2xl md:text-3xl font-bold text-[#0A122A] mb-6 mt-10 leading-tight" {...props} />,
    h3: (props: any) => <h3 className="text-xl md:text-2xl font-bold text-[#0A122A] mb-4 mt-8" {...props} />,
    h4: (props: any) => <h4 className="text-lg md:text-xl font-bold text-[#0A122A] mb-4 mt-6" {...props} />,
    p: (props: any) => <p className="text-[#454d53] text-lg leading-relaxed mb-6" {...props} />,
    ul: (props: any) => <ul className="list-disc list-inside text-[#454d53] text-lg leading-relaxed mb-6 ml-4 space-y-2" {...props} />,
    ol: (props: any) => <ol className="list-decimal list-inside text-[#454d53] text-lg leading-relaxed mb-6 ml-4 space-y-2" {...props} />,
    li: (props: any) => <li className="mb-2" {...props} />,
    strong: (props: any) => <strong className="font-bold text-[#0A122A]" {...props} />,
    em: (props: any) => <em className="italic text-[#075f2c]" {...props} />,
    blockquote: (props: any) => (
      <blockquote className="border-l-4 border-[#075f2c] pl-6 py-4 my-8 bg-gray-50 italic text-[#454d53] text-lg rounded-r-lg" {...props} />
    ),
    code: (props: any) => (
      <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-[#075f2c]" {...props} />
    ),
    pre: (props: any) => (
      <pre className="bg-gray-900 text-white p-6 rounded-lg overflow-x-auto mb-6" {...props} />
    ),
    a: (props: any) => (
      <a className="text-[#075f2c] hover:text-[#064723] underline transition-colors" {...props} />
    ),
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-[#454d53] text-lg">Loading article...</div>
      </div>
    );
  }

  if (error || !article) {
    return <Navigate to="/articles" replace />;
  }

  const relatedArticles = getAllArticles()
    .filter(a => a.frontmatter.tag === article.frontmatter.tag && a.slug !== article.slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen">
      <SEO 
        title={article.frontmatter.title}
        description={article.frontmatter.summary}
        canonicalUrl={`https://gecon.com/articles/${article.slug}`}
      />
      
      {/* Hero Section with Static Background */}
      <section 
        className="relative h-[600px] bg-cover bg-center" 
        style={{ backgroundImage: "url('https://wbuiebxqdjuxhvdtiata.supabase.co/storage/v1/object/sign/files/GECON/Gecon%20Main%20Website/Home%20Page/gecon_header_image.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jMjU3NzlmNC01ZjdjLTRjZWEtYmM2MS1mYjMwZjllNzkxM2EiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJmaWxlcy9HRUNPTi9HZWNvbiBNYWluIFdlYnNpdGUvSG9tZSBQYWdlL2dlY29uX2hlYWRlcl9pbWFnZS53ZWJwIiwiaWF0IjoxNzQ4NjIxMTg2LCJleHAiOjIzNzkzNDExODZ9.DqI0sujIoGCL9W6LyoK4RESU9DvFBzyB4hCSQDkCq9A')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <motion.div
            className="max-w-5xl w-full"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Back Button */}
            <div className="mb-8">
              <a 
                href="/articles"
                className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors text-lg font-medium"
              >
                <ArrowLeft size={20} />
                Back to Articles
              </a>
            </div>

            {/* Article Title */}
            <h2 className="text-white mb-8 leading-tight text-4xl md:text-5xl lg:text-6xl font-bold">
              {article.frontmatter.title}
            </h2>

            {/* Article Meta */}
            <div className="flex flex-wrap items-center gap-6 text-white/80 mb-8">
              <div className="flex items-center gap-2 bg-black/20 px-3 py-2 rounded-full">
                <Calendar size={18} />
                <span className="font-medium">{formatDate(article.frontmatter.publishedAt)}</span>
              </div>
              <div className="flex items-center gap-2 bg-black/20 px-3 py-2 rounded-full">
                <User size={18} />
                <span className="font-medium">{article.frontmatter.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Tag size={18} />
                <span className="px-4 py-2 bg-[#075f2c] text-white rounded-full font-medium">
                  {article.frontmatter.tag}
                </span>
              </div>
              <button
                onClick={handleShare}
                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors bg-black/20 px-3 py-2 rounded-full"
              >
                <Share2 size={18} />
                <span className="font-medium">Share</span>
              </button>
            </div>

            {/* Article Summary */}
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-4xl font-light">
              {article.frontmatter.summary}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20 px-4 md:px-16 bg-white">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            <MDXProvider components={mdxComponents}>
              <article.Component />
            </MDXProvider>
          </motion.div>

          {/* Author Bio Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 pt-8 border-t border-gray-200"
          >
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-[#075f2c] rounded-full flex items-center justify-center">
                  <User size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0A122A] mb-1">
                    {article.frontmatter.author}
                  </h3>
                  <p className="text-[#454d53]">Construction Industry Expert</p>
                </div>
              </div>
              <p className="text-[#454d53] leading-relaxed">
                With decades of experience in construction and disaster recovery, our team members bring 
                expert knowledge and practical insights to help you understand complex industry topics.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-20 px-4 md:px-16 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A122A] mb-12 text-center">
                Related Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedArticles.map((relatedArticle, index) => (
                  <motion.div
                    key={relatedArticle.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-sm text-[#454d53] mb-3">
                        <Calendar size={14} />
                        <span>{formatDate(relatedArticle.frontmatter.publishedAt)}</span>
                      </div>
                      <h3 className="text-lg font-bold text-[#0A122A] mb-3 hover:text-[#075f2c] transition-colors line-clamp-2">
                        <a href={`/articles/${relatedArticle.slug}`}>
                          {relatedArticle.frontmatter.title}
                        </a>
                      </h3>
                      <p className="text-[#454d53] mb-4 line-clamp-3 leading-relaxed">
                        {relatedArticle.frontmatter.summary}
                      </p>
                      <a 
                        href={`/articles/${relatedArticle.slug}`}
                        className="inline-flex items-center text-[#075f2c] font-semibold hover:text-[#064723] transition-colors"
                      >
                        Read More 
                        <ArrowLeft size={16} className="ml-1 rotate-180" />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-16 bg-[#075f2c] text-white">
        <div className="container mx-auto text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-white mb-6 text-3xl md:text-4xl font-bold">
              Need Expert Construction Services?
            </h2>
            <p className="text-xl md:text-2xl mb-10 text-white/90 leading-relaxed">
              Contact our experienced team for professional construction, disaster recovery, and environmental services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn btn-secondary text-lg px-8 py-4">
                Get a Consultation
              </a>
              <a href="tel:+1678-269-1114" className="btn btn-dark text-lg px-8 py-4">
                Call (678) 269-1114
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ArticleDetail;