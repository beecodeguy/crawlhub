import { DataTable } from "@/components/table-component";
import { columns } from "@/constants/example-table";
import React from "react";

const Users = () => {
  return (
    <div>
      <DataTable
        searchKey="destination"
        columns={columns}
        data={[
          {
            id: "1",
            destination: "Kathmandu",
            email: "r@gmail.com",
            amount: 100,
            createdAt: "",
            completedAt: "",
          },
        ]}
      />
    </div>
  );
};

export default Users;
