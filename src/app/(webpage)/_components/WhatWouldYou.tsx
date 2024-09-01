import {
  Customized,
  Explore,
  SupportAgent,
  TechComputer,
} from "@/assets/icons";
import Card, { CardContent } from "@/components/Card";
import IconWrapper from "@/components/IconWrapper";
import JumpButton from "@/components/JumpButton";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import React from "react";

interface IProps {
  icon: string | StaticImport;
  buttonLabel: string;
  description: string;
}

const WhyWouldYouContent: React.FC<IProps> = ({
  icon,
  buttonLabel,
  description,
}) => (
  <Card className="h-[224px] w-[302px]">
    <CardContent
      icon={icon}
      description={description}
      button={{ label: buttonLabel }}
    />
  </Card>
);

const WhatWouldYou = () => {
  return (
    <div className="pb-7">
      <div className="flex flex-col gap-5 items-center bg-light-grey py-4">
        <span className="typography-h2">What Would You Like to Do?</span>
        <div className="flex gap-2">
          <WhyWouldYouContent
            icon={Customized}
            buttonLabel="Request a quote"
            description="Obtain a customized, no-obligation quote."
          />
          <WhyWouldYouContent
            icon={SupportAgent}
            buttonLabel="Consult"
            description="Get expert advice tailored to your needs."
          />
          <WhyWouldYouContent
            icon={Explore}
            buttonLabel="Explore"
            description="Discover our tailored data extraction tools."
          />
          <WhyWouldYouContent
            icon={TechComputer}
            buttonLabel="Learn More"
            description="See how our tech boosts your business with reliable data."
          />
        </div>
      </div>
    </div>
  );
};

export default WhatWouldYou;
