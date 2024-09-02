import React from "react";

const PricingPackages = () => {
  return (
    <div className="container mx-auto flex flex-col items-center gap-3">
      <span className="typography-h2">CrawlerHub Pricing Packages</span>
      <p className="typography-h5 text-center">
        At CrawlerHUB, we understand that every project is unique, which is why
        we offer flexible pricing based on the specifics of your data extraction
        needs.<br />
        <br />
        <strong>Our process is straightforward:</strong> you provide the data
        source, and we analyse the complexity to give you a customized
        quote.Whether you need a simple scrape from a static site or a complex
        extraction from a dynamic database, we’ve got you covered.
      </p>
    </div>
  );
};

export default PricingPackages;
