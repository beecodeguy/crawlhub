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
  total: number;
  currentPage: number;
}

function PaginationComponent ({ total }: IProps) {
  const paginate = usePagination(2);
  const { nextPage, prevPage, currentPage } = paginate;

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious onClick={() => prevPage()} />
        </PaginationItem>
        {Array.from({ length: 4 }, (v, i) => (
          <PaginationItem key={i}>
            <PaginationLink
              
              isActive={currentPage === i + 1}
              href="/blog"
            >
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

export default PaginationComponent