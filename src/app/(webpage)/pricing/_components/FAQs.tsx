import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQs = () => {
  return (
    <div className="container mx-auto flex flex-col gap-5 mb-[128px]">
      <span className="typography-h2">FAQs</span>
      <div>
        <Accordion
          type="single"
          collapsible
          className="w-full flex flex-col gap-3"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>
              How long does it take to extract data once the requirements are
              clear?
            </AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>How much data can I collect??</AccordionTrigger>
            <AccordionContent>
              There is no limit to how much data you can collect. Data projects
              are priced based on scale and complexity.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Can you scrape images as files?</AccordionTrigger>
            <AccordionContent>
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              How does the data subscription work and how is it priced?
            </AccordionTrigger>
            <AccordionContent>
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQs;
