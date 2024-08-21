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
    id: number;
    render: (id: number) => React.ReactNode;
    onClick?: () => void;
    roles?:string[]
  }[];
}

const DropDownMenu: React.FC<IProps> = ({ items }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white" align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        {items.map((item) => (
          <DropdownMenuItem onClick={item.onClick} className="hover:bg-gray-400" key={item.id}>
            {item.render(item.id)}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropDownMenu;
