import { notFound } from 'next/navigation';
import React from 'react';
import { PostsPage } from '@/pages/posts-page';
import { getDatabase, getBlocks, getPage } from '@/shared/lib/notion';

// generateStaticParams 함수 추가
export const generateStaticParams = async () => {
  const databaseId = process.env.NEXT_PUBLIC_NOTION_DATABASE_ID as string;
  if (!databaseId) {
    throw new Error("NEXT_PUBLIC_NOTION_DATABASE_ID is not defined");
  }
  const posts = await getDatabase(databaseId);
  console.log('@@@ databaseId', databaseId)
  console.log('@@@ posts', posts.length)
  const paramsArray = [];
  for (const post of posts) {
    const blocks = await getBlocks(post.id);
    console.log('@@@ blocks', blocks)
    const totalPages = Math.ceil(blocks.length / 5);
    for (let page = 1; page <= totalPages; page++) {
      paramsArray.push({ id: post.id, page: page.toString() });
    }
    console.log('@@@ paramsArray', paramsArray)
  }
  return paramsArray;
}

interface props {
  params: {
    id: string;
    page: string;
  };
}

const Posts = async ({ params }: props) => {
  const { id, page } = params;
  const currentPage = parseInt(page, 10);
  
  const pageData: any = await getPage(id);
  const blocks: any = await getBlocks(id);
  const postsProps = { id, initialBlocks: blocks, currentPage };

  if (!pageData || !blocks) {
    notFound();
  }


  return <PostsPage {...postsProps}/>;
}

export default Posts