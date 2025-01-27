import { getBlog } from "@/actions/blogs";
import React from "react";
import BlogEditor from "../../_components/BlogEditor";

const EditBlog = async ({ params }: { params: { blogId: string } }) => {
  const blog = await getBlog(params.blogId);
  return (
    <div className="flex flex-col gap-3">
      <h1>Edit Blog</h1>
      <BlogEditor
        title={blog?.title}
        content={blog?.content}
        blogId={params.blogId}
      />
    </div>
  );
};

export default EditBlog;
