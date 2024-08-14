import TipTapEditor from "@/components/TipTapEditor";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

const BlogEditor = () => {
  return (
    <div className="flex flex-col gap-3">
      <Label>
        Title
        <Input />
      </Label>
      <Label>
        Content
        <TipTapEditor />
      </Label>
    </div>
  );
};

export default BlogEditor;
