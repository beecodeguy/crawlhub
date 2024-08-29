import {
  Support24,
  TailoredPrecision,
  TransparentPricing,
  UserCentric,
} from "@/assets/icons";
import Card from "@/components/Card";
import IconWrapper from "@/components/IconWrapper";
import Image from "next/image";
import React from "react";

const WhyChooseCrawler = () => {
  return (
    <div className="flex flex-col gap-[40px] items-center bg-light-grey py-5">
      <span className="typography-h2">Why Choose CrawlerHub?</span>
      <div className="flex gap-3">
        <Card>
          <IconWrapper icon={TailoredPrecision} />
        </Card>
        <Card>
          <IconWrapper icon={Support24} />
        </Card>
        <Card>
          <IconWrapper icon={UserCentric} />
        </Card>
        <Card>
          <IconWrapper icon={TransparentPricing} />
        </Card>
      </div>
    </div>
  );
};

export default WhyChooseCrawler;
