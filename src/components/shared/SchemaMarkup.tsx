
import { useLocation } from 'react-router-dom';

interface ArticleSchemaProps {
  title: string;
  description: string;
  author?: string;
  publishedDate?: string;
  modifiedDate?: string;
  category?: string;
}

interface SchemaMarkupProps {
  type: 'article' | 'website' | 'organization';
  data?: ArticleSchemaProps;
}

const SchemaMarkup = ({ type, data }: SchemaMarkupProps) => {
  const location = useLocation();
  const currentUrl = `https://moneyovernoise.com${location.pathname}`;

  const generateSchema = () => {
    const baseSchema = {
      "@context": "https://schema.org",
    };

    switch (type) {
      case 'article':
        if (!data) return null;
        return {
          ...baseSchema,
          "@type": "Article",
          "headline": data.title,
          "description": data.description,
          "author": {
            "@type": "Organization",
            "name": data.author || "Money Over Noise"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Money Over Noise",
            "logo": {
              "@type": "ImageObject",
              "url": "https://moneyovernoise.com/logo.png"
            }
          },
          "datePublished": data.publishedDate || new Date().toISOString(),
          "dateModified": data.modifiedDate || new Date().toISOString(),
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": currentUrl
          },
          "articleSection": data.category || "Finance",
          "keywords": ["ETFs", "investing", "finance", "India", "money"],
          "inLanguage": "en-IN"
        };

      case 'website':
        return {
          ...baseSchema,
          "@type": "WebSite",
          "name": "Money Over Noise",
          "description": "Simplifying money for Indian investors through clear, honest content on investing, saving, debt, and psychology of money.",
          "url": "https://moneyovernoise.com",
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://moneyovernoise.com/search?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        };

      case 'organization':
        return {
          ...baseSchema,
          "@type": "Organization",
          "name": "Money Over Noise",
          "description": "Money Over Noise helps Indian investors cut through the noise with clear, honest, and practical money insights.",
          "url": "https://moneyovernoise.com",
          "logo": "https://moneyovernoise.com/logo.png",
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "availableLanguage": ["English", "Hindi"]
          },
          "sameAs": [
            "https://twitter.com/moneyovernoise",
            "https://linkedin.com/company/moneyovernoise"
          ]
        };

      default:
        return null;
    }
  };

  const schema = generateSchema();
  
  if (!schema) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default SchemaMarkup;
