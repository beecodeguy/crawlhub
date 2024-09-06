import { Input } from "@/components/ui/input";
import React from "react";
import BlogHead from "./BlogHead";
import Blogs from "./Blogs";
import Pagination from "@/components/Pagination";

const BlogList = () => {
  return (
    <div className="container mx-auto flex flex-col gap-6 items-center mb-[128px]">
      <BlogHead />
      <Blogs />
      <Pagination />
    </div>
  );
};

export default BlogList;