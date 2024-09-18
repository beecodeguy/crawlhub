import { BannerOne } from "@/assets/images";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const ManageCrawlers = () => {
  return (
    <div className="bg-gradient-custom container mx-auto flex flex-col lg:flex-row items-center justify-between">
      <div>
        <div className="flex flex-col gap-3">
          <div className="typography-h1">
            Unlocking the <br />
            Power of Data with Precise Extraction
          </div>
          <span className="typography-b1">
            Transform data into actionable insights with our hassle-free
            extraction service. Quick, customized, and cost-effective.
          </span>
        </div>
        <Button className="mt-6">Get Started</Button>
      </div>
      <Image src={BannerOne} height={398} width={584} alt="" />
    </div>
  );
};

export default ManageCrawlers;
