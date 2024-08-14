"use client";

import { ColumnDef } from "@tanstack/react-table";
import CellAction from "./cell-action";

export type BlogColumn = {
  id: string;
  title: string;
  user: string;
  createdAt: string;
  updatedAt: string;
};

export const BlogColumns: ColumnDef<BlogColumn>[] = [
  {
    accessorKey: "id",
    header: "ID",
    cell: ({ row }) => {
      const { id } = row.original;
      return <p className="font-medium text-gray-600">{id}</p>;
    },
  },
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => {
      const { title } = row.original;
      return <p className="font-medium text-gray-600">{title}</p>;
    },
  },
  {
    accessorKey: "user",
    header: "User",
    cell: ({ row }) => {
      const { user } = row.original;
      return <p className="font-medium text-gray-600">{user}</p>;
    },
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
    cell: ({ row }) => {
      const { createdAt } = row.original;
      return <p className="font-medium text-gray-600">{createdAt}</p>;
    },
  },
  {
    accessorKey: "updatedAt",
    header: "Updated At",
    cell: ({ row }) => {
      const { updatedAt } = row.original;
      return <p className="font-medium text-gray-600">{updatedAt}</p>;
    },
  },
  {
    accessorKey: "action",
    header: "Action",
    cell: () => <CellAction />,
  },
];