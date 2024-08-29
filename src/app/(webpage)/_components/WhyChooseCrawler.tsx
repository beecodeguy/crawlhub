import Card from "@/components/Card";
import Image from "next/image";
import React from "react";

const WhyChooseCrawler = () => {
  return (
    <div className="flex flex-col gap-[40px] items-center bg-light-grey py-5">
      <span className="typography-h2">Why Choose CrawlerHub?</span>
      <div className="flex gap-3">
        <Card>
          <div>
            <Image src={""} height={34} width={34} alt="" />
          </div>
        </Card>
        <Card>sdf</Card>
        <Card>sdf</Card>
        <Card>sdf</Card>
      </div>
    </div>
  );
};

export default WhyChooseCrawler;
