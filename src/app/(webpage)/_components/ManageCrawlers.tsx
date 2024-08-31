import { BannerOne } from "@/assets/images";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const ManageCrawlers = () => {
  return (
    <div className="container mx-auto flex items-center mb-[128px]">
      <div>
        <div className="flex flex-col gap-3">
          <div className="typography-h1">
            We build and manage <span className="text-primary">Crawlers</span>{" "}
            for you.
          </div>
          <span className="leading-[30px] text-[20px]">
            Are you ready to unlock the full potential of your
            <br /> business with powerful, precise, and personalized data?
          </span>
        </div>
        <Button className="mt-6">Get Started</Button>
      </div>
      <Image src={BannerOne} height={398} width={584} alt="" />
    </div>
  );
};

export default ManageCrawlers;
