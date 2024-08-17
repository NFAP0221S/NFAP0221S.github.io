'use client'

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useRouter } from "next/navigation";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  basePath: string;
}

export function _Pagination({ totalPages, currentPage, basePath }: PaginationProps) {
  const router = useRouter();

  const handlePageClick = (page: number) => {
    console.log('page:', page)
    if ((page+1 === 1) || (page-1 === totalPages)) return null;
    router.push(`${basePath}/${page}`);
  };

    // 현재 페이지를 기준으로 시작 페이지와 끝 페이지 계산
    const pageLimit = 5;
    const startPage = Math.max(1, currentPage - Math.floor(pageLimit / 2));
    const endPage = Math.min(totalPages, startPage + pageLimit - 1);
    const adjustedStartPage = Math.max(1, endPage - pageLimit + 1);

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            className={currentPage === 1 ? '' : 'cursor-pointer'}
            onClick={() => handlePageClick(currentPage - 1)}
            isDisabled={currentPage === 1}
          />
        </PaginationItem>

         {/* <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem> */} {/* 여기는 기능 업그레이드 시 구현 */}

         {[...Array(endPage - adjustedStartPage + 1)].map((_, index) => (
          <PaginationItem key={index}>
            <PaginationLink
              className="cursor-pointer"
              isActive={index + adjustedStartPage === currentPage}
              onClick={() => handlePageClick(index + adjustedStartPage)}
            >
              {index + adjustedStartPage}
            </PaginationLink>
          </PaginationItem>
        ))}

        {/* <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem> */} {/* 여기는 기능 업그레이드 시 구현 */}

        <PaginationItem>
          <PaginationNext
            className={currentPage === totalPages ? '' : 'cursor-pointer'}
            onClick={() => handlePageClick(currentPage + 1)}
            isDisabled={currentPage === totalPages}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
