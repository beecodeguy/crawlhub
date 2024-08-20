"use client";

import DropDownMenu from "@/components/DropDownMenu";
import { Edit, Trash } from "lucide-react";
import React, { useState } from "react";
import AlertDialog from "@/components/AlertDialog";
import { deleteBlog } from "@/actions/blogs";
import { revalidatePath } from "@/lib/revalidate";

interface IProps {
  id: number;
}

const CellAction: React.FC<IProps> = ({ id }) => {
  const [open, setOpen] = useState(false);

  const handleDelete = () => {
    setOpen(true);
  };

  const onDelete = async () => {
    try {
      await deleteBlog(id);
      revalidatePath('/admin/blogs')
      setOpen(false);
    } catch (err) {}
  };

  return (
    <>
      <AlertDialog
        open={open}
        onOk={onDelete}
        onClose={() => setOpen(false)}
        onOpenChange={(b) => setOpen(b)}
      />
      <DropDownMenu
        items={[
          {
            id: 1,
            render: () => (
              <>
                <Edit className="mr-2 h-4 w-4" /> Update
              </>
            ),
          },
          {
            id: 2,
            render: () => (
              <>
                <Trash className="mr-2 h-4 w-4" /> Delete
              </>
            ),
            onClick: handleDelete,
          },
        ]}
      />
    </>
  );
};

export default CellAction;
