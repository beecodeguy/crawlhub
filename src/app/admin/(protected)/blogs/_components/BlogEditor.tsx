import TipTapEditor from "@/components/TipTapEditor";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

const BlogEditor = () => {
  return (
    <div className="flex flex-col gap-3">
      <div>
        <Label>Title</Label>
        <Input />
      </div>
      <div>
        <Label>Content</Label>
        <TipTapEditor />
      </div>
    </div>
  );
};

export default BlogEditor;
