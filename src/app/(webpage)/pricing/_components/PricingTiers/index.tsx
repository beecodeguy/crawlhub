import React from "react";
import PricingTable from "./PricingTable";
import PricingInfo from "./PricingInfo";
import PricingMobileTable from "./PricingMobileTable";

const PricingTiers = () => {
  return (
    <div className="container mx-auto flex flex-col gap-6 items-center mb-[128px]">
      <PricingInfo />
      <PricingTable />
      <PricingMobileTable />
    </div>
  );
};

export default PricingTiers;
