import React from "react";
import MoreOptions from "./MoreOptions";
import SearchInput from "@/components/SearchInput";

const items = [
  "All",
  "Scrapers",
  "Data Acquistion",
  "Articles",
  "Product Updates",
  "One",
  "Two",
];

const BlogCategories = () => {
  return (
    <div className="flex w-full gap-3 h-6">
      <div className="flex items-center gap-4 border-r border-r-1 border-l-grey pr-3 w-full text-nowrap">
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
      <SearchInput />
    </div>
  );
};

export default BlogCategories;
