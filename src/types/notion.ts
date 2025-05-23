
import { BlockObjectResponse, ListBlockChildrenResponse, PageObjectResponse, QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";

export interface NotionArticle {
  id: string;
  title: string;
  slug: string;
  description: string;
  readingTime: string;
  category: 'Beginner' | 'Intermediate' | 'Advanced';
  tags: string[];
  image: string;
  content: string;
  relatedArticles: string[];
  nextArticle: {
    title: string;
    slug: string;
  } | null;
}

export interface NotionDatabaseResponse extends QueryDatabaseResponse {
  results: PageObjectResponse[];
}

export interface NotionBlocksResponse extends ListBlockChildrenResponse {
  results: BlockObjectResponse[];
}

export interface NotionRichText {
  plain_text: string;
  href: string | null;
  annotations: {
    bold: boolean;
    italic: boolean;
    strikethrough: boolean;
    underline: boolean;
    code: boolean;
    color: string;
  };
}
