"use client";

import { ColumnDef } from "@tanstack/react-table";

export type UserColumn = {
  id: string;
  email: string;
  name: string;
  role: string;
  createdAt: string;
};

export const UserColumns: ColumnDef<UserColumn>[] = [
  {
    accessorKey: "id",
    header: "ID",
    cell: ({ row }) => {
      const { id } = row.original;
      return <p className="font-medium text-gray-600">{id}</p>;
    },
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      const { name } = row.original;
      return <p className="font-medium text-gray-600">{name}</p>;
    },
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => {
      const { email } = row.original;
      return <p className="font-medium text-gray-600">{email}</p>;
    },
  },
  {
    accessorKey: "role",
    header: "Role",
    cell: ({ row }) => {
      const { role } = row.original;
      return <p className="font-medium text-gray-600">{role}</p>;
    },
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
  },
  {
    accessorKey: "action",
    header: "Action",
    cell: () => <button>Edit</button>,
  },
];
