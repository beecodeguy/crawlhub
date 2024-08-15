"use client";

import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface IProps {
  onChange: (v: string) => void;
  value: string;
  items: { label: string; value: string }[];
}

const SelectComponent: React.FC<IProps> = ({ onChange, value }) => {
  return (
    <Select onValueChange={onChange} value={value}>
      <SelectTrigger className="mt-2">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent className="bg-white w-full">
        <SelectGroup>
          <SelectLabel>Select ...</SelectLabel>
          <SelectItem value="admin">Admin</SelectItem>
          <SelectItem value="user">User</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectComponent;
