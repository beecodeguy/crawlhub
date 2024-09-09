"use client";

import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface IProps {
  onChange: (v: string) => void;
  value: string;
  items: { label: string; value: string }[];
  name?: string;
}

const SelectComponent: React.FC<IProps> = ({
  onChange,
  value,
  name,
  items,
}) => {
  return (
    <Select name={name} onValueChange={onChange} value={value}>
      <SelectTrigger>
        <SelectValue placeholder="Select ..." />
      </SelectTrigger>
      <SelectContent className="bg-white w-full">
        <SelectGroup>
          {items.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectComponent;
