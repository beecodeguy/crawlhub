import {
  DataDeliveryIcon,
  InfoIcon,
  SettingIcon,
  SpiderIcon,
} from "@/assets/icons";
import IconWrapper from "@/components/IconWrapper";
import JumpButton from "@/components/JumpButton";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import React from "react";

interface IProps {
  icon: string | StaticImport;
  title: string;
  description: string;
}

const ProcessInfo: React.FC<IProps> = ({ title, icon, description }) => (
  <div className="flex gap-[12px] px-2">
    <IconWrapper icon={icon} />
    <div>
      <span className="typography-h4">{title}</span>
      <p className="leading-[30px] text-[20px]">{description}</p>
    </div>
  </div>
);

const OurProcess = () => {
  return (
    <div className="mb-[128px]">
      <div className="container mx-auto flex gap-[128px] items-center">
        <div className="flex flex-col">
          <span className="typography-h2">Our Process: How It Works</span>
          <JumpButton
            whiteIcon
            label="Get Started"
            className="bg-primary text-white px-4 py-2 rounded-lg w-fit mt-[35px]"
          />
        </div>
        <div className="flex flex-col gap-5">
          <ProcessInfo
            icon={InfoIcon}
            title="Project Information"
            description="Initiate the process by providing the project information and data
        source such as web URL from which you seek to extract the data."
          />
          <ProcessInfo
            icon={SettingIcon}
            title="Initial Assessment"
            description="A meticulous, no-obligation evaluation of the data requirement, 
size and website’s complexity shall be assessed"
          />
          <ProcessInfo
            icon={SpiderIcon}
            title="Customized Quote"
            description="Following the assessment, a precise and transparent quote will be 
issued, tailored to the specific project needs."
          />
          <ProcessInfo
            icon={DataDeliveryIcon}
            title="Data Delivery"
            description="Upon approval, data will be extracted and delivered in the preferred 
format within the agreed timeframe."
          />
        </div>
      </div>
    </div>
  );
};

export default OurProcess;
