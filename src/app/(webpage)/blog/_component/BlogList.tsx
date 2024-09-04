import { Input } from "@/components/ui/input";
import React from "react";
import BlogHead from "./BlogHead";
import Blogs from "./Blogs";

const BlogList = () => {
  return (
    <div className="container mx-auto flex flex-col gap-6 items-center mb-[128px]">
      <BlogHead />
      <Blogs />
    </div>
  );
};

export default BlogList;
