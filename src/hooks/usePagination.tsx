"use client";

import { useState } from "react";

const usePagination = (initialPage: number) => {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const nextPage = () => {
    setCurrentPage((previousPage) => previousPage + 1);
  };

  // handle previous page

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((previousPage) => previousPage - 1);
    }
  };

  // return all functions

  return { prevPage, nextPage, currentPage };
};

export default usePagination;
