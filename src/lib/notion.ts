import { Client } from '@notionhq/client';

const notion = new Client({ auth: process.env.NEXT_PUBLIC_NOTION_API_KEY });

export interface NotionDB {
  id: string;
  properties: {
    category: {
      title: { plain_text: string }[];
    },
    group: {
      multi_select: { name: string }[];
    },
    level: {
      rich_text: { plain_text: string }[];
    },
  };
}

export const getDatabase = async (databaseId: string): Promise<NotionDB[]> => {
  const response = await notion.databases.query({ database_id: databaseId });
  return response.results as unknown as NotionDB[];
};

export const getPage = async (pageId: string) => {
  const response = await notion.pages.retrieve({ page_id: pageId });
  return response;
};

export const getBlocks = async (blockId: string) => {
  const blocks = [];
  let cursor;
  while (true) {
    // const res = await notion.blocks.children.list({start_cursor: cursor,block_id: blockId});
    const { results, next_cursor } = await notion.blocks.children.list({
      start_cursor: cursor,
      block_id: blockId,
    });
    blocks.push(...results);
    if (!next_cursor) {
      break;
    }
    cursor = next_cursor;
  }
  return blocks;
};
