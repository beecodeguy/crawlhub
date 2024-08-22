"use client";

import DropDownMenu from "@/components/DropDownMenu";
import { Edit, Trash, EyeIcon } from "lucide-react";
import React, { useState } from "react";
import AlertDialog from "@/components/AlertDialog";
import { deleteBlog } from "@/actions/blogs";
import { revalidatePath } from "@/lib/revalidate";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useSession } from "next-auth/react";
import PreviewModel from "./PreviewModel";

interface IProps {
  id: number;
  status: string;
  title: string;
  content: string;
}

const CellAction: React.FC<IProps> = ({ id, status, title, content }) => {
  const [open, setOpen] = useState(false);
  const [preview, setPreview] = useState({
    title: "",
    content: "",
    open: false,
  });

  const router = useRouter();
  const { data } = useSession();

  const role = data?.user.role;

  const handleDelete = () => {
    setOpen(true);
  };

  const onDelete = async () => {
    try {
      await deleteBlog(id);
      revalidatePath("/admin/blogs");
      setOpen(false);
    } catch (err) {}
  };

  const handleStatus = async (status: string) => {
    try {
      await axios.patch("/api/blog/" + id, { status });
      revalidatePath("/admin/blogs");
    } catch (err) {}
  };

  const items = [
    {
      id: 1,
      render: () => (
        <>
          <Edit className="mr-2 h-4 w-4" /> Update
        </>
      ),
      onClick: () => router.push("/admin/blogs/edit/" + id),
      roles: ["admin", "user"],
    },
    {
      id: 6,
      render: () => (
        <>
          <EyeIcon className="mr-2 h-4 w-4" /> Preview
        </>
      ),
      onClick: () => setPreview({ open: true, title, content }),
      roles: ["admin", "user"],
    },
    {
      id: 2,
      render: () => (
        <>
          <Trash className="mr-2 h-4 w-4" /> Delete
        </>
      ),
      onClick: handleDelete,
      roles: ["admin"],
    },
  ];

  if (status === "pending") {
    items.unshift(
      {
        id: 3,
        render: () => <>Approve</>,
        onClick: () => handleStatus("approve"),
        roles: ["admin"],
      },
      {
        id: 4,
        render: () => <>Reject</>,
        onClick: () => handleStatus("reject"),
        roles: ["admin"],
      }
    );
  }

  return (
    <>
      <AlertDialog
        open={open}
        onOk={onDelete}
        onClose={() => setOpen(false)}
        onOpenChange={(b) => setOpen(b)}
      />
      <PreviewModel
        open={preview.open}
        onOpenChange={(o) =>
          setPreview({ open: false, title: "", content: "" })
        }
        title={preview.title}
        content={preview.content}
      />
      <DropDownMenu items={items.filter((item) => item.roles.includes(role))} />
    </>
  );
};

export default CellAction;
