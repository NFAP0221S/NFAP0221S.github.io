"use client";

import React from "react";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/shared/ui/pagination";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  // basePath: string;
  paginate: (pageNumber: number) => void;
}

export const PostPagination = ({
  totalPages,
  currentPage,
  // basePath,
  paginate
}: PaginationProps) => {


  return (
    <Pagination className="mt-8">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (currentPage > 1) paginate(currentPage - 1);
            }}
          />
        </PaginationItem>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
          <PaginationItem key={number}>
            <PaginationLink
              href="#"
              isActive={currentPage === number}
              onClick={(e) => {
                e.preventDefault();
                paginate(number);
              }}
            >
              {number}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (currentPage < totalPages) paginate(currentPage + 1);
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
