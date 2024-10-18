'use client'

import React from "react";
import { PostPagination } from "@/widgets/pagination";
import { PostCard } from "@/widgets/card";
import { getBlocks } from "@/shared/lib/notion";
import Link from "next/link";
import { useSubCategory } from "@/app/provider/category-provider";

interface PostsBlocksProps {
  id: string;
  initialBlocks: any[];
  currentPage: number;
}

// const renderCards = async (block: any) => {
//   const type = block?.type;
//   const id = block?.id;
//   const title = block?.child_page?.title;
//   const date = block?.created_time;

//   const blocks: any = await getBlocks(id);

//   const postCardProps = { id, title, date, blocks };

//   if (type === "child_page" && id && title && date) {
//     return <PostCard key={id} {...postCardProps} />;
//   }
// };

export const PostsPage = ({
  id,
  initialBlocks,
  currentPage,
}: PostsBlocksProps) => {
  const { selectedSubCategory } = useSubCategory();
  
  const itemsPerPage = 5;
  const totalPages = Math.ceil(initialBlocks.length / itemsPerPage);

  const reversedBlocks = [...initialBlocks].reverse();

  const paginatedBlocks = reversedBlocks.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <main className="flex-grow p-8 md:p-12 lg:p-8">
      {/* <h1 className="text-4xl font-bold mb-6">Latest Blog Posts</h1> */}
      <h1 className="text-4xl font-bold mb-6">{selectedSubCategory}</h1>
      <div className="space-y-6">
        {paginatedBlocks.map((post) => (
          <PostCard key={post.id} {...post} blocks={post.blocks} />
        ))}
      </div>
      {/* <PostPagination
        paginate={paginate}
        currentPage={currentPage}
        totalPages={totalPages}
      /> */}
    </main>
  );
  // return (
  //   <React.Fragment>
  //     <ul className="grid grid-cols-1 sm:grid-cols-2 w-[80%]">
  //       {paginatedBlocks.map((block: any, index: number) => (
  //         <React.Fragment key={block.id}>
  //           {block?.type === 'child_page' && (
  //             // <li className="w-full sm:w-1/2 lg:w-1/3 p-2">
  //             <li className={`p-2 w-full flex ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
  //               {renderCards(block)}
  //             </li>
  //           )}
  //         </React.Fragment>
  //       ))}
  //     </ul>
  //     <div className="py-4 w-[80%]">
  //       <div className="flex justify-center">
  //         <PostPagination totalPages={totalPages} currentPage={currentPage} basePath={`/posts/${id}`} />
  //       </div>
  //     </div>
  //   </React.Fragment>
  // )
};
