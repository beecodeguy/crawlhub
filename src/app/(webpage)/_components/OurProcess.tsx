import { InfoIcon } from "@/assets/icons";
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
  <div className="flex gap-2 px-3">
    <IconWrapper icon={icon} />
    <div>
      <span className="typography-h4">{title}</span>
      <p className="leading-[30px] text-[20px]">{description}</p>
    </div>
  </div>
);

const OurProcess = () => {
  return (
    <div>
      <div className="page-container flex gap-[128px] items-center">
        <div className="flex flex-col">
          <span className="typography-h2">Our Process: How It Works</span>
          <JumpButton
            label="Get Started"
            className="bg-primary text-white px-5 py-3 rounded-lg w-fit mt-[35px]"
          />
        </div>
        <div className="flex flex-col gap-[40px]">
          <ProcessInfo
            icon={InfoIcon}
            title="Project Information"
            description="Initiate the process by providing the project information and data
        source such as web URL from which you seek to extract the data."
          />
          <ProcessInfo
            icon={InfoIcon}
            title="Project Information"
            description="Initiate the process by providing the project information and data
        source such as web URL from which you seek to extract the data."
          />
          <ProcessInfo
            icon={InfoIcon}
            title="Project Information"
            description="Initiate the process by providing the project information and data
        source such as web URL from which you seek to extract the data."
          />
          <ProcessInfo
            icon={InfoIcon}
            title="Project Information"
            description="Initiate the process by providing the project information and data
      source such as web URL from which you seek to extract the data."
          />
        </div>
      </div>
    </div>
  );
};

export default OurProcess;
