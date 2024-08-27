import React from 'react'
import _Card from '@/app/(blog)/_components/_Card';
import Link from 'next/link';
import { PostPagination } from '@/widgets/pagination';
import { PostCard } from '@/widgets/card';
import { getBlocks } from '@/lib/notion';

interface PostsBlocksProps {
  id: string;
  initialBlocks: any[];
  currentPage: number;
}

const renderCards = async (block: any) => {
  const type = block?.type;
  const id = block?.id;
  const title = block?.child_page?.title;
  const date = block?.created_time;

  const blocks: any = await getBlocks(id);

  const postCardProps = { id, title, date, blocks };

  if (type === 'child_page' && id && title && date) {
    return <PostCard key={id} {...postCardProps} />;
    // return (
    //   <Link key={`link-${id}`} href={`/post/${id}`}>
    //     <PostCard key={id} {...postCardProps} />
    //   </Link>
    // )
  }
};

export const PostsPage = ({ id, initialBlocks, currentPage }: PostsBlocksProps) => {
  const itemsPerPage = 8;
  const totalPages = Math.ceil(initialBlocks.length / itemsPerPage);

  const paginatedBlocks = initialBlocks.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div>
      <ul className="flex flex-wrap justify-center">
        {paginatedBlocks.map((block: any) => (
          <React.Fragment key={block.id}>
            {block?.type === 'child_page' && (
              <li className="w-full sm:w-1/1 md:w-1/1 lg:w-1/2 p-2">
                {renderCards(block)}
              </li>
            )}
          </React.Fragment>
        ))}
      </ul>
      <div className="py-4">
        <div className="flex justify-center">
          <PostPagination totalPages={totalPages} currentPage={currentPage} basePath={`/posts/${id}`} />
        </div>
      </div>
    </div>
  )
}
