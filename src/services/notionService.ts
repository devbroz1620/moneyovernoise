
import { Client } from "@notionhq/client";
import { marked } from "marked";
import { NotionArticle, NotionDatabaseResponse } from "@/types/notion";

// This should be stored as an environment variable in a production environment
const NOTION_API_KEY = "your-notion-api-key"; // Replace with your actual API key
const NOTION_DATABASE_ID = "your-database-id"; // Replace with your database ID

// Initialize the Notion client
const notion = new Client({
  auth: NOTION_API_KEY,
});

// Cache for articles to minimize API calls
let articlesCache: NotionArticle[] | null = null;
let lastFetchTime: number = 0;
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

// Convert Notion rich text to HTML using marked
const convertRichTextToHtml = (richText: any[]): string => {
  // This is a simplified version, you might need to handle more Notion block types
  const markdown = richText.map(text => text.plain_text).join('');
  return marked.parse(markdown);
};

const extractTags = (multiSelect: any[]): string[] => {
  return multiSelect.map(option => option.name);
};

// Transform Notion page data into our application's article format
const transformNotionPage = async (page: any): Promise<NotionArticle> => {
  const properties = page.properties;
  
  // Get the content blocks
  const blocks = await notion.blocks.children.list({
    block_id: page.id,
  });
  
  // Convert blocks to HTML (simplified version)
  let contentHtml = '';
  for (const block of blocks.results) {
    if (block.type === 'paragraph' && block.paragraph?.rich_text) {
      contentHtml += `<p>${block.paragraph.rich_text.map((text: any) => text.plain_text).join('')}</p>`;
    } else if (block.type === 'heading_1' && block.heading_1?.rich_text) {
      contentHtml += `<h1>${block.heading_1.rich_text.map((text: any) => text.plain_text).join('')}</h1>`;
    } else if (block.type === 'heading_2' && block.heading_2?.rich_text) {
      contentHtml += `<h2>${block.heading_2.rich_text.map((text: any) => text.plain_text).join('')}</h2>`;
    } else if (block.type === 'heading_3' && block.heading_3?.rich_text) {
      contentHtml += `<h3>${block.heading_3.rich_text.map((text: any) => text.plain_text).join('')}</h3>`;
    } else if (block.type === 'bulleted_list_item' && block.bulleted_list_item?.rich_text) {
      contentHtml += `<li>${block.bulleted_list_item.rich_text.map((text: any) => text.plain_text).join('')}</li>`;
    }
    // Add more block types as needed
  }
  
  // Get related articles and next article
  const relatedArticles: string[] = [];
  let nextArticle = null;
  
  if (properties.RelatedArticles?.relation) {
    for (const related of properties.RelatedArticles.relation) {
      const relatedPage = await notion.pages.retrieve({ page_id: related.id });
      relatedArticles.push(relatedPage.properties.Slug.rich_text[0].plain_text);
    }
  }
  
  if (properties.NextArticle?.relation && properties.NextArticle.relation.length > 0) {
    const nextPage = await notion.pages.retrieve({ page_id: properties.NextArticle.relation[0].id });
    nextArticle = {
      title: nextPage.properties.Title.title[0].plain_text,
      slug: nextPage.properties.Slug.rich_text[0].plain_text,
    };
  }
  
  return {
    id: page.id,
    title: properties.Title.title[0].plain_text,
    slug: properties.Slug.rich_text[0].plain_text,
    description: properties.Description.rich_text[0].plain_text,
    readingTime: properties.ReadingTime.rich_text[0].plain_text,
    category: properties.Category.select.name,
    tags: extractTags(properties.Tags.multi_select),
    image: properties.Image.url,
    content: contentHtml,
    relatedArticles,
    nextArticle,
  };
};

// Get all articles from Notion
export const getArticles = async (): Promise<NotionArticle[]> => {
  const currentTime = Date.now();
  
  // Return cached data if it's still valid
  if (articlesCache && (currentTime - lastFetchTime < CACHE_TTL)) {
    return articlesCache;
  }
  
  try {
    const response = await notion.databases.query({
      database_id: NOTION_DATABASE_ID,
      sorts: [
        {
          property: 'Title',
          direction: 'ascending',
        },
      ],
    }) as NotionDatabaseResponse;
    
    const articles: NotionArticle[] = [];
    for (const page of response.results) {
      const article = await transformNotionPage(page);
      articles.push(article);
    }
    
    // Update cache
    articlesCache = articles;
    lastFetchTime = currentTime;
    
    return articles;
  } catch (error) {
    console.error('Error fetching articles from Notion:', error);
    
    // Return empty array or throw error based on your error handling strategy
    return [];
  }
};

// Get a single article by slug
export const getArticleBySlug = async (slug: string): Promise<NotionArticle | null> => {
  try {
    // Try to get from cache first
    if (articlesCache) {
      const cachedArticle = articlesCache.find(article => article.slug === slug);
      if (cachedArticle) return cachedArticle;
    }
    
    // Query Notion database for the specific article by slug
    const response = await notion.databases.query({
      database_id: NOTION_DATABASE_ID,
      filter: {
        property: 'Slug',
        rich_text: {
          equals: slug,
        },
      },
    }) as NotionDatabaseResponse;
    
    if (response.results.length === 0) {
      return null;
    }
    
    return await transformNotionPage(response.results[0]);
  } catch (error) {
    console.error(`Error fetching article with slug "${slug}" from Notion:`, error);
    return null;
  }
};

// Refresh the cache
export const refreshArticlesCache = (): void => {
  articlesCache = null;
  lastFetchTime = 0;
};
