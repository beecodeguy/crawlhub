import {
  Customized,
  Explore,
  SupportAgent,
  TechComputer,
} from "@/assets/icons";
import Card from "@/components/Card";
import IconWrapper from "@/components/IconWrapper";
import JumpButton from "@/components/JumpButton";
import React from "react";

const WhatWouldYou = () => {
  return (
    <div className="pb-[56px]">
      <div className="flex flex-col gap-[40px] items-center bg-light-grey py-5">
      <span className="typography-h2">What Would You Like to Do?</span>
      <div className="flex gap-3">
        <Card className="h-[224px] w-[302px]">
          <div className="flex flex-col gap-4">
            <IconWrapper icon={Customized} />
            <p className="typography-h5">
              Obtain a customized, no-obligation quote.
            </p>
            <JumpButton label="Request a quote" />
          </div>
        </Card>
        <Card className="h-[224px] w-[302px]">
          <div className="flex flex-col gap-4">
            <IconWrapper icon={SupportAgent} />
            <p className="typography-h5">
              Get expert advice tailored to your needs.
            </p>
            <JumpButton label="Consult" />
          </div>
        </Card>
        <Card className="h-[224px] w-[302px]">
          <div className="flex flex-col gap-4">
            <IconWrapper icon={Explore} />
            <p className="typography-h5">
              Discover our tailored data extraction tools.
            </p>
            <JumpButton label="Explore" />
          </div>
        </Card>
        <Card className="h-[224px] w-[302px]">
          <div className="flex flex-col gap-4">
            <IconWrapper icon={TechComputer} />
            <p className="typography-h5">
              See how our tech boosts your business with reliable data.
            </p>
            <JumpButton label="Learn More" />
          </div>
        </Card>
      </div>
    </div>
    </div>
  );
};

export default WhatWouldYou;
