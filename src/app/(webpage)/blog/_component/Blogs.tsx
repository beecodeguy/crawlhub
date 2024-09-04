import React from "react";
import BlogCard from "./BlogCard";

const Blogs = () => {
  return (
    <div className="grid grid-cols-3 gap-3">
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </div>
  );
};

export default Blogs;
