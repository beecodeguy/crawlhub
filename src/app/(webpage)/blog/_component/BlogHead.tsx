import { Input } from "@/components/ui/input";
import React from "react";
import MoreOptions from "./MoreOptions";

const items = [
  "All",
  "Scrapers",
  "Data Acquistion",
  "Articles",
  "Product Updates",
  "One",
  "Two",
];

const BlogHead = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <span className="typography-h2">CrawlerHub Blog</span>
      <div className="flex w-full gap-3">
        <div className="flex items-center gap-4 border-r border-r-1 border-l-[#D9D8D8] pr-3 w-full text-nowrap">
          <ul className="flex gap-4 w-full">
            {items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <MoreOptions
            items={[
              { value: "1", label: "Option One" },
              { value: "2", label: "Option Two" },
            ]}
          />
        </div>
        <Input />
      </div>
    </div>
  );
};

export default BlogHead;
