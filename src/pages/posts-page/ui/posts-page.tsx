'use client'

import React, { useState } from "react";
import { PostPagination } from "@/widgets/pagination";
import { PostCard } from "@/widgets/card";
import { getBlocks } from "@/shared/lib/notion";
import Link from "next/link";
import { useSubCategory } from "@/app/provider/category-provider";
import { usePathname, useRouter } from "next/navigation";

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
  currentPage: initialPage,
}: PostsBlocksProps) => {
  const { selectedSubCategory } = useSubCategory();

  const itemsPerPage = 5;
  const totalPages = Math.ceil(initialBlocks.length / itemsPerPage);
  const reversedBlocks = [...initialBlocks].reverse();

  const [currentPage, setCurrentPage] = useState(initialPage);

  const router = useRouter();
  const pathname = usePathname();
  console.log('### pathname1', id)
  console.log('### pathname2', pathname)
  const basePath = `/blog/posts/${id}`;
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    router.push(`${basePath}/${pageNumber}`);
  };

  const paginatedBlocks = reversedBlocks.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <main className="flex-grow p-8 md:p-12 lg:p-8">
      <h1 className="text-4xl font-bold mb-6">{selectedSubCategory}</h1>
      <div className="space-y-6">
        {paginatedBlocks.map((post) => (
          <PostCard key={post.id} {...post} blocks={post.blocks} />
        ))}
      </div>
      <PostPagination
        paginate={paginate}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </main>
  );
};