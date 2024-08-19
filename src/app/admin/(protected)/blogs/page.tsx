import { DataTable } from "@/components/table-component";
import { BlogColumns } from "./_components/BlogColumn";
import React from "react";
import Link from "next/link";
import { getBlogs } from "@/actions/blogs";

const AdminBlogs = async () => {
  const blogs = await getBlogs();
  return (
    <div className="flex flex-col gap-10 w-full">
      <div className="flex justify-between">
        <h1>Blogs</h1>
        <Link
          className="bg-[#346345] text-white p-2 text-center no-underline inline-block text-md m-1 cursor-pointer"
          href="/admin/blogs/create-blog"
        >
          + Create Blog
        </Link>
      </div>
      <DataTable searchKey="user" columns={BlogColumns} data={blogs || []} />
    </div>
  );
};

export default AdminBlogs;
