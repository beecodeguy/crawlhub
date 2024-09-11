"use client";

import DropDownMenu from "@/components/DropDownMenu";
import { Trash, EyeIcon } from "lucide-react";
import React, { useState } from "react";
import AlertDialog from "@/components/AlertDialog";
import { revalidatePath } from "@/lib/revalidate";
import Link from "next/link";
import { deleteContact } from "@/actions/contacts";
import { useRouter } from "next/navigation";

interface IProps {
  id: number;
  status: string;
  title: string;
  content: string;
}

const CellAction: React.FC<IProps> = ({ id }) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleDelete = () => {
    setOpen(true);
  };

  const onDelete = async () => {
    try {
      await deleteContact(id);
      revalidatePath("/admin/contacts");
      setOpen(false);
    } catch (err) {}
  };

  const items = [
    {
      id: 6,
      render: () => (
        <>
          <EyeIcon className="h-2 w-2" />&nbsp;Detail
        </>
      ),
      onClick: () => router.push("/admin/contacts/" + id),
    },
    {
      id: 2,
      render: () => (
        <>
          <Trash className="h-2 w-2" />&nbsp;Delete
        </>
      ),
      onClick: handleDelete,
    },
  ];

  return (
    <>
      <AlertDialog
        open={open}
        onOk={onDelete}
        onClose={() => setOpen(false)}
        onOpenChange={(b) => setOpen(b)}
      />

      <DropDownMenu items={items} />
    </>
  );
};

export default CellAction;
