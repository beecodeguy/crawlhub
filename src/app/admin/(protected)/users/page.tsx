import { DataTable } from "@/components/table-component";
import { UserColumns } from "./_components/UserColumn";
import React from "react";

const Users = () => {
  return (
    <div>
      <DataTable
        searchKey="name"
        columns={UserColumns}
        data={[
          {
            id: "1",
            name:"Rujal Sapkota",
            email: "r@gmail.com",
            role: "user",
            createdAt: "2015-02-11",
          },
        ]}
      />
    </div>
  );
};

export default Users;
