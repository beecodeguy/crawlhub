import { Input } from "@/components/ui/input";
import React from "react";

const items = [
  "All",
  "Scrapers",
  "Data Acquistion",
  "Articles",
  "Product Updates",
];

const BlogList = () => {
  return (
    <div className="container mx-auto flex flex-col gap-6 items-center mb-[128px]">
      <div className="w-full flex flex-col items-center">
        <span className="typography-h2">CrawlerHub Blog</span>
        <div className="flex w-full">
          <ul className="flex w-full">
            {items.map((item) => (
              <li key={item}>
                {item}
              </li>
            ))}
          </ul>
          <Input />
        </div>
      </div>
      <div>Blog List</div>
    </div>
  );
};

export default BlogList;
