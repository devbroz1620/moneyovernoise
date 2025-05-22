
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

export interface NotionDatabaseResponse {
  results: any[];
  next_cursor: string | null;
  has_more: boolean;
}
