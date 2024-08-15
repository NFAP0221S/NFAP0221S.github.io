import { Client } from '@notionhq/client';
import { NotionDB, NotionPage, NotionBlock, NotionBlockList } from '../types/notion';

const notion = new Client({ auth: process.env.NEXT_PUBLIC_NOTION_API_KEY });

export const getDatabase = async (databaseId: string): Promise<NotionDB[]> => {
  const response = await notion.databases.query({ database_id: databaseId });
  return response.results as unknown as NotionDB[];
};

export const getPage = async (pageId: string): Promise<NotionPage> => {
  const response = await notion.pages.retrieve({ page_id: pageId });
  return response;
};

export const getBlocks = async (blockId: string): Promise<NotionBlock[]> => {
  const blocks: NotionBlock[] = [];
  let cursor: string | undefined;
  while (true) {
    const { results, next_cursor }: NotionBlockList = await notion.blocks.children.list({
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
