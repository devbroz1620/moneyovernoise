
import { Client } from "@notionhq/client";
import { marked } from "marked";
import { NotionArticle, NotionDatabaseResponse } from "@/types/notion";
import { BlockObjectResponse, PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

// Use the integration ID provided by the user
const NOTION_API_KEY = "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";
// Extract database ID from the URL (last part after the dash)
const NOTION_DATABASE_ID = "1fb2f5df76a781dea415eb98d1b1fea9";

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
  return marked.parse(markdown) as string; // Cast to string since marked.parse returns string | Promise<string>
};

const extractTags = (multiSelect: any[]): string[] => {
  return multiSelect.map(option => option.name);
};

// Transform Notion page data into our application's article format
const transformNotionPage = async (page: PageObjectResponse): Promise<NotionArticle> => {
  const properties = page.properties as any;
  
  // Get the content blocks
  const blocks = await notion.blocks.children.list({
    block_id: page.id,
  });
  
  // Convert blocks to HTML (simplified version)
  let contentHtml = '';
  for (const block of blocks.results) {
    // Cast block to BlockObjectResponse to access type property
    const typedBlock = block as BlockObjectResponse;
    
    if (typedBlock.type === 'paragraph' && typedBlock.paragraph?.rich_text) {
      contentHtml += `<p>${typedBlock.paragraph.rich_text.map((text: any) => text.plain_text).join('')}</p>`;
    } else if (typedBlock.type === 'heading_1' && typedBlock.heading_1?.rich_text) {
      contentHtml += `<h1>${typedBlock.heading_1.rich_text.map((text: any) => text.plain_text).join('')}</h1>`;
    } else if (typedBlock.type === 'heading_2' && typedBlock.heading_2?.rich_text) {
      contentHtml += `<h2>${typedBlock.heading_2.rich_text.map((text: any) => text.plain_text).join('')}</h2>`;
    } else if (typedBlock.type === 'heading_3' && typedBlock.heading_3?.rich_text) {
      contentHtml += `<h3>${typedBlock.heading_3.rich_text.map((text: any) => text.plain_text).join('')}</h3>`;
    } else if (typedBlock.type === 'bulleted_list_item' && typedBlock.bulleted_list_item?.rich_text) {
      contentHtml += `<li>${typedBlock.bulleted_list_item.rich_text.map((text: any) => text.plain_text).join('')}</li>`;
    }
    // Add more block types as needed
  }
  
  // Get related articles and next article
  const relatedArticles: string[] = [];
  let nextArticle = null;
  
  if (properties.RelatedArticles?.relation) {
    for (const related of properties.RelatedArticles.relation) {
      try {
        const relatedPage = await notion.pages.retrieve({ page_id: related.id });
        const relatedProperties = (relatedPage as PageObjectResponse).properties as any;
        if (relatedProperties.Slug?.rich_text?.[0]) {
          relatedArticles.push(relatedProperties.Slug.rich_text[0].plain_text);
        }
      } catch (error) {
        console.error('Error retrieving related article:', error);
      }
    }
  }
  
  if (properties.NextArticle?.relation && properties.NextArticle.relation.length > 0) {
    try {
      const nextPage = await notion.pages.retrieve({ page_id: properties.NextArticle.relation[0].id });
      const nextProperties = (nextPage as PageObjectResponse).properties as any;
      if (nextProperties.Title?.title?.[0] && nextProperties.Slug?.rich_text?.[0]) {
        nextArticle = {
          title: nextProperties.Title.title[0].plain_text,
          slug: nextProperties.Slug.rich_text[0].plain_text,
        };
      }
    } catch (error) {
      console.error('Error retrieving next article:', error);
    }
  }
  
  // Ensure category is one of the allowed values
  const categoryValue = properties.Category?.select?.name || 'Beginner';
  const validCategory = 
    categoryValue === 'Beginner' || 
    categoryValue === 'Intermediate' || 
    categoryValue === 'Advanced' 
      ? categoryValue as 'Beginner' | 'Intermediate' | 'Advanced'
      : 'Beginner'; // Default to Beginner if not valid
  
  return {
    id: page.id,
    title: properties.Title?.title?.[0]?.plain_text || 'Untitled',
    slug: properties.Slug?.rich_text?.[0]?.plain_text || page.id,
    description: properties.Description?.rich_text?.[0]?.plain_text || '',
    readingTime: properties.ReadingTime?.rich_text?.[0]?.plain_text || '5 min',
    category: validCategory,
    tags: properties.Tags?.multi_select ? extractTags(properties.Tags.multi_select) : [],
    image: properties.Image?.url || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
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
      try {
        const article = await transformNotionPage(page as PageObjectResponse);
        articles.push(article);
      } catch (error) {
        console.error('Error transforming page:', error);
      }
    }
    
    // Update cache
    articlesCache = articles;
    lastFetchTime = currentTime;
    
    console.log(`Fetched ${articles.length} articles from Notion`);
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
    
    return await transformNotionPage(response.results[0] as PageObjectResponse);
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
