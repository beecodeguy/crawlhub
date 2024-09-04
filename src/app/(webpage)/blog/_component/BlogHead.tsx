import React from "react";
import BlogCategories from "./BlogCategories";

const BlogHead = () => {
  return (
    <div className="w-full flex flex-col gap-3 items-center">
      <span className="typography-h2">CrawlerHub Blog</span>
      <BlogCategories />
    </div>
  );
};

export default BlogHead;
