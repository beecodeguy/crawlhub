import { DataTable } from "@/components/table-component";
import React from "react";

const Contacts = () => {
  return (
    <div className="flex flex-col gap-10 w-full">
      <div className="flex justify-between">
        <h1>Contacts</h1>
      </div>
      <DataTable searchKey="name" columns={[]} data={[]} />
    </div>
  );
};

export default Contacts;
