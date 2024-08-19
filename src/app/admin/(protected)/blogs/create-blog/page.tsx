import React from "react";
import BlogEditor from "../_components/BlogEditor";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";

const CreateBlog = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className="flex flex-col gap-3">
      <h1>Create Blog</h1>
      <BlogEditor id={session?.user?.id} />
    </div>
  );
};

export default CreateBlog;
