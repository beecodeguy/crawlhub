"use client";

import { ColumnDef } from "@tanstack/react-table";

export type OrderColumn = {
  id: string;
  email: string;
  destination: string;
  amount: number;
  completedAt: string;
  createdAt: string;
};

export const columns: ColumnDef<OrderColumn>[] = [
  {
    accessorKey: "id",
    header: "Order Id",
    cell: ({ row }) => {
      const { id } = row.original;
      return <p className="font-medium text-gray-600">{id}</p>;
    },
  },
  {
    accessorKey: "destination",
    header: "Package Route",
    cell: ({ row }) => {
      const { destination } = row.original;
      return <p className="font-medium text-gray-600">{destination}</p>;
    },
  },
  {
    accessorKey: "amount",
    header: "Package Amt.",
    cell: ({ row }) => {
      const { amount } = row.original;
      return <p className="font-medium text-gray-600">{amount}</p>;
    },
  },
  {
    accessorKey: "email",
    header: "Ordered By",
    cell: ({ row }) => {
      const { email } = row.original;
      return <p className="font-medium text-gray-600">{email}</p>;
    },
  },

  {
    accessorKey: "createdAt",
    header: "Date",
  },
  {
    accessorKey: "completedAt",
    header: "Date",
  },
];
