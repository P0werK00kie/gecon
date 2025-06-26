import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import ArticleCard from '../components/ArticleCard';
import { getAllArticles, getAllTags } from '../utils/articles';
import { Search, Filter } from 'lucide-react';

const Articles = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const allArticles = getAllArticles();
  const allTags = getAllTags();

  const filteredArticles = useMemo(() => {
    return allArticles.filter(article => {
      const matchesSearch = searchTerm === '' || 
        article.frontmatter.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.frontmatter.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.frontmatter.author.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesTag = selectedTag === '' || article.frontmatter.tag === selectedTag;
      
      return matchesSearch && matchesTag;
    });
  }, [allArticles, searchTerm, selectedTag]);

  const handleTagFilter = (tag: string) => {
    setSelectedTag(tag === selectedTag ? '' : tag);
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="ARTICLES"
        description="Expert insights on construction, disaster recovery, roofing, and environmental services from the Georgia Environmental Construction team."
        canonicalUrl="https://gecon.com/articles"
      />
      
      {/* Hero Section */}
      <section 
        className="relative h-[500px] bg-cover bg-center" 
        style={{ backgroundColor: "#075f2c" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div>
            <h1 className="text-white mb-4">
              ARTICLES & INSIGHTS
            </h1>
            <p className="text-white text-xl max-w-2xl">
              Expert knowledge and industry insights from our team of construction and disaster recovery professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 px-4 md:px-16 bg-gray-50 border-b">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#454d53]" size={20} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#075f2c] focus:ring-1 focus:ring-[#075f2c]"
              />
            </div>

            {/* Tag Filter */}
            <div className="flex items-center gap-2">
              <Filter size={20} className="text-[#454d53]" />
              <span className="text-[#454d53] font-medium">Filter by topic:</span>
            </div>
          </div>

          {/* Tag Buttons */}
          <div className="flex flex-wrap gap-3 mt-4">
            <button
              onClick={() => setSelectedTag('')}
              className={`px-4 py-2 rounded-full font-medium transition-colors ${
                selectedTag === '' 
                  ? 'bg-[#075f2c] text-white' 
                  : 'bg-white text-[#454d53] hover:bg-gray-100'
              }`}
            >
              All Articles
            </button>
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => handleTagFilter(tag)}
                className={`px-4 py-2 rounded-full font-medium transition-colors ${
                  selectedTag === tag 
                    ? 'bg-[#075f2c] text-white' 
                    : 'bg-white text-[#454d53] hover:bg-gray-100'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 px-4 md:px-16">
        <div className="container mx-auto">
          {isLoading ? (
            <div className="flex justify-center items-center py-16">
              <div className="text-[#454d53] text-lg">Loading articles...</div>
            </div>
          ) : filteredArticles.length === 0 ? (
            <div className="text-center py-16">
              <h3 className="text-[#0A122A] mb-4">No articles found</h3>
              <p className="text-[#454d53] text-lg">
                {searchTerm || selectedTag 
                  ? 'Try adjusting your search or filter criteria.' 
                  : 'Check back soon for new articles and insights.'}
              </p>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <p className="text-[#454d53] text-lg">
                  Showing {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''}
                  {selectedTag && ` in "${selectedTag}"`}
                  {searchTerm && ` matching "${searchTerm}"`}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredArticles.map((article, index) => (
                  <motion.div
                    key={article.slug}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <ArticleCard article={article.frontmatter} />
                  </motion.div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 px-4 md:px-16 bg-[#075f2c] text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest articles and industry insights directly in your inbox.
          </p>
          <a 
            href="#newsletter" 
            className="btn btn-secondary"
          >
            Subscribe Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default Articles;