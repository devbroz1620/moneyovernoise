import express from 'express';
import { Client } from '@notionhq/client';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());

const notion = new Client({ auth: process.env.NOTION_TOKEN });

console.log("Notion Client initialized");
if (!process.env.NOTION_TOKEN || !process.env.NOTION_DB_ID) {
  console.error("Missing Notion API credentials in environment variables.");
  process.exit(1);
}
app.get('/api/money-basics', async (req, res) => {
  const databaseId = process.env.NOTION_DB_ID;
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: "Published",
      select: { equals: "Yes" }
    }
  });

  const articles = response.results.map(page => {
    const props = page.properties;
    return {
      id: page.id,
      title: props.Name?.title?.[0]?.plain_text || "",
      category: props.Category?.select?.name || "",
      readingTime: props["Reading Time"]?.rich_text?.[0]?.plain_text || "",
      slug: props.Slug?.rich_text?.[0]?.plain_text || "",
    };
  });

  res.json(articles);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));