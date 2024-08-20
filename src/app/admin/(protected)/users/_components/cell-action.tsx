"use client";

import DropDownMenu from "@/components/DropDownMenu";
import { Edit, Trash } from "lucide-react";
import React from "react";

const CellAction = () => {
  return (
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
        },
      ]}
    />
  );
};

export default CellAction;
