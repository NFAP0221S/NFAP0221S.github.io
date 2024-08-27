'use client'

import React from "react";
import {Pagination, Button} from "@nextui-org/react";
import { useRouter } from "next/navigation";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  basePath: string;
}

export const PostPagination = ({ totalPages, currentPage, basePath }: PaginationProps) => {
  const router = useRouter();

  const handlePageChange = (page: number) => {
    router.push(`${basePath}/${page}`);
  };

  return (
    <Pagination
      total={totalPages}
      initialPage={currentPage}
      boundaries={3}
      color="warning"
      onChange={handlePageChange}
    />
  );
}
