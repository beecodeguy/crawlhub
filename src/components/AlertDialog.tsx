"use client";

import React from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CopyIcon } from "lucide-react";

interface IProps {
  open: boolean;
  onOpenChange?: (b: boolean) => void;
  onOk?: () => void;
  onClose?: () => void;
}

const AlertDialog: React.FC<IProps> = ({
  open,
  onOpenChange,
  onOk,
  onClose,
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-white">
        <DialogHeader>
          <DialogTitle>Are your sure?</DialogTitle>
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
