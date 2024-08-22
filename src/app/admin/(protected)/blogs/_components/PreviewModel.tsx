"use client";

import React from "react";

import parser from "html-react-parser";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface IProps {
  open: boolean;
  onOpenChange?: (b: boolean) => void;
  title: string;
  content: string;
}

const PreviewModel: React.FC<IProps> = ({
  open,
  onOpenChange,
  title,
  content,
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader className="">
          <DialogTitle>Preview Blog</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-2 overflow-auto">
          <h1>{title}</h1>
          <div className="tiptap">{parser(content)}</div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PreviewModel;
