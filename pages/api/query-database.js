import { notion } from './client';

export const queryDatabase = async () => {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
    sorts: [
      {
        timestamp: "last_edited_time", 
        direction: "ascending"
      }
    ]
  });
  return response;
}

