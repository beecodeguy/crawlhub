import React from "react";
import BlogHead from "./BlogHead";
import Blogs from "./Blogs";
import PaginationComponent from "@/components/Pagination";

const BlogList = () => {
  return (
    <div className="container mx-auto flex flex-col gap-6 items-center mb-[128px]">
      <BlogHead />
      <Blogs />
      <PaginationComponent total={20} currentPage={1} />
    </div>
  );
};

export default BlogList;
