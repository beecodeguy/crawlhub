import { DataTable } from "@/components/table-component";
import { UserColumns } from "./_components/UserColumn";
import React from "react";
import Link from "next/link";
import { getUsers } from "@/actions/users";

const Users = async () => {
  const users = await getUsers();
  return (
    <div className="flex flex-col gap-10 w-full">
      <div className="flex justify-between">
        <h1 className="text-2xl">Users</h1>
        <Link
          className="bg-[#346345] text-white p-2 text-center no-underline inline-block text-md m-1 cursor-pointer"
          href="/admin/users/registration"
        >
          + Register User
        </Link>
      </div>
      <DataTable searchKey="name" columns={UserColumns} data={users || []} />
    </div>
  );
};

export default Users;
