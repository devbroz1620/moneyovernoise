
import { Client } from "@notionhq/client";
import { marked } from "marked";
import { NotionArticle, NotionConnectionStatus, NotionDatabaseResponse, NotionConfig } from "@/types/notion";
import { 
  BlockObjectResponse, 
  PageObjectResponse 
} from "@notionhq/client/build/src/api-endpoints";

// Notion configuration - Updated with your provided credentials
const NOTION_API_KEY = "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";
const NOTION_DATABASE_ID = "1fb2f5df76a781dea415eb98d1b1fea9";
const NOTION_VERSION = "2022-06-28";

console.log('Notion Service Configuration:');
console.log('API Key (first 8 chars):', NOTION_API_KEY.substring(0, 8));
console.log('Database ID:', NOTION_DATABASE_ID);
console.log('Version:', NOTION_VERSION);

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
    error.message?.includes('NetworkError') ||
    error.name === 'TypeError' ||
    error.code === 'FETCH_ERROR'
  );
};

// Helper to extract text from Notion rich text
const extractPlainText = (richText: any[]): string => {
  if (!richText || !Array.isArray(richText)) return '';
  return richText.map(text => text?.plain_text || '').join('');
};

// Transform Notion page data into our application's article format
const transformNotionPage = async (page: PageObjectResponse): Promise<NotionArticle> => {
  try {
    console.log('Transforming page:', page.id);
    
    if (!page || !page.properties) {
      throw new Error("Invalid page object received from Notion API");
    }
    
    const properties = page.properties as any;
    console.log('Page properties:', Object.keys(properties));
    
    // Get the content blocks
    let blocks;
    try {
      blocks = await notion.blocks.children.list({
        block_id: page.id,
      });
      console.log(`Found ${blocks.results.length} blocks for page ${page.id}`);
    } catch (error: any) {
      console.error('Error fetching blocks for page:', page.id, error);
      blocks = { results: [] };
    }
    
    // Convert blocks to HTML (simplified version)
    let contentHtml = '';
    for (const block of blocks.results) {
      const typedBlock = block as BlockObjectResponse;
      
      if (typedBlock.type === 'paragraph' && typedBlock.paragraph?.rich_text) {
        const text = extractPlainText(typedBlock.paragraph.rich_text);
        if (text.trim()) contentHtml += `<p>${text}</p>`;
      } else if (typedBlock.type === 'heading_1' && typedBlock.heading_1?.rich_text) {
        const text = extractPlainText(typedBlock.heading_1.rich_text);
        if (text.trim()) contentHtml += `<h1>${text}</h1>`;
      } else if (typedBlock.type === 'heading_2' && typedBlock.heading_2?.rich_text) {
        const text = extractPlainText(typedBlock.heading_2.rich_text);
        if (text.trim()) contentHtml += `<h2>${text}</h2>`;
      } else if (typedBlock.type === 'heading_3' && typedBlock.heading_3?.rich_text) {
        const text = extractPlainText(typedBlock.heading_3.rich_text);
        if (text.trim()) contentHtml += `<h3>${text}</h3>`;
      } else if (typedBlock.type === 'bulleted_list_item' && typedBlock.bulleted_list_item?.rich_text) {
        const text = extractPlainText(typedBlock.bulleted_list_item.rich_text);
        if (text.trim()) contentHtml += `<li>${text}</li>`;
      }
    }
    
    // Extract properties with better error handling
    const title = extractPlainText(properties.Title?.title || []) || 'Untitled';
    const slug = extractPlainText(properties.Slug?.rich_text || []) || page.id;
    const description = extractPlainText(properties.Description?.rich_text || []) || '';
    const readingTime = extractPlainText(properties.ReadingTime?.rich_text || []) || '5 min';
    
    // Handle category with validation
    const categoryValue = properties.Category?.select?.name || 'Beginner';
    const validCategory = 
      categoryValue === 'Beginner' || 
      categoryValue === 'Intermediate' || 
      categoryValue === 'Advanced' 
        ? categoryValue as 'Beginner' | 'Intermediate' | 'Advanced'
        : 'Beginner';
    
    // Extract tags
    const tags = properties.Tags?.multi_select ? 
      properties.Tags.multi_select.map((tag: any) => tag?.name || '').filter(Boolean) : [];
    
    // Get image URL
    const image = properties.Image?.url || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800';
    
    console.log('Successfully transformed page:', {
      id: page.id,
      title,
      slug,
      category: validCategory,
      tags: tags.length
    });
    
    return {
      id: page.id,
      title,
      slug,
      description,
      readingTime,
      category: validCategory,
      tags,
      image,
      content: contentHtml || '<p>No content available</p>',
      relatedArticles: [], // Simplified for now
      nextArticle: null, // Simplified for now
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
    console.log('Returning cached articles');
    return articlesCache;
  }
  
  try {
    console.log('Starting fresh fetch from Notion...');
    console.log(`Using Database ID: ${NOTION_DATABASE_ID}`);
    console.log(`Using API Key: ${NOTION_API_KEY.substring(0, 8)}...`);
    
    // Test connection to Notion API first
    try {
      console.log('Testing Notion API connection...');
      const user = await notion.users.me({});
      console.log('✅ Successfully connected to Notion API');
      console.log(`Connected as user: ${user.name || 'Unknown'} (${user.id})`);
    } catch (error: any) {
      console.error('❌ Error connecting to Notion API:', error);
      
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
      console.log('Querying Notion database...');
      const response = await notion.databases.query({
        database_id: NOTION_DATABASE_ID,
        sorts: [
          {
            property: 'Title',
            direction: 'ascending',
          },
        ],
      }) as NotionDatabaseResponse;
      
      console.log(`✅ Successfully queried database. Found ${response.results.length} pages.`);
      
      if (response.results.length === 0) {
        console.warn('⚠️ Database query returned 0 results');
        return [];
      }
      
      const articles: NotionArticle[] = [];
      for (const page of response.results) {
        try {
          const article = await transformNotionPage(page as PageObjectResponse);
          articles.push(article);
          console.log(`✅ Successfully transformed article: ${article.title}`);
        } catch (error) {
          console.error('❌ Error transforming page:', error);
        }
      }
      
      // Update cache
      articlesCache = articles;
      lastFetchTime = currentTime;
      
      console.log(`✅ Successfully fetched ${articles.length} articles from Notion`);
      return articles;
    } catch (error: any) {
      console.error('❌ Error querying Notion database:', error);
      
      if (error.code === 'object_not_found') {
        console.error(`Database with ID ${NOTION_DATABASE_ID} not found or no access`);
        throw new Error(`Database not found or no access. Please check your database ID and permissions.`);
      }
      
      throw error;
    }
  } catch (error: any) {
    console.error('❌ Final error in getArticles:', error);
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
  } catch (error) {
    console.error(`Error fetching article with slug "${slug}" from Notion:`, error);
    return null;
  }
};

// Test connection to Notion API - enhanced diagnostics
export const testNotionConnection = async (): Promise<NotionConnectionStatus> => {
  console.log('🔍 Starting Notion connection test...');
  
  try {
    // Test 1: API key validation
    console.log('Test 1: Validating API key...');
    let userResponse;
    try {
      userResponse = await notion.users.me({});
      console.log('✅ API key valid');
      console.log('Connected as user:', userResponse.name);
    } catch (error: any) {
      console.error('❌ API key validation failed:', error);
      
      return {
        success: false,
        message: `API key validation failed: ${error.message || error}`,
        details: { error, step: 'api_key_validation' },
        corsError: isCorsError(error),
        statusCode: error.status || 0
      };
    }
    
    // Test 2: Database access
    console.log('Test 2: Testing database access...');
    try {
      const databaseResponse = await notion.databases.retrieve({
        database_id: NOTION_DATABASE_ID,
      });
      
      console.log('✅ Database accessible');
      
      // Handle the title property safely
      let databaseTitle = 'Untitled';
      if ('title' in databaseResponse && Array.isArray(databaseResponse.title) && databaseResponse.title.length > 0) {
        databaseTitle = databaseResponse.title[0].plain_text || 'Untitled';
      }
      
      console.log('Database title:', databaseTitle);
      
      // Test 3: Query pages
      console.log('Test 3: Querying pages...');
      const pagesResponse = await notion.databases.query({
        database_id: NOTION_DATABASE_ID,
        page_size: 5,
      });
      
      const pageCount = pagesResponse.results.length;
      console.log(`✅ Found ${pageCount} pages in database`);
      
      // Test 4: Check page properties
      if (pageCount > 0) {
        console.log('Test 4: Checking page properties...');
        const firstPage = pagesResponse.results[0] as PageObjectResponse;
        const properties = Object.keys(firstPage.properties);
        console.log('Available properties:', properties);
        
        const requiredProps = ['Title', 'Slug', 'Description', 'Category'];
        const missingProps = requiredProps.filter(prop => !properties.includes(prop));
        
        if (missingProps.length > 0) {
          console.warn('⚠️ Missing required properties:', missingProps);
        }
      }
      
      return {
        success: true,
        message: `✅ Connection successful! Found ${pageCount} articles in database "${databaseTitle}".`,
        details: {
          user: {
            name: userResponse.name,
            id: userResponse.id
          },
          database: {
            id: databaseResponse.id,
            title: databaseTitle,
            pageCount
          },
        },
        statusCode: 200
      };
    } catch (error: any) {
      console.error('❌ Database access failed:', error);
      return {
        success: false,
        message: `Database access failed: ${error.message || error}`,
        details: { error, step: 'database_access' },
        corsError: isCorsError(error),
        statusCode: error.status || 0
      };
    }
  } catch (error: any) {
    console.error('❌ Connection test failed:', error);
    return {
      success: false,
      message: `Connection test failed: ${error.message || error}`,
      details: { error, step: 'general_failure' },
      corsError: isCorsError(error),
      statusCode: error.status || 0
    };
  }
};

// Refresh the cache
export const refreshArticlesCache = (): void => {
  console.log('🔄 Refreshing articles cache...');
  articlesCache = null;
  lastFetchTime = 0;
};
