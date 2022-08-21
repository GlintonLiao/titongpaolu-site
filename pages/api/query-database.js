import { notion } from './client';

export const queryDatabase = async () => {
  const response = await notion.databases.query({
    database_id: '56de3cdbd73e42a48312963191b6401e',
  });
  return response;
}

