import {
  Support24,
  TailoredPrecision,
  TransparentPricing,
  UserCentric,
} from "@/assets/icons";
import Card from "@/components/Card";
import IconWrapper from "@/components/IconWrapper";
import React from "react";

const WhyChooseCrawler = () => {
  return (
    <div className="flex flex-col gap-[40px] items-center bg-light-grey py-5">
      <span className="typography-h2">Why Choose CrawlerHub?</span>
      <div className="flex gap-3">
        <Card>
          <IconWrapper icon={TailoredPrecision} />
          <div className="mt-[18px] flex flex-col gap-3">
            <span className="leading-[30px] text-[20px] font-semibold">
              Tailored Precision{" "}
            </span>
            <p className="typography-h5">
              Customized data extraction, delivering exactly what you need—no
              more, no less.
            </p>
          </div>
        </Card>
        <Card>
          <IconWrapper icon={Support24} />
          <div className="mt-[18px] flex flex-col gap-3">
            <span className="leading-[30px] text-[20px] font-semibold">
              24/7 Support{" "}
            </span>
            <p className="typography-h5">
              Around-the-clock services and support to ensure seamless data
              extraction anytime.
            </p>
          </div>
        </Card>
        <Card>
          <IconWrapper icon={UserCentric} />
          <div className="mt-[18px] flex flex-col gap-3">
            <span className="leading-[30px] text-[20px] font-semibold">
              User-Centric Experience{" "}
            </span>
            <p className="typography-h5">
              Hassle-free process, so you can focus on results, not the
              technicalities.
            </p>
          </div>
        </Card>
        <Card>
          <IconWrapper icon={TransparentPricing} />
          <div className="mt-[18px] flex flex-col gap-3">
            <span className="leading-[30px] text-[20px] font-semibold">
              Transparent Pricing{" "}
            </span>
            <p className="typography-h5">
              No hidden fees—just straightforward, competitive pricing.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default WhyChooseCrawler;
