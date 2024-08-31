import {
  CustomDataExtraction,
  CustomWebCrawlers,
  FlexibleDataDelivery,
  RealTimeDataExtraction,
} from "@/assets/images";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";

interface IProps {
  icon: string | StaticImport;
  title: string;
  description: string;
}

const OurServiceContent: React.FC<IProps> = ({ icon, title, description }) => (
  <div className="bg-light-grey">
    <div className="grid place-items-center px-[108px] py-4">
      <Image src={icon} alt="" height={235} width={400} />
    </div>
    <div className="p-3 bg-white mb-4">
      <span className="typography-h4">{title}</span>
      <p className="leading-[30px] text-[20px]">{description}</p>
    </div>
  </div>
);

const OurServices = () => {
  return (
    <div className="container mx-auto mb-[128px] flex flex-col gap-5 items-center justify-center">
      <span className="typography-h2">What Would You Like to Do?</span>
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
