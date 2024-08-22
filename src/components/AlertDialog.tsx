"use client";

import React from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface IProps {
  open: boolean;
  onOpenChange?: (b: boolean) => void;
  onOk?: () => void;
  onClose?: () => void;
  title?: string;
}

const AlertDialog: React.FC<IProps> = ({
  open,
  onOpenChange,
  onOk,
  onClose,
  title = "Are your sure?",
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <Button type="button" className="bg-red-500" onClick={onClose}>
            No
          </Button>
          <Button type="button" className="bg-blue-500" onClick={onOk}>
            Yes
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AlertDialog;
