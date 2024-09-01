import {
  Support24,
  TailoredPrecision,
  TransparentPricing,
  UserCentric,
} from "@/assets/icons";
import Card, { CardContent } from "@/components/Card";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import React from "react";

interface IProps {
  icon: string | StaticImport;
  title: string;
  description: string;
}

const CrawlerContent: React.FC<IProps> = ({ icon, title, description }) => (
  <Card>
    <CardContent icon={icon} title={title} description={description} />
  </Card>
);

const WhyChooseCrawler = () => {
  return (
    <div className="flex mb-[128px] flex-col gap-[40px] items-center bg-light-grey py-5">
      <span className="typography-h2">Why Choose CrawlerHub?</span>
      <div className="flex gap-3">
        <CrawlerContent
          icon={TailoredPrecision}
          title="Tailored Precision"
          description="Customized data extraction, delivering exactly what you need—no
          more, no less."
        />

        <CrawlerContent
          icon={Support24}
          title="24/7 Support"
          description="Around-the-clock services and support to ensure seamless data
              extraction anytime."
        />

        <CrawlerContent
          icon={UserCentric}
          title="User-Centric Experience"
          description="Hassle-free process, so you can focus on results, not the
              technicalities."
        />

        <CrawlerContent
          icon={TransparentPricing}
          title="Transparent Pricing"
          description="No hidden fees—just straightforward, competitive pricing."
        />
      </div>
    </div>
  );
};

export default WhyChooseCrawler;
