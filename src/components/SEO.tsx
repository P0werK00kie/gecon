import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogImage?: string;
  noindex?: boolean;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonicalUrl = 'https://gecon.com',
  ogImage = 'https://wbuiebxqdjuxhvdtiata.supabase.co/storage/v1/object/sign/files/GECON/Gecon%20Main%20Website/Logos/GeconlogoWorld-white.png',
  noindex = false,
}) => {
  const fullTitle = `${title} | Gecon Construction`;
  
  return (
    <Helmet>
      {/* Basic metadata */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Bing verification */}
      <meta name="msvalidate.01" content="D3C5993A741EFAC120E16C794DCF4511" />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Robots */}
      {noindex ? (
        <meta name="robots\" content="noindex, nofollow" />
      ) : (
        <meta name="robots\" content="index, follow" />
      )}
      
      {/* JSON-LD structured data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Gecon Construction",
          "url": "https://gecon.com",
          "logo": "https://wbuiebxqdjuxhvdtiata.supabase.co/storage/v1/object/sign/files/GECON/Gecon%20Main%20Website/Logos/Geconlogo2.png",
          "description": "Georgia Environmental Construction has dedicated thirty years to natural disaster recovery and response.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "1557 South Broad St.",
            "addressLocality": "Monroe",
            "addressRegion": "GA",
            "postalCode": "30655",
            "addressCountry": "US"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-678-269-1114",
            "contactType": "customer service"
          },
          "sameAs": [
            "https://www.facebook.com/geconcorp"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEO;