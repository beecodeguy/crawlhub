import { DataTable } from "@/components/table-component";
import { BlogColumns } from "@/constants/columns/BlogColumn";
import React from "react";

const AdminBlogs = () => {
  return (
    <div>
      <DataTable
        searchKey="email"
        columns={BlogColumns}
        data={[
          {
            id: "1",
            user: "Rujal Sapkota",
            title: "r@gmail.com",
            createdAt: "2015-02-11",
            updatedAt: "2016-01-10",
          },
        ]}
      />
    </div>
  );
};

export default AdminBlogs;
