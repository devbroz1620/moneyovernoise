import { NextApiRequest, NextApiResponse } from 'next';
import { Client } from '@notionhq/client';

const notion = new Client({ auth: process.env.NOTION_TOKEN });

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const databaseId = process.env.NOTION_DB_ID!;
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: "Published",
      select: { equals: "Yes" }
    }
  });

  const articles = response.results
    .filter(page => 'properties' in page)
    .map(page => ({
      id: page.id,
      title: page.properties.Name.title[0]?.plain_text || "",
      category: page.properties.Category.select?.name || "",
      readingTime: page.properties["Reading Time"].rich_text[0]?.plain_text || "",
      slug: page.properties.Slug.rich_text[0]?.plain_text || "",
    }));

  res.status(200).json(articles);
}