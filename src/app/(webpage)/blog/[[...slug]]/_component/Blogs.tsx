import React from "react";
import BlogCard from "./BlogCard";

const Blogs = () => {
  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="grid grid-cols-3 gap-3">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
      <div className="">Pagination</div>
    </div>
  );
};

export default Blogs;
