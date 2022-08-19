import { notion } from './client';

export const queryDatabase = async () => {
  const response = await notion.blocks.children.list({
    block_id: '61dacdcf-f912-42db-bb43-43087eb26f5a',
  });
  return response;
}

