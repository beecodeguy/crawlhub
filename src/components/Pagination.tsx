"use client";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import usePagination from "@/hooks/usePagination";

interface IProps {
  total: 100;
  currentPage: number;
}

export default function ({ total }: IProps) {
  const paginate = usePagination(2);
  const { nextPage, prevPage, currentPage } = paginate;
  
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious onClick={() => prevPage()} />
        </PaginationItem>
        {Array.from({ length: 4 }, (v, i) => (
          <PaginationItem>
            <PaginationLink isActive={currentPage === i + 1} href="/blog">
              {i + 1}
            </PaginationLink>
          </PaginationItem>
        ))}

        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext onClick={() => nextPage()} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
