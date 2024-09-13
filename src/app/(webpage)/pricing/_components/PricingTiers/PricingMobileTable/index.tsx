"use client";

import React, { useState } from "react";
import pricing from "@/constants/pricing";
import SliderRow from "./SliderRow";
import SliderHeader, { TCols } from "./SliderHeader";

const cols: TCols[] = ["basic", "standard", "enterprise"];

const PricingMobileTable = () => {
  const [column, setColumn] = useState<TCols>("standard");

  return (
    <div className="pricing-table w-full block lg:hidden">
      <table className="border-separate border-spacing-x-1 w-full">
        <SliderHeader column={column} />
        <tbody>
          {pricing.map((x) => (
            <SliderRow column={column} {...x} key={x.title} />
          ))}
        </tbody>
      </table>
      <ul className="flex gap-1 justify-center mt-2">
        {cols.map((x) => (
          <li
            onClick={() => setColumn(x)}
            className={`${
              x === column ? "bg-primary" : "bg-grey"
            } cursor-pointer p-1 rounded-full`}
            key={x}
          />
        ))}
      </ul>
    </div>
  );
};

export default PricingMobileTable;
