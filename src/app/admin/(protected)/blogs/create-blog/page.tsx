import React from "react";
import BlogEditor from "../_components/BlogEditor";

const CreateBlog = async () => {

  return (
    <div className="flex flex-col gap-3">
      <h1>Create Blog</h1>
      <BlogEditor />
    </div>
  );
};

export default CreateBlog;
