"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";

interface IProps {
  items: {
    value: string;
    label: string;
    onClick?: (val: string) => void;
  }[];
}

const MoreOptions: React.FC<IProps> = ({ items }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-1 w-9 p-0">
          <span>More</span>
          <MoreHorizontal className="h-2 w-2" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white" align="end">
        {items.map((item) => (
          <DropdownMenuItem
            onClick={() => (item.onClick ? item.onClick(item.value) : null)}
            key={item.value}
            className="hover:bg-[#D9D8D8] hover:rounded-none"
          >
            {item.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MoreOptions;
