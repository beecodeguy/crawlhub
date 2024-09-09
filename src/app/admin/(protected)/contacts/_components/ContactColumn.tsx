"use client";

import { Contact } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";

export const ContactColumns: ColumnDef<Contact>[] = [
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
    accessorKey: "companyName",
    header: "Company Name",
    cell: ({ row }) => {
      const { companyName } = row.original;
      return <p className="font-medium text-gray-600">{companyName}</p>;
    },
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
    cell: ({ row }) => {
      const { createdAt } = row.original;
      return <p className="font-medium text-gray-600">{String(createdAt)}</p>;
    },
  },
];
