import {
  CustomDataExtraction,
  CustomWebCrawlers,
  FlexibleDataDelivery,
  RealTimeDataExtraction,
} from "@/assets/images";
import JumpButton from "@/components/JumpButton";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";

interface IProps {
  icon: string | StaticImport;
  title: string;
  description: string;
}

const OurServiceContent: React.FC<IProps> = ({ icon, title, description }) => (
  <div className="bg-grey-light hover:bg-white hover:border-secondary-foreground border border-[#fff] hover:border w-[598px] p-4 flex flex-col items-center gap-6">
    <Image src={icon} alt="" height={235} width={400} />
    <div className="flex flex-col gap-4">
      <span className="typography-h4">{title}</span>
      <p className="typography-b1">{description}</p>
      <JumpButton label="Learn More" className="hover:bg-transparent" />
    </div>
  </div>
);

const OurServices = () => {
  return (
    <div className="container mx-auto mb-[128px] flex flex-col gap-5 items-center justify-center">
      <span className="typography-h2">Our Services</span>
      <div className="grid grid-cols-2 gap-6">
        <OurServiceContent
          title="Custom Data Extraction"
          description="Tailor-made web crawlers built to capture exactly the data you need."
          icon={CustomDataExtraction}
        />
        <OurServiceContent
          title="Flexible Data Delivery"
          description="Receive extracted data in any format you 
prefer—CSV, JSON, XML, and more."
          icon={FlexibleDataDelivery}
        />
        <OurServiceContent
          title="Real-Time Data Extraction"
          description="Continuously access live data with our real-time extraction services easily manageable via applications."
          icon={RealTimeDataExtraction}
        />
        <OurServiceContent
          title="Custom Web Crawlers"
          description="Tailor-made web crawlers built to capture exactly the data you need."
          icon={CustomWebCrawlers}
        />
      </div>
    </div>
  );
};

export default OurServices;
