'use client'

import React from "react";
import {Pagination, Button} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { useIsDark } from "@/app/hooks";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  basePath: string;
}

export const PostPagination = ({ totalPages, currentPage, basePath }: PaginationProps) => {
  const isDark = useIsDark();
  const router = useRouter();

  const handlePageChange = (page: number) => {
    router.push(`${basePath}/${page}`);
  };

  return (
    <Pagination
      total={totalPages}
      initialPage={currentPage}
      boundaries={3}
      color={isDark ? 'warning' : 'primary'}
      onChange={handlePageChange}
    />
  );
}
