import React from "react";
import PricingTiers from "./_components/PricingTiers";
import ContactUsBanner from "@/components/containers/Banner/contact-us-banner";
import FAQs from "./_components/FAQs";
import PricingPackages from "./_components/PricingPackages";

const Pricing = () => {
  return (
    <>
      <PricingTiers />
      <ContactUsBanner />
      <FAQs />
      <PricingPackages />
    </>
  );
};

export default Pricing;
