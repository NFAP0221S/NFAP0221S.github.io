import { getBlocks, getDatabase, getPage } from '@/lib/notion';
import { notFound } from 'next/navigation';
import React from 'react';
import PostsBlocks from '@/app/(blog)/posts/component/PostsBlocks';

// generateStaticParams 함수 추가
export async function generateStaticParams() {
  const databaseId = process.env.NEXT_PUBLIC_NOTION_DATABASE_ID as string;
  if (!databaseId) {
    throw new Error("NEXT_PUBLIC_NOTION_DATABASE_ID is not defined");
  }
  const posts = await getDatabase(databaseId);
  const paramsArray = [];
  for (const post of posts) {
    const blocks = await getBlocks(post.id);
    const totalPages = Math.ceil(blocks.length / 8);
    for (let page = 1; page <= totalPages; page++) {
      paramsArray.push({ id: post.id, page: page.toString() });
    }
  }
  return paramsArray;
}

export default async function PostsPage({ params }: any) {
  const { id, page } = params;
  const currentPage = parseInt(page, 10);
  
  const pageData: any = await getPage(id);
  const blocks: any = await getBlocks(id);

  if (!pageData || !blocks) {
    notFound();
  }

  return (
    <div>
      <PostsBlocks id={id} initialBlocks={blocks} currentPage={currentPage} />
    </div>
  );
}
