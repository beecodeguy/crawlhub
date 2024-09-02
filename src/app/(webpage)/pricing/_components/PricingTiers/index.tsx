import React from "react";

const PricingTiers = () => {
  return (
    <div className="container mx-auto flex flex-col gap-6 items-center mb-[128px]">
      <div className="flex flex-col gap-2 w-[654px] items-center">
        <span className="typography-h2">Pricing Tiers</span>
        <p className="typography-h5 text-center">
          While each project is unique, we offer three general pricing tiers to
          give you an idea of what to expect. Final pricing will be determined
          after our assessment.
        </p>
      </div>
      <div>Table</div>
    </div>
  );
};

export default PricingTiers;
