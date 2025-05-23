
import { Client } from "@notionhq/client";
import { marked } from "marked";
import { NotionArticle, NotionConnectionStatus, NotionDatabaseResponse, NotionConfig } from "@/types/notion";
import { 
  BlockObjectResponse, 
  PageObjectResponse 
} from "@notionhq/client/build/src/api-endpoints";

// Notion configuration
const NOTION_API_KEY = "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";
const NOTION_DATABASE_ID = "1fb2f5df76a781dea415eb98d1b1fea9";
const NOTION_VERSION = "2022-06-28";

// Export config for diagnostic purposes
export const getNotionConfig = (): NotionConfig => ({
  apiKey: NOTION_API_KEY,
  databaseId: NOTION_DATABASE_ID,
  version: NOTION_VERSION
});

// Initialize the Notion client
const notion = new Client({
  auth: NOTION_API_KEY,
  notionVersion: NOTION_VERSION,
});

// Cache for articles to minimize API calls
let articlesCache: NotionArticle[] | null = null;
let lastFetchTime: number = 0;
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

// Helper to detect CORS errors
const isCorsError = (error: any): boolean => {
  if (!error) return false;
  return (
    error.message?.includes('CORS') ||
    error.message?.includes('Failed to fetch') ||
    error.name === 'TypeError'
  );
};

// Convert Notion rich text to HTML using marked
const convertRichTextToHtml = (richText: any[]): string => {
  if (!richText || !Array.isArray(richText)) return '';
  const markdown = richText.map(text => text?.plain_text || '').join('');
  return marked.parse(markdown) as string;
};

const extractTags = (multiSelect: any[]): string[] => {
  if (!multiSelect || !Array.isArray(multiSelect)) return [];
  return multiSelect.map(option => option?.name || '').filter(Boolean);
};

// Transform Notion page data into our application's article format
const transformNotionPage = async (page: PageObjectResponse): Promise<NotionArticle> => {
  try {
    if (!page || !page.properties) {
      throw new Error("Invalid page object received from Notion API");
    }
    
    const properties = page.properties as any;
    
    // Get the content blocks
    let blocks;
    try {
      blocks = await notion.blocks.children.list({
        block_id: page.id,
      });
    } catch (error: any) {
      console.error('Error fetching blocks for page:', page.id, error);
      blocks = { results: [] };
    }
    
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
      content: contentHtml || '<p>No content available</p>',
      relatedArticles,
      nextArticle,
    };
  } catch (error) {
    console.error('Error transforming Notion page:', error);
    throw error;
  }
};

// Get all articles from Notion
export const getArticles = async (): Promise<NotionArticle[]> => {
  const currentTime = Date.now();
  
  // Return cached data if it's still valid
  if (articlesCache && (currentTime - lastFetchTime < CACHE_TTL)) {
    return articlesCache;
  }
  
  try {
    console.log('Fetching articles from Notion...');
    console.log(`Database ID: ${NOTION_DATABASE_ID}`);
    
    // Test connection to Notion API first
    try {
      const user = await notion.users.me({});
      console.log('Successfully connected to Notion API');
      console.log(`Connected as user: ${user.name || 'Unknown'}`);
    } catch (error: any) {
      console.error('Error connecting to Notion API:', error.message || error);
      
      let errorMessage = 'Failed to connect to Notion API';
      if (error.code === 'unauthorized') {
        errorMessage = 'Authorization error: Please check your Notion API key and permissions';
      } else if (error.message?.includes('rate_limited')) {
        errorMessage = 'Rate limited by Notion API. Please try again later.';
      } else if (isCorsError(error)) {
        errorMessage = 'CORS error: The browser blocked the request to Notion API';
      }
      
      throw new Error(errorMessage);
    }
    
    // Query the database
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
      
      console.log(`Successfully queried database. Found ${response.results.length} pages.`);
      
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
    } catch (error: any) {
      console.error('Error querying Notion database:', error.message || error);
      
      if (error.code === 'object_not_found') {
        console.error(`Database with ID ${NOTION_DATABASE_ID} not found or no access`);
        throw new Error(`Database not found or no access. Please check your database ID and permissions.`);
      }
      
      throw error;
    }
  } catch (error: any) {
    console.error('Error fetching articles from Notion:', error);
    console.error('Details:', {
      message: error.message || 'Unknown error',
      code: error.code || 'No error code',
      status: error.status || 'No status',
    });
    
    // Return empty array or throw error based on your error handling strategy
    return [];
  }
};

// Get a single article by slug
export const getArticleBySlug = async (slug: string): Promise<NotionArticle | null> => {
  try {
    console.log(`Looking for article with slug: ${slug}`);
    
    // Try to get from cache first
    if (articlesCache) {
      const cachedArticle = articlesCache.find(article => article.slug === slug);
      if (cachedArticle) {
        console.log('Article found in cache');
        return cachedArticle;
      }
    }
    
    // Query Notion database for the specific article by slug
    try {
      console.log('Querying Notion for article...');
      const response = await notion.databases.query({
        database_id: NOTION_DATABASE_ID,
        filter: {
          property: 'Slug',
          rich_text: {
            equals: slug,
          },
        },
      }) as NotionDatabaseResponse;
      
      console.log(`Query returned ${response.results.length} results`);
      
      if (response.results.length === 0) {
        console.log('No article found with this slug');
        return null;
      }
      
      return await transformNotionPage(response.results[0] as PageObjectResponse);
    } catch (error: any) {
      console.error('Error querying Notion database for article:', error.message || error);
      throw error;
    }
  } catch (error) {
    console.error(`Error fetching article with slug "${slug}" from Notion:`, error);
    return null;
  }
};

// Test connection to Notion API - can be called to verify setup
export const testNotionConnection = async (): Promise<NotionConnectionStatus> => {
  try {
    // Test API key by getting current user info
    let userResponse;
    try {
      userResponse = await notion.users.me({});
      console.log('Notion API connection successful');
      console.log('Connected as user:', userResponse.name);
    } catch (error: any) {
      console.error('Notion API connection error:', error);
      
      return {
        success: false,
        message: `Connection failed: ${error.message || error}`,
        details: { error },
        corsError: isCorsError(error),
        statusCode: error.status || 0
      };
    }
    
    // Test database access
    try {
      const databaseResponse = await notion.databases.retrieve({
        database_id: NOTION_DATABASE_ID,
      });
      
      console.log('Successfully accessed database');
      
      // Handle the title property safely
      let databaseTitle = 'Untitled';
      if ('title' in databaseResponse && Array.isArray(databaseResponse.title) && databaseResponse.title.length > 0) {
        databaseTitle = databaseResponse.title[0].plain_text || 'Untitled';
      }
      
      console.log('Database title:', databaseTitle);
      
      // Try to fetch a sample of pages to verify content access
      const pagesResponse = await notion.databases.query({
        database_id: NOTION_DATABASE_ID,
        page_size: 1,
      });
      
      const hasPages = pagesResponse.results.length > 0;
      
      return {
        success: true,
        message: `Connected successfully as ${userResponse.name}. Database "${databaseTitle}" is accessible with ${pagesResponse.results.length} pages.`,
        details: {
          user: userResponse,
          database: {
            id: databaseResponse.id,
            title: databaseTitle,
            hasPages
          },
        },
        statusCode: 200
      };
    } catch (error: any) {
      console.error('Database access error:', error);
      return {
        success: false,
        message: `API key valid, but database access failed: ${error.message || error}`,
        details: { error },
        corsError: isCorsError(error),
        statusCode: error.status || 0
      };
    }
  } catch (error: any) {
    console.error('Notion API connection error:', error);
    return {
      success: false,
      message: `Connection failed: ${error.message || error}`,
      details: { error },
      corsError: isCorsError(error),
      statusCode: error.status || 0
    };
  }
};

// Refresh the cache
export const refreshArticlesCache = (): void => {
  articlesCache = null;
  lastFetchTime = 0;
};
