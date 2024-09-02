import React from "react";
import THead from "./THead";
import TRow from "./TRow";
import pricing from "@/constants/pricing";

const PricingTable = () => {
  return (
    <div className="pricing-table">
      <table className="border-separate border-spacing-x-1">
        <thead>
          <THead />
        </thead>
        <tbody>
          {pricing.map((x) => (
            <TRow {...x} key={x.title} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PricingTable;
