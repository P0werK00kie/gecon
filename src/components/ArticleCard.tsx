import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, Tag } from 'lucide-react';
import { ArticleFrontmatter } from '../types/articles';
import { formatDate } from '../utils/articles';

interface ArticleCardProps {
  article: ArticleFrontmatter;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <motion.article 
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="p-8">
        <div className="flex items-center gap-4 text-sm text-[#454d53] mb-4">
          <div className="flex items-center gap-1">
            <Calendar size={16} />
            <span>{formatDate(article.publishedAt)}</span>
          </div>
          <div className="flex items-center gap-1">
            <User size={16} />
            <span>{article.author}</span>
          </div>
        </div>
        
        <h3 className="text-[#0A122A] mb-4 hover:text-[#075f2c] transition-colors">
          <a href={`/articles/${article.slug}`}>
            {article.title}
          </a>
        </h3>
        
        <p className="text-[#454d53] text-lg leading-relaxed mb-6">
          {article.summary}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-sm">
            <Tag size={16} className="text-[#075f2c]" />
            <span className="px-3 py-1 bg-[#075f2c]/10 text-[#075f2c] rounded-full font-medium">
              {article.tag}
            </span>
          </div>
          
          <a 
            href={`/articles/${article.slug}`}
            className="text-[#075f2c] font-semibold hover:text-[#064723] transition-colors"
          >
            Read More →
          </a>
        </div>
      </div>
    </motion.article>
  );
};

export default ArticleCard;