import { getContacts } from "@/actions/contacts";
import { DataTable } from "@/components/table-component";
import React from "react";
import { ContactColumns } from "./_components/ContactColumn";

const Contacts = async () => {
  const contacts = await getContacts();

  return (
    <div className="flex flex-col gap-10 w-full">
      <div className="flex justify-between">
        <h1>Contacts</h1>
      </div>
      <DataTable
        searchKey="name"
        columns={ContactColumns}
        data={contacts || []}
      />
    </div>
  );
};

export default Contacts;
